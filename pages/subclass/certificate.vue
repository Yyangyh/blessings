<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<image  src="../../static/image/subclass/certificate.png" mode="widthFix"></image>
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
				title:'我的证书'
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		height: 100vh;
		image{
			width: 711rpx;
			height: 1009rpx;
			display: block;
			margin: 0 auto;
		}
	}
</style>
