<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<view class="worp">
			<image src="../../static/image/subhome/big.png"></image>
			<view class="name">管理魂丨家庭式管理系统</view>
			<view class="evaluate">
				<view class="start">
					<image src="../../static/image/subhome/start.png"></image>
					<image src="../../static/image/subhome/start.png"></image>
					<image src="../../static/image/subhome/start.png"></image>
					<image src="../../static/image/subhome/start.png"></image>
					<image src="../../static/image/subhome/start.png"></image>
				</view>
				<text>5.0</text>
				<text>已售111件</text>
			</view>
			<view class="price">￥2980.0</view>
		</view>
		<view class="worp">
			<view class="line">
				<view class="l-left">
					<image src="../../static/image/subhome/juan.png" mode=""></image>
					<text>优惠券</text>
				</view>
				<view class="l-right">
					<text>领劵</text>
					<image src='../../static/image/index/go.png'></image>
				</view>
			</view>
			<hr />
			<view class="line">
				<view class="l-left">
					<image src="../../static/image/subhome/freight.png" mode=""></image>
					<text>运费：</text>
					<view>包邮</view>
				</view>
				<view class="l-right"></view>
			</view>
		</view>
	<!-- 	<view class="worp">
			<view class="top">
				<text>评论（100条）</text>
				<text>全部</text>
			</view>
			<view class="comment">
				<view class="c-left">
					<image src="../../static/image/subhome/photo.png" mode=""></image>
					<text>小小纹~</text>
				</view>
				<view class="c-right">
					<view class="start">
						<image src="../../static/image/subhome/start.png"></image>
						<image src="../../static/image/subhome/start.png"></image>
						<image src="../../static/image/subhome/start.png"></image>
						<image src="../../static/image/subhome/start.png"></image>
						<image src="../../static/image/subhome/start.png"></image>
					</view>
					<view>2019-05-01</view>
				</view>
			</view>
			<text class="type">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex aliquam?</text>
		</view> -->
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
				title:'产品详情',
			}
		},
		methods:{
			
		},
		onLoad(e){
			console.log(this.$store.state)
			console.log(e)
			this.service.entire(this,'post',this.APIconfig.api_root.subhome.s_detail,{
				goods_id:e.id
			},function(self,res){
				console.log(res)
			})
		},
		onShow(){
			
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		height: 100vh;
		background-color: #F6F6F6;
		.worp{
			width: 100%;
			background-color: #FFFFFF;
			margin-bottom: 30rpx;
			image{
				width: 100%;
				height: 750rpx;
			}
			hr{
				height:1rpx;
				border: none;
				border-top:1px solid #F4F4F4;
				width: 97%;
				margin: 0 auto;
			}
			.name{
				font-size: 28rpx;
				font-weight:500;
				margin: 20rpx 0 0 20rpx;
			}
			.evaluate{
				display: flex;
				align-items: center;
				margin: 20rpx 20rpx;
				.start{
					display: flex;
					margin-right: 15rpx;
					image{
						width: 25rpx;
						height: 25rpx;
					}
				}
				text{
					font-size: 24rpx;
					color:#999999;
					margin-right: 15rpx;
				}
			}
			.price{
				font-size: 32rpx;
				color:#D80000;
				padding: 0 0 20rpx 20rpx;
			}
			.line{
				display: flex;
				justify-content: space-between;
				// margin-top: 30rpx;
				padding: 30rpx 20rpx;
				align-items: center;
				.l-left{
					display: flex;
					align-items: center;
					image{
						width: 32rpx;
						height: 32rpx;
						margin-right: 10rpx;
					}
					text{
						font-size: 24rpx;
						color: #999999;
					}
					view{
						font-size: 24rpx;
					}
				}
				.l-right{
					display: flex;
					align-items: center;
					image{
						width: 32rpx;
						height: 32rpx;
						margin-left: 10rpx;
					}
					text{
						font-size: 24rpx;
						color: #999999;
					}
				}
			}
			.top{
				display: flex;
				justify-content: space-between;
				align-items:center;
				margin: 0 30rpx;
				padding: 20rpx 0;
				text:first-child{
					font-size: 27rpx;
					color: #000000;
				}
				text:last-child{
					font-size: 23rpx;
					color:#EF7C38;
				}
			}
			.comment{
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin: 20rpx 30rpx;
				.c-left{
					display: flex;
					align-items: center;
					image{
						width: 80rpx;
						height: 80rpx;
						margin-right: 15rpx;
					}
					text{
						font-size: 28rpx;
						color: #333333;
					}
				}
				.c-right{
					.start{
						display: flex;
						image{
							width: 32rpx;
							height: 32rpx;
							margin-right: 5rpx;
						}
					}
					view{
						font-size: 24rpx;
						color: #999999;
						text-align: center;
						margin: 5rpx 0 0 0;
					}
				}
			}
			.type{
				font-size: 24rpx;
				color: #333333;
				margin: 20rpx 30rpx;
			}
		}
	}
</style>
