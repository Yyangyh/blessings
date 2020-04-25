<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<view class="top">
			<image src="../../static/image/com_page/returns.png" @tap="service.returns()" mode="widthFix"></image>
			<text>导师考证</text>
			<text @tap="$jump('./certificateList')">我的证书</text>
		</view>
		<image class="t_image" src="/static/image/subclass/background.jpg " mode="widthFix"></image>
		<view class='t_text'>
			
			<button type="default"  @tap="$jump('./applyFor')">立即申请</button>
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
				title:'导师考证'
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		height: 1229rpx;
		// background: url(../../static/image/subclass/background.png) no-repeat;
		// background-size: 100% 100%;
		font-size: 32rpx;
		// color: #FFFFFF;
		.top{
			position: fixed;
			width: 100%;
			z-index: 90;
			box-sizing: border-box;
			top: var(--status-bar-height);
			left: 0;
			display: flex;
			height: 105rpx;
			padding: 0 30rpx;
			color: #000000;
			// font-size: 32rpx;
			justify-content: space-between;
			align-items: center;
			background-color: #FFFFFF;
			image:first-child{
				width: 31rpx;
				height: 31rpx;
			}
			text:first-child{
				font-size: 32rpx;
			}
			text:last-child{
				font-size: 28rpx;
			}
		}
		.t_image{
			width: 100%;
			height: 1229rpx;
			position: absolute;
			top:calc(var(--status-bar-height) + 105rpx);
			left: 0;
			z-index: 88;
		}
		.t_text{
			width: 100%;
			position: absolute;
			top:calc(var(--status-bar-height) + 105rpx);
			left: 0;
			z-index: 999;
		}
		.text1{
			text-align: center;
			margin-top: 448rpx;
			color:#FFFFFF;
		}
		.text2{
			text-align: center;
			margin-top: 10rpx;
			color:#FFFFFF;
		}
		button{
			width:386rpx;
			height:80rpx;
			text-align: center;
			font-size: 32rpx;
			color: #FFFFFF;
			line-height: 80rpx;
			border-radius: 40rpx;
			background:linear-gradient(60deg,rgba(240,62,50,1),rgba(248,119,61,1));
			position: fixed;
			bottom: 100rpx;
			left: 50%;
			transform: translateX(-50%);
		}
	}
</style>
