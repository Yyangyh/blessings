<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<!-- <returns :titles='title'></returns> -->
		<!-- <view class="box">
			<view class="">
				咨询电话
			</view>
			<view class="">
				1号客服：13650209112 
			</view>
			<view class="">
				2号客服：13650229920
			</view>
		</view> -->
		<web-view src="https://chatlink.mstatik.com/widget/standalone.html?eid=208007&groupid=87285ce5bf336092467043386691e1fa"></web-view>
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
					title:'联系客服',
				}
			},
		}
</script>

<style lang="scss">
	.box{
		padding: 15rpx;
	}
</style>
