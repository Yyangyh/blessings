<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<image class="sign1" src='../../static/image/subuser/sign1.png' mode="widthFix"></image>
		<view class="integral">
			<view>{{data.sign_count}}</view>
			<view>签到积分</view>
		</view>
		<view class="singnBox">
			<view class="state">已签到</view>
			<image class="sign2" src="../../static/image/subuser/sign2.png" mode="widthFix"></image>
			<view class="times">{{Sign_num}}</text>
				<text>天</text>
			</view>
			<view class="time">
				<block v-for="(item,index) in data_list" :key='index'>
					<view class="timebox">
						<image v-if="item.is_sign == 1" src='/static/image/subuser/sign.png' mode="widthFix"></image>
						<image v-else src='../../static/image/subuser/qiandao.png' mode="widthFix"></image>
						<view>第{{index + 1}}天</view>
					</view>
					<view class="gang" v-if="index != data_list.length - 1">
						
					</view>
				</block>
				
			</view>
			<button type="default" @click="sign" v-if="if_sign === false">立即签到</button>
			<button type="default" v-else-if="if_sign === true">已签到</button>
			<view class="look" @tap="$jump('./integral/know')">查看积分规则</view>
		</view>
		<!-- 跳转 -->
		<view class="mask_black" v-if="reveal" @tap="reveal = !reveal">
			
		</view>
		<view class="bk" v-if="reveal">
			<image src='../../static/image/subuser/qiandao1.png' mode="widthFix"></image>
			<view class="bk_text">
				<view>签到成功</view>
				<view class="mSg">
					{{msg}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
		export default{
			components:{
				returns
			},
			computed:{
				Sign_num(){ //计算周签到总数
					if(this.data_list){
						var num = this.data_list.reduce(function (sum, s) {
						  return sum + s.is_sign
						}, 0)
						return num
					}
				}
			},
			data(){
				return{
					title:'每周签到',
					reveal:false,
					data_list:'',
					msg:'',
					data:'',
					if_sign:false
				}
			},
			methods:{
				sign(){
					let data = this.service.Test(Date.parse(new Date())/1000)
					data = data.split('-')[2]
					this.service.entire(this,'post',this.APIconfig.api_root.subuser.index_Week,{
						user_id:this.$store.state.user.id
					},function(self,res){
						console.log(res)
						self.data.sign_count += res.integarl
						if(res.code == 0){
							self.reveal = true
							self.if_sign = true
							self.msg = res.msg
							let user_data = {
								integral:Number(self.$store.state.user.integral) + Number(res.integarl)
							}
							self.$store.commit('set_user',user_data)
							for (let s of self.data_list) {
								if(s.day == data) {
									s.is_sign = 1
									break
								}
								
							}
							console.log(self.data_list)
						}else if(res.code == 1){
							uni.showToast({
								icon:'none',
								title:res.msg
							})
						}
					})
				}
			},
			onShow() {
				let data = this.service.Test(Date.parse(new Date())/1000)
				data = data.split('-')[2]
				this.service.entire(this,'post',this.APIconfig.api_root.subuser.thisWeek,{
					user_id:this.$store.state.user.id
				},function(self,res){
					console.log(res)
					self.data_list = res.data.week_all
					self.data = res.data
					for (let s of self.data_list) {
						if(s.day == data) {
							console.log(123)
							s.is_sign == 1 ? self.if_sign = true : self.if_sign = false
						}
						
					}
				})
			}
		}
</script>

<style lang="scss">
	.content{
		width: 100%;
		height: 1229rpx;
		background:linear-gradient(180deg,rgba(255,93,68,1),rgba(255,167,116,1));
		position: relative;
		.mSg{
			font-size: 28rpx;
			color: #333333;
		}
		.sign1{
			position: absolute;
			width: 578rpx;
			height: 321rpx;
			left: 79rpx;
			top:150rpx;
			z-index: 1;
		}
		.integral{
			color: #FFFFFF;
			text-align: center;
			margin-top: 110rpx;
			z-index: 199;
			position: relative;
			view:first-child{
				font-size: 44rpx;
			}
			view:last-child{
				font-size: 24rpx;
				margin-top: 10rpx;
			}
		}
		.singnBox{
			width:690rpx;
			height:800rpx;
			background:rgba(255,255,255,1);
			border-radius:10rpx;
			margin: 130rpx auto 0;
			z-index: 199;
			position: relative;
			padding-top: 30rpx;
			.state{
				font-size: 28rpx;
				color: #777777;
				text-align: center;
				padding: 30rpx auto;
			}
			.sign2{
				width: 296rpx;
				height: 232rpx;
				position: absolute;
				top:85rpx;
				left: 192rpx;
			}
			.times{
				position: absolute;
				top:204rpx;
				left:300rpx;
				color: #FF533A;
				text:first-child{
					font-size: 60rpx;
					margin-right: 10rpx;
				}
				text:last-child{
					font-size: 30rpx;
				}
			}
			.time{
				display: flex;
				margin: 300rpx 0 0 30rpx;
				// align-items: center;
				.timebox{
					display: flex;
					flex-direction:column;
					align-items: center;
					image{
						width: 48rpx;
						height: 48rpx;
					}
					view{
						font-size: 24rpx;
						color: #8F8F8F;
					}
				}
				.gang{
					width: 33rpx;
					height: 2rpx;
					background-color:#ECECEC;
					margin-top: 25rpx;
				}
				
			}
			button{
				width:487rpx;
				height:80rpx;
				background:linear-gradient(180deg,rgba(255,158,103,1),rgba(255,78,51,1));
				border-radius:40rpx;
				color: #FFFFFF;
				font-size: 28rpx;
				margin: 80rpx auto;
			}
			.look{
				font-size: 24rpx;
				color: #A5A5A5;
				text-align: center;
			}
		}
		.bk{
			width:100%;
			position: fixed;
			left: 50%;
			transform: translateX(-50%);
			top:500rpx;
			z-index: 900;
			image{
				width: 500rpx;
				height: 304rpx;
				display: block;
				margin: 0 auto;
				position: relative;
			}
			.bk_text{
				position: absolute;
				text-align: center;
				margin: -170rpx 0 0 31%;
				view:first-child{
					font-size: 32rpx;
					color:#FFFFFF;
				}
				view:last-child{
					margin-top: 40rpx;
					display: flex;
					align-items: center;
					.text1{
						font-size: 24rpx;
						color:#333333;
					}
					.text2{
						font-size: 40rpx;
						color:#FE8D08;
					}
				}
			}
		}
	}
</style>
