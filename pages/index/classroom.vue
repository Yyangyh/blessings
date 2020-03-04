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
					<view class="list_img">
						<image :src="$api_img() + item.cl_image" mode=""></image>
					</view>
					<view class="">
						{{item.cl_name}}
					</view>
				</view>
			</view>
			<!-- <view class="title_bottom" @tap="$jump('../subclass/textual')">
				<image :src="$api_img() + advertising.cl_image" mode="widthFix"></image>
			</view> -->
		</view>
		
		 
		
		<view class="vider_content_two" >
			<view class="con_box" v-for="(item,index) in class_list" :key='item.id'>
				<view class="box_one">
					<text></text>{{item.cl_name}}
				</view>
				<view class="box_two" v-for="(items,index) in item.video_list" :key='items.id'>
					
					<view class="">
						<view class="">
							<image :src="$api_img() + items.v_pic" mode=""></image>
						</view>
						<view class="">
							<view class="">
								<text></text>
								<view class="">
									{{items.title}}
								</view>
								<text></text>
							</view>
							<view class="">
								{{items.long_title}}
							</view>
							<view class="">
								{{items.short_content}}
							</view>
						</view>
					</view>
					
					<view class="">
						<view class="">
							主讲：{{}}
						</view>
						<view class="">
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
				class_list:''
			}
		},
		methods:{
			async a_sync(){
				await this.index()
				await this.index_list(this.id)
			},
			index(){
				return new Promise((resolve, reject) =>{ //将异步请求变同步
					this.service.entire(this,'get',this.APIconfig.api_root.index.felicity_index,{
						userid:this.$store.state.user.id
					},function(self,res){
						self.top_class = res.data.top_class
						self.slide = res.data.slide
						self.id = res.data.top_class[0].id
						console.log(self.id)
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
				})
			}
		},
		onShow() {
			this.a_sync()
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
	}
	.room_top{
		padding: 0 20rpx;
		image{
			height: 350rpx;
			width: 710rpx;
		}
	}
	.room_title{
		padding: 40rpx 20rpx;
		.title_top{
			display: flex;
			justify-content: space-between;
			text-align: center;
			font-size: 24rpx;
			margin-bottom: 40rpx;
			.top_list{
				width: 25%;
				text-align: center;
			}
			.list_img{
				margin-bottom: 10rpx;
				image{
					height: 85rpx;
					width: 85rpx;
				}
			}
		}
		.title_bottom image{
			height: 150rpx;
			width: 710rpx;
		}
	}
	.vider_content_two{
		font-size: 28rpx;
		padding: 40rpx 20rpx;
		background: #E4E4E4;
		.box_one{
			font-size: 38rpx;
			display: flex;
			align-items: center;
			font-weight: 500;
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
		}
	}
</style>
