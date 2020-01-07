<template>
	<view class="content">
		<view class="status_bar">
						
		</view >
		<returns :titles='title'></returns>	
		<form>
			<input class="input" v-model="accounts" type="text" placeholder="请输入新手机号">
			<hr />
			<view class="verification">
				<input type="text" v-model="verify" value="" placeholder="请输入验证码" />
				<text @tap="obtain" >{{verification}}</text>
			</view>
			<hr />
		</form>
		<button @click="config">完成</button>
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	export default{
		components:{
			returns
		},
		data(){
			return{
				title:'修改手机号',
				verification: '获取验证码',
				accounts:'',
				disabled:false,
				verify:'',
				
			}
		},
		onShow() {
			
		},
		methods:{
			// debounce(){
			// 	this.service.debounce.call(this,this.obtain,1000)()
			// 	console.log(this.service.debounce.call(this,this.obtain,1000))
			// },
			config(){
				this.service.entire(this,'post',this.APIconfig.api_root.subuser.resetPhone,{
					sms_code:this.verify,
					mobile:this.accounts,
					user_id:this.$store.state.user.id
				},function(self,res){
					uni.showToast({
						icon:'none',
						title:res.msg
					})
					
				})
			},
			obtain(){ //获取验证码
				let that = this
				// console.log(123)
				if(!(/^1[3-9][0-9]\d{8,11}$/.test(that.accounts))){
					uni.showToast({
						icon: 'none',
						title: '手机号码格式不正确'
					});
					return true; 
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

<style lang="scss">
	.input{
		font-size: 24rpx;
		padding: 30rpx 60rpx;
	}
	.verification{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-right: 60rpx;
		input{
			font-size: 24rpx;
			padding: 30rpx 0 30rpx 60rpx;
		}
		text{
			font-size: 26rpx;
			color: #32A6FF;
		}
	}
	hr{
		height:1rpx;
		border: none;
		border-top:1px solid #F4F4F4;
		width: 96%;
		margin:  0 auto;
	}
	button{
		width:684rpx;
		height:80rpx;
		background:rgba(216,0,0,1);
		border-radius:40rpx;
		font-size: 32rpx;
		color: #FFFFFF;
		text-align: center;
		line-height: 80rpx;
		margin: 40rpx auto 0;
	}
</style>
