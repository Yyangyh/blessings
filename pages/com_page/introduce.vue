<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<block v-if="dataList">
			<view class="top_top"  >
				<view class="Image">
					<image :src="$api_img()+dataList.techerInfo.head_pic" mode="scaleToFill"></image>
				</view>
				<view class="t_right">
					<view class="">{{dataList.techerInfo.name}}</view>
					<view class="">{{dataList.techerInfo.position}}</view>
				</view>
			</view>
			<!-- <view class=" in_text" v-if="dataList">
				{{dataList.techerInfo.content}}
			</view> -->
			<rich-text :nodes="dataList.techerInfo.content"></rich-text>
			
		</block>
		
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	export default{
		components:{
			returns
		},
		data(){
			return{
				title:'讲师介绍',
				dataList:'',
			}
		},
		onLoad(e) {
			console.log(e.techer_id)
			this.service.entire(this,'post',this.APIconfig.api_root.com_page.v_techerDetail,{
				techer_id:e.techer_id
			},function(self,res){
				console.log(res)
				self.dataList = res.data
			})
		}
	}
</script>

<style lang="scss">
	.top_top{
		display: flex;
		align-items: center;
		margin: 38rpx 20rpx;
		image{
			width: 88rpx;
			height: 88rpx;
			border-radius: 50rpx;
		}
		.t_right{
			margin-left: 27rpx;
			margin-top: 20rpx;
			view:first-child{
				font-size: 28rpx;
			}
			view:last-child{
				font-size: 24rpx;
				color:#999999;
				margin-top: 20rpx;
			}
		}
	}
	.in_text{
		padding: 0 20rpx;
		font-size: 28rpx;
		line-height: 50rpx;
		text-indent: 2em;
	}
	.Image{
		width: 88rpx;
		height: 88rpx;
		border-radius: 50rpx;
		
	}
</style>
