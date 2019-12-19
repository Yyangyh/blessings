<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		
		<returns :titles='title'></returns>
		<view class="" v-if="comments.length != 0">
			<view class="user_comment" v-for="(item,index) in comments" :key='item.id'>
				<view class="user">
					<view class="user_one">
						<image class="user_img"  :src="APIconfig.api_img +item.avatar" mode="widthFix"></image>
						<view class="user_test" >
							<view>{{item.username}}</view>
						</view>
					</view>
					<view class="user_star">
						<view class="">
							<image v-for="(item,index) in item.rating_num" src="/static/image/com_page/stars.png" mode="widthFix"></image>
						</view>
						<text>{{service.Test(item.created_at)}}</text>
					</view>
				</view>
				<view class="com_content">
					<view class="content_test">
						<view class="">
							{{item.content}}
						</view>
					</view>
					<!-- <view class="content_img">
						<image v-for="(item,index) in comments.images" :key='index' :src="item" mode=""></image>
					</view>
					 -->
				</view>
			</view>
		</view>
		<view class="lack_img" v-else-if="comments.length === 0">
			<view class="">
				暂无评论
			</view>
			<image  src="/static/image/com_page/lack.png" mode="widthFix"></image>
			
		</view>
		
		<view class="mask_black" v-show="show"  @tap="show = !show">
			
		</view>
		
		<view class="com_box">
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
		<load v-if="load_show"></load>
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	import load from '../common/load.vue'
	export default{
		components:{
			returns,
			load
		},
		data(){
			return{
				title:'全部评论',
				comments:'',
				show:false,
				imgList:[
					{src:'/static/image/com_page/kongstart.png'},
					{src:'/static/image/com_page/kongstart.png'},
					{src:'/static/image/com_page/kongstart.png'},
					{src:'/static/image/com_page/kongstart.png'},
					{src:'/static/image/com_page/kongstart.png'}
				],
				branch:'',
				com_text:'',
				load_show:true
			}
		},
		methods:{
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
				this.service.entire(this,'post',this.APIconfig.api_root.com_page.v_putEvaluate,{
					userid:this.$store.state.user.id,
					video_id:this.id,
					grade:this.branch,
					content:this.com_text
				},function(self,res){
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
			Index(){
				this.service.entire(this,'get',this.APIconfig.api_root.com_page.v_evaluate,{
					userid:this.$store.state.user.id,
					video_id:this.id,
					page:1,
					limit:20
				},function(self,res){
					console.log(res)
					self.comments = res.data.data
					self.load_show = false
				})
			}
		},
		onLoad(e) {
			this.id = e.id
			this.Index()
		},
		onShow() {
		}
	}
</script>

<style lang="scss">
	.lack_img{
		text-align: center;
		padding-top: 80rpx;
		font-size: 28rpx;
		color: #999;
		image{
			height: 310rpx;
			width: 310rpx;
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
	.com_box{
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
