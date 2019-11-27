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
			<view class="">
				免费音频
			</view>
			<view class="">
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
				{{item.cl_name}}
			</view>
		</view>
		
				
		<view class="vider_content">
			<view class="content_list" v-for="(item,index) in video_list" :key='item.id' @tap="$jump('./video_details?id='+item.id)">
				<view class="list_img_box">
					<image :src="item.v_slide" mode="widthFix"></image>
				</view>
				<view class="list_right">
					<view class="list_one">
						{{item.long_title}}
					</view>
					<view class="list_two">
						{{item.view}}次观看
					</view>
					<view class="list_three">
						<view class="">
							{{item.is_free == 0? '￥'+item.group_price : '免费'}}
							
						</view>
						<view class="" v-if="item.is_free_vip == 1">
							VIP免费
						</view>
					</view>
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
				video_list:''
			}
		},
		onLoad(e) {
			this.title = e.title
			this.service.entire(this,'get',this.APIconfig.api_root.com_page.videoList,{
				v_pid:e.id
			},function(self,res){
				self.top_class = res.data.top_class
				self.video_list = res.data.video_list
			})
		}
	}
</script>

<style>
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
	}
	.content_top .top_returns image{
		height: 31rpx;
		width: 31rpx;
		padding-right: 10rpx;
	}
	.content_top .top_search{
		flex-grow: 2;
		height: 65rpx;
		line-height: 65rpx;
		text-align: center;
		font-weight:500;
		font-size: 32rpx;
	}
	
	
	.content_top image{
		height: 50rpx;
		width: 50rpx;
		margin-left: 10rpx;
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
		padding: 0 50rpx;
	}
	.tab_list view{
		height: 100rpx;
		line-height: 100rpx;
	}
	.tab_list .list_all{
		display: flex;
		align-items: center;
		color: #D80000;
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
	.down_box .down_list{
		width: 180rpx;
		height: 60rpx;
		line-height: 60rpx;
		border-radius: 60rpx;
		background: #F1F1F1;
		text-align: center;
		margin-bottom: 30rpx;
	}
	.down_box:after { 
	    content: ""; 
	    width:180rpx;
	} 
	.down_box .down_list:nth-of-type(1){
		color: #D80000;
	}
	.vider_content{
		padding: 0 20rpx;
		font-size: 24rpx;
	}
	.vider_content image{
		width: 268rpx;
		height: 179rpx;
		margin-right: 29rpx;
	}
	.vider_content .content_list{
		display: flex;
		margin: 30rpx 0;
	}
	.vider_content .content_list .list_right{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-bottom: 30rpx;
	}
	.list_one{
		padding-right: 10rpx;
	}
	 .list_two{
		color: #999999;
		margin: 10rpx 0;
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
