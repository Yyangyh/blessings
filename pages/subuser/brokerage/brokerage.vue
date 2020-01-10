<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<returns :titles='title'></returns>
		<view class="worp">
			<!-- <view class="top">
				<view class="img_box">
					<image :src='$api_img()+user.avatar' mode="scaleToFill"></image>
				</view>
				<view class="msg">
					<view>{{user.username}}</view>
					<view>{{user.mobile}}</view>
					<view v-if="data">推荐人：{{data.user.up_name}}</view>
				</view>
			</view>
			<view class="line" v-if="data">
				<text>我的邀请码:</text>
				<text>{{data.user.invite_code}}</text>
			</view>
			<hr />
			<view class="line1" @tap="$jump('./invite')">
				<text class="">我的推广二维码</text>
				<image src='../../../static/image/brokerage/QR.png' mode="widthFix"></image>
			</view>
			<hr /> -->
			<view class="line2">
				<view>
					<view class="money">{{data.can_cash}}</view>
					<view class="textss">可提奖学金（元）</view>
				</view>
				<view class="btn" @tap="$jump('./withdraw?deposit='+data.can_cash)">提现奖学金</view>
			</view>
		</view>
		<view class="classify">
			<view class="box">
				<view class="box-list" style="border: 1rpx solid #EEEEEE;"  @tap="$jump('./sales')">
					<image src="../../../static/image/brokerage/yongjin.png" mode="widthFix"></image>
					<view>
						<view class="yj">奖学金</view>
						<view class="toutcome">{{data.total_commission}}元</view>
					</view>
				</view>
				<view class="box-list" style="border: 1rpx solid #EEEEEE;" @tap="$jump('./order')">
					<image src="../../../static/image/brokerage/dingdan.png" mode="widthFix"></image>
					<view>
						<view class="yj">分享订单</view>
						<view class="toutcome">{{data.order_count}}笔</view>
					</view>
				</view>
			</view>
			
			<view class="box">
				<view class="box-list" style="border: 1rpx solid #EEEEEE;"  @tap="$jump('./record')">
					<image src="../../../static/image/brokerage/tixian.png" mode="widthFix"></image>
					<view>
						<view class="yj">提现记录</view>
						<view class="toutcome">{{data.cash_count}}笔</view>
					</view>
				</view>
				<!-- <view class="box-list" style="border: 1rpx solid #EEEEEE;"  @tap="$jump('./schoolfellow')">
					<image src="../../../static/image/brokerage/tongxue.png" mode="widthFix"></image>
					<view>
						<view class="yj">我的同学</view>
						<view class="toutcome">{{data.lower_count}}人</view>
					</view>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	export default{
		components:{
			returns
		},
		data(){
			return{
				title:'我的账户',
				data:'',
				user:this.$store.state.user
			}
		},
		
		onShow() {
			this.service.entire(this,'post',this.APIconfig.api_root.subuser.u_distribute,{user_id:this.$store.state.user.id},function(self,res){
				console.log(self.$store.state.user)
				self.data = res.data
			})
			
		}
		
	}
</script>

<style lang="scss">
	page{
		// width: 100%;
		// height: 100%;
		background-color: #F6F6F7;
	}
	.content{
		width: 100%;
		
		background-color: #F6F6F7;
		.worp{
			background-color: #FFFFFF;
			width: 100%;
			hr{
				height:1rpx;
				border: none;
				border-top:1px solid #F4F4F4;
				}
			.top{
				background-color: #EF7C38;
				width: 100%;
				height: 160rpx;
				display: flex;
				align-items: center;
				.img_box{
					width: 100rpx;
					height: 100rpx;
					margin: 0 29rpx 0 34rpx; 
					border-radius: 50%;
					overflow: hidden;
				}
				image{
					height: 100%;
					width: 100%;
				}
				.msg{
					font-size: 28rpx;
					color: #FFFFFF;
					flex-direction:column;
					justify-content: space-between;
				}
			}
			.line{
				font-size: 24rpx;
				margin: 35rpx 0 35rpx 21rpx;
				text{
					margin-right: 5rpx;
				}
			}
			.line1{
				font-size: 24rpx;
				padding: 30rpx 25rpx 30rpx 21rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				image{
					width: 36rpx;
					height: 36rpx;
				}
			}
			.line2{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 30rpx 25rpx;
				.money{
					color: #D80000;
					font-size: 32rpx;
					font-weight: 500rpx;
					margin: 10rpx;
				}
				.textss{
					font-size: 24rpx;
					padding: 0 0 10rpx 0;
				}
				.btn{
					width:180rpx;
					height:60rpx;
					background:rgba(216,0,0,1);
					border-radius:30rpx;
					text-align: center;
					color: #FFFFFF;
					line-height: 60rpx;
					font-size: 28rpx;
				}
			}
		}
		.classify{
			background: #FFFFFF;
			width: 100%;
			margin-top:30rpx ;
			.box{
				display: flex;
				.box-list{
					width: 50%;
					height: 161rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 24rpx;
					// padding-left: 15%;
					image{
						width: 55rpx;
						height: 55rpx;
						margin-right: 10rpx;
					}
					.toutcome{
						color: #D80000;
					}
				}
			}
		}
	}
</style>
