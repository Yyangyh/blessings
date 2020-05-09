<template>
	<view class="bg">
		<!-- <view class="status_bar"> -->
		            <!-- 这里是状态栏 -->
		  <!-- </view> -->
		<view class="">
			<image class="back" src="../../static/back.png" mode="scaleToFill"></image>
			<!-- <view class="content" :style="{background:'url('+back+') 0 0 no-repeat',backgroundSize:'100% 100%'}"> -->
			<view class="">
				<view class="content">
					
					<view class="logo">
						<!-- <image src="../../static/logo.png" mode="widthFix"></image> -->
						<view class="">
							五福家庭账号登录
						</view>
					</view>
					<view class="box">
						<view class="logo_ipt">
							<text><image src="../../static/image/login/user.png" mode="widthFix"></image></text>
							<input type="text" value="" v-model="accounts" placeholder="用户名/手机号"/>
						</view>
						<view class="logo_ipt">
							<text><image src="../../static/image/login/pwd.png" mode="widthFix"></image></text>
							<input type="text" v-model="pwd" password="true" value="" placeholder="请输入您的密码"/>
						</view>
						<view class="logo_test">
							<text @click="jump('./reg')">注册账号</text>
							<text @click="jump('./forget')">忘记密码</text>
						</view>
						<!-- <button class="red_button" @click="jump('../index/index')">登录</button> -->
						<button class="red_button" @click="login()">登录</button>
						<view class="message">
							<text @click="jump('./message_login')">短信验证码登录</text>
						</view>
						
					</view>
					<!-- #ifdef APP-PLUS -->
					<view class="other">
						<text class="line"></text>
						<text class="other_test">其他登录方式</text>
						<text class="line"></text>
					</view>
					
					<view class="mode">
						<image src="../../static/image/login/wx.png" mode="widthFix" @click="wx()"></image>
					</view>
					<!-- #endif -->
					<view class="agreement">
						
						<view class="" @tap="jump('./agreement')">
							用户协议
						</view>
						<text></text>
						<view class="" @tap="jump('./prvate')">
							隐私政策
						</view>
					</view>
				</view>
				
			</view>
		</view>
		
		
		<view class="Mask" v-show="treaty_show == true" @click="treaty_show = false">
			
		</view>
		<view class="treaty_box"   v-show="treaty_show == true">
			<image src="../../static/image/login/agreement.jpg" mode="widthFix"></image>
			<view class="t_conent">
				<scroll-view scroll-y="true" class="box_conent">
					<rich-text :nodes='treaty'></rich-text>
				</scroll-view>
				<view class="all_btn">
					<button class="refuse" @click="treaty_show = false">拒绝</button>
					<button class="agree" @click="agree">同意</button>
				</view>
			</view>
		</view>
		
		<view class="agreement_box" v-if="agreement_status">
			<view class="elastic_agreement">
				<view class="agreement_one">
					服务协议和隐私政策
				</view>
				<view class="agreement_two">
					请你务必审慎阅读、充分理解”服务协议“和”隐私政策"各条款,包括但不限于:为了向你提供即时通讯、内容分享等服务,我们需要收集你的设备信息、操作日志等个人信忘。
					<view class="">
						你可以在“设置”中查看、变更、州除个人信息并管理你的授权。你可阅读<text @tap="jump('./agreement')">《服务协议》</text>和<text @tap="jump('./prvate')">《隐私政策》</text>了解详细信息。如你同意,请点击"同意”开始接受我们的服务。
					</view>
				</view>
				<view class="btm">
					<view class="btm_one">
						暂不使用
					</view>
					<view class="btm_two" @tap="agreement_status = false">
						同意
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data() {
			return {
				accounts:'',
				pwd:'',
				show:0,
				treaty_show:false,
				treaty:'',
				agreement_status:true
			}
		},
		methods:{
			jump(url){
				uni.navigateTo({
					url:url
				})
			},
			login(){
				let that = this
				if(!that.accounts){
					uni.showToast({
						icon: 'none',
						title: '请输入用户名或者手机号'
					});
					return;
				}
				if(!that.pwd){
					uni.showToast({
						icon: 'none',
						title: '请输入密码'
					});
					return;
				}
				uni.showLoading({
					title: '登录中',
					mask: true
				});
				let times = setTimeout(function() {
					uni.hideLoading()
					uni.showToast({
						icon: 'none',
						title: '网络请求错误，请稍后再试'
					})
					return
				}, 10000)
				uni.request({
					url:that.APIconfig.api_root.login.login,
					// url:'http://wl.hhw778.com/api/user/Login',
					method:'POST',
					dataType:'json',
					data:{
						username:that.accounts,
						password:that.pwd,
						time:Date.parse(new Date())/1000
					},
					success(res) {
						uni.hideLoading()
						clearTimeout(times)
						let data = res.data 
						uni.showToast({
							icon:'none',
							title:data.msg
						})
						if(data.code == 0){
							// uni.setStorageSync('user',JSON.stringify())
							uni.removeStorageSync('openid')
							uni.removeStorageSync('nickname')
							that.$store.commit('state_user',data.data.memberInfo)
							that.$store.commit('state_token',data.token)
							
							uni.setStorageSync('state_user',data.data.memberInfo)
							uni.setStorageSync('state_token',data.token)
							that.$store.commit('Amodify_login',1)
							setTimeout(function(){
								
								uni.switchTab({
									url: '../index/index'
								});
							},1000)
						}
					}
				})
			},
			agree(){
				// #ifdef APP-PLUS
				let that = this
				that.treaty_show = false
				uni.showLoading({
					title: '登录中',
					mask: true
				});
				let times = setTimeout(function() {
					uni.hideLoading()
					uni.showToast({
						icon: 'none',
						title: '网络请求错误，请稍后再试'
					})
					return
				}, 10000)
					uni.login({
					  provider: 'weixin',
					  success: function (loginRes) {
						uni.request({
							url:that.APIconfig.api_root.common.getWxLogin,
							method:'get',
							data:{
								access_token:loginRes.authResult.access_token,
								openid:loginRes.authResult.openid,
							},
							success(res) {
								
								uni.hideLoading()
								clearTimeout(times)
								let data = res.data
								if(data.code == 0){
									uni.removeStorageSync('openid')
									uni.removeStorageSync('nickname')
									that.$store.commit('state_user',data.data.memberInfo)
									that.$store.commit('state_token',data.token)
									uni.setStorageSync('state_user',data.data.memberInfo)
									uni.setStorageSync('state_token',data.token)
									uni.setStorageSync('wx','wx')
									that.$store.commit('Amodify_login',1)
									uni.switchTab({
										url: '../index/index'
									});
								}else if(data.code == 1){
									that.$store.commit('state_user',data.data.memberInfo)
									that.$store.commit('state_token',data.token)
									uni.setStorageSync('state_user',data.data.memberInfo)
									uni.setStorageSync('state_token',data.token)
									uni.setStorageSync('openid',loginRes.authResult.openid)
									uni.setStorageSync('nickname',data.data.nickname)
									uni.setStorageSync('wx','wx')
									that.$store.commit('Amodify_login',1)
									uni.switchTab({
										url: '../index/index'
									});
								}
							}
						})
					    
					  },
					  // complete:function(com) {
					  // 	uni.showToast({
					  // 		icon:'none',
							// title:JSON.stringify(com)
					  // 	})
					  // }
					});
				// #endif
			},
			wx(){
				let that = this
				// let url = 'weixin://m.wfjtjy.com/'
				// console.log(url)
				// plus.runtime.openURL(url, function(res) {  
				//    console.log(res);  
				// });
				if(!uni.getStorageSync('wx')){
					that.treaty_show = true
				}else{
					this.agree.call(this)
				}
				
				
				
				
			}
		},
		onLoad() {
			let that = this
			uni.request({  //用户须知
				url:this.APIconfig.api_root.login.getProtocol,
				success(res) {
					// console.log(res)
					that.treaty = res.data.data.content
					// that.open_protocol = res.data.data.status
				}
			})
		},
		onShow() {
			this.$store.commit('Amodify_login',0)
		}
	}
