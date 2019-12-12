<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<view class="top">
			<image src="../../static/image/com_page/returns.png" @tap="service.returns()" mode="widthFix"></image>
			<text>文章</text>
			<image src='../../static/image/subhome/share.png'></image>
		</view>
		<hr />
		<view class="title_top">
			<view class="t_left">
				<view class="title">关于孩子早教很好的一篇文章</view>
				<view class="times">2019-11-26</view>
				<view class=" graded">
					<view class="start">
						<image src="../../static/image/subhome/start.png" mode="widthFix"></image>
						<image src="../../static/image/subhome/start.png" mode="widthFix"></image>
						<image src="../../static/image/subhome/start.png" mode="widthFix"></image>
						<image src="../../static/image/subhome/start.png" mode="widthFix"></image>
						<image src="../../static/image/subhome/start.png" mode="widthFix"></image>
					</view>
					<view class="time">5.0</view>
					<view class="time">111次观看</view>
				</view>
			</view>
			<image class="t_right" src="/static/image/subhome/heart.png" mode="widthFix"></image>
		</view>
		<view class="area">
			<input type="text" placeholder="请发表你的评论">
			<view class="send">发表</view>
		</view>
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	export default{
		components:{
			returns
		},
		data(){
			return{
				title:'文章',
				
			}
		}
	}
</script>

<style lang="scss">
	.top{
		position: fixed;
		width: 100%;
		z-index: 886;
		box-sizing: border-box;
		top: var(--status-bar-height);
		left: 0;
		display: flex;
		height: 105rpx;
		padding: 0 30rpx;
		font-size: 32rpx;
		justify-content: space-between;
		align-items: center;
		background-color: #FFFFFF;
		
		image:first-child{
			width: 31rpx;
			height: 31rpx;
		}
		image:last-child{
			width: 50rpx;
			height: 50rpx;
		}
	}
	hr{
		border: none;
		height: 1rpx;
		border-bottom:1rpx solid #F6F6F7;
	}
	.title_top{
		width: 100%;
		align-items: center;
		display: flex;
		justify-content:space-between;
		.title{
			font-size: 28rpx;
			padding: 33rpx 20rpx 20rpx 20rpx;
		}
		.times{
			font-size: 24rpx;
			color: #999999;
			margin: 0 0 25rpx 0;
			padding-left: 20rpx;
		}
		.graded{
			display: flex;
			align-items:center ;
			padding-left: 20rpx;
			.start{
				display: flex;
				image{
					width: 25rpx;
					height: 25rpx;
					margin-right: 12rpx;
				}
			}
			.time{
				font-size: 24rpx;
				color: #999999;
				margin-right:10rpx ;
			}
		}
		.t_right{
			width: 44rpx;
			height: 44rpx;
			margin:80rpx 30rpx 0 0;
		}
	}
	.area{
		width:100%;
		height:120rpx;
		background:pink;
		display: flex;
		align-items: center;
		position: fixed;
		bottom: 0;
		input{
			width:530rpx;
			height:70rpx;
			background:rgba(255,255,255,1);
			border:1rpx solid rgba(153,153,153,1);
			border-radius:35rpx;
			font-size: 24rpx;
			color:#999999;
			padding-left: 31rpx;
			margin:0 30rpx;
		}
		.send{
			width:100rpx;
			height:60rpx;
			background:linear-gradient(90deg,rgba(247,76,74,1),rgba(245,110,106,1));
			border-radius:10rpx;
			font-size: 28rpx;
			color: #FFFFFF;
			text-align: center;
			line-height: 60rpx;
		}
	}
</style>
