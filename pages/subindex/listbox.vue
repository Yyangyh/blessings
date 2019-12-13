<template>
	<view class="content">
		<view class="status_bar">
				
		</view >
		<returns :titles='title'></returns>
		<view class="line" v-for="(item,index) in dataList" @tap="$jump('./topic?id='+item.id)">
			<view class="l-left">{{item.name}}</view>
			<view class="l-right">
				<text>开始测试</text>
				<image src='../../static/image/index/go1.png' mode="widthFix"></image>
			</view>
		</view>
		<!-- <view class="line">
			<view class="l-left">试题</view>
			<view class="l-right">
				<text>已测</text>
				<image src='../../static/image/index/go1.png'></image>
			</view>
		</view> -->
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
				title:'',
				dataList:[],
				
			}
		},
		onLoad(e){
			this.title = e.name;
			console.log(e)
			this.service.entire(this,'post',this.APIconfig.api_root.subindex.s_test_classify,{
				id:e.id,
			},function(self,res){
				console.log(res)
				self.dataList =res.data
			})
		}
	}
</script>

<style lang="scss">
	.content{
		background-color: #F6F6F7;
		width: 100%;
		height: 70vh;
		
		.line{
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: #FFFFFF;
			padding: 20rpx;
			margin-top:30rpx ;
			.l-left{
				font-size: 28rpx;
			}
			.l-right{
				font-size: 28rpx;
				color:#666666;
				display: flex;
				align-items: center;
				image{
					width: 35rpx;
					height: 34rpx;
					margin-left: 10rpx;
				}
			}
		}
	}
</style>
