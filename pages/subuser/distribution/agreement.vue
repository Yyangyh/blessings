<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<returns :titles='title'></returns>
		<view class="rich">
			<rich-text :nodes="data"></rich-text>
		</view>
		<button @tap="apply">我已认真阅读协议内容并同意</button>
		
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
				title:'同意协议',
				data:'',
				req_data:''
			}
		},
		methods:{
			apply(){
				this.service.entire(this,'post',this.APIconfig.api_root.subuser.u_appSeniorPartner,this.req_data,function(self,res){
					uni.showToast({
						icon:'none',
						title:res.msg
					})
				})
			}
		},
		onShow() {
			
		},
		onLoad(e) {
			let data = JSON.parse(e.data)
			this.req_data = data
			this.service.entire(this,'get',this.APIconfig.api_root.subuser.u_getSeniorPartnerDeal,{
				grade:data.level_id,
			},function(self,res){
				console.log(res)
				self.data = res.data
			})
		}
	}
</script>

<style lang="scss">
	.rich{
		padding: 20rpx 15rpx;
	}
	button{
		margin: 60rpx;
		height:80rpx;
		line-height: 80rpx;
		font-size: 30rpx;
		background:rgba(216,0,0,1);
		border-radius:40rpx;
		color: #FFFFFF;
	}
</style>
