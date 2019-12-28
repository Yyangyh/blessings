<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<view class="activitys">
			<image :src='APIconfig.api_img+dataList.cover'></image>
			<view class="a-right">
				<view class="theme">{{dataList.title}}</view>
				<view class="line">
				  <image src="../../static/image/index/apply.png" mode="widthFix"></image>
				  <text>已报名{{dataList.sign_number}}人</text>
				  <text>限{{dataList.limit}}人报名</text>
				 </view>
				 <view class="price">￥{{dataList.price}}/{{dataList.integral}}积分</view>
			</view>
		</view>
		<view class="information">
			<form>
				<view class=""><text>姓名：</text><input type="text" placeholder="请输入姓名" v-model="name"></view>
				<hr />
				<view class=""><text>手机号码：</text><input type="text" placeholder="请输入手机号码" v-model="phone" value></view>
				<hr />
				<view class=""><text>备注：</text><input type="text" v-model="remarks" placeholder="请输入备注"></view>
				<hr />
			</form>
			
		</view>
		<!-- 提交成功弹框 -->
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
		<button form-type="submit" @click="register()">提交</button>
		<view class="k">
			提交成功
		</view>
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	import c_integral from 'static/image/com_page/c_integral.png'
	export default{
		components:{
			returns
		},
		data(){
			return{
				title:'立即报名',
				name:'',
				phone:'',
				remarks:'',
				dataList:'',
				payment:'',
				pay_type:'',
				payment_id:'',
				payment_name:'',
			}
		},
		methods:{
			choice(index){
				for (let s of this.payment) {
					s.choice = false
				}
				this.payment[index].choice = true
				if(index === 0){
					this.pay_type = 1
				}else{
					this.pay_type = 2
					this.payment_id = this.payment[index].id
					this.payment_name = this.payment[index].payment
					this.payment = JSON.parse(JSON.stringify(this.payment))
				}
				
			},
			 register(){
				  // let tel = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(this.phone);
				   if (this.phone == "" || this.name == "") {
					  uni.showToast({
					  	icon:'none',
					  	title:'报名信息不能为空!'
					  })
					  return
					 }
				  // }else if(!tel){
					 //  uni.showToast({
					 //  	icon:'none',
					 //  	title:'请输入正确的11位手机号码!'
					 //  })
					 //  return
				  // }
				  console.log(this.pay_type)
				  if(!this.pay_type){
					  uni.showToast({
					  	icon:'none',
					  	title:'请选择支付方式!'
					  })
					  return
				  }
				  this.service.entire(this,'post',this.APIconfig.api_root.subindex.a_activity_signup,{
					  user_id:this.$store.state.user.id,
					  id:this.id,
					  pay_type:	this.pay_type,
					  sign_name:this.name,
					  sign_mobile:this.phone,
					  payment_id:this.payment_id,
					  remark:this.remarks
				  },function(self,res){
					  console.log(res)
					  uni.showToast({
					  	icon:'none',
						title:res.msg
					  })
				  })
			 }
		},
		onLoad(e) {
			this.id = e.id
			this.service.entire(this,'post',this.APIconfig.api_root.subindex.a_activity_detail,{
				id:e.id
			},function(self,res){
				console.log(res)
				self.dataList = res.data.data
				
				let data =[
					{
						name:'积分',
						logo:c_integral
					}
				]
				data.push(...res.data.payment_list)
				self.payment = data
			})
		}
	}
</script>

<style lang="less">
	.content{
		width: 100%;
		background-color: #F6F6F6;
		position: relative;
		.activitys{
			background-color: #FFFFFF;
			padding: 31rpx 25rpx 31rpx 31rpx;
			display: flex;
			image{
				width: 275rpx;
				height: 177rpx;
				margin: 31rpx 31rpx 31rpx 0;
			}
			.a-right{
				.theme{
					font-size: 24upx;
					color:#333333;
					margin:20upx 0 0upx 0;
				}
				.line{
					display: flex;
					align-items: center;
					image{
						width: 32rpx;
						height: 32rpx;
						margin-left: -5rpx;
					}
					text{
						font-size: 28rpx;
						color:#666666;
						margin-right: 6rpx;
					}
					.theme1{
						font-size: 24upx;
						color:#333333;
					}
				}
				.price{
					font-size: 25rpx;
					font-weight: bold;
					color:#D80000;
					letter-spacing: 3rpx;
				}
			}
		}
		.information{
			background-color: #FFFFFF;
			width: 100%;
			padding: 40rpx;
			margin: 30rpx 0;
			box-sizing: border-box;
			hr{
				height:1rpx;
				border: none;
				border-top:1px solid #F4F4F4;
				width: 96%;
				margin: 0 100rpx 0 0;
			}
			view{
				display: flex;
				font-size: 28rpx;
				margin: 20rpx 0;
				align-items: center;
			}
			input{
				flex-grow: 2;
				font-size: 28rpx;
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
		.k{
			width: 254rpx;
			height: 106rpx;
			color: #FFFFFF;
			background:rgba( 0,0,0,.5);
			text-align: center;
			line-height: 106rpx;
			position: absolute;
			top: 400rpx;
			left: 0;
			right: 0;
			margin: auto;
			display: none;
		}
	}
</style>
