<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<view class="top">
			<image src="/static/image/com_page/returns.png" mode="widthFix" @click="returns()"></image>
			<text>拼团</text>
			<text @click="$jump('threehome/my_group')">我的团</text>
		</view>
		<view class="tab" v-for="(item,index) in data" :key='item.id'>
			<view class="tab_top"  @click="$jump('./threehome/group_products?id='+item.id)"> 
				<image :src="item.thumb" mode="aspectFill"></image>
				<view class="tab_right">
					<!-- <view class="test_one">
						{{item.category_name}}
					</view> -->
					<view class="test_two">
						{{item.title}}
					</view>
					<view class="price">
						拼团价
						<text class="price_one">￥{{item.price}}</text>
						<text class="price_two">￥{{item.groupsprice}}</text>
					</view>
				</view>
			</view>
			<view class="tab_bottom">
				<view class="bo_one">
					<image src="/static/image/subhome/team.png" mode="widthFix"></image>
					<text>{{item.groupnum}}人成团</text>
				</view>
				<view class="bo_two"  @click="$jump('./threehome/group_products?id='+item.id)">
					立即参团
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	
	export default{
		data() {
			return {
				data:''
			}
		},
		methods:{
			returns(){
				uni.switchTab({
				    url: '/pages/index/home'
				});
			},
			
		},
		
		onShow() {
			this.service.entire(this,'get',this.APIconfig.api_root.subhome.g_lists,{
				page:1
			},function(self,res){
				self.data = res.data.data
			})
		}
	}
</script>

<style scoped lang="scss">
	page {
		height: 100%;
		width: 100%;
		background: #F4F4F4 ;
	}
	
	.content{
		padding-top: 105rpx;
		height: 100%;
		width: 100%;
		background: #F4F4F4 ;
	}
	.top{
		height: 105rpx;
		width:100%;
		position: fixed;
		top:var(--status-bar-height);
		left: 0;
		background: #FFF;
		z-index: 888;
		padding: 0 40rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
		margin-bottom: 24rpx;
		background: #fff;
		box-shadow:0px 2rpx 4rpx 0px rgba(0, 0, 0, 0.1);
		image{
			height: 40rpx;
			width: 40rpx;
		}
		text:nth-of-type(2){
			color: #666666;
			font-size: 28rpx;
			font-weight: 400;
			display: inline-block;
		}
	}
	.tab{
		background: #fff;
		margin: 20rpx 20rpx 16rpx 20rpx;
		border-radius:10rpx;
		height: 300rpx;
		.tab_top{
			display: flex;
			padding: 20rpx 0;
			margin: 0 20rpx;
			border-bottom: 2rpx solid #F1F1F1;
			.tab_right{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				margin-left: 26rpx;
				.test_two{
					color: #333;
					font-size: 30rpx;
				}
				.price{
					color: #FF431D;
					font-size: 28rpx;
					.price_one{
						font-size: 36rpx;
						/* font-weight: bold; */
						margin-right: 8rpx;
					}
					.price_two{
						text-decoration:line-through;
						font-size: 28rpx;
						color: #999;
					}
				}
			}
			image{
				height: 142rpx;
				width: 220rpx;
			}
		}
		.tab_bottom{
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 92rpx;
			padding: 0 20rpx;
			.bo_one{
				display: flex;
				align-items: center;
				font-size: 28rpx;
				color: #666;
			}
			.bo_two{
				color: #fff;
				background: #D80000;
				width: 170rpx;
				height: 66rpx;
				line-height: 66rpx;
				border-radius: 66rpx;
				font-size: 28rpx;
				text-align: center;
			}
			image{
				height: 34rpx;
				width: 34rpx;
				margin-right: 20rpx;
			}
		}
	}
	
	
</style>
