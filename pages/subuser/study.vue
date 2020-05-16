<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="allorder">
			  <text @click="choise(1)" class="one" :class="{active:cur==1}">课程视频</text>
			  <text @click="choise(2)" class="two" :class="{active:cur==2}">音频</text>
		</view>
		
		<view class="box">
			<view class="line" v-for='(item,index) in dataList' :key='item.id' @tap="$jump('../com_page/video_details?id='+item.id+'&type='+item.type)">
				<image class="l_left" :src="$api_img()+item.v_pic" mode="scaleToFill"></image>
				<view class="l_right">
					<view> {{item.long_title}}</view>
					<view class="middle">{{service.NumEllipsis(item.view)}}次观看</view>
					<view>已学习{{item.plan}}</view>
				</view>
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
					title:'学习记录',
					cur:1,
					dataList:'',
				}
			},
			methods:{
				choise(all){
					this.cur = all;
					let data ={
						user_id:this.$store.state.user.id,
						type:all
					}
					this.service.entire(this,'post',this.APIconfig.api_root.subuser.u_getStutyPlan,data,function(self,res){
						self.dataList = res.data
					})
				}
			},
			onShow() {
				this.choise(1)
			}
		}
</script>

<style lang="scss">
	.allorder{
		width: 100%;
		height: 100upx;
		display: flex;
		text-align: center;
		line-height: 100upx;
		font-size: 28upx;
		color:#666666;
		background: #F6F6F7;
		text{
			flex: 1;
		}
	}
	.active{
		color:#D80000;
	}
	.line{
		display: flex;
		padding: 30rpx;
		border-bottom:1rpx solid #EEEEEE;
		align-items: center;
		.l_left{
			width:268rpx;
			height:179rpx;
			margin-right: 30rpx;
		}
		.l_right{
			view:first-child{
				font-size: 24rpx;
			}
			.middle{
				font-size: 24rpx;
				color:#999999;
				margin: 10rpx 0;
			}
			view:last-child{
				font-size: 28rpx;
				color: #D80000;
				font-weight: 500;
			}
		}
	}
</style>
