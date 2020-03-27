<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<image class="jifen" src="../../../static/image/subuser/jifen.png" mode="widthFix"></image>
		<view class="know_box">
			<view class="boxs">
				<!-- <view class="title">
					<view class="circle"></view>
					<text>签到</text>
				</view>
				<view class="texts">
					每天签到挣积分连续7天，奖励3分
				</view>
				<view class="title">
					<view class="circle"></view>
					<text>观看课程</text>
				</view>
				<view class="texts">
					收听音频可以获得1积分，观看视频可以获得1积分，积分数根据观看的时长来决定，不满一分钟则不计算（每个音频，视频只能获取一次） 
				</view>
				<view class="title">
					<view class="circle"></view>
					<text>分享</text>
				</view>
				<view class="texts">
                分享视频可获得1积分，分享音频可获得1积分，分享文章可获得1积分（第一次分享有积分，再分享则无）
				</view>
				<view class="title">
					<view class="circle"></view>
					<text>邀请好友</text>
				</view>
				<view class="texts">
                 成功激请一位学员可获得1积分
				</view> -->
				<rich-text :nodes="data.integral_doc"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	export default{
		components:{
			returns
		},
		data(){
			return{
				title:'了解积分',
				data:'',
			}
		},
		onLoad() {
			this.service.entire(this,'post',this.APIconfig.api_root.subuser.u_Signin_integralDoc,{
				
			},function(self,res){
				self.data = res.data
			})
		},
		
	}
</script>

<style lang="scss">
	.content{
		position: relative;
		width: 100%;
		.jifen{
			top: 0;
			left: 0;
			width: 100%;
			height: 370rpx;
		}
		.know_box{
			width:710rpx;
			min-height:567rpx;
			background:rgba(255,255,255,1);
			box-shadow:1rpx 1rpx 6rpx 0rpx rgba(177,65,65,0.27);
			border-radius:10rpx;
			position: absolute;
			top:306rpx;
			left: 20rpx;
			padding: 20rpx;
			box-sizing: border-box;
			// .boxs{
			// 	margin: 50rpx 0 0 21rpx;
			// 	line-height: 30rpx;
			// 	.title{
			// 		display: flex;
			// 		align-items: center;
					
			// 		.circle{
			// 			width:25rpx;
			// 			height: 25rpx;
			// 			border-radius: 50%;
			// 			background-color: #EA5656;
			// 			margin-right: 10rpx;
			// 		}
			// 		text{
			// 			font-size: 24rpx;
			// 			color: #EA5656;
						
			// 		}
			// 	}
			// 	.texts{
			// 		font-size: 24rpx;
			// 		margin-bottom: 10rpx;
			// 		margin:10rpx 20rpx 10rpx 0;
			// 	}
			// }
		}
	}
</style>
