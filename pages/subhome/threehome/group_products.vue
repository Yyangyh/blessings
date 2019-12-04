<template>
	<view class="content">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		</view>
		<share ref="share" :datas='share_arr'></share>
		<view class="top_img">	
			<image :src="data.thumb" mode="scaleToFill"></image>
		</view>
		<view class="product_price">
			<view class="pr_top">
				{{data.title}}
			</view>
			<view class="price">
				<view class="">
					<text>￥{{data.price}}</text>
					<image src="../../static/image/secondary/team.png" mode=""></image>
					<text>{{data.groupnum}}人成团</text>
				</view>
				<text class="sell">已售{{data.sales}}</text>
			</view>
			<view class="pr_bottom">
				<view class="pr_coupon">
					
					<text>拼团规则</text>
				</view>
				<view class="receive_co">
					<text>邀请好友组团</text>
					<!-- <image src="../../static/image/go.png" mode=""></image> -->
				</view>
			</view>
		</view>
		
		<view class="pro_img">
			<view class="img_test">
				产品介绍
			</view>
			<rich-text  class="test" :nodes="data.content"></rich-text>
		</view>
		
		
		<view class="bottom_tab">
			<view class="tab_list tab_right">
				<view class="single" @click="purchase('single')">
					<view class="">
						￥{{data.groupsprice}}
					</view>
					<view class="">
						单独购买
					</view>
				</view>
				<view class="group" @click="purchase('groups')">
					<view class="">
						￥{{data.price}}
					</view>
					<view class="">
						参与拼团
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import share from'../../common/share.vue'
	export default {
		components:{
			share
		},
		data() {
			return {
				show: 0,
				data:'',
				id:'',
				transparency:0,
				share_arr:{}
			}
		},
		onPageScroll(e){
			// console.log(e)
			if(e.scrollTop >= 150){
				this.transparency  = 1
			}else{
				this.transparency  = 0
			}
			
		},
		methods:{
			returns(){
				this.common.returns(this)
			},
			jump(url){
				uni.navigateTo({
					url:url
				})
			},
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
				this.$refs.share.share();
				// #endif
			},
			purchase(data){
				if(data == 'single'){
					uni.navigateTo({
						url:'threeindex/group_order?type='+data+'&id='+this.id
					})
				}else{
					uni.navigateTo({
						url:'threeindex/operation?type='+data+'&id='+this.id
					})
				}
				
			}
		},
		onLoad(options) {
			
			this.share_arr.Url = 'http://wx.huanqiutongmall.com/h5/#/pages/subindex/group_products?id='+options.id
			this.id = options.id
			
			this.service.entire(this,'get',this.APIconfig.api_root.subhome.threehome.g_Detail,{id:options.id},function(self,res){
				console.log(res)
				self.data = res.data.goods
				
				self.share_arr.Title = self.data.title//分享
				self.share_arr.ImageUrl = self.data.thumb//分享
				
				
			})
		}
	}
</script>

