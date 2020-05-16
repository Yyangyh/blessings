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
		
		<view class="texts_boxList" v-for="(item,index) in dataList" :key='item.id'>
			<view class="t_box" @tap="$jump('./threehome/h_article?id='+item.id)">
				<view class="">
					<image :src="$api_img() + item.cover" mode="scaleToFill"></image>
				</view>
				<view class="b_right">
					<view>{{item.title}}</view>
					<view>{{service.NumEllipsis(item.browse_count)}}次阅读</view>
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
				dataList:[],
				id:'',
				page:1,
				more:'',
				loadRecord: true
			}
		},
		onReachBottom() {
			if (this.loadRecord == false) return
			this.index_all(that.test)
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
				this.service.entire(this,'post',this.APIconfig.api_root.subhome.f_index,{
						keywords:keywords,
						category_id:this.id,
						page:this.page
					},function(self,res){
						// self.dataList = res.data
						
						let data = res.data
						data.push(...self.dataList)
						self.dataList = data
						self.page += 1
						self.more = 'more'
						if (res.data.length < 10) {
							self.more = 'noMore'
							self.loadRecord = false
							return
						}
					})
			},
		},
		onLoad(e) {
			this.id = e.id
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
	.texts_boxList{
		
		.t_box{
		padding: 20rpx 25rpx 20rpx 25rpx;
		display: flex;
		// border-bottom:1rpx solid  ;
			image{
				width: 268rpx;
				height: 179rpx;
				margin-right: 30rpx;
			}
			.b_right{
				flex-grow: 2;
				view:first-child{
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
					font-size: 28rpx;
					margin: 20rpx 0;
				}
				view:last-child{
					font-size: 28rpx;
					color: #999999;
				}
			}
		}
	}
</style>
