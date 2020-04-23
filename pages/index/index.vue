<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<search :type='3'></search>
		
		<view class="swiper_box">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item,index) in swiper_list" :key='item.id'  @tap="Tjump(item.event_value)">
					<view class="swiper-item uni-bg-red">
						<image :src="$api_img() + item.images_url" mode="widthFix"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="index_tab">
			<view class="tab_list"  @tap="$jump('../com_page/news_class?type=1')">
				<image src='../../static/image/index/index_tab1.png'></image>
				<view class="">课程视频</view>
			</view>
			<view class="tab_list"  @tap="$jump('../com_page/news_class?type=2')">
				<image src='../../static/image/index/index_tab2.png' mode="widthFix"></image>
				<view class="">音频课程</view>
			</view>
			<view class="tab_list" @tap="$jump('../subindex/texts')">
				<image src='../../static/image/index/index_tab3.png' mode="widthFix"></image>
				<view class="">精彩文章</view>
			</view>
			<view class="tab_list" @tap="$jump('../subuser/relation/relation')">
				<image src="../../static/image/index/list2.png" mode="widthFix"></image>
				<view class="">
					亲情账号
				</view>
			</view>
			<!-- <view class="tab_list" @tap="$jump('../subindex/classify')">
				<image src='../../static/image/index/index_tab4.png' mode="widthFix"></image>
				<view class="">课程分类</view>
			</view> -->
			<view class="tab_list" @tap="$jump('/pages/subindex/morning')">
				<image src='../../static/image/index/index_tab5.png' mode="widthFix"></image>
				<view class="">早间晨语</view>
			</view>
			<view class="tab_list" @tap="$jump('../subhome/home_com?title=家风产品')">
			<!-- <view class="tab_list"  @tap="temporary"> -->
				<image src='../../static/image/index/index_tab6.png' mode="widthFix"></image>
				<view class="">五福商城</view>
			</view>
			<view class="tab_list" @tap="$jump('../subindex/evaluating')">
			<!-- <view class="tab_list" @tap="temporary"> -->
				<image src='../../static/image/index/index_tab7.png' mode="widthFix"></image>
				<view class="">幸福测评</view>
			</view>
			<view class="tab_list"  @tap="$jump('/pages/activity/activity')">
				<image src='../../static/image/index/index_tab8.png' mode="widthFix"></image>
				<view class="">活动发布</view>
			</view>
		</view>
		
		
		
			<view class="video_box" v-for="(item,index) in class_top" :key='item.id'>
				<view class="v_box_top">
					
					<view class="box_left">
						<text class="red"></text>
						{{item.cl_name}}
					</view>
					<view class="box_right"  @tap="$jump('../com_page/video_class?id='+item.id+'&title='+item.cl_name+'&type='+item.type)">
						全部
					</view>
				</view>
				<view class="vider_content">
					<scroll-view  scroll-x="true" class="scroll-Y">
						<view class="content_list" v-for="(items,indexs) in item.video_list" :key='items.id' @tap="$jump('../com_page/video_details?id='+items.id + '&type='+items.type)">
							<view class="list_img_box">
								<image :src="$api_img()+items.v_pic" mode="widthFix"></image>
							</view>
							<view class="list_box">
								<view class="list_one">
									<view class="">
										{{items.long_title}}
									</view>
									<view class="">
										{{items.is_free == 0? '￥'+Number(items.v_price) : '免费'}}
									</view>
								</view>
								<view class="list_box2">
									<view class="list_two">
										<view class="">
											讲师：{{items.techer.name}}
										</view>
										
									</view>
									<view class="list_three">
										<view class="">
											共{{items.catalogue_count}}节
										</view>
										<view class="">
											已有{{items.view}}人学习
										</view>
									</view>
								</view>
							</view>
						</view>
					</scroll-view>
					
				</view>
			</view>
			
			<view class="vider_content_two" >
				<view class="two_list" v-for="(item,index) in class_list" :key='item.id'   @tap="$jump('../com_page/video_class?id='+item.id+'&title='+item.cl_name+'&type='+item.type)"  v-if="index != 0">
					<view class="two_img">
						<image :src="$api_img()+item.cl_image" mode="scaleToFill"></image>
					</view>
					<view class="two_text">
						<view class="">
							{{item.cl_name}}
						</view>
						<view class="">
							{{item.is_free == 0? '[付费]' : '[免费]'}}
						</view>
					</view>
					<view class="two_mid">
						<text style="color: #FE0000;">{{item.red_four}}</text>
						<text style="color: #E9BB00;">{{item.yell_four}}</text>
					</view>
					<view class="two_btm">
						已有{{item.showCount}}人学习
					</view>
				</view>
			</view>
			<view class="mask_black1" v-if="openid">
				<view class="binding">
					<view class="bind_top">
						绑定手机
					</view>
					<input class="input" v-model="accounts" type="text" placeholder="请输入新手机号">
					<view class="verification">
						<input type="text" v-model="verify" value="" placeholder="请输入验证码" />
						<text @tap="obtain" >{{verification}}</text>
					</view>
					<input class="input" password="true" v-model="pwd" type="text" placeholder="设置密码">
					<input class="input" password="true" v-model="re_pwd" type="text" placeholder="确认密码">
					
					<button @click="config">完成</button>
				</view>
			</view>
			
			<view class="eject" v-show="eject_show">
				<view class="eject_test">
					
					<image :src="$api_img() + eject.img" @tap="eject_jump(eject.target,eject.id)" mode="widthFix"></image>
					<image class="close" src="/static/image/com_page/close.png" mode="widthFix" @click="close()"></image>
				</view>
			</view>
			
			<view class="QRcode" @tap="$jump('/pages/subuser/brokerage/invite')">
				<image src="../../static/image/index/list3.png" mode=""></image>
			</view>
	</view>