</script>

<style lang="scss">
	page{
		padding-top: 0;
	}
	.bg{
		/* height: 100%;
		width: 100%; */
		
	}
	.bg .back{
		height: 100%;
		width: 100%;
		position: fixed;
		z-index: 1;
	}
	.content{
		width: 100%;
		position: absolute;
		z-index: 99;
	}
	.uni-input-placeholder{
		color: #C5C5C5;
	}
	.logo{
		text-align: center;
		font-size: 42rpx;
		color: #fff;
		padding-top: 90rpx;
		margin: 54rpx 0;
	}
	.logo image{
		width: 258rpx;
		height: 202rpx;
		
	}
	.box{
		padding-top: 86rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-left: 8%;
		width: 84%;
		height: 550rpx;
	}
	.box .logo_ipt{
		display: flex;
		/* justify-content: center; */
		align-content: center;
		align-items: center;
		background: #F5F5F5;
		border-radius: 10rpx;
		height: 100rpx;
		font-size: 28rpx;
		margin: 0 38rpx 30rpx 38rpx;
	}
	.box .logo_ipt text{
		margin: 0 20rpx;
	}
	.box .logo_ipt input{
		flex-grow: 2;
		font-size: 28rpx;
	}
	.box .logo_ipt image{
		width: 30rpx;
		height: 42rpx;
	}
	.logo_test{
		display: flex;
		justify-content: space-between;
		padding: 0 44rpx;
		font-size: 24rpx;
		color: #666666;
	}
	button{
		
		/* width: 88%; */
		
		margin:30rpx 40rpx;
	}
	.message{
		text-align: center;
		color: #000;
		font-size: 30rpx;
	}
	.other{
		display: flex;
		font-size: 28rpx;
		align-items: center;
		justify-content: center;
		margin-top: 50rpx;
		
	}
	.other .line{
		width: 120rpx;
		height: 1rpx;
		border-bottom: 1rpx solid #fff;
	}
	.other .other_test{
		margin: 0 20rpx;
		color: #fff;
		font-size: 24rpx;
	}
	.mode{
		text-align: center;
		margin-top: 20rpx;
	}
	.mode image{
		width: 80rpx;
		height: 80rpx;
	}
	.agreement{
		margin-top: 60rpx;
		color: #fff;
		font-size: 28rpx;
		text-align: center;
		display: flex;
		justify-content: center;
		
		view{
			border-bottom: 2rpx solid #fff;
		}
		text{
			display: inline-block;
			width: 4rpx;
			background: #fff;
			margin: 0 20rpx;
		}
	}
	.Mask{
		position: fixed;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		z-index: 888;
		background: rgba(0,0,0,.6);
	}
	.treaty_box{
		position: fixed;
		z-index: 999;
		height: 800rpx;
		width: 80%;
		background: #fff;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		image{
			z-index: 98;
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
		}
	}
	.treaty_box .t_conent{
		position: absolute;
		width: 100%;
		height: 800rpx;
		top: 0;
		left: 0;
		z-index: 100;
		padding: 20rpx;
		box-sizing: border-box;
	}
	.treaty_box .t_conent .box_top{
		text-align: center;
		font-size: 36rpx;
	}
	.treaty_box .t_conent .box_conent{
		margin: 20rpx 0;
		height: 600rpx;
	}
	.treaty_box .t_conent button{
		width: 45%;
		font-size: 30rpx;
		margin: 0;
	}
	.treaty_box .t_conent .all_btn{
		display: flex;
		justify-content: space-between;
		position: absolute;
		width: 90%;
		height: 80rpx;
		left: 50%;
		bottom: 20rpx;
		margin: 0;
		transform: translateX(-50%);
	}
	.treaty_box .t_conent .all_btn .agree{
		background: rgb(255, 255, 0);
		color: #000;
	}
	.agreement_box{
		position: fixed;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		z-index: 888;
		background: rgba(0,0,0,.6);
		.elastic_agreement{
			position: absolute;
			z-index: 999;
			// height: 800rpx;
			width: 85%;
			background: #fff;
			top: 50%;
			left: 50%;
			border-radius: 20rpx;
			transform: translate(-50%,-50%);
			padding: 30rpx 0;
			box-sizing: border-box;
			.agreement_one{
				text-align: center;
				margin-bottom: 10rpx;
			}
			.agreement_two{
				font-size: 32rpx;
				padding: 0 30rpx 30rpx;
			}
			.btm{
				border-top: 1rpx solid #333333;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.btm_two{
					color: #1D74FF;
				}
				view{
					flex: 1;
					text-align: center;
					padding-top: 30rpx;
				}
				
			}
			text{
				color: #1D74FF;
			}
		}
	}
	
</style>
