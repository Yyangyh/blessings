<template>
	<view class="content">
		<view class="status_bar">
					
		</view >
		<returns :titles='title'></returns>
		<view class="allorder">
			  <text @click="cur=0" class="one" :class="{active:cur==0}">全部</text>
			  <text @click="cur=1" class="two" :class="{active:cur==1}">待审核</text>
			  <text @click="cur=2" class="three" :class="{active:cur==2}">待打款</text>
			  <text @click="cur=3" class="four" :class="{active:cur==3}">已打款</text>
			  <text @click="cur=4" class="five" :class="{active:cur==4}">无效</text>
		</view>
		<view class="box"  v-show="cur==0"> 
			<view class="line">
				<view class="b_left">
					<view class="tops">提现到微信</view>
					<view class="middles"><text style="margin-right: 20rpx;">2019-06-19</text><text> 16:56</text></view>
					<view class="bottoms"><text style="margin-right: 20rpx;">实际金额:10:00元  </text><text> 手续费:0.00元</text></view>
				</view>
				<view class="b_right">
					<view>+￥10.00</view>
					<view>申请中</view>
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
				title:'提现明细',
				cur:0
			}
		},
		
	}
</script>

<style lang="scss">
	.allorder{
		width: 100%;
		height: 90upx;
		display: flex;
		text-align: center;
		line-height: 90upx;
		font-size: 24upx;
		background-color: #F6F6F7;
		margin-bottom: 30rpx;
		text{
			flex: 1;
		}
	}
	.active{
		color:#D80000;
	}
	.line{
		display: flex;
		justify-content: space-between;
		padding: 20rpx 20rpx 30rpx;
		border-bottom: 1rpx solid #EEEEEE;
		align-items: center;
		.b_left{
			.tops{
				font-size: 28rpx;
				margin-top: -5rpx;
			}
			.middles{
				font-size: 24rpx;
				color:#999999;
				margin: 20rpx 0 30rpx 0;
			}
			.bottoms{
				font-size: 24rpx;
				color:#666666;
			}
		}
		.b_right{
			text-align: right;
			view:first-child{
				font-size: 28rpx;
				color:#F2221F;
			}
			view:last-child{
				font-size: 24rpx;
				color:#FF9749;
				margin-top: 10rpx;
			}
		}
	}
</style>
