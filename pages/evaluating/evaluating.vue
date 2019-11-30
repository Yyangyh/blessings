<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<returns :titles='title'></returns>
		<view class="allorder">
			  <text @click="cur=0" class="one" :class="{active:cur==0}">幸福测评</text>
			  <text @click="cur=1" class="two" :class="{active:cur==1}">调查问卷</text>
			  <text @click="cur=2" class="three" :class="{active:cur==2}">测评记录</text>
		</view>
		<view class="box" v-show="cur==0">
			<view class="tergum">
				<view class="terLeft">
					<view>默契大作战</view>
					<view>666888人已测</view>
				</view>
				<view class="terRight">
					<text>开始测试</text>
					<image src="../../static/image/index/go.png"></image>
				</view>
			</view>
			<view class="tergum1">
				<view class="terLeft">
					<view>魅力值测试</view>
					<view>666888人已测</view>
				</view>
				<view class="terRight">
					<text>开始测试</text>
					<image src="../../static/image/index/go.png"></image>
				</view>
			</view>
			<view class="tergum2">
				<view class="terLeft">
					<view>安全感测试</view>
					<view>666888人已测</view>
				</view>
				<view class="terRight">
					<text>开始测试</text>
					<image src="../../static/image/index/go.png"></image>
				</view>
			</view>
			<view class="tergum3">
				<view class="terLeft">
					<view>默契大作战</view>
					<view>666888人已测</view>
				</view>
				<view class="terRight">
					<text>开始测试</text>
					<image src="../../static/image/index/go.png"></image>
				</view>
			</view>
		</view>
		<view class="questionnaire">
			
			<view>您对五福家庭有什么建议</view>
			<view></view>
			<view>十分感谢您对这次调查的支持！</view>
			<button type="default">提交问卷</button>
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
				title:'我的测评',
				cur:0,
			}
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		height: 100vh;
		background-color: #F6F6F7;
		.allorder{
			width: 100%;
			height: 120upx;
			display: flex;
			text-align: center;
			line-height: 120upx;
			font-size: 28upx;
			text{
				flex: 1;
			}
		}
		.active{
			color:#D80000;
		}
		.box{
			width: 100%;
			height: 100vh;
			background-color: #FFFFFF;
			padding-top: 20rpx;
			.tergum{
				width: 710rpx;
				height: 170rpx;
				background: url(../../static/image/evaluating/cur1.png) no-repeat;
				background-size: 100% 100%;
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 53rpx 0 44rpx;
				.terLeft{
					view:first-child{
						font-size: 32rpx;
						color: #FFFFFF;
					}
					view:last-child{
						margin-top: 10rpx;
						font-size: 24rpx;
						color: #FFFFFF;
					}
				}
				.terRight{
					display: flex;
					align-items: center;
					image{
						width: 8rpx;
						height: 17rpx;
					}
					text{
						font-size: 24rpx;
						color: #FFFFFF;
					}
				}
			}
			.tergum1{
				width: 710rpx;
				height: 170rpx;
				background: url(../../static/image/evaluating/cur2.png) no-repeat;
				background-size: 100% 100%;
				margin: 30rpx auto 0;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 53rpx 0 44rpx;
				.terLeft{
					view:first-child{
						font-size: 32rpx;
						color: #FFFFFF;
					}
					view:last-child{
						margin-top: 10rpx;
						font-size: 24rpx;
						color: #FFFFFF;
					}
				}
				.terRight{
					display: flex;
					align-items: center;
					image{
						width: 8rpx;
						height: 17rpx;
					}
					text{
						font-size: 24rpx;
						color: #FFFFFF;
					}
				}
			}
			.tergum2{
				width: 710rpx;
				height: 170rpx;
				background: url(../../static/image/evaluating/cur3.png) no-repeat;
				background-size: 100% 100%;
				margin: 30rpx auto 0;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 53rpx 0 44rpx;
				.terLeft{
					view:first-child{
						font-size: 32rpx;
						color: #FFFFFF;
					}
					view:last-child{
						margin-top: 10rpx;
						font-size: 24rpx;
						color: #FFFFFF;
					}
				}
				.terRight{
					display: flex;
					align-items: center;
					image{
						width: 8rpx;
						height: 17rpx;
					}
					text{
						font-size: 24rpx;
						color: #FFFFFF;
					}
				}
			}
			.tergum3{
				width: 710rpx;
				height: 170rpx;
				background: url(../../static/image/evaluating/cur4.png) no-repeat;
				background-size: 100% 100%;
				margin:30rpx auto 0;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 53rpx 0 44rpx;
				.terLeft{
					view:first-child{
						font-size: 32rpx;
						color: #FFFFFF;
					}
					view:last-child{
						margin-top: 10rpx;
						font-size: 24rpx;
						color: #FFFFFF;
					}
				}
				.terRight{
					display: flex;
					align-items: center;
					image{
						width: 8rpx;
						height: 17rpx;
					}
					text{
						font-size: 24rpx;
						color: #FFFFFF;
					}
				}
			}
		}
		.questionnaire{
			width: 100%;
			height: 1334rpx;
			background: url(../../static/image/evaluating/back.png) no-repeat;
			background-size: 100% 100%;
			
		}
	}
</style>
