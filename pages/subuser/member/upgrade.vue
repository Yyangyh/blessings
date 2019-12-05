<template>
	<view class="content">
		<view class="status_bar">
							
		</view >
		<returns :titles='title'></returns>
		<view class="ug_top">
			<view>确定使用积分升级</view>
			<view>50000</view>
		</view>
		<button type="default">确定</button>
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
				title:'积分升级',
				reveal:false
			}
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		height: 92.2vh;
		overflow: hidden;
		background-color: #F6F6F7;
		.ug_top{
			height: 232rpx;
			background-color: #FFFFFF;
			text-align: center;
			view:first-child{
				font-size: 24rpx;
				padding-top: 73rpx;
			}
			view:last-child{
				font-size: 40rpx;
				color:#D80000;
				margin-top:41rpx ;
			}
		}
		button{
			width:680rpx;
			height:80rpx;
			background:rgba(216,0,0,1);
			border-radius:40rpx;
			color: #FFFFFF;
			font-size: 32rpx;
			text-align: center;letter-spacing: 2rpx;
			line-height: 80rpx;
			margin-top: 50rpx;
		}
	}
</style>
