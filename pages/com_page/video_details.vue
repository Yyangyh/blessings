<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<view class="content_top">
			<view class="top_returns" @tap="service.returns()">
				<image src="/static/image/com_page/returns.png" mode="widthFix"></image>
			</view>
			<view class="top_search">
				课程详情
			</view>
			<view class="top_img">
				<image src="/static/image/com_page/share.png" mode="widthFix"></image>
			</view>
		</view>
		
		
		<view class="video_top">
			<view class="">
				 <video id="myVideo" :src="video_data.v_url" @error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls></video>
			</view>
			<view class="video_tab">
				<view class="tab_list" :class="{test_show:test_show === 0}" @tap="test_show = 0">
					课程介绍
				</view>
				<view class="tab_list" :class="{test_show:test_show === 1}" @tap="test_show = 1">
					目录
				</view>
				<view class="tab_list" :class="{test_show:test_show === 2}" @tap="test_show = 2">
					评价
				</view>
				<view class="tab_list" :class="{test_show:test_show === 3}" @tap="test_show = 3">
					推荐
				</view>
			</view>
			<view class="video_explain">
				<view class="ex_one">
					{{video_data.long_title}}
				</view>
				<view class="ex_two">
					<image src="/static/image/com_page/stars.png" mode="widthFix" v-for="(item,index) in video_data.stars_num" :key='index'></image>
					<text>{{video_data.evaluate}}</text>
					<text>{{video_data.view}}次观看</text>
				</view>
				<view class="ex_three">
					￥{{video_data.v_price}}
				</view>
				<view class="ex_four">
					领取积分
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data() {
			return {
				video_data:'',
				test_show:0
			}
		},
		onLoad(e) {
			this.service.entire(this,'post',this.APIconfig.api_root.com_page.VideoDetail,{
				video_id:e.id,
				userid:this.$store.state.user.id,
				mobile:this.$store.state.user.mobile,
			},function(self,res){
				self.video_data = res.data.video
				self.video_data.stars_num = new Array(Number(self.video_data.evaluate)) 
			})
		}
	}
</script>

<style lang="less">
	.content_top{
		position: fixed;
		z-index: 999;
		top: var(--status-bar-height);
		left: 0;
		width: 100%;
		background: #FFFFFF;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		height: 105rpx;
		padding: 0 20rpx;
		.top_search{
			flex-grow: 2;
			height: 65rpx;
			line-height: 65rpx;
			text-align: center;
			font-weight:500;
			font-size: 32rpx;
		}
		image{
			height: 50rpx;
			width: 50rpx;
			margin-left: 10rpx;
		}
		.top_returns image{
			height: 31rpx;
			width: 31rpx;
			padding-right: 10rpx;
		}
	}
	.video_top {
		font-size: 28rpx;
		.video_tab{
			background: #F6F6F6;
			text-align: center;
			display: flex;
			justify-content: space-between;
			color: #999;
			.tab_list{
				width: 25%;
				height: 100rpx;
				line-height: 100rpx;
				font-size: 28rpx;
				border-bottom: 2rpx solid #F6F6F6;
			}
		}
		.video_explain {
			position: relative;
			padding: 30rpx 22rpx;
			.ex_two{
				margin: 15rpx 0;
			}
			.ex_three{
				color: #D80000;
				font-size: 32rpx;
			}
			.ex_four{
				position: absolute;
				right: 0;
				bottom: 30rpx;
				background: linear-gradient(135deg,rgba(247,76,74,1),rgba(245,110,106,1));
				color: #fff;
				font-size: 24rpx;
				text-align: center;
				height: 50rpx;
				line-height: 50rpx;
				width: 143rpx;
				border-top-left-radius: 50rpx;
				border-bottom-left-radius: 50rpx;
			}
		}
		image{
			height: 25rpx;
			width: 25rpx;
			margin-right: 12rpx;
		}
		text{
			margin-right: 12rpx;
			color: #999999;
		}
	}
	.test_show{
		border-bottom-color: #D80000 !important;
		color: #000000;
	}
	
	video{
		width: 100%;
	}
</style>
