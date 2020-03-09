<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="top">
			<view class="top_enlarge"  @click="returns()">
				<image src="/static/image/com_page/returns.png" mode="widthFix" ></image>
			</view>
			<text>我的订单</text>
			<text></text>
		</view>
		<view class="user_middle">
			<view class="middle_top">
				<view class="">
					我的订单
				</view>
			<!-- 	<view>
					<text>查看更多订单</text>
					<image src="../../static/image/go.png" mode="widthFix"></image>
				</view> -->
			</view>
			<view class="middle_tab">
				<view class="tab_top_box">
					<view class="tab_top">
						课程订单
					</view>
					<!-- <view class="more" @click="jump('../subuser/scen_order?status=-2')">
						查看更多
					</view> -->
				</view>
				
				<view class="tab_box">
					<view class="tab_list" @click="$jump('../subuser/course_order?status=6')">
						<image src="../../static/image/index/video1.png" mode="widthFix"></image>
						<view class="">
							全部
						</view>
					</view>
					<view class="tab_list" @click="$jump('../subuser/course_order?status=0')">
						<image src="../../static/image/index/video2.png" mode="widthFix" ></image>
						<view class="">
							待付款
						</view>
					</view>
					<view class="tab_list" @click="$jump('../subuser/course_order?status=1')">
						<image src="../../static/image/index/video3.png" mode="widthFix"></image>
						<view class="">
							已完成
						</view>
					</view>
					
					<!-- <view class="tab_list" @click="$jump('../subuser/course_order?status=2')">
						<image src="../../static/image/index/video4.png" mode="widthFix"></image>
						<view class="">
							退款
						</view>
					</view> -->
				</view>
				<view class="tab_top_box">
					<view class="tab_top">
						商城订单
					</view>
					<view class="more"  @click="$jump('../subuser/s_order?status=-1')">
						查看更多
					</view>
				</view>
				<view class="tab_box">
					<view class="tab_list"  @click="$jump('../subuser/s_order?status=1')">
						<image src="../../static/image/index/shopp_img1.png" mode="widthFix"></image>
						<view class="">
							待付款
						</view>
						<!-- <block v-if="order_status[1]">
							<text v-if="order_status[1].count != 0">{{order_status[1].count}}</text>
						</block> -->
					</view>
					<view class="tab_list" @click="$jump('../subuser/s_order?status=2')">
						<image src="../../static/image/index/shopp_img2.png" mode="widthFix"></image>
						<view class="">
							待发货
						</view>
						<!-- <block v-if="order_status[2]">
							<text v-if="order_status[2].count != 0">{{order_status[2].count}}</text>
						</block> -->
					</view>
					<view class="tab_list" @click="$jump('../subuser/s_order?status=3')">
						<image src="../../static/image/index/shopp_img3.png" mode="widthFix"></image>
						<view class="">
							待收货
						</view>
						<!-- <block v-if="order_status[3]">
							<text v-if="order_status[3].count != 0">{{order_status[3].count}}</text>
						</block> -->
					</view>
					<view class="tab_list" @click="$jump('../subuser/s_order?status=4')">
						<image src="../../static/image/index/shopp_img4.png" mode="widthFix"></image>
						<view class="">
							已完成
						</view>
						<!-- <block v-if="order_status[4]">
							<text v-if="order_status[4].count != 0">{{order_status[4].count}}</text>
						</block> -->
					</view>
					<view class="tab_list" @click="$jump('../subuser/s_refund')">
						<image src="../../static/image/index/shopp_img5.png" mode="widthFix"></image>
						<view class="">
							退款
						</view>
					</view>
					
				</view>
				
				
				
				<view class="tab_top_box">
					<view class="tab_top">
						拼团订单
					</view>
					<view class="more"  @click="$jump('../subuser/assemble_order?status=0')">
						查看更多
					</view>
				</view>
				<view class="tab_box">
					<view class="tab_list"  @click="$jump('../subuser/assemble_order?status=1')">
						<image src="../../static/image/index/group_img1.png" mode="widthFix"></image>
						<view class="">
							待付款
						</view>
						<!-- <block v-if="order_status[1]">
							<text v-if="order_status[1].count != 0">{{order_status[1].count}}</text>
						</block> -->
					</view>
					<view class="tab_list" @click="$jump('../subuser/assemble_order?status=2')">
						<image src="../../static/image/index/group_img2.png" mode="widthFix"></image>
						<view class="">
							待发货
						</view>
						<!-- <block v-if="order_status[2]">
							<text v-if="order_status[2].count != 0">{{order_status[2].count}}</text>
						</block> -->
					</view>
					<view class="tab_list" @click="$jump('../subuser/assemble_order?status=3')">
						<image src="../../static/image/index/group_img3.png" mode="widthFix"></image>
						<view class="">
							待收货
						</view>
						<!-- <block v-if="order_status[3]">
							<text v-if="order_status[3].count != 0">{{order_status[3].count}}</text>
						</block> -->
					</view>
					<view class="tab_list" @click="$jump('../subuser/assemble_order?status=4')">
						<image src="../../static/image/index/group_img4.png" mode="widthFix"></image>
						<view class="">
							已完成
						</view>
						<!-- <block v-if="order_status[4]">
							<text v-if="order_status[4].count != 0">{{order_status[4].count}}</text>
						</block> -->
					</view>
					<view class="tab_list" @click="$jump('../subuser/assemble_refund')">
						<image src="../../static/image/index/group_img5.png" mode="widthFix"></image>
						<view class="">
							退款
						</view>
					</view>
					
				</view>
				
			</view>
			
		</view>
	</view>
