<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<view class="content_top">
			<view class="top_search">
				<input type="text" value="" placeholder="请输入关键词搜索" />
			</view>
			<view class="top_img" @click="jump('../com_page/notice')">
				<image src="/static/image/index/shopp.png" mode="widthFix"></image>
				<view></view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		
		data() {
			return {
				
			}
		},
		onShow() {
			this.service.entire(this,'get',this.APIconfig.api_root.index.good_index,{
				userid:this.$store.state.user.id
			},function(self,res){
				console.log(res)
				self.swiper_list = res.data.slide
				self.class_top = res.data.class_top
				self.class_list = res.data.class_list
			})
		}
	}
</script>

<style>
	.content {
		padding-top: 0;
	}
	.content_top{
		position: fixed;
		top: var(--status-bar-height);
		left: 0;
		width: 100%;
		background: #FFFFFF;
		z-index: 99;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		height: 105rpx;
		padding: 0 20rpx;
	}
	.content_top .top_search{
		flex-grow: 2;
		height: 65rpx;
		border-radius: 65rpx;
		display: flex;
		align-items: center;
		padding-left: 40rpx;
		background: #EEEEEE;
	}
	.content_top view input{
		font-size: 24rpx;
	}
	.content_top .top_img{
		position: relative;
	}
	.content_top .top_img view{
		position: absolute;
		right: -4rpx;
		top: -4rpx;
		height: 10rpx;
		width: 10rpx;
		border-radius: 50%;
		background: #D80000;
	}
	.content_top image{
		height: 50rpx;
		width: 50rpx;
		margin-left: 10rpx;
	}
</style>
