<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<search :type='3'></search>
		<view class="swiper_box" v-if="slide">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item,index) in slide" :key='item.id' >
					<view class="swiper-item uni-bg-red">
						<image :src="$api_img() + item.images_url" mode="widthFix"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="room_title">
			<view class="title_top">
				<view class="top_list" v-for="(item,index) in top_class" :key = 'item.id' @tap="chiose(index)">
					<image :src="$api_img() + item.cl_image" mode=""></image>
					<view class="" :class="{name_show:id == item.id}">
						{{item.cl_name}}
					</view>
				</view>
			</view>
			<!-- <view class="title_bottom" @tap="$jump('../subclass/textual')">
				<image :src="$api_img() + advertising.cl_image" mode="widthFix"></image>
			</view> -->
		</view>
		
		 
		
		<view class="vider_content_two" :class="{anima:anima}" >
			<view class="con_box" v-for="(item,index) in class_list" :key='item.id'>
				<view class="box_one" v-if="item.video_list != ''">
					<text></text>{{item.cl_name}}
				</view>
				<view class="box_two" v-for="(items,index) in item.video_list" :key='items.id'  
				@tap="$jump('../com_page/video_details?id='+items.id + '&type='+items.type)">
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
								<view class="title_two">{{items.is_free == 1? '免费' : items.is_free == 0? '付费': '未解锁'}}</view>
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
		
		<view class="QRcode" @tap="$jump('/pages/subuser/brokerage/invite')">
			<image src="../../static/image/index/code.png" mode=""></image>
		</view>
		
	</view>
</template>

<script>
	import search from '../common/index_search.vue'
	export default{
		components:{
			search
		},
		data() {
			return {
				top_class:'',
				slide:'',
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				class_list:'',
				id:'',
				anima:false
			}
		},
		methods:{
			chiose(index){
				if(this.top_class[index].action == 1){
					let that = this
					this.id = this.top_class[index].id
					this.anima = true
					this.index_list(this.id)
				}else{
					this.$jump('../com_page/video_class?id='+this.id+'&title='+this.top_class[index].cl_name)
				}
			},
			async a_sync(){
				await this.index()
				await this.index_list(this.id)
			},
			index(){
				return new Promise((resolve, reject) =>{ //将异步请求变同步
					this.service.entire(this,'get',this.APIconfig.api_root.index.felicity_index,{
						userid:this.$store.state.user.id
					},function(self,res){
						console.log(res)
						self.top_class = res.data.top_class
						self.slide = res.data.slide
						self.id = res.data.top_class[0].id
						
						resolve(self.id);
					})
				})
			},
			index_list(id){
				this.service.entire(this,'get',this.APIconfig.api_root.index.xfClassList,{
					id:id
				},function(self,res){
					console.log(res)
					self.class_list = res.data.list
					self.anima = false
				})
			}
		},
		onLoad() {
			this.a_sync()
		},
		onShow() {
			this.service.notice.call(this)
			// this.service.entire(this,'get',this.APIconfig.api_root.index.felicity_index,{
			// 	userid:this.$store.state.user.id
			// },function(self,res){
			// 	self.top_class = res.data.top_class
			// 	self.slide = res.data.slide
			// })
		}
	}
</script>

<style lang="scss">
	.content{
		/* padding-top: 0; */
		background: #FE0000;
	}
	.swiper_box{
		padding: 0 20rpx;
		background: #fff;
		.swiper{
			height:350rpx;
		}
		image{
			width: 100%;
			height: 250rpx;
		}
	} 
	.room_title{
		background: #fff;
		padding: 0rpx 20rpx;
		.title_top{
			display: flex;
			justify-content: space-between;
			text-align: center;
			font-size: 28rpx;
			.top_list{
				width: 25%;
				margin: 40rpx 0;
				text-align: center;
				.name_show{
					color: #FE0000;
				}
			}
			image{
				height: 85rpx;
				width: 85rpx;
			}
		}
		.title_bottom image{
			height: 150rpx;
			width: 710rpx;
		}
	}
	.anima{
		opacity: 0;
	}
	
	.vider_content_two{
		font-size: 28rpx;
		padding: 0rpx 20rpx 10rpx 20rpx;
		overflow: hidden;
		background: #FE0000;
		.box_one{
			background: #FFFD04;
			font-size: 38rpx;
			margin: 30rpx 0 20rpx 0;
			display: flex;
			align-items: center;
			font-weight: bold;
			color: #000;
			text{
				display: inline-block;
				width: 4rpx;
				height: 34rpx;
				background: #fff;
				margin-right: 12rpx;
			}
		}
		.box_two{
			background: #FFFFFF;
			padding: 30rpx 15rpx;
			height: 350rpx;
			margin-bottom: 20rpx;
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
	
</style>
