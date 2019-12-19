<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<returns :titles='title'></returns>
		<view class="o_msg">
			<view class="titlie">xxxxx鸭肉食品</view>
			<view class="msgs">须在5分钟内完成订单支付，否则该订单将自动取消.</view>
			<hr />
			<view class="msgs">应付金额：<text>60元</text></view>
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
				title:'订单支付'
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F6F6F7;
	}
	.o_msg{
		background-color: #FFFFFF;
		border-radius:22rpx;
		padding: 30rpx 40rpx;
		hr{
			border: none;
			height: 1rpx;
			border-bottom: 1rpx solid #EEEEEE;
		}
		.title{
			font-size: 32rpx;
		}
		.msgs{
			font-size: 28rpx;
			color:#999999;
			margin: 20rpx 0;
		}
		text{
			font-size-adjust: 29rpx;
			color:#D80000;
		}
	}
</style>
