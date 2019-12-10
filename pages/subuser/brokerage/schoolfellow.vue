<template>
	<view class="content">
		<view class="status_bar">
					
		</view >
		<returns :titles='title'></returns>
		<view class="allorder">
			  <text @click="cur=0" class="one" :class="{active:cur==0}">一级</text>
			  <text @click="cur=1" class="two" :class="{active:cur==1}">二级</text>
		</view>
		<view class="box"  v-show="cur==0"> 
			<view class="line">
				<image class="l_left" src="../../../static/image/subhome/photo.png"></image>
				<view class="l-right">
					<view style="display: flex;"><text style="display:block;width: 240rpx;">昵称：牛哄哄</text><text>18576612345</text></view>
					<view><text>成为分销商时间：</text><text style="margin-right: 20rpx;">2019-05-38</text><text>16:03</text></view>
				</view>
			</view>
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
				title:'我的同学',
				cur:0
			}
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		height: 100vh;
		background-color: #F6F6F7;
		.allorder{
			width: 100%;
			height: 100upx;
			display: flex;
			text-align: center;
			line-height: 100upx;
			font-size: 28upx;
			background-color: #FFFFFF;
			margin-bottom: 30rpx;
			text{
				flex: 1;
			}
		}
		.active{
			color:#D80000;
		}
		.line{
			background: #FFFFFF;
			display: flex;
			align-items: center;
			padding: 30rpx 20rpx;
			.l_left{
				width: 100rpx;
				height: 100rpx;
				margin-right: 30rpx;
			}
			.l-right{
				view:first-child{
					font-size: 28rpx;
				}
				view:last-child{
					font-size: 24rpx;
					color:#999999;
					margin-top: 10rpx;
				}
			}
		}
	}
</style>
