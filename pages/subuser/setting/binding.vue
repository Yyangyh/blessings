<template>
	<view class="content">
		<view class="status_bar">
						
		</view >
		<returns :titles='title'></returns>	
		<form>
			<input class="input" v-model="accounts" type="text" placeholder="请输入上级邀请码">
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
				title:'绑定上级',
				accounts:'',
			}
		},
		onShow() {
			
		},
		methods:{
			
			config(){
				this.service.entire(this,'post',this.APIconfig.api_root.subuser.BingReferrer,{
					code:this.accounts,
					user_id:this.$store.state.user.id
				},function(self,res){
					uni.showToast({
						icon:'none',
						title:res.msg
					})
					if(res.code == 0){
						self.$store.commit('set_user',{referrer:self.accounts})
						setTimeout(function(){
							self.service.returns()
						},1000)
					}
				})
			},
		},
	
	}
</script>

<style lang="scss">
	.input{
		font-size: 24rpx;
		padding: 30rpx 60rpx;
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
