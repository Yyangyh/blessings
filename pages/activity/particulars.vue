<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<view class="worp">
			<image src="../../static/image/index/huo1.png" mode="widthFix"></image>
			<view class="theme">让爱回家|高分孩子·智慧父母一大型公益巡讲</view>
			<view class="line">
			  <image src="../../static/image/index/apply.png" mode="widthFix"></image>
			  <text>已报名37人</text>
			  <text>限1000人报名</text>
			 </view>
			 <view class="price">￥100.0/399积分</view>
			<view class="count">
				 <text>剩余</text>
				 <view>00</view>
				 <text>天</text>
				 <view>01</view>
				 <text>时</text>
				 <view>34</view>
				 <text>分</text>
				 <view>48</view>
				 <text>秒</text>
			 </view>
		</view>
		<view class="worp">
			<view class="line">
			  <image src="../../static/image/index/time.png" mode="widthFix"></image>
			  <text class="theme1">6月27日 </text>
			  <text>星期三</text>
			  <text>17:00-19:00</text>
			</view>
			<hr />
			<view class="line">
				<image src='../../static/image/index/site.png' mode="widthFix"></image>
				<text class="theme1">广东省东莞市帝京国际酒店</text>
			</view>
			<hr />
			<view class="line">
				<image src='../../static/image/index/zhubanfang.png' mode="widthFix"></image>
				<text class="theme1">主办方：五福家庭教育</text>
			</view>
		</view>
		<view class="worp">
			<view class="top">
				<text>已报名</text>
				<text>查看更多</text>
			</view>
			<view class="personnel-list">
				<view class="list">
					<image src='../../static/image/index/per.png' mode="widthFix"></image>
					<view>老胡</view>
				</view>
			</view>
		</view> 
		<view class="p-t">活动详情</view>
		<image class="image" src='../../static/image/index/xq.png' mode="widthFix"></image>
		<view class="underway">
			<button type="default" @tap="$jump('./apply')">立即报名</button>
			<button type="default">邀请好友</button>
		</view>
		<view class="finish">
			<button>活动已结束</button>
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
				title:'活动详情',
			}
		},
		methods:{
			// toapply(){
			// 	uni.navigateTo({
			// 		url:'/pages/activity/apply',
			// 	})
			// },
		}
	}
</script>

<style lang='scss'>
	.content{
		height: 100%vh;
		width: 100%;
		background-color: #F2F2F2;
		.worp{
			width: 100%;
			background-color: #FFFFFF;
			padding-top: 0 !important;
			margin:0 0 30rpx 0 ;
			hr{
				height:1rpx;
				border: none;
				border-top:1px solid #F4F4F4;
				width: 97%;
				margin: 0 auto;
			}
			image{
				width: 100%;
				height: 364rpx;
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
					margin-right: 20rpx;
				}
				.theme1{
					font-size: 24upx;
					color:#333333;
					margin:20upx 0 20upx 0upx;
				}
			}
			.price{
				font-size: 25rpx;
				font-weight: bold;
				color:#D80000;
				margin: 20rpx 0 0 23rpx;
				letter-spacing: 3rpx;
			}
			.count{
				display: flex;
				margin-left: 23rpx;
				align-items: center;
				text{
					font-size: 26rpx;
					color:#F2221F;
				}
				view{
					width: 44rpx;
					height: 44rpx;
					text-align: center;
					font-size: 21rpx;
					color: #FFFFFF;
					line-height: 44rpx;
					background-color: #D80000;
					border-radius:5rpx;
					margin: 10rpx 0;
				}
			}
			.top{
				display: flex;
				justify-content: space-between;
				align-items:center;
				margin: 0 23rpx;
				padding: 20rpx 0;
				text:first-child{
					font-size: 27rpx;
					color: #000000;
				}
				text:last-child{
					font-size: 23rpx;
					color:#EF7C38;
				}
			}
			.personnel-list{
				display: flex;
				justify-content: space-around;
				.list{
					image{
						width: 96rpx;
						height: 96rpx;
						border-radius: 50%;
					}
					view{
						font-size: 23rpx;
						text-align: center;
					}
				}
			}
		}
		.p-t{
			font-size: 28rpx;
		}
		.image{
			margin-top: 30rpx;
			width: 100%;
			height: 988rpx;
		}
		.underway{
			background: #FFFFFF;
			display: flex;
			padding: 30rpx 0;
			button:first-child{
				width: 250rpx;
				height: 80rpx;
				font-size: 30rpx;
				color: #FFFFFF;
				text-align: center;
				line-height: 80rpx;
				background-color: #D80000;
				border: none;
				border-radius: 40rpx;
				letter-spacing: 10rpx;
			}
			button:last-child{
				width: 250rpx;
				height: 80rpx;
				font-size: 30rpx;
				color: #FFFFFF;
				text-align: center;
				line-height: 80rpx;
				background-color: #EF7C38;
				border: none;
				border-radius: 40rpx;
				letter-spacing: 10rpx;
			}
		}
	/* 	结束按钮 */
		.finish{
			background: #FFFFFF;
			padding: 30rpx 0;
			display: none;
			button{
				width: 600rpx;
				height: 80rpx;
				font-size: 30rpx;
				color: #FFFFFF;
				text-align: center;
				line-height: 80rpx;
				background-color: #999999;
				border: none;
				border-radius: 40rpx;
				letter-spacing: 10rpx;
			}
		}
	}
</style>