</template>

<script>

	import { mapState } from 'vuex'
	import search from '../common/index_search.vue'
	export default {
		components:{
			search
		},
		data() {
			return {
				swiper_list: '',
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				class_top:[],
				class_list:'',
				verification: '获取验证码',
				accounts:'',
				pwd:'',
				re_pwd:'',
				disabled:false,
				verify:'',
				eject_show:'',
				eject:'',
				openid:''
			}
		},
		// computed: {
		//   // localComputed () { /* ... */ },
		//   // 使用对象展开运算符将此对象混入到外部对象中
		//   ...mapState({
		// 	  name:'name'
		//   }),
		// },	
		
		onLoad() {
			if(uni.getStorageSync('openid')){
				this.openid = uni.getStorageSync('openid')
				uni.hideTabBar()
			}
			
		},
		onShow() {
			if(uni.getStorageSync('notice') == ''){  //
				this.eject_show = true
			}else{
				var timestamp = (new Date()).getTime()
				if(timestamp - uni.getStorageSync('start_notice') > 600000){ //十分钟显示一次
					this.eject_show = true
					uni.setStorageSync('start_notice',timestamp)
				}else{
					this.eject_show = false
				}
			}
			this.Index_requ()
			// this.service.notice.call(this)
		},
		methods: {
			jump(url){
				uni.switchTab({
					url:url
				})
			},
			Tjump(data){
				if(data){
					uni.navigateTo({
						url:'../com_page/video_details?'+data
					})
				}
			},
			async Index_requ(){ //首页需同步请求，否则会导致token更新不及时返回到登录页
				await this.service.asy_entire(this,'post',this.APIconfig.api_root.index.index,{ //首页信息
					userid:this.$store.state.user.id
				},function(self,res){
					self.swiper_list = res.data.slide
					if(self.class_top.length == 0) self.class_top.push(res.data.class_list[0])
					self.class_list = res.data.class_list
				})
				
				
				await this.service.asy_entire(this,'post',this.APIconfig.api_root.index.advertise,{  //首页弹框图
					// userid:this.$store.state.user.id
				},function(self,res){
					self.eject = res.data
				})
				
				await this.service.asy_entire(this,'post',this.APIconfig.api_root.common.UnRead,{
					user_id:this.$store.state.user.id,
				},function(self,res){ //通知
					// res.data.count == 0 ? self.$store.commit('notice_status',false) :  self.$store.commit('notice_status',true)
					self.$store.commit('notice_status',res.data.count)
				})
				
				
			},
			close(){
				this.eject_show = false
				var timestamp = (new Date()).getTime()
				if(!uni.getStorageSync('start_notice'))uni.setStorageSync('start_notice',timestamp)
				uni.setStorageSync('notice',1)
			},
			eject_jump(type,id){
				if(id){
					if(type == 'shangpin'){//商品
						uni.navigateTo({
							url:'../subhome/details?id='+id
						})
					}else if(type == 'shipin'){ //视频
						uni.navigateTo({
							url:'../com_page/video_details?'+id
						})
					}else if(type == 'huodong'){ //活动
						uni.navigateTo({
							url:'../activity/particulars?id='+id
						})
					}else if(type == 'pintuan'){ //拼团
						uni.navigateTo({
							url:'../subhome/threehome/group_products?id='+id
						})
					}else{ //文章
						uni.navigateTo({
							url:'../subindex/article?id='+id
						})
					}
				}
			},
			temporary(){
				uni.showToast({
					icon:'none',
					title:'暂未开放！'
				})
			},
			config(){
				if(this.pwd != this.re_pwd){
					uni.showToast({
						icon:'none',
						title:'输入密码不一致！'
					})
					return
				}
				let data = {
					sms_code:this.verify,
					mobile:this.accounts,
					password:this.pwd,
					openid:this.openid,
					nickname:uni.getStorageSync('nickname'),
					parent_id:0
				}
				console.log(data)
				this.service.entire(this,'post',this.APIconfig.api_root.index.bindPhone,data,function(self,res){
					uni.showToast({
						icon:'none',
						title:res.msg
					})
					if(res.code == 0){
						self.openid = ''
						self.$store.commit('state_user',res.data.memberInfo)
						self.$store.commit('state_token',res.token)
						// console.log(res.data.memberInfo)
						// console.log(res.token)
						uni.setStorageSync('state_user',res.data.memberInfo)
						uni.setStorageSync('state_token',res.token)
						uni.removeStorageSync('openid')
						uni.showTabBar()
						self.Index_requ()
					}
				})
			},
			obtain(){ //获取验证码
				let that = this
				// console.log(123)
				if(!(/^1[3-9][0-9]\d{8,11}$/.test(that.accounts))){
					uni.showToast({
						icon: 'none',
						title: '手机号码格式不正确'
					});
					return true; 
				}
				if(that.disabled == true) return
				let data = {
					mobile:that.accounts,
					time:Date.parse(new Date())/1000  //时间戳
				}
				uni.request({
					url:that.APIconfig.api_root.login.sendPhone,
					method:'POST',
					data,
					success(res) {
						let data = res.data 
						uni.showToast({
							icon:'none',
							title:JSON.stringify(data.data.send_code)
						})
						if(data.code == 0){
							that.verification = '60s'
							that.disabled = true
							that.timer = setInterval(function(){
								let num = that.verification.split('s')[0]
								num --
								that.verification = num+'s'
							},1000)
							uni.showToast({
								icon:'none',
								title:data.data.send_code
							})
						}
					}
				})
			},
		},
		onTabItemTap(e) {
		},
		watch:{
			verification(curval,oldval){// 监听定时器的num值
				if(curval == '-1s'){
					clearInterval(this.timer)
					this.verification = '重新获取'
					this.disabled = false
				}
			}
		},
	}
