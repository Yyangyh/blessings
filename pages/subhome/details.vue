<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<view class="top">
			<image src="../../static/image/com_page/returns.png" @tap="service.returns()" mode="widthFix"></image>
			<text>产品详情</text>
			<image src='../../static/image/subhome/share.png'></image>
		</view>
		<view class="worp">
			<image :src="goods.images"></image>
			<view class="name">{{goods.title}}</view>
			<view class="evaluate">
				<view class="start"  v-if="isLoad">
					<image src="../../static/image/subhome/start.png" mode="widthFix" v-for="(item,index) in goods.comments_score" :key='index'></image>
				</view>
				
				<text>{{goods.comments_score}}</text>
				<text>已售{{goods.sales_count}}件</text>
			</view>
			<view class="price">{{goods.price}}</view>
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
					<image src="../../static/image/subhome/freight.png" mode="widthFix"></image>
					<text>运费：</text>
					<view>{{is_freight_free == 1 ? '包邮' : freight_price}}</view>
				</view>
				<view class="l-right"></view>
			</view>
		</view>
		<view class="p-t">活动详情</view>
		<image class="image" src='../../static/image/index/xq.png' mode="widthFix"></image>
		<view class="shopping">
			<view class="to">
				<view class="cart">
					<image src="../../static/image/subhome/cart.png" mode="widthFix"></image>
					<view>购物车</view>
				</view>
				<view class="collect">
					<image src="../../static/image/subhome/heart%20.png" mode="widthFix"></image>
					<view>收藏</view>
				</view>
			</view>
			<view class="btn">
				<button type="default">加入购物车</button>
				<button type="default">立即购买</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				title:'产品详情',
				goods:'',
				isLoad: false,
				is_freight_free:'',
				freight_price:'',
			}
		},
		methods:{
			
		},
		onLoad(e){
			this.service.entire(this,'post',this.APIconfig.api_root.subhome.s_detail,{
				goods_id:e.id,
				user_id:this.$store.state.user.id,
				isLoad:true
			},function(self,res){
				console.log(res.data.goods.freight_free.is_freight_free)
				console.log(res)
				self.goods = res.data.goods
				self.goods.stars_num = new Array(Number(res.data.goods.comments_score_star))
				self.isLoad = true
				self.is_freight_free = res.data.goods.freight_free.is_freight_free
				self.freight_price = res.data.goods.freight_free.freight_price
			})
		},
		onShow(){
			
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		// height: 100vh;
		background-color: #F6F6F6;
		padding-bottom: 130rpx;
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
				border-top:1rpx solid #F4F4F4;
				width: 97%;
				margin: 0 auto;
			}
			.name{
				font-size: 28rpx;
				font-weight:500;
				padding: 0 20rpx;
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
		.p-t{
			font-size: 28rpx;
			margin-left: 20rpx;
		}
		.image{
			margin-top: 30rpx;
			width: 100%;
			// height: 988rpx;
		}
		.shopping{
			width: 100%;
			background: #FFFFFF;
			display: flex;
			justify-content: space-around;
			align-items: center;
			position: fixed;
			bottom: 0;
			height: 126rpx;
			.to{
				display: flex;
				margin: 0 30rpx;
				.cart{
					padding-right:20rpx ;
					image{
						width: 44rpx;
						height: 44rpx;
					}
					view{
						color:#999999;
						font-size: 24rpx;
						margin-left:-5rpx ;
					}
				}
				.collect{
					text-align: center;
					image{
						width: 44rpx;
						height: 44rpx;
						// margin-left:10rpx ;
					}
					view{
						color:#999999;
						font-size: 24rpx;
						margin-left:-5rpx ;
					}
				}
			}
			.btn{
				display: flex;
				margin-right:20rpx ;
				button:first-child{
					font-size: 30rpx;
					color:#FFFFFF;
					background-color: #EF7C38;
					text-align: center;
					width: 263rpx;
					height: 80rpx;
					line-height: 80rpx;
					border-radius: 50rpx 0 0 50rpx;
				}
				button:last-child{
					font-size: 30rpx;
					color:#FFFFFF;
					background-color: #D80000;
					text-align: center;
					width: 263rpx;
					height: 80rpx;
					line-height: 80rpx;
					border-radius:0 50rpx 50rpx 0;
				}
			}
		}
	}
</style>
