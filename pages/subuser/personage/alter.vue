<template>
	<view class="content">
		<view class="status_bar">
							
		</view >
		<returns :titles='title'></returns>
		<form >
			<input type="text" placeholder="请输入新的昵称" v-model="name">
			<view class="text">昵称由汉字、字母、数字、符号组成</view>
			<button  @click="preserve" >保存</button>
		</form>
		
		
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
				title:'修改昵称',
				reveal:false,
				name:''
			}
		},
		methods:{
			preserve() {
				this.service.entire(this,'post',this.APIconfig.api_root.subuser.s_member,{
					user_id:this.$store.state.user.id,
					nickname:this.name,
					type:1
				},function(self,res){
					console.log(res)
					uni.showToast({
						icon:'none',
						title:res.msg
					})
					if(res.code==0){
						self.$store.state.user.username = self.name
						setTimeout(function() {
							self.service.returns()
						}, 1000);
					}
				})
			}
		},
		onShow() {
			console.log(this.$store.state.user)
		}
	}
</script>

<style lang="scss">
	input{
		background-color: #F1F1F1;
		width:690rpx;
		height:80rpx;
		font-size: 24rpx;
		display: block;
		margin:20rpx auto 0;
		border-radius:10px;
		padding-left:25rpx ;
	}
	.text{
		font-size: 24rpx;
		color:#323232;
		margin: 21rpx 0 0 58rpx;
	}
	button{
		width:684rpx;
		height:80rpx;
		background:rgba(216,0,0,1);
		border-radius:40rpx;
		color:#FFFFFF;
		text-align: center;
		line-height: 80rpx;
		margin: 70rpx auto;
	}
</style>
