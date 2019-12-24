<template>
	<view class="top">
		<view class="top_enlarge"  @click="returns()">
			<image src="/static/image/com_page/returns.png" mode="widthFix"></image>
		</view>
		<text>{{titles}}</text>
		<text></text>
	</view>
</template>

<script>
	export default{
		props:['titles'],
		data() {
			return {
				
			}
		},
		methods:{
			returns(){
				// #ifdef H5  
				
				history.back()
				// #endif  
				
				// #ifdef APP-PLUS
				uni.navigateBack(1)
				// #endif
			}
		}
		
	}
</script>

<style scoped>
	.top{
		height: 105rpx;
		padding: 0 44rpx;
		width: 100%;
		box-sizing: border-box;
		position: fixed;
		top: var(--status-bar-height);
		z-index: 99;
		left: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
		background: #fff;
		box-shadow:0px 2rpx 4rpx 0px rgba(0, 0, 0, 0.1);
	}
	.top_enlarge{
		display: flex;
		align-items: center;
		height: 100%;
		width: 180rpx;
	}
	.top image{
		height: 40rpx;
		width: 40rpx;
	}
	.top text:nth-of-type(2){
		width: 180rpx;
		display: inline-block;
	}
</style>
