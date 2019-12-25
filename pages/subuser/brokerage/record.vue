<template>
	<view class="content">
		<view class="status_bar">
					
		</view >
		<returns :titles='title'></returns>
		<!-- <view class="allorder">
			  <text @click="choise(0)" class="one" :class="{active:cur==0}">全部</text>
			  <text @click="cur=1" class="two" :class="{active:cur==1}">待审核</text>
			  <text @click="cur=2" class="three" :class="{active:cur==2}">待打款</text>
			  <text @click="cur=3" class="four" :class="{active:cur==3}">已打款</text>
			  <text @click="cur=4" class="five" :class="{active:cur==4}">无效</text>
		</view> -->
		<view class="box"> 
			<view class="line" v-for="(item,index) in dataList" :key='item.id'>
				<view class="b_left">
					<view class="tops">{{item.title}}</view>
					<view class="middles">{{item.time}}</view>
					<view class="bottoms"><text style="margin-right: 20rpx;">实际金额:{{item.actual_money}}元  </text><text> 手续费:{{item.handling_fee}}元</text></view>
				</view>
				<view class="b_right">
					<view>{{item.desc_text}}</view>
					<view>{{item.status_text}}</view>
				</view>
			</view>
		</view>
		<uni-load-more :status="more"></uni-load-more>
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	import uniLoadMore from '../../../components/uni-load-more/uni-load-more.vue'
	export default{
		components:{
			returns,
			uniLoadMore
		},
		data(){
			return{
				title:'提现明细',
				// cur:0,
				dataList:[],
				more:'more',
				page:1,
				loadRecord: true
			}
		},
		methods:{
			loadMore(){
				this.more = 'loading'
				this.service.entire(this,'post',this.APIconfig.api_root.subuser.u_CashHistory,{
					user_id:this.$store.state.user.id,
					page:this.page
				},function(self,res){
					self.dataList.push(...res.data)
					self.page ++
					self.more = 'more'
					if(res.data.length < 10){
						self.more = 'noMore'
						self.loadRecord = false
					}
				})
			}
		},
		onReachBottom() {
			if (this.loadRecord == false) return
			this.loadMore()
		},
		onLoad() {
			this.loadMore()
		}
	}
</script>

<style lang="scss">
	// .allorder{
	// 	width: 100%;
	// 	height: 90upx;
	// 	display: flex;
	// 	text-align: center;
	// 	line-height: 90upx;
	// 	font-size: 24upx;
	// 	background-color: #F6F6F7;
	// 	margin-bottom: 30rpx;
	// 	text{
	// 		flex: 1;
	// 	}
	// }
	// .active{
	// 	color:#D80000;
	// }
	.line{
		display: flex;
		justify-content: space-between;
		padding: 20rpx 20rpx 30rpx;
		border-bottom: 1rpx solid #EEEEEE;
		align-items: center;
		.b_left{
			.tops{
				font-size: 28rpx;
				margin-top: -5rpx;
			}
			.middles{
				font-size: 24rpx;
				color:#999999;
				margin: 20rpx 0 30rpx 0;
			}
			.bottoms{
				font-size: 24rpx;
				color:#666666;
			}
		}
		.b_right{
			text-align: right;
			view:first-child{
				font-size: 28rpx;
				color:#F2221F;
			}
			view:last-child{
				font-size: 24rpx;
				color:#FF9749;
				margin-top: 10rpx;
			}
		}
	}
</style>
