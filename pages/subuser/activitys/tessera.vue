<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<view class="back" v-for="(item,index) in activity_Data">
			 <!--  -->
			<image src="../../../static/image/subuser/tessera-back.png" mode="widthFix" ></image>
			<view class="worp">
				<view class="left">
					<view>入</view>
					<view>场</view>
					<view>卷</view>
				</view>
				<view class="right">
					<view>{{item.title}}</view>
					<view>￥{{item.price}}</view>
					<view>{{item.start_time_text}}至{{item.end_time_text}}</view>
				</view>
			</view>
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
					title:'入场卷',
					activity_Data:'',
				}
			},
			onLoad(e) {
				this.service.entire(this,'post',this.APIconfig.api_root.subindex.a_activity_useractivitylist,{
					user_id:this.$store.state.user.id,
					id:e.id
				},function(self,res){
					self.activity_Data = res.data.unexpired
				})
			}
		}
</script>

<style lang="scss">
	.back{
		width: 710rpx;
		height: 320rpx;
		margin: 0 auto;
		margin-top:30rpx ;
		position: relative;
		image{
			width: 100%;
			height: 100%;
			position: absolute;
			top:0;
			left:0;
			z-index: 0;
		}
		.worp{
			position: relative;
			top:0;
			left:0;
			display: flex;
			align-items: center;
			.left{
				margin-top: 30rpx;
				view{
					font-size: 60rpx;
					color:#FFFFFF;
					margin:5rpx 120rpx 0 79rpx;
				}
			}
			.right{
				color:#FFFFFF;
				view:first-child{
					font-size: 28rpx;
					margin: 30rpx 0 30rpx 0;
				}
				view:last-child{
					font-size: 24rpx;
					margin-top: 50rpx;
				}
			}
		}
	}
</style>
