<template>
	<view class="content">
		<view class="status_bar">
							
		</view >
		<view class="top">
			<view class="image">
				<image src="/static/image/subuser/per-return.png" @tap="service.returns()" mode="widthFix"></image>
			</view>
			<text>个人资料</text>
		</view>	
		<view class="per_box">
			<view class="box_top">
				<image class="photo" src="/static/image/brokerage/photo.png" mode="widthFix"></image>
				<view @click="reveal=true">修改头像></view>
			</view>
			<view class="bank">
				<view class="line" @tap="$jump('./alter')">
					<view class="l_felt">
						<image src="/static/image/subuser/nicheng.png" mode="widthFix"></image>
						<text>昵称</text>
					</view>
					<view class="l_right">
						<text>牛哄哄</text>
						<image src='/static/image/index/go.png' mode="widthFix"></image>
					</view>
				</view>
				<hr />
				<view class="line">
					<view class="l_felt">
						<image src="/static/image/subuser/dengji.png" mode="widthFix"></image>
						<text>会员等级</text>
					</view>
					<view class="l_right">
						<text>普通会员</text>
						<image src='/static/image/index/go.png' mode="widthFix"></image>
					</view>
				</view>
				<hr />
				<view class="line">
					<view class="l_felt">
						<image src="/static/image/subuser/phone.png" mode="widthFix"></image>
						<text>手机号码</text>
					</view>
					<view class="l_right">
						<text>155123456578</text>
						<image src='/static/image/index/go.png' mode="widthFix"></image>
					</view>
				</view>
				<hr />
				<button type="default">确认</button>
				<hr />
			</view>
		</view>
		
		<!-- 修改头像弹框 -->
		<view class="mask_black" v-if="reveal">
			
		</view>
		<view class="bk" v-if="reveal">
			<view style="border-bottom: 1rpx solid#EEEEEE;border-radius:20rpx 20px 0 0">相机</view>
			<view style='margin-bottom: 20rpx;border-radius:0 0 20rpx 20px'>相册</view>
			<view style="border-radius:20px" @click="reveal=false">取消</view>
		</view>
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
		export default{
			data(){
				return{
					reveal:false
					
				}
			}
		}
	</script>
</script>

<style lang="scss">
	.content{
		.top{
			position: fixed;
			width: 100%;
			top: var(--status-bar-height);
			left: 0;
			display: flex;
			height:226rpx;
			padding: 31rpx 0 0;
			background:linear-gradient(49deg,rgba(245,110,106,1) 0%,rgba(247,76,74,1) 100%);
			z-index: 99;
			.image{
				width:18rpx;
				height:31rpx;
				margin-left: 40rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			text{
				font-size: 32rpx;
				margin: 0 auto;
				color:#FFFFFF
			}
		}
		.per_box{
			width:750rpx;
			height:960rpx;
			background:rgba(255,255,255,1);
			border-radius:20rpx 20rpx 0rpx 0rpx;
			margin-top: -20rpx;
			z-index: 100;
			position: absolute;
			top:194rpx;
			left:0;
			.box_top{
				.photo{
					width: 120rpx;
					height: 120rpx;
					display: block;
					margin: -60rpx auto 0;
				}
				view{
					font-size: 24rpx;
					color:#323232;
					text-align: center;
					margin-top: 5rpx;
				}
			}
			.bank{
				margin-top: 30rpx;
				button{
					width:684rpx;
					height:80rpx;
					background:rgba(216,0,0,1);
					border-radius:40rpx;
					color:#FFFFFF;
					text-align: center;
					line-height: 80rpx;
					margin: 70rpx auto;
				}
				hr{
					height:1rpx;
					border: none;
					border-top:1px solid #F4F4F4;
					width: 96%;
					margin: 0 auto;
				}
				.line{
					display: flex;
					align-content:center ;
					padding: 30rpx 30rpx 30rpx 21rpx; 
					justify-content: space-between;
					.l_felt{
						display: flex;
						align-items: center;
						image{
							width: 34rpx;
							height: 34rpx;
							margin-right: 20rpx;
						}
						text{
							font-size: 24rpx;
							color:#323232;
						}
					}
					.l_right{
						display: flex;
						align-items: center;
						text{
							font-size: 24rpx;
							color:#666666;
							margin-right: 15rpx;
						}
						image{
							width: 12rpx;
							height: 22rpx;
						}
					}
				}
			}
		}
		.bk{
			width:100%;
			position: fixed;
			left: 50%;
			transform: translateX(-50%);
			bottom:70rpx;
			z-index: 900;
			text-align: center;
			view{
				width: 710rpx;
				height: 100rpx;
				background: #FFFFFF;
				font-size: 32rpx;
				color: #32A6FF;
				text-align: center;
				line-height: 100rpx;
				margin: 0 auto;
			}
		}
	}
	
	
</style>
