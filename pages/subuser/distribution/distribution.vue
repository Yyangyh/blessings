<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="worp">
			<image src="../../../static/image/subuser/dis-back.png"></image>
			<button type="default" @tap="$jump('./application')">立即申请</button>
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
					title:'分销商',
					
				}
			},
		}
</script>

<style lang="scss">
	.worp{
		width: 100%;
		height: 1229rpx;
		position: relative;
		image{
			width: 100%;
			height: 100%;
		}
		button{
			width:386rpx;
			height:80rpx;
			background:linear-gradient(-90deg,rgba(247,76,74,1),rgba(245,110,106,1));
			box-shadow:0rpx 10rpx 13rpx 0rpx rgba(250,120,87,0.5);
			border-radius:40rpx;
			color: #FFFFFF;
			font-size: 32rpx;
			line-height: 80rpx;
			position: absolute;
			top:969rpx;
			left: 182rpx;
		}
	}
</style>
