<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<view class="content_top">
			<view class="top_search" @tap="$jump('/pages/com_page/s_search')">
				<view class="search_text">
					请输入关键词搜索
				</view>
			</view>
			<view class="top_img" @click="$jump('../com_page/shopp_cart')">
				<image src="/static/image/index/shopp.png" mode="widthFix"></image>
				<view v-if="cart_status"></view>
			</view>
		</view> 
		<view class="swiper_box">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item,index) in swiper_list" :key='item.id' @tap="$jump('../subhome/details?id='+item.goods_id)">
					<view class="swiper-item uni-bg-red" style="text-align: center;">
						<image :src="item.images_url" mode="widthFix"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="subject">
			<view class="classify" v-for="(item,index) in category" :key='item.id' @tap="$jump('../subhome/home_com?id='+item.id+'&title='+item.name)">
				<image :src="item.icon"></image>
				<view>{{item.name}}</view>
			</view>
			<view class="classify" @tap="$jump('../com_page/video_class?id=40&title=家风学堂&type=1')">
				<image src="../../static/image/index/school.png"></image>
				<view>家风学堂</view>
			</view>
			<view class="classify" @tap="$jump('../subhome/assemble')">
				<image src="../../static/image/index/assemble.png"></image>
				<view>拼团</view>
			</view>
		</view>
		<view class="propulsion">
			
			<view class="commodity_box">
				<view class="top">
					<image src='../../static/image/index/start.png'></image>
					<text style="color:#D80000;font-size: 30upx;">新品上市</text>
				</view>
				<view class="commodity" v-for="(itemo,indexo) in new_goods " :key='itemo.id' @tap="$jump('/pages/subhome/details?id='+itemo.id)">
					<view class="pages"><image :src='itemo.images'></image></view>
					<view class="name">{{itemo.title}}</view>
					<view style="color:#D80000;font-size: 30upx">{{itemo.price}}</view>
				</view>
			</view>
			
			<view class="commodity_box">
				<view class="top">
					<image src='../../static/image/index/start.png'></image>
					<text style="color:#EF7C38;font-size: 30upx;">超值拼团</text>
				</view>
				<view  class="commodity"  v-for="(itemo,indexo) in fight" :key='itemo.id'  @click="$jump('/pages/subhome/threehome/group_products?id='+itemo.id)">
					<view class="pages"><image :src='$api_img()+itemo.thumb'></image></view>
					<view class="name">{{itemo.title}}</view>
					<view style="color:#D80000;font-size: 30upx">{{itemo.price}}</view>
				</view>
				
			</view>
			
		</view>
		<view class="all">
			<view class="top">
				<view class="top1">推荐产品</view>
				<view class="top2">全部</view>
			</view>
		<view class="allB">
			<view class="product" v-for="(it,ind) in recommend " :key="it.id" @tap="$jump('/pages/subhome/details?id='+it.id)">
				<view class="">
					<image :src="it.images" mode="widthFix"></image>
				</view>
				<view class="name" style="font-size:24upx;margin:10upx">{{it.title}}</view>
				<view style="color:#999999;font-size:24upx;margin:10upx">已售{{it.inventory}}件</view>
				<view  style="color:#D80000;font-size: 30upx;margin:10upx" >{{it.price}}</view>
			</view>
		</view>
		</view>
	</view>
</template>
res
<script>
	export default{
		data() {
			return {
				swiper_list: '',
				new_goods:"",
				fight:'',
				recommend:"",
				category:'',
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				cart_status:false
			}
		},
		methods: {
			 change(e) {
					this.current = e.detail.current;
				}
		},
		onShow() {
			this.service.entire(this,'post',this.APIconfig.api_root.com_page.c_Index,{ //查看购物车状态
				user_id:this.$store.state.user.id
			},function(self,res){
				self.cart_status = res.data.data.length
			})
			
			this.service.entire(this,'get',this.APIconfig.api_root.index.good_index,{
				userid:this.$store.state.user.id
			},function(self,res){
				console.log(res)
				self.category = res.data.category
				self.swiper_list = res.data.banner_list
				self.class_top = res.data.class_top
				self.class_list = res.data.class_list
				self.new_goods = res.data.new_goods
				self.fight = res.data.fight
				self.recommend = res.data.recommend
			})
		}
	}
</script>

<style lang="scss">
	.content {
		.swiper_box{
			padding: 0 20rpx;
			image{
				width: 100%;
			}
		}
		.subject{
			display: flex;
			justify-content:space-around;
			.classify{
				margin: 41upx 0;
				width: 25%;
				text-align: center;
				image{
					width: 85upx;
					height: 85upx;
				}
				view{
					font-size: 24upx;
				}
			}
		}
		.propulsion{
			background-color: #F6F6F6;
			display: flex;
			padding-bottom: 30rpx;
			padding-top: 20rpx;
			.commodity_box{
				.top{
					display: flex;
					align-items: center;
					margin: 0 20rpx;
					padding-bottom: 24rpx;
					image{
						width: 31upx;
						height: 31upx;
						margin:0upx 10upx 0 0;
					}
				}
				.commodity{
					// width: 50%;
					// margin-left:22upx ;
					padding: 0 10rpx;
					.pages{
						width: 341upx;
						height: 231upx;
						margin: 0 0 10upx 0;
						image{
							width: 100%;
							height: 100%;
						}
					}
					.name{
						font-size:23upx ;
						padding-right: 10rpx;
						margin: 8rpx 0;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
					}
				}
			}
				
			
			
		}
		.all{
			.top{
				display: flex;
				align-items: center;
				
				justify-content: space-between;
				padding: 29rpx 22rpx 20rpx 22rpx ;
				.top1{
					font-size: 28upx;
				}
				.top2{
					font-size: 23upx;
					color:#EF7C38;
				}
			}
			.allB{
				width: 100%;
				display: flex;
				flex-wrap:wrap;
				justify-content: space-around;
				padding: 0 20upx;
				box-sizing: border-box;
				
				.product{
					width: 50%;
					// margin:30upx;
					padding: 10rpx;
					box-sizing: border-box;
					.name{
						font-size:23upx ;
						margin: 8rpx 0;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
					}
					image{
						width: 341upx;
						// height: 341upx;
						// margin: 10upx 10upx 0 10upx;
					}
				}
			}
		}
	}
	.content_top{
		position: fixed;
		top: var(--status-bar-height);
		left: 0;
		width: 100%;
		background: #FFFFFF;
		z-index: 99;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		height: 105rpx;
		padding: 0 20rpx;
		.top_search{
			flex-grow: 2;
			height: 65rpx;
			border-radius: 65rpx;
			display: flex;
			align-items: center;
			padding-left: 40rpx;
			background: #EEEEEE;
			font-size: 24rpx;
			color: #999;
		}
		view input{
			font-size: 24rpx;
		}
		.top_img{
			position: relative;
			view{
				position: absolute;
				right: -4rpx;
				top: -4rpx;
				height: 10rpx;
				width: 10rpx;
				border-radius: 50%;
				background: #D80000;
			}
		}
		image{
			height: 50rpx;
			width: 50rpx;
			margin-left: 10rpx;
		}
	}
</style>
