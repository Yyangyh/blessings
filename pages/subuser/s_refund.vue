<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="top">
			<view class="top_enlarge"  @click="returns()">
				<image src="../../static/image/com_page/returns.png" mode="widthFix" ></image>
			</view>
			<text>退款</text>
			<text></text>
		</view>
		<view class="mall_box">
			<view class="box_bottom">
				<view class="bottom_list" v-for="(item,index) in data" :key='item.id'>
					<view class="list_top">
						<view class="top1" v-if="item.merchid == 0">
							<image src="../../static/image/subuser/shop.png" mode="widthFix"></image>
							<text class="own">自营</text>
							<!-- <image src="../../static/image/go.png" mode="widthFix"></image> -->
						</view>
						<view class="top1" v-else>
							<image src="../../static/image/subuser/shop.png" mode="widthFix"></image>
							<text>{{item.merchname}}</text>
							<image src="../../static/image/subuser/go.png" mode="widthFix"></image>
						</view>
						<view class="top2">
							{{item.status_text}}
						</view>
					</view>
					
					
					
					<view  >
						<!-- 加多一个盒子套住评论 -->
						<view class="list_middle" @click="jump('threeuser/refund_details?oid='+item.order_id+'&did='+item.order_data.items.id)">
							<view class="">
								<image :src="item.order_data.items.images" mode="aspectFill"></image>
							</view>
							<view class="middle1">
								<view class="">{{item.order_data.items.title}}</view>
								<!-- <view>套装</view> -->
							</view>
							<view class="middle2">x1</view>
							
						</view>
						
					</view><!-- 加多一个盒子套住评论 -->

					<view class="list_bottom">
						<!-- <view class="bottom1">
							支付方式：在线支付
						</view> -->
						
						<view class="bottom_one">
							<view class="bottom2">
								订单金额<text>￥{{item.order_data.total_price}}</text>
							</view>
							
							<view>
								
								<view class="bottom_ash" v-if="item.type == 1  && item.status == 1" @click="jump('threeuser/return_goods?id='+item.id)">
									填写退货信息
								</view>
								<view class="bottom3" @click="jump('threeuser/s_refund_details?oid='+item.order_id+'&did='+item.order_data.items.id)">
									详情
								</view>
							</view>
						</view>
					</view>
				</view>

			</view>
		</view>
		<uni-load-more :status="more"></uni-load-more>
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	import uniLoadMore from '../../components/uni-load-more/uni-load-more.vue'
	export default {
		components: {
			returns,
			uniLoadMore
		},
		data() {
			return {
				show: 0,
				data: [],
				status: '',
				more: 'more',
				page: 1,
				loadRecord: true
			}
		},
		methods: {
			returns() {
				uni.switchTab({
					url: '/pages/index/user'
				});
			},
			jump(url) {
				
				uni.navigateTo({
					url: url
				})
			},
			
			loadMore() {
				let page = this.page
				this.more = 'loading'
				this.service.entire(this, 'post', this.APIconfig.api_root.subuser.s_aftersale_list, {
					user_id:this.$store.state.user.id,
					// is_more: 1,
					// status: this.show,
					page: page
				}, function(self, res) {

					let data = self.data

					data.push(...res.data.data)
					self.data = data
					self.page = page + 1
					self.more = 'more'
					if (res.data.data.length < 10) {
						self.more = 'noMore'
						self.loadRecord = false
						return
					}
				})
			}
		},
		onLoad(options) {
			this.status = options.status
			this.show = options.status
		},
		onReachBottom() {
			if (this.loadRecord == false) return
			this.loadMore()
		},
		onShow() {
			this.data.length = 0
			this.page = 1
			this.loadMore()
		}
	}
</script>

<style scoped lang="scss">
	.mall_box {
		font-size: 30rpx;

	}

	.refund {
		/* 退款 */
		color: #666666;
	}

	.obligation {
		/* 待支付 */
		color: #D9011C;
	}

	.stayGoods {
		/* 收货 */
		color: #02A7F0;
	}

	.stayComment {
		/* 待评价 */
		color: #F09B22;
	}

	.top {
		position: fixed;
		width: 100%;
		box-sizing: border-box;
		top: var(--status-bar-height);
		left: 0;
		z-index: 99;
		height: 105rpx;
		padding: 0 44rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
		background: #fff;
		box-shadow: 0px 2rpx 4rpx 0px rgba(0, 0, 0, 0.1);
		.top_enlarge{
			display: flex;
			align-items: center;
			height: 100%;
			width: 180rpx;
		}
		image {
			height: 40rpx;
			width: 40rpx;
		}
		text:nth-of-type(2) {
			width: 40rpx;
			display: inline-block;
		}
	}


	.mall_box{
		.box_top {
			display: flex;
			justify-content: space-between;
			padding: 0 20rpx;
			margin: 28rpx 0 40rpx 0;
			.top_list {
				padding: 0 20rpx;
				height: 44rpx;
				line-height: 44rpx;
				border-radius: 44rpx;
			}
		}
		.box_bottom {
			background: #fff;
			padding-top: 20rpx;
			.bottom_list {
				padding: 20rpx;
				background: #fff;
				border-radius: 20rpx;
				margin: 0 20rpx 32rpx 20rpx;
				box-shadow: 0px 0rpx 20rpx 0px rgba(0, 0, 0, 0.1);
				.list_top {
					display: flex;
					justify-content: space-between;
					.top1 {
						display: flex;
						align-items: center;
						.own{
							color: #D9011C;
						}
						image {
							height: 30rpx;
							width: 30rpx;
						}
					}
					.top2 {
						font-size: 28rpx;
						color: #D9011C;
					}
				}
				.list_middle {
					display: flex;
					align-items: center;
					margin-top: 30rpx;
					.middle1 {
						font-size: 24rpx;
						color: #999999;
						view:nth-of-type(1) {
							font-size: 28rpx;
							font-weight: bold;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							overflow: hidden;
						}
					}
					.middle2 {
						font-size: 26rpx;
						color: #999999;
						flex-grow: 2;
						text-align: right;
					}
					image {
						height: 122rpx;
						width: 122rpx;
						margin-right: 20rpx;
					}
					
				}
				.list_bottom {
					text-align: right;
					font-size: 24rpx;
					color: #999999;
					.bottom2 {
						text-align: right;
						margin: 10rpx 0;
						text {
							font-weight: bold;
							margin-left: 10rpx;
						}
					}
					.bottom3 {
						display: inline-block;
						width: 154rpx;
						height: 52rpx;
						line-height: 52rpx;
						border-radius: 52rpx;
						background: #fff;
						color: #D80000;
						border: 2rpx solid #D80000;
						text-align: center;
						margin-left: 20rpx;
					}
					.bottom_ash{
						display: inline-block;
						padding: 0 20rpx;
						height: 52rpx;
						line-height: 52rpx;
						border-radius: 52rpx;
						background: #fff;
						color: #666666;
						border: 2rpx solid #666666;
						text-align: center;
						margin-left: 20rpx;
					}
				}
			}
			
		}
	}

	
	.bottom_one{
		/* display: flex;
		justify-content: space-between; */
	}
	.pl_box{
		margin-bottom: 10rpx;
		display: flex;
		justify-content: space-between;
	}
	.pl {
		width: 154rpx;
		height: 52rpx;
		line-height: 52rpx;
		border-radius: 52rpx;
		background: #1D9DFF;
		color: #fff;
		text-align: center;
		/* float: right; */
		
	}
</style>
