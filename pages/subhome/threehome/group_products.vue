<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<share ref="share" :datas='share_arr'></share>
		<view class="top">
			<image src="/static/image/com_page/returns.png" @tap="service.returns()" mode="widthFix"></image>
			<text>产品详情</text>
			<image src='/static/image/subhome/share.png'></image>
		</view>
		<view class="top_img">	
			<image :src="data.thumb" mode="scaleToFill"></image>
		</view>
		<view class="product_price">
			<view class="pr_top">
				{{data.title}}
			</view>
			<view class="price">
				<view class="">
					<text>￥{{data.price}}</text>
					<image src="/static/image/subhome/team.png" mode="widthFix"></image>
					<text>{{data.groupnum}}人成团</text>
				</view>
				<text class="sell">已售{{data.sales}}</text>
			</view>
			<view class="pr_bottom">
				<view class="pr_coupon">
					
					<text>拼团规则</text>
				</view>
				<view class="receive_co">
					<text>邀请好友组团</text>
					<!-- <image src="../../static/image/go.png" mode=""></image> -->
				</view>
			</view>
		</view>
		
		<view class="pro_img">
			<view class="img_test">
				产品介绍
			</view>
			<rich-text  class="test" :nodes="data.content"></rich-text>
		</view>
		
		
		<view class="bottom_tab">
			<view class="tab_list tab_right">
				<view class="single" @tap="$jump('./group_order?type=single'+'&id='+id)">
					<view class="">
						￥{{data.groupsprice}}
					</view>
					<view class="">
						单独购买
					</view>
				</view>
				<view class="group" @tap="$jump('./operation?type=groups'+'&id='+id)">
					<view class="">
						￥{{data.price}}
					</view>
					<view class="">
						参与拼团
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import share from'../../common/share.vue'
	export default {
		components:{
			share
		},
		data() {
			return {
				show: 0,
				data:'',
				id:'',
				share_arr:{}
			}
		},
		methods:{
			tips(){ //分享
				// #ifdef H5
				
				uni.showModal({
				    title: '提示',
				    content: '请点击右上角选择分享！',
					showCancel:false,
				    success: function (res) {
				       
				    }
				});
				
				// #endif
				// #ifdef APP-PLUS
				this.$refs.share.share();
				// #endif
			},
		},
		onLoad(options) {
			
			this.share_arr.Url = 'http://wx.huanqiutongmall.com/h5/#/pages/subindex/group_products?id='+options.id
			this.id = options.id
			
			this.service.entire(this,'get',this.APIconfig.api_root.subhome.threehome.g_Detail,{id:options.id},function(self,res){
				console.log(res)
				self.data = res.data.goods
				
				self.share_arr.Title = self.data.title//分享
				self.share_arr.ImageUrl = self.data.thumb//分享
				
				
			})
		}
	}
</script>

<style scoped lang="scss">
	.content{
		background: #F1F1F1;
		padding-bottom: 120rpx;
		// padding-top: 0;
	}
	
	.top{
		position: fixed;
		width: 100%;
		z-index: 886;
		box-sizing: border-box;
		top: var(--status-bar-height);
		left: 0;
		display: flex;
		height: 105rpx;
		padding: 0 30rpx;
		font-size: 32rpx;
		justify-content: space-between;
		align-items: center;
		background-color: #FFFFFF;
		image:first-child{
			width: 31rpx;
			height: 31rpx;
		}
		image:last-child{
			width: 50rpx;
			height: 50rpx;
		}
	}
	.top_img{
		width: 100%;
		height: 360rpx;
		position: relative;
		image{
			width: 100%;
			height: 100%;
			
		}
	}
	.product_price{
		background: #fff;
		font-size: 32rpx;
		border-top: 2rpx solid #F1F1F1;
		margin-bottom: 20rpx;
		.pr_top{
			/* font-weight: bold; */
			font-size: 32rpx;
			padding: 20rpx;
			
		}
		.price{
			display: flex;
			justify-content: space-between;
			padding: 20rpx;
			border-bottom: 2rpx solid #F4F4F4;
			color: #999;
			font-size: 30rpx;
			align-items: center;
			view{
				display: flex;
				align-items: center;
			}
			image{
				height: 34rpx;
				width: 34rpx;
				margin: 0 20rpx 0 30rpx;
			}
			view text:nth-of-type(1){
				font-weight: bold;
				color: #FF431D;
				font-size: 36rpx;
			}
			view text:nth-of-type(2){
				font-size: 28rpx;
			}
			.sell{
				font-size: 24rpx;
			}
		}
		.pr_bottom {
			display: flex;
			justify-content: space-between;
			padding: 20rpx;
			image{
				width: 32rpx;
				height: 32rpx;
			}
			.pr_coupon{
				display: flex;
				align-items: center;
				color: #333333;
				font-size: 30rpx;
			}
			.pr_coupon image{
				margin-right: 20rpx;
			}
			.receive_co{
				display: flex;
				align-items: center;
				text-align: right;
				color: #999;
				font-size: 24rpx;
			}
		}
	}
	.pro_img{
		.img_test{
			text-align: center;
			padding: 30rpx;
			font-size: 32rpx;
		}
		image{
			width: 100%;
		}
	}
	.bottom_tab{
		background: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28rpx;
		padding: 20rpx 76rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		box-sizing: border-box;
		.tab_list{
			text-align: center;
			color: #999999;
			image{
				height: 44rpx;
				width: 44rpx;
				
			}
		}
		.tab_right{
			font-size: 32rpx;
			display: flex;
			justify-content: space-between;
			width: 100%;
			.single{
				background: #D80000;
				color: #fff;
				font-size: 24rpx;
				width: 250rpx;
				height: 80rpx;
				border-radius: 80rpx;
				view{
					&:nth-of-type(1){
					font-size: 30rpx;
					}
				}
			}
			.group{
				background: #EF7C38;
				color: #fff;
				font-size: 24rpx;
				width: 250rpx;
				height: 80rpx;
				border-radius: 80rpx;
				view{
					&:nth-of-type(1){
						font-size: 30rpx;
					}
				}
			}
		}
	}
</style>
