<template>
	<view class="content">
		<view class="status_bar">
								
		</view >
		<returns :titles='title'></returns>
		<view class="title">请输入积分</view>
		<form >
			<input type="text" value="" placeholder="请输入兑换积分" />
			
		</form>
		<button type="default">立即兑换</button>
		<view class="explain">
			兑换说明
		</view>
		<view class="rule">
			<view>1、兑换码是由商家通过特定渠道发放给用户的一种优惠形式，作 为兑换商家店铺内商品或优惠券的凭证，成功兑换后，将自动 保存于用户的个人帐户中。</view>
			<view>2、积分等于一块钱</view>
			<view>3、使用兑换码兑换成功的优惠券支付订单时，优惠券金额高于订 单金额的差额部分，不找零不兑换；优惠券金额低于订单金额 的，差额部分由用户支付。</view>
			<view> 4、详细内容请咨询商家。</view>
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
				title:'兑换中心',
			}
		},
	}
</script>

<style lang="scss">
	.title{
		font-size: 28rpx;
		text-align: center;
		padding-top: 151rpx;
	}
	input{
		font-size: 24rpx;
		color: #CCCCCC;
		width:600rpx;
		height:75rpx;
		border:1rpx solid rgba(204,204,204,1);
		border-radius:38rpx;
		display: block;
		margin: 35rpx auto 61rpx;
		text-align: center;
		line-height: 75rpx;
	}
	button{
		width:256rpx;
		height:75rpx;
		background:rgba(216,0,0,1);
		border-radius:38rpx;
		font-size: 28rpx;
		text-align: center;
		line-height: 75rpx;
		margin: 0 auto;
		color: #FFFFFF;
	}
	.explain{
		font-size: 28rpx;
		color: #D80000;
		margin: 106rpx 0 33rpx 0;
		text-align: center;
	}
	.rule{
		font-size: 24rpx;
		color: #333333;
		margin: 0 34rpx 0 28rpx;
		line-height: 50rpx;
		
	}
</style>
