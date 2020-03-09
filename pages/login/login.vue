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
							五福账号登录
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
					
					<view class="other">
						<text class="line"></text>
						<text class="other_test">其他登录方式</text>
						<text class="line"></text>
					</view>
					
					<view class="mode">
						<image src="../../static/image/login/wx.png" mode="widthFix" @click="wx()"></image>
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
				show:0
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
				console.log(that.APIconfig.api_root.login.login)
				uni.request({
					url:that.APIconfig.api_root.login.login,
					// url:'http://wl.hhw778.com/api/user/Login',
					method:'POST',
					data:{
						username:that.accounts,
						password:that.pwd,
						time:Date.parse(new Date())/1000
					},
					success(res) {
						uni.hideLoading()
						clearTimeout(times)
						console.log(res)
						console.log(res)
						let data = res.data 
						uni.showToast({
							icon:'none',
							title:data.msg
						})
						if(data.code == 0){
							console.log(data.data.memberInfo)
							// uni.setStorageSync('user',JSON.stringify())
							that.$store.commit('state_user',data.data.memberInfo)
							that.$store.commit('state_token',data.token)
							
							uni.setStorageSync('state_user',data.data.memberInfo)
							uni.setStorageSync('state_token',data.token)
							// // #ifdef H5
							// // 	先判断是否在h5打开，再判断是否是在微信浏览器打开
							// 	let ua = navigator.userAgent.toLowerCase();
							// 	if (ua.match(/MicroMessenger/i) == "micromessenger") {
							// 		//微信H5端
									
							// 		return
							// 	}
								
							// // #endif
							
							setTimeout(function(){
								
								uni.switchTab({
									url: '../index/index'
								});
							},1000)
						}
					},
					fail(res) {
						console.log(res)
					},
					complete(res) {
						console.log(res)
					}
				})
			},
			wx(){
				let that = this
				
				
				
				// #ifdef H5
					uni.setStorageSync('wxlogin','wxlogin')
					window.location.href = this.service.api_root.common.Auth
				// #endif
				
				
				// #ifdef APP-PLUS
				// uni.showLoading({
				// 	title: '登录中',
				// 	mask: true
				// });
				// let times = setTimeout(function() {
				// 	uni.hideLoading()
				// 	uni.showToast({
				// 		icon: 'none',
				// 		title: '网络请求错误，请稍后再试'
				// 	})
				// 	return
				// }, 10000)
					uni.login({
					  provider: 'weixin',
					  success: function (loginRes) {
						uni.request({
							url:that.APIconfig.api_root.common.getWxLogin,
							method:'get',
							// header:{'X-Requested-With':'xmlhttprequest'},
							data:{
								access_token:loginRes.authResult.access_token,
								openid:loginRes.authResult.openid,
							},
							success(res) {
								
								// uni.hideLoading()
								// clearTimeout(times)
								
								setTimeout(function(){
									uni.showToast({
										icon:'none',
										title:'接口返回：'+JSON.stringify(res)
									})
								},5000)
								if(res.data.code ==0){
									// uni.setStorageSync('token',res.data.data.token)
									// uni.setStorageSync('uid',res.data.data.id)
									// uni.setStorageSync('user',res.data.data)
									// uni.setStorageSync('mobile',res.data.data.mobile)
									// uni.setStorageSync('wxlogin','wxlogin')
									// uni.switchTab({
									// 	url: '../index/index'
									// });
								}
							}
						})
					    
					  },
					  complete:function(com) {
					  	uni.showToast({
					  		icon:'none',
							title:JSON.stringify(com)
					  	})
					  }
					});
				// #endif
			}
		},
		onShow() {
			// #ifdef H5
				//先判断是否在h5打开，再判断是否是在微信浏览器打开
			
			let ua = navigator.userAgent.toLowerCase();
			if (ua.match(/MicroMessenger/i) == "micromessenger") {
				this.show = 0
				
			}else{
				this.show = 1
			}
			// #endif
		}
	}
</script>

<style>
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
</style>
