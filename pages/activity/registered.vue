<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<view class="person_list">
			<view class="line" v-for="(item,index) in sign_user" :key='index'>
				<view class="l_left">
					<view class="l_img">
						<image :src='$api_img()+item.avatar' mode="scaleToFill"></image>
					</view>
					<text>昵称：{{item.nickname?item.nickname:'神秘用户'}}</text>
				</view>
				<view class="l_right">{{service.Test(item.add_time)}}</view>
			</view>
		</view>
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
				title:'已报名',
				sign_user:''
			}
		},
		methods:{
			
		},
		onLoad(e) {
			this.id = e.id
		},
		onShow() {
			this.service.entire(this,'post',this.APIconfig.api_root.subindex.a_activity_detail,{
				id:this.id
			},function(self,res){
				self.sign_user = res.data.data.sign_user
			})
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F6F6F6;
	}
	.line{
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		padding:30rpx 20rpx ;
		justify-content: space-between;
		border-bottom: 2rpx solid #eee;
		.l_left{
			display: flex;
			align-items: center;
			.l_img{
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				overflow: hidden;
				margin-right: 25rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			
			text{
				font-size: 28rpx;
				
			}
		}
		.l_right{
			font-size: 24rpx;
			color:#999999;
			padding-right: 93rpx;
		}
	}
</style>
