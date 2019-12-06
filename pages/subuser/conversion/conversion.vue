<template>
	<view class="content">
		<view class="status_bar">
								
		</view >
		<returns :titles='title'></returns>
		<view class="allorder">
			<view  @click="cur=0" class="one box"   :class="{active:cur==0}">优惠券</view>
			<view  @click="cur=1" class="two box"   :class="{active:cur==1}">兑换券</view>
		</view>
		<view class="discounts">
			<view class="state">
				<view  @click="bur=0" class="one"   :class="{actives:bur==0}">待使用</view>
				<view  @click="bur=1" class="two"   :class="{actives:bur==1}">已使用</view>
				<view  @click="bur=2" class="three"  :class="{actives:bur==2}">已过期</view>
			</view>
		</view>
		<!-- <view class="discounts" v-show="cur==1">
			<view class="status">
				<view  @click="aur=0" class="one"   :class="{activeus:aur==0}">待使用</view>
				<view  @click="aur=1" class="two"   :class="{activeus:aur==1}">已使用</view>
				<view  @click="aur=2" class="three"  :class="{activeus:aur==2}">已过期</view>
			</view>
		</view> -->
		
		<view class="st" v-show="bur==0">
			<view class="quan">
				<view class="q_left">
					<view class="l_top">
						<view class="t_left">
							<text>￥</text>
							<text>200</text>
						</view>
						<view class="t_right">
							<view>优惠券</view>
							<view>
								<text>满减  </text>
								<text>满300减100</text>
							</view>
						</view>
					</view>
					<view class="l_bottom">
						有效期：2019-05-04至2019-05-06
					</view>
				</view>
				<view class="q_right">
					已领取
				</view>
			</view>
			
		</view>
		<view class="st" v-show="bur==1">
			<image class="back" src='../../../static/image/com_page/juan.png'></image>
			<view class="c-text">暂无优惠券</view>
			<button type="default" @tap="$jump('./exchange')">兑换入口</button>
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
				title:'优惠券',
				cur:0,
				bur:0,
				// aur:0
			}
		},
	}
</script>

<style lang="scss">
	.allorder{
		width: 100%;
		height: 100upx;
		display: flex;
		text-align: center;
		line-height: 100upx;
		font-size: 32upx;
		justify-content: space-around;
		padding-top: 20rpx;
		text{
			flex: 1;
		}
	}
	.box{
		width:256rpx;
		height:75rpx;
		border:1rpx solid rgba(239,124,56,1);
		border-radius:10rpx;
		color: #EF7C38;
		line-height: 75rpx;
	}
	.active{
		color:#FFFFFF;
		background: #EF7C38;
	}
	.state{
		width: 100%;
		height: 100upx;
		display: flex;
		text-align: center;
		justify-content: space-around;
		line-height: 100upx;
		font-size: 32upx;
		background-color: #F6F6F7;
		color: #666666;
		text{
			flex: 1;
		}
	}
	.actives{
		color:#D80000;
	}
	.quan{
		width: 709rpx;
		height: 181rpx;
		background: url(../../../static/image/com_page/coupon.png)no-repeat;
		background-size:100% 100% ;
		margin: 28rpx auto 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.q_left{
			display: flex;
			flex-direction:column;
			margin-left: 20rpx;
			.l_top{
				display: flex;
				align-items: center;
				.t_left{
					color: #D80000;
					margin-right:20rpx ;
					text:first-child{
						font-size: 28rpx;
					}
					text:last-child{
						font-size: 48rpx;
					}
				}
				.t_right{
					color: #FFFFFF;
					view:first-child{
						font-size: 28rpx;
						margin: 10rpx;
					}
					view:last-child{
						font-size: 24rpx;
						text{
							margin-right: 5rpx;
						}
					}
				}
			}
			.l_bottom{
				color: #FFFFFF;
				font-size: 24rpx;
				margin-top: 20rpx;
			}
		}
		.q_right{
			font-size: 28rpx;
			color:#FFFFFF;
			margin-right: 80rpx;
		}
	}
	.back{
		width: 147rpx;
		height: 113rpx;
		display: block;
		margin: 208rpx auto 0;
	}
	.c-text{
		font-size: 24rpx;
		color: #919090;
		text-align: center;
		margin: 24rpx 0 0 0;
	}
	button{
		width:256rpx;
		height:75rpx;
		background:rgba(216,0,0,1);
		border-radius:38rpx;
		color: #FFFFFF;
		text-align: center;
		line-height: 75rpx;
		position: fixed;
		top:1158rpx;
		left: 246rpx;
	}
</style>
