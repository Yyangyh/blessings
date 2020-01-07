<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="order_top">
			<view class="">
				{{data.status_name}}
			</view>
			
			<!-- <view class="" v-if="data.status == 2">
				买家已付款
			</view> -->
			<!-- <view class="" v-else-if="data.status == 3">
				等待买家收货
			</view>
			<view class="" v-else-if="data.status == 4">
				已完成
			</view>
			<view class="" v-else-if="data.status == 1">
				等待买家付款
			</view> -->
			<image src="/static/image/subuser/box.png" mode="widthFix"></image>
		</view>
		<view class="order_position">
			<view class="">
				<image src="/static/image/subuser/position.png" mode="widthFix"></image>
			</view>
			<view class="posi_one">
				<view class="">
					<text>{{data.receive_name}}</text>
					<text>{{data.receive_tel}}</text>
				</view>
				<view class="">
					地址：{{data.receive_province_name}}{{data.receive_city_name}}{{data.receive_county_name}}{{data.receive_address}}
				</view>
			</view>
		</view>
		
		<view class="order_news"  v-if='data.status == 3'>
			<view class="news_one">
				物流信息
			</view>
			<!--  -->
			<view class="news_two" >
				<text>快递公司：</text>
				<text>{{data.express_name}}</text>
			</view>
			<view class="news_two">
				<text>快递单号：</text>
				<text>{{data.express_number}}</text>
			</view>
		
			<!--  -->
			
			<view class="news_four" >
				<view class="" @click="jump('./logistics?id='+data.express_id+'&number='+data.express_number)">
					<image src="/static/image/subuser/logistics.png" mode="widthFix"></image>
					<text>查看物流</text>
				</view>
			</view>
		</view>
		
		<view class="order">
			<view class="order_num" v-for="(item,index) in data_list" :key='item.id' >
				<view class="num_one" @tap="$jump('../../subhome/details?id='+item.goods_id)">
					<image :src="item.images" mode="widthFix"></image>
				</view>
				<view class="num_two" @tap="$jump('../../subhome/details?id='+item.goods_id)">
					<view class="">
						{{item.title}}
					</view>
					<view class="specs">
						<text v-for="(items,indexs) in data_list[index].spec" :key='indexs'>{{items.type}}：{{items.value}}</text>
					</view>
				</view>
				<view class="num_three">
					<view class="">
						￥{{item.price}}
					</view>
					<view class="">
						数量：X{{item.buy_number}}
					</view>
					
				</view>
				
				<view class="order_handle" v-if="data.status == 2 || data.status == 3 || data.status == 4">
					<text v-if="item.orderaftersale == null"  @click="jump('./s_order_refund?id='+ item.id+'&oid='+item.order_id)">{{data.status == 4?'申请售后':'退款/退货'}}</text>
					<block v-else>
						<text v-if="item.orderaftersale.status == 3">退款完成</text>
						<text v-else-if="item.orderaftersale.status == 4"  @click="jump('./s_order_refund?id='+ item.id+'&oid='+item.order_id)">已成功</text>
						<text v-else-if="item.orderaftersale.status == 5"  @click="jump('./s_order_refund?id='+ item.id+'&oid='+item.order_id)">售后已取消</text>
						<text v-else @click="cancel_return(item.orderaftersale.id)">退款/退货中</text>
					</block>
				</view>
				<view class="order_handle" v-else-if="data.status == 6">
					<text v-if="item.orderaftersale.status == 3">退款完成</text>
				</view>
			</view>

			<!--  -->
			

			<!--  -->
			<view class="order_total">
				<view class="total_one">
					订单总价
				</view>
				<view class="total_two">
					<!-- ￥ -->{{data.describe}}
				</view>
			</view>
		</view>
		<view class="order_news">
			<view class="news_one">
				订单信息
			</view>
			<!--  -->
			<view class="news_two" v-if="data.status == 2">
				<text>付款时间：</text>
				<text>{{data.pay_time}}</text>
			</view>
			<view class="news_two" v-else>
				<text>创建时间：</text>
				<text>{{data.confirm_time}}</text>
			</view>

			<!--  -->
			<view class="news_three">
				订单编号：{{data.order_no}}
			</view>
			<!-- <view class="news_four">
				<view class="">
					<image src="../../../static/image/threeLayers/contact.png" mode="widthFix"></image>
					<text>联系卖家</text>
				</view>
			</view> -->
		</view>


		<view class="order_bottom" v-if="data.status == 1">
			<!-- <text>修改地址</text> -->
			<text @click="cancel()">取消订单</text>
			<text class="or_pay" @click="show = !show">付款</text>
		</view>
		
		<view class="order_bottom" v-else-if="data.status == 3">
			<!-- <text>修改地址</text>
			<text>取消订单</text> -->
			<text class="or_pay" @click="determine()">确定收货</text>
		</view>
		
		<view class="mask" v-if="show" @click="show = !show">

		</view>
		<view class="mask_box" :class="show===false ? 'mask_none' : show===true ? 'mask_show' : ''">
			<image class="close" src="../../../static/image/index/close.png" mode="widthFix" @click="show = !show"></image>
			<view class="box_top">
				支付方式
			</view>
			<view class="pa_box">
				<view class="box_list" v-for="(item,index) in pay_list" :key='item.id' @click="choice(index)">
					<view class="list_top">
						<image :src="item.logo" mode="widthFix"></image>
						<view class="">
							{{item.name}}
						</view>
					</view>
					<image v-show="item.choice" class="choice" src="../../../static/image/com_page/chiose.png" mode="widthFix"></image>
				</view>
			</view>
			<button @click="payment()">立即支付</button>

		</view>
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	export default {
		components: {
			returns
		},
		data() {
			return {
				title: '订单详情',
				data: '',
				data_list: '',
				pay_list: '',
				show: false,
				payment_id: '',
				payment_name: '',

			}
		},
		methods: {
			jump(url) {
				uni.navigateTo({
					url: url
				})
			},
			determine(){//确定收货
				let that = this
				uni.showModal({
				    title: '提示',
				    content: '是否确定收货？',
				    success: function (res) {
				        if (res.confirm) {
				            that.service.entire(that,'post',that.APIconfig.api_root.subuser.threeuser.s_order_collect,{
								id:that.data.id,
								user_id: that.$store.state.user.id,
							},function(self,res){
								uni.showToast({
									icon:'none',
									title:res.msg
								})
				            	if(res.code == 0){
									setTimeout(function(){
										self.service.returns()
									},1500)
								}
				            })
				        } else if (res.cancel) {
				           return
				        }
				    }
				});
			},
			cancel_return(id){//取消退款申请
				let that = this
				console.log(id)
				uni.showModal({
				    title: '提示',
				    content: '是否取消退款/退货申请？',
				    success: function (res) {
				        if (res.confirm) {
				            that.service.entire(that,'post',that.APIconfig.api_root.subuser.threeuser.s_cancel,{
								id:id,
								user_id: that.$store.state.user.id,
							},function(self,res){
								uni.showToast({
									icon:'none',
									title:res.msg
								})
				            	if(res.code == 0){
									setTimeout(function(){
										self.service.returns()
									},1000)
								}
				            })
				        } else if (res.cancel) {
				           return
				        }
				    }
				});
			},
			cancel(){//取消订单
				let that = this
				uni.showModal({
				    title: '提示',
				    content: '是否确定取消？',
				    success: function (res) {
				        if (res.confirm) {
				            that.service.entire(that,'post', that.APIconfig.api_root.subuser.threeuser.s_order_cancel,{
								id:that.data.id,
								user_id: that.$store.state.user.id,
							},function(self,res){
								uni.showToast({
									icon:'none',
									title:res.msg
								})
				            	if(res.code == 0){
									setTimeout(function(){
										self.service.returns()
									},1500)
								}
				            })
				        } else if (res.cancel) {
				           return
				        }
				    }
				});
				
				
			},
			
			choice(index) {
				for (let s of this.pay_list) {
					s.choice = false
				}
				this.pay_list[index].choice = true
				this.pay_list = JSON.parse(JSON.stringify(this.pay_list))
				this.payment_id = this.pay_list[index].id
				this.payment_name = this.pay_list[index].payment
			},
			payment() {
				//提交
				let  that = this
				if (!this.payment_id) {
					uni.showToast({
						icon: 'none',
						title: '请选择支付方式'
					})
					return
				}
				uni.showModal({
				    title: '提示',
				    content: '是否确定支付？',
				    success: function (res) {
				        if (res.confirm) {
				            that.service.entire(that,'post',that.APIconfig.api_root.com_page.order_pay, {
				            	user_id: that.$store.state.user.id,
				            	id: that.data.id,
				            	payment_id: that.payment_id
				            }, function(self, ref) {
				            	self.service.order(ref,self,'../s_order?status=-1','pages/subuser/s_order?status=-1')
				            	
				            })
				        } else if (res.cancel) {
				           return
				        }
				    }
				});
				

			}
		},
		onLoad(options) {
			this.service.entire(this, 'post', this.APIconfig.api_root.subuser.threeuser.s_order_detail, {
				id: options.id,
				user_id: this.$store.state.user.id,
			}, function(self, res) {
				self.data = res.data
				self.data_list = res.data.items
				if(res.data.payment_list){
					let data = res.data.payment_list
					for (let s of data) {
						s.choice = false
					}
					self.pay_list = data
				}
				
				
			})
		}
	}
