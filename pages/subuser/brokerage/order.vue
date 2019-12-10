<template>
	<view class="content">
		<view class="status_bar">
					
		</view >
		<returns :titles='title'></returns>
		<view class="order_top">
			<view class="top_box">
				<view>待结算</view>
				<view>0.00元</view>
			</view>
			<view  class="top_box">
				<view>已结算</view>
				<view>0.00元</view>
			</view>
			<view  class="top_box">
				<view>已完成</view>
				<view>0.00元</view>
			</view>
		</view>
		<view class="allorder">
			  <text @click="cur=0" class="one" :class="{active:cur==0}">全部</text>
			  <text @click="cur=1" class="two" :class="{active:cur==1}">待结算</text>
			  <text @click="cur=2" class="three" :class="{active:cur==2}">已结算</text>
			  <text @click="cur=3" class="four" :class="{active:cur==3}">完成</text>
		</view>
		<view class="box" v-show="cur==0">
			<!-- 订单一 -->
			<view class="line" @click="reveal=true">
				<view class="l_left">
					<image src="../../../static/image/subhome/photo.png"></image>
					<view class="left_text">
						<view><text style="margin-right: 5rpx;">昵称:</text><text>牛哄哄</text></view>
						<view style="margin-top: 5rpx;">DD20191009101213369202</view>
					</view>
				</view>
				<view class="middle"></view>
				<view class="l_right">
					<view>+299.00</view>
					<view>已结算</view>
				</view>
			</view>
			<view class="particulars" v-if="reveal">
				<view class="lines">
					<view>订单号：</view>
					<text>DD20191009101213369202</text>
				</view>
				<view class="lines">
					<view>状态：</view>
					<text>已结算</text>
				</view>
				<view class="lines">
					<view>订单金额：</view>
					<text>999.00元</text>
				</view>
				<view class="lines">
					<view>分销金额：</view>
					<text> 299.00元</text>
				</view>
			</view>
			<!-- 订单二 -->
			<view class="line" @click="reveal=true">
				<view class="l_left">
					<image src="../../../static/image/subhome/photo.png"></image>
					<view class="left_text">
						<view><text style="margin-right: 5rpx;">昵称:</text><text>牛哄哄</text></view>
						<view style="margin-top: 5rpx;">DD20191009101213369202</view>
					</view>
				</view>
				<view class="middle"></view>
				<view class="l_right">
					<view>+299.00</view>
					<view>已结算</view>
				</view>
			</view>
			<view class="particulars" v-if="reveal">
				<view class="lines">
					<view>订单号：</view>
					<text>DD20191009101213369202</text>
				</view>
				<view class="lines">
					<view>状态：</view>
					<text>已结算</text>
				</view>
				<view class="lines">
					<view>订单金额：</view>
					<text>999.00元</text>
				</view>
				<view class="lines">
					<view>分销金额：</view>
					<text> 299.00元</text>
				</view>
			</view>
			<view class="base">没有更多的数据了</view>
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
				title:'分销订单',
				cur:0,
				reveal:false,
			}
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		height: 100vh;
		background: #F6F6F7;
		.order_top{
			width:750rpx;
			height:158rpx;
			background:linear-gradient(90deg,rgba(247,76,74,1),rgba(245,110,106,1));
			display: flex;
			justify-content: space-around;
			align-items: center;
			font-size: 28rpx;
			color: #FFFFFF;
			.top_box{
				view{
					margin: 5rpx;
				}
			}
		}
		.allorder{
			width: 100%;
			height: 100upx;
			display: flex;
			text-align: center;
			line-height: 100upx;
			font-size: 28upx;
			background-color: #FFFFFF;
			text{
				flex: 1;
			}
		}
		.active{
			color:#D80000;
		}
		.box{
			.line{
				background-color: #FFFFFF;
				border-bottom: 1rpx solid #F1F1F1;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 30rpx 20rpx;
				.l_left{
					display: flex;
					align-items: center;
					image{
						width: 100rpx;
						height: 100rpx;
						margin-right: 24rpx;
					}
					.left_text{
						view:first-child{
							font-size: 28rpx;
						}
						view:last-child{
							font-size: 24rpx;
							color:#999999;
						}
					}
				}
				.middle{
					width:1rpx;
					height:81rpx;
					background:rgba(204,204,204,1);
				}
				.l_right{
					font-size: 24rpx;
					text-align: center;
					view{
						margin: 2rpx 0;
					}
				}
			}
			.particulars{
				padding: 0 20rpx;
				.lines{
					display: flex;
					font-size: 24rpx;
					align-items: center;
					color:#333333;
					view{
						width: 125rpx;
						margin: 12rpx 0;
					}
				}
			}
		}
		.base{
			font-size: 24rpx;
			color:#999999;
			text-align: center;
			margin-top: 31rpx;
		}
	}
</style>
