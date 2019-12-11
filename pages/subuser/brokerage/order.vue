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
			  <text @click="Index(0)" class="one" :class="{active:cur==0}">全部</text>
			  <text @click="Index(1)" class="two" :class="{active:cur==1}">待结算</text>
			  <text @click="Index(2)" class="three" :class="{active:cur==2}">已结算</text>
			  <text @click="Index(3)" class="four" :class="{active:cur==3}">完成</text>
		</view>
		<view class="box">
			<!-- 订单一 -->
			<block v-for="(item,index) in data_list" :key='item.id'>
				<view class="line">
					<view class="l_left">
						<image src="../../../static/image/subhome/photo.png"></image>
						<view class="left_text">
							<view><text style="margin-right: 5rpx;">昵称:</text><text>{{item.avatar}}</text></view>
							<view style="margin-top: 5rpx;">{{item.order_no}}</view>
						</view>
					</view>
					<view class="middle"></view>
					<view class="l_right">
						<view>{{item.commission_money}}</view>
						<view>{{item.status_text}}</view>
					</view>
				</view>
				<view class="particulars">
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
			</block>
			
			
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
				title:'分销订单',
				cur:0,
				reveal:false,
				data:'',
				data_list:''
			}
		},
		methods:{
			Index(type){
				this.cur = type
				this.service.entire(this,'post',this.APIconfig.api_root.subuser.u_index,{
					user_id:this.$store.state.user.id,
					type:type
				},function(self,res){
					console.log(res)
					self.data = res.data
					self.data_list = res.data.order
				})
			}
		},
		onShow() {
			Index(0)
		}
		
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		height: 100vh;
		background: #F6F6F7;
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
	}
</style>
