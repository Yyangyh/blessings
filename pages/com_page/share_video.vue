<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<share ref="share" :datas='share_arr'></share>
		<view class="content_top">
			<view class="top_returns" @tap="service.returns()">
				<image src="/static/image/com_page/returns.png" mode="widthFix"></image>
			</view>
			<view class="top_search">
				课程详情
			</view>
			<view class="top_img" @tap="tips">
				<image src="/static/image/com_page/share.png" mode="widthFix"></image>
			</view>
		</view>
		 <!--  :autoplay='true' 自动播放   controls显示默认播放控件  initial-time指定视频初始播放位置 
				@pause当暂停播放时  @timeupdate播放进度变化时  @play当开始/继续播放时 
				@ended当播放到末尾时  poster视频封面的图片
		 -->
		 <block v-if="type == 1">
			 <view class="" v-if="play_url">
			 	<video id="myVideo" :src="play_url"
			 	:autoplay='true' 
			 	:controls = 'true'
			 	:initial-time = 'initial_time'
			 	@pause='pause' 
			 	@ended='play_end'  
			 	:poster='poster' >
			 	</video>
			 	
			 	<!-- <Audio :url='play_url'></Audio> -->
			 </view>
		 </block>
		
		<block v-else>
			<view class="audo-video"  v-if="play_url">
				<video id="myAudio" :src="play_url" class="hidden"
				:autoplay='true' 
				:initial-time = 'initial_time'
				@ended='play_end'  @timeupdate="Au_timeupdate" 
				></video>
				<view class="slider">
					<view class="slider_img">
						<image :src="poster" mode="widthFix"></image>
					</view>
					<view class="box">
						<view class="oper">
							<image v-show="status == 1" @tap="play" src="/static/image/com_page/play.png" mode="widthFix"></image>
							<image v-show="status == 2" @tap="stop" src="/static/image/com_page/stop.png" mode="widthFix"></image>
						</view>
						<view class="slider-box">
							<text class="mm">{{timer}}</text>
							<slider 
								style="width: 450rpx;"
								@change="sliderChange"
								@changing="sliderChanging"
								class="audio-slider" 
								block-size="16" 
								:min="0"
								:max="duration"
								:value="currentTime"
								activeColor="#ff7400"
								@touchstart="lock= true"
								@touchend="lock = false"
								/>
							<text class="ss">{{overTimer}}</text>
						</view>
					</view>
				</view>
			</view>
		</block>
		
		
		<view class="video_tab">
			<view class="tab_list" v-if="video_data.is_online == 0" :class="{test_show:test_show === 1}" @tap="test_show = 1">
				目录
			</view>
			<view class="tab_list" :class="{test_show:test_show === 0}" @tap="test_show = 0">
				课程介绍
			</view>
			
			<!-- <view class="tab_list" :class="{test_show:test_show === 2}" @tap="test_show = 2">
				评价
			</view>
			<view class="tab_list" :class="{test_show:test_show === 3}" @tap="test_show = 3">
				推荐
			</view> -->
		</view>
		<view v-show="test_show == 0">
			<view class="video_top">
				<view class="video_explain">
					<view class="ex_one">
						{{video_data.long_title}}
					</view>
					
					<view class="ex_two">
						<image src="/static/image/com_page/stars.png" mode="widthFix" v-for="(item,index) in video_data.stars_num" :key='index'></image>
						<text>{{video_data.evaluate}}分</text>
						<text>{{video_data.view}}次{{type == 1? '观看':'收听'}}</text>
					</view>
					
					<view class="ex_three">
						￥{{video_data.v_price}}
					</view>
					<!-- <view class="ex_four" @tap="play_integral()">
						领取积分
					</view> -->
				</view>
			</view>
			
			<view class="video_mid">
				
				<view class="mid_test">
					讲师介绍
				</view>
				<view class="mid_tutor" @tap="$jump('./introduce?techer_id='+video_data.techer_id)">
					<view class="tu_one">
						<view class="Image">
							<image :src="$api_img()+video_data.head_pic" mode="scaleToFill"></image>
						</view>
						<view class="tu_name">
							<view class="">
								{{video_data.name}}
							</view>
							<view class="">
								{{video_data.position}}
							</view>
						</view>
					</view>
					<view class="tu_two">
						<image src="../../static/image/index/go.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			
			<view class="cou_details">
				课程详情 
			</view>
			<view class="rich">
				<rich-text :nodes="video_content"></rich-text>
			</view>
		</view>
		<view class="catalog_box" v-show="test_show == 1" v-if="video_data.is_online == 0">
			<view class="catalog_test">
				目录
			</view>
			<!-- <view class="catalog" v-for="(item,index) in catalog_data" :key='item.id' @click="chiose_video(index,item.cou_is_free,item.id)"> -->
			<view class="catalog" v-for="(item,index) in catalog_data" :key='item.id' @click="chiose_video(index,item.cou_is_free,item.id)">
				<view class="play_status"> 
					<image v-if="indexs === index"  src="../../static/image/com_page/video_HL.png" mode="widthFix"></image>
					<image  v-else src="../../static/image/com_page/video.png" mode="widthFix"></image>
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>
		<view v-show="test_show == 2">
			<view class="user_top">
				<view class="">
					用户评论
				</view>
				<view class="" @tap="$jump('./comment?id='+id)">
					全部
				</view>
			</view>
			<view class="user_comment" v-for="(item,index) in comments" :key='item.id' v-if="comments.length != 0">
				<view class="user">
					<view class="user_one">
						<view class="img_box">
							<image class="user_img"  :src="$api_img() +item.avatar" mode="scaleToFill"></image>
						</view>
						<view class="user_test" >
							<view>{{item.username}}</view>
						</view>
					</view>
					<view class="user_star">
						<view class="">
							<image v-for="(item,index) in item.rating_num" src="/static/image/com_page/stars.png" mode="widthFix"></image>
						</view>
						<text>{{service.Test(item.created_at)}}</text>
					</view>
				</view>
				<view class="com_content">
					<view class="content_test">
						<view class="">
							{{item.content}}
						</view>
					</view>
				</view>
			</view>
			<view class="lack_img" v-if="comments.length == 0">
				
				<image  src="/static/image/com_page/lack.png" mode="widthFix"></image>
				<view class="">
					暂无评论
				</view>
			</view>
		</view>
		
		<view v-show="test_show == 3">
			<view class="user_top">
				<view class="">
					相关课程推荐
				</view>
			</view>
			<view class="vider_content">
				<view class="content_list" v-for="(item,index) in recommend_video" :key='item.id'  @tap="$jump('../com_page/video_details?id='+item.id+'&type='+item.type)">
					<view class="list_img_box">
						<image :src="$api_img()+item.v_pic" mode="scaleToFill"></image>
					</view>
					<view class="list_right">
						<view class="list_one">
							{{item.long_title}}
						</view>
						<view class="">
							<view class="list_two">
								<view class="">
									共{{item.catalogue_count}}节
								</view>
								<view class="">
									<view class="list_vip" v-if="item.free_type > 0">
										{{item.free_dec}}免费
									</view>
									<view class="">
										{{item.is_free == 1 || Number(item.v_price) <= 0 ? '免费' : item.is_free == 0 && item.is_buy == 1 ? '已购' : '￥'+Number(item.v_price)}}
									</view>
								</view>
							</view>
							<view class="list_three">
								<view class="">
									讲师：{{item.techer.name}}
								</view>
								<view class="">
									已有{{item.view}}人学习
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="collect" :class="show===false ? 'none' : show===true ? 'show' : ''">
			<image :src="tips_img" mode="widthFix"></image>
			<view class="">
				{{tips_test}}
			</view>
		</view>
		
		<view class="mask_black" v-show="coupon_show" @tap="coupon_show = false">
			<!-- 遮罩层 层级888 -->
		</view>
		
		
		<!-- <view class="give_box" v-if="give_show">
			<view class="give_top">
				赠送说明
			</view>
			<view class="give_text">
				<view class="">
					1.请在我的“个人中心”完成亲情号邀请注册。
				</view>
				<view class="">
					2.购买课程后，可通过链接分享给亲情好友。
				</view>
				<view class="">
					3.在亲情号共享资源领取后就能免费观看课程。
				</view>
				<view class="">
					4.邀请您的亲密爱人或其它家人一起学习吧。
				</view>
			</view>
			<image  @tap="give_show = false" src="../../static/image/com_page/close.png" mode="widthFix"></image>
		</view> -->
		<!-- #ifdef H5 -->
		
		<view class="download" @tap="$jump('../login/reg?code='+code)">
			下载APP观看精彩内容
		</view>
		
		<!-- #endif -->
		
		<load v-if="load_show"></load>
	</view>
