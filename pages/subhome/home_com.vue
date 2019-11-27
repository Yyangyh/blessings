<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<view class="content_top">
			<view class="top_returns" @tap="service.returns()">
				<image src="/static/image/com_page/returns.png" mode="widthFix"></image>
			</view>
			<view class="top_search">
				{{title}}
			</view>
			<view class="top_img" @tap="$jump('../com_page/notice')">
				<image src="/static/image/com_page/search.png" mode="widthFix"></image>
			</view>
		</view>
		
		<view class="tab_list">
			<view class="list_all" @tap="show = !show">
				<view class="">
					全部
				</view>
				<image class="all_img" :class="show===false ? 'tran_none' : show===true ? 'tran_show' : ''" src="../../static/image/index/down.png" mode="widthFix"></image>
			</view>
			
			<view class="list_all">
				收听多
			</view>
		</view>
		
		<view class="mask_black" v-show="show == true" @tap="show = false">
			<!-- 遮罩层 层级888 -->
		</view>
		<view class="down_box"  :class="show===false ? 'mask_none' : show===true ? 'mask_show' : ''" >
			<view class="down_list">
				全部
			</view>
			<view class="down_list" v-for="(item,index) in top_class" :key="item.id">
				{{item.name}}
			</view>
		</view>
		
		<view class="shopp_tab">
			<view class="shopp_list" v-for="(item,index) in shopp_list" :key='item.id'>
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
		
	</view>
</template>

<script>
	export default{
		data() {
			return {
				data:'',
				show:false,
				top_class:'',
				title:'',
				shopp_list:''
			}
		},
		onLoad(e) {
			this.title = e.title
			this.service.entire(this,'post',this.APIconfig.api_root.subhome.s_index,{ //商品列表
				category_id:e.id,
				page:1
			},function(self,res){
				self.shopp_list = res.data.data
			})
			this.service.entire(this,'post',this.APIconfig.api_root.subhome.s_category,{ //分类
				pid:e.id,
				page:1
			},function(self,res){
				self.top_class = res.data
			})
		}
	}
</script>

<style lang="scss">
	.content {
		padding-top: calc(205rpx + var(--status-bar-height));
	}
	.content_top{
		position: fixed;
		z-index: 999;
		top: var(--status-bar-height);
		left: 0;
		width: 100%;
		background: #FFFFFF;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		height: 105rpx;
		padding: 0 20rpx;
		image{
			height: 50rpx;
			width: 50rpx;
			margin-left: 10rpx;
		}
		.top_returns image{
			height: 31rpx;
			width: 31rpx;
			padding-right: 10rpx;
		}
		.top_search{
			flex-grow: 2;
			height: 65rpx;
			line-height: 65rpx;
			text-align: center;
			font-weight:500;
			font-size: 32rpx;
		}
	}
	
	.tab_list{
		position: fixed;
		z-index: 999;
		top: calc(var(--status-bar-height) + 105rpx);
		left: 0;
		width: 100%;
		box-sizing: border-box;
		background: #F6F6F7;
		color: #666666;
		font-size: 28rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		view{
			height: 100rpx;
			line-height: 100rpx;
			
		}
		.list_all{
			display: flex;
			align-items: center;
			justify-content: center;
			width: 50%;
			view{
				color: #D80000;
			}
		}
	}
	.all_img{
		transition: .3s;
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
		box-sizing: border-box;
		z-index: 998;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		transition: .3s;
		transform: translateY(-100%);
		background: #FFFFFF;
		font-size: 28rpx;
		padding: 40rpx 20rpx;
	}
	.mask_none{
		transform: translateY(-100%);
	}
	.mask_show{
		transform: translateY(0%);
	}
	.down_box {
		&:after {
		    content: ""; 
		    width:180rpx;
		}
		.down_list{
			width: 180rpx;
			height: 60rpx;
			line-height: 60rpx;
			border-radius: 60rpx;
			background: #F1F1F1;
			text-align: center;
			margin-bottom: 30rpx;
			&:nth-of-type(1){
				color: #D80000;
			}
		}
	}
	.shopp_tab{
		display: flex;
		padding: 10rpx;
		.shopp_list{
			width: 50%;
			font-size: 24rpx;
			padding: 0 10rpx;
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
