<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<view class="allorder">
			  <text @click="cur=0" class="one" :class="{active:cur==0}">近期活动</text>
			  <text @click="cur=1" class="two" :class="{active:cur==1}">往期活动</text>
		</view>
		  <view class="boxs" v-show="cur==0">
			  <view class="worp" @tap="service.jump('./particulars')">
				 <image src="../../static/image/index/huo1.png"></image>
				 <view class="theme">让爱回家|高分孩子·智慧父母一大型公益巡讲</view>
				 <view class="line">
					  <image src="../../static/image/index/apply.png"></image>
					  <text>已报名37人</text>
					  <text>容限1000人报名</text>
				  </view>
				  <view class="price">￥100.0</view>
			  </view>
			  <view class="worp"  @tap="service.jump('./particulars')">
				  <view class="line">
					  <image src="../../static/image/index/time.png"></image>
					  <text class="theme">6月27日 </text>
					  <text>星期三</text>
					  <text>17:00-19:00</text>
				  </view>
				  <hr />
				  <view class="line">
					  <image src='../../static/image/index/site.png'></image>
					  <text class="theme">广东省东莞市帝京国际酒店</text>
				  </view>
				 <image src="../../static/image/index/huo2.png"></image>
				  <view class="theme">让爱回家|高分孩子·智慧父母一大型公益巡讲</view>
				  <view class="line">
					  <image src="../../static/image/index/apply.png"></image>
					  <text>已报名37人</text>
					  <text>容限1000人报名</text>
				   </view>
				   <view class="price">￥100.0</view>
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
				cur:0,
				title:'活动'
			}
		},
		methods:{
			// toparticulars(){
			// 	uni.navigateTo({
			// 		url:'/pages/activity/particulars',
			// 	})
			// },
		}
	}
</script>

<style lang='scss'>
	.content{
		background: #F2F2F2;
		height: 100vh;
		width: 100%;
		.allorder{
			width: 100%;
			height: 120upx;
			display: flex;
			text-align: center;
			line-height: 120upx;
			font-size: 32upx;
			font-weight: bold;
			text{
				flex: 1;
			}
		}
		.active{
			color:#D80000;
		}
		.boxs{
			.worp{
				width: 100%;
				background-color: #FFFFFF;
				padding-top: 0 !important;
				hr{
					height:1rpx;
					border: none;
					border-top:1px solid #F4F4F4;
					width: 97%;
					margin: 0 auto;
				}
				image{
					width: 100%;
					height: 364upx;
				}
				.theme{
					font-size: 24upx;
					color:#333333;
					margin:20upx 0 20upx 23upx;
				}
				.line{
					display: flex;
					align-items: center;
					margin-left: 23rpx;
					image{
						width: 32rpx;
						height: 32rpx;
						margin-right: 28rpx;
					}
					text{
						font-size: 28rpx;
						color:#666666;
						margin-right: 28rpx;
					}
				}
				.price{
					font-size: 25rpx;
					font-weight: bold;
					color:#D80000;
					margin: 20rpx 0 20rpx 23rpx;
					padding-bottom:20rpx ;
					letter-spacing: 3rpx;
				}
			}
			
		}
	}
</style>
