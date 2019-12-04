<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<view class="user_top">
			<view class="top_one">
				<image src="../../static/image/index/set.png" mode="widthFix"></image>
				<image src="../../static/image/index/user_news.png" mode="widthFix"></image>
			</view>
			<view class="top_two">
				<view class="two_left">
					<image src="../../static/image/index/state_user.png" mode="widthFix"></image>
				</view>
				<view class="two_mid">
					<view class="mid_top">
						牛哄哄
					</view>
					<view class="mid_bottom">
						<image src="../../static/image/index/member.png" mode="widthFix"></image>
						<text>会员</text>
					</view>
				</view>
				<!-- <view class="two_right">
					<view class="">
						<image src="../../static/image/index/real_name.png" mode="widthFix"></image>
						<text>实名认证</text>
						<image src="../../static/image/index/go1.png" mode="widthFix"></image>
					</view>
				</view> -->
			</view>
			<view class="top_three">
				<view class="three_list">
					<view class="">
						0.00
					</view>
					<view class="">
						余额
					</view>
				</view>
				<view class="three_list">
					<view class="">
						0
					</view>
					<view class="">
						积分
					</view>
				</view>
			</view>
		</view>
		
		<view class="user_vip"  @tap="$jump('../subuser/member/member')">
			<view class="vip_one">
				<image src="../../static/image/index/vip.png" mode="widthFix"></image>
				<view class="">
					<view class="">
						成为超级会员
					</view>
					<view class="">
						享受特权，全年可省300元
					</view>
				</view>
			</view>
			<view class="vip_two">
				<view class="">
					立即开通
				</view>
				<image src="../../static/image/index/go.png" mode="widthFix"></image>
			</view>
		</view>
		
		<view class="user_top_list">
			<view class="user_tab">
				<view class="tab_list" @click="jump('../subuser/threeuser/open_member')">
					<image src="../../static/image/index/service.png" mode="widthFix"></image>
					<view class="">
						服务商
					</view>
				</view>
				<view class="tab_list"  @tap="$jump('../brokerage/brokerage')">
					<image src="../../static/image/index/commission.png" mode="widthFix"></image>
					<view class="">
						佣金
					</view>
				</view>
				<view class="tab_list" @click="jump('../subuser/integral')">
					<image src="../../static/image/index/tutor.png" mode="widthFix"></image>
					<view class="">
						导师考证
					</view>
				</view>
				<view class="tab_list" @click="jump('../subuser/coupon')">
					<image src="../../static/image/index/sign.png" mode="widthFix"></image>
					<view class="">
						签到
					</view>
				</view>
			</view>
		</view>
		
		<view class="list_bottom">
			<view class="list_test">
				其他服务
			</view>
			<view class="tab_box">
				<view class="tab_list"  @click="jump('../subuser/momey')">
				<!-- <view class="tab_list"> -->
					<image src="../../static/image/index/other_img1.png" mode="widthFix"></image>
					<view class="">
						学习记录
					</view>
				</view>
				<view class="tab_list"  @click="jump('../subuser/distribution')">
					<image src="../../static/image/index/other_img2.png" mode="widthFix"></image>
					<view class="">
						我的活动
					</view>
				</view>
				<view class="tab_list" @click="jump('../subuser/commission')">
					<image src="../../static/image/index/other_img3.png" mode="widthFix"></image>
					<view class="">
						我的测评
					</view>
				</view>
				<view class="tab_list"  @click="jump('../subuser/user_edition')">
					<image src="../../static/image/index/other_img4.png" mode="widthFix"></image>
					<view class="">
						优惠券
					</view>
				</view>
				<!-- <view class="tab_list" @click="jump('../subuser/realname')">
					<image src="../../static/image/index/other_img5.png" mode="widthFix"></image>
					<view class="">
						实名认证
					</view>
				</view> -->
				<view class="tab_list" @click="jump('../subuser/collect')">
					<image src="../../static/image/index/other_img6.png" mode="widthFix"></image>
					<view class="">
						收藏
					</view>
				</view>
				<view class="tab_list" @click="$jump('../subuser/address')">
					<image src="../../static/image/index/other_img7.png" mode="widthFix"></image>
					<view class="">
						收货地址
					</view>
				</view>
				
				<view class="tab_list" @tap="$jump('../subuser/relation/relation')">
					<image src="../../static/image/index/other_img8.png" mode="widthFix"></image>
					<view class="">
						亲情号
					</view>
				</view>
			</view>
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
					<view class="tab_list" @click="jump('../subuser/scen_order?status=3')">
						<image src="../../static/image/index/video1.png" mode="widthFix"></image>
						<view class="">
							全部
						</view>
					</view>
					<view class="tab_list">
						<image src="../../static/image/index/video2.png" mode="widthFix"  @click="jump('../subuser/scen_order?status=0')"></image>
						<view class="">
							待付款
						</view>
					</view>
					<view class="tab_list" @click="jump('../subuser/scen_order?status=1')">
						<image src="../../static/image/index/video3.png" mode="widthFix"></image>
						<view class="">
							已完成
						</view>
					</view>
					
					<view class="tab_list" @click="jump('../subuser/scen_order?status=2')">
						<image src="../../static/image/index/video4.png" mode="widthFix"></image>
						<view class="">
							退款
						</view>
					</view>
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
					<view class="more"  @click="jump('../subuser/assemble_order?status=0')">
						查看更多
					</view>
				</view>
				<view class="tab_box">
					<view class="tab_list"  @click="jump('../subuser/assemble_order?status=1')">
						<image src="../../static/image/index/group_img1.png" mode="widthFix"></image>
						<view class="">
							待付款
						</view>
						<!-- <block v-if="order_status[1]">
							<text v-if="order_status[1].count != 0">{{order_status[1].count}}</text>
						</block> -->
					</view>
					<view class="tab_list" @click="jump('../subuser/assemble_order?status=2')">
						<image src="../../static/image/index/group_img2.png" mode="widthFix"></image>
						<view class="">
							待发货
						</view>
						<!-- <block v-if="order_status[2]">
							<text v-if="order_status[2].count != 0">{{order_status[2].count}}</text>
						</block> -->
					</view>
					<view class="tab_list" @click="jump('../subuser/assemble_order?status=3')">
						<image src="../../static/image/index/group_img3.png" mode="widthFix"></image>
						<view class="">
							待收货
						</view>
						<!-- <block v-if="order_status[3]">
							<text v-if="order_status[3].count != 0">{{order_status[3].count}}</text>
						</block> -->
					</view>
					<view class="tab_list" @click="jump('../subuser/assemble_order?status=4')">
						<image src="../../static/image/index/group_img4.png" mode="widthFix"></image>
						<view class="">
							已完成
						</view>
						<!-- <block v-if="order_status[4]">
							<text v-if="order_status[4].count != 0">{{order_status[4].count}}</text>
						</block> -->
					</view>
					<view class="tab_list" @click="jump('../subuser/assemble_refund')">
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
</script>

