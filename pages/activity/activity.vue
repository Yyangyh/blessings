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
			<view class="worp"  v-for="(item,index) in activity_Data1" :key='item.id' @tap="$jump('./particulars?id='+item.id)">
				<view class="line">
					<image src="../../static/image/index/time.png" mode="widthFix"  ></image>
					<text class="theme">{{item.start_time_text}}至{{item.end_time_text}}</text>
				</view>
				<hr />
				<view class="line">
					<image src='../../static/image/index/site.png' mode="widthFix"></image>
					<text class="theme">{{item.address}}</text>
				</view>
				<image :src="APIconfig.api_img+item.cover" mode="widthFix"></image>
				<view class="theme">{{item.title}}</view>
				<view class="line">
					<image src="../../static/image/index/apply.png" mode="widthFix"></image>
					<text>已报名{{item.sign_number}}人</text>
					<text>限{{item.limit}}人报名</text>
				</view>
				<view class="price">￥{{item.price}}</view>
			</view>
		</view>

		<view class="boxs" v-show="cur==1">
			<view class="worp" v-for="(item,index) in activity_Data2" :key='item.id'  @tap="$jump('./particulars?id='+item.id)">
				<view class="line">
					<image src="../../static/image/index/time.png" mode="widthFix"></image>
					<text class="theme">{{item.start_time_text}}至{{item.end_time_text}}</text>
				</view>
				<hr />
				<view class="line">
					<image src='../../static/image/index/site.png' mode="widthFix"></image>
					<text class="theme">{{item.address}}</text>
				</view>
				<image :src="APIconfig.api_img+item.cover" mode="widthFix"></image>
				<view class="theme">{{item.title}}</view>
				<view class="line">
					<image src="../../static/image/index/apply.png" mode="widthFix"></image>
					<text>已报名{{item.sign_number}}人</text>
					<text>限{{item.limit}}人报名</text>
				</view>
				<view class="price">￥{{item.price}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	export default {
		components: {
			returns
		},
		data() {
			return {
				cur: 0,
				title: '活动',
				activity_Data: "",
				activity_Data1: [],
				activity_Data2: [],
			}
		},
		methods: {
			jump(url){
				uni.navigateTo({
					url:url
				})
			}
		},
		onLoad() {
			this.service.entire(this, 'post', this.APIconfig.api_root.subindex.a_activity_index, {
				
			}, function(self, res) {
				console.log(res)
				self.activity_Data = res.data.data
				for (var i = 0; i < self.activity_Data.length; i++) {
					if (self.activity_Data[i].is_expired == 0) {
						self.activity_Data1.push(self.activity_Data[i])
					} else if (self.activity_Data[i].is_expired == 1) {
						self.activity_Data2.push(self.activity_Data[i])
					}
				}
				console.log(self.activity_Data1)
				console.log(self.activity_Data2)
			})
		}
	}
</script>

<style lang='scss'>
	/* .content {
		background: #F6F6F7;
		height: 100vh;
		width: 100%; */
	page{
		background: #F6F6F7;
	}
		.allorder {
			width: 100%;
			height: 120upx;
			display: flex;
			text-align: center;
			line-height: 120upx;
			font-size: 32upx;
			font-weight: bold;

			text {
				flex: 1;
			}
		}

		.active {
			color: #D80000;
		}

		.boxs {
			.worp {
				width: 100%;
				background-color: #FFFFFF;
				padding-top: 0 !important;

				hr {
					height: 1rpx;
					border: none;
					border-top: 1px solid #F4F4F4;
					width: 97%;
					margin: 0 auto;
				}

				image {
					width: 100%;
					height: 364upx;
				}

				.theme {
					font-size: 24upx;
					color: #333333;
					margin: 20upx 0 20upx 23upx;
				}

				.line {
					display: flex;
					align-items: center;
					margin-left: 23rpx;

					image {
						width: 32rpx;
						height: 32rpx;
						margin-right: 28rpx;
					}

					text {
						font-size: 28rpx;
						color: #666666;
						margin-right: 28rpx;
					}
				}

				.price {
					font-size: 25rpx;
					font-weight: bold;
					color: #D80000;
					margin: 20rpx 0 20rpx 23rpx;
					padding-bottom: 20rpx;
					letter-spacing: 3rpx;
				}
			}

		}
/* 	} */
</style>
