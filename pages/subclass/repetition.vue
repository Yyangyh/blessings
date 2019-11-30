<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<image src="../../static/image/subclass/mistake.png" mode="widthFix"></image>
		<view>您已经申请，无需重复申请！</view>
		<button type="default">确认</button>
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
				title:'审核中'
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		image{
			width: 182rpx;
			height: 182rpx;
			padding-top: 130rpx;
			display: block;
			margin: 0 auto;
		}
		view{
			font-size: 24rpx;
			text-align: center;
			margin-top: 25rpx;
		}
		button{
			width:710rpx;
			height:80rpx;
			background:rgba(216,0,0,1);
			border-radius:40rpx;
			color:#FFFFFF;
			text-align: 32rpx;
			line-height: 80rpx;
			margin-top: 50rpx;
		}
	}
</style>
