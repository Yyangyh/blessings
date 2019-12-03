<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<returns :titles='title'></returns>
		<view class="allorder">
			  <text @click="cur=0" class="one" :class="{active:cur==0}">幸福测评</text>
			  <text @click="cur=1" class="two" :class="{active:cur==1}">调查问卷</text>
			  <text @click="cur=2" class="three" :class="{active:cur==2}">测评记录</text>
		</view
		<!-- 幸福测评 -->
		<view class="box" v-show="cur==0">
			<view class="tergum" v-for="(item,index) in dataList" :key='item.id' @tap="$jump('./listbox?id='+item.id+'&name='+item.name)">
				<view class="worp">
					<view class="terLeft">
						<view>{{item.name}}</view>
						<view>{{item.total_do}}人已测</view>
					</view>
					<view class="terRight">
						<text>开始测试</text>
						<image src="../../static/image/index/go1.png" mode='widthFix'></image>
					</view>
				</view>
				<image class="Image" :src='item.img_url' mode=" aspectFill"></image>
				
			</view>
		</view>
		<!-- 问卷调查 -->
		<view class="questionnaire" v-show="cur==1">
			<view class="title">您对五福家庭的满意程度</view>
			<view class="line">
				<view class="question">
					<view class="circle">
					</view>
					<text>
						十分满意
					</text>
				</view>
				<view class="question">
					<view class="circle">
					</view>
					<text class="tetes">
						满意
					</text>
				</view>
			</view>
			<view class="line">
				<view class="question">
					<view class="circle">
					</view>
					<text>
						一般
					</text>
				</view>
				<view class="question">
					<view class="circle">
					</view>
					<text>
						不满意
					</text>
				</view>
			</view>
			<view class="opinion">您对五福家庭有什么建议</view>
			<form >
				<textarea name="" id="" cols="30" rows="10"></textarea>
			</form>
			<view class="ganxie">
				十分感谢您对这次调查的支持！
			</view>
			<button type="default">提交问卷</button>
		</view>
		<!-- 测评记录 -->
		<!-- <view class="box" v-show="cur==2">
			<view class="tergum"  @tap="$jump('./result')">
				<view class="terLeft">
					<view>默契大作战</view>
					<view>666888人已测</view>
				</view>
				<view class="terRight">
					<text>查看结果</text>
					<image src="../../static/image/index/go1.png"></image>
				</view>
			</view>
			<view class="tergum1">
				<view class="terLeft">
					<view>魅力值测试</view>
					<view>666888人已测</view>
				</view>
				<view class="terRight">
					<text>查看结果</text>
					<image src="../../static/image/index/go1.png"></image>
				</view>
			</view>
			<view class="tergum2">
				<view class="terLeft">
					<view>安全感测试</view>
					<view>666888人已测</view>
				</view>
				<view class="terRight">
					<text>查看结果</text>
					<image src="../../static/image/index/go1.png"></image>
				</view>
			</view>
			<view class="tergum3">
				<view class="terLeft">
					<view>默契大作战</view>
					<view>666888人已测</view>
				</view>
				<view class="terRight">
					<text>查看结果</text>
					<image src="../../static/image/index/go1.png"></image>
				</view>
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
				title:'我的测评',
				cur:0,
				dataList:[],
			}
		},
		onShow() {
			this.service.entire(this,'post',this.APIconfig.api_root.subindex.s_test_classify,{
				
			},function(self,res){
				console.log(res)
				self.dataList =res.data
			})
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		height: 100vh;
		background-color: #F6F6F7;
		.allorder{
			width: 100%;
			height: 120upx;
			display: flex;
			text-align: center;
			line-height: 120upx;
			font-size: 28upx;
			text{
				flex: 1;
			}
		}
		.active{
			color:#D80000;
		}
		.box{
			width: 100%;
			height: 100vh;
			background-color: #FFFFFF;
			padding: 20rpx 20rpx 0 20rpx;
			box-sizing: border-box;
			.tergum{
				height: 170rpx;
				padding: 0 20rpx;
				position: relative;
				z-index: 100;
				.Image{
					width: 710rpx;
					height: 170rpx;
					top:0;
					left: 0;
					position: absolute;
					z-index: 99;
				}
				.worp{
					position:absolute;
					top: 50%;
					transform: translateY(-50%);
					width: 100%;
					z-index: 111;
					box-sizing: border-box;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.terLeft{
						view:first-child{
							font-size: 32rpx;
							color: #333333;
						}
						view:last-child{
							margin-top: 10rpx;
							font-size: 24rpx;
							color: #FFFFFF;
						}
					}
					.terRight{
						display: flex;
						align-items: center;
						image{
							width: 20rpx;
							height:20rpx;
							margin: 0 50rpx 0 10rpx;
						}
						text{
							font-size: 24rpx;
							color: #FFFFFF;
						}
					}
				}
			}
			.tergum1{
				width: 710rpx;
				height: 170rpx;
				background: url(../../static/image/evaluating/cur2.png) no-repeat;
				background-size: 100% 100%;
				margin: 30rpx auto 0;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 53rpx 0 44rpx;
				.terLeft{
					view:first-child{
						font-size: 32rpx;
						color: #FFFFFF;
					}
					view:last-child{
						margin-top: 10rpx;
						font-size: 24rpx;
						color: #FFFFFF;
					}
				}
				.terRight{
					display: flex;
					align-items: center;
					image{
						width: 20rpx;
						height: 20rpx;
						margin: 0 50rpx 0 10rpx;
					}
					text{
						font-size: 24rpx;
						color: #FFFFFF;
					}
				}
			}
			.tergum2{
				width: 710rpx;
				height: 170rpx;
				background: url(../../static/image/evaluating/cur3.png) no-repeat;
				background-size: 100% 100%;
				margin: 30rpx auto 0;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 53rpx 0 44rpx;
				.terLeft{
					view:first-child{
						font-size: 32rpx;
						color: #FFFFFF;
					}
					view:last-child{
						margin-top: 10rpx;
						font-size: 24rpx;
						color: #FFFFFF;
					}
				}
				.terRight{
					display: flex;
					align-items: center;
					image{
						width: 20rpx;
						height: 20rpx;
						margin: 0 50rpx 0 10rpx;
					}
					text{
						font-size: 24rpx;
						color: #FFFFFF;
					}
				}
			}
			.tergum3{
				width: 710rpx;
				height: 170rpx;
				background: url(../../static/image/evaluating/cur4.png) no-repeat;
				background-size: 100% 100%;
				margin:30rpx auto 0;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 53rpx 0 44rpx;
				.terLeft{
					view:first-child{
						font-size: 32rpx;
						color: #FFFFFF;
					}
					view:last-child{
						margin-top: 10rpx;
						font-size: 24rpx;
						color: #FFFFFF;
					}
				}
				.terRight{
					display: flex;
					align-items: center;
					image{
						width: 20rpx;
						height: 20rpx;
						margin: 0 50rpx 0 10rpx;
					}
					text{
						font-size: 24rpx;
						color: #FFFFFF;
					}
				}
			}
		}
		.questionnaire{
			width: 100%;
			height: 1334rpx;
			background: url(../../static/image/evaluating/back.png) no-repeat;
			background-size: 100% 100%;
			.title{
				font-size: 28rpx;
				padding: 375rpx 0 0 128rpx;
				
			}
			.line{
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin: 30rpx 158rpx 0 127rpx;
				.question{
					display: flex;
					align-items: center;
					.circle{
						width: 24rpx;
						height: 24rpx;
						background-color: #FFFFFF;
						border: 2rpx solid #999999;
						border-radius: 50%;
						margin-right: 10rpx;
					}
					text{
						font-size: 24rpx;
						color: #333333;
					}
					.tetes{
						margin-right:22rpx;
					}
				}
			}
			.opinion{
				font-size: 28rpx;
				margin: 190rpx 0 0 54rpx;
			}
			textarea{
				background-color: #FFFFFF;
				display: block;
				margin: 20rpx auto 0;
				width: 650rpx;
				height: 280rpx;
			}
			.ganxie{
				font-size: 28rpx;
				color: #FFFFFF;
				text-align: center;
				margin-top: 60rpx;
			}
			button{
				width: 350rpx;
				height: 80rpx;
				background:linear-gradient(-90deg,rgba(253,176,100,1) 0%,rgba(255,133,49,1) 100%);
				box-shadow:10rpx 17rpx 25rpx 0rpx rgba(247,81,90,0.4);
				border-radius: 40rpx;
				text-align:center;
				line-height: 80rpx;
				color:#FFFFFF;
				margin-top: 40rpx;
			}
		}
	}
</style>
