<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<returns :titles='title'></returns>
		<view class="box_top">
			<!-- <view class="top_list" :class="{show:show == -1}" @click="chiose(-1)">
				课程视频
			</view>
			<view class="top_list" :class="{show:show == 1}" @click="chiose(1)">
				音频
			</view> -->
			<view class="top_list" :class="{show:show == 2}" ><!-- @click="chiose(2)" -->
				文章
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
				title:'分类',
				show: 0,
			}
		}
	}
</script>

<style lang="scss">
	.box_top {
		background: #fff;
		width: 100%;
		position: fixed;
		top: calc(var(--status-bar-height) + 105rpx) ;
		left: 0;
		z-index: 888;
		padding: 0 20rpx;
		box-sizing: border-box;
		font-size: 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 105rpx;
		box-shadow:0rpx 4rpx 8rpx 0rpx rgba(0, 0, 0, 0.1);
		.top_list {
			padding: 0 20rpx;
			height:100%;
			display: flex;
			align-items: center;
			box-sizing: border-box;
			border-bottom: 6rpx solid #fff;
			line-height: 44rpx;
		}
	}
	.show {
		color: #D80000;
		border-bottom-color:  #D80000 !important;
	}
</style>
