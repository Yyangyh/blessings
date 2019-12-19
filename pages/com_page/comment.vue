<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<returns :titles='title'></returns>
		<view class="write">
			<view class="w_title">觉得怎么样，打个星吧~</view>
			<view class="start">
				<image src="../../static/image/com_page/bigstart.png"></image>
				<image src="../../static/image/com_page/kongstart.png"></image>
				<image src="../../static/image/com_page/kongstart.png"></image>
				<image src="../../static/image/com_page/kongstart.png"></image>
				<image src="../../static/image/com_page/kongstart.png"></image>
			</view>
			<textarea value="" placeholder="请发表你的评论" />
			<button>发表</button>
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
				title:'全部评论',
			}
		}
	}
</script>

<style lang="scss">
	.write{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 416rpx;
		background:#F6F6F6 ;
		padding: 30rpx 20rpx;
		.w_title{
			font-size: 24rpx;
			color:#666666;
		}
		.start{
			margin-top: 20rpx;
			display: flex;
			image{
				width: 41rpx;
				height: 41rpx;
				margin: 20rpx 10rpx;
			}
		}
		textarea{
			font-size: 24rpx;
			color:#999999;
			padding: 10rpx ;
			width: 690rpx;
			height: 170rpx;
			background-color: #FFFFFF;
			border: 1rpx solid #999999;
			margin-top: 20rpx;
		}
		button{
			width:120rpx;
			height:60rpx;
			background:linear-gradient(90deg,rgba(247,76,74,1),rgba(245,110,106,1));
			border-radius:10rpx;
			color: #FFFFFF;
			font-size: 24rpx;
			line-height: 60rpx;
			text-align: center;
			margin: 20rpx 0 0 600rpx;
		}
	}
</style>
