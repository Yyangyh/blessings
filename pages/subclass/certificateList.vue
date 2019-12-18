<template>
<view class="content">
	<view class="status_bar">
		
	</view>
	<returns :titles='title'></returns>
	<view class="line" @tap="$jump('./certificate')">
		<view class="l_left">家长证</view>
		<view class="l_right">
			<text>查看</text>
			<image src="../../static/image/index/go.png"></image>
		</view>
	</view>
	<view class="line" @tap="$jump('./certificate')">
		<view class="l_left">家长证</view>
		<view class="l_right">
			<text>查看</text>
			<image src="../../static/image/index/go.png"></image>
		</view>
	</view>
</view>
</template>

<script>
	import returns from '../common/returns.vue'
	export default{
		components:{
			returns
		},
		data(){
			return{
				title:'我的证书'
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
	
	.line{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 30rpx 20rpx;
		background-color: #FFFFFF;
		margin-bottom: 30rpx;
		// color: #000000;
		.l_left{
			font-size: 28rpx;
		}
		.l_right{
			font-size: 24rpx;
			color: #666666;
			display: flex;
			align-items: center;
			image{
				width: 11rpx;
				height: 20rpx;
				margin-left: 23rpx;
			}
		}
	}
</style>
