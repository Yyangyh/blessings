<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<!-- <from> -->
			<view class="write">
				<view class="msg">
					<text>联系人</text><text class="t2">*</text>
					<input type="text" placeholder="您的名字">
				</view>
				<hr />
				<view class="msg">
					<text>手机号</text><text class="t2">*</text>
					<input type="text" placeholder="您的手机号码" >
				</view>
				<hr />
				<view class="t3">请仔细填写联系方式，保证我们能尽快联系到您~</view>
			</view>
			<view class="uploading">
				<view class="lines">
					<view class="l_felt">请上传营业执照</view>
					<view class="l_right">
						<image src="../../../static/image/subuser/photo.png" mode="widthFix"></image>
						<image src='../../../static/image/index/go.png' mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view class="uploading">
				<view class="lines">
					<view class="l_felt">法人身份证正面</view>
					<view class="l_right">
						<image src="../../../static/image/subuser/photo.png" mode="widthFix"></image>
						<image src='../../../static/image/index/go.png' mode="widthFix"></image>
					</view>
				</view>
				<hr />
				<view class="lines">
					<view class="l_felt">法人身份证反面</view>
					<view class="l_right">
						<image src="../../../static/image/subuser/photo.png" mode="widthFix"></image>
						<image src='../../../static/image/index/go.png' mode="widthFix"></image>
					</view>
				</view>
			</view>
		<!-- </from> -->
		<button type="default" @click="reveal=true">立即申请</button>
		<!-- 跳转框 -->
		<view class="mask_black" v-if="reveal">
			
		</view>
		<view class="dianzi">正在跳转电子签约…</view>
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
				cur:0,
				title:'立即申请',
				reveal:false
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		height: 92vh;
		background-color: #F6F6F7;
		button{
			width:710rpx;
			height:80rpx;
			background:rgba(216,0,0,1);
			border-radius:40rpx;
			color: #FFFFFF;
		}
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
			.t3{
				font-size: 24rpx;
				padding: 20rpx 30rpx;
			}
		}
		.uploading{
			background-color: #FFFFFF;
			width: 100%;
			margin-bottom: 30rpx;
			.lines{
				display: flex;
				align-items: center;
				margin: 0 35rpx 0 22rpx;
				justify-content: space-between;
				// border-bottom: 1rpx solid #F1F1F1;
				.l_felt{
					font-size: 28rpx;
					padding: 20rpx 0;
				}
				.l_right{
					display: flex;
					align-items: center;
					image:first-child{
						width: 49rpx;
						height:49rpx ;
						margin-right: 15rpx;
					}
					image:last-child{
						width: 16rpx;
						height: 31rpx;
					}
				}
			}
		}
		.dianzi{
			width:100%;
			position: fixed;
			left: 50%;
			transform: translateX(-50%);
			top:500rpx;
			z-index: 900;
			text-align: center;
			font-size: 28rpx;
			color:#FFFFFF;
		}
	}
</style>
