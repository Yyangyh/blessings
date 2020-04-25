<template>
	<view class="content">
		<view class="status_bar">
							
		</view >
		<view class="top">
			<view class="image">
				<image src="/static/image/com_page/returns.png" @tap="service.returns()" mode="widthFix" ></image>
			</view>
			<text>亲情号</text>
			<text @tap="$jump('./record')">共享资源</text>
		</view>
		<image class="back" src="/static/image/subuser/relationback.png" mode="widthFix"></image>
		<view class="worp">
			<image class="image" src="/static/image/subuser/home.png" mode="widthFix"> </image>
			<view class="title">亲情账号权益</view>
			<view class="privilege">
				<view class="pr_box">
					<image src='/static/image/subuser/zu1.png' mode="widthFix"></image>
					<view>免费共享视频</view>
				</view>
				<view class="pr_box">
					<image src='/static/image/subuser/zu2.png' mode="widthFix"></image>
					<view>免费共享音频</view>
				</view>
			</view>
			<view class="witebox">
				<view class="allorder">
					  <text @click="Index(3)" class="three" :class="{active:cur==3}">邀请好友</text>
					  <text @click="Index(2)" class="two" :class="{active:cur==2}">邀请我的</text>
					   <text  @click="Index(1)" class="one" :class="{active:cur==1}">我的邀请</text>
					   
				</view>
				<view>
					<view class="box" v-show="cur==3">
						<!-- <form > -->
							<view class="add_box">
								<view class="left_box">
									<!-- <image src="/static/image/subuser/tuoyuan.png"></image> -->
									<image src="/static/image/subuser/renxiang.png" mode="widthFix"></image>
								</view>
									<view class="right_box">
										<view>
											<text>号码</text>
											<input type="text" placeholder="请输入手机号码" v-model="phone">
										</view> 
										<image src="/static/image/subuser/tongxunlu.png" mode="widthFix"></image>
									</view>
							</view>
							<button  @click="invite">邀请之后需对方同意生效</button>
						<!-- </form> -->
						<view class="explain">
							<view class="">
								1.所有会员可随意邀请一位亲朋好友，和您共享所购买视频内容。
							</view>
							<view class="">
								2.我们倡导夫妻共同学习，共同成长，建设美好幸福家庭。
							</view>
							<view class="">
								3.也可以邀请您身边最亲近的人成为您亲情好友，和您一起学习。
							</view>
							<view class="">
								4.本人如果已经成为被邀请人，将不在有邀请别人的权限。
							</view>
							<view class="">
								5.邀请前请您认真填写，邀请之后不能随意更换邀请人。
							</view>
						</view>
					</view>
					<block  v-for="(item,index) in invateList" :key='item.id'>
						<view class="box" v-show="cur==2">
							<!-- <form > -->
								<view class="add_box" >
									<view class="left_box">
										<view class="pagination">
											<view v-show='true' @click="goFirst(index)" v-bind:class="{'classFirsta':item.is_enabled==0,'classFirstb':item.is_enabled==1}"></view>
										</view>
										<image :src="$api_img()+item.avatar"  mode="scaleToFill"></image>
									</view>
									<view class="right_box">
										<view>
											<text>号码</text>
											<input disabled='disabled' type="text" :value="item.mobile"  >
										</view> 
										<image src="/static/image/subuser/tongxunlu.png" mode="widthFix"></image>
									</view>
								</view>
								<!-- <button type="default" @click="relieve">一键解绑</button> -->
							
							<!-- </form> -->
						</view>
						<view class="box" v-show="cur==1">
							<!-- <form > -->
								<view class="add_box">
									<view class="left_box">
										<!-- <image src="/static/image/subuser/tuoyuan.png"></image> -->
										<image class="phimg" :src="$api_img()+item.avatar" mode="scaleToFill"></image>
									</view>
									
										<view class="right_box">
											<view>
												<text>号码</text>
												<input type="text" placeholder="请输入手机号码" :value="item.mobile">
											</view> 
											<image src="/static/image/subuser/tongxunlu.png" mode="widthFix"></image>
										</view>
									
								</view>
								<!-- <button type="default">邀请好友</button> -->
							<!-- </form> -->
						</view>
					</block>
					
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	export default{
		data(){
			return{
				title:'亲情号',
				reveal:false,
				cur:3,
				phone:'',
				reveal:true,
				photo:'',
				invateList :'',
				gotoFirst:true,
			}
		},
		methods:{
				
			invite(){
				this.service.entire(this,'post',this.APIconfig.api_root.subuser.s_member_kinship,{//邀请好友，发送邀请
					// user_id:this.$store.state.user.id,
					// type:this.cur,
					from_mobile:this.phone,
					my_mobile:this.$store.state.user.mobile
				},function(self,res){
					uni.showToast({
						icon:'none',
						title:res.msg
					})
				})
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
			},
			Index(type){
				this.cur = type;
				this.service.entire(this,'post',this.APIconfig.api_root.subuser.s_member_kinshipLog,{//亲情日志
					user_id:this.$store.state.user.id,
					type:type,
					mobile:this.$store.state.user.mobile
				},function(self,res){
					self.invateList = res.data.invate
				})
			},
			
			goFirst(index){
					// 请求绑定/取消接口
				let times = this.service.loading()
				this.service.entire(this,'post',this.APIconfig.api_root.subuser.s_member_bindKinship,{//绑定，取消绑定
					from_mobile:this.invateList[index].mobile,
					my_mobile:this.$store.state.user.mobile,
					type:this.invateList[index].is_enabled==1
				},function(self,res){
					uni.hideToast()
					clearTimeout(times)
					uni.showToast({
						icon:'none',
						title:res.msg
					})
					if(res.code==0){
						if(self.invateList[index].is_enabled==1){
							self.invateList[index].is_enabled=0
						}else if(self.invateList[index].is_enabled==0){
							self.invateList[index].is_enabled=1
						}
						// uni.showToast({
						// 	icon:'none',
						// 	title:'邀请成功'
						// })
					}
					
				})
				
				
				// this.invateList[0].is_enabled=1
				// console.log(this.invateList[0].is_enabled)
				
			}
		},
		onShow() {
			this.Index(3)
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		position: relative;
		height: 1229rpx;
		.top{
			position: fixed;
			width: 100%;
			z-index: 886;
			box-sizing: border-box;
			top: var(--status-bar-height);
			left: 0;
			display: flex;
			height: 105rpx;
			padding: 0 30rpx;
			
			justify-content: space-between;
			align-items: center;
			background-color: #FFFFFF;
			.image{
				width:95rpx;
				height: 31rpx;
				image{
					width: 31rpx;
					height: 31rpx;
					display: block;
				}
			}
			text:first-child{
				font-size: 32rpx;
				padding-right:50rpx;
			}
			text:last-child{
				font-size: 28rpx;
				color: #666666;
			}
		}
		.back{
			width: 100%;
			position: fixed;
			height: 1229rpx;
			top:calc(var(--status-bar-height) + 105rpx);
			left:0;
			z-index:0;
		}
		.worp{
			width: 100%;
			height: 1229rpx;
			position: absolute;
			top:calc(var(--status-bar-height) + 105rpx);
			left: 0;
			.image{
				width: 100rpx;
				height: 100rpx;
				margin: 35rpx auto;
				display: block;
			}
			.title{
				font-size: 31rpx;
				text-align: center;
				color:#FFFFFF;
			}
			.privilege{
				display: flex;
				justify-content: space-between;
				padding: 0 20rpx;
				margin-top: 50rpx;
				.pr_box{
					height: 55rpx;
					line-height: 55rpx;
					border-radius: 55rpx;
					width: 330rpx;
					font-size: 28rpx;
					color: #333333;
					background: #FFE68A;
					display: flex ;
					align-items: center;
					justify-content: center;
					image{
						width: 28rpx;
						height: 28rpx;
						margin-right: 13rpx;
					}
				}
			}
			.witebox{
				width:703rpx;
				height:760rpx;
				background:rgba(255,255,255,1);
				border-radius:25rpx;
				margin: 50rpx auto 0rpx;
				position: relative;
				.allorder{
					width: 100%;
					height: 100upx;
					display: flex;
					text-align: center;
					line-height: 100upx;
					font-size: 28upx;
					border-bottom: 1rpx solid #A5A5A5;
					text{
						flex: 1;
					}
				}
				.active{
					color:#FE0000;
					border-bottom: 4rpx solid #FE0000;
				}
				
				.add_box{
					display: flex;
					// align-items: center;
					margin: 0 54rpx;
					.left_box{
						display: flex;
						align-items: center;
						padding-top: 25rpx;
						// image:first-child{
						// 	width: 36rpx;
						// 	height: 36rpx;
						// 	margin-right: 33rpx;
						// 	border-radius: 50%;
						// }
						image:last-child{
							width: 100rpx;
							height: 100rpx;
							margin-right: 38rpx;
							border-radius: 50%;
						}
					}
					.right_box{
						width:394rpx;
						height: 100rpx;
						border-bottom:1px solid #A5A5A5 ;
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin-top: 25rpx;
						text{
							font-size: 32rpx;
							color: #333333;
						}
						image{
							width: 33rpx;
							height: 33rpx;
							margin-top: 25rpx;
						}
						input{
							font-size: 24rpx;
						}
					}
				}
				button{
					width:600rpx;
					height:80rpx;
					background:#FE0000;
					border-radius:40rpx;
					font-size: 32rpx;
					line-height: 80rpx;
					text-align: center;
					color: #FFFFFF;
					margin: 10rpx auto;
					// position: absolute;
					
				}
				.explain{
					font-size: 28rpx;
					padding:  0rpx 10rpx;
					color: #000;
					view{
						margin-top: 4rpx;
					}
				}
			}
			
		}
		.bk{
			width:535rpx;
			height:217rpx;
			background:rgba(255,255,255,1);
			border-radius:22rpx;
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
	.left_box .classFirsta{
		width: 36rpx;
		height: 36rpx;
		margin-right: 33rpx;
		border-radius: 50%;
		background: url(../../../static/image/subuser/tuoyuan.png);
		background-size: 100% 100%;
	}
	.left_box .classFirstb{
		width: 36rpx;
		height: 36rpx;
		margin-right: 33rpx;
		border-radius: 50%;
		background: url(../../../static/image/subuser/chosse.png);
		background-size: 100% 100%;
	}
	.phimg{
		width: 100rpx;
		height: 100rpx;
		border-radius:50% ;
	}
</style>
