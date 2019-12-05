<template>
	<view class="content">
		<view class="status_bar">
							
		</view >
		<returns :titles='title'></returns>
		<view class="m-top">
			<image  class="back" src="/static/image/subuser/m-top.png" mode="widthFix"></image>
			<image class="photo" src="/static/image/subuser/toux.png" mode="widthFix"></image>
			<view class="box">
				<image src="/static/image/subuser/v.png" mode="widthFix"></image>
				<text>会员</text>
			</view>
			<view class="explain">
				<text>开通</text>
				<image src='/static/image/subuser/VIP@2x.png'></image>
				<text>即可尊享会员专属特权</text>
			</view>
		</view>
		<view class="Package">
			<view class="p-box1">
				<view class="tu">
					<image src='/static/image/subuser/box1.png'></image>
					<text>推荐</text>
				</view>
				<view class="p-text1">
					<text>VIP</text>
					<text>￥178</text>
				</view>
				<view class="p-text2">￥198</view>
				<view class="p-text3">
					<image src='/static/image/subuser/tuijian.png'></image>
					<text>立省20元</text>
				</view>
			</view>
			<view class="p-box2">
				<view class="p-text1">
					<text>VIP</text>
					<text>￥178</text>
				</view>
				<view class="p-text2">￥198</view>
				<view class="p-text3">
					<image src='/static/image/subuser/yituijian.png'></image>
					<text>立省20元</text>
				</view>
			</view>
		</view>
		<button type="default" @click="reveal=true">
			立即开通
		</button>
		<view class="upgrade">
			<text>50000积分可升级</text>
			<text>VIP</text>
		</view>
		<image class="line" src="/static/image/subuser/line@2x.png"></image>
		<view class="vip-center">
			<image src='/static/image/subuser/davip.png'></image>
			<text>专享权益</text>
		</view>
		<view class= "privilege">
			<view class="pr-box">
				<image src="/static/image/subuser/kecheng.png" mode=""></image>
				<view>免费课程</view>
			</view>
			<view class="pr-box" >
				<image src="/static/image/subuser/changting.png" mode=""></image>
				<view>内容畅听</view>
			</view>
			<view class="pr-box">
				<image src="/static/image/subuser/ticheng.png" mode=""></image>
				<view>佣金提成</view>
			</view>
		</view>
		<!-- 开通成功弹框 -->
		<view class="mask_black" v-if="reveal">
			
		</view>
		<view class="bk" v-if="reveal">
			<view class="k">
				<image class='fen' src="/static/image/subuser/fenxiang.png" mode="widthFix"></image>
				<view class=""  @click="reveal=false">
					<image class='x' src="/static/image/subuser/x.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="bk_test">
					<view class="bk_test1">
						恭喜您成为
					</view>
					<view class="bk_test2">
						VIP
					</view>
					<view class="bk_test3">
						确定
					</view>
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
				title:'会员中心',
				reveal:false
			}
		}
	}
</script>

