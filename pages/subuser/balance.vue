<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="top">
			<view class="top_enlarge"  @tap="service.returns()">
				<image src="/static/image/com_page/returns.png" mode="widthFix"></image>
			</view>
			<text>余额</text>
			<!-- <text @tap="$jump('/pages/subuser/threeuser/cash')">提现</text> -->
			<text @tap="$jump('/pages/subuser/threeuser/cash')"></text>
		</view>
		<image class="black" src="../../static/image/subuser/back.png"></image>
		<view class="money">
			<view>可用余额（元）</view>
			<view>{{user.money ? user.money : '0'}}</view>
		</view>
		<!-- <view class="allorder">
			<text @click="choise()" class="one" :class="{active:cur==2}">全部</text>
			<text @click="choise(1)" class="two" :class="{active:cur==1}">收入</text>
			<text @click="choise('0')" class="three" :class="{active:cur==0}">支出</text>
		</view>
		<view class="box"  >
			<view class="line" v-for="(item,index) in dataList" :key ='item.id'>
				<view class="l_left">
					<view>{{item.title}}</view>
					<view>{{item.time}}</view>
				</view>
				<view class="l_right">{{item.desc}}</view>
			</view>
			<uni-load-more :status="more"></uni-load-more>
		</view> -->
		
		<view class="word_box">
			<!-- <view class="w-top">
				<view class="t-left">
					<text>可提现奖学金:</text>
					<text>￥{{user.money ? user.money : '0'}}</text>
				</view>
				<view class="t-right" @click="money = user.money">全部提现</view>
			</view> -->
			<view class="worp">
				<view class="line">
					<view class="l-top">提现</view>
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
						<image src='/static/image/subuser/wx.png'></image>
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
						<image src='/static/image/subuser/zfb.png'></image>
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
		
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	import uniLoadMore from '../../components/uni-load-more/uni-load-more.vue'
		export default{
			components:{
				uniLoadMore
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
					fee:'',
					money:'',
					chiose_show:'',
					w_name:'',
					w_accounts:'',
					z_name:'',
					z_accounts:'',
					// user:this.$store.state.user,
					// cur:'',
					// dataList:[],
					// more:'more',
					// page:1,
					// loadRecord: true
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
			// methods:{
			// 	choise(all){
			// 		this.more = 'loading'
			// 		this.dataList.length = 0
			// 		this.page = 1
			// 		this.loadRecord = true
			// 		all? this.cur = all :this.cur = 2,
			// 		console.log(this.cur)
			// 		let data ={
			// 			user_id:this.$store.state.user.id,
			// 			page:1,
			// 			operation_type:all
			// 		}
			// 		this.Index(data)
					
			// 	},
			// 	loadMore(){
			// 		this.more = 'loading'
			// 		let data = {
			// 			user_id:this.$store.state.user.id,
			// 			page:this.page,
			// 			operation_type:this.cur
			// 		}
			// 		if(data.operation_type == 2) delete data.operation_type
			// 		this.Index(data)
			// 	},
			// 	Index(data){
			// 		this.service.entire(this,'post',this.APIconfig.api_root.subuser.u_balance_index,data,function(self,res){
			// 			self.dataList.push(...res.data.data)
			// 			self.page ++
			// 			self.more = 'more'
			// 			if(res.data.data.length < 10){
			// 				self.more = 'noMore'
			// 				self.loadRecord = false
			// 			}
			// 		})
			// 	}
			// },
			// onReachBottom() {
			// 	if (this.loadRecord == false) return
			// 	this.loadMore()
			// },
			// onLoad() {
			// 	this.choise()
			// }
		}
</script>

<style lang="scss">
	.content{
		position: relative;
		.top{
			height: 105rpx;
			padding: 0 44rpx;
			width: 100%;
			box-sizing: border-box;
			position: fixed;
			top: var(--status-bar-height);
			z-index: 333;
			left: 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 32rpx;
			font-weight: bold;
			color: #333333;
			background: #fff;
			box-shadow:0px 2rpx 4rpx 0px rgba(0, 0, 0, 0.1);
			.top_enlarge{
				display: flex;
				align-items: center;
				height: 100%;
				width: 180rpx;
			}
			text:nth-of-type(2){
				width: 180rpx;
				font-size: 30rpx;
				font-weight: 400;
				display: inline-block;
				text-align: right;
			}
			image{
				height: 40rpx;
				width: 40rpx;
			}
		}
		.black{
			width: 100%;
			height: 209rpx;
			position:absolute;
			top:106rpx;
			left: 0;
			z-index: 100;
		}
		.money{
			width: 100%;
			position: absolute;
			top:106rpx;
			z-index: 111;
			color: #FFFFFF;
			text-align: center;
			padding-top: 40rpx;
			view:first-child{
				font-size: 24rpx;
				text-align: center;
			}
			view:last-child{
				font-size: 60rpx;
				margin-top: 15rpx;
			}
		}
		.allorder{
			width: 100%;
			height:100upx;
			display: flex;
			text-align: center;
			line-height: 100upx;
			font-size: 28upx;
			position: absolute;
			top: 300rpx;
			left: 0;
			border-bottom:1rpx solid #E9E9E9;
			z-index: 222;
			background: #fff;
			text{
				flex: 1;
			}
		}
		.active{
			color:#D80000;
			border-bottom:1rpx solid #D80000 ;
		}
		.box{
			width: 100%;
			position: absolute;
			top:400rpx;
			left: 0;
			.line{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding:  31rpx;
				border-bottom:1rpx solid #E9E9E9 ;
				.l_left{
					view:first-child{
						font-size: 28rpx;
						color:#343434 ;
					}
					view:last-child{
						font-size: 24rpx;
						color:#A1A1A1;
						margin-top: 10rpx;
					}
				}
				.l_right{
					font-size: 30rpx;
					color:#0C0C0C;
					margin-left: 20rpx;;
				}
			}
		}
		.word_box{
			position: absolute;
			width: 100%;
			top: 310rpx;
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
		}
		
	}
</style>
