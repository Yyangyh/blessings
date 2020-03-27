<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<view class="top">
			<view class="top_enlarge"  @tap="service.returns()">
				<image src="/static/image/com_page/returns.png" mode="widthFix"></image>
			</view>
			<text>推广码</text>
			<text @tap="preservation">保存图片</text>
		</view>
		<view class="back_img"  @longtap="longtap">
			<image :src="$api_img() + code_img" mode="widthFix"></image>
		</view>
		<!-- <view class="pages"  @longtap="longtap">
			<image :src="$api_img() + code_img" mode="widthFix"></image>
			<view class="">
				我是幸福使者：{{user.username}}
			</view>
		</view> -->
	</view>
</template>

<script>
	import js_sdk from '../../../js_sdk/ican-H5Api/ican-H5Api.js'
	import returns from '../../common/returns.vue'
	import { mapState } from 'vuex'
	export default{
		components:{
			returns
		},
		computed:{
			...mapState({
				user:'user'
			})
		},
		data(){
			return{
				title:'我的邀请码',
				code_img:'',
				bg:'',
			}
		},
		methods:{
			longtap(){
			},
			preservation(){
				// #ifdef APP-PLUS
				let Url = this.$api_img()+this.code_img
				//在app内运行
				let filename = Math.random() + ".png"
				plus.downloader.createDownload(Url, {
					filename: "_downloads/" + filename
				}, (download, status) => {
					if (status == 200) { //下载成功  
						plus.gallery.save(download.filename, () => {
							uni.hideLoading();
							uni.showToast({
								icon: 'none',
								title: '保存成功！'
							});
						})
					}
				}).start()
				// #endif
			}
		},
		onShow() {
			this.service.entire(this,'post',this.APIconfig.api_root.subuser.u_InviteCode,{
				user_id:this.$store.state.user.id,
				url:this.$api_img() + '/h5/#/pages/login/reg'
			},function(self,res){
				self.code_img = res.data.invite_code_img
				self.bg = res.data.bg
			})
		}
	}
</script>

<style lang="scss">
	page{
		// background: #ff6b55;
	}
	.content{
		width: 100%;
		overflow-y: hidden;
		.top{
			height: 105rpx;
			padding: 0 44rpx;
			width: 100%;
			box-sizing: border-box;
			position: fixed;
			top: var(--status-bar-height);
			z-index: 333;
			left: 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 32rpx;
			font-weight: bold;
			color: #333333;
			background: #fff;
			box-shadow:0px 2rpx 4rpx 0px rgba(0, 0, 0, 0.1);
			.top_enlarge{
				display: flex;
				align-items: center;
				height: 100%;
				width: 180rpx;
			}
			text:nth-of-type(2){
				width: 180rpx;
				font-size: 30rpx;
				font-weight: 400;
				display: inline-block;
				text-align: right;
			}
			image{
				height: 40rpx;
				width: 40rpx;
			}
		}
		.back_img{
			// position: fixed;
			// z-index: 80;
			// top: calc(105rpx + var(--status-bar-height));
			// left: 0;
			// width: 100%;
			image{
				width: 100%;
			}
		}
		.pages{
			// padding: 10rpx;
			background:rgba(255,255,255,1);
			box-shadow:0px 8rpx 7rpx 1rpx rgba(51,174,244,0.25);
			border-radius:10rpx;
			position: fixed;
			left: 50%;
			transform: translateX(-50%);
			bottom: 200rpx;
			z-index: 100;
			text-align: center;
			font-size: 24rpx;
			view{
				margin: 12rpx 0;
			}
			image{
				width: 342rpx;
				height: 342rpx;
				margin: 12rpx 12rpx 0 12rpx;
			}
		}
	}
</style>
