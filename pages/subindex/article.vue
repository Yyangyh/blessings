<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<share ref="share" :datas='share_arr'></share>
		<view class="top">
			<image src="../../static/image/com_page/returns.png" @tap="service.returns()" mode="widthFix"></image>
			<text>文章</text>
			<image  @tap="tips" src='../../static/image/subhome/share.png'></image>
		</view>
		<hr />
		<view>
			<view class="title_top" >
				<view class="t_left">
					<view class="title">{{dataList.title}}</view>
					<view class="times">{{dataList.add_time}}</view>
					<view class=" graded">
						<view class="start">
							<image src="../../static/image/subhome/start.png" mode="widthFix" v-for="(item,index) in dataList.rating_num" :key='index'></image>
							
						</view>
						<view class="time">{{dataList.grade}}</view>
						<view class="time">{{dataList.access_count}}次观看</view>
					</view>
				</view>
				<image v-if="dataList.is_lighten == -1" class="t_right" src="/static/image/com_page/collect.png" mode="widthFix" @tap="collection"></image>
				<image v-else-if="dataList.is_lighten == 1"  class="t_right" src="../../static/image/com_page/collect_HL.png" mode="widthFix"  @tap="collection" ></image>
			</view>
			<view class="rich" v-if="video_content">
				<rich-text :nodes="video_content"></rich-text>
			</view>
		</view>
		<!-- 用户评论 -->
		<view class="user_top">
			<view class="">
				用户评论
			</view>
			<view class="" @tap="$jump('./comment?id='+ id)"  v-if="data_list.length != 0">
				全部
			</view>
		</view>
		<view class="user_comment" v-for="(item,index) in data_list" :key='item.id' v-if="data_list.length != 0">
			 <!--  -->
			<view class="user">
				<view class="user_one">
					<image class="user_img" :src="$api_img() +item.commenter.avatar" mode="widthFix"></image>
					 <!--  -->
					<view class="user_test" >
						<view>{{item.create_time}}</view>
						<!-- v-for="(item,index) in item.rating_num" -->
					</view>
				</view>
				<view class="user_star">
					<view class="">
						<image  src="/static/image/com_page/stars.png" mode="widthFix" v-for="(item,index) in item.rating_nums"></image>
						<!-- v-for="(item,index) in item.rating_num" -->
					</view>
					<!-- <text>{{item.content}}</text> -->
				
				</view>
			</view>
			<view class="com_content">
				<view class="content_test">
					<view class="">
					
						{{item.content}}
					</view>
				</view>
			</view>
		</view>
		<view class="lack_img"  v-if="data_list.length == 0">
			<!-- -->
			<image  src="/static/image/com_page/lack.png" mode="widthFix"></image>
			<view class="">
				暂无评论
			</view>
		</view>
		<view class="mask_black" v-show="show"  @tap="show = !show">
			
		</view>
		<view class="com_box" >
			<view class="box_left" @tap="show = !show">
				请发表你的评论
			</view>
			<view class="box_right" @tap="show = !show">
				发表
			</view>
		</view>
		<view class="write" :class="show?'show':'Noshow'">
			<view class="w_title">觉得怎么样，打个星吧~</view>
			<view class="start">
				<image v-for="(item,index) in imgList" :key='index' :src="item.src" @tap="chiose(index)"></image>
			</view>
			<textarea v-model="com_text" value="" placeholder="请发表你的评论" />
			<button @tap="publish">发表</button>
		</view>
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	import share from'../common/share.vue'
	export default{
		components:{
			returns,
			share
		},
		data(){
			return{
				title:'文章',
				dataList:'',
				data_list:'',
				video_content:'',
				show:false,
				id:'',
				com_text:'',
				show:false,
				imgList:[
					{src:'/static/image/com_page/kongstart.png'},
					{src:'/static/image/com_page/kongstart.png'},
					{src:'/static/image/com_page/kongstart.png'},
					{src:'/static/image/com_page/kongstart.png'},
					{src:'/static/image/com_page/kongstart.png'}
				],
				share_arr:{},
				
			}
		},
		methods:{
			tips(){ //分享
				// #ifdef H5
				uni.showModal({
				    title: '提示',
				    content: '请点击右上角选择分享！',
					showCancel:false,
				    success: function (res) {
				       
				    }
				});
				// #endif
				// #ifdef APP-PLUS
				this.$refs.share.share();
				// #endif
			},
			publish(){
				if(!this.branch){
					uni.showToast({
						icon:'none',
						title:'请选择星级打分！'
					})
					return
				}
				if(!this.com_text){
					uni.showToast({
						icon:'none',
						title:'输入评论内容！'
					})
					return
				}
				this.service.entire(this,'post',this.APIconfig.api_root.subindex.s_article_comment,{
					mid:this.$store.state.user.id,
					aid:this.id,//文章id
					grade:this.branch,
					content:this.com_text
				},function(self,res){
					console.log(res)
					console.log(res)
					uni.showToast({
						icon:'none',
						title:res.msg
					})
					if(res.code == 0){
						self.show = false
						self.Index()
					}
				})
			},
			chiose(index){
				this.branch = index + 1
				for (var j = 0; j<this.imgList.length;j++) {
					this.imgList[j].src = '/static/image/com_page/kongstart.png'
				}
				for (var i = 0; i<=index; i++) {
					this.imgList[i].src = '/static/image/com_page/bigstart.png'
				}
			},
			collection(){
				let times = this.service.loading()
				this.service.entire(this,'get',this.APIconfig.api_root.subindex.s_favoriteArticle,{
					aid:this.id,
					user_id:this.$store.state.user.id
				},function(self,res){
					uni.hideLoading()
					clearTimeout(times)
					if(res.code == 0){
						self.dataList.is_lighten == 1? self.dataList.is_lighten = -1 :self.dataList.is_lighten = 1
					}
				})
			}
		},
		onLoad(e) {
			this.id = e.id
			this.share_arr.Url = 'http://www.wufu-app.com/h5/#/pages/subindex/article?id='+e.id
			this.service.entire(this,'get',this.APIconfig.api_root.subindex.s_getArticleDetail,{//获取文章
				aid:e.id,
				user_id:this.$store.state.user.id
			},function(self,res){
				console.log(res)
				
				self.share_arr.Title =  res.data.title//分享
				// self.share_arr.Summary =  res.data.video.long_title//分享
				self.share_arr.ImageUrl = self.$api_img() + res.data.images[0]//分享
				
				self.dataList = res.data
				
				let richtext=  res.data.content
				const regex = new RegExp('<img', 'gi');
				richtext= richtext.replace(regex, `<img style="max-width: 100%;"`);
				self.video_content = richtext;
				
				self.dataList.rating_num = new Array(Number(self.dataList.grade))
				console.log(self.dataList)
			})
			
			this.service.entire(this,'get',this.APIconfig.api_root.subindex.s_getCommentByAid,{ //用户评论
				aid:this.id,
			},function(self,res){
				self.data_list = res.data
				console.log(self.data_list)
				for (let s of self.data_list) {
					s.rating_nums = new Array(Number(s.grade))
				}
			})
		}
	}
