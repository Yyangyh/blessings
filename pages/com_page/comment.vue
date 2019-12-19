<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<returns :titles='title'></returns>
		<view class="write">
			<view class="w_title">觉得怎么样，打个星吧~</view>
			<view class="start">
				<image src="../../static/image/com_page/bigstart.png"></image>
				<image src="../../static/image/com_page/bigstart.png"></image>
				<image src="../../static/image/com_page/bigstart.png"></image>
				<image src="../../static/image/com_page/bigstart.png"></image>
				<image src="../../static/image/com_page/bigstart.png"></image>
			</view>
			<textarea value="" placeholder="请发表你的评论" />
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
		width: 100%;
		height: 416rpx;
		background:#F6F6F6 ;
		.w_title{
			font-size: 24rpx;
			color:#666666;
		}
		.start{
			display: flex;
			image{
				width: 41rpx;
				height: 41rpx;
				margin-right: 10rpx;
			}
		}
		
	}
</style>