</template>

<script>
	import integral_img from '../../static/image/com_page/integral.png'
	import load from '../common/load.vue'
	import share from'../common/share.vue'
	import Audio from'../../components/wangding-audioQuickPlay/index'
	const bgAudioMannager = uni.getBackgroundAudioManager();
	// const music = uni.requireNativePlugin('Html5app-Music');
	export default{
		components:{
			load,
			share,
			Audio
		},
		data() {
			return {
				id:'',
				type:'',
				data:'',
				video_data:'',
				video_content:'',
				test_show:1,
				catalog_data:'',
				play_url:'',
				indexs:'',
				show:false,
				tips_test:'',
				tips_img:'',
				coupon_data:'',
				coupon_show:false,
				comments:'',
				recommend_video:'',
				play_store:false,
				poster:'',
				record_time:0,
				load_show:true,
				duration_time:'',
				initial_time:0 ,//指定视频播放初始秒数
				share_arr:{},
				code:'',
				
				//mp3
				lock: false, // 锁
				status: 2, // 1暂停 2播放
				currentTime: 0,  //当前进度
				duration: 100, // 总进度
				videoContext: '',
				
				//mp3
			}
		},
		computed:{
			is_free(){ //判断是否免费
				if(this.video_data.is_free == 1){
					return false
				}else if(this.video_data.is_free == 0){
					return true
				}
			},
			timer() {
				return calcTimer(this.currentTime)
			},
			overTimer() {
				return calcTimer(Number(this.video_data.avinfo))
			}
		},
		
		
		methods:{
			
			
			// 播放
			play() {
				this.status = 2
				// bgAudioMannager.play()
				this.videoContext.play()
			},
			// 暂停
			stop() {
				this.videoContext.pause()
				// bgAudioMannager.pause()
				this.status = 1
			},
			
			// 拖动进度条
			sliderChange(data) {
				bgAudioMannager.seek(data.detail.value)
			},
			
			//拖动中
			sliderChanging(data) {
				this.currentTime = data.detail.value
			},
			 
			// 视频加载完成
			loadedmetadata(data) {
				this.duration = data.detail.duration
			},
			
			
			pause(e){
				// console.log(e)
			},
			
			tips(){ //分享
				// #ifdef H5
				uni.showModal({
				    title: '提示',
				    content: '请点击右上角选择分享！',
					showCancel:false,
				    success: function (res) {
				       
				    }
				});
				// #endif
				// #ifdef APP-PLUS
				this.$refs.share.share();
				// #endif
			},
			Au_timeupdate(e) {  //音频
				// console.log(e.detail.duration)
				// console.log( e.detail.currentTime)
				if(this.lock) return; // 锁
				// console.log(e)
				var currentTime,duration;
				if(e.detail.detail) {
					currentTime = e.detail.detail.currentTime
					duration = e.detail.detail.duration
				}else {
					currentTime = e.detail.currentTime
					duration = e.detail.duration
				}
				
				this.duration_time = e.detail.duration
				this.currentTime = currentTime
				this.duration = duration
			},
			
			
			
			chiose_video(index,cou_is_free,id){ //选择目录播放
				if(cou_is_free == false){
					uni.showModal({
					    title: '提示',
					    content: '是否购买该视频？',
					    success: res =>{
					        if (res.confirm) {
								// this.order_sn(id)
								// this.order_sn()
								this.$jump('../login/reg?code='+this.code)
							} 
					    }
					});
				}else{
					this.indexs = index
					this.initial_time = 0
					this.play_url = this.service.analysis_url(this.catalog_data[index].video_url)
				}
				
			},
			async play_end(e){ //播放结束时
				let testing = function(index){
					if(this.catalog_data[index].cou_is_free == false){
						uni.showModal({
						    title: '提示',
						    content: '该视频需要购买才能继续观看，是否购买？',
						    success: res =>{
						        if (res.confirm) {
									// this.order_sn(this.catalog_data[index].id)
									// this.order_sn()
									this.$jump('../login/reg?code='+this.code)
								}else if (res.cancel) {
									this.indexs--
								}
						    }
						});
					}else{
						this.play_url = this.service.analysis_url(this.catalog_data[index].video_url)
					}
				}
				if(this.indexs || this.indexs === 0){ //当宣传视频播放结束时
					let that = this
					this.record_time = 0
					if(this.indexs === this.catalog_data.length - 1) return//当视频目录最后一个播放完毕时 
					this.indexs++
					testing.call(this,this.indexs)
				}else{
					this.indexs = 0
					testing.call(this,this.indexs)
				}
				
			},
			
			
			// initial-time指定视频初始播放位置 
			// @pause当暂停播放时  @timeupdate播放进度变化时  @play当开始/继续播放时 
			// @ended当播放到末尾时
			initAudio(){
				let that = this
				let audio = bgAudioMannager 
				
				if(audio.paused){
					audio.play()
				}
				audio.onEnded(function(){  //播放结束时
					that.status = 1
					that.play_end.call(this)
				})
			},
			async async_n(){ //需同步请求
				await this.service.asy_entire(this,'post',this.APIconfig.api_root.com_page.ShareVideoDetail,{ //视频详情
					video_id:this.id
				},function(self,res){
					self.data = res.data
					
					res.data.v_url ? self.play_url = self.service.analysis_url(res.data.v_url) : self.indexs = 0
					
					
					self.video_data = res.data
					if(self.video_data.is_online == 1) self.test_show = 0
					
					self.share_arr.Title =  res.data.title//分享
					self.share_arr.Summary =  res.data.long_title//分享
					self.share_arr.ImageUrl = self.$api_img() + res.data.v_pic//分享
					
					let richtext=  res.data.video_content
					const regex = new RegExp('<img', 'gi');
					self.video_content = richtext.replace(regex, `<img style="max-width: 100%;"`);
					
					self.poster = res.data.screensaver
					if(self.video_data.evaluate)self.video_data.stars_num = new Array(Number(self.video_data.evaluate))
				})
				
				await this.service.asy_entire(this,'post',this.APIconfig.api_root.com_page.ShareCatalogue,{ //视频目录
					video_id:this.id,
					user_id:this.$store.state.user.id,
				},function(self,res){
					let data = res.data.video_list
					
					if(self.is_free == false){//当视频免费时目录全免
						for (let s of data) {
							s.cou_is_free = true
						}
					}else{
						for (let s of data) {//判断目录是否免费
							s.cou_is_free = false
						}
						
					}
					
					self.catalog_data = data
					self.load_show = false
					// if(self.type == 2){
					// 	// mp3背景音乐
					// 	// #ifdef APP-PLUS
					// 	// console.log(self.poster)
					// 	bgAudioMannager.title = self.video_data.long_title;
					// 	bgAudioMannager.singer = self.video_data.name;
					// 	bgAudioMannager.coverImgUrl = self.poster;
					// 	bgAudioMannager.src = self.play_url
					// 	self.initAudio()
					// 	// #endif
					// 	// mp3背景音乐
					// }
					
				})
				
			}
		},
		created() {
			this.videoContext = uni.createVideoContext('myAudio')
			//  console.log(this.videoContext)
			//打开通知栏控制条
			let ua = navigator.userAgent.toLowerCase();
			if (ua.match(/MicroMessenger/i) == "micromessenger") {  //判断是否是微信浏览器
				this.status = 1
			}
		},
		onShow() {
			
		},
		onReady: function (res) {
			// this.videoContext = uni.createVideoContext('myVideo')
		},
		onLoad(e) {
			// const music=uni.requireNativePlugin('Html5app-Music');
			console.log(e)
			this.share_arr.Url = 'https://www.wufu-app.com/h5/#/pages/com_page/video_details?id='+e.id+'&type='+e.type+'&code='+this.$store.state.user.invite_code
			this.id = e.id
			this.type = e.type
			if(e.code) this.code = e.code
			this.async_n()
		},
		onHide(){
			this.videoContext.pause()
			this.status = 1
			
		},
		onUnload(){
			this.videoContext.pause()
			// bgAudioMannager.pause()
			this.status = 1
		}
	}
	function calcTimer(timer) {
	
		if(timer === 0 || typeof timer !== 'number' || isNaN(timer) || timer < 0) {
			return '00:00'
		}
		let mm = Math.floor(timer / 60)
		let ss = Math.floor(timer % 60)
		if(mm < 10) {
			mm = '0' + mm
		}
		if(ss < 10) {
			ss = '0' + ss
		}
		return mm + ':' + ss
	}
