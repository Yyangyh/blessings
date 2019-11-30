<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<view class="activitys">
			<image src='../../static/image/index/sm.png'></image>
			<view class="a-right">
				<view class="theme">让爱回家|高分孩子·智慧父母一大型公益巡讲</view>
				<view class="line">
				  <image src="../../static/image/index/apply.png"></image>
				  <text>已报名37人</text>
				  <text>限1000人报名</text>
				 </view>
				 <view class="price">￥100.0/399积分</view>
			</view>
		</view>
		<view class="information">
			<form>
				<view class=""><text>姓名：</text><input type="text" placeholder="请输入姓名" v-model="name"></view>
				<hr />
				<view class=""><text>手机号码：</text><input type="text" placeholder="请输入手机号码" v-model="phone" value></view>
				<hr />
				<view class=""><text>备注：</text><input type="text" placeholder="请输入备注"></view>
				<hr />
			</form>
			<view>
				<button form-type="submit" @click="register()">提交</button>
			</view>
		</view>
		<!-- 提交成功弹框 -->
		<view class="k">
			提交成功
		</view>
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
				title:'立即报名',
				name:'',
				phone:''
			}
		},
		methods:{
			 register(){
				  let tel = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(this.phone);
				   if (this.phone == "" || this.name == "") {
					  uni.showToast({
					  	icon:'none',
					  	title:'输入框不能为空!'
					  })
				  }else if(!tel){
					  uni.showToast({
					  	icon:'none',
					  	title:'请输入正确的11位手机号码!'
					  })
				  }
			 }
		}
	}
</script>

<style lang="less">
	.content{
		width: 100%;
		height: 100vh;
		background-color: #F6F6F6;
		position: relative;
		.activitys{
			background-color: #FFFFFF;
			padding: 31rpx 25rpx 31rpx 31rpx;
			display: flex;
			image{
				width: 275rpx;
				height: 177rpx;
				margin: 31rpx 31rpx 31rpx 0;
			}
			.a-right{
				.theme{
					font-size: 24upx;
					color:#333333;
					margin:20upx 0 0upx 0;
				}
				.line{
					display: flex;
					align-items: center;
					image{
						width: 32rpx;
						height: 32rpx;
						margin-left: -5rpx;
					}
					text{
						font-size: 28rpx;
						color:#666666;
						margin-right: 6rpx;
					}
					.theme1{
						font-size: 24upx;
						color:#333333;
					}
				}
				.price{
					font-size: 25rpx;
					font-weight: bold;
					color:#D80000;
					letter-spacing: 3rpx;
				}
			}
		}
		.information{
			background-color: #FFFFFF;
			width: 100%;
			height:70vh;
			padding: 40rpx;
			margin: 30rpx 0;
			hr{
				height:1rpx;
				border: none;
				border-top:1px solid #F4F4F4;
				width: 96%;
				margin: 0 100rpx 0 0;
			}
			view{
				display: flex;
				font-size: 28rpx;
				margin: 20rpx 0;
				align-items: center;
			}
			button{
				width: 600rpx;
				height: 80rpx;
				font-size: 30rpx;
				color: #FFFFFF;
				text-align: center;
				line-height: 80rpx;
				background-color: #D80000;
				border: none;
				border-radius: 40rpx;
				letter-spacing: 10rpx;
				margin: 30rpx 2rpx 0 28rpx;
				
			}
		}
		.k{
			width: 254rpx;
			height: 106rpx;
			color: #FFFFFF;
			background:rgba( 0,0,0,.5);
			text-align: center;
			line-height: 106rpx;
			position: absolute;
			top: 400rpx;
			left: 0;
			right: 0;
			margin: auto;
			display: none;
		}
	}
</style>