</template>

<script>
		export default{
			data(){
				return{
					
				}
			},
			methods:{
				returns(){
					uni.switchTab({
						url: '/pages/index/user'
					});
				}
			},
			onShow() {
			}
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
		box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
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
	.user_middle{
		background: #fff;
		margin: 20rpx;
		border-radius: 10rpx;
		padding:0rpx 30rpx 28rpx 30rpx;
		border-bottom: 1rpx solid #F2F2F2;
		.middle_top{
			display: flex;
			justify-content: space-between;
			font-size: 28rpx;
			color: #333;
			font-weight: bold;
			border-bottom: 2rpx solid #F2F2F2;
			padding: 34rpx 0;
			view:last-child{
				display: flex;
				align-items: center;
			}
			text{
				font-size: 22rpx;
				color: #333;
				margin-right: 24rpx;
			}
			image{
				width: 28rpx;
				height: 28rpx;
			}
		}
		.middle_tab{
			padding-top: 34rpx;
			.tab_top_box{
				display: flex;
				justify-content: space-between;
				.more{
					font-size: 24rpx;
					color: #CCCCCC;
				}
				&:nth-of-type(5){
					padding-top: 50rpx; 
				}
			}
			.tab_top{
				font-size: 24rpx;
				font-weight: bold;
				margin-bottom: 26rpx;
			}
			.tab_box:nth-of-type(2){
				padding-bottom: 26rpx;
				margin-bottom: 34rpx;
				border-bottom: 2rpx solid #F2F2F2;
				.tab_list{
					width: 20%;
					position: relative;
				}
			}
		}
	}
	.tab_box{
		display: flex;
		/* justify-content: space-between; */
		flex-wrap: wrap;
		text-align: center;
		color: #333333;
		font-size: 24rpx;
		.tab_list{
			width: 20%;
			position: relative;
			text{
				width: 40rpx;
				height: 40rpx;
				border-radius: 50%;
				font-size: 24rpx;
				text-align: center;
				line-height: 40rpx;
				background: #FF431D;
				color: #fff;
				position: absolute;
				top: 0;
				right: 16rpx;
				transform: scale(0.7);
			}
		}
		image{
			height: 54rpx;
			width: 54rpx;
			margin-bottom: 13rpx;
		}
	}
</style>