</script>

<style scoped lang="scss">
	page {
		background: #F1F1F1;
		height: 100%;
	}
	.content {
		padding-bottom: 120rpx;
	}

	.order_top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 28rpx;
		color: #FFFFFF;
		height: 200rpx;
		padding: 0 72rpx;
		background:linear-gradient(90deg,#E41217,#FD7160);
		image {
			height: 144rpx;
			width: 214rpx;
		}
	}


	.order_position {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		background: #fff;
		height: 188rpx;
		padding: 0rpx 20rpx;
		font-size: 28rpx;
		color: #333;
		text:nth-of-type(2) {
			color: #999999;
			margin-left: 32rpx;
		}
		image {
			height: 41rpx;
			width: 31rpx;
			margin-right: 30rpx;
		}
	}


	.order {
		margin-top: 20rpx;
		background: #FFFFFF;
		color: #333333;
		padding: 24rpx 20rpx;
		.order_num {
			display: flex;
			font-size: 28rpx;
			position: relative;
			height: 228rpx;
			.num_two{
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 3;
				overflow: hidden;
				height: 120rpx;
				flex-grow: 2;
				.specs {
					color: #808080;
					display: flex;
					justify-content: flex-start;
					align-items: flex-start;
					flex-wrap: wrap;
				}
				.specs text {
					margin-right: 10rpx;
					margin-bottom: 10rpx;
					font-size: 24rpx;
					display: block;
					padding: 10rpx 8rpx;
					background: #F1F1F1;
				}
			}
			.num_three {
				margin-left: 20rpx;
				view {
					white-space: nowrap;
					&:nth-of-type(2) {
						font-size: 24rpx;
						color: #999999;
					}
				}
			}
		}
		image {
			width: 220rpx;
			height: 142rpx;
			margin-right: 24rpx;
		}
		.order_handle {
			text-align: right;
			padding-bottom: 20rpx;
			position: absolute;
			right: 0;
			bottom: 0;
			text {
				display: inline-block;
				text-align: center;
				// width: 160rpx;
				padding: 0 20rpx;
				height: 66rpx;
				font-size: 28rpx;
				color: #333;
				border: 2rpx solid #666666;
				border-radius: 66rpx;
				line-height: 66rpx;
			}
		}
		.order_total {
			display: flex;
			justify-content: space-between;
			font-size: 28rpx;
			border-top: 2rpx solid #F1F1F1;
			padding: 30rpx 0 10rpx 0;
			.total_two {
				color: #FF431D;
			}
		}
	}

	.order_news {
		background: #FFFFFF;
		margin-top: 20rpx;
		font-size: 28rpx;
		padding: 0 20rpx;
		.news_one {
			padding: 30rpx 0;
		}
		.news_two {
			margin-bottom: 20rpx;
			color: #808080;
		}
		.news_three {
			font-size: 24rpx;
			color: #808080;
			margin-bottom: 30rpx;
			padding-bottom: 20rpx;
		}
		text {
			font-size: 24rpx;
		}
		image {
			height: 38rpx;
			width: 40rpx;
			margin-right: 10rpx;
		}
		.news_four view {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			padding: 32rpx 0;
			border-top: 2rpx solid #F1F1F1;
		}
	}


	.order_bottom {
		display: flex;
		justify-content: flex-end;
		padding: 20rpx 20rpx;
		color: #666666;
		font-size: 28rpx;
		background: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		box-sizing: border-box;
		text {
			display: inline-block;
			width: 160rpx;
			height: 66rpx;
			line-height: 66rpx;
			border-radius: 66rpx;
			text-align: center;
			border: 2rpx solid #666666;
			margin-left: 26rpx;
		}
		.or_pay {
			color: #1D74FF;
			border-color: #1D74FF;
		}
	}


	.mask {
		height: 100%;
		width: 100%;
		position: fixed;
		background: rgba(0, 0, 0, .5);
		top: 0;
		left: 0;
	}

	.mask_box {
		position: fixed;
		width: 100%;
		bottom: 0;
		left: 0;
		background: #fff;
		height: 640rpx;
		padding: 20rpx;
		box-sizing: border-box;
		transition: .3s;
		transform: translateY(100%);
	}
	.mask_none{
	  transform: translateY(100%);
	}
	.mask_show{
	  transform: translateY(0);
	}
	.mask_box{
		.box_top {
			font-size: 32rpx;
			color: #333333;
			margin-bottom: 30rpx;
		}
		.close {
			height: 46rpx;
			width: 46rpx;
			position: absolute;
			right: 10rpx;
			top: 10rpx;
		}
	}


	.box_list {
		display: flex;
		position: relative;
		font-size: 28rpx;
		.list_top {
			display: flex;
			align-items: center;
			font-weight: 500;
			width: 100%;
			height: 100rpx;
			image {
				margin-right: 38rpx;
				height: 52rpx;
				width: 52rpx;
			}
			view {
				flex-grow: 2;
				height: 100rpx;
				line-height: 100rpx;
				border-bottom: 2rpx solid #F1F1F1;
			}
		}
		.choice {
			position: absolute;
			right: 20rpx;
			top: 30rpx;
			height: 36rpx ;
			width: 36rpx;
		}
	}
	button {
		position: absolute;
		left: 3%;
		bottom: 20rpx;
		height: 90rpx;
		line-height: 90rpx;
		border-radius: 90rpx;
		background: #1D74FF;
		color: #fff;
		font-size: 36rpx;
		width: 94%;
	}
</style>
