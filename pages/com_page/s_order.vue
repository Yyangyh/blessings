<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		
		<view class="top_add">
			<view class="name" v-if="show_add == 1"  @click="$jump('../subuser/address')">
				<view class="info">
					<text>{{address.name}}</text>
					<text>{{address.tel}}</text>
				</view>
				<view class="address">
					{{address.province_name}}{{address.city_name}}{{address.county_name}}{{address.address}}
				</view>
			</view>
			<view class="name" v-else-if="show_add == 0 " @click="$jump('../subuser/address')">
				<view class="">
					未设置收货地址，请设置
				</view>
			</view>
			<view class="more">
				<image src="/static/image/index/go.png" mode="widthFix"></image>
			</view>
			<view class="bg">
				<image src="/static/image/com_page/void.png" mode="widthFix"></image>
			</view>
		</view>
		<!-- 空隙 -->
		<view class="void"></view>
		<!-- 空隙 -->
		<view class="commodity" v-for="(item,index) in shopp" :key='item.id'>
			<view class="left">
				<image :src="item.images" mode="widthFix"></image>
			</view>
			<view class="right">
				<view class="title">
					<text>{{item.title}}</text>
				</view>
				<view class="button" v-if="item.spec">
					<text v-for="(items,indexs) in item.spec" :key='indexs'>{{items.type}}：{{items.value}}</text>
				</view>
				<view class="price">
					<view class="momey">
						￥{{item.price}}
					</view>
					<view class="number">
						数量：x{{item.stock}}
					</view>
				</view>
			</view>
		</view>
		<!-- 空隙 -->
		<!-- <view class="void"></view> -->
		<!-- 空隙 -->

		<!-- 空隙 -->
		<view class="void"></view>
		<!-- 空隙 -->
		<view class="recording">
			<view class="list">
				<text>商品小计</text>
				<text class="list_red">￥{{data.total_price}}</text>
			</view>
			<view class="list" v-if="extension">
				<text >运费</text>
				<text class="list_red">{{extension[0].tips}}</text>
			</view>
			<view class="list">
				<text>优惠券</text>
				<view class="discount" v-if="coupon_list != ''" @click="show = !show">
					<text>{{recording}}</text>
					<image src="../../static/image/com_page/discount.png" mode="widthFix"></image>
				</view>
				
				<text v-else>无</text>
			</view>
		</view>	
		
		<view class="void"></view>
		<!-- 空隙 -->
		
		<view class="payment">
			<view class="pa_test">
				支付方式
			</view>
			<view class="pa_box">
				<view class="box_list"  v-for="(item,index) in payment"  :key='item.id' @click="choice(index)">
					<view class="list_top">
						<image :src="item.logo" mode="widthFix"></image>
						<view class="">
							{{item.name}}
						</view>
					</view>
					<image v-show="item.choice" class="choice" src="/static/image/com_page/chiose.png" mode="widthFix"></image>
				</view>
				
			</view>
		</view>
		
		<view class="pay">
			<view class="paying">
				需支付：<text>￥{{data.actual_price}}</text>
			</view>
			<view class="btn">
				<button @click="payments()">支付订单</button>
			</view>
		</view>
		
		<view class="mask_black" @click="show = !show" v-show="show">
		</view>
		<view class="discount_box"  :class="show===false ? 'mask_none' : show===true ? 'mask_show' : ''">
			<view class="box_top">
				优惠详情
			</view>
			<view class="box_list">
				<scroll-view  scroll-y="true" class="scroll-Y">
					<view class="cou_list" v-for="(item,index) in coupon_list" :key='index'>
						<block v-if="item.coupon">
							<view class="cou_test"  @tap="discount_choice(index)">
								<view class="cou_left">
									<view class="left_one">
										￥<text>{{item.coupon.discount_value}}</text>{{item.coupon.type == 1?'折':'元'}}
									</view>
									<view class="left_two">
										<text>{{item.coupon.use_limit_type_name}}</text>
										<text>{{item.coupon.name}}</text>
									</view>
									<view class="left_two">
										<view class="">
											有效期：{{item.time_start_text}}
										</view>
										<view class="">
											-{{item.time_end_text}}
										</view>
									</view>
								</view>
								<image v-show="item.choice" src="/static/image/com_page/chiose.png" mode="widthFix"></image>
								
							</view>
							<view class="cou_mask" v-if="Number(data.total_price) < Number(item.coupon.where_order_price)">
								
							</view>
						</block>
						<block v-else>
							<view class="cou_test"  @tap="discount_choice(index)">
								<view class="">
									{{item.not_coupon}}
								</view>
								<image v-show="item.choice" src="/static/image/com_page/chiose.png" mode="widthFix"></image>
							</view>
						</block>
					</view>
				</scroll-view>
			</view>
			<button @click="finish()">完成</button>
		</view>
		
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	export default {
		data() {
			return {
				title:'确认订单',
				data:[],
				address:'',
				shopp:'',
				payment:'',
				indexs:'',
				id:'',
				payment_id:'',
				show_add:3,
				require_data:'',
				coupon_list:'',
				show:false,
				recording:'未选择',
				extension:''
			}
		},
		components:{
			returns
		},
		methods:{
			choice(index){
				for (let s of this.payment) {
					s.choice = false
				}
				this.payment[index].choice = true
				this.payment_id = this.payment[index].id
				this.payment_name = this.payment[index].payment
			},
			discount_choice(index){
				for (let s of this.coupon_list) {
					s.choice = false
				}
				this.coupon_list[index].choice = true
			},
			finish(){
				this.show = false
				this.coupon_list.forEach((item,index) => {
					if(item.choice == true){
						if(item.id){
							this.require_data.coupon_id = this.coupon_list[index].id
							this.coupon_list[index].coupon.type == 0?this.recording = '￥'+this.coupon_list[index].coupon.discount_value+'元':this.recording = '￥'+this.coupon_list[index].coupon.discount_value+'折'
						}else{
							this.require_data.coupon_id = ''
							this.recording = '不使用'
						}
					}
				})
				this.Index()
			},
			Index(){ //下单时间确定
				this.service.entire(this,'post',this.APIconfig.api_root.com_page.buy_index,this.require_data,function(self,res){//订单信息
					self.data = res.data.base
					if(res.data.plugins_coupon_data.coupon_list != ''){
						let not_coupon = {
							not_coupon:'不使用'
						}
						let coupon_data = res.data.plugins_coupon_data.coupon_list
						coupon_data.push(not_coupon)
						for (let s of coupon_data) {
							s.choice = false
						}
						if(res.data.plugins_coupon_data.coupon_choice != ''){
							for (let s of coupon_data) {
								if(s.id == res.data.plugins_coupon_data.coupon_choice.id) s.choice = true
							}
							
						}
						self.coupon_list = coupon_data
					}
					if(!res.data.base.address){
						self.show_add = 0
					}else{
						self.show_add = 1
					}
					self.address = res.data.base.address
					self.shopp = res.data.goods_list
					self.extension = res.data.extension_data
					let data = res.data.payment_list
					for (let s of data) {
						s.choice = false
					}
					self.payment = data
				})
				
			},
			payments(){  //提交
				let that = this
				if(!this.address){
					uni.showToast({
						icon:'none',
						title:'请添加收货地址'
					})
					return
				}
				if(!this.payment_id){
					uni.showToast({
						icon:'none',
						title:'请选择支付方式'
					})
					return
				}
				uni.showModal({
				    title: '提示',
				    content: '是否确定支付？',
				    success: function (res) {
				        if (res.confirm) {
				            // console.log('用户点击确定');
							let data = {
								user_id: that.$store.state.user.id,
								address_id:that.address.id,
								payment_id:that.payment_id,
							}
							let data_list = Object.assign(data,that.require_data)
							that.service.entire(that,'post',that.APIconfig.api_root.com_page.buy_add,data_list,function(self,res){
								if(res.code == 0){
									self.service.entire(self,'post',self.APIconfig.api_root.com_page.order_pay,{
										user_id: that.$store.state.user.id,
										id:res.data.order.id
									},function(self,ref){
										if(ref.code == 0){
											self.service.order.apply(self,[ref,that.payment_name,'../subuser/s_order?status=-1'])
										}else{
											uni.showToast({
												icon:'none',
												title:ref.msg
											})
										}
										// self.service.order(ref,self,'../subuser/s_order?status=-1','pages/subuser/s_order?status=-1')
									})
								}else{
									uni.showToast({
										icon:'none',
										title:res.msg
									})
								}
								
							})
				        } else if (res.cancel) {
				            // console.log('用户点击取消');
							return
				        }
				    }
				});
				
			}
		},
		onLoad(options) {
			this.options = JSON.parse(options.data)
			let options_data = JSON.parse(options.data)
			let require_data
			if(options_data.type == 'cart'){   //从购物车进来
				require_data = {
					user_id: this.$store.state.user.id,
					ids:options_data.id,
					buy_type:options_data.type,
				}
			}else{
				require_data = {  //直接购买
					user_id: this.$store.state.user.id,
					goods_id:options_data.id,
					stock:options_data.num,
					spec:options_data.spec,
					buy_type:options_data.type,
				}
			
			}
			this.require_data = require_data
		},
		onShow() {
			this.Index()
		}
	}
