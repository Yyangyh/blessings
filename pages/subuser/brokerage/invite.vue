<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<returns :titles='title'></returns>
		<view class="pages">
			<image src="../../../static/image/brokerage/yaoq.png" mode=""></image>
		</view>
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
				title:'我的邀请码',
			}
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		height: 1334rpx;
		background: url(../../../static/image/brokerage/brokerage-back.png) no-repeat;
		background-size:100% 100%;
		.pages{
			width:366rpx;
			height:366rpx;
			background:rgba(255,255,255,1);
			box-shadow:0px 8rpx 7rpx 1rpx rgba(51,174,244,0.25);
			border-radius:10rpx;
			margin: 666rpx 0 0 192rpx;
			image{
				width: 342rpx;
				height: 342rpx;
				margin: 12rpx;
			}
		}
	}
</style>
