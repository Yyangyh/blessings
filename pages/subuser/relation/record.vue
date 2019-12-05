<template>
	<view class="content">
		<view class="status_bar">
							
		</view >
		<returns :titles='title'></returns>
		<view class="allorder">
			  <text @click="cur=0" class="one" :class="{active:cur==0}">课程视频</text>
			  <text @click="cur=1" class="two" :class="{active:cur==1}">音频</text>
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
				title:'分享记录',
				cur:0,
			}
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		background-color: #F6F6F7;
		.allorder{
			width: 100%;
			height: 120upx;
			display: flex;
			text-align: center;
			line-height: 120upx;
			font-size: 28upx;
			text{
				flex: 1;
			}
		}
		.active{
			color:#D80000;
		}
	}
</style>
