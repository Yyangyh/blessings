<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<returns :titles='title'></returns>
		<view class="o_msg">
			<view class="titlie">{{dataList.name}}</view>
			<!-- <view class="msgs">须在5分钟内完成订单支付，否则该订单将自动取消.</view> -->
			<!-- <hr /> -->
			<view class="msgs">应付金额：<text>{{dataList.consume - dataList.discounts}}元/{{dataList.integral}}积分</text></view>
		</view>
		<view class="payment">
			<view class="pa_test">
				支付方式
			</view>
			<view class="pa_box">
				
				<view class="box_list"  v-for="(item,index) in payment"  :key='item.id' @click="choice(index)">
					<view class="list_top">
						<image :src="item.logo" mode="widthFix" v-if="index === 0"></image>
						<image :src="APIconfig.api_img+item.logo" mode="widthFix" v-else></image>
						<view class="">
							{{item.name}}
						</view>
					</view>
					<image v-show="item.choice" class="choice" src="/static/image/com_page/chiose.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<button form-type="submit" @click="register()">提交</button>
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	import c_integral from 'static/image/com_page/c_integral.png'
	export default{
		components:{
			returns
		},
		data(){
			return{
				title:'订单支付',
				dataList:'',
				payment:'',
				payment_id:'',
				payment_name:''
			}
		},
		methods:{
			choice(index){
				for (let s of this.payment) {
					s.choice = false
				}
				this.payment[index].choice = true
				this.payment_id = this.payment[index].id
				this.payment_name = this.payment[index].payment
				this.payment = JSON.parse(JSON.stringify(this.payment))
			},
			register(){
				if(!this.payment_name){
					uni.showToast({
						icon:'none',
						title:'请选择支付方式!'
					})
					return
				}
				this.service.entire(this,'post',this.APIconfig.api_root.subuser.u__order,{
					order_sn:this.dataList.order_sn,
					pay_way:this.payment_name,
				},function(self,res){
					uni.showToast({
						icon:'none',
						title:res.msg
					})
				})
			}
		},
		onLoad(e) {
			this.service.entire(this,'post',this.APIconfig.api_root.subuser.u_upUserGrade,{
				user_id:this.$store.state.user.id,
				level_id:e.id
			},function(self,res){
				console.log(res)
				self.dataList = res.data
				let data =[
					{
						name:'积分',
						logo:c_integral,
						payment:'IntegralPay'
					}
				]
				data.push(...res.data.pay_way)
				self.payment = data
			})
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F6F6F7;
	}
	.o_msg{
		background-color: #FFFFFF;
		// border-radius:22rpx;
		padding: 30rpx 40rpx;
		hr{
			border: none;
			height: 1rpx;
			border-bottom: 1rpx solid #EEEEEE;
		}
		.title{
			font-size: 32rpx;
		}
		.msgs{
			font-size: 28rpx;
			color:#999999;
			margin: 20rpx 0;
		}
		text{
			font-size-adjust: 29rpx;
			color:#D80000;
		}
	}
	.payment{
		font-size: 28rpx;
		padding: 20rpx;
		background: #fff;
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
				.choice{
					position: absolute;
					right: 20rpx;
					top: 30rpx;
					height: 36rpx !important;
					width: 36rpx !important;
				}
			}
		}
	}
	button{
		margin: 40rpx;
		height: 80rpx;
		font-size: 30rpx;
		color: #FFFFFF;
		text-align: center;
		line-height: 80rpx;
		background-color: #D80000;
		border: none;
		border-radius: 40rpx;
		letter-spacing: 10rpx;
		
	}
</style>
