<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<returns :titles='title'></returns>
		<view class="empty"  v-if="list == ''">
			<image src="/static/image/subuser/empty.png" mode="widthFix"></image>
			<view class="">
				暂无评论
			</view>
		</view>
		<view class="all" v-else-if="list != ''">
			<view class="user_comment">
				用户评论
			</view>
			<view class="box" v-for="(item,index) in list" :key="index">
				<view class="avatar">
					<image :src="item.user.avatar" mode=""></image>
					<view class="detail">
						<view class="name">
							<view style="margin-right: 27rpx;">{{item.user.user_name_view}}</view>
							<view v-if="item.rating==1">
								<image src="/static/image/subuser/littlestar.png" mode=""></image>
							</view>
							<view v-if="item.rating==2">
								<image src="/static/image/subuser/littlestar.png" mode=""></image>
								<image src="/static/image/subuser/littlestar.png" mode=""></image>
							</view>
							<view v-if="item.rating==3">
								<image src="/static/image/subuser/littlestar.png" mode=""></image>
								<image src="/static/image/subuser/littlestar.png" mode=""></image>
								<image src="/static/image/subuser/littlestar.png" mode=""></image>
							</view>
							<view v-if="item.rating==4">
								<image src="/static/image/subuser/littlestar.png" mode=""></image>
								<image src="/static/image/subuser/littlestar.png" mode=""></image>
								<image src="/static/image/subuser/littlestar.png" mode=""></image>
								<image src="/static/image/subuser/littlestar.png" mode=""></image>
							</view>
							<view v-if="item.rating==5">
								<image src="/static/image/subuser/littlestar.png" mode=""></image>
								<image src="/static/image/subuser/littlestar.png" mode=""></image>
								<image src="/static/image/subuser/littlestar.png" mode=""></image>
								<image src="/static/image/subuser/littlestar.png" mode=""></image>
								<image src="/static/image/subuser/littlestar.png" mode=""></image>
							</view>
						</view>
						<view class="day">
							{{item.add_time_date}}
						</view>
					</view>
				</view>
				<view class="article">
					{{item.content}}                     
				</view>
				<block>
					<view class="pics">
						<view v-for="(value,ins) in item.images" :key="ins" @click="see(index,ins)">
							<image :src="value" mode=""></image>
						</view>
					</view>
				</block>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	import returns from "../../common/returns.vue"
	export default {
		data() {
			return {
				title: '评论',
				list:[]
			}
		},
		components: {
			returns
		},
		methods:{
			see(index,ins){ //预览图片
				uni.previewImage({
					urls: [this.list[index].images[ins]],
				});
			}
		},
		onLoad(e) {
			const {goods_id} = e
			this.service.entire(this, 'post', this.APIconfig.api_root.subuser.threeuser.s_good_Comments, {
				goods_id:goods_id, //商品id
				page:1
			}, function(self, res) {
				self.list = res.data.data
			})
		}
	}
</script>

<style>
	page {
		background: #fff;
	}
	.empty{
		padding-top: 120rpx;
		text-align: center;
		color: #999999;
		font-size: 24rpx;
	}
	.empty image{
		height: 293rpx;
		width: 309rpx;
	}
	.all{
		padding: 0 44rpx;
		box-sizing: border-box;
		background: #FFFFFF;
	}
	.box{
		width: 100%;
		
	}
	.user_comment{
		color: #333333;
		font-size: 32rpx;
		padding-top:40rpx;
	}
	.avatar{
		width: 100%;
		height: 80rpx;
		margin: 25rpx 0;
		display: flex;
		align-items: center;
	}
	.avatar>image{
		width: 80rpx;
		height: 80rpx;
		margin-right: 31rpx;
		border-radius: 50%;
	}
	.name{
		display: flex;
		align-items: center;
		font-size: 24rpx;
		margin-bottom: 6rpx;
		color: #333333;
	}
	.name image{
		width: 14rpx;
		height: 14rpx;
		margin-right: 12rpx;
	}
	.day{
		font-size: 24rpx;
		color: #999999;
	}
	.article{
		width: 100%;
		padding-right: 12rpx;
		margin-bottom: 22rpx;
		box-sizing: border-box;
		font-size: 24rpx;
		color: #666666;
	}
	.pics {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		/* height: 120rpx; */
		padding-bottom: 28rpx;
		border-bottom: 2rpx solid #F5F5F5;
	}
	.pics image{
		width: 150rpx;
		height: 130rpx;
		margin-right: 20rpx;
	}
</style>
