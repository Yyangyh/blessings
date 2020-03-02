<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<search :type='3'></search>
		
		<view class="swiper_box">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item,index) in swiper_list" :key='item.id' @tap="$jump('../com_page/video_details?'+item.event_value)">
					<view class="swiper-item uni-bg-red">
						<image :src="$api_img() + item.images_url" mode="widthFix"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="index_tab">
			<view class="tab_list"  @tap="$jump('../com_page/index_class?type=1')">
				<image src='../../static/image/index/index_tab1.png'></image>
				<view class="">课程视频</view>
			</view>
			<view class="tab_list"  @tap="$jump('../com_page/index_class?type=2')">
				<image src='../../static/image/index/index_tab2.png' mode="widthFix"></image>
				<view class="">音频</view>
			</view>
			<view class="tab_list" @tap="$jump('../subindex/texts')">
				<image src='../../static/image/index/index_tab3.png' mode="widthFix"></image>
				<view class="">精彩文章</view>
			</view>
			<view class="tab_list" @tap="$jump('../subindex/classify')">
				<image src='../../static/image/index/index_tab4.png' mode="widthFix"></image>
				<view class="">分类</view>
			</view>
			<view class="tab_list" @tap="temporary">
				<image src='../../static/image/index/index_tab5.png' mode="widthFix"></image>
				<view class="">早间晨语</view>
			</view>
			<view class="tab_list" @tap="jump('/pages/index/home')">
				<image src='../../static/image/index/index_tab6.png' mode="widthFix"></image>
				<view class="">商城</view>
			</view>
			<view class="tab_list" @tap="$jump('../subindex/evaluating')">
				<image src='../../static/image/index/index_tab7.png' mode="widthFix"></image>
				<view class="">幸福测评</view>
			</view>
			<view class="tab_list"  @tap="$jump('/pages/activity/activity')">
				<image src='../../static/image/index/index_tab8.png' mode="widthFix"></image>
				<view class="">活动发布</view>
			</view>
		</view>
		
		
		
			<view class="video_box" v-for="(item,index) in class_top" :key='item.id'>
				<view class="v_box_top">
					<view class="box_left">
						{{item.cl_name}}
					</view>
					<view class="box_right"  @tap="$jump('../com_page/video_class?id='+item.id+'&title='+item.cl_name+'&type='+item.type)">
						全部
					</view>
				</view>
				<view class="vider_content">
					<scroll-view  scroll-x="true" class="scroll-Y">
						<view class="content_list" v-for="(items,indexs) in item.video_list" :key='items.id' @tap="$jump('../com_page/video_details?id='+items.id + '&type='+items.type)">
							<view class="list_img_box">
								<image :src="$api_img()+items.v_pic" mode="scaleToFill"></image>
							</view>
							<view class="list_box">
								<view class="list_one">
									{{items.long_title}}
								</view>
								<view class="list_box2">
									<view class="list_two">
										<view class="">
											共{{items.catalogue_count}}节
										</view>
										<view class="">
											{{items.is_free == 0? '￥'+items.v_price : '免费'}}
										</view>
									</view>
									<view class="list_three">
										<view class="">
											讲师：{{items.techer.name}}
										</view>
										<view class="">
											已有{{items.view}}人学习
										</view>
									</view>
								</view>
							</view>
						</view>
					</scroll-view>
					
				</view>
			</view>
			
			<view class="vider_content_two" >
				<view class="two_list" v-for="(item,index) in class_list" :key='item.id'   @tap="$jump('../com_page/video_class?id='+item.id+'&title='+item.cl_name+'&type='+item.type)"  v-if="index != 0">
					<view class="two_img">
						<image :src="$api_img()+item.cl_image" mode="scaleToFill"></image>
					</view>
					<view class="two_text">
						{{item.cl_name}}
					</view>
				</view>
			</view>
			
			<view class="QRcode" @tap="$jump('/pages/subuser/brokerage/invite')">
				<image src="../../static/image/index/code.png" mode=""></image>
			</view>
	</view>
</template>

<script>

	import { mapState } from 'vuex'
	import search from '../common/index_search.vue'
	export default {
		components:{
			search
		},
		data() {
			return {
				swiper_list: '',
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				class_top:[],
				class_list:'',
				msg:'holle'
			}
		},
		// computed: {
		//   // localComputed () { /* ... */ },
		//   // 使用对象展开运算符将此对象混入到外部对象中
		//   ...mapState({
		// 	  name:'name'
		//   }),
		
		// },	
		
		onLoad() {
			console.log(this.$store.state.user)
		},
		onShow() {
			this.service.notice.call(this)
			this.service.entire(this,'post',this.APIconfig.api_root.index.index,{
				userid:this.$store.state.user.id
			},function(self,res){
				self.swiper_list = res.data.slide
				if(self.class_top.length == 0) self.class_top.push(res.data.class_list[0])
				self.class_list = res.data.class_list
			})
		},
		methods: {
			jump(url){
				uni.switchTab({
					url:url
				})
			},
			temporary(){
				uni.showToast({
					icon:'none',
					title:'暂未开放！'
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		/* padding-top: 0; */
	}
	.swiper{
		height:365rpx;
	}
	.swiper_box{
		padding: 0 20rpx;
		image{
			width: 100%;
			height: 250rpx;
		}
	} 
	.index_tab{
		text-align: center;
		font-size: 24rpx;
		padding: 0 20rpx;
		margin-top: 30rpx;
		min-height: 300rpx;
		display: flex;
		flex-wrap: wrap;
		.tab_list{
			width: 25%;
			margin-bottom: 25rpx;
		}
		image{
			height: 90rpx;
			width: 90rpx;
		}
	}
	.video_box{
		border-bottom: 6rpx solid #F1F1F1;
		.vider_content{
			white-space: nowrap;
			padding: 0 20rpx;
			.content_list{
				display: inline-block;
				width: 50%;
				font-size: 24rpx;
				box-sizing: border-box;
				white-space: initial;
				vertical-align: top;
				padding-bottom: 50rpx;
				.list_img_box{
					text-align: center;
					margin-bottom: 16rpx;
				}
				.list_box{
					height: 154rpx;
					padding: 0 10rpx;
					box-sizing: border-box;
					display: flex;
					justify-content: space-between;
					flex-direction: column;
				}
				image{
					width: 343rpx;
					height: 229rpx;
				}
			}
		}
	}
	.v_box_top{
		display: flex;
		justify-content: space-between;
		padding: 0 20rpx;
		font-size: 28rpx;
		margin: 20rpx 0;
		.box_right{
			font-size: 24rpx;
			color: #EF7C38;
		}
	}
	.list_one{
		padding-right: 10rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	 .list_two{
		color: #999999;
		margin: 10rpx 0;
		display: flex;
		justify-content: space-between;
		view:nth-of-type(2){
			
			font-size: 28rpx;
			color: #D80000;
		}
	}
	
	.vider_content_two{
		display: flex;
		flex-wrap: wrap;
		font-size: 28rpx;
		text-align: center;
		padding: 40rpx 20rpx;
		.two_list{
			.two_img{
				width: 343rpx;
				height: 270rpx;
				border-radius: 10rpx;
				overflow: hidden;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.two_text{
				margin:10rpx 0 30rpx 0;
			}
			&:nth-of-type(odd){
				margin-right: 20rpx;
			}
		}
		
	}
	.list_three{
		display: flex;
		justify-content: space-between;
		color: #EF7C38;
		font-size: 24rpx;
		view:nth-of-type(2){
			color: #999999;
		}
	}
	
</style>
