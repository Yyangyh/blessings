<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<view class="text1">学习打卡积分满10000分 </view>
		<view class="text2">可立即申请证书</view>
		<button type="default"  @tap="$jump('./applyFor')">立即申请</button>
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
				title:'导师考证'
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		height: 1229rpx;
		background: url(../../static/image/subclass/background.png) no-repeat;
		background-size: 100% 100%;
		font-size: 32rpx;
		color: #FFFFFF;
		.text1{
			text-align: center;
			margin-top: 448rpx;
		}
		.text2{
			text-align: center;
			margin-top: 10rpx;
		}
		button{
			width:386rpx;
			height:80rpx;
			text-align: center;
			font-size: 32rpx;
			color: #FFFFFF;
			line-height: 80rpx;
			border-radius: 40rpx;
			background:linear-gradient(60deg,rgba(240,62,50,1),rgba(248,119,61,1));
			margin-top: 442rpx;
		}
	}
</style>
