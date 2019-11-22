<template>
	<view class="content">
		<view class="content_top">
			<view class="top_search">
				<input type="text" value="" placeholder="请输入关键词搜索" />
			</view>
			<view class="top_img" @click="jump('/pages/com_page/notice')">
				<image src="/static/image/index/news.png" mode="widthFix"></image>
				<view></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
			}
		},
		methods:{
			jump(url){
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style>
	.content {
		padding-top: 0;
	}
	.content_top{
		position: fixed;
		top: var(--status-bar-height);
		left: 0;
		width: 100%;
		background: #FFFFFF;
		z-index: 99;	
		box-sizing: border-box;
		display: flex;
		align-items: center;
		height: 105rpx;
		padding: 0 20rpx;
	}
	.content_top .top_search{
		flex-grow: 2;
		height: 65rpx;
		border-radius: 65rpx;
		display: flex;
		align-items: center;
		padding-left: 40rpx;
		background: #EEEEEE;
	}
	.content_top view input{
		font-size: 24rpx;
	}
	.content_top .top_img{
		position: relative;
	}
	.content_top .top_img view{
		position: absolute;
		right: 0;
		top: 0;
		height: 10rpx;
		width: 10rpx;
		border-radius: 50%;
		background: #D80000;
	}
	.content_top image{
		height: 50rpx;
		width: 50rpx;
		margin-left: 10rpx;
	}
</style>
