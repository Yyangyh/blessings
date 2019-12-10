<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="course_top">
			<view class="top_one" @tap="top_show = 0" :class="{top_show:top_show == 0}">
				课程视频
			</view>
			<view class="top_one" @tap="top_show = 1" :class="{top_show:top_show == 1}">
				音频订单
			</view>
		</view>
		<view class="course_mid">
			<view class="mid_one" @tap="mid_show = 0" :class="{mid_show:mid_show == 0}">
				全部
			</view>
			<view class="mid_one" @tap="mid_show = 1" :class="{mid_show:mid_show == 1}">
				待付款
			</view>
			<view class="mid_one" @tap="mid_show = 2" :class="{mid_show:mid_show == 2}">
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
		
						<view class="top2 refund" v-if="item.status == 7">
							{{item.status_name}}
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
					</view>
					
					<view class="list_middle" @click="jump('threeuser/s_order_details?id='+item.id)">
						<view class="">
							<image :src="item.video.v_pic" mode="widthFix"></image>
						</view>
						<view class="middle1">
							<view class="">{{item.video.title}}</view>
							<view>{{item.video.long_title}}</view>
						</view>
						<!-- <view class="middle2">x1</view> -->
						
					</view>
						
		
					<view class="list_bottom">
						<!-- <view class="bottom1">
							支付方式：在线支付
						</view> -->
						
						<view class="bottom_one">
							<view class="bottom2">
								共1个视频  合计:<text>￥{{item.pay_price}}</text>
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
	import returns from '../common/returns.vue'
	import uniLoadMore from '../../components/uni-load-more/uni-load-more.vue'
		export default{
			components:{
				returns,
				uniLoadMore
			},
			data(){
				return{
					title:'课程订单',
					top_show:0,
					mid_show:0,
					data:[],
					more: 'more',
					page: 1,
					loadRecord: true
				}
			},
			methods:{
				Index(){
					let page = this.page
					this.more = 'loading'
					this.service.entire(this,'post',this.APIconfig.api_root.subuser.v_orderList,{
						userid:this.$store.state.user.id,
						page:1,
						limit:10,
						type:6,
						video_type:1
					},function(self,res){
						console.log(res)
						let data = self.data
						data.push(...res.data.order_list)
						
						console.log(self.data);
						self.page = page + 1
						self.more = 'more'
						if (res.data.order_list.length < 10) {
							self.more = 'noMore'
							self.loadRecord = false
							return
						}
						
					})
				}
			},
			onShow() {
				this.data.length = 0
				this.page = 1
				this.Index()
			},
			onReachBottom() {
				if (this.loadRecord == false) return
				this.Index()
			},
		}
</script>

<style lang="scss">
	.course_top{
		height: 115rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 67rpx;
		font-size: 28rpx;
		.top_one{
			width: 256rpx;
			height: 75rpx;
			line-height: 75rpx;
			box-sizing: border-box;
			text-align: center;
			color: #EF7C38;
			border: 2rpx solid #EF7C38;
			border-radius: 10rpx;
		}
		.top_show{
			background: #EF7C38;
			color: #fff;
		}
	}
	.course_mid{
		font-size: 28rpx;
		color: #666666;
		background: #F2F2F2;
		display: flex;
		.mid_one{
			height: 100rpx;
			line-height: 100rpx;
			width: 33.3%;
			text-align: center;
			border-bottom: 2rpx solid #F2F2F2;
		}
		.mid_show{
			color: #D80000;
			border-bottom-color: #D80000;
		}
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
</style>
