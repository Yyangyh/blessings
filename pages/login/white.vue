<template>
	<view class="" >
		
	</view>
</template>

<script>
	export default{
		data() {
			return {
				show: 0,
				page_show:false,
				timer:''
			}
		},
		onLoad() {
			if(uni.getStorageSync('openid')){
				uni.reLaunch({
					url:'./login'
				})
			}else{
				if(uni.getStorageSync('state_user')){
					uni.switchTab({
						url:'../index/index'
					})
				}else{
					uni.reLaunch({
						url:'./login'
					})
				}
			}
			
			
		},
		methods:{
		},
		onHide() {
		},
		onUnload(){
		},
		
	}
</script>

<style>
	/* .content{
		position: relative;
	} */
	.jump{
		height: 50rpx;
		line-height: 50rpx;
		width: 90rpx;
		border-radius: 50rpx;
		border: 2rpx solid #ccc;
		font-size: 28rpx;
		position: fixed;
		background: #fff;
		z-index: 111;
		padding: 0 10rpx;
		top: calc(20rpx + var(--status-bar-height));
		right: 20rpx;
	}
	
</style>
