<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<image class="jifen" src="../../../static/image/subuser/jifen.png" mode="widthFix"></image>
		<view class="know_box">
			<view class="boxs">
				<view class="title">
					<view class="circle"></view>
					<text>签到</text>
				</view>
				<view class="texts">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quia.
				</view>
				<view class="title">
					<view class="circle"></view>
					<text>观看课程</text>
				</view>
				<view class="texts">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore fugit labore at consequuntur excepturi vel aspernatur expedita reprehenderit magnam rem dignissimos id voluptas itaque reiciendis nobis. Saepe cum culpa excepturi?
				</view>
				<view class="title">
					<view class="circle"></view>
					<text>分享</text>
				</view>
				<view class="texts">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima delectus fuga corrupti quos impedit vel nihil praesentium voluptatibus dolorem exercitationem.
				</view>
				<view class="title">
					<view class="circle"></view>
					<text>邀请好友</text>
				</view>
				<view class="texts">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quia.
				</view>
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
			}
		},
		methods:{
			
		}
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
			height:567rpx;
			background:rgba(255,255,255,1);
			box-shadow:1rpx 1rpx 6rpx 0rpx rgba(177,65,65,0.27);
			border-radius:10rpx;
			position: absolute;
			top:306rpx;
			left: 20rpx;
			.boxs{
				margin: 50rpx 0 0 21rpx;
				line-height: 30rpx;
				.title{
					display: flex;
					align-items: center;
					
					.circle{
						width:25rpx;
						height: 25rpx;
						border-radius: 50%;
						background-color: #EA5656;
						margin-right: 10rpx;
					}
					text{
						font-size: 24rpx;
						color: #EA5656;
						
					}
				}
				.texts{
					font-size: 24rpx;
					margin-bottom: 10rpx;
				}
			}
		}
	}
</style>
