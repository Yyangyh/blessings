<template>
	<view class="content">
		<view class="status_bar">
					
		</view >
		<returns :titles='title'></returns>
		<view class="w-top">
			<view class="t-left">
				<text>可提现奖学金:</text>
				<text>￥{{user.money ? user.money : '0'}}</text>
			</view>
			<view class="t-right" @click="money = user.money">全部提现</view>
		</view>
		<view class="worp">
			<view class="line">
				<view class="l-top">提现到余额</view>
				<form>
					<view class="l-bottom">
						<text class="">¥</text>
						<input type="text" value="" placeholder="请输入提现金额" v-model="money"/>
					</view>
				</form>
			</view>
			<hr />
			<view class="w-text">提现手续费{{fee}}%：-￥{{fee_money}}</view>
			<view class="w-text1">提现方式</view>
			
			<view class="means">
				<view class="choice" @tap="chiose_show = true">
					<image src='../../../static/image/subuser/wx.png'></image>
					<text>提现到微信</text>
				</view>
				<view v-show="chiose_show === true" >
					<view class="line">
						<text>姓名:</text>
						<input type="text" v-model="w_name" placeholder="请输入您的姓名">
					</view>
					<view class="line">
						<text>收款账号:</text>
						<input type="text" v-model="w_accounts" placeholder="请输入您的账号">
					</view>
				</view>
				<!-- <image src='../../../static/image/brokerage/quan.png'></image> -->
			</view>
			<hr />
			<view class="means">
				<view class="choice" @tap="chiose_show = false">
					<image src='../../../static/image/subuser/zfb.png'></image>
					<text>提现到支付宝</text>
				</view>
				<view v-show="chiose_show === false">
					<view class="line">
						<text>姓名:</text>
						<input type="text"  v-model="z_name"  placeholder="请输入您的姓名">
					</view>
					<view class="line">
						<text>收款账号:</text>
						<input type="text"  v-model="z_accounts"  placeholder="请输入您的账号">
					</view>
				</view>
				<!-- <image src='../../../static/image/brokerage/quan.png'></image> -->
			</view>
			<hr />
			<button @click="extract">提现</button>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	import returns from '../../common/returns.vue'
	export default{
		components:{
			returns
		},
		computed: {
		  // localComputed () { /* ... */ },
		  // 使用对象展开运算符将此对象混入到外部对象中
		  ...mapState({
			  user:'user'
		  }),
		  fee_money(){
			  if(this.money){
				  let money = this.money * this.fee/100
				  return money
			  }else{
				  return '0.00'
			  }
		  }
		},	
		data(){
			return{
				title:'余额提现',
				fee:'',
				money:'',
				chiose_show:'',
				w_name:'',
				w_accounts:'',
				z_name:'',
				z_accounts:''
			}
		},
		methods:{
			extract(){
				if(this.chiose_show === ''){
					uni.showToast({
						icon:'none',
						title:'请选择提款方式！'
					})
					return
				}
				this.service.entire(this,'post',this.APIconfig.api_root.subuser.threeuser.u_create,{
					money:this.money,
					bank_name:this.chiose_show?'微信':'支付宝',
					bank_accounts:this.chiose_show?this.w_accounts:this.z_accounts,
					bank_username:this.chiose_show?this.w_name:this.z_name,
					user_id:this.user.id
				},function(self,res){
					uni.showToast({
						icon:'none',
						title:res.msg
					})
					if(res.code == 0){
						setTimeout(function(){
							uni.switchTab({
								url:'../../index/user'
							})
						},1000)
					}
				})
			},
			
		},
		onLoad(e) {
			
			this.service.entire(this,'post',this.APIconfig.api_root.subuser.threeuser.u_cashauthinfo,{
					user_id:this.user.id
				},function(self,res){
					self.fee = res.data.fee
			})
			
		}
	}
</script>

<style lang="scss">
	.w-top{
		background-color: #F6F6F7;
		display:flex;
		justify-content: space-between;
		padding: 30rpx 22rpx;
		font-size: 28rpx;
		.t-left{
			text:first-child{
				color:#666666;
			}
			text:last-child{
				color:#D80000;
			}
		}
		.t-right{
			color: #EF7C38;
		}
	}
	.worp{
		.line{
			padding: 30rpx 22rpx;
			
			.l-top{
				font-size: 24rpx;
				margin-bottom: 10rpx;
			}
			.l-bottom{
				display: flex;
				align-items: center;
				font-size: 28rpx;
				text{
					margin-right: 20rpx;
				}
				input{
					font-size: 28rpx;
					flex-grow: 2;
				}
			}
		}
		button{
			display: block;
			width:692rpx;
			height:80rpx;
			background:rgba(216,0,0,1);
			border-radius:40rpx;
			color: #FFFFFF;
			line-height: 80rpx;
			text-align: center;
			letter-spacing: 5rpx;
			margin: 40rpx auto 0;
		}
		hr{
			height:1rpx;
			border: none;
			border-top:1px solid #F4F4F4;
		}
		.w-text{
			font-size: 24rpx;
			padding:30rpx 22rpx ;
		}
		.w-text1{
			font-size: 28rpx;
			color:#999999;
			padding:20rpx 22rpx 30rpx 22rpx;
		}
		.means{
			// display: flex;
			// justify-content: space-between;
			padding: 0 22rpx;
			// align-items: center;
			.line{
				display: flex;
				padding: 30rpx 20rpx;
				align-items: center;
				border-top: 2rpx solid #F4F4F4;
				text{
					font-size: 24rpx;
					margin-right: 20rpx;
				}
				input{
					font-size: 24rpx;
					flex-grow: 2;
				}
			}
			.choice{
				display: flex;
				align-items: center;
				font-size: 28rpx;
				padding: 22rpx 0;
				color: #333333;
				image{
					width: 52rpx;
					height: 52rpx;
					margin-right: 20rpx;
				}
			}
			image{
				width: 30rpx;
				height: 30rpx;
			}
		}
	}
</style>
