<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<view class="user_top" :style="{backgroundImage: 'url('+back+')',backgroundSize: '100% 100%'}">
			<view class="top_one">
				<image src="../../static/image/index/set.png" mode="widthFix" @tap="$jump('../subuser/setting/setting')"></image>
				<!-- <view class="top_img" @click="$jump('/pages/com_page/notice')">
					<image src="../../static/image/index/user_news.png" mode="widthFix"></image>
					<view v-if="$store.state.notice"></view>
				</view> -->
				<view class="top_img" @tap="$jump('../subuser/setting/setting')">
					设置
				</view>
			</view>
			<view class="top_two">
				<view class="two_left" @tap="$jump('../subuser/personage/personage')">
					<image :src="$api_img()+user.avatar" mode="scaleToFill"></image>
				</view>
				
				<view class="two_mid">
					<view class="mid_top">
						{{user.username?user.username:user.nickname}}
					</view>
					<view class="mid_bottom">
						<!-- <image src="../../static/image/index/member.png" mode="widthFix"></image> -->
						<image :src="user.level_icon ? $api_img()+user.level_icon: '../../static/image/index/member.png'" mode="widthFix"></image>
						<text>{{user.level_name}}</text>
					</view>
				</view>
				<!-- <view class="two_right">
					<view class="">
						<image src="../../static/image/index/real_name.png" mode="widthFix"></image>
						<text>实名认证</text>
						<image src="../../static/image/index/go1.png" mode="widthFix"></image>
					</view>
				</view> -->
				<view class="code" v-if="user.invite_code">
					<view class="">
						邀请码：
					</view>
					<view class="">
						{{user.invite_code}}
					</view>
				</view>
			</view>
			<view class="top_three">
				<view class="three_list" @tap="$jump('../subuser/balance')">
					<view class="">
						{{user.money ? user.money : '0'}}
					</view>
					<view class="">
						余额
					</view>
				</view>
				<view class="three_list"  @tap="$jump('../subuser/integral/integral')">
					<view class="">
						{{user.integral}}
					</view>
					<view class="">
						积分
					</view>
				</view>
			</view>
		</view>
		
		<!-- <view class="user_vip"  @tap="$jump('../subuser/member/member')" v-if="user.level_id != 6">
			<view class="vip_one">
				<image src="../../static/image/index/vip.png" mode="widthFix"></image>
				<view class="">
					<view class="">
						成为超级会员
					</view>
					<view class="">
						享受特权，全年可省300元
					</view>
				</view>
			</view>
			<view class="vip_two">
				<view class="">
					立即开通
				</view>
				<image src="../../static/image/index/go.png" mode="widthFix"></image>
			</view>
		</view> -->
		
		<view class="user_top_list">
			<view class="user_tab">
				<view class="tab_list" @tap="$jump('../subuser/distribution/distribution')">
					<image src="../../static/image/index/service.png" mode="widthFix"></image>
					<view class="">
						联盟申请
					</view>
				</view>
				<view class="tab_list"  @tap="$jump('../subuser/brokerage/schoolfellow')">
					<image src="../../static/image/index/list1.png" mode="widthFix"></image>
					<view class="">
						我的同学
					</view>
				</view>
				<view class="tab_list" @tap="$jump('../subuser/relation/relation')">
					<image src="../../static/image/index/list2.png" mode="widthFix"></image>
					<view class="">
						亲情账号
					</view>
				</view>
				<view class="tab_list" @tap="$jump('../subuser/brokerage/invite')">
					<image src="../../static/image/index/list3.png" mode="widthFix"></image>
					<view class="">
						推广码
					</view>
				</view>
				
				<!-- <view class="tab_list"  @tap="$jump('../subclass/textual')"> -->
				<view class="tab_list"  @tap="temporary">
					<image src="../../static/image/index/tutor.png" mode="widthFix"></image>
					<view class="">
						导师考证
					</view>
				</view>
				
				<view class="tab_list"  @tap="$jump('../subuser/brokerage/brokerage')">
					<image src="../../static/image/index/commission.png" mode="widthFix"></image>
					<view class="">
						我的账户
					</view>
				</view>
				<view class="tab_list" @tap="$jump('../subuser/signIn')">
					<image src="../../static/image/index/sign.png" mode="widthFix"></image>
					<view class="">
						每日签到
					</view>
				</view>
				<view class="tab_list"  @tap="temporary">
					<image src="../../static/image/index/customer.png" mode="widthFix"></image>
					<view class="">
						在线客服
					</view>
				</view>
			</view>
		</view>
		
		<view class="list_bottom">
			<view class="list_test">
				其他服务
			</view>
			<view class="tab_box">
				<view class="tab_list"   @tap="$jump('../subuser/study')">
				<!-- <view class="tab_list"> -->
					<image src="../../static/image/index/other_img1.png" mode="widthFix"></image>
					<view class="">
						我的学习
					</view>
				</view>
				<view class="tab_list"  @tap="$jump('../subuser/activitys/activitys')">
					<image src="../../static/image/index/other_img2.png" mode="widthFix"></image>
					<view class="">
						我的活动
					</view>
				</view>
				<!-- <view class="tab_list"  @tap="$jump('../subindex/evaluating')"> -->
				<view class="tab_list"  @tap="temporary">
					<image src="../../static/image/index/other_img3.png" mode="widthFix"></image>
					<view class="">
						我的测评
					</view>
				</view>
				<view class="tab_list"  @tap="$jump('../subuser/conversion/conversion')">
					<image src="../../static/image/index/other_img4.png" mode="widthFix"></image>
					<view class="">
						领取优惠
					</view>
				</view>
				<!-- <view class="tab_list" @click="jump('../subuser/realname')">
					<image src="../../static/image/index/other_img5.png" mode="widthFix"></image>
					<view class="">
						实名认证
					</view>
				</view> -->
				<view class="tab_list" @tap="$jump('../subuser/collect')">
					<image src="../../static/image/index/other_img6.png" mode="widthFix"></image>
					<view class="">
						我的收藏
					</view>
				</view>
				<view class="tab_list" @click="$jump('../subuser/address')">
					<image src="../../static/image/index/other_img7.png" mode="widthFix"></image>
					<view class="">
						收货地址
					</view>
				</view>
				
				<!-- <view class="tab_list">
					<image src="../../static/image/index/other_img8.png" mode="widthFix"></image>
					<view class="">
						亲情号
					</view>
				</view> -->
				<!-- <view class="tab_list" @tap="$jump('../subuser/member/member')"> -->
				<view class="tab_list"  @tap="temporary">
					<image src="../../static/image/index/member1.png" mode="widthFix"></image>
					<view class="">
						会员中心
					</view>
				</view>
				<view class="tab_list" @tap="$jump('../subuser/myorder')">
					<image src="../../static/image/index/order.png" mode="widthFix"></image>
					<view class="">
						我的订单
					</view>
				</view>
			</view>
		</view>
		
		
		
		<view class="c_buttom">
			<view @tap="$jump('../subuser/abrief')">公司简介</view>
			<view @tap="contact">联系我们</view>
		</view>
		<view class="QRcode" @tap="$jump('/pages/subuser/brokerage/invite')">
			<image src="../../static/image/index/code.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	import Back from '../../static/image/index/back.png'
	export default{
		data() {
			return {
				latitude:'',
				longitude:'',
				back:Back
			}
		},
		computed: {
		  // localComputed () { /* ... */ },
		  // 使用对象展开运算符将此对象混入到外部对象中
		  ...mapState({
			  user:'user'
		  }),
		
		},	
		methods:{
			contact(){
				console.log(Number(this.latitude))
				
				uni.openLocation({
					latitude: Number(this.latitude),
					longitude:Number(this.longitude),
					success: function () {
						console.log('success');
					}
				});
				    
				
			},
			temporary(){
				uni.showToast({
					icon:'none',
					title:'暂未开放！'
				})
			}
			
		},
		onLoad() {
			this.service.entire(this,'post',this.APIconfig.api_root.subuser.u_Company_index,{
				
			},function(self,res){
				console.log(res)
				self.latitude = res.data.company_info.latitude
				self.longitude = res.data.company_info.longitude
			})
		},
		onShow() {
			this.service.notice.call(this)
			this.service.entire(this,'post',this.APIconfig.api_root.index.u_token,{
				id:this.$store.state.user.id
			},function(self,res){
				if(res.code == 0){
					self.$store.commit('state_user',res.data.user_info)
					self.$store.commit('state_token',res.data.token)
					
					uni.setStorageSync('state_user',res.data.user_info)
					uni.setStorageSync('state_token',res.data.token)
				}
			})
			
		}
	}