</script>

<style scoped lang="scss">
	.content{
		width: 100%;
		padding-bottom: 150rpx;
	}
	.void{
		width: 100%;
		height: 10rpx;
		background: #F2F2F2;
	}
	.top_add{
		width: 100%;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		.name{
			width: 90%;
			padding: 40rpx 0;
			font-size: 30rpx;
			color: #000;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			.info{
				width: 90%;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
			.address{
				width: 90%;
				margin-top: 10rpx;
				font-size: 28rpx;
				color: #666666;
			}
		}
		.more{
			width: 28rpx;
			/* height: 28rpx; */
			margin-right: 20rpx;
			image{
				width: 28rpx;
				height: 28rpx;
			}
		}
		.bg{
			width: 100%;
			position: absolute;
			bottom: 0;
			image{
				width: 100%;
				height: 10rpx;
			}
		}
	}
	
	
	
	.commodity{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-content: center;
		padding-top: 30rpx;
		padding-bottom: 24rpx;
		border-bottom: 10rpx solid #F2F2F2;
		.left{
			width: 30%;
			padding: 0 5%;
			display: flex;
			align-items: center;
			justify-content: center;
			image{
				width: 220rpx;
				height: 142rpx;
			}
		}
		.right{
			width: 65%;
			margin-right: 5%;
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
			flex-direction: column;
			.title{
				font-size: 30rpx;
				color: #333333;
				/* font-weight: bold; */
			}
			.button{
				color: #808080;
				display: flex;
				justify-content: flex-start;
				align-items: flex-start;
				flex-wrap: wrap;
				text{
					margin-right: 10rpx;
					margin-bottom: 10rpx;
					font-size: 24rpx;
					display: block;
					padding: 10rpx 8rpx;
					background: #F1F1F1;
				}
			}
			.price{
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: flex-start;
				.momey{
					font-size: 36rpx;
					color: #FF431D;
				}
				.number{
					font-size: 24rpx;
					color: #666666;
				}
			}
			
		}
	}
	
	
	
	.recording{
		width: 100%;
		font-size: 32rpx;
		color: #333333;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		.list{
			font-size: 24rpx;
			color: #999;
			width: 90%;
			height: 100rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 2rpx solid #F2F2F2;
			
			view{
				display: flex;
				align-items: center;
				font-size: 28rpx;
				color: #666666;
			}
			image{
				height: 45rpx;
				width: 45rpx;
				margin-left: 10rpx;
			}
			
			.list_red{
				color: #FF431D;
				font-size: 28rpx;
			}
		}
	}
	.payment{
		font-size: 28rpx;
		padding: 20rpx;
		image{
			height: 52rpx;
			width: 52rpx;
		}
		.pa_test{
			padding: 18rpx 0;
		}
		.pa_box{
			.box_list{
				display: flex;
				position: relative;
				.list_top{
					display: flex;
					align-items: center;
					font-weight: 500;
					width: 100%;
					height: 100rpx;
					image{
						margin-right: 38rpx;
					}
					view{
						flex-grow: 2;
						height: 100rpx;
						line-height: 100rpx;
						border-bottom: 2rpx solid #F1F1F1;
					}
				}
			}
		}
	}
	.choice{
		position: absolute;
		right: 20rpx;
		top: 30rpx;
		height: 36rpx !important;
		width: 36rpx !important;
	}
	
	.pay{
		width: 100%;
		height: 120rpx;
		border-top: 1rpx solid #F1F1F1;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		bottom: 0;
		background: #fff;
		.paying{
			margin-left: 5%;
			color: #666666;
			font-size: 32rpx;
			text{
				color: #FF431D;
			}
		}
		.btn{
			width: 224rpx;
			height: 90rpx;
			font-size: 36rpx;
			margin-right: 5%;
			button{
				border-radius: 45rpx;
				background: #D80000;
				color: #fff;
			}
		}
	}
	
	.discount_box{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		min-height: 860rpx;
		background: #fff;
		z-index: 900;
		transition: .3s;
		transform: translateY(100%);
		.box_top{
			text-align: center;
			font-size: 28rpx;
			padding: 20rpx 0;
			color: #333333;
		}
		.box_list{
			height: 660rpx;
			.cou_list{
				background: url('../../static/image/com_page/coupon_blue.png') no-repeat;
				background-size: 100% 100%;
				width: 710rpx;
				height: 182rpx;
				display: flex;
				align-items: center;
				margin: 0 auto;
				margin-top: 30rpx;
				color: #1D9DFF;
				position: relative;
				.cou_test{
					/* position: absolute; */
					width: 100%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 0 40rpx;
					.cou_left{
						color: #1D9DFF;
						font-size: 24rpx;
						text{
							font-size:48rpx;
							margin-right: 16rpx;
						}
						.left_two{
							text{
								font-size: 24rpx;
							}
						}
					}
					.cou_right{
						width: 142rpx;
						height: 60rpx;
						line-height: 60rpx;
						border-radius: 60rpx;
						text-align: center;
						font-size: 30rpx;
						color: #FFFFFF;
						background: #1D9DFF;
					}
				}
				
				image{
					width: 45rpx;
					height: 45rpx;
				}
			}
			.cou_mask{
				position: absolute;
				z-index: 999;
				height: 182rpx;
				width: 100%;
				background: rgba(255,255,255,.6);
			}
			
		}
		button{
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			font-size: 30rpx;
			color: #fff;
			background: #1D74FF;
		}
	}
	
	
	.scroll-Y{
		height: 660rpx;
	}
	.mask_none {
		transform: translateY(100%) !important;
	}
	
	.mask_show {
		transform: translateY(0) !important;
	}
</style>
