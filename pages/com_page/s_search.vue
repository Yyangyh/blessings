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
		
		<view class="shopp_tab">
			<view class="shopp_list" v-for="(item,index) in data" :key='item.id' @tap="$jump('/pages/subhome/details?id='+item.id+'&type='+item.type)">
				<view class="list_one">
					<image :src="item.images" mode="widthFix"></image>
				</view>
				<view class="list_two">
					{{item.title}}
				</view>
				<view class="list_three">
					已售{{item.sales_count}}
				</view>
				<view class="list_four">
					￥{{item.price}}
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
				let that = this
				setTimeout(() => { 
					if(!that.test)return
					that.more = 'loading'
					that.index_all(that.test)
					
				}, 0)
				
			},
			index_all(keywords){
				this.service.entire(this,'post',this.APIconfig.api_root.subhome.s_index,{
						keywords:keywords,
						page:this.page,
					},function(self,res){
						self.data = res.data.data
						if (res.data.data.length < 10) {
							self.more = 'noMore'
							self.loadRecord = false
							return
						}
						self.more = 'more'
					})
			},
		},
		onLoad(e) {
			
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
	.shopp_tab{
		display: flex;
		flex-wrap: wrap;
		padding: 10rpx;
		.shopp_list{
			width: 50%;
			font-size: 24rpx;
			padding: 0 10rpx;
			box-sizing: border-box;
			image{
				width: 100%;
			}
			view{
				padding: 0 10rpx;
			}
			.list_one{
				padding: 0;
			}
			.list_two{
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}
			.list_three{
				color: #999999;
				margin: 12rpx 0;
			}
			.list_four{
				color: #D80000;
				font-size: 28rpx;
			}
		}
	}
</style>
