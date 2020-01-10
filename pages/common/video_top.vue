<template>
	<view class="content_top">
		<view class="top_returns" @tap="service.returns()">
			<image src="/static/image/com_page/returns.png" mode="widthFix"></image>
		</view>
		<view class="top_search">
			课程详情
		</view>
		<view class="top_img">
			<image src="/static/image/com_page/share.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.content_top{
		// position: fixed;
		z-index: 999;
		top: var(--status-bar-height);
		left: 0;
		width: 100%;
		background: #FFFFFF;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		height: 105rpx;
		padding: 0 20rpx;
		.top_search{
			flex-grow: 2;
			height: 65rpx;
			line-height: 65rpx;
			text-align: center;
			font-weight:500;
			font-size: 32rpx;
		}
		image{
			height: 50rpx;
			width: 50rpx;
			margin-left: 10rpx;
		}
		.top_returns image{
			height: 31rpx;
			width: 31rpx;
			padding-right: 10rpx;
		}
	}
</style>