</script>

<style lang="scss">
	.content {
		// padding-top: var(--status-bar-height);
	}
	.swiper_box{
		padding: 0 20rpx;
		background: #fff;
		.swiper{
			height:350rpx;
		}
		image{
			width: 100%;
			height: 250rpx;
		}
	} 
	
	.index_tab{
		text-align: center;
		font-size: 28rpx;
		padding: 20rpx 20rpx 0 20rpx;
		margin-top: 10rpx;
		min-height: 300rpx;
		background: #f2f2f2;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.tab_list{
			width: 23%;
			margin-bottom: 25rpx;
			height: 123rpx;
			padding: 20rpx 0;
			background: #FFFFFF;
			border-radius: 5rpx;
		}
		image{
			height: 90rpx;
			width: 90rpx;
		}
	}
	.video_box{
		border-bottom: 20rpx solid #f2f2f2;
		.vider_content{
			white-space: nowrap;
			padding: 0 20rpx;
			.content_list{
				display: inline-block;
				width: 50%;
				font-size: 28rpx;
				box-sizing: border-box;
				white-space: initial;
				vertical-align: top;
				padding-bottom: 30rpx;
				.list_img_box{
					text-align: center;
					margin-bottom: 16rpx;
				}
				.list_box{
					// height: 120rpx;
					padding: 0 10rpx;
					box-sizing: border-box;
					display: flex;
					justify-content: space-between;
					flex-direction: column;
				}
				image{
					width: 343rpx;
					height: 229rpx;
				}
			}
		}
	}
	.v_box_top{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20rpx;
		font-size: 28rpx;
		margin: 20rpx 0;
		.box_left{
			display: flex;
			align-items: center;
			font-size: 38rpx;
			font-weight: bold;
			.red{
				display: inline-block;
				margin-right: 10rpx;
				height: 38rpx;
				width: 4rpx;
				background: #FE0000;
			}
		}
		.box_right{
			font-size: 28rpx;
			color: #E9BB00;
		}
	}
	.list_one{
		padding-right: 10rpx;
		font-size: 30rpx;
		display: flex;
		justify-content: space-between;
		view:nth-of-type(1){
			word-wrap: normal;
			overflow: hidden;
		}
		view:nth-of-type(2){
			font-size: 28rpx;
			color: #D80000;
		}
	}
	 .list_two{
		color: #999999;
		margin: 10rpx 0;
		display: flex;
		justify-content: space-between;
		
	}
	
	.vider_content_two{
		display: flex;
		flex-wrap: wrap;
		font-size: 30rpx;
		// text-align: center;
		padding: 0rpx 20rpx 10rpx 20rpx;
		.two_list{
			margin-top: 40rpx;
			.two_img{
				width: 344rpx;
				height: 210rpx;
				border-radius: 10rpx;
				overflow: hidden;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.two_text{
				margin:10rpx 0 ;
				display: flex;
				justify-content: space-between;
				view{
					&:nth-of-type(2){
						color: #FE0000;
					}
				}
			}
			.two_mid{
				font-size: 28rpx;
				margin-bottom: 10rpx;
			}
			.two_btm{
				font-size: 28rpx;
				color: #666666;
			}
			&:nth-of-type(odd){
				margin-right: 20rpx;
			}
		}
		
	}
	.list_three{
		display: flex;
		justify-content: space-between;
		color: #EF7C38;
		font-size: 28rpx;
		view:nth-of-type(2){
			color: #999999;
		}
	}
	.mask_black1{
		z-index: 10001;
		background: rgba(0,0,0,.3);
		position: fixed;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		.binding{
			// height: 700rpx;
			
			width: 560rpx;
			box-sizing: border-box;
			padding: 0 20rpx 20rpx 20rpx;
			background: #FFFFFF;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			.bind_top{
				text-align: center;
				font-size: 32rpx;
				padding: 20rpx 0;
			}
			.input{
				font-size: 24rpx;
				border-bottom: 2rpx solid #F2F2F2;
				padding: 30rpx 60rpx;
			}
			.verification{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding-right: 60rpx;
				border-bottom: 2rpx solid #F2F2F2;
				input{
					font-size: 24rpx;
					padding: 30rpx 0 30rpx 60rpx;
				}
				text{
					font-size: 26rpx;
					color: #32A6FF;
				}
			}
			button{
				width:410rpx;
				height:80rpx;
				background:rgba(216,0,0,1);
				border-radius:40rpx;
				font-size: 32rpx;
				color: #FFFFFF;
				text-align: center;
				display: block;
				line-height: 80rpx;
				margin: 40rpx auto 0;
			}
		}
	}
	.eject{
		height: 100%;
		width: 100%;
		background:rgba(0,0,0,.5);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 998;
		.eject_test{
			position: absolute;
			text-align: center;
			left: 50%;
			top: 315rpx;
			transform: translateX(-50%);
			font-size: 36rpx;
			color: #fff;
			background-size: 100% 100%;
			.close{
				height: 72rpx;
				width: 72rpx;
				margin-left: -36rpx;
				margin-top: 20rpx;
			}
		}
		
		
	}

</style>
