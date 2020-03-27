<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="top">
			<view class="top_enlarge"  @click="returns()">
				<image src="/static/image/com_page/returns.png" mode="widthFix" ></image>
			</view>
			<text>商城订单</text>
			<text></text>
		</view>
		<view class="box_top">
			<view class="top_list" :class="{show:show == -1}" @click="chiose(-1)">
				全部
			</view>
			<view class="top_list" :class="{show:show == 1}" @click="chiose(1)">
				待付款
			</view>
			<view class="top_list" :class="{show:show == 2}" @click="chiose(2)">
				待发货
			</view>
			<view class="top_list" :class="{show:show == 3}" @click="chiose(3)">
				待收货
			</view>
			<view class="top_list" :class="{show:show == 4}" @click="chiose(4)">
				已完成
			</view>
			
		</view>
		<view class="mall_box">
			
			<view class="box_bottom">
				<view class="bottom_list" v-for="(item,index) in data" :key='item.id'>
					<view class="list_top">
						<view class="top1">
							<image src="/static/image/subuser/logo.png" mode="widthFix"></image>
							<text>五福家庭</text>
							<!-- <image src="/static/image/index/go.png" mode="widthFix"></image> -->
						</view>
						
						
						<view class="top2 obligation" v-if="item.status == 1">
							{{item.status_name}}
						</view>
						<view class="top2 stayGoods" v-if="item.status == 2">
							{{item.status_name}}
						</view>
						<view class="top2 stayComment" v-if="item.status == 3">
							{{item.status_name}}
						</view>
						<view class="top2 stayComment" v-if="item.status == 4">
							{{item.status_name}}
						</view>
						<view class="top2 refund" v-if="item.status == 5">
							{{item.status_name}}
						</view>
						<view class="top2 obligation" v-if="item.status == 6">
							{{item.status_name}}
						</view>
					</view>
					<view  v-for="(items,indexs) in item.items" :key='indexs'>
						<!-- 加多一个盒子套住评论 -->
						<view class="list_middle" @click="jump('threeuser/s_order_details?id='+item.id)">
							<view class="">
								<image :src="items.images" mode="aspectFill"></image>
							</view>
							<view class="middle1">
								<view class="">{{items.title}}</view>
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
								订单金额<text>￥{{item.total_price}}</text>
							</view>
							
							<view>
								<view class="bottom_ash" v-if='item.status == 4 || item.status == 5' @click="deletes(item.id,index)">
									删除订单
								</view>
								<view class="bottom_ash" v-if='item.status == 4 && item.user_is_comments ==0' @click="jump('threeuser/s_comment_order?id='+item.id)">
									评论
								</view>
								<!-- <view class="bottom3" v-if='item.status == 3' @click="jump('/pages/threeLayers/logistics?id='+item.express_id+'&number='+item.express_number)">
									查看物流
								</view> -->
								<view class="bottom3" @click="jump('threeuser/s_order_details?id='+item.id)">
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
	import uniLoadMore from '../../components/uni-load-more/uni-load-more.vue'
	export default {
		components: {
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
				// uni.switchTab({
				// 	url: '/pages/index/user'
				// });
				uni.redirectTo({
				    url: './myorder'
				});
			},
			jump(url) {
				
				uni.navigateTo({
					url: url
				})
			},
			deletes(id,index){ //删除订单
				let that = this
				uni.showModal({
					title: '提示',
					content: '是否确定删除订单？',
					success: function (res) {
						if (res.confirm) {
							that.service.entire(that, 'post', that.APIconfig.api_root.subuser.s_delete, {
								user_id: that.$store.state.user.id,
								id:id
							}, function(self, res) {
								uni.showToast({
									icon:'none',
									title:res.msg
								})
								if(res.code == 0)self.data.splice(index,1)
							})
						} else if (res.cancel) {
							// console.log('用户点击取消');
							return
						}
					}
				});
			
				
			},
			chiose(status) {
				this.more = 'loading'
				this.data = []
				this.show = status
				this.loadRecord = true
				this.service.entire(this, 'post', this.APIconfig.api_root.subuser.s_order, {
					user_id: this.$store.state.user.id,
					is_more: 1,
					status: status,
					page: 1
				}, function(self, res) {
					self.data = res.data.data
					if (res.data.data.length < 10) {
						self.more = 'noMore'
						self.loadRecord = false
					}
				})
			},
			loadMore() {
				let page = this.page
				this.more = 'loading'
				this.service.entire(this, 'post', this.APIconfig.api_root.subuser.s_order, {
					user_id: this.$store.state.user.id,
					is_more: 1,
					status: this.show,
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
	.content{
		padding-top:210rpx;
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
			width: 180rpx;
			display: inline-block;
		}
	}

	.box_top {
		background: #fff;
		width: 100%;
		position: fixed;
		top: calc(var(--status-bar-height) + 105rpx) ;
		left: 0;
		z-index: 888;
		padding: 0 20rpx;
		box-sizing: border-box;
		font-size: 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 105rpx;
		box-shadow:0rpx 4rpx 8rpx 0rpx rgba(0, 0, 0, 0.1);
		.top_list {
			padding: 0 20rpx;
			height:100%;
			display: flex;
			align-items: center;
			box-sizing: border-box;
			border-bottom: 6rpx solid #fff;
			line-height: 44rpx;
		}
	}


	.show {
		color: #D80000;
		border-bottom-color:  #D80000 !important;
	}

	.mall_box{
		font-size: 30rpx;
		padding-top: 30rpx;
		.box_bottom {
			background: #fff;
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
						text {
							margin: 0 8rpx;
							font-weight: 600;
							color: #3D3D3D;
						}
						image {
							height: 30rpx;
							width: 30rpx;
						}
					}
					.top2 {
						font-size: 28rpx;
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
						width: 154rpx;
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
