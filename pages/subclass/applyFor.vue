<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<form>
			<view class="write">
				<view class="msg">
					<text>联系人</text><text class="t2">*</text>
					<input type="text" placeholder="您的名字">
				</view>
				<hr />
				<view class="msg">
					<text>手机号</text><text class="t2">*</text>
					<input type="text" placeholder="您的手机号码">
				</view>
				<hr />
				<view>请仔细填写联系方式，保证我们能尽快联系到您~</view>
			</view>
			
			<view class="write">
				<view class="msg">
					<text>身份证号</text><text class="t2">*</text>
					<input type="text" placeholder="填写您的身份证号">
				</view>
			</view>
			<view class="write">
				<view class="msg1">
					<text>性别</text>
					<view>
						<text>男</text>
						<image src="../../static/image/index/go.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view class="write">
				<view class="msg">
					<text>文化程度</text><text class="t2">*</text>
					<input type="text" placeholder="请填写文字">
				</view>
				<hr />
				<view class="msg1">
					<text>申请类别</text>
					<view>
						<text>初级</text>
						<image src="../../static/image/index/go.png" mode="widthFix"></image>
					</view>
				</view>
				<hr />
				<view class="msg1">
					<text>证件类别</text>
					<view>
						<text>家长证</text>
						<image src="../../static/image/index/go.png" mode="widthFix"></image>
					</view>
				</view>
				<hr />
				<view class="msg2">
					<text class="t1">收货地址</text><text class="t2">*</text>
					<textarea cols='2'rows="16" value="" placeholder="请填写详细地址" />
				</view>
			</view>
		</form>
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
				title:'申请'
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.content{
		background-color: #F6F6F6;
		width: 100%;
		height: 100vh;
		hr{
			height:1rpx;
			border: none;
			border-top:1rpx solid #F4F4F4;
			width: 97%;
			margin: 0 auto;
		}
		.write{
			background-color: #FFFFFF;
			width: 100%;
			margin-bottom: 30rpx;
			.msg{
				display: flex;
				align-items: center;
				padding: 20rpx 30rpx;
				text:first-child{
					font-size: 28rpx;
					margin-right: 30rpx;
				}
				.t2{
					font-size: 13rpx;
					color: #FF431D;
				}
				input{
					font-size: 28rpx;
				}
				
			}
			.msg2{
				display: flex;
				padding: 20rpx 30rpx;
				.t1{
					font-size: 28rpx;
					margin-right: 30rpx;
				}
				.t2{
					font-size: 13rpx;
					color: #FF431D;
				}
				textarea{
					width: 70%;
					border: 1rpx solid blue;
				}
			}
			.msg1{
				display: flex;
				align-items: center;
				padding: 20rpx 30rpx;
				font-size: 28rpx;
				justify-content: space-between;
				image{
					width: 16rpx;
					height: 31rpx;
				}
				text{
					margin-right:20rpx ;
				}
			}
			view{
				font-size: 24rpx;
				padding: 20rpx 30rpx;
			}
		}
		
	}
</style>