</script>

<style lang="scss">
	.content{
		padding-bottom:120rpx ;
		.user_top {
			display: flex;
			justify-content: space-between;
			font-weight: bold;
			font-size: 28rpx;
			padding: 20rpx;
			view{
				&:nth-of-type(2){
					color: #EF7C38;
				}
			}
			
		}
		.user_comment {
			background: #fff;
			border-bottom: 2rpx solid #EEEEEE;
			padding: 20rpx 30rpx;
			.user {
					display: flex;
					justify-content: space-between;
					margin: 20rpx 0;
					.user_one{
						display: flex;
						.user_img {
							width: 90rpx;
							height: 90rpx;
							border-radius: 50%;
						}
						.user_test {
							margin: 0 20rpx;
							font-size: 32rpx;
							view {
								font-weight: bold;
								color: #333333;
								font-size: 28rpx;
							}
							
						}
					}
					.user_star {
						align-self: flex-start;
						font-size: 24rpx;
						color: #333333;
						image {
							height: 26rpx;
							width: 26rpx;
						}
						text {
							font-size: 24rpx;
							color: #999999;
							
						}
					}
				}
			.com_content {
				.content_test view {
					font-size: 24rpx;
					color: #666666;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
				}
				.content_img image {
					height: 120rpx;
					width: 120rpx;
					margin-right: 16rpx;
					margin-top: 30rpx;
				}
				.more {
					font-size: 32rpx;
					color: #666666;
					margin: 20rpx 0;
				}
				
			}
		}
		.lack_img{
			text-align: center;
			padding-top: 30rpx;
			font-size: 28rpx;
			color: #999;
			image{
				height: 310rpx;
				width: 310rpx;
			}
		}
	}
	.top{
		position: fixed;
		width: 100%;
		z-index: 886;
		box-sizing: border-box;
		top: var(--status-bar-height);
		left: 0;
		display: flex;
		height: 105rpx;
		padding: 0 30rpx;
		font-size: 32rpx;
		justify-content: space-between;
		align-items: center;
		background-color: #FFFFFF;
		
		image:first-child{
			width: 31rpx;
			height: 31rpx;
		}
		image:last-child{
			width: 50rpx;
			height: 50rpx;
		}
	}
	hr{
		border: none;
		height: 1rpx;
		border-bottom:1rpx solid #F6F6F7;
	}
	.title_top{
		width: 100%;
		align-items: center;
		display: flex;
		justify-content:space-between;
		margin-bottom: 20rpx;
		.title{
			font-size: 28rpx;
			padding: 33rpx 20rpx 20rpx 20rpx;
		}
		.times{
			font-size: 24rpx;
			color: #999999;
			margin: 0 0 25rpx 0;
			padding-left: 20rpx;
		}
		.graded{
			display: flex;
			align-items:center ;
			padding-left: 20rpx;
			.start{
				display: flex;
				image{
					width: 25rpx;
					height: 25rpx;
					margin-right: 12rpx;
				}
			}
			.time{
				font-size: 24rpx;
				color: #999999;
				margin-right:30rpx ;
			}
		}
		.t_right{
			width: 44rpx;
			height: 44rpx;
			margin:80rpx 30rpx 0 0;
		}
	}
	.rich{
		padding: 0 20rpx;
	}
	.com_box{
		background: #fff;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-content: center;
		font-size: 24rpx;
		padding: 0 20rpx;
		box-sizing: border-box;
		height: 120rpx;
		border-top: 2rpx solid #F2F2F2;
		padding-top: 20rpx;
		.box_left{
			flex-grow: 2;
			border: 2rpx solid #999999;
			height: 60rpx;
			line-height: 60rpx;
			border-radius: 60rpx;
			padding: 0 31rpx;
			color: #999999;
		}
		.box_right{
			background:linear-gradient(90deg,rgba(247,76,74,1),rgba(245,110,106,1));
			border-radius:10rpx;
			width:100rpx;
			text-align: center;
			line-height: 60rpx;
			height:60rpx;
			color: #fff;
			margin-left: 44rpx;
		}
	}
	.write{
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 998;
		width: 100%;
		height: 416rpx;
		background:#F6F6F6 ;
		padding: 30rpx 20rpx;
		transform: translateY(100%);
		transition: .3s;
		.w_title{
			font-size: 24rpx;
			color:#666666;
		}
		.start{
			margin-top: 20rpx;
			display: flex;
			image{
				width: 41rpx;
				height: 41rpx;
				margin: 20rpx 10rpx;
			}
		}
		textarea{
			font-size: 24rpx;
			color:#999999;
			padding: 10rpx ;
			width: 690rpx;
			height: 170rpx;
			background-color: #FFFFFF;
			border: 1rpx solid #999999;
			margin-top: 20rpx;
		}
		button{
			width:120rpx;
			height:60rpx;
			background:linear-gradient(90deg,rgba(247,76,74,1),rgba(245,110,106,1));
			border-radius:10rpx;
			color: #FFFFFF;
			font-size: 24rpx;
			line-height: 60rpx;
			text-align: center;
			margin: 20rpx 0 0 600rpx;
		}
	}
	.show{
		transform: translateY(0);
	}
	.Noshow{
		transform: translateY(100%);
	}
</style>
