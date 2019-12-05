<template>
	<view class="content">
		<view class="status_bar">
						
		</view >
		<returns :titles='title'></returns>	
		<form >
			<view class="line">
				<text>旧密码:</text>
				<input type="text" placeholder="请输入您的旧密码">
			</view>
			<hr />
			<view class="line">
				<text>新密码:</text>
				<input type="text" placeholder="请输入您的新密码">
			</view>
			<hr/>
			<view class="line">
				<text>确认密码:</text>
				<input type="text" placeholder="确认新密码">
			</view>
		</form>
		<button type="default">确认</button>
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
				title:'修改密码',
				
			}
		},
	}
</script>

<style lang="scss">
	.line{
		display: flex;
		padding: 30rpx 20rpx;
		align-items: center;
		text{
			font-size: 24rpx;
			margin-right: 20rpx;
		}
		input{
			font-size: 24rpx;
		}
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
	hr{
		height:1rpx;
		border: none;
		border-top:1px solid #F4F4F4;
		width: 96%;
		margin:  0 auto;
	}
</style>
