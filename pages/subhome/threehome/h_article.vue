<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<share ref="share" :datas='share_arr'></share>
		<view class="top">
			<image src="../../../static/image/com_page/returns.png" @tap="service.returns()" mode="widthFix"></image>
			<text>文章</text>
			<image  @tap="tips" src='../../../static/image/subhome/share.png'></image>
		</view>
		<hr />
		<view>
			<view class="title_top" >
				<view class="t_left">
					<view class="title">{{dataList.title}}</view>
					<view class="times">{{service.Test(dataList.add_time)}}</view>
					<view class=" graded">
					
					</view>
				</view>
				<!-- <image v-if="dataList.favor_count == 0" class="t_right" src="/static/image/com_page/collect.png" mode="widthFix" @tap="collection"></image>
				<image v-else-if="dataList.favor_count == 1"  class="t_right" src="../../../static/image/com_page/collect_HL.png" mode="widthFix"  @tap="collection" ></image> -->
			</view>
			<view class="rich">
				<rich-text :nodes="video_content"></rich-text>
			</view>
		</view>
		<!-- #ifdef H5 -->
		
		<view class="download" @tap="$jump('../../login/reg?code='+code)">
			下载APP观看精彩内容
		</view>
		
		<!-- #endif -->
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	import share from'../../common/share.vue'
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
				show:false,
				id:'',
				video_content:'',
				share_arr:{},
				code:''
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
				
					this.$refs.share.share()
				// #endif
			},
			collection(){
				let times = this.service.loading()
				this.service.entire(this,'post',this.APIconfig.api_root.subhome.f_favor,{
					id:this.id,
					mid:this.$store.state.user.id
				},function(self,res){
					uni.hideLoading()
					clearTimeout(times)
					if(res.code == 0){
						self.dataList.favor_count == 1? self.dataList.favor_count = 0 :self.dataList.favor_count = 1
					}
				})
			}
		},
		onLoad(e) {
			this.id = e.id
			if(e.code) this.code = e.code
			this.share_arr.Url = 'https://www.wufu-app.com/h5/#/pages/subhome/threehome/h_article?id='+e.id
			this.service.entire(this,'post',this.APIconfig.api_root.subhome.f_detail,{//获取文章
				id:e.id,
				// user_id:this.$store.state.user.id
			},function(self,res){
				self.share_arr.Title =  res.data.title//分享
				self.share_arr.Summary =  res.data.desc//分享
				self.share_arr.ImageUrl = self.$api_img() + res.data.cover//分享
				
				self.dataList = res.data
				
				let richtext=  res.data.content
				const regex = new RegExp('<img', 'gi');
				richtext= richtext.replace(regex, `<img style="max-width: 100%;"`);
				self.video_content = richtext;
				
				self.dataList.rating_num = new Array(Number(self.dataList.grade))
			})
			// this.service.entire(this,'post',this.APIconfig.api_root.subhome.threehome.g_browse,{//增加文章阅读
			// 	id:e.id,
			// 	mid:this.$store.state.user.id
			// },function(self,res){
			// })
		}
	}
</script>

<style lang="scss">
	.content{
		padding-bottom:120rpx ;
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
	.download{
		width: 100%;
		background: #fff;
		position: fixed;
		color: #FE0000;
		background: #FCCF00;
		left: 0;
		bottom: 0rpx;
		box-sizing: border-box;
		height: 80rpx;
		line-height: 80rpx;
		padding: 0 21rpx;
		text-align: center;
	}
</style>
