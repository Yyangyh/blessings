<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<view class="back">
			<image src="../../../static/image/subuser/tessera-back.png"></image>
			<view class="worp">
				<view class="left">
					<view>入</view>
					<view>场</view>
					<view>卷</view>
				</view>
				<view class="right">
					<view>让爱回家|高分孩子·智慧父母一大型公益巡讲</view>
					<view>￥100.00</view>
					<view>11-17 08:00至11-17 17:00</view>
				</view>
			</view>
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
					title:'入场卷',
					// cur:0
				}
			},
		}
</script>

<style lang="scss">
	.back{
		width: 710rpx;
		height: 320rpx;
		margin: 0 auto;
		margin-top:30rpx ;
		position: relative;
		image{
			width: 100%;
			height: 100%;
			position: absolute;
			top:0;
			left:0;
			z-index: 0;
		}
		.worp{
			position: relative;
			top:0;
			left:0;
			display: flex;
			align-items: center;
			.left{
				margin-top: 30rpx;
				view{
					font-size: 60rpx;
					color:#FFFFFF;
					margin:5rpx 120rpx 0 79rpx;
				}
			}
			.right{
				color:#FFFFFF;
				view:first-child{
					font-size: 28rpx;
					margin: 30rpx 0 30rpx 0;
				}
				view:last-child{
					font-size: 24rpx;
					margin-top: 50rpx;
				}
			}
		}
	}
</style>
