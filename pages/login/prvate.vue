<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<image class="back" src="../../static/image/login/agreement.jpg" mode=""></image>
		<view class="treaty" v-if="treaty">
			<rich-text :nodes="treaty"></rich-text>
			<button @tap="service.returns()">我已阅读并同意</button>
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
				title:'隐私政策',
				treaty:''
			}
		},
		methods:{
			
		},
		onShow() {
			let that = this
			uni.request({  //用户须知
				url:this.APIconfig.api_root.login.getprvate,
				success(res) {
					that.treaty = res.data.data
				}
			})
		},
	}
</script>

<style scoped lang="scss">
	.content{
		overflow: hidden;
		// padding-top: 0;
	}
	.back{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 80;
	}
	.treaty{
		padding: 10rpx;
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 90;
		box-sizing: border-box;
		button{
			width: 90%;
			height: 80rpx;
			bottom: 20rpx;
			font-size: 30rpx;
			margin: 30rpx auto;
			background: rgb(255, 255, 0);
		}
	}
</style>
