<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		
		<!-- 视频 -->
		<!-- <view class="">
			<video id="myVideo" :src="video_url"
			:autoplay='true' 
			:initial-time = 'initial_time'
			@pause='pause' 
			@timeupdate='timeupdate'
			@play='play_start' 
			@ended='play_end'  
			enable-danmu controls  :poster='poster'>
			</video>
		</view> -->
		<!-- 介绍 -->
		<view class="recommend">
			<view class="title">
				五福家庭教育
			</view>
			<view class="particulars">
				五福家庭教育，坐落于广东省国家高新科技园松山湖，肩负“为四亿
				家庭幸福而奋斗”的神圣使命，本着“体验性、本质性、系统性”的教
				育理念，凭借十多年对素质教育研究与实践的基础，结合古今中外
				先进的家庭教育理念，成功研发出具有中国特色的家庭教育课 程体
				系。
			</view>
			<image src="../../static/image/subuser/jianjie.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	export default{
		components:{
			returns
		},
		data() {
			return {
				title:'公司简介',
				company_info:'',
			}
		},
		onShow() {
			this.service.entire(this,'post',this.APIconfig.api_root.subuser.u_Company_index,{
				
			},function(self,res){
				console.log(res)
				self.company_info = res.data.company_info
			})
		}
	}
</script>

<style lang="scss">
	.recommend{
		padding:0 17rpx 0 24rpx;
		.title{
			font-size: 32rpx;
			padding: 37rpx 0;
		}
		.particulars{
			font-size: 24rpx;
			color: #666666;
			line-height: 50rpx;
		}
		image{
			width: 689rpx;
			height: 277rpx;
			margin-top: 30rpx;
		}
	}
</style>
