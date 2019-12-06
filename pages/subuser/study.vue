<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="allorder">
			  <text @click="cur=0" class="one" :class="{active:cur==0}">课程视频</text>
			  <text @click="cur=1" class="two" :class="{active:cur==1}">音频</text>
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
					title:'我的学习',
					cur:0
				}
			},
		}
</script>

<style lang="scss">
	.allorder{
		width: 100%;
		height: 100upx;
		display: flex;
		text-align: center;
		line-height: 100upx;
		font-size: 28upx;
		color:#666666;
		background: #F6F6F7;
		text{
			flex: 1;
		}
	}
	.active{
		color:#D80000;
	}
</style>
