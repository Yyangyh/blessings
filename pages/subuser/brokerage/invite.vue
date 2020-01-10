<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<returns :titles='title'></returns>
		<view class="back_img">
			<image :src="$api_img() + bg" mode="widthFix"></image>
		</view>
		<view class="pages">
			<image :src="$api_img() + code_img" mode="widthFix"></image>
		</view>
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
				title:'我的邀请码',
				code_img:'',
				bg:''
			}
		},
		onShow() {
			this.service.entire(this,'post',this.APIconfig.api_root.subuser.u_InviteCode,{
				user_id:this.$store.state.user.id,
				url:this.$api_img() + '/h5/#/pages/login/reg'
			},function(self,res){
				self.code_img = res.data.invite_code_img
				self.bg = res.data.bg
			})
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		overflow-y: hidden;
		// position: relative;
		.back_img{
			
			position: fixed;
			z-index: 80;
			top: calc(105rpx + var(--status-bar-height));
			left: 0;
			width: 100%;
			image{
				
				width: 100%;
			}
		}
		.pages{
			// padding: 10rpx;
			background:rgba(255,255,255,1);
			box-shadow:0px 8rpx 7rpx 1rpx rgba(51,174,244,0.25);
			border-radius:10rpx;
			position: fixed;
			left: 50%;
			transform: translateX(-50%);
			bottom: 200rpx;
			z-index: 100;
			image{
				width: 342rpx;
				height: 342rpx;
				margin: 12rpx;
			}
		}
	}
</style>
