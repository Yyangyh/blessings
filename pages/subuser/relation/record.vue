<template>
	<view class="content">
		<view class="status_bar">
							
		</view >
		<returns :titles='title'></returns>
		<view class="allorder">
			  <text  @click="choise(1)" class="one" :class="{active:cur==1}">课程视频</text>
			  <text @click="choise(2)" class="two" :class="{active:cur==2}">音频</text>
		</view>
		<view class="box">
			<view class="line" v-for='(item,index) in data' :key='index'  @tap="$jump('/pages/com_page/video_details?id='+item.video_id+'&type='+item.type)">
				<view class="l_left">
					<image class="" :src="$api_img()+item.video.v_pic" mode="scaleToFill" ></image>
				</view>
				<view class="l_right">
					<view> {{item.video.long_title}}</view>
					<view class="middle">{{item.video.view}}次观看</view>
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
				cur:1,
				data:'',
				
			}
		},
		methods:{
			choise(all){
				this.cur = all;
				let data ={
					mobile:this.$store.state.user.mobile,
					video_type:all
				}
				this.service.entire(this,'post',this.APIconfig.api_root.subuser.s_getShareOrder,data,function(self,res){
					self.data = res.data
					
				})
			}
		},
		onShow(){
			this.choise(1)
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
			background-color: #FFFFFF;
			.l_left{
				width:268rpx;
				height:179rpx;
				margin-right: 30rpx;
				image{
					width:100%;
					height:100%;
				}
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
