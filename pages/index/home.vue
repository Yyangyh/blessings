<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<view class="content_top">
			<view class="top_search">
				<input type="text" value="" placeholder="请输入关键词搜索" />
			</view>
			<view class="top_img" @click="jump('../com_page/notice')">
				<image src="/static/image/index/shopp.png" mode="widthFix"></image>
				<view></view>
			</view>
		</view> 
		<view class="swiper_box">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item,index) in swiper_list" :key='item.id'>
					<view class="swiper-item uni-bg-red" style="text-align: center;">
						<image :src="item.images_url" mode="widthFix"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="subject">
			<view class="classify" v-for="(items,indexs) in navigation" :key="items.id">
				<image :src="items.images_url"></image>
				<view>{{items.name}}</view>
			</view>
		</view>
		<view class="propulsion">
			<view class="commodity" v-for="(itemo,indexo) in new_goods " :key='itemo.id'>
				<view class="top">
					<image src='../../static/image/index/start.png'></image>
					<text style="color:#D80000;font-size: 30upx;">新品上市</text>
				</view>
				<view class="pages"><image :src='itemo.images'></image></view>
				<view class="name">{{itemo.title}}</view>
				<view style="color:#D80000;font-size: 30upx">{{itemo.price}}</view>
			</view>
		<!-- 	<view class="commodity" v-for="(itemo,indexo) in new_goods " :key='itemo.id'>
				<view class="top">
					<image src='../../static/image/index/start.png'></image>
					<text style="color:#EF7C38;font-size: 30upx;">超值拼团</text>
				</view>
				<view class="pages"><image :src='itemo.images'></image></view>
				<view class="name">{{itemo.title}}</view>
				<view style="color:#D80000;font-size: 30upx">{{itemo.price}}</view>
			</view> -->
		</view>
		<view class="all">
			<view class="top">
				<view class="top1">推荐产品</view>
				<view class="top2">全部</view>
			</view>
		<view class="allB">
			<view class="product" v-for="(it,ind) in recommend " :key="it.id">
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
				navigation:"",
				new_goods:"",
				recommend:"",
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
			}
		},
		methods: {
			 change(e) {
					this.current = e.detail.current;
				}
		},
		onShow() {
			this.service.entire(this,'get',this.APIconfig.api_root.index.good_index,{
				userid:this.$store.state.user.id
			},function(self,res){
				console.log(res)
				self.swiper_list = res.data.banner_list
				self.class_top = res.data.class_top
				self.class_list = res.data.class_list
				self.navigation = res.data.navigation
				self.new_goods = res.data.new_goods
				self.recommend = res.data.recommend
			})
		}
	}
</script>

<style lang="scss">
	.content {
		
		.subject{
			display: flex;
			justify-content:space-around;
			.classify{
				margin: 41upx 0;
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
			background-color: #f2f2f2;
			display: flex;
			.commodity{
				width: 100%;
				margin-left:22upx ;
				.top{
					display: flex;
					align-items: center;
					margin: 20upx 0;
					image{
						width: 31upx;
						height: 31upx;
						margin:0upx 10upx 0 0;
					}
				}
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
				}
			}
		}
		.all{
			.top{
				display: flex;
				align-items: center;
				
				justify-content: space-between;
				padding: 10upx 22upx 0 22upx ;
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
	}
	.content_top .top_search{
		flex-grow: 2;
		height: 65rpx;
		border-radius: 65rpx;
		display: flex;
		align-items: center;
		padding-left: 40rpx;
		background: #EEEEEE;
	}
	.content_top view input{
		font-size: 24rpx;
	}
	.content_top .top_img{
		position: relative;
	}
	.content_top .top_img view{
		position: absolute;
		right: -4rpx;
		top: -4rpx;
		height: 10rpx;
		width: 10rpx;
		border-radius: 50%;
		background: #D80000;
	}
	.content_top image{
		height: 50rpx;
		width: 50rpx;
		margin-left: 10rpx;
	}
</style>
