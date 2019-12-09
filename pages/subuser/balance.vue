<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<image class="black" src="../../static/image/subuser/blance.png"></image>
		<view class="money">
			<view>可用余额（元）</view>
			<view>0.00</view>
		</view>
		<view class="allorder">
			<text @click="cur=0" class="one" :class="{active:cur==0}">全部</text>
			<text @click="cur=1" class="two" :class="{active:cur==1}">收入</text>
			<text @click="cur=2" class="three" :class="{active:cur==2}">支出</text>
		</view>
		<view class="box"  v-show="cur==0">
			<view class="line">
				<view class="l_left">
					<view>在线支付</view>
					<view>2018-05-23</view>
				</view>
				<view class="l_right">-200.00</view>
			</view>
			<view class="line">
				<view class="l_left">
					<view>在线支付</view>
					<view>2018-05-23</view>
				</view>
				<view class="l_right">-15.00</view>
			</view>
			<view class="line">
				<view class="l_left">
					<view>后台充值</view>
					<view>2018-05-23</view>
				</view>
				<view class="l_right">-50.00</view>
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
					title:'余额',
					cur:0,
				}
			},
		}
</script>

<style lang="scss">
	.content{
		position: relative;
		.black{
			width: 100%;
			height: 209rpx;
			position:absolute;
			top:106rpx;
			left: 0;
			z-index: 100;
		}
		.money{
			width: 100%;
			position: absolute;
			top:106rpx;
			z-index: 111;
			color: #FFFFFF;
			text-align: center;
			padding-top: 40rpx;
			view:first-child{
				font-size: 24rpx;
				text-align: center;
			}
			view:last-child{
				font-size: 60rpx;
				margin-top: 15rpx;
			}
		}
		.allorder{
			width: 100%;
			height:100upx;
			display: flex;
			text-align: center;
			line-height: 100upx;
			font-size: 28upx;
			position: absolute;
			top: 200rpx;
			left: 0;
			border-bottom:1rpx solid #E9E9E9;
			text{
				flex: 1;
			}
		}
		.active{
			color:#D80000;
			border-bottom:1rpx solid #D80000 ;
		}
		.box{
			width: 100%;
			position: absolute;
			top:300rpx;
			left: 0;
			.line{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding:  31rpx;
				border-bottom:1rpx solid #E9E9E9 ;
				.l_left{
					view:first-child{
						font-size: 28rpx;
						color:#343434 ;
					}
					view:last-child{
						font-size: 24rpx;
						color:#A1A1A1;
					}
				}
				.l_right{
					font-size: 30rpx;
					color:#0C0C0C;
				}
			}
		}
	}
</style>
