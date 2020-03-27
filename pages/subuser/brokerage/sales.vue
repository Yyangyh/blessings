<template>
	<view class="content">
		<view class="status_bar">
					
		</view >
		<returns :titles='title'></returns>
		<view class="c-top">
			<view class="t-money">{{dataList.total}}</view>
			<view class="t-text">累计奖学金(元)</view>
		</view>
		<view class="worp">
			<view class="line">
				<view class="line-left">
					<image src='../../../static/image/brokerage/s1.png' mode="widthFix"></image>
					<text>可提现奖学金</text>
				</view>
				<view class="line-right">￥{{dataList.can_cash}}</view>
			</view>
			<hr />
			<!-- <view class="line">
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
			<hr /> -->
			<view class="line">
				<view class="line-left">
					<image src='../../../static/image/brokerage/s4.png'></image>
					<text>成功提现奖学金</text>
				</view>
				<view class="line-right">￥{{dataList.cashed}}</view>
			</view>
			<hr />
			<view class="line">
				<view class="line-left">
					<image src='../../../static/image/brokerage/s5.png'></image>
					<text>待收货奖学金</text>
				</view>
				<view class="line-right">￥{{dataList.unsettle}}</view>
			</view>
			<hr />
			<view class="line">
				<view class="line-left">
					<image src='../../../static/image/brokerage/s6.png'></image>
					<text>未结算奖学金</text>
				</view>
				<view class="line-right">￥{{dataList.settled}}</view>
			</view>
			<hr />
			<!-- <view class="title">
				用户须知
			</view>
			<view class="explain">买家确认订单后,立即获得分销奖学金</view>
			<view class="explain">注意:可用奖学金 <text>1元</text>后才能申请提现</view> -->
			<button class="btn" type="default" @tap="$jump('./withdraw?deposit='+dataList.can_cash)">提现</button>
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
				title:'分享奖学金',
				dataList:'',
			}
		},
		onShow() {
			this.service.entire(this,'post',this.APIconfig.api_root.subuser.u_CommissionType,{
				user_id:this.$store.state.user.id,
				
			},function(self,res){
				self.dataList = res.data
			})
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
			padding:70rpx 0 30rpx 22rpx;
		}
		.explain{
			font-size: 24rpx;
			color: #666666;
			padding: 10rpx 20rpx;
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
