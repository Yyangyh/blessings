<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<video :src="company_info.video_url" controls></video>
		<!-- 介绍 -->
		<view class="recommend">
			<view class="title">
				五福家庭教育
			</view>
			<view class="particulars">
				<rich-text :nodes="company_info.content"></rich-text>
			</view>
			<!-- <image src="../../static/image/subuser/jianjie.png" mode="widthFix"></image> -->
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
				poster:'',
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
	video{
		width: 100%;
	}
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
