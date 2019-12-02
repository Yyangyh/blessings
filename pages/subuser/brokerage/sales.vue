<template>
	<view class="content">
		<view class="status_bar">
					
		</view >
		<returns :titles='title'></returns>
		<view class="c-top">
			<view class="t-money">0.00元</view>
			<view class="t-text">累计佣金(元)</view>
		</view>
		<view class="worp">
			<view class="line">
				<view class="line-left">
					<image src='../../../static/image/brokerage/s1.png'></image>
					<text>可提现佣金</text>
				</view>
				<view class="line-right">￥20.78</view>
			</view>
			<hr />
			<view class="line">
				<view class="line-left">
					<image src='../../../static/image/brokerage/s2.png'></image>
					<text>已申请佣金</text>
				</view>
				<view class="line-right">￥20.78</view>
			</view>
			<hr />
			<view class="line">
				<view class="line-left">
					<image src='../../../static/image/brokerage/s3.png'></image>
					<text>待打款佣金</text>
				</view>
				<view class="line-right">￥20.78</view>
			</view>
			<hr />
			<view class="line">
				<view class="line-left">
					<image src='../../../static/image/brokerage/s4.png'></image>
					<text>成功提现佣金</text>
				</view>
				<view class="line-right">￥20.78</view>
			</view>
			<hr />
			<view class="line">
				<view class="line-left">
					<image src='../../../static/image/brokerage/s5.png'></image>
					<text>待收货佣金</text>
				</view>
				<view class="line-right">￥20.78</view>
			</view>
			<hr />
			<view class="line">
				<view class="line-left">
					<image src='../../../static/image/brokerage/s6.png'></image>
					<text>未结算佣金</text>
				</view>
				<view class="line-right">￥20.78</view>
			</view>
			<hr />
			<view class="title">
				用户须知
			</view>
			<view class="explain">买家确认订单后,立即获得分销佣金</view>
			<view class="explain">注意:可用佣金 <text>1元</text>后才能申请提现</view>
			<button class="btn" type="default">提现</button>
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
				title:'分销佣金',
			}
		}
	}
</script>

<style lang="scss">
	.content{
		.c-top{
			width: 100%;
			height: 180rpx;
			background-color: #EF7C38;
			color: #FFFFFF;
			text-align: center;
			.t-money{
				font-size: 40rpx;
				padding-top: 58rpx;
				
			}
			.t-text{
				font-size: 24rpx;
				margin-top: 5rpx;
			}
		}
		hr{
			height:1rpx;
			border: none;
			border-top:1px solid #F4F4F4;
		}
		.line{
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 30rpx;
			.line-left{
				display: flex;
				align-items: center;
				image{
					width: 39rpx;
					height: 39rpx;
					margin-right: 10rpx;
				}
				text{
					font-size: 24rpx;
				}
			}
			.line-right{
				font-size: 28rpx;
				color: #F2221F;
			}
		}
		.title{
			font-size: 28rpx;
			color: #333333;
			padding: 30rpx 0 30rpx 22rpx;
		}
		.explain{
			font-size: 24rpx;
			color: #666666;
			margin: 0 340rpx 10rpx 22rpx;
			text{
				color: #F2221F;
				letter-spacing: 5rpx;
			}
		}
		.btn{
			width: 687rpx;
			height: 80rpx;background:rgba(216,0,0,1);
			border-radius:40px;
			text-align: center;
			line-height: 80rpx;
			color: #FFFFFF;
			margin:50rpx auto 0;
		}
	}
</style>
