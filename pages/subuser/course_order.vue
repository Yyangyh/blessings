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
		<view class="course_top">
			<view class="top_one" @tap="chiose(1)" :class="{top_show:top_show == 1}">
				课程视频
			</view>
			<view class="top_one" @tap="chiose(2)" :class="{top_show:top_show == 2}">
				音频订单
			</view>
		</view>
		<view class="course_mid">
			<view class="mid_one" @tap="chiose_status(6)" :class="{mid_show:mid_show == 6}">
				全部
			</view>
			<view class="mid_one" @tap="chiose_status(0)" :class="{mid_show:mid_show == 0}">
				待付款
			</view>
			<view class="mid_one" @tap="chiose_status(1)" :class="{mid_show:mid_show == 1}">
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
		
						<view class="top2 refund" v-if="item.state == 0">
							待支付
						</view>
						<view class="top2 obligation" v-if="item.state == 1">
							已支付
						</view>
						<view class="top2 obligation" v-if="item.state == 9">
							已取消
						</view>
						
					</view>
					
					<view class="list_middle" @click="$jump('threeuser/c_order_details?id='+item.id)">
						<view class="v_img">
							<image :src="$api_img()+item.video.v_pic" mode="scaleToFill"></image>
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
								<!-- <view class="bottom_ash" v-if='item.status == 4 && item.user_is_comments ==0' @click="jump('threeuser/s_comment_order?id='+item.id)">
									评论
								</view> -->
								<view class="bottom3" @click="$jump('threeuser/c_order_details?id='+item.id)">
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
		export default{
			components:{
				uniLoadMore
			},
			data(){
				return{
					top_show:1,
					mid_show:6,
					data:[],
					more: 'more',
					page: 1,
					loadRecord: true,
					
				}
			},
			methods:{
				returns() {
					// uni.switchTab({
					// 	url: '/pages/index/user'
					// });
					uni.redirectTo({
					    url: './myorder'
					});
				},
				Index(){
					this.more = 'loading'
					let data = {
						userid:this.$store.state.user.id,
						page:this.page,
						limit:10,
						type:this.mid_show,
						video_type:this.top_show
					}
					this.uni_request(data)
				},
				chiose(type){ //音频视频切换
					this.more = 'loading'
					this.top_show = type
					this.mid_show = 6
					this.loadRecord = true
					this.page = 1
					this.data.length = 0
					let data = {
						userid:this.$store.state.user.id,
						page:this.page,
						limit:10,
						type:this.mid_show,
						video_type:this.top_show
					}
					this.uni_request(data)
				},
				chiose_status(type){ //订单状态切换
					this.more = 'loading'
					this.mid_show = type
					this.loadRecord = true
					this.page = 1
					this.data.length = 0
					let data = {
						userid:this.$store.state.user.id,
						page:this.page,
						limit:10,
						type:this.mid_show,
						video_type:this.top_show
					}
					this.uni_request(data)
				},
				uni_request(data){
					this.service.entire(this,'post',this.APIconfig.api_root.subuser.v_orderList,data,function(self,res){
						let data = self.data
						data.push(...res.data.order_list)
						self.page += 1
						self.more = 'more'
						if (res.data.order_list.length < 10) {
							self.more = 'noMore'
							self.loadRecord = false
							return
						}
						
					})
				}
					
			},
			onLoad(e) {
				this.mid_show = e.status
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
		.box_bottom {
			background: #fff;
			.bottom_list {
				padding: 20rpx;
				background: #fff;
				border-bottom: 2rpx solid #EEEEEE;
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
						color: #D80000;
					}
					
				}
				.list_middle {
					display: flex;
					// align-items: center;
					margin-top: 30rpx;
					.v_img{
						height: 189rpx;
						width: 268rpx;
						margin-right: 15rpx;
						image{
							height: 100%;
							width: 100%;
							
						}
					}
					.middle1 {
						font-size: 24rpx;
						color: #999999;
						view:nth-of-type(1) {
							font-size: 28rpx;
							margin-bottom: 15rpx;
							color: #000000;
							font-weight: bold;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							overflow: hidden;
						}
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
