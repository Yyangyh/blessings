<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="sea_top">
			<view class="top_img">
				<image @tap="service.returns()" src="/static/image/com_page/returns.png" mode=""></image>
			</view>
			<view class="sea_one">
				<image src="/static/image/com_page/search1.png" mode=""></image>
				<input type="text"  @input="onKeyInput()" v-model="test" value="" placeholder="请搜索你喜欢的~" />
			</view>
			<!-- <view class="search">
				搜索
			</view> -->
		</view>
		
		<view class="vider_content_two">
			<view class="vider_content">
				<view class="content_list" v-for="(item,index) in data" :key='item.id'  @tap="$jump('../com_page/video_details?id='+item.id + '&type='+item.type)">
					<view class="list_img_box">
						<image :src="APIconfig.api_img+item.v_pic" mode="scaleToFill"></image>
					</view>
					<view class="list_right">
						<view class="list_one">
							{{item.long_title}}
						</view>
						<view class="list_two">
							{{item.view}}次{{item.type == 1? '观看':'收听'}}
						</view>
						<view class="list_three">
							<view class="">
								{{item.is_free == 0? '￥'+item.v_price : '免费'}}
							</view>
							<view class="" v-if="item.is_free_vip.indexOf($store.state.user.level_id) != -1">
								VIP免费
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<uni-load-more :status="more"></uni-load-more>
	</view>
</template>

<script>
	import uniLoadMore from '../../components/uni-load-more/uni-load-more.vue'
	export default{
		components: {
			uniLoadMore
		},
		data() {
			return {
				test:'',
				data:'',
				page:1,
				more:'',
				loadRecord: true
			}
		},
		onReachBottom() {
			if (this.loadRecord == false) return
		},
		methods:{
			onKeyInput(){
				this.more = 'loading'
				let that = this
				setTimeout(() => { 
					if(!that.test)return
					that.index_all(that.test)
					
				}, 0)
				
			},
			index_all(keywords){
				this.service.entire(this,'get',this.APIconfig.api_root.com_page.videoList,{
						keyword:keywords,
						type:this.s_type,
						page:this.page,
						limit:10
					},function(self,res){
						self.data = res.data.video_list
						if (res.data.video_list.length < 10) {
							self.more = 'noMore'
							self.loadRecord = false
							return
						}
						self.more = 'more'
						console.log(self.data)
					})
			},
		},
		onLoad(e) {
			this.s_type = e.type
		}
	}
</script>

<style scoped lang="scss">
	.content{
		padding-top: calc(105rpx + var(--status-bar-height));
	}
	
	.sea_top{
		height: 105rpx;
		padding: 0 44rpx;
		width: 100%;
		box-sizing: border-box;
		position: fixed;
		top: var(--status-bar-height);
		z-index: 99;
		left: 0;
		display: flex;
		align-items: center;
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
		background: #fff;
		box-shadow:0px 2rpx 4rpx 0px rgba(0, 0, 0, 0.1);
		.top_img{
			width: 60rpx;
			image{
				height: 36rpx;
				width: 36rpx;
			}
		}
		.sea_one{
			background: #F1F1F1;
			height: 60rpx;
			border-radius: 30rpx;
			flex-grow: 2;
			display: flex;
			align-items: center;
			image{
				width: 40rpx;
				height: 40rpx;
				margin: 0 10rpx;
			}
			input{
				flex-grow: 2;
				font-size: 26rpx;
				font-weight: 200;
			}
		}
		.search{
			margin-left: 20rpx;
			font-size: 32rpx;
		}
		
	}
	.vider_content_two{
		border-bottom: 6rpx solid #F1F1F1;
		.vider_content{
			padding: 0 20rpx;
			font-size: 24rpx;
			.content_list{
				display: flex;
				margin: 30rpx 0;
				.list_right{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					padding-bottom: 30rpx;
					width: 100%;
					.list_three{
						display: flex;
						justify-content: space-between;
						color: #D80000;
						font-size: 28rpx;
						view:nth-of-type(2){
							background: #000000;
							font-size: 24rpx;
							color: #FFFFFF;
							height: 20rpx;
							padding: 10rpx;
							line-height: 20rpx;
							border-radius: 20rpx;
						}
					}
				}
			}
			image{
				width: 268rpx;
				height: 179rpx;
				margin-right: 29rpx;
			}
		}
	}
</style>
