<template>
	<view class="content">
		<view class="status_bar">
								
		</view >
		<returns :titles='title'></returns>
		<view class="allorder">
			<view  @click="cur=0" class="one box"   :class="{active:cur==0}">优惠券</view>
			<view  @click="cur=1" class="two box"   :class="{active:cur==1}">兑换券</view>
		</view>
		<view class="discounts" v-show="cur==0">
			<view class="state">
				<view  @click="bur=0" class="one"   :class="{actives:bur==0}">待使用</view>
				<view  @click="bur=1" class="two"   :class="{actives:bur==2}">已使用</view>
				<view  @click="bur=2" class="three"  :class="{actives:bur==3}">已过期</view>
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
				title:'设置',
				cur:0
			}
		},
	}
</script>

<style lang="scss">
	.allorder{
		width: 100%;
		height: 120upx;
		display: flex;
		text-align: center;
		line-height: 120upx;
		font-size: 32upx;
		justify-content: space-around;
		padding-top: 20rpx;
		text{
			flex: 1;
		}
	}
	.box{
		width:256rpx;
		height:75rpx;
		border:1rpx solid rgba(239,124,56,1);
		border-radius:10rpx;
		color: #EF7C38;
		line-height: 75rpx;
	}
	.active{
		color:#FFFFFF;
		background: #EF7C38;
	}
</style>