<style lang="scss">
	.m-top{
		width: 100%;
		height: 339rpx;
		position: relative;
		.back{
			width: 100%;
			height: 100%;
			position: absolute;
			top:0;
			left: 0;
		}
		.photo{
			width: 100rpx;
			height: 100rpx;
			position: absolute;
			top:83rpx;
			left: 324rpx;
		}
		.box{
			position: absolute;
			top:204rpx;
			left: 322rpx;
			width:106rpx;
			height:35rpx;
			background:linear-gradient(0deg,rgba(255,238,221,1),rgba(185,161,142,1));
			border-radius:18rpx;
			font-size: 24rpx;
			color: #181718;
			display: flex;
			align-items: center;
			image{
				width: 23rpx;
				height: 23rpx;
				margin: 0 0 0 20rpx;
			}
		}
		.explain{
			display: flex;
			font-size: 24rpx;
			color: #FFF8EE;
			align-items: center;
			position: absolute;
			top:283rpx;
			left: 212rpx;
			image{
				width: 41rpx;
				height: 21rpx;
			}
		}
	}
	.Package{
		display: flex;
		.p-box1{
			margin: 30rpx 0 0 20rpx;
			width:220rpx;
			height:220rpx;
			background:rgba(255,242,223,1);
			border:2rpx solid rgba(255,134,27,1);
			border-radius:10rpx;
			.tu{
				display: flex;
				align-items: center;
				image{
					width: 72rpx;
					height: 34rpx;
					z-index: 100;
				}
				text{
					font-size: 24rpx;
					color: #FFFFFF;
					margin-left: -65rpx;
					z-index: 111;
				}
			}
			.p-text1{
				margin: 15rpx 0;
				text-align: center;
				text:first-child{
					font-size: 24rpx;
					color: #644931;
				}
				text:last-child{
					font-size: 28rpx;
					color:#D80000;
				}
			}
			.p-text2{
				
				font-size: 24rpx;
				color: #9A5A12;
				text-decoration:line-through;
				text-align: center;
			}
			.p-text3{
				width:170rpx;
				height:50rpx;
				background:rgba(255,79,46,1);
				border-radius:25rpx;
				font-size: 24rpx;
				color: #FFFFFF;
				display: flex;
				align-items: center;
				margin: 15rpx auto 0;
				image{
					width: 25rpx;
					height: 25rpx;
					margin: 0 5rpx 0 20rpx;
				}
			}
		}
		.p-box2{
			margin: 30rpx 0 0 20rpx;
			width:220rpx;
			height:220rpx;
			background-color:#F5F5F5;
		
			border-radius:10rpx;
			.p-text1{
				margin: 45rpx 0 15rpx;
				text-align: center;
				text:first-child{
					font-size: 24rpx;
					color: #644931;
				}
				text:last-child{
					font-size: 28rpx;
					color:#854E13;
				}
			}
			.p-text2{
				
				font-size: 24rpx;
				color: #9A5A12;
				text-decoration:line-through;
				text-align: center;
			}
			.p-text3{
				width:170rpx;
				height:50rpx;
				border: 1px solid rgba(232,182,119,1);
				border-radius:25rpx;
				font-size: 24rpx;
				color: #E8B677;
				display: flex;
				align-items: center;
				margin: 15rpx auto 0;
				image{
					width: 25rpx;
					height: 25rpx;
					margin: 0 5rpx 0 20rpx;
				}
			}
		}
	}
	button{
		width:700rpx;
		height:80rpx;
		background:linear-gradient(-90deg,rgba(253,195,88,1) 0%,rgba(250,221,163,1) 100%);
		border-radius:40rpx;
		font-size: 28rpx;
		color: #773B00;
		margin-top: 41rpx;
	}
	.upgrade{
		text-align: center;
		margin:27rpx 0 20rpx 0 ;
		text:first-child{
			font-size: 24rpx;
			color: #773B00;
		}
		text:last-child{
			font-size: 24rpx;
			color:#D80000;
		}
	}
	.line{
		width: 458rpx;
		height: 2rpx;
		display: block;
		margin: 80rpx auto 0;
	}
	.vip-center{
		margin:-30rpx 0 0 285rpx;
		image{
			width: 60rpx;
			height: 31rpx;
		}
		text{
			font-size: 32rpx;
			color:#DEA179;
		}
	}
	.privilege{
		display: flex;
		margin-top: 30rpx;
		margin-left: 57rpx;
		// justify-content: space-around;
		.pr-box{
			display: flex;
			flex-direction:column ;
			align-items: center;
			margin: 0 106rpx 0 0;
			image{
				width: 82rpx;
				height: 82rpx;
			}
			view{
				font-size: 24rpx;
				color: #333333;
			}
		}
		
	}
	.bk{
		 width:100%;
		 position: fixed;
		 left: 50%;
		 transform: translateX(-50%);
		 top:320rpx;
		 z-index: 900;
		 text-align: center;
		.k{
			position: relative;
			.fen{
				width: 421rpx;
				height: 461rpx;
			}
			.x{
				margin-top: 20rpx;
				width: 75rpx;
				height: 75rpx;
			}
		}
		.bk_test{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			.bk_test1{
				font-size: 36rpx;
				color:#FFFFFF;
			}
			.bk_test2{
				font-size: 72rpx;
				color:#FFFFFF;
				margin: 15rpx 0 20rpx 0;
			}
			.bk_test3{
				width:200rpx;
				height:70rpx;
				background:rgba(255,255,255,1);
				box-shadow:0rpx 15rpx 40rpx 0rpx rgba(146,69,7,0.25);
				border-radius:35px;
				color: #F38C28;
				font-size: 32rpx;
				font-weight: 800rpx;
				text-align: center;
				line-height: 70rpx;
			}
		}
	}
</style>
