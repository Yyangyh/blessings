<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<search></search>
		<view class="room_top">
			<image :src="APIconfig.api_img + slide.images_url" mode="widthFix"></image>
		</view>
		<view class="room_title">
			<view class="title_top">
				<view class="top_list" v-for="(item,index) in top_class" :key = 'item.id'>
					<image :src="APIconfig.api_img + item.cl_image" mode="widthFix"></image>
					<view class="">
						{{item.cl_name}}
					</view>
				</view>
			</view>
			<view class="title_bottom" @tap="$jump('../subclass/textual')">
				<image :src="APIconfig.api_img + advertising.cl_image" mode="widthFix"></image>
			</view>
		</view>
		
		
		<view class="vider_content_two" v-for="(item,index) in cen_class" :key='item.id'>
			<view class="v_box_top">
				<view class="box_left">
					{{item.cl_name}}
				</view>
				<view class="box_right">
					全部
				</view>
			</view>
			<view class="vider_content">
				<view class="content_list" v-for="(items,indexs) in item.list" :key='items.id'>
					<view class="list_img_box">
						<image src="../../static/image/index/vider_img1.png" mode=""></image>
					</view>
					<view class="list_right">
						<view class="list_one">
							{{items.long_title}}
						</view>
						<view class="list_two">
							{{items.view}}次观看
						</view>
						<view class="list_three">
							<view class="">
								￥{{items.group_price}}
							</view>
							<view class="" v-if="items.is_free == 0">
								VIP免费
							</view>
						</view>
					</view>
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
			this.service.entire(this,'get',this.APIconfig.api_root.index.felicity_index,{
				userid:this.$store.state.user.id
			},function(self,res){
				console.log(res)
				self.advertising = res.data.advertising[0]
				self.top_class = res.data.top_class
				self.slide = res.data.slide
				self.cen_class = res.data.cen_class
			})
		}
	}
</script>

<style>
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
		border-bottom: 6rpx solid #F1F1F1;
	}
	.vider_content_two .vider_content{
		padding: 0 20rpx;
		font-size: 24rpx;
	}
	.vider_content_two .vider_content image{
		width: 268rpx;
		height: 179rpx;
		margin-right: 29rpx;
	}
	.vider_content_two .vider_content .content_list{
		display: flex;
		margin: 30rpx 0;
	}
	.vider_content_two .vider_content .content_list .list_right{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-bottom: 30rpx;
		width: 100%;
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
