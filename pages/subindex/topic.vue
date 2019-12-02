<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<returns :titles='title'></returns>
		<view class="worp">
			<view class="topic">
				1、中国股市会让你想到
				     哪种游戏?
			</view>
			<view class="option">A.中国象棋</view>
			<view class="option">B.赛马</view>
			<view class="btn">下一题</view>
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
				title:'我的测评',
			}
		}
	}
</script>

<style lang="scss">
	.worp{
		width: 100%;
		height: 1229rpx;
		background: url(../../static/image/evaluating/topicback.png) no-repeat;
		background-size:100% 100% ;
		.topic{
			font-size: 32rpx;
			font-weight: 500%;
			padding: 191rpx 309rpx 67rpx 107rpx;
			
		}
		.option{
			width: 337rpx;
			height: 80rpx;
			line-height: 80rpx;
			border:1px solid rgba(170,170,170,1);
			font-size: 28rpx;
			color:#999999;
			border-radius:40rpx;
			padding-left: 51rpx;
			margin: 0 0 30rpx 110rpx;
		}
		.btn{
			width: 187rpx;
			height: 70rpx;
			border: 1rpx solid #D80000;
			font-size: 28rpx;
			color: #D80000;
			line-height: 70rpx;
			text-align: center;
			border-radius:40rpx;
			margin: 300rpx 170rpx 0 393rpx;
		}
	}
</style>
