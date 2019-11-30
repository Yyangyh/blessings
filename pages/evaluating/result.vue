<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<returns :titles='title'></returns>
		<view class="worp">
			<view class="title">测评结果</view>
			<view class="texts">
				心理测评是一种比较先进的测试方法,它是
				指通过一系列手段,将人的某些心理特征数量化,
				来差异差异的一种科学測量方法。以及对一个
				人进行诊断、评价、辅助咨询的一种手段,它包
				含能力测測试、人格测试和兴趣试等。
			</view>
		</view>
		<view class="recommend">相关视频推荐</view>
		<view class="videoList">
			<image src="../../static/image/index/vider_img1.png" mode=""></image>
			<view class="viseo-right">
				<view class="name">团队管理篇-《卓越领导修炼》免费系 列课程</view>
				<view class="frequency">111次观看</view>
				<view class="price">免费</view>
			</view>
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
				title:'我的测评',
			}
		}
	}
</script>

<style lang="scss">
	.worp{
		width: 100%;
		height: 813rpx;
		background: url(../../static/image/evaluating/resultback.png) no-repeat;
		background-size: 100% 100%;
		.title{
			font-size: 32rpx;
			color: #FFFFFF;
			text-align: center;
			padding-top: 82rpx;
		}
		.texts{
			font-size: 26rpx;
			text-indent:2em;
			margin:50rpx 107rpx 0;
		}
		
	}
	.recommend{
		font-size: 32rpx;
		margin:30rpx 0 0 20rpx;
		
	}
	.videoList{
		display: flex;
		margin: 0 20rpx;
		image{
			width: 268rpx;
			height: 179rpx;
			margin-right: 30rpx;
		}
		.viseo-right{
			display: flex;
			flex-direction:column;
			justify-content: space-between;
			.name{
				font-size: 24rpx;
			}
			.frequency{
				font-size: 24rpx;
				color: #999999;
			}
			.price{
				font-size: 28rpx;
				color: #D80000;
			}
		}
	}
</style>