<style>
	page{
		background: #F1F1F1;
	}
	.status_bar{
		background:linear-gradient(90deg,rgba(247,76,74,1),rgba(245,110,106,1));
	}
	.content{
		padding-top: 0;
	}
	.user_top{
		color: #fff;
		padding: 30rpx 0;
		background:linear-gradient(90deg,rgba(247,76,74,1),rgba(245,110,106,1));
	}
	.user_top .top_one{
		text-align: right;
	}
	.user_top .top_one image{
		height: 50rpx;
		width: 50rpx;
		margin-right: 23rpx;
	}
	.user_top .top_two{
		display: flex;
		align-items: center;
		padding-left: 54rpx;
		font-size: 32rpx;
	}
	.user_top .top_two .two_left image{
		height: 100rpx;
		width: 100rpx;
		margin-right: 25rpx;
	}
	.user_top .top_two .two_mid{
		height: 90rpx;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}
	.user_top .top_two .two_mid .mid_bottom{
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24rpx;
		width: 106rpx;
		height: 36rpx;
		border-radius: 36rpx;
		background: rgba(255,255,255,.3);
	}
	.user_top .top_two .two_mid image{
		height: 24rpx;
		width: 24rpx;
	}
	.user_top .top_two .two_right{
		height: 90rpx;
		margin-left: 15rpx;
	}
	.user_top .top_two .two_right view{
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24rpx;
		height: 35rpx;
		border-radius: 35rpx;
		width: 170rpx;
		background: rgba(255,255,255,.3);
	}
	.user_top .top_two .two_right view text{
		margin: 0 10rpx;
	}
	.user_top .top_two .two_right image{
		height: 24rpx;
		width: 24rpx;
	}
	.user_top .top_three{
		display: flex;
	}
	.user_top .top_three .three_list{
		width: 50%;
		font-size: 28rpx;
		padding-top: 30rpx;
		text-align: center;
	}
	
	/* .user_top .top_two .two_right image:nth-of-type(2){
		height: 15rpx;
		width: 15rpx;
	} */
	
	.user_vip{
		display: flex;
		justify-content: space-between;
		border-radius: 10rpx;
		margin: 20rpx 20rpx;
		padding: 16rpx 30rpx;
		font-size: 28rpx;
		color: #333333;
		background: #FFFFFF;
	}
	.user_vip .vip_one{
		display: flex;
	}
	.user_vip .vip_one image{
		height: 78rpx;
		width: 76rpx;
		margin-right: 16rpx;
	}
	.user_vip .vip_one view:nth-of-type(2){
		color: #CCCCCC;
		font-size: 24rpx;
	}
	
	.user_vip .vip_two{
		display: flex;
		align-items: center;
		color: #666666;
	}
	.user_vip .vip_two image{
		height: 20rpx;
		width: 20rpx;
	}
	.user_top_list{
		height: 150rpx;
		margin: 0 20rpx;
		background: #fff;
		font-size: 28rpx;
		color: #333333;
		border-radius: 10rpx;
	}
	.user_top_list .user_tab{
		height: 150rpx;
		display: flex;
		align-items: center;
	}
	.user_top_list .user_tab .tab_list{
		width: 33.3%;
		text-align: center;
	}
	.user_top_list image{
		width: 70rpx;
		height: 70rpx;
		
	}
	
	.user_middle{
		background: #fff;
		margin: 20rpx;
		border-radius: 10rpx;
		padding:0rpx 30rpx 28rpx 30rpx;
		border-bottom: 1rpx solid #F2F2F2;
	}
	.user_middle .middle_top{
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
		color: #333;
		font-weight: bold;
		border-bottom: 2rpx solid #F2F2F2;
		padding: 34rpx 0;
		
	}
	
	.user_middle .middle_top view:last-child{
		display: flex;
		align-items: center;
	}
	.user_middle .middle_top text{
		font-size: 22rpx;
		color: #333;
		margin-right: 24rpx;
	}
	.user_middle .middle_top image{
		width: 28rpx;
		height: 28rpx;
	}
	.user_middle .middle_tab{
		padding-top: 34rpx;
	}
	.user_middle .middle_tab .tab_top_box{
		display: flex;
		justify-content: space-between;
	}
	.user_middle .middle_tab .tab_top_box .more{
		font-size: 24rpx;
		color: #CCCCCC;
	}
	.user_middle .middle_tab .tab_top{
		font-size: 24rpx;
		font-weight: bold;
		margin-bottom: 26rpx;
	}
	.tab_box{
		display: flex;
		/* justify-content: space-between; */
		flex-wrap: wrap;
		text-align: center;
		color: #333333;
		
		font-size: 24rpx;
		
	}
	
	.user_middle .middle_tab .tab_box:nth-of-type(2){
		padding-bottom: 26rpx;
		margin-bottom: 34rpx;
		border-bottom: 2rpx solid #F2F2F2;
	}
	.user_middle .middle_tab .tab_box:nth-of-type(2) .tab_list{
		width: 25%;
		position: relative;
	}
	.user_middle .middle_tab .tab_top_box:nth-of-type(5){
		padding-top: 50rpx; 
	}
	.tab_box image{
		height: 54rpx;
		width: 54rpx;
		margin-bottom: 13rpx;
	}
	.tab_box .tab_list{
		width: 20%;
		position: relative;
	}
	.tab_box .tab_list text{
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
	.list_bottom{
		background: #fff;
		margin: 20rpx;
		border-radius: 10rpx;
		padding: 36rpx 30rpx 10rpx 30rpx;
	}
	.list_bottom .list_test{
		font-size: 24rpx;
		color: #333333;
		font-weight: bold;
		padding-bottom: 32rpx;
		margin-bottom: 20rpx;
		border-bottom: 2rpx solid #F2F2F2;
	}
	.list_bottom  .tab_list{
		width: 25%;
		margin-bottom: 20rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;	
	}
</style>
