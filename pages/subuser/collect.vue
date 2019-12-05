<template>
	<view class="content">
		<view class="status_bar">
						
		</view >
		<view class="top">
			<image src="/static/image/com_page/returns.png" @tap="service.returns()" mode="widthFix"></image>
			<text>收藏</text>
			<text>编辑</text>
		</view>
		<view class="allorder">
			  <text @click="cur=0" class="one"   :class="{active:cur==0}">课程视频</text>
			  <text @click="cur=1" class="two"   :class="{active:cur==1}">音频</text>
			  <text @click="cur=2" class="three" :class="{active:cur==2}">文章</text>
			  <text @click="cur=3" class="four"  :class="{active:cur==3}">商品</text>
		</view>
	</view>
</template>

<script>
	
	export default{
		
		data(){
			return{
				cur:0,
			}
		},
		methods:{
			
		}
	}
</script>

<style lang='scss'>
	.content{
		background-color: #F6F6F7;
	}
	.top{
		height: 105rpx;
		width:100%;
		position: fixed;
		top:var(--status-bar-height);
		left: 0;
		background: #FFF;
		z-index: 888;
		padding: 0 40rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
		margin-bottom: 24rpx;
		background: #fff;
		box-shadow:0px 2rpx 4rpx 0px rgba(0, 0, 0, 0.1);
		image{
			height: 40rpx;
			width: 40rpx;
		}
		text:nth-of-type(2){
			color: #666666;
			font-size: 28rpx;
			font-weight: 400;
			display: inline-block;
		}
	}
	.allorder{
		width: 100%;
		height: 120upx;
		display: flex;
		text-align: center;
		line-height: 120upx;
		font-size: 32upx;
		/* font-weight: bold; */
		text{
			flex: 1;
		}
	}
	.active{
		color:#D80000;
	}
</style>
