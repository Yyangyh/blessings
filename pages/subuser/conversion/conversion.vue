<template>
	<view class="content">
		<view class="status_bar">
								
		</view >
		<returns :titles='title'></returns>
		<view class="allorder">
			<view  @click="cur=0" class="one box"   :class="{active:cur==0}">优惠券</view>
			<view  @click="cur=1" class="two box"   :class="{active:cur==1}">兑换券</view>
		</view>
		
		<block v-if="cur==0">
			<view class="discounts">
				<view class="state">
					<view  @tap="chiose(0)" class="one"   :class="{actives:bur==0}">待使用</view>
					<view  @tap="chiose(1)" class="two"   :class="{actives:bur==1}">已使用</view>
					<view  @tap="chiose(2)" class="three"  :class="{actives:bur==2}">已过期</view>
				</view>
			</view>
			<view class="st" v-if='data_list'>
				<view class="quan" v-for="(item,index) in data_list" :key='item.id'>
					<view class="q_left">
						<view class="l_top">
							<view class="t_left">
								<text>￥</text>
								<text>{{item.coupon.discount_value}}</text>
							</view>
							<view class="t_right">
								<view>{{item.coupon.name}}</view>
								<view>
									<text>{{item.coupon.type_name}}  </text>
									<text>满{{item.coupon.where_order_price}}减{{item.coupon.discount_value}}</text>
								</view>
							</view>
						</view>
						<view class="l_bottom">
							有效期：{{service.Test(item.time_start)}}至{{service.Test(item.time_end)}}
						</view>
					</view>
					<view class="q_right">
						{{bur == 0?'待使用':bur == 1? '已使用':'已过期'}}
					</view>
				</view>
				
			</view>
			<view class="st" v-else>
				<image class="back" src='../../../static/image/com_page/juan.png' mode="widthFix"></image>
				<view class="c-text">暂无优惠券</view>
				<!-- <button type="default" @tap="$jump('./exchange')">兑换入口</button> -->
			</view>
		</block>
		
		<block v-else>
			<view class="st" v-if='exchange'>
				<view class="quan" v-for="(item,index) in exchange" :key='item.id'>
					<view class="q_left">
						<view class="l_top">
							<view class="t_left">
								<text>￥</text>
								<text>{{item.discount_value}}</text>
							</view>
							<view class="t_right">
								<view>{{item.name}}</view>
								<view>
									<text>{{item.type_name}}  </text>
									<text>满{{item.where_order_price}}减{{item.discount_value}}</text>
								</view>
							</view>
						</view>
						<view class="l_bottom">
							有效期：{{service.Test(item.fixed_time_start)}}至{{service.Test(item.fixed_time_end)}}
						</view>
					</view>
					<view class="e_right" :class="{receive:!item.c_id}" @tap="getCoupon(item.id,item.c_id,item.discount_value,index)">
						{{item.c_id>0? '已兑换' : '立即兑换'}}
					</view>
				</view>
				
			</view>
			<view class="st" v-else>
				<image class="back" src='../../../static/image/com_page/juan.png' mode="widthFix"></image>
				<view class="c-text">暂无兑换券</view>
				<!-- <button type="default" @tap="$jump('./exchange')">兑换入口</button> -->
			</view>
		</block>
		
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
				title:'优惠券',
				cur:0,
				bur:0,
				data:'',
				data_list:'',
				exchange:''
				// aur:0
			}
		},
		methods:{
			chiose(type){
				this.bur = type
				if(type == 0){
					this.data_list = this.data.not_use
				}else if(type == 1){
					this.data_list = this.data.already_use
				}else if(type == 2){
					this.data_list = this.data.already_expire
				}
			},
			getCoupon(id,cid,discount,index){//兑换优惠券
				let that = this
				if(!cid){
					uni.showModal({
					    title: '提示',
					    content: '兑换需消耗'+discount+'积分',
					    success: function (res) {
					        if (res.confirm) {
								if(Number(that.$store.state.user.integral) > Number(discount)){
									that.service.entire(that,'post',that.APIconfig.api_root.com_page.v_getCoupon,{ //兑换优惠券
										userid:that.$store.state.user.id,
										coupon_id:id,
										type:2
									},function(self,res){
										uni.showToast({
											icon:'none',
											title:res.msg
										})
										if(res.code == 0){
											self.exchange[index].c_id = id
										}
									})
								}else{
									uni.showToast({
										icon:'none',
										title:'积分不足！'
									})
								}
					           
					        } else if (res.cancel) {
					        }
					    }
					});
					
				}
			},
		},
		onLoad() {
			this.service.entire(this,'post',this.APIconfig.api_root.subuser.u_coupon,{
				user_id:this.$store.state.user.id
			},function(self,res){
				self.data = res.data
				self.data_list = res.data.not_use
			})
			this.service.entire(this,'post',this.APIconfig.api_root.subuser.u_couponList,{
				userid:this.$store.state.user.id
			},function(self,res){
				self.exchange = res.data.coupon
			})
		}
	}
</script>

<style lang="scss">
	.allorder{
		width: 100%;
		height: 100upx;
		display: flex;
		text-align: center;
		line-height: 100upx;
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
	.state{
		width: 100%;
		height: 100upx;
		display: flex;
		text-align: center;
		justify-content: space-around;
		line-height: 100upx;
		font-size: 32upx;
		background-color: #F6F6F7;
		color: #666666;
		text{
			flex: 1;
		}
	}
	.actives{
		color:#D80000;
	}
	.quan{
		width: 709rpx;
		height: 181rpx;
		background: url(../../../static/image/com_page/coupon.png)no-repeat;
		background-size:100% 100% ;
		margin: 28rpx auto 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.q_left{
			display: flex;
			flex-direction:column;
			margin-left: 20rpx;
			.l_top{
				display: flex;
				align-items: center;
				.t_left{
					color: #D80000;
					margin-right:20rpx ;
					text:first-child{
						font-size: 28rpx;
					}
					text:last-child{
						font-size: 48rpx;
					}
				}
				.t_right{
					color: #FFFFFF;
					view:first-child{
						font-size: 28rpx;
						margin: 10rpx;
					}
					view:last-child{
						font-size: 24rpx;
						text{
							margin-right: 5rpx;
						}
					}
				}
			}
			.l_bottom{
				color: #FFFFFF;
				font-size: 24rpx;
				margin-top: 20rpx;
			}
		}
		.q_right{
			font-size: 28rpx;
			color:#FFFFFF;
			margin-right: 80rpx;
		}
		.e_right{
			font-size: 26rpx;
			color:#FFFFFF;
			margin-right: 50rpx;
			width: 125rpx;
			text-align: center;
			height: 50rpx;
			line-height: 50rpx;
			padding:0 10rpx;
			border-radius: 50rpx;
		}
		.receive{
			background: #D80000;
		}
	}
	.back{
		width: 147rpx;
		height: 113rpx;
		display: block;
		margin: 208rpx auto 0;
	}
	.c-text{
		font-size: 24rpx;
		color: #919090;
		text-align: center;
		margin: 24rpx 0 0 0;
	}
	button{
		width:256rpx;
		height:75rpx;
		background:rgba(216,0,0,1);
		border-radius:38rpx;
		color: #FFFFFF;
		text-align: center;
		line-height: 75rpx;
		position: fixed;
		top:1158rpx;
		left: 246rpx;
	}
</style>
