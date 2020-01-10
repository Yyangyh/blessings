<template>
	<view class=".content">
		<view class="jump" @tap="jumps">
			跳过
		</view>
		<view class="back1" v-if="show == 1">
			<image src="../../static/s1.png" mode="widthFix"></image>
			<view class="spot_box">
				<text style="background: #D80000;"></text>
				<text></text>
				<text></text>
			</view>
		</view>
		<view class="back2"  v-if="show == 2">
			<image src="../../static/s2.png" mode="widthFix"></image>
			<view class="spot_box">
				<text></text>
				<text style="background:#D80000;"></text>
				<text></text>
			</view>
		</view>
		<view class="back3"  v-if="show == 3">
			<image src="../../static/s3.png" mode="widthFix"></image>
			<view class="spot_box">
				<text></text>
				<text></text>
				<text style="background: #D80000;"></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				show: 0,
				timer:''
			}
		},
		onLoad() {
			let that = this
			that.timer = setInterval(function(){
				 that.show++
				 console.log(that.show)
			},1500)
		},
		methods:{
			jumps(){
				if(uni.getStorageSync('state_token')){
					uni.switchTab({
						url:'../index/index'
					})
				}else{
					uni.redirectTo({
					    url: './login'
					});
				}
			}
		},
		onHide() {
			clearInterval(this.timer)
		},
		onUnload(){
			clearInterval(this.timer)
		},
		watch:{
			show(a,b){
				if(a == 4){
					this.jumps()
				}
			}
		}
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
	.spot_box{
		
	}
	view{
		text-align: center;
	}
	
	text{
		height: 20rpx;
		width: 20rpx;
		border-radius: 50%;
		margin-right: 10rpx;
		background: #CE7E92;
		display: inline-block;
	}
</style>
