<template>
	<view class="content">
		<view class="status_bar">
					
		</view >
		<returns :titles='title'></returns>
		<view class="w-top">
			<view class="t-left">
				<text>可提现佣金:</text>
				<text>￥{{deposit}}</text>
			</view>
			<view class="t-right" @click="deposits">全部提现</view>
		</view>
		<view class="worp">
			<view class="line">
				<view class="l-top">提现到余额</view>
				<form>
					<view class="l-bottom">
						<text class="">¥</text>
						<input type="text" value="" placeholder="请输入提现金额" v-model="money"/>
					</view>
				</form>
			</view>
			<hr />
			<!-- <view class="w-text">提现手续费3%：-￥6.0</view>
			<view class="w-text1">提现方式</view>
			<view class="means">
				<view class="choice">
					<image src='../../../static/image/brokerage/yue.png'></image>
					<text>提现到余额</text>
				</view>
				<image src='../../../static/image/brokerage/quan.png'></image>
			</view>
			<hr />
			<view class="means">
				<view class="choice">
					<image src='../../../static/image/brokerage/yue.png'></image>
					<text>提现到微信</text>
				</view>
				<image src='../../../static/image/brokerage/quan.png'></image>
			</view>
			<hr />
			<view class="means">
				<view class="choice">
					<image src='../../../static/image/brokerage/yue.png'></image>
					<text>提现到支付宝</text>
				</view>
				<image src='../../../static/image/brokerage/quan.png'></image>
			</view>
			<hr /> -->
			<button @click="extract">提现</button>
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
				title:'佣金提现',
				money:'',
				deposit:'',
			}
		},
		methods:{
			extract(){
				this.service.entire(this,'post',this.APIconfig.api_root.subuser.u_cash,{
					user_id:this.$store.state.user.id,
					money:this.money,
				},function(self,res){
					console.log(res)
					uni.showToast({
						icon:'none',
						title:res.msg
					})
				})
			},
			deposits(){
				this.money = this.deposit
			}
			
		},
		onLoad(e) {
			//提现
			console.log(e.deposit)
			this.deposit = e.deposit
		}
	}
</script>

<style lang="scss">
	.w-top{
		background-color: #F6F6F7;
		display:flex;
		justify-content: space-between;
		padding: 30rpx 22rpx;
		font-size: 28rpx;
		.t-left{
			text:first-child{
				color:#666666;
			}
			text:last-child{
				color:#D80000;
			}
		}
		.t-right{
			color: #EF7C38;
		}
	}
	.worp{
		.line{
			padding: 30rpx 22rpx;
			.l-top{
				font-size: 24rpx;
				margin-bottom: 10rpx;
			}
			.l-bottom{
				display: flex;
				align-items: center;
				font-size: 28rpx;
				text{
					margin-right: 20rpx;
				}
			}
		}
		button{
			display: block;
			width:692rpx;
			height:80rpx;
			background:rgba(216,0,0,1);
			border-radius:40rpx;
			color: #FFFFFF;
			line-height: 80rpx;
			text-align: center;
			letter-spacing: 5rpx;
			margin: 40rpx auto 0;
		}
		hr{
			height:1rpx;
			border: none;
			border-top:1px solid #F4F4F4;
		}
		.w-text{
			font-size: 24rpx;
			padding:30rpx 22rpx ;
		}
		.w-text1{
			font-size: 28rpx;
			color:#999999;
			padding:0rpx 22rpx 30rpx 22rpx;
		}
		.means{
			display: flex;
			justify-content: space-between;
			padding: 30rpx 22rpx;
			align-items: center;
			.choice{
				display: flex;
				align-items: center;
				font-size: 28rpx;
				color: #333333;
				image{
					width: 52rpx;
					height: 52rpx;
					margin-right: 20rpx;
				}
			}
			image{
				width: 30rpx;
				height: 30rpx;
			}
		}
	}
</style>
