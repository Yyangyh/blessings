<template>
	<view class="content">
		
		<view class="ipt">
			<image src="../../static/image/login/user.png" mode=""></image>
			<input type="text" v-model="accounts" value="" placeholder="输入手机号"/>
		</view>
		<view class="ipt">
			<image src="../../static/image/login/pwd.png" mode=""></image>
			<input type="text" v-model="verify" value="" placeholder="请输入验证码"/>
			<text @click="obtain()">{{verification}}</text>
		</view>
		<button class="red_button" @click="login()">登录</button>
		<view class="test" @click="jump('./login')">
			<text>密码登录</text>
		</view>
		<!-- <view class="other">
			<text class="line"></text>
			<text class="other_test">其他登录方式</text>
			<text class="line"></text>
		</view> -->
		<!-- <view class="mode">
			<image src="../../static/image/wx.png" mode="widthFix"></image>
		</view> -->
	</view>
</template>

<script>
	// #ifdef  APP-PLUS
	const masdk = require('../../wxcomponents/index');
	// #endif
	export default{
		data() {
			return {
				verification: '获取验证码',
				disabled:false,
				accounts:'',
				verify:'',
			}
		},
		methods:{
			jump(url){
				uni.navigateTo({
					url:url
				})
			},
			obtain(){ //获取验证码
				let that = this
				if(!(/^1[3-9][0-9]\d{8,11}$/.test(that.accounts))){
					uni.showToast({
						icon: 'none',
						title: '手机号码格式不正确'
					});
					return;
				}
				if(that.disabled == true) return
				let data = {
					mobile:that.accounts,
					time:Date.parse(new Date())/1000  //时间戳
				}
				uni.request({
					url:that.APIconfig.api_root.login.sendPhone,
					method:'POST',
					data,
					success(res) {
						let data = res.data 
						uni.showToast({
							icon:'none',
							title:data.msg
						})
						if(data.code == 0){
							that.verification = '60s'
							that.disabled = true
							that.timer = setInterval(function(){
								let num = that.verification.split('s')[0]
								num --
								that.verification = num+'s'
							},1000)
						}
						
					}
				})
				
				
						
			},
			
			login(){
				let that = this
				uni.request({
					url:that.APIconfig.api_root.login.phoneLogin,
					method:'POST',
					data:{
						mobile:that.accounts,
						sms_code:that.verify,
						time:Date.parse(new Date())/1000  //时间戳
					},
					success(res) {
						let data = res.data 
						uni.showToast({
							icon:'none',
							title:data.msg
						})
						if(data.code == 0){
							uni.removeStorageSync('openid')
							uni.removeStorageSync('nickname')
							that.$store.commit('state_user',data.data.memberInfo)
							that.$store.commit('state_token',data.token)
							
							uni.setStorageSync('state_user',data.data.memberInfo)
							uni.setStorageSync('state_token',data.token)
							that.$store.commit('Amodify_login',1)
							// #ifdef  APP-PLUS
							masdk.infosUser({ //数商云注入用户信息
								userid: data.data.memberInfo.id,
							  // sex: "男",
							  // province: "广东省",
							  //具体字段以商家自定义的用户表决定。
							});
							// #endif
							setTimeout(function(){
								
								uni.switchTab({
									url: '../index/index'
								});
							},1000)
						}
					}
				})
			}
			
		},
		watch:{
			verification(curval,oldval){// 监听定时器的num值
				if(curval == '-1s'){
					clearInterval(this.timer)
					this.verification = '重新获取'
					this.disabled = false
				}
			}
		},
	}
</script>

<style scoped>
	.content{
		padding-top: 0;
		overflow: hidden;
	}
	.uni-input-placeholder{
		color: #C5C5C5;
	}
	.ipt{
		display: flex;
		margin: 20rpx;
		border-bottom: 2rpx solid #EEEEEE;
		padding: 20rpx 0;
	}
	.ipt image{
		margin: 0 20rpx;
		width: 35rpx;
		height: 45rpx;
	}
	.ipt input{
		flex-grow: 2;
	}
	.ipt text{
		font-size: 32rpx;
		width: 160rpx;
		text-align: center;
		white-space: nowrap;
	}
	button{
		margin:60rpx 34rpx 30rpx 34rpx;
	}
	.test{
		text-align: center;
		font-size: 32rpx;
	}
	.other{
		display: flex;
		font-size: 28rpx;
		align-items: center;
		justify-content: center;
		margin-top: 100rpx;
	}
	.other .line{
		width: 120rpx;
		height: 1rpx;
		border-bottom: 1rpx solid #B3B8D3;
	}
	.other .other_test{
		margin: 0 20rpx;
		color: #999999;
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
