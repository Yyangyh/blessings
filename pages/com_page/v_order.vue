<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		
	
		<!-- 空隙 -->
		<view class="void"></view>
		<!-- 空隙 -->
		
		<view class="vider_content">
			<view class="content_list" @tap="$jump('./video_details?id='+item.id)">
				<view class="list_img_box">
					<image :src="data.v_pic" mode="aspectFill"></image>
				</view>
				<view class="list_right">
					<view class="list_one">
						{{data.long_title}}
					</view>
					<view class="list_two">
						{{data.view}}次{{data.type == 1? '观看':'收听'}}
					</view>
					<view class="list_three">
						￥{{data.v_price}}
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
				<text class="list_red">￥{{data.v_price}}</text>
			</view>
			<view class="list">
				<text>优惠券</text>
				<view class="discount" v-if="coupon_list != ''" @click="show = !show">
					<text>{{recording}}</text>
					<image src="/static/image/com_page/discount.png" mode="widthFix"></image>
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
						<image :src="APIconfig.api_img+item.logo" mode="widthFix"></image>
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
				需支付：<text>￥{{data.v_price}}</text>
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
							<view class="cou_mask" v-if="Number(data.total_price) <= Number(item.coupon.where_order_price)">
								
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
				payment:'213',
				id:'',
				payment_id:'',
				require_data:'',
				coupon_list:'',
				show:false,
				recording:'未选择',
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
				console.log(this.coupon_list)
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
				console.log(this.require_data)
				this.Index()
			},
			Index(){ //下单时间确定
				this.service.entire(this,'post',this.APIconfig.api_root.com_page.v_orderDetail,this.require_data,function(self,res){//订单信息
					self.data = res.data.video
					console.log(res.data.coupon)
					if(res.data.coupon != ''){
						let not_coupon = {
							not_coupon:'不使用'
						}
						let coupon_data = res.data.coupon
						coupon_data.push(not_coupon)
						for (let s of coupon_data) {
							s.choice = false
						}
						self.coupon_list = coupon_data
					}
					let data = res.data.pay_type
					for (let s of data) {
						s.choice = false
					}
					self.payment = data
				})
				
			},
			payments(){  //提交
				let that = this
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
								payment:that.payment_name,
							}
							let data_list = Object.assign(data,that.require_data)
							that.service.entire(that,'post',that.APIconfig.api_root.com_page.buy_add,data_list,function(self,res){
								console.log(res)
								if(res.code == 0){
									self.service.entire(self,'post',self.APIconfig.api_root.com_page.order_pay,{
										user_id: that.$store.state.user.id,
										id:res.data.order.id
									},function(self,ref){
										console.log(ref)
										self.service.order(ref,self,'../subuser/s_order?status=-1','pages/subuser/s_order?status=-1')
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
		onLoad(e) {
			console.log(e)
			let require_data = {
				userid: this.$store.state.user.id,
				video_id:e.id,
				section_id:0
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
	
	
	.vider_content{
		padding: 0 20rpx;
		font-size: 24rpx;
		image{
			width: 268rpx;
			height: 179rpx;
			margin-right: 29rpx;
		}
		.content_list{
			display: flex;
			margin-bottom: 30rpx;
			padding-top: 20rpx;
			.list_right{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding-bottom: 30rpx;
				.list_two {
				    color: #999999;
				    margin: 5px 0;
				}
				.list_three{
					color: #D80000;
					font-size: 28rpx;
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
