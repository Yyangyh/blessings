<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<view class="top">
			<view class="top_enlarge"  @tap="returns()">
				<image src="/static/image/com_page/returns.png" mode="widthFix"></image>
			</view>
			<text>我的活动</text>
			<text></text>
		</view>
		<view class="allorder">
			  <text @click="cur=0" class="one" :class="{active:cur==0}">近期活动</text>
			  <text @click="cur=1" class="two" :class="{active:cur==1}">往期活动</text>
		</view>
		<view class="quan" @tap="$jump('./tessera?id='+item.id)" v-show="cur==0" v-for="(item,index) in activity_Data.unexpired ">
			<image :src='APIconfig.api_img+item.cover' mode="widthFix"></image>
			<view class="q_right">
				<view>{{item.title}}</view>
				<view>￥{{item.price}}</view>
			</view>
			
		</view>
		<view class="quan"  v-show="cur==1" v-for="(item,index) in activity_Data.expired ">
			<image :src='APIconfig.api_img+item.cover' mode="widthFix"></image>
			<view class="q_right">
				<view>{{item.title}}</view>
				<view>￥{{item.price}}</view>
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
				cur:0,
				activity_Data:'',
			}
		},
		methods:{
			returns(){
				uni.switchTab({
					url:'/pages/index/user'
				})
			}
		},
		onShow() {
			this.service.entire(this,'post',this.APIconfig.api_root.subindex.a_activity_useractivitylist,{
				user_id:this.$store.state.user.id
			},function(self,res){
				console.log(res)
				self.activity_Data = res.data
				
			})
		}
	}
</script>

<style lang="scss">
	.top{
		height: 105rpx;
		padding: 0 44rpx;
		width: 100%;
		box-sizing: border-box;
		position: fixed;
		top: var(--status-bar-height);
		z-index: 99;
		left: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
		background: #fff;
		box-shadow:0px 2rpx 4rpx 0px rgba(0, 0, 0, 0.1);
		.top_enlarge{
			display: flex;
			align-items: center;
			height: 100%;
			width: 180rpx;
		}
		text:nth-of-type(2){
			width: 180rpx;
			display: inline-block;
		}
		image{
			height: 40rpx;
			width: 40rpx;
		}
	}
	.allorder{
		width: 100%;
		height: 100rpx;
		background-color: #F6F6F7;
		display: flex;
		text-align: center;
		line-height: 120rpx;
		font-size: 32rpx;
		text{
			flex: 1;
		}
	}
	.active{
		color:#D80000;
	}
	.quan{
		display: flex;
		align-items: center;
		width: 100%;
		border-bottom: 1rpx solid #F4F4F4;
		image{
			width: 276rpx;
			height: 188rpx;
			padding: 30rpx 32rpx 30rpx 20rpx;
			display: block;
		}
		.q_right{
			padding-right: 30rpx;
			view:first-child{
				font-size: 28rpx;
				color: #333333;
				margin-bottom: 20rpx;
			}
			view:last-child{
				font-size: 32rpx;
				color: #D80000;
			}
		}
	}
</style>
