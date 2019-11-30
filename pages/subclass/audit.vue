<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<image src="../../static/image/subclass/audit.png" mode="widthFix"></image>
		<view>已提交，请耐心等待审核~</view>
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
			display:block;
			width: 293rpx;
			height: 293rpx;
			padding-top: 130rpx;
			margin: 0 auto;
		}
		view{
			font-size: 24rpx;
			text-align: center;
			margin-top: 25rpx;
		}
	}
</style>
