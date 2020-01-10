<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<search :type='3'></search>
		<view class="room_top">
			<image :src="$api_img() + slide.images_url" mode="widthFix"></image>
		</view>
		<view class="room_title">
			<view class="title_top">
				<view class="top_list" v-for="(item,index) in top_class" :key = 'item.id'  @tap="$jump('../com_page/video_class?id='+item.id+'&title='+item.cl_name)">
					<image :src="$api_img() + item.cl_image" mode="widthFix"></image>
					<view class="">
						{{item.cl_name}}
					</view>
				</view>
			</view>
			<view class="title_bottom" @tap="$jump('../subclass/textual')">
				<image :src="$api_img() + advertising.cl_image" mode="widthFix"></image>
			</view>
		</view>
		
		 
		<!-- <view class="vider_content_two" v-for="(item,index) in cen_class" :key='item.id' v-if ="item.list.length != 0 ">
			<view class="v_box_top">
				<view class="box_left" >
					{{item.cl_name}}
				</view>
				<view class="box_right"  @tap="$jump('../com_page/video_class?type='+item.type+'&id='+item.id+'&title='+item.cl_name)">
					全部
				</view>
			</view>
			<view class="vider_content">
				<view class="content_list" v-for="(items,indexs) in item.list" :key='items.id'  @tap="$jump('../com_page/video_details?id='+items.id + '&type='+items.type)">
					<view class="list_img_box">
						<image :src="$api_img()+items.v_pic" mode="scaleToFill"></image>
					</view>
					<view class="list_right">
						<view class="list_one">
							{{items.long_title}}
						</view>
						<view class="list_two">
							{{items.view}}次{{items.type == 1? '观看':'收听'}}
						</view>
						<view class="list_three">
							<view class="">
								￥{{items.v_price}}
							</view>
							<view class="" v-if="items.free_type > 0">
								{{items.free_dec}}免费
							</view>
						</view>
					</view>
				</view>
				
			</view>
		</view> -->
		
		<view class="vider_content_two" >
			<view class="two_list" v-for="(item,index) in cen_class" :key='item.id' @tap="$jump('../com_page/video_class?type='+item.type+'&id='+item.id+'&title='+item.cl_name)">
				<view class="two_img">
					<image :src="$api_img()+item.cl_image" mode="scaleToFill"></image>
				</view>
				<view class="two_text">
					{{item.cl_name}}
				</view>
			</view>
			
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
				advertising:'',
				top_class:'',
				slide:'',
				cen_class:'',
				
			}
		},
		onShow() {
			this.service.notice.call(this)
			this.service.entire(this,'get',this.APIconfig.api_root.index.felicity_index,{
				userid:this.$store.state.user.id
			},function(self,res){
				// console.log(res)
				self.advertising = res.data.advertising[0]
				self.top_class = res.data.top_class
				self.slide = res.data.slide
				self.cen_class = res.data.cen_class
			})
		}
	}
</script>

<style lang="scss">
	.content{
		/* padding-top: 0; */
	}
	.room_top{
		padding: 0 20rpx;
	}
	.room_top image{
		height: 350rpx;
		width: 710rpx;
	}
	.room_title{
		padding: 40rpx 20rpx;
		border-bottom: 6rpx solid #F1F1F1;
	}
	.room_title .title_top{
		display: flex;
		justify-content: space-between;
		text-align: center;
		font-size: 28rpx;
		margin-bottom: 40rpx;
	}
	.room_title .title_top image{
		height: 169rpx;
		width: 343rpx;
	}
	.room_title .title_bottom image{
		height: 150rpx;
		width: 710rpx;
	}
	.v_box_top{
		display: flex;
		justify-content: space-between;
		padding: 0 20rpx;
		font-size: 28rpx;
		margin: 20rpx 0;
	}
	.v_box_top .box_right{
		font-size: 24rpx;
		color: #EF7C38;
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
		color: #D80000;
		font-size: 28rpx;
	}
	.list_three view:nth-of-type(2){
		background: #000000;
		font-size: 24rpx;
		color: #FFFFFF;
		height: 20rpx;
		padding: 10rpx;
		line-height: 20rpx;
		border-radius: 20rpx;
	}
</style>
