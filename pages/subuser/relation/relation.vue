<template>
	<view class="content">
		<view class="status_bar">
							
		</view >
		<view class="top">
			<view class="image">
				<image src="/static/image/com_page/returns.png" @tap="service.returns()" mode="widthFix" ></image>
			</view>
			<text>亲情号</text>
			<text @tap="$jump('./record')">分享记录</text>
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
					  <text @click="Index(1)" class="one" :class="{active:cur==1}">我邀请的</text>
					  <text @click="Index(2)" class="two" :class="{active:cur==2}">邀请我的</text>
					   <!-- <text @click="cur=3" class="three" :class="{active:cur==3}">邀请记录</text> -->
					   
				</view>
				<view class="box" v-show="cur==1">
					<form >
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
						<button type="default" @click="invite">邀请好友</button>
					</form>
				</view>
				<view class="box" v-show="cur==2">
					<form >
						<view class="add_box" v-for="(item,index) in invateList" :key='item.id'>
							<view class="left_box">
								<view class="pagination">
									<view v-show='true' @click="goFirst(index)" v-bind:class="{'classFirsta':item.is_enabled==0,'classFirstb':item.is_enabled==1}"></view>
								</view>
								<image :src="item.avatar"></image>
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
					
					</form>
				</view>
				<view class="box" v-show="cur==3">
					<form >
						<view class="add_box">
							<view class="left_box">
								<!-- <image src="/static/image/subuser/tuoyuan.png"></image> -->
								<image src="/static/image/subuser/renxiang.png" mode="widthFix"></image>
							</view>
							
								<view class="right_box">
									<view>
										<text>号码</text>
										<input type="text" placeholder="请输入手机号码">
									</view> 
									<image src="/static/image/subuser/tongxunlu.png" mode="widthFix"></image>
								</view>
							
						</view>
						<!-- <button type="default">邀请好友</button> -->
					</form>
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
				cur:1,
				phone:'',
				reveal:true,
				photo:'',
				invateList :'',
				gotoFirst:true,
			}
		},
		methods:{
				// 邀请好友
			invite(){
				this.service.entire(this,'post',this.APIconfig.api_root.subuser.s_member_kinship,{//邀请好友
					// user_id:this.$store.state.user.id,
					// type:this.cur,
					from_mobile:this.phone,
					my_mobile:this.$store.state.user.mobile
				},function(self,res){
					console.log(res.data.invate)
					
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
				console.log(this.phone)
			},
			Index(type){
				this.cur = type;
				this.service.entire(this,'post',this.APIconfig.api_root.subuser.s_member_kinshipLog,{
					user_id:this.$store.state.user.id,
					type:type,
					mobile:this.$store.state.user.mobile
				},function(self,res){
					console.log(res)
					self.invateList = res.data.invate
					console.log(self.invateList)
				})
			},
			
			goFirst(index){
					// 请求绑定/取消接口
				let times = this.service.loading()
				this.service.entire(this,'post',this.APIconfig.api_root.subuser.s_member_bindKinship,{
					from_mobile:this.invateList[index].mobile,
					my_mobile:this.$store.state.user.mobile,
					type:this.invateList[index].is_enabled==1?0:1
				},function(self,res){
					uni.hideToast()
					clearTimeout(times)
					console.log(res)
					uni.showToast({
						icon:'none',
						title:res.msg
					})
					if(res.code==0){
						if(self.invateList[index].is_enabled==1){
							self.invateList[index].is_enabled=0
							console.log(self.invateList)
						}else if(self.invateList[index].is_enabled==0){
							self.invateList[index].is_enabled=1
							console.log(self.invateList)
						}
					}
					
				})
				
				
				// this.invateList[0].is_enabled=1
				// console.log(this.invateList[0].is_enabled)
				
			}
		},
		onShow() {
			this.Index(1)
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
			position: absolute;
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
				width: 35rpx;
				height: 35rpx;
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
				justify-content: space-around;
				margin-top: 50rpx;
				.pr_box{
					font-size: 24rpx;
					color: #FFFFFF;
					display: flex ;
					flex-direction: column ;
					align-items: center;
					image{
						width: 80rpx;
						height: 80rpx;
					}
				}
			}
			.witebox{
				width:703rpx;
				height:760rpx;
				background:rgba(255,255,255,1);
				border-radius:25rpx;
				margin: 50rpx auto;
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
					color:#D80000;
					border-bottom: 1rpx solid #D80000;
				}
				
				.add_box{
					display: flex;
					// align-items: center;
					margin: 0 54rpx;
					.left_box{
						display: flex;
						align-items: center;
						padding-top: 54rpx;
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
						margin-top: 54rpx;
						text{
							font-size: 32rpx;
							color: #333333;
						}
						image{
							width: 33rpx;
							height: 33rpx;
							margin-top: 50rpx;
						}
						input{
							font-size: 24rpx;
						}
					}
				}
				button{
					width:600rpx;
					height:80rpx;
					background:linear-gradient(-90deg,rgba(254,101,59,1),rgba(253,185,60,1));
					border-radius:40rpx;
					font-size: 32rpx;
					line-height: 80rpx;
					text-align: center;
					color: #FFFFFF;
					position: absolute;
					bottom: 40rpx;
					left: 51rpx;
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
</style>
