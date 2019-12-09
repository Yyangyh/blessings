<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<image class='integralback' src="../../../static/image/subuser/integralback.png"></image>
		<view class="back_text">
			<view class="rightjio"  @tap="$jump('./know')">
				<image src='../../../static/image/subuser/wenhao.png'></image>
				<text>了解积分</text>
			</view>
			<view class="t-text1">12596</view>
			<view class="t-text2">可用积分</view>
		</view>
		<view class="allorder">
			<text @click="cur=0" class="one" :class="{active:cur==0}">积分明细</text>
			<text @click="cur=1" class="two" :class="{active:cur==1}">积分收入</text>
			<text @click="cur=2" class="three" :class="{active:cur==2}">积分支出</text>
		</view>
		<view class="box" v-show="cur==0">
			<view class="line">
				<view class="l_left">
					<view>签到</view>
					<view>2018-05-23</view>
				</view>
				<view class="l_right">+100.00</view>
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
				title:'我的积分',
				cur:0,
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.content{
		position: relative;
		.integralback{
			position: absolute;
			top: 106rpx;
			left: 0;
			width: 100%;
			height: 370rpx;
		}
		.back_text{
			position: absolute;
			top:106rpx;
			left: 0;
			width: 100%;
			.rightjio{
				width: 201rpx;
				height: 53rpx;
				border: 1rpx solid #FFFFFF;
				border-radius:27px;
				display: flex;
				align-items: center;
				padding-left: 20rpx;
				margin:36rpx 0 0 522rpx;
				image{
					width: 32rpx;
					height: 32rpx;
					margin-right: 20rpx;
				}
				text{
					font-size: 28rpx;
					color:#FFFFFF;
				}
			}
			.t-text1{
				font-size: 84rpx;
				color: #FFFFFF;
				text-align: center;
			}
			.t-text2{
				font-size: 32rpx;
				color: #FFFFFF;
				text-align: center;
				margin-bottom: 30rpx;
			}
		}
		.allorder{
			background-color: #FFFFFF;
			box-shadow:1rpx 1rpx 6rpx 0rpx rgba(177,65,65,0.27);
			border-radius:10rpx;
			width: 100%;
			height:100upx;
			display: flex;
			text-align: center;
			line-height: 100upx;
			font-size: 28upx;
			position: absolute;
			top: 390rpx ;
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
			top:490rpx;
			left: 0;
			.line{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding:  31rpx;
				border-bottom:1rpx solid #E9E9E9 ;
				background-color: #FFFFFF;
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
					font-size: 36rpx;
					color:#EA5656;
				}
			}
		}
	}
</style>
