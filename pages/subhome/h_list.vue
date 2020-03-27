<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<view class="top">
			<image src="../../static/image/com_page/returns.png" @tap="service.returns()" mode="widthFix"></image>
			<text>{{title}}</text>
			<image  @tap="$jump('/pages/subhome/h_search?id='+req_data.category_id)" src="../../static/image/com_page/search.png" mode="widthFix"></image>
		</view>
		<view class="texts_boxList" v-for="(item,index) in dataList" :key='item.id'>
			<view class="t_box" @tap="$jump('./threehome/h_article?id='+item.id)">
				<view><image :src="$api_img() + item.cover" mode="scaleToFill"></image></view>
				<view class="b_right">
					<view>{{item.title}}</view>
					<view>{{item.browse_count}}次阅读</view>
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
		data(){
			return{
				title:'文章',
				top_class:'',
				dataList:[],
				more: 'more',
				page: 1,
				loadRecord: true,
				req_data:{
					num:10,
					page:1
				}
			}
		},
		methods:{
			Index(){
				this.more = 'loading'
				this.uni_request(this.req_data)
			},
			uni_request(req_data){
				this.service.entire(this,'post',this.APIconfig.api_root.subhome.f_index,req_data,function(self,res){
					// self.top_class = res.data.top_list
					let data = self.dataList
					// top_class = self.top_class
					self.dataList = res.data
					data.push(...res.data)
					self.dataList = data
					self.req_data.page += 1
					self.more = 'more'
					if (res.data.length < 10) {
						self.more = 'noMore'
						self.loadRecord = false
						return
					}
				})
				
			}
		},
		onLoad(e) {
			this.title = e.title
			this.req_data.category_id = e.id
			this.Index()
		},
		onShow() {
			
		},
		onReachBottom() {//下拉
			if (this.loadRecord == false) return
			this.Index()
		},
	}
</script>

<style lang="scss">
	.content{
		position: relative;
		padding-top: calc(105rpx + var(--status-bar-height));
		 .top{
			position: fixed;
			width: 100%;
			z-index:1000;
			box-sizing: border-box;
			top: var(--status-bar-height);
			left: 0;
			display: flex;
			height: 105rpx;
			padding: 0 30rpx;
			font-size: 32rpx;
			justify-content: space-between;
			align-items: center;
			background-color: #FFFFFF;
			image:first-child{
				width: 31rpx;
				height: 31rpx;
			}
			image:last-child{
				width: 50rpx;
				height: 50rpx;
			}
		 }
		.tran_none{
			transform: rotate(-180deg);
		}
		.tran_show{
			transform: rotate(0deg);
		}
		.tab_list image{
			height: 11rpx;
			width: 19rpx;
			margin-left: 14rpx;
		}
		.down_box{
			position: fixed;
			top: calc(var(--status-bar-height) + 205rpx);
			left: 0;
			width: 100%;
			z-index: 998;
			box-sizing: border-box;
			display: flex;
			flex-wrap: wrap;
			// justify-content: space-between;
			transition: .3s;
			transform: translateY(-100%);
			background: #FFFFFF;
			font-size: 28rpx;
			padding: 40rpx 20rpx;
			.list_box{
				width: 33.3%;
				.down_list{
					width: 180rpx;
					height: 60rpx;
					line-height: 60rpx;
					border-radius: 60rpx;
					background: #F1F1F1;
					text-align: center;
					margin: 15rpx auto;
				}
				&:after {
				    content: ""; 
				    width:33.3%;
				} 
				&:nth-of-type(1) .down_list{
					color: #D80000;
				}
			}
			
			
		}
		
		// .down_box {
		// 	&:after {
		// 	    content: ""; 
		// 	    width:180rpx;
		// 	}
		// 	.down_list{
		// 		width: 180rpx;
		// 		height: 60rpx;
		// 		line-height: 60rpx;
		// 		border-radius: 60rpx;
		// 		background: #F1F1F1;
		// 		text-align: center;
		// 		margin-bottom: 30rpx;
		// 		&:nth-of-type(1){
		// 			color: #D80000;
		// 		}
		// 	}
		// }
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
