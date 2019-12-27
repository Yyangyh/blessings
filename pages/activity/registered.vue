<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<view class="person_list">
			<view class="line">
				<view class="l_left">
					<image src='../../static/image/index/per.png' mode="widthFix"></image>
					<text>昵称：牛哄哄</text>
				</view>
				<view class="l_right">2019-05-38  16:03</view>
			</view>
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
				title:'已报名',
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F6F6F6;
	}
	.line{
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		padding:30rpx 20rpx ;
		justify-content: space-between;
		.l_left{
			display: flex;
			align-items: center;
			image{
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				margin-right: 25rpx;
			}
			text{
				font-size: 28rpx;
				
			}
		}
		.l_right{
			font-size: 24rpx;
			color:#999999;
			padding-right: 93rpx;
		}
	}
</style>
