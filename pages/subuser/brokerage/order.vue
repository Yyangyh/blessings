<template>
	<view class="content">
		<view class="status_bar">
					
		</view >
		<returns :titles='title'></returns>
		<view class="order_top">
			<view class="top_box">
				<view>待结算</view>
				<view>{{data.unsettle}}元</view>
			</view>
			<view  class="top_box">
				<view>已结算</view>
				<view>{{data.settled}}元</view>
			</view>
			<view  class="top_box">
				<view>已完成</view>
				<view>{{data.finnish}}元</view>
			</view>
		</view>
		<view class="allorder">
			  <text @click="Indexs(0)" class="one" :class="{active:cur==0}">全部</text>
			  <text @click="Indexs(1)" class="two" :class="{active:cur==1}">待结算</text>
			  <text @click="Indexs(2)" class="three" :class="{active:cur==2}">已结算</text>
			  <text @click="Indexs(3)" class="four" :class="{active:cur==3}">完成</text>
		</view>
		<view class="box">
			<!-- 订单一 -->
			<view v-for="(item,index) in dataList" :key='item.id' @tap="msgs = index">
				<view class="line">
					<view class="l_left">
						<image :src= "APIconfig.api_img + item.avatar" mode="widthFix"></image>
						<view class="left_text">
							<view><text style="margin-right: 5rpx;">昵称:</text><text>{{item.username}}</text></view>
							<view style="margin-top: 5rpx;">{{item.order_no}}</view>
						</view>
					</view>
					<view class="middle"></view>
					<view class="l_right">
						<view>{{item.commission_money}}</view>
						<view>{{item.status_text}}</view>
					</view>
				</view>
				<view class="particulars" v-show="msgs === index">
					<view class="lines">
						<view>订单号：</view>
						<text>{{item.order_no}}</text>
					</view>
					<view class="lines">
						<view>状态：</view>
						<text>{{item.status_text}}</text>
					</view>
					<view class="lines">
						<view>订单金额：</view>
						<text>{{item.pay_price}}</text>
					</view>
					<view class="lines">
						<view>分销金额：</view>
						<text>{{item.commission_money}}</text>
					</view>
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
				title:'分享订单',
				cur:'',
				reveal:false,
				data:'',
				dataList:[],
				msgs:'',
				more: 'more',
				loadRecord: true
			}
		},
		methods:{
			Indexs(type){ //切换状态执行
				this.cur = type;//判断type值
				this.more = 'loading' //加载状态
				this.dataList.length = 0 //切换数据归零
				this.loadRecord = true
				
				let data = {
					user_id:this.$store.state.user.id,
					type:type,
				}
				this.Index(data)
			},
			loadMore(){//滚动到底部执行
				this.more = 'loading'
				let data = {
					user_id:this.$store.state.user.id,
					type:this.cur
				}
				if(data.type == this.cur) Reflect.deleteProperty(data, "type");
				this.Index(data)//执行接口
			},
			Index(data){
				this.service.entire(this,'post',this.APIconfig.api_root.subuser.u_index,data,
				function(self,res){
					self.data = res.data
					self.All_data = [
									{
										"id": "71",
										"status": "2",
										"status_text": "已结算",
										"order_no": "20191206182212135323",
										"pay_price": "135.00",
										"avatar": "",
										"is_commission": "0",
										"user_id": "16",
										"referrer": "15",
										"username": "test_2",
										"commission_money": "33.75"
									},
									{
										"id": "71",
										"status": "2",
										"status_text": "已结算",
										"order_no": "20191206182212135323",
										"pay_price": "135.00",
										"avatar": "",
										"is_commission": "0",
										"user_id": "16",
										"referrer": "15",
										"username": "test_2",
										"commission_money": "33.75"
									}
								]
		
					self.dataList.push(...res.data.order)
					self.more = 'more'
					
				})
			}
			
		},
		onReachBottom() {//页面上拉。触低事件
			if (this.loadRecord == false) return
			this.loadMore()
		},
		onLoad() {
			this.Indexs(0)
		}
		
	}
</script>

<style lang="scss">
	page{
		background: #F6F6F7;
	}
	// .content{
	// 	width: 100%;
	// 	height: 100vh;
	// 	background: #F6F6F7;
		.order_top{
			width:750rpx;
			height:158rpx;
			background:linear-gradient(90deg,rgba(247,76,74,1),rgba(245,110,106,1));
			display: flex;
			justify-content: space-around;
			align-items: center;
			font-size: 28rpx;
			color: #FFFFFF;
			.top_box{
				view{
					margin: 5rpx;
				}
			}
		}
		.allorder{
			width: 100%;
			height: 100upx;
			display: flex;
			text-align: center;
			line-height: 100upx;
			font-size: 28upx;
			background-color: #FFFFFF;
			text{
				flex: 1;
			}
		}
		.active{
			color:#D80000;
		}
		.box{
			.line{
				background-color: #FFFFFF;
				border-bottom: 1rpx solid #F1F1F1;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 30rpx 20rpx;
				.l_left{
					display: flex;
					align-items: center;
					image{
						width: 100rpx;
						height: 100rpx;
						margin-right: 24rpx;
						border-radius: 50%;
					}
					.left_text{
						view:first-child{
							font-size: 28rpx;
						}
						view:last-child{
							font-size: 24rpx;
							color:#999999;
						}
					}
				}
				.middle{
					width:1rpx;
					height:81rpx;
					background:rgba(204,204,204,1);
				}
				.l_right{
					font-size: 24rpx;
					text-align: center;
					view{
						margin: 2rpx 0;
					}
				}
			}
			.particulars{
				padding: 0 20rpx;
				.lines{
					display: flex;
					font-size: 24rpx;
					align-items: center;
					color:#333333;
					view{
						width: 125rpx;
						margin: 12rpx 0;
					}
				}
			}
		}
		.base{
			font-size: 24rpx;
			color:#999999;
			text-align: center;
			margin-top: 31rpx;
		}
	// }
</style>
