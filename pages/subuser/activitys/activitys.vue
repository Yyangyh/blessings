<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<view class="allorder">
			  <text @click="cur=0" class="one" :class="{active:cur==0}">近期活动</text>
			  <text @click="cur=1" class="two" :class="{active:cur==1}">往期活动</text>
		</view>
		<view class="quan" @tap="$jump('./tessera')" v-show="cur==0">
			<image src='../../../static/image/index/sm.png' mode="widthFix"></image>
			<view class="q_right">
				<view>让爱回家|高分孩子·智慧父母一	大型公益巡讲</view>
				<view>￥100.00</view>
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
				title:'我的活动',
				cur:0
			}
		},
	}
</script>

<style lang="scss">
	.allorder{
		width: 100%;
		height: 100rpx;
		background-color: #F6F6F7;
		display: flex;
		text-align: center;
		line-height: 120rpx;
		font-size: 32rpx;
		text{
			flex: 1;
		}
	}
	.active{
		color:#D80000;
	}
	.quan{
		display: flex;
		align-items: center;
		width: 100%;
		border-bottom: 1rpx solid #F4F4F4;
		image{
			width: 276rpx;
			height: 188rpx;
			padding: 30rpx 32rpx 30rpx 20rpx;
			display: block;
		}
		.q_right{
			padding-right: 30rpx;
			view:first-child{
				font-size: 28rpx;
				color: #333333;
				margin-bottom: 20rpx;
			}
			view:last-child{
				font-size: 32rpx;
				color: #D80000;
			}
		}
	}
</style>
