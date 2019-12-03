<template>
	<view class="content">
		<view class="status_bar">
							
		</view >
		<returns :titles='title'></returns>
		<view class="m-top">
			<image src="/static/image/member/m-top.png"></image>
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
				title:'会员中心',
			}
		}
	}
</script>

<style lang="scss">
	.m-top{
		width: 100%;
		height: 339rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
</style>