</script>

<style lang="less">
	.content{
		/*  #ifdef  H5  */
		padding-bottom: 200rpx;
		/*  #endif  */
		
		/*  #ifdef  APP-PLUS  */
		padding-bottom: 120rpx;
		/*  #endif  */
	}
	.content_top{
		position: fixed;
		z-index: 999;
		top: var(--status-bar-height);
		left: 0;
		width: 100%;
		background: #FFFFFF;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		height: 105rpx;
		padding: 0 20rpx;
		.top_search{
			flex-grow: 2;
			height: 65rpx;
			line-height: 65rpx;
			text-align: center;
			font-weight:500;
			font-size: 32rpx;
		}
		image{
			height: 50rpx;
			width: 50rpx;
			margin-left: 10rpx;
		}
		.top_returns image{
			height: 31rpx;
			width: 31rpx;
			padding-right: 10rpx;
		}
	}
	.audo-video {
		padding-bottom: 20rpx;
		.hidden {
			position: fixed;
			z-index: -1;
			width: 1rpx;height: 1rpx;
		}
		.slider{
			.slider_img{
				image{
					width: 100%;
					height: 400rpx;
				}
			}
			.box{
				display: flex;
				align-items: center;
				padding: 0 20rpx;
				.slider-box {
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 26rpx;
					color: #999;
				}
				.oper{
					display: flex;
					align-items: center;
					image{
						margin-right: 10rpx;
						width: 45rpx;
						height: 45rpx;
					}
				}
			}
			
		}
	}
	
	
	
	
	.video_tab{
		background: #F6F6F6;
		text-align: center;
		display: flex;
		justify-content: space-between;
		color: #999;
		.tab_list{
			width: 50%;
			height: 100rpx;
			line-height: 100rpx;
			font-size: 32rpx;
			border-bottom: 2rpx solid #F6F6F6;
		}
	}
	.video_top {
		font-size: 32rpx;
		
	}
	.test_show{
		border-bottom-color: #D80000 !important;
		color: #000000;
	}
	.video_explain {
		position: relative;
		padding: 30rpx 22rpx;
		border-bottom: 20rpx solid #F6F6F6;
		
		.ex_two{
			margin: 15rpx 0;
		}
		.ex_three{
			color: #D80000;
			font-size: 32rpx;
		}
		.ex_four{
			position: absolute;
			right: 0;
			bottom: 30rpx;
			background: linear-gradient(135deg,rgba(247,76,74,1),rgba(245,110,106,1));
			color: #fff;
			font-size: 28rpx;
			text-align: center;
			height: 50rpx;
			line-height: 50rpx;
			width: 143rpx;
			border-top-left-radius: 50rpx;
			border-bottom-left-radius: 50rpx;
		}
		
		image{
			height: 25rpx;
			width: 25rpx;
			margin-right: 12rpx;
		}
		text{
			margin-right: 12rpx;
			color: #999999;
		}
	}
	
	.video_mid{
		font-size: 28rpx;
		.discount{
			height: 90rpx;
			margin: 0 20rpx;
			border-bottom: 2rpx solid #F4F4F4;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.dis_one{
				
				image{
					margin-right: 20rpx;
					height: 32rpx;
					width: 32rpx;
				}
			}
			.dis_two{
				image{
					height: 22rpx;
					width: 22rpx;
					margin-left: 16rpx;
				}
			}
			view{
				display: flex;
				align-items: center;
			}
		}
		.mid_test{
			padding: 30rpx 20rpx;
		}
		.mid_tutor{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0rpx 20rpx 35rpx 20rpx;
			.tu_one{
				display: flex;
				align-items: center;
				image{
					height: 88rpx;
					width: 88rpx;
					margin-right: 27rpx;
					border-radius: 50%;
				}
				.tu_name{
					view:nth-of-type(1){
						font-size: 32rpx;
					}
					view:nth-of-type(2){
						color: #999999;
					}
				}
			}
			.tu_two{
				image{
					height: 22rpx;
					width: 22rpx;
				}
			}
		}
	}
	.cou_details{
		font-size: 28rpx;
		height: 96rpx;
		line-height: 96rpx;
		background: #F6F6F6;
		padding: 0 20rpx;
	}
	.rich{
		padding: 20rpx;
	}
	.download{
		width: 100%;
		background: #fff;
		position: fixed;
		color: #FE0000;
		background: #FCCF00;
		left: 0;
		bottom: 0rpx;
		box-sizing: border-box;
		height: 80rpx;
		line-height: 80rpx;
		padding: 0 21rpx;
		text-align: center;
		color: ;
	}
	.video_bottom{
		width: 100%;
		background: #fff;
		position: fixed;
		left: 0;
		bottom: 0;
		box-sizing: border-box;
		height: 120rpx;
		padding: 0 21rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.bot_left{
			color: #D80000;
			font-size: 32rpx;
			flex-grow: 2;
		}
		.bot_right{
			display: flex;
			align-items: center;
			flex-grow: 2;
			justify-content: center;
			.bot_col{
				text-align: center;	
				font-size: 24rpx;
				color: #999999;
				margin-right: 33rpx;
			}
			.bot_buy{
				background: #D80000;
				text-align: center;
				border-radius: 40rpx;
				color: #fff;
				font-size: 28rpx;
				height: 80rpx;
				line-height: 80rpx;
				width: 343rpx;
				text{
					margin-right: 10rpx;
				}
			}
		}
		image{
			height: 44rpx;
			width: 44rpx;
		}
	}
	video{
		width: 100%;
	}
	.collect{
		padding: 20rpx 20rpx;
		background: rgba(0,0,0,.7);
		font-size: 24rpx;
		color: #fff;
		text-align: center;
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		image{
			height: 45rpx;
			width: 45rpx;
		}
		view{
		}
	}
	.none{
		display: none;
	}
	.show{
		display: block;
	}
	.catalog_box{
		padding: 30rpx 20rpx;
		font-size: 28rpx;
		.catalog{
			margin: 30rpx 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.play_status{
				display: flex;
				justify-content: space-between;
				align-items: center;
				text{
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					overflow: hidden;
				}
			}
			.price_status{
				color: #D80000;
				width: 180rpx;
				text-align: right;
			}
			
		}
		image{
			height: 27rpx;
			width: 39rpx;
			margin-right: 30rpx;
		}
		
		
	}
	.coupon_box{
		position: fixed;
		width: 100%;
		box-sizing: border-box;
		padding: 20rpx;
		bottom: 0;
		left: 0;
		min-height: 600rpx;
		z-index: 998;
		background: #fff;
		transform: translateY(100%);
		transition: .3s;
		.box_top{
			display: flex;
			justify-content: space-between;
			font-size: 28rpx;
			font-weight: 600;
			&:before {
			    content: " ";
			    width: 40rpx;
			}
			image{
				height: 40rpx;
				width: 40rpx;
			}
		}
		.box_mid{
			font-size: 24rpx;
			color: #999999;
			padding-bottom: 20rpx;
		}
		
		.coupon_list{
			font-size: 24rpx;
			color: #fff;
			.scroll-y{
				height: 560rpx;
				.list_box{
					background: url('../../static/image/com_page/coupon.png') no-repeat;
					background-size: 100% 100%;
					position: relative;
					padding: 33rpx 22rpx;
					margin-bottom: 20rpx;
					.box_left{
						.left_top{
							display: flex;
							align-items: center;
							.top_one{
								font-size: 48rpx;
								color: #D80000;
								margin-right: 38rpx;
							}
						}
						.left_bottom{
							margin-top: 24rpx;
						}
					}
					.box_right{
						position: absolute;
						width: 170rpx;
						height: 65rpx;
						border-radius: 65rpx;
						line-height: 65rpx;
						text-align: center;
						top: 50%;
						transform: translateY(-50%);
						right: 30rpx;
					}
					.receive{
						background: #D80000;
					}
				}
			}
		}
		
	}
	.coupon_none{
		transform: translateY(100%) !important;
	}
	.coupon_show{
		transform: translateY(0) !important;
	}
	.give_box{
		position: fixed;
		z-index: 1001;
		border-radius: 20rpx;
		width: 80%;
		height: 600rpx;
		background: #fff;
		top: 50%;
		left: 50%;
		font-size: 32rpx;
		padding: 20rpx;
		box-sizing: border-box;
		transform: translate(-50%,-15%);
		.give_top{
			text-align: center;
			font-size: 36rpx;
		}
		.give_text{
			view{
				margin-top: 15rpx;
			}
		}
		image{
			position: absolute;
			top: 10rpx;
			right: 10rpx;
			height: 45rpx;
			width: 45rpx;
		}
	}
	.user_top {
		display: flex;
		justify-content: space-between;
		font-weight: bold;
		font-size: 28rpx;
		padding: 20rpx;
		view{
			&:nth-of-type(2){
				color: #EF7C38;
			}
		}
		
	}
	.user_comment {
		background: #fff;
		border-bottom: 2rpx solid #EEEEEE;
		padding: 20rpx 30rpx;
		.user {
				display: flex;
				justify-content: space-between;
				margin: 20rpx 0;
				.user_one{
					display: flex;
					.img_box{
						width: 90rpx;
						height: 90rpx;
						border-radius: 50%;
						overflow: hidden;
						.user_img {
							width: 100%;
							height: 100%;
						}
					}
					
					.user_test {
						margin: 0 20rpx;
						font-size: 32rpx;
						view {
							font-weight: bold;
							color: #333333;
							font-size: 28rpx;
						}
						
					}
				}
				.user_star {
					align-self: flex-start;
					font-size: 24rpx;
					color: #333333;
					image {
						height: 26rpx;
						width: 26rpx;
					}
					text {
						font-size: 24rpx;
						color: #999999;
						
					}
				}
			}
		.com_content {
			.content_test view {
				font-size: 24rpx;
				color: #666666;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}
			.content_img image {
				height: 120rpx;
				width: 120rpx;
				margin-right: 16rpx;
				margin-top: 30rpx;
			}
			.more {
				font-size: 32rpx;
				color: #666666;
				margin: 20rpx 0;
			}
			
		}
	}
	.lack_img{
		text-align: center;
		padding-top: 30rpx;
		font-size: 28rpx;
		color: #999;
		image{
			height: 310rpx;
			width: 310rpx;
		}
	}
	.vider_content{	
		padding: 0 20rpx;
		font-size: 24rpx;
		image{
			width: 268rpx;
			height: 179rpx;
			margin-right: 29rpx;
		}
		.content_list{
			display: flex;
			margin: 30rpx 0;
			.list_right{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				flex-grow: 2;
				padding-bottom: 20rpx;
				.list_one{
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
				}
				.list_two{
					color: #999999;
					display: flex;
					justify-content: space-between;
					margin-bottom: 10rpx;
					view:nth-of-type(2){
						display: flex;
						color: #D80000;
						font-size: 28rpx;
						.list_vip{
							background: #000000;
							font-size: 24rpx;
							color: #FFFFFF;
							padding: 5rpx 10rpx;
							box-sizing: border-box;
							border-radius: 20rpx;
							margin-right: 10rpx;
						}
					}
				}
				.list_three{
					display: flex;
					justify-content: space-between;
					color: #EF7C38;
					font-size: 24rpx;
					view:nth-of-type(2){
						color: #999999;
					}
				}
			}
		}
	}
	.Image{
		width: 88rpx;
		height: 88rpx;
		border-radius: 50rpx;
		margin-right: 20rpx;
	}
	
	
	
	
	
</style>
