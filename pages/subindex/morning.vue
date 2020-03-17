<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<view class="top">
			<view class="top_enlarge"  @tap="service.returns()">
				<image src="/static/image/com_page/returns.png" mode="widthFix"></image>
			</view>
			<text>早间晨语</text>
			<view class="screen">
				<image src="../../static/image/index/screen.png" mode="widthFix"></image>
				<text>筛选</text>
			</view>
		</view>
		<view class="m_box">
			<view class="box_list" v-for="(item,index) in data" :key="item.id">
				<view class="list_logo">
					<view class="logo">
						<image :src="$api_img() + item.logo" mode="scaleToFill"></image>
					</view>
					<view class="logo_test">
						<view class="test_top">
							{{item.name}}
						</view>
						<view class="test_btm">
							{{item.spoke}}
						</view>
					</view>
				</view>
				<view class="list_content">
					{{item.content}}
				</view>
				<view class="list_img">
					<image :src="$api_img() + item.image" mode=""></image>
				</view>
				<view class="list_time">
					{{service.Test(item.create_time)}}
				</view>
				<view class="list_oper">
					<view class="oper">
						<image src="../../static/image/index/oper1.png" mode="widthFix"></image>
						<view class="">
							图片下载
						</view>
					</view>
					<view class="oper" @tap="copy(item.content)">
						<image src="../../static/image/index/oper2.png" mode="widthFix"></image>
						<view class="">
							文案复制
						</view>
					</view>
					<view class="oper">
						<image src="../../static/image/index/oper3.png" mode="widthFix"></image>
						<view class="">
							一键转发
						</view>
					</view>
				</view>
			</view>
		</view>
		
		
		
	</view>
</template>

<script>
	import js_sdk from '../../js_sdk/ican-H5Api/ican-H5Api.js'
	export default{
		
		data(){
			return{
				data:''
			}
		},
		methods:{
			copy(data) {
				uni.setClipboardData({
					data: data,
					success: function(res) {
						uni.showToast({
							icon: 'none',
							title: '复制成功'
						})
					}
				})
			},
		},
		onShow() {
			this.service.entire(this,'get',this.APIconfig.api_root.subindex.getMorningnew,{ //
				page:1
			},function(self,res){
				console.log(res)
				self.data = res.data
				console.log(self.data)
			})
		}
	}
</script>

<style lang="scss">
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
		.screen{
			width: 180rpx;	
			display: flex;
			align-items: center;
			justify-content: flex-end;
			image{
				margin-right: 12rpx;
				width: 30rpx;
				height: 34rpx;
			}
			text{
				font-size: 30rpx;
				font-weight: 400;
				display: inline-block;
				text-align: right;
			}
		}
		
		image{
			height: 40rpx;
			width: 40rpx;
		}
	}
	.m_box{
		.box_list{
			padding:  20rpx;
			margin-bottom: 20rpx;
			border-bottom: 2rpx solid #F2F2F2;
			.list_logo{
				display: flex;
				align-items: center;
				.logo{
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
					overflow: hidden;
					margin-right: 32rpx;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.logo_test{
					font-size: 28rpx;
					height: 80rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.test_btm{
						font-size: 24rpx;
						color: #999999;
					}
				}
				
			}
			.list_content{
				font-size: 24rpx;
				line-height: 36rpx;
				margin: 42rpx 0 30rpx 0;
			}
			.list_time{
				font-size: 24rpx;
				color: #999999;
				margin: 34rpx 0 30rpx 0;
			}
			.list_oper{
				display: flex;
				justify-content: space-between;
				.oper{
					font-size: 24rpx;
					color: #333333;
					text-align: center;
					image{
						height: 50rpx;
						width: 50rpx;
					}
				}
			}
		}
	}
</style>
