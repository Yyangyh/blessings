<template>
	<view class="content">
		<view class="status_bar">
				
		</view >
		<view class="top">
			<image src="/static/image/com_page/returns.png" @tap="service.returns()" mode="widthFix"></image>
			<text>{{title}}</text>
			<text @tap="tips">分享</text>
		</view>
		<share ref="share" :datas='share_arr'></share>
		<image :src="$api_img()+img" mode="widthFix"></image>
		<!-- #ifdef APP-PLUS -->
		<view class="line" v-for="(item,index) in dataList" @tap="$jump('./topic?id='+item.id)">
			<view class="l-left">{{item.name}}</view>
			<view class="l-right">
				<text>开始测试</text>
				<image src='../../static/image/index/go1.png' mode="widthFix"></image>
			</view>
		</view>
		<!-- #endif -->
		<!-- #ifdef H5 -->
		
		<view class="download" @tap="$jump('../login/reg?code='+code)">
			下载APP观看精彩内容
		</view>
		
		<!-- #endif -->
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
import share from'../common/share.vue'
import returns from '../common/returns.vue'
	export default{
		components:{
			returns,
			share
		},
		data(){
			return{
				title:'',
				dataList:[],
				img:'',
				share_arr:{},
				code:''
				
			}
		},
		methods:{
			tips(){ //分享
				// #ifdef H5
				uni.showModal({
				    title: '提示',
				    content: '请点击右上角选择分享！',
					showCancel:false,
				    success: function (res) {
				       
				    }
				});
				// #endif
				// #ifdef APP-PLUS
					this.$refs.share.share()
				// #endif
			} 
		}, 
		onLoad(e){
			this.share_arr.Url = 'https://www.wufu-app.com/h5/#/pages/subindex/listbox?id='+e.id+'&name='+e.name+'&img='+e.img
			this.title = e.name;
			this.img = e.img;
			if(e.code)this.code = e.code
			this.service.entire(this,'post',this.APIconfig.api_root.subindex.s_test_classify,{
				id:e.id,
			},function(self,res){
				self.dataList =res.data
				self.share_arr.Title =  res.data[0].name//分享
				self.share_arr.Summary =  res.data[0].share_des//分享
				self.share_arr.ImageUrl = self.$api_img() + res.data[0].share_img//分享
			})
		}
	}
</script>

<style lang="scss">
	.content{
		/*  #ifdef  H5  */
		padding-bottom: 80rpx;
		/*  #endif  */
	}
	page{
		background-color: #F6F6F7;
	}
	image{
		width: 100%;
		height: 500rpx;
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
	.line{
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #FFFFFF;
		padding: 20rpx;
		margin-bottom: 20rpx;
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
	.download{
		width: 100%;
		background: #fff;
		position: fixed;
		color: #FE0000;
		background: #FCCF00;
		left: 0;
		bottom: 0rpx;
		box-sizing: border-box;
		height: 80rpx;
		line-height: 80rpx;
		padding: 0 21rpx;
		text-align: center;
	}
</style>
