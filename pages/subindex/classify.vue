<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<returns :titles='title'></returns>
		<view class="allorder">
			  <text @click="cur=0" class="one" :class="{active:cur==0}">课程视频</text>
			  <text @click="cur=1" class="two" :class="{active:cur==1}">音频</text>
			  <text @click="cur=2" class="three" :class="{active:cur==2}">文章</text>
		</view>
		 <view class="boxs" v-show="cur==0">
			 <view class="allorders" >
				 <view @click="bur=0" class="one" :class="{actives:bur==0}">幸福短片</view>
				 <view @click="bur=1" class="two" :class="{actives:bur==1}">幸福直播</view>
				 <view @click="bur=2" class="three" :class="{actives:bur==2}">名师讲堂</view>
				 <view @click="bur=3" class="four" :class="{actives:bur==3}">偏差矫正</view>
				 <view @click="bur=4" class="five" :class="{actives:bur==4}">状元养成</view>
			 </view>
			 <view class="b_right">
				 
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
				cur:'',
				bur:'',
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F6F6F7;
	}
	.allorder{
		width: 100%;
		height: 100rpx;
		display: flex;
		text-align: center;
		line-height: 100rpx;
		font-size:28rpx;
		// background-color: #F6F6F7;
		text{
			flex: 1;
		}
	}
	.active{
		color:#D80000;
	}
	.boxs{
		display: flex;
		background-color: #FFFFFF;
		.allorders{
			width: 25%;
			line-height: 100rpx;
			font-size:28rpx;
			background-color: #F6F6F7;
			border-bottom:1rpx solid #EEEEEE ;
			text-align: center;
			color: #333333;
		}
		.actives{
			color:#D80000;
			background-color: #FFFFFF;
		}
		.b_right{
			background-color: #FFFFFF;
			width: 75%;
			
		}
	}
</style>
