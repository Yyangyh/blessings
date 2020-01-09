<template>
	<view class="content">
		<view class="content_top">
			<view class="top_search" @tap="$jump('/pages/com_page/v_search?type='+type)">
				<!-- <input type="text" value="" placeholder="请输入关键词搜索" /> -->
				<view class="search_text">
					请输入关键词搜索
				</view>
			</view>
			<view class="top_img" @tap="$jump('/pages/com_page/notice')">
				<image src="/static/image/index/news.png" mode="widthFix"></image>
				<view v-if="notice"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default{
		props:['type'],
		computed: {
		  // localComputed () { /* ... */ },
		  // 使用对象展开运算符将此对象混入到外部对象中
		  ...mapState({
			  notice:'notice'
		  }),
		
		},	
		data() {
			return {
				
			}
		},
	}
</script>

<style lang="scss">
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
		.top_search{
			flex-grow: 2;
			height: 65rpx;
			border-radius: 65rpx;
			display: flex;
			align-items: center;
			padding-left: 40rpx;
			background: #EEEEEE;
			font-size: 24rpx;
			color: #999;
		}
		.top_img{
			position: relative;
			view{
				position: absolute;
				right: 0;
				top: 0;
				height: 10rpx;
				width: 10rpx;
				border-radius: 50%;
				background: #D80000;
			}
		}
		image{
			height: 50rpx;
			width: 50rpx;
			margin-left: 10rpx;
		}
	}
</style>
