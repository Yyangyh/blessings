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
			<!-- <view class="classify" @tap="$jump('../com_page/video_class?id=40&title=家风学堂&type=1')"> -->
			<view class="classify" :class="{name_show:show == 1}" @tap="show = 1">
				<image src="../../static/image/index/school.png"></image>
				<view>家风学堂</view>
			</view>
			<!-- <view class="classify"  @tap="$jump('../subhome/home_com')"> -->
			<view class="classify" :class="{name_show:show == 2}" @tap="show = 2">
				<image src="../../static/image/index/build.png"></image>
				<view>家风建设</view>
			</view>
			<!-- <view class="classify"  @tap="$jump('../subhome/home_com')"> -->
			<view class="classify" :class="{name_show:show == 3}" @tap="show = 3">
				<image src="../../static/image/index/product.png"></image>
				<view>家风产品</view>
			</view>
			<!-- <view class="classify" @tap="$jump('../subhome/assemble')"> -->
			<view class="classify" :class="{name_show:show == 4}" @tap="show = 4">
				<image src="../../static/image/index/assemble.png"></image>
				<view>拼团</view>
			</view>
		</view>
		<view class="" v-show="show == 3">
			<view class="propulsion">
				<view class="commodity_box">
					<view class="top">
						<image src='../../static/image/index/start1.png'></image>
						<text style="color:#D80000;font-size: 38rpx;font-weight: 600;">新品上市</text>
					</view>
					<view class="commodity" v-for="(itemo,indexo) in new_goods " :key='itemo.id' @tap="$jump('/pages/subhome/details?id='+itemo.id)">
						<view class="pages"><image :src='itemo.images'></image></view>
						<view class="pages_box">
							<view class="name">{{itemo.title}}</view>
							<view class="picker">{{itemo.price}}<text>{{itemo.inventory}}人付款</text></view>
						</view>
					</view>
				</view>
				<view class="commodity_box">
					<view class="top">
						<image src='../../static/image/index/start2.png'></image>
						<text style="color:#000000;font-size: 38rpx;font-weight: 600;">超值拼团</text>
					</view>
					<view  class="commodity"  v-for="(itemo,indexo) in fight" :key='itemo.id'  @click="$jump('/pages/subhome/threehome/group_products?id='+itemo.id)">
						<view class="pages"><image :src='$api_img()+itemo.thumb'></image></view>
						<view class="pages_box">
							<view class="name">{{itemo.title}}</view>
							<view class="picker">{{itemo.price}}<text>{{itemo.sales}}人付款</text></view>
						</view>
					</view>
				</view>
			</view>
			<view class="all">
				<view class="top">
					<view class="top1"><text></text>推荐产品</view>
					<view class="top2" @tap="$jump('../subhome/home_com?title=家风产品')">全部</view>
				</view>
				<view class="allB">
					<view class="product" v-for="(it,ind) in recommend " :key="it.id" @tap="$jump('/pages/subhome/details?id='+it.id)">
						<view class="pages"><image :src='it.images'></image></view>
						<view class="pages_box">
							<view class="name">{{it.title}}</view>
							<view class="picker">{{it.price}}<text>{{it.inventory}}人付款</text></view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="vider_content_two" v-show="show == 1">
			<view class="con_box" v-for="(item,index) in class_list1" :key='item.id'>
				<view class="box_one">
					<text></text>{{item.cl_name}}
				</view>
				<view class="box_two" v-for="(items,index) in item.video_list" :key='items.id'  @tap="$jump('../com_page/video_details?id='+items.id + '&type='+items.type)">
					<view class="two_top">
						<view class="top_left1">
							<image :src="$api_img() + items.v_pic" mode=""></image>
						</view>
						<view class="top_left2">
							<view class="title">
								<view class="title_one">
									<text v-if="items.recommend == 1" class="recommend">推荐</text>
									<text v-else-if="items.recommend == 2" class="hot">HOT</text>
									<view class="">
										{{items.title}}
									</view>
								</view>
								<view class="title_two">{{items.is_free == 0? '免费' : items.is_free == 1? '付费': '未解锁'}}</view>
							</view>
							<view class="long_title">
								{{items.long_title}}
							</view>
							<view class="short_content">
								{{items.short_content}}
							</view>
						</view>
					</view>
					
					<view class="two_btm">
						<view class="btn_left">
							主讲：{{items.techer.name}}&nbsp;导师
						</view>
						<view class="btn_right">
							已有{{items.view}}人学习
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="build" v-show="show == 2">
			<view class="build_top">
				家风建设之路
			</view>
			<view class="build_box" v-for="(item,index) in class_list2" :key='item.id'>
				<view class="box_top">
					<view class="top1">
						<text></text>{{item.name}}
					</view>
					<view class="top2">
						全部
					</view>
				</view>
				<!-- <view class="box_main" v-for="(items,indexs) in item.items"  @click="$jump('../subhome/h_list?id='+items.id+'')"> -->
				<view class="box_main" v-for="(items,indexs) in item.items">
					<view class="image">
						<image :src="$api_img() + items.big_images_old" mode="widthFix"></image>
					</view>
					<view class="main_title">
						{{items.name}}
					</view>
					<view class="main_logtitle">
						{{items.describe}}
					</view>
				</view>
			</view>
		</view>
		
		<view class="" v-show="show == 4">
			<view class="all">
				<view class="top">
					<view class="top1"><text></text>超值拼团</view>
					<view class="top2"  @tap="$jump('../subhome/assemble')">全部</view>
				</view>
				<view class="allB">
					<view class="product" v-for="(it,ind) in class_list3 "  @click="$jump('../subhome/threehome/group_products?id='+it.id)">
						<view class="pages"><image :src='it.thumb'></image></view>
						<view class="pages_box">
							<view class="name">{{it.title}}</view>
							<view class="picker">{{it.price}}<text>{{it.sales}}人付款</text></view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="QRcode" @tap="$jump('/pages/subuser/brokerage/invite')">
			<image src="../../static/image/index/code.png" mode=""></image>
		</view>
	</view>
