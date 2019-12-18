<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<image  :src="img" mode="widthFix"></image>
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	export default{
		components:{
			returns
		},
		data(){
			return{
				title:'我的证书',
				img:''
			}
		},
		methods:{
			
		},
		onLoad(e) {
			this.service.entire(this,'post',this.APIconfig.api_root.subclass.c_certificateImg,{
				id:e.id,
				user_id:this.$store.state.user.id
			},function(self,res){
				console.log(res)
				self.img = self.service.analysis_url(res.info.app_img)
			})
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		image{
			width: 100%;
			height: 1009rpx;
			display: block;
			margin: 0 auto;
		}
	}
</style>
