<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<view class="top">
			<image src="../../static/image/com_page/returns.png" @tap="service.returns()" mode="widthFix"></image>
			<text>文章</text>
			<image src="../../static/image/com_page/search.png" mode="widthFix"></image>
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
		</view>
		<view class="down_box"  :class="show===false ? 'mask_none' : show===true ? 'mask_show' : ''" >
			<view class="down_list">
				全部
			</view>
			<view class="down_list">
				早教
			</view>
		</view>
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	export default{
		data(){
			return{
				title:'文章',
				cur:'',
				show:false,
			}
		}
	}
</script>

<style lang="scss">
	.content{
		// position: relative;
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
			.all_img{
				transition: .3s;
				width: 20rpx;
				height: 20rpx;
				margin-left: 20rpx;
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
			top: calc(var(--status-bar-height) + 205rpx);//
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
	}
</style>