<style scoped>
	.content{
		background: #F1F1F1;
		padding-bottom: 120rpx;
		padding-top: 0;
	}
	.top_img{
		width: 100%;
		height: 360rpx;
		position: relative;
	}
	.top_img image{
		width: 100%;
		height: 100%;
		
	}
	.product_price{
		background: #fff;
		font-size: 32rpx;
		border-top: 2rpx solid #F1F1F1;
		margin-bottom: 20rpx;
	}
	.product_price .pr_top{
		/* font-weight: bold; */
		font-size: 32rpx;
		padding: 20rpx;
		
	}
	.product_price .price{
		display: flex;
		justify-content: space-between;
		padding: 20rpx;
		border-bottom: 2rpx solid #F4F4F4;
		color: #999;
		font-size: 30rpx;
		align-items: center;
	}
	.product_price .price view{
		display: flex;
		align-items: center;
	}
	.product_price .price image{
		height: 34rpx;
		width: 34rpx;
		margin: 0 20rpx 0 30rpx;
	}
	.product_price .price view text:nth-of-type(1){
		font-weight: bold;
		color: #FF431D;
		font-size: 36rpx;
	}
	.product_price .price view text:nth-of-type(2){
		font-size: 28rpx;
	}
	.product_price .price .sell{
		font-size: 24rpx;
	}
	.product_price .pr_bottom {
		display: flex;
		justify-content: space-between;
		padding: 20rpx;
	}
	.product_price .pr_bottom image{
		width: 32rpx;
		height: 32rpx;
	}
	.product_price .pr_bottom .pr_coupon{
		display: flex;
		align-items: center;
		color: #333333;
		font-size: 30rpx;
		
	}
	.product_price .pr_bottom .pr_coupon image{
		margin-right: 20rpx;
	}
	.product_price .pr_bottom .receive_co{
		display: flex;
		align-items: center;
		text-align: right;
		color: #999;
		font-size: 24rpx;
	}
	.pr_shop{
		background: #fff;
		display: flex;
		justify-content: space-between;
		height: 120rpx;
		line-height: 120rpx;
		padding: 0 20rpx;
	}
	.pr_shop .sh_top{
		display: flex;
		align-items: center;
		color: #333333;
		font-size: 32rpx;
		font-weight: 400;
	}
	.pr_shop .sh_top image{
		height: 90rpx;
		width: 90rpx;
		margin-right: 20rpx;
	}
	.pr_shop .sh_bottom {
		display: flex;
		align-items: center;
		font-size: 24rpx;
		color: #999;
		padding-right: 2%;
	}
	.pr_shop .sh_bottom image{
		height: 32rpx;
		width: 32rpx;
	}
	
	.user_comment {
		background: #fff;
		margin-top: 20rpx;
		padding: 20rpx 30rpx;
	}
	
	.user_comment .user_top {
		font-weight: bold;
		font-size: 28rpx;
	
	}
	
	.user_comment .user {
		display: flex;
		align-items: center;
		margin: 20rpx 0;
	}
	
	.user_comment .user .user_img {
		width: 90rpx;
		height: 90rpx;
	}
	
	.user_comment .user .user_test {
		margin: 0 20rpx;
		font-size: 32rpx;
	}
	
	.user_comment .user .user_test view {
		font-weight: bold;
		color: #333333;
		font-size: 28rpx;
	}
	
	.user_comment .user .user_test text {
		font-size: 24rpx;
		color: #999999;
		
	}
	
	.user_comment .user .user_star {
		align-self: flex-start;
	}
	
	.user_comment .user .user_star image {
		height: 26rpx;
		width: 26rpx;
	}
	
	.user_comment .com_content .content_test view {
		font-size: 24rpx;
		color: #666666;
	}
	
	.user_comment .com_content .content_img image {
		height: 120rpx;
		width: 120rpx;
		margin-right: 20rpx;
		margin-top: 30rpx;
	}
	
	.user_comment .com_content .more {
		font-size: 32rpx;
		color: #666666;
		margin: 20rpx 0;
	}
	.pro_img{
		
	}
	.pro_img .img_test{
		text-align: center;
		padding: 30rpx;
		font-size: 32rpx;
	}
	.pro_img image{
		width: 100%;
	}
	.recommend .recommend_test{
		font-size: 32rpx;
		font-weight: bold;
		padding: 30rpx 20rpx;
		background: #fff;
		margin-top: 30rpx;
	}
	.spot{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin-bottom: 20rpx;
		background: #fff;
	}
	.spot .sp_list{
		width: 45%;
		height: 400rpx;
		background: #fff;
		box-shadow: 0px 0px 4px #eee;
		margin-bottom: 30rpx;
		border-top-right-radius: 10rpx;
		border-top-left-radius: 10rpx;
	}
	.spot .sp_list image{
		width: 100%;
		height: 200rpx;
	}
	.ticket{
		color: #666666;
		font-size: 28rpx;
		margin: 10rpx 0;
		padding: 0 10rpx;
	}
	.address{
		color: #333;
		font-size: 24rpx;
		font-weight: bold;
		padding: 0 10rpx;
		margin-bottom: 20rpx;
	}
	.tips{
		color: #00D3B3;
		font-size: 24rpx;
		border: 1rpx solid #00D3B3;
		padding: 2rpx 10rpx;
		border-radius: 5rpx;
		margin-left: 20rpx;
		font-weight: 100;
	}
	.spot .sp_list .bottom{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 10rpx 0;
		padding: 0 10rpx;
	}
	.spot .sp_list .bottom .price{
		color: #FF431D;
	}
	
	.spot .sp_list .bottom .data{
		color: #999999;
		font-size: 26rpx;
	}
	.bottom_tab{
		background: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28rpx;
		padding: 20rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		box-sizing: border-box;
	}
	.bottom_tab .tab_list{
		text-align: center;
		color: #999999;
	}
	.bottom_tab .tab_list image{
		height: 44rpx;
		width: 44rpx;
		
	}
	
	.bottom_tab .tab_right{
		font-size: 32rpx;
		display: flex;
		width: 100%;
	}
	.bottom_tab .tab_right .single{
		background: #1D9DFF;
		color: #fff;
		font-size: 24rpx;
		width: 50%;
		height: 80rpx;
		border-bottom-left-radius: 40rpx;
		border-top-left-radius: 40rpx;
	}
	.bottom_tab .tab_right .single view:nth-of-type(1){
		font-size: 30rpx;
	}
	.bottom_tab .tab_right .group{
		background: #1D74FF;
		color: #fff;
		font-size: 24rpx;
		width: 50%;
		height: 80rpx;
		border-bottom-right-radius: 40rpx;
		border-top-right-radius: 40rpx;
	}
	.bottom_tab .tab_right .group view:nth-of-type(1){
		font-size: 30rpx;
	}
	.bottom_tab .tab_right text{
		display: inline-block;
		height: 80rpx;
		line-height: 80rpx;
		padding: 0 30rpx;
		font-size: 30rpx;
	}
	.bottom_tab .tab_right text:nth-of-type(1){
		background: #1D9DFF;
		border-bottom-left-radius: 40rpx;
		border-top-left-radius: 40rpx;
	}
	.bottom_tab .tab_right text:nth-of-type(2){
		background: #1D74FF;
		border-bottom-right-radius: 40rpx;
		border-top-right-radius: 40rpx;
	}
</style>
