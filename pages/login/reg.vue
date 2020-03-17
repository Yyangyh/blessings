<template>
	<view class="content">
		<!-- <view class="status_bar">
		            
		</view> -->
		<view class="ipt">
			<image src="../../static/image/login/user.png" mode=""></image>
			<input type="text" value="" v-model="accounts"  maxlength="11" placeholder="输入手机号"/>
		</view>
		<view class="ipt">
			<image src="../../static/image/login/user.png"  mode=""></image>
			<input type="text" value="" v-model="username" maxlength="8" placeholder="请输入真实姓名"/>
		</view>
		<view class="ipt">
			<input type="text" v-model="verify" value="" maxlength="4" placeholder="请输入验证码"/>
			<text @click="obtain()">{{verification}}</text>
		</view>
		<view class="ipt">
			<input type="text" v-model="parent_id" :disabled="parent_dis" value="" maxlength="8" placeholder="请输入邀请码"/>
			<!-- <text @click="obtain()">{{verification}}</text> -->
		</view>
		<view class="ipt">
			<image src="../../static/image/login/pwd.png" mode=""></image>
			<input type="text"  v-model="pwd" value="" password="treu" placeholder="设置登录密码"/>
		</view>
		<view class="ipt">
			<image src="../../static/image/login/pwd.png" mode=""></image>
			<input type="text" v-model="pwds" value="" password="treu" placeholder="确认密码"/>
		</view>
		
		
		<view class="treaty" >
			<label class="radio"><checkbox style="transform: scale(0.8);" :checked="checked" class="checkbox-3" @click="checked = !checked"></checkbox></label>
			我已阅读并了解<text  @click="treaty_show = true">【注册须知】</text>
		</view>
		
		<view class="Mask" v-show="treaty_show == true" @click="treaty_show = false">
			
		</view>
		
		<view class="treaty_box"  v-show="treaty_show == true">
			<view class="box_top">
				注册须知
			</view>
			<scroll-view scroll-y="true" class="box_conent">
				<rich-text :nodes='treaty'></rich-text>
			</scroll-view>
			<button  @click="treaty_show = false">我已阅读</button>
		</view>
		
		<button class="red_button" @click="reg()">注册</button>
		<view class="test" @click="jump('../login/login')">
			<text>登录</text>
		</view>
	</view>
</template>

<script>
	
	export default{
		data() {
			return {
				verification: '获取验证码',
				disabled:false,
				accounts:'',
				pwd:'',
				pwds:'',
				verify:'',
				username:'',
				parent_id:'',
				code:'',
				parent_dis:false,
				treaty:'',
				treaty_show:false,
				checked:false
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
				console.log(data)
				uni.request({
					url:that.APIconfig.api_root.login.sendPhone,
					method:'POST',
					data,
					success(res) {
						console.log(res)
						let data = res.data 
						console.log(data)
						uni.showToast({
							icon:'none',
							title:JSON.stringify(data.data.send_code)
						})
						if(data.code == 0){
							that.verification = '60s'
							that.disabled = true
							that.timer = setInterval(function(){
								let num = that.verification.split('s')[0]
								num --
								that.verification = num+'s'
							},1000)
							uni.showToast({
								icon:'none',
								title:data.data.send_code
							})
						}
						
					}
				})
				
			},
			reg(){ //注册
				let that = this
				if(!that.checked){
					uni.showToast({
						icon:'none',
						title:'请完整阅读注册须知并同意！'
					})
					return;
				}
				if(!that.pwd && !that.parent_id && that.verify && that.username){
					uni.showToast({
						icon:'none',
						title:'请完整填写注册信息！'
					})
					return;
				}
				if(!(/^1[3-9][0-9]\d{8,11}$/.test(that.accounts))){
					uni.showToast({
						icon: 'none',
						title: '手机号码格式不正确'
					});
					return;
				}
				if(that.pwd != that.pwds){
					uni.showToast({
						icon:'none',
						title:'密码不一致！'
					})
					return;
				}
				
				
				let data_list = {
					mobile:that.accounts,
					time:Date.parse(new Date())/1000,//时间戳
					username:that.username,
					parent_id:that.parent_id,
					password:that.pwd,
					repeat_password:that.pwds,
					sms_code:that.verify,
				}
				if(that.parent_id != '') data_list.parent_id = that.parent_id
				uni.request({
					url:that.APIconfig.api_root.login.register,
					method:'POST',
					data:data_list,
					success(res) {
						console.log(res)
						let data = res.data 
						console.log(data)
						uni.showToast({
							icon:'none',
							title:data.msg
						})
						if(data.code == 0){
							// #ifdef APP-PLUS
								//在app内运行
								setTimeout(function(){
									uni.redirectTo({
									    url: '../login/login'
									});
								},1500)
							// #endif
							
							//#ifdef H5 || MP-WEIXIN
							  //在H5运行
							 setTimeout(function(self,res){
							 	// uni.redirectTo({
							 	// 	url:'./download'
							 	// })
								window.location.href = 'https://ffapp.nethhw.com/app.php/NTk='
							 },1500)
							//#endif
						}
					}
				})
			}
		},
		onLoad(options) {
			
			if(options.code){
				this.parent_dis = true
				this.parent_id = options.code
			}
		},
		onShow() {
			let that = this
			uni.request({  //用户须知
				url:this.APIconfig.api_root.login.getProtocol,
				success(res) {
					console.log(res)
					that.treaty = res.data.data.content
					// that.open_protocol = res.data.data.status
				}
			})
		},
		watch:{
			verification(curval,oldval){// 监听定时器的num值
				if(curval == '-1s'){
					clearInterval(this.timer)
					console.log(this.timer)
					this.verification = '重新获取'
					this.disabled = false
				}
			}
		},
	}
</script>

<style scoped>
	.content{
		overflow: hidden;
		padding-top: 0;
	}
	.uni-input-placeholder{
		color: #C5C5C5;
	}
	
	.ipt{
		display: flex;
		margin: 20rpx;
		border-bottom: 2rpx solid #EEEEEE;
		padding: 20rpx 20rpx;
	}
	.ipt image{
		margin-right: 20rpx;
		width: 35rpx;
		height: 45rpx;
	}
	.ipt input{
		flex-grow: 2;
		font-size: 28rpx;
	}
	.ipt text{
		font-size: 32rpx;
		width: 160rpx;
		text-align: center;
		white-space: nowrap;
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
	.treaty{
		background: #fff;
		display: flex;
		align-items: center;
		height: 100rpx;
		padding: 0 20rpx;
		font-size: 30rpx;
	}
	.treaty text{
		color: #1D74FF;
	}
	.treaty_box{
		position: fixed;
		z-index: 999;
		height: 780rpx;
		padding: 20rpx;
		box-sizing: border-box;
		width: 80%;
		background: #fff;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.treaty_box .box_top{
		text-align: center;
		font-size: 36rpx;
	}
	.treaty_box .box_conent{
		margin: 20rpx 0;
		height: 560rpx;
	}
	.treaty_box button{
		position: absolute;
		width: 90%;
		height: 80rpx;
		bottom: 20rpx;
		font-size: 30rpx;
		left: 50%;
		margin: 0;
		transform: translateX(-50%);
	}
	
	button{
		
		/* width: 100%; */
		margin:60rpx 34rpx 30rpx 34rpx;
	}
	.test{
		text-align: center;
		font-size: 32rpx;
	}
</style>
