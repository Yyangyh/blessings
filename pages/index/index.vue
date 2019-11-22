<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<search></search>
		<view class="swiper_box">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item,index) in swiper_list" :key='item.id'>
					<view class="swiper-item uni-bg-red">
						<image :src="APIconfig.api_img + item.images_url" mode="widthFix"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="index_tab">
			<view class="tab_list" v-for="(item,index) in class_top" :key='item.id' @tap="jump('../com_page/index_class?id='+item.id)">
				<image :src="APIconfig.api_img + item.cl_image" mode="widthFix"></image>
				<view class="">
					{{item.cl_name}}
				</view>
			</view>
		</view>
		
		<block v-for="(item,index) in class_list" :key='item.id'>
			<view class="video_box" v-if="index == 0">
				<view class="v_box_top">
					<view class="box_left">
						{{item.cl_name}}
					</view>
					<view class="box_right"  @tap="jump('../com_page/video_class?id='+item.id+'&title='+item.cl_name)">
						全部
					</view>
				</view>
				<view class="vider_content">
					<scroll-view  scroll-x="true" class="scroll-Y">
						<view class="content_list" v-for="(items,indexs) in item.video_list" :key='items.id' @tap="service.jump('../com_page/video_details?id='+item.id)">
							<view class="list_img_box">
								<image :src="items.v_slide" mode="widthFix"></image>
							</view>
							<view class="list_one">
								{{items.long_title}}
							</view>
							<view class="list_two">
								{{items.view}}次观看
							</view>
							<view class="list_three">
								<view class="">
									{{items.is_free == 0? '￥'+items.group_price : '免费'}}
									
								</view>
								<view class="" v-if="items.is_free_vip == 1">
									VIP免费
								</view>
							</view>
						</view>
					</scroll-view>
					
				</view>
			</view>
			
			<view class="vider_content_two" v-else>
				<view class="v_box_top">
					<view class="box_left">
						{{item.cl_name}}
					</view>
					<view class="box_right"  @tap="jump('../com_page/video_class?id='+item.id+'&title='+item.cl_name)">
						全部
					</view>
				</view>
				<view class="vider_content">
					<view class="content_list" v-for="(items,indexs) in item.video_list" :key='items.id'  @tap="service.jump('../com_page/video_details?id='+item.id)">
						<view class="list_img_box">
							<image :src="items.v_slide" mode="widthFix"></image>
						</view>
						<view class="list_right">
							<view class="list_one">
								{{items.long_title}}
							</view>
							<view class="list_two">
								{{items.view}}次观看
							</view>
							<view class="list_three">
								<view class="">
									{{items.is_free == 0? '￥'+items.group_price : '免费'}}
									
								</view>
								<view class="" v-if="items.is_free_vip == 1">
									VIP免费
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</block>
		
	</view>
</template>

<script>
	import search from '../common/index_search.vue'
	export default {
		components:{
			search
		},
		data() {
			return {
				swiper_list: '',
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				class_top:'',
				class_list:'',
			}
		},
		
		onLoad() {
		 
		},
		onShow() {
			
			this.service.entire(this,'post',this.APIconfig.api_root.index.index,{
				userid:this.$store.state.user.id
			},function(self,res){
				console.log(res)
				self.swiper_list = res.data.slide
				self.class_top = res.data.class_top
				self.class_list = res.data.class_list
			})
		},
		methods: {
			jump(url){
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style>
	.content {
		/* padding-top: 0; */
	}
	.swiper_box{
		padding: 0 20rpx;
	}
	.swiper_box image{
		width: 100%;
		height: 250rpx;
	}
	.index_tab{
		text-align: center;
		font-size: 24rpx;
		padding: 0 20rpx;
		min-height: 300rpx;
		display: flex;
		flex-wrap: wrap;
	}
	.index_tab image{
		height: 90rpx;
		width: 90rpx;
	}
	.index_tab .tab_list{
		width: 25%;
		margin-bottom: 25rpx;
	}
	.video_box{
		
		border-bottom: 6rpx solid #F1F1F1;
	}
	.v_box_top{
		display: flex;
		justify-content: space-between;
		padding: 0 20rpx;
		font-size: 28rpx;
		margin: 20rpx 0;
	}
	.v_box_top .box_right{
		font-size: 24rpx;
		color: #EF7C38;
	}
	.video_box .vider_content{
		white-space: nowrap;
		padding: 0 20rpx;
	}
	.video_box .vider_content .content_list{
		display: inline-block;
		width: 50%;
		font-size: 24rpx;
		box-sizing: border-box;
		white-space: initial;
		padding-right: 24rpx;
		padding-bottom: 50rpx;
	}
	.video_box .vider_content .content_list .list_img_box{
		text-align: center;
		margin-bottom: 16rpx;
	}
	.video_box .vider_content .content_list image{
		width: 343rpx;
		height: 229rpx;
	}
	.list_one{
		padding-right: 10rpx;
	}
	 .list_two{
		color: #999999;
		margin: 10rpx 0;
	}
	
	.vider_content_two{
		border-bottom: 6rpx solid #F1F1F1;
	}
	.vider_content_two .vider_content{
		padding: 0 20rpx;
		font-size: 24rpx;
	}
	.vider_content_two .vider_content image{
		width: 268rpx;
		height: 179rpx;
		margin-right: 29rpx;
	}
	.vider_content_two .vider_content .content_list{
		display: flex;
		margin: 30rpx 0;
	}
	.vider_content_two .vider_content .content_list .list_right{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-bottom: 30rpx;
	}
	.list_three{
		display: flex;
		justify-content: space-between;
		color: #D80000;
		font-size: 28rpx;
	}
	.list_three view:nth-of-type(2){
		background: #000000;
		font-size: 24rpx;
		color: #FFFFFF;
		height: 20rpx;
		padding: 10rpx;
		line-height: 20rpx;
		border-radius: 20rpx;
	}
</style>
