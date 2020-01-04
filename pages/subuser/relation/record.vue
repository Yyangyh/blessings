<template>
	<view class="content">
		<view class="status_bar">
							
		</view >
		<returns :titles='title'></returns>
		<view class="allorder">
			  <text @click="cur=0" class="one" :class="{active:cur==0}">课程视频</text>
			  <text @click="cur=1" class="two" :class="{active:cur==1}">音频</text>
		</view>
		<view class="box">
			<view class="line" v-for='(item,index) in dataList' :key='item.id' @tap="$jump('../com_page/video_details?id='+item.id)">
				<image class="l_left" :src="APIconfig.api_img+item.v_pic" mode="scaleToFill"></image>
				<view class="l_right">
					<view> {{item.long_title}}</view>
					<view class="middle">{{item.view}}次观看</view>
					<view>已学习{{item.plan}}</view>
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
				title:'共享资源',
				cur:0,
				data:''
			}
		},
		onShow(){
			this.service.entire(this,'post',this.APIconfig.api_root.subuser.s_getShareOrder,{
				mobile:this.$store.state.user.mobile,
				video_type:1
			},function(self,res){
				console.log(res)
				self.data = res.data
			})
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		background-color: #F6F6F7;
		.allorder{
			width: 100%;
			height: 120upx;
			display: flex;
			text-align: center;
			line-height: 120upx;
			font-size: 28upx;
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
	}
</style>
