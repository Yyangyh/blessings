<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<returns :titles='title'></returns>
		<view class="worp">
			<view class="top">
				<image src='../../../static/image/brokerage/photo.png' mode="widthFix"></image>
				<view class="msg">
					<view>老胡</view>
					<view>123456789012</view>
					<view>推荐人：哪啊怒放</view>
				</view>
			</view>
			<view class="line">
				<text>我的邀请码:</text>
				<text>1234</text>
			</view>
			<hr />
			<view class="line1" @tap="$jump('./invite')">
				<text class="">我的推广二维码</text>
				<image src='../../../static/image/brokerage/QR.png' mode="widthFix"></image>
			</view>
			<hr />
			<view class="line2">
				<view>
					<view class="money">9999.99</view>
					<view class="textss">可提现佣金（元）</view>
				</view>
				<view class="btn" @tap="$jump('./withdraw')">提现佣金</view>
			</view>
		</view>
		<view class="classify">
			<view class="box">
				<view class="box-list" style="border: 1rpx solid #EEEEEE;"  @tap="$jump('./sales')">
					<image src="../../../static/image/brokerage/yongjin.png" mode="widthFix"></image>
					<view>
						<view class="yj">分销佣金</view>
						<view class="toutcome">0.00元</view>
					</view>
				</view>
				<view class="box-list" style="border: 1rpx solid #EEEEEE;" @tap="$jump('./order')">
					<image src="../../../static/image/brokerage/dingdan.png" mode="widthFix"></image>
					<view>
						<view class="yj">分销订单</view>
						<view class="toutcome">0笔</view>
					</view>
				</view>
			</view>
			
			<view class="box">
				<view class="box-list" style="border: 1rpx solid #EEEEEE;">
					<image src="../../../static/image/brokerage/tixian.png" mode="widthFix"></image>
					<view>
						<view class="yj">提现记录</view>
						<view class="toutcome">0笔</view>
					</view>
				</view>
				<view class="box-list" style="border: 1rpx solid #EEEEEE;">
					<image src="../../../static/image/brokerage/tongxue.png" mode="widthFix"></image>
					<view>
						<view class="yj">我的同学</view>
						<view class="toutcome">0人</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	export default{
		components:{
			returns
		},
		data(){
			return{
				title:'我的佣金',
			}
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		height: 100vh;
		background-color: #F6F6F7;
		.worp{
			background-color: #FFFFFF;
			width: 100%;
			hr{
				height:1rpx;
				border: none;
				border-top:1px solid #F4F4F4;
				}
			.top{
				background-color: #EF7C38;
				width: 100%;
				height: 160rpx;
				display: flex;
				align-items: center;
				image{
					width: 100rpx;
					height: 100rpx;
					margin: 0 29rpx 0 34rpx; 
				}
				.msg{
					font-size: 28rpx;
					color: #FFFFFF;
					flex-direction:column;
					justify-content: space-between;
				}
			}
			.line{
				font-size: 24rpx;
				margin: 35rpx 0 35rpx 21rpx;
				text{
					margin-right: 5rpx;
				}
			}
			.line1{
				font-size: 24rpx;
				padding: 30rpx 25rpx 30rpx 21rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				image{
					width: 36rpx;
					height: 36rpx;
				}
			}
			.line2{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 30rpx 25rpx;
				.money{
					color: #D80000;
					font-size: 32rpx;
					font-weight: 500rpx;
					margin: 10rpx;
				}
				.textss{
					font-size: 24rpx;
					padding: 0 0 10rpx 0;
				}
				.btn{
					width:180rpx;
					height:60rpx;
					background:rgba(216,0,0,1);
					border-radius:30rpx;
					text-align: center;
					color: #FFFFFF;
					line-height: 60rpx;
					font-size: 28rpx;
				}
			}
		}
		.classify{
			background: #FFFFFF;
			width: 100%;
			margin-top:30rpx ;
			.box{
				display: flex;
				.box-list{
					width: 50%;
					height: 161rpx;
					display: flex;
					align-items: center;
					font-size: 24rpx;
					padding-left: 15%;
					image{
						width: 55rpx;
						height: 55rpx;
						margin-right: 10rpx;
					}
					.toutcome{
						color: #D80000;
					}
				}
			}
		}
	}
</style>
