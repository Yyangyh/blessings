<template>
	<view class="content">
		<view class="status_bar">
						
		</view >
		<returns :titles='title'></returns>	
		<form>
			<input class="input" type="text" placeholder="请输入新手机号">
			<hr />
			<view class="verification">
				<input type="text" value="" placeholder="请输入验证码" />
				<text>获取验证码</text>
			</view>
			<hr />
		</form>
		<button type="default">完成</button>
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
				title:'修改手机号',
				
			}
		},
	}
</script>

<style lang="scss">
	.input{
		font-size: 24rpx;
		padding: 30rpx 60rpx;
	}
	.verification{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-right: 60rpx;
		input{
			font-size: 24rpx;
			padding: 30rpx 0 30rpx 60rpx;
		}
		text{
			font-size: 26rpx;
			color: #32A6FF;
		}
	}
	hr{
		height:1rpx;
		border: none;
		border-top:1px solid #F4F4F4;
		width: 96%;
		margin:  0 auto;
	}
	button{
		width:684rpx;
		height:80rpx;
		background:rgba(216,0,0,1);
		border-radius:40rpx;
		font-size: 32rpx;
		color: #FFFFFF;
		text-align: center;
		line-height: 80rpx;
		margin: 40rpx auto 0;
	}
</style>