</script>

<style lang="scss">
	page{
		background: #e4e4e4;
	}
	.content{
		padding-top: 0;
	}
	.status_bar{
		background:linear-gradient(90deg,rgba(247,76,74,1),rgba(245,110,106,1));
	}
	
	.user_top{
		color: #fff;
		padding: 40rpx 0;
		background:linear-gradient(90deg,rgba(247,76,74,1),rgba(245,110,106,1));
		.top_one{
			display: flex;
			justify-content: flex-end;
			align-items: center;
			image{
				height: 50rpx;
				width: 50rpx;
				margin-right: 23rpx;
			}
			.top_img{
				padding-right: 30rpx;
				font-size: 28rpx;
			}
		}
		.top_two{
			display: flex;
			align-items: center;
			padding-left: 54rpx;
			font-size: 32rpx;
			position: relative;
			.two_left{
				height: 100rpx;
				width: 100rpx;
				margin-right: 25rpx;
				border-radius: 50%;
				overflow: hidden;
				image{
					height: 100%;
					width: 100%;
				}
			}
			.two_mid{
				height: 90rpx;
				display: flex;
				justify-content: space-between;
				flex-direction: column;
				.mid_bottom{
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 24rpx;
					padding: 0 10rpx;
					height: 36rpx;
					border-radius: 36rpx;
					background: rgba(255,255,255,.3);
				}
				image{
					height: 24rpx;
					width: 24rpx;
				}
			}
			.code{
				font-size: 28rpx;
				position: absolute;
				right: 40rpx;
				top: 50%;
				transform: translateY(-50%);
			}
			.two_right{
				height: 90rpx;
				margin-left: 15rpx;
				view{
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 24rpx;
					height: 35rpx;
					border-radius: 35rpx;
					width: 170rpx;
					background: rgba(255,255,255,.3);
					text{
						margin: 0 10rpx;
					}
				}
				image{
					height: 24rpx;
					width: 24rpx;
				}
			}
		}
		.top_three{
			display: flex;
			.three_list{
				width: 50%;
				font-size: 28rpx;
				padding-top: 30rpx;
				text-align: center;
			}
		}
	}
	
	/* .user_top .top_two .two_right image:nth-of-type(2){
		height: 15rpx;
		width: 15rpx;
	} */
	
	.user_vip{
		display: flex;
		justify-content: space-between;
		border-radius: 10rpx;
		margin: 20rpx 20rpx 0 20rpx;
		padding: 16rpx 30rpx;
		font-size: 28rpx;
		color: #333333;
		background: #FFFFFF;
		.vip_one{
			display: flex;
			image{
				height: 78rpx;
				width: 76rpx;
				margin-right: 16rpx;
			}
			view:nth-of-type(2){
				color: #CCCCCC;
				font-size: 24rpx;
			}
		}
		.vip_two{
			display: flex;
			align-items: center;
			color: #666666;
			image{
				height: 20rpx;
				width: 20rpx;
			}
		}
	}
	.user_top_list{
		margin: 20rpx 20rpx 0 20rpx;
		background: #fff;
		font-size: 28rpx;
		color: #333333;
		border-radius: 10rpx;
		.user_tab{
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			padding-top: 20rpx;
			.tab_list{
				width: 25%;
				text-align: center;
				margin-bottom: 20rpx;
			}
		}
		image{
			width: 70rpx;
			height: 70rpx;
		}
	}
	
	.tab_box{
		display: flex;
		/* justify-content: space-between; */
		flex-wrap: wrap;
		text-align: center;
		color: #333333;
		font-size: 24rpx;
		.tab_list{
			width: 20%;
			position: relative;
			text{
				width: 40rpx;
				height: 40rpx;
				border-radius: 50%;
				font-size: 24rpx;
				text-align: center;
				line-height: 40rpx;
				background: #FF431D;
				color: #fff;
				position: absolute;
				top: 0;
				right: 16rpx;
				transform: scale(0.7);
			}
		}
		image{
			height: 54rpx;
			width: 54rpx;
			margin-bottom: 13rpx;
		}
	}
	.list_bottom{
		background: #fff;
		margin: 20rpx;
		border-radius: 10rpx;
		.list_test{
			padding: 36rpx 30rpx 10rpx 30rpx;
			font-size: 28rpx;
			color: #333333;
			font-weight: bold;
			padding-bottom: 32rpx;
			margin-bottom: 20rpx;
			border-bottom: 2rpx solid #F2F2F2;
		}
		.tab_list{
			width: 25%;
			margin-bottom: 20rpx;
			font-size: 28rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;	
		}
	}
	.c_buttom{
		position: fixed;
		width: 100%;
		bottom: 10rpx;
		display: flex;
		font-size: 28rpx;
		justify-content: space-around;
		padding-bottom: 5rpx;
		// margin-top: 40rpx;
		color: #000;
	}
</style>
