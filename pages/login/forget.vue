<template>
	<view class="content">
		
		<view class="ipt">
			<image src="../../static/image/login/user.png" mode=""></image>
			<input type="text" value="" v-model="accounts" placeholder="输入手机号"/>
		</view>
		<view class="ipt">
			
			<input type="text" value="" v-model="verify" placeholder="请输入验证码"/>
			<text @click="obtain()">{{verification}}</text>
		</view>
		<view class="ipt">
			<image src="../../static/image/login/pwd.png" mode=""></image>
			<input type="text" value="" v-model="pwd" password placeholder="设置新密码"/>
		</view>
		<view class="ipt">
			<image src="../../static/image/login/pwd.png" mode=""></image>
			<input type="text" value="" v-model="as_pwd" password placeholder="确认密码"/>
		</view>
		<button  class="red_button" @click="accomplish()">完成</button>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				verification: '获取验证码',
				disabled:false,
				accounts:'',
				verify:'',
				pwd:'',
				as_pwd:''
				
			}
		},
		methods:{
			async accomplish(){ //提交
				var that = this
				if(that.pwd != that.as_pwd){
					uni.showToast({
						icon:'none',
						title:'密码不一致'
					})
					return
				}
				let [error, res] = await uni.request({  //验证验证码
					url:that.APIconfig.api_root.login.findPassword,
					method:'POST',
					data:{
						mobile:that.accounts,
						time:Date.parse(new Date())/1000, //时间戳
						sms_code:that.verify
					}
				})
				if(res.data.code == 0){
					let [reset_err,reset_data] = await reset()
					uni.showToast({
						icon:'none',
						title:reset_data.data.msg
					})
					if(reset_data.data.code == 0){
						setTimeout(function(){
							uni.redirectTo({
							    url: './login'
							});
						},1000)
					}
				}else{
					uni.showToast({
						icon:'none',
						title:res.data.msg
					})
				}
				function reset(){ //重置密码
					let P = uni.request({ 
						url:that.APIconfig.api_root.login.reset,
						method:'POST',
						data:{
							mobile:that.accounts,
							time:Date.parse(new Date())/1000, //时间戳
							password:that.pwd,
							repeat_password:that.as_pwd,
						}
					})
					return P
				}
				
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
		padding-top: 20rpx;
		overflow: hidden;
	}
	.uni-input-placeholder{
		color: #C5C5C5;
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
	button{
		
		margin:60rpx 34rpx;
	}
</style>