</template>
res
<script>
	export default{
		data() {
			return {
				show:1,
				swiper_list: '',
				new_goods:"",
				fight:'',
				recommend:"",
				category:'',
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				cart_status:false,
				class_list1:'',
				class_list2:'',
				class_list3:''
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
			this.service.entire(this,'post',this.APIconfig.api_root.index.good_index,{ //家风产品
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
			
			this.service.entire(this,'post',this.APIconfig.api_root.index.xfClassList,{ //家风学堂
				id:40
			},function(self,res){
				console.log(res)
				self.class_list1 = res.data.list
				// self.anima = false
			})
			this.service.entire(this,'post',this.APIconfig.api_root.index.category,{ //家风建设
				// id:40
			},function(self,res){
				console.log(res)
				self.class_list2 = res.data
				// self.anima = false
			})
			
			this.service.entire(this,'post',this.APIconfig.api_root.subhome.g_lists,{ //拼团
				page:1
			},function(self,res){
				console.log(res)
				self.class_list3 = res.data.data
			})
		}
	}
</script>

<style lang="scss">
	page{
		background: #E4E4E6;
	}
	.content {
		.swiper{
			height:365rpx;
		}
		.swiper_box{
			padding: 0 20rpx;
			background: #fff;
			image{
				width: 100%;
			}
		}
		.subject{
			display: flex;
			justify-content:space-around;
			background: #fff;
			.classify{
				margin: 40rpx 0;
				font-size: 24rpx;
				width: 25%;
				text-align: center;
				image{
					width: 85rpx;
					height: 85rpx;
				}
				view{
					font-size: 24rpx;
				}
			}
			.name_show{
				color: #FE0000;
			}
		}
		.propulsion{
			display: flex;
			justify-content: space-between;
			padding: 0 20rpx;
			// padding-bottom: 30rpx;
			// padding-top: 20rpx;
			.commodity_box{
				width: 340rpx;
				.top{
					display: flex;
					align-items: center;
					margin: 26rpx 0 16rpx 0;
					// margin: 0 20rpx;
					// padding-bottom: 24rpx;
					image{
						width: 31rpx;
						height: 31rpx;
						margin-right: 16rpx;
						// margin:0rpx 10rpx 0 0;
					}
				}
				.commodity{
					// width: 50%;
					// margin-left:22rpx ;
					// padding: 0 10rpx;
					.pages{
						width: 340rpx;
						height: 340rpx;
						// margin: 0 0 10rpx 0;
						image{
							width: 100%;
							height: 100%;
						}
					}
					.pages_box{
						box-sizing: border-box;
						padding: 10rpx;
						background: #fff;
						font-size: 28rpx;
						width: 100%;
						height: 150rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.name{
							font-size:28rpx ;
							// padding-right: 10rpx;
							// margin: 8rpx 0;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							overflow: hidden;
						}
						.picker{
							font-size: 32rpx;
							color: #D80000;
							text{
								color: #999999;
								font-size: 24rpx;
								margin-left: 16rpx;
							}
						}
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
					font-size: 38rpx;
					display: flex;
					align-items: center;
					font-weight: 600;
					text{
						display: inline-block;
						width: 4rpx;
						height: 36rpx;
						background: #FE0000;
						margin-right: 8rpx;
					}
				}
				.top2{
					font-size: 28rpx;
					color:#E9BB00;
				}
			}
			.allB{
				width: 100%;
				display: flex;
				flex-wrap:wrap;
				justify-content: space-around;
				padding: 0 20rpx;
				box-sizing: border-box;
				
				.product{
					width: 340rpx;
					// margin:30rpx;
					.pages{
						width: 340rpx;
						height: 340rpx;
						// margin: 0 0 10rpx 0;
						image{
							width: 100%;
							height: 100%;
						}
					}
					.pages_box{
						box-sizing: border-box;
						padding: 10rpx;
						background: #fff;
						font-size: 28rpx;
						// width: 100%;
						height: 150rpx;
						box-sizing: border-box;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.name{
							font-size:28rpx ;
							// padding-right: 10rpx;
							// margin: 8rpx 0;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							overflow: hidden;
						}
						.picker{
							font-size: 32rpx;
							color: #D80000;
							text{
								color: #999999;
								font-size: 24rpx;
								margin-left: 16rpx;
							}
						}
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
			border: 1rpx solid #FE0000;
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
	.vider_content_two{
		font-size: 28rpx;
		padding: 0rpx 20rpx 10rpx 20rpx;
		overflow: hidden;
		background: #E4E4E4;
		.box_one{
			font-size: 38rpx;
			margin: 30rpx 0 20rpx 0;
			display: flex;
			align-items: center;
			font-weight: 600;
			text{
				display: inline-block;
				width: 4rpx;
				height: 34rpx;
				background: #FE0000;
				margin-right: 12rpx;
			}
		}
		.box_two{
			background: #FFFFFF;
			padding: 30rpx 15rpx;
			height: 350rpx;
			margin-bottom: 25px;
			box-sizing: border-box;
			border-radius: 10rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.two_top{
				display: flex;
				justify-content: space-between;
				.top_left1{
					width: 164px;
					height: 100px;
					image{
						height: 201rpx;
						width: 329rpx;
					}
				}
				.top_left2{
					// flex-grow: 2;
					width: 328rpx;
					height: 201rpx;
					.title{
						color: #FE0000;
						font-size: 34rpx;
						display: flex;
						align-items: center;
						justify-content: space-between;
						.title_one{
							display: flex;
							align-items: center;
							font-weight: 500;
							text{
								font-size: 24rpx;
								height: 35rpx;
								line-height: 35rpx;
								width: 65rpx;
								text-align: center;
								border-radius: 8rpx;
								margin-right: 8rpx;
							}
							.recommend{
								color: #FFFFFF;
								background: #FFCC00;
							}
							.hot{
								color: #FFFF00;
								background:linear-gradient(14deg,rgba(253,11,0,1),rgba(255,97,0,1));
							}
						}
						.title_two{
							color: #FE0000;
							font-size: 24rpx;
							background: #FCCF00;
							height: 32rpx;
							line-height: 32rpx;
							border-radius: 32rpx;
							width: 80rpx;
							text-align: center;
							
						}
						
					}
					.long_title{
						color: #FF6300;
						margin: 7rpx 0 9rpx 0;
						font-size: 28rpx;
					}
					.short_content{
						color: #666666;
						font-size: 24rpx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 3;
						overflow: hidden;
					}
				}
			}
			.two_btm{
				display: flex;
				justify-content: space-between;
				view{
					height: 60rpx;
					line-height: 60rpx;
					width: 328rpx;
					font-size: 28rpx;
					color: #FFFFFF;
					background: #FE0000;
					border-radius: 10rpx;
					text-align: center;
				}
				
			}
		}
	}
	.build{
		font-size: 28rpx;
		padding-bottom: 10rpx;
		overflow: hidden;
		background: #E4E4E4;
		.build_top{
			color: #FFFD04;
			font-size: 38rpx;
			text-align: center;
			height: 100rpx;
			line-height: 100rpx;
			background: #FE0000;
			font-weight:bold;
		}
		.build_box{
			padding: 0 20rpx;
			.box_top{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 20rpx 0;
				.top1{
					font-size: 38rpx;
					display: flex;
					align-items: center;
					font-weight: 600;
					text{
						display: inline-block;
						width: 4rpx;
						height: 36rpx;
						background: #FE0000;
						margin-right: 8rpx;
					}
				}
				.top2{
					font-size: 28rpx;
					color:#E9BB00;
				}
			}
			.box_main{
				background: #fff;
				padding-bottom: 20rpx;
				border-radius: 20rpx;
				margin-bottom: 24rpx;
				&:last-child{
					margin-bottom: 0rpx;
				}
				image{
					width: 100%;
				}
				.main_title{
					font-size: 30rpx;
					padding: 16rpx;
					font-weight: 500;
				}
				.main_logtitle{
					font-size: 28rpx;
					color: #999999;
					height: 70rpx;
					padding: 0 20rpx 0rpx 20rpx;
					box-sizing: border-box;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
				}
			}
		}
	}
</style>
