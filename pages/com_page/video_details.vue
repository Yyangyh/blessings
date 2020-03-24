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
			 <view class="" v-if="poster">
			 	<video id="myVideo" :src="play_url"
			 	:autoplay='true' 
			 	:controls = 'true'
			 	:initial-time = 'initial_time'
			 	@pause='pause' 
			 	@timeupdate='timeupdate'
			 	@play='play_start' 
			 	@ended='play_end'  
			 	:poster='poster' >
			 	</video>
			 	
			 	<!-- <Audio :url='play_url'></Audio> -->
			 </view>
		 </block>
		
		<block v-else>
			<view class="audo-video"  v-if="play_url">
				<video id="myAudio" 
				:src="play_url" class="hidden" 
				:autoplay='true' 
				:initial-time = 'initial_time'
				@play='play_start' 
				@ended='play_end'  
				
				@timeupdate="Au_timeupdate" 
				ref="video" 
				@loadedmetadata="loadedmetadata" 
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
				
				
				<!-- <button @tap="play">播放</button>
				<button @tap="stop">暫停</button> -->
			</view>
		</block>
		
		
		
		<view class="video_tab">
			<view class="tab_list" :class="{test_show:test_show === 0}" @tap="test_show = 0">
				课程介绍
			</view>
			<view class="tab_list" v-if="video_data.is_online == 0" :class="{test_show:test_show === 1}" @tap="test_show = 1">
				目录
			</view>
			<view class="tab_list" :class="{test_show:test_show === 2}" @tap="test_show = 2">
				评价
			</view>
			<view class="tab_list" :class="{test_show:test_show === 3}" @tap="test_show = 3">
				推荐
			</view>
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
				<view class="discount" v-if="is_free">
					<view class="dis_one">
						<image src="../../static/image/com_page/discount.png" mode="widthFix"></image>
						<text>优惠券</text>
					</view>
					<view class="dis_two" @tap="coupon_show = !coupon_show">
						<text>领券</text>
						<image src="../../static/image/index/go.png" mode="widthFix"></image>
					</view>
				</view>
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
		<view class="catalog_box" v-show="test_show == 1">
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
				<view class="price_status" >
					<!-- {{item.cou_is_free? '已学习'+item.section_plan : '￥'+item.v_price}} -->
					{{item.cou_is_free? '已学习'+item.section_plan : '未购买'}}
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
					<!-- <view class="content_img">
						<image v-for="(item,index) in comments.images" :key='index' :src="item" mode=""></image>
					</view>
					 -->
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
				<view class="content_list" v-for="(item,index) in recommend_video" :key='item.id'  @tap="$jump('../com_page/video_details?id='+item.id)">
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
										{{item.is_free == 0? '￥'+item.v_price : '免费'}}
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
		
		<view class="coupon_box" :class="coupon_show===false ? 'coupon_none' : coupon_show===true ? 'coupon_show' : ''">
			<view class="box_top">
				<text>优惠券</text>
				<image src="../../static/image/com_page/close.png" mode="widthFix"  @tap="coupon_show = false"></image>
			</view>
			<view class="box_mid">
				领券
			</view>
			<view class="coupon_list">
				<scroll-view  scroll-y="true" class="scroll-y">
					<view class="list_box" v-for="(item,index) in coupon_data" :key='item.id'>
						<view class="box_left">
							<view class="left_top">
								<view class="top_one">
									￥{{item.discount_value}}
								</view>
								<view class="top_two">
									<view class="">
										{{item.name}}
									</view>
									<view class="">
										满减 满{{Number(item.where_order_price)}}减{{Number(item.discount_value)}}
									</view>
								</view>
							</view>
							<view class="left_bottom" v-if="item.expire_type == 0"> <!--时间戳要10位的秒级时间戳-->
								有效期：{{service.Test(Date.parse(new Date())/1000)}}至{{service.Test(Date.parse(new Date())/1000 + item.expire_hour*3600)}}
							</view>
							<view class="left_bottom" v-else>
								有效期：{{service.Test(item.fixed_time_start)}}至{{service.Test(item.fixed_time_end)}}
							</view>
						</view>
						<view class="box_right" :class="{receive:!item.c_id}" @tap="getCoupon(item.id,item.c_id,index)">
							{{item.c_id>0? '已领取' : '立即领取'}}
						</view>
					</view>
				</scroll-view>
			</view>
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
		<view class="video_bottom">
			<!-- <view class="bot_left" >
				￥
			</view> -->
			<view class="bot_right">
				<view class="bot_col" @tap="$jump('./video_give')">
					<image  src="../../static/image/com_page/give.png" mode="widthFix"></image>
					<view class="">
						赠送说明
					</view>
				</view>
				<view class="bot_col" @tap="collect()" >
					<image v-show="collects == 0" src="../../static/image/com_page/collect.png" mode="widthFix"></image>
					<image v-show="collects == 1" src="../../static/image/com_page/collect_HL.png" mode="widthFix"></image>
					<view class="">
						收藏
					</view>
				</view>
				<block  v-if="video_data.is_online == 0">
					<view class="bot_buy" @tap="order_sn()"    v-if="is_free">
						<text v-if="is_free">{{'￥'+Number(video_data.v_price)}}</text>立即购买
					</view>
					<view class="bot_buy" v-else>
						{{type == 1?'免费观看' : '免费悦听'}}
					</view>
				</block>
				
			</view>
		</view>
		<load v-if="load_show"></load>
	</view>
</template>

<script>
	import collect_img from '../../static/image/com_page/collect_HL.png'
	import integral_img from '../../static/image/com_page/integral.png'
	import load from '../common/load.vue'
	import share from'../common/share.vue'
	import Audio from'../../components/wangding-audioQuickPlay/index'
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
				test_show:0,
				catalog_data:'',
				play_url:'',
				indexs:'',
				show:false,
				collects:'',
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
				receive_status:false,
				initial_time:0 ,//指定视频播放初始秒数
				share_arr:{},
				
				//mp3
				lock: false, // 锁
				status: 1, // 1暂停 2播放
				currentTime: 0,  //当前进度
				duration: 100, // 总进度
				videoContext: ''
				//mp3
			}
		},
		computed:{
			is_free(){ //判断是否免费
				if(this.video_data.is_free == 1){
					return false
				}else if(this.video_data.is_free == 0){
					if(this.video_data.is_free_vip.indexOf(this.$store.state.user.level_id) == -1){
						if(this.data.vorder.is_bay_all == 1){
							return false
						}else{
							return true
						}
					}else{
						return false
					}
				}
			},
			timer() {
				return calcTimer(this.currentTime)
			},
			overTimer() {
				return calcTimer(this.duration)
			}
		},
		created() {
			 this.videoContext = uni.createVideoContext('myAudio')
		},
		methods:{
			
			
			// 播放
			play() {
				this.status = 2
				this.videoContext.play()
			},
			// 暂停
			stop() {
				this.videoContext.pause()
				this.status = 1
			},
			// 更新进度条
			Au_timeupdate(e) {  //音频
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
				if(this.indexs || this.indexs === 0){
					if(Math.ceil(e.detail.currentTime) % 10 == 0){ //10s记录一次
						if(Math.ceil(e.detail.currentTime) != this.record_time)	{
							this.record_time = Math.ceil(e.detail.currentTime)
							this.record_play(e.detail.currentTime,e.detail.duration) //记录播放进度
							let speed = Math.round((Math.ceil(e.detail.currentTime)/Math.ceil(e.detail.duration))*100)/100
							if(speed > 0.8 && this.receive_status == false){ //当播放比例大于百分之80时自动领取章节积分
								this.receive_int() //自动领取积分
								this.receive_status = true
							}
						}
					}
				}
				
				this.currentTime = currentTime
				this.duration = duration
			},
			
			// 拖动进度条
			sliderChange(data) {
				this.videoContext.seek(data.detail.value)
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
			timeupdate(e){ //记录播放进度
				this.duration_time = e.detail.duration
				if(this.indexs || this.indexs === 0){
					if(Math.ceil(e.detail.currentTime) % 10 == 0){ //10s记录一次
						if(Math.ceil(e.detail.currentTime) != this.record_time)	{
							this.record_time = Math.ceil(e.detail.currentTime)
							this.record_play(e.detail.currentTime,e.detail.duration) //记录播放进度
							let speed = Math.round((Math.ceil(e.detail.currentTime)/Math.ceil(e.detail.duration))*100)/100
							if(speed > 0.8 && this.receive_status == false){ //当播放比例大于百分之80时自动领取章节积分
								this.receive_int() //自动领取积分
								this.receive_status = true
							}
						}
					}
				}
				
			},
			record_play(currentTime,duration){//记录播放进度
				if(isNaN(duration)) return
				return new Promise((resolve, reject) =>{ //将异步请求变同步
					this.service.entire(this,'post',this.APIconfig.api_root.com_page.v_playProcess,{
						video_id:this.id,
						user_id:this.$store.state.user.id,
						section_id:this.catalog_data[this.indexs].id,
						play_time:currentTime,
						s_process:duration
					},function(self,res){
						self.duration_time = 0 //每次记录完都要清空
						console.log(self.indexs)
						self.catalog_data[self.indexs].section_plan = res.section_plan
						resolve('suc');
					})
				})
				
			},
			receive_int(){ //自动领取积分
				this.service.entire(this,'post',this.APIconfig.api_root.com_page.v_integral,{
					video_id:this.id,
					userid:this.$store.state.user.id,
					mobile:this.$store.state.user.mobile,
					section_id:this.catalog_data[this.indexs].id
				},function(self,res){
					
				})
			},
			play_start(e){ //添加视频阅读量 
				// console.log(e)
				if(this.play_store == false){
					this.play_store = true
					this.service.entire(this,'post',this.APIconfig.api_root.com_page.v_playCount,{
						video_id:this.id,
						userid:this.$store.state.user.id,
					},function(self,res){
						
					})
				}
				
			},
			chiose_video(index,cou_is_free,id){ //选择目录播放
				if(cou_is_free == false){
					uni.showModal({
					    title: '提示',
					    content: '是否购买该视频？',
					    success: res =>{
					        if (res.confirm) {
								// this.order_sn(id)
								this.order_sn()
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
									this.order_sn()
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
					await this.record_play(this.duration_time,this.duration_time)
					this.receive_status == false ? this.receive_int() : this.receive_status = false //播放结束时再判断一次是否领取积分
					if(this.indexs === this.catalog_data.length - 1) return//当视频目录最后一个播放完毕时 
					this.indexs++
					testing.call(this,this.indexs)
				}else{
					this.indexs = 0
					testing.call(this,this.indexs)
				}
				
			},
			collect(){ //视频收藏
			
				let times = this.service.loading()
				this.service.entire(this,'post',this.APIconfig.api_root.com_page.v_collect,{ 
					video_id:this.id,
					userid:this.$store.state.user.id,
					mobile:this.$store.state.user.mobile,
					c_type:this.collects == 1? 0 : 1
				},function(self,res){
					uni.hideLoading()
					clearTimeout(times)
					self.tips_test = res.msg
					self.tips_img = collect_img
					self.show = true
					setTimeout(function() {
						self.show = false
					}, 1500);
					if(res.code == 0){
						self.collects == 1? self.collects = 0 : self.collects = 1
					}
				})
			},
			play_integral(){ //领取积分
				let times = this.service.loading()
				this.service.entire(this,'post',this.APIconfig.api_root.com_page.v_integral,{
					video_id:this.id,
					userid:this.$store.state.user.id,
					mobile:this.$store.state.user.mobile,
					section_id:1
				},function(self,res){
					uni.hideLoading()
					clearTimeout(times)
					self.tips_test = res.msg
					self.tips_img = integral_img
					self.show = true
					setTimeout(function() {
						self.show = false
					}, 1500)
				})
			},
			getCoupon(id,cid,index){//领取优惠券
				console.log(id,cid)
				if(!cid){
					this.service.entire(this,'post',this.APIconfig.api_root.com_page.v_getCoupon,{ //领取优惠券
						userid:this.$store.state.user.id,
						coupon_id:id
					},function(self,res){
						uni.showToast({
							icon:'none',
							title:res.msg
						})
						if(res.code == 0){
							self.coupon_data[index].c_id = id
							
						}
					})
				}
			},
			order_sn(section_id){ //点击购买时生成订单
				let s_id = section_id? section_id: 0
				this.service.entire(this,'post',this.APIconfig.api_root.com_page.v_addOrder,{
					userid:this.$store.state.user.id,
					video_id:this.id,
					section_id:s_id
				},function(self,res){
					if(res.code == 0){
						
						self.$jump('./v_order?id='+self.id+'&s_id='+s_id+'&order_sn='+res.data.order_sn+'&type='+self.type)
					}else{
						uni.showToast({
							icon:'none',
							title:res.msg
						})
					}
				})
			},
			async async_n(){ //需同步请求
				await this.service.asy_entire(this,'post',this.APIconfig.api_root.com_page.VideoDetail,{ //视频详情
					video_id:this.id,
					userid:this.$store.state.user.id,
					mobile:this.$store.state.user.mobile,
				},function(self,res){
					self.data = res.data
					res.data.video.v_url ? self.play_url = self.service.analysis_url(res.data.video.v_url) : self.indexs = 0
					self.video_data = res.data.video
					
					self.share_arr.Title =  res.data.video.title//分享
					self.share_arr.Summary =  res.data.video.long_title//分享
					self.share_arr.ImageUrl = self.$api_img() + res.data.video.v_pic//分享
					
					
					
					let richtext=  res.data.video.video_content
					const regex = new RegExp('<img', 'gi');
					richtext= richtext.replace(regex, `<img style="max-width: 100%;"`);
					self.video_content = richtext;
					
					
					self.collects = res.data.video.collect
					self.poster = res.data.video.screensaver
					if(self.video_data.evaluate)self.video_data.stars_num = new Array(Number(self.video_data.evaluate))
				})
				
				await this.service.asy_entire(this,'post',this.APIconfig.api_root.com_page.catalogue,{ //视频目录
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
						if(self.data.vorder.is_bay_all == 1){
							for (let s of data) {
								s.cou_is_free = true
							}
						}else if(self.data.vorder.is_bay_all == 0){
							for (let s of data) {
								s.cou_is_free = false
							}
							// for (let s of data) {
							// 	if(self.data.vorder.section_all.indexOf(s.id) != -1 || s.v_price == 0) s.cou_is_free = true
							// }
						}
					}
					
					if(res.data.video.new_play){  //当用户有历史播放记录时
						console.log(data[res.play_index])
						self.indexs = res.play_index
						self.play_url = self.service.analysis_url(data[res.play_index].video_url)
						let play_time = res.data.video.new_play.play_time
						play_time > 10 ? self.initial_time = play_time - 10 : self.initial_time = play_time 
					}
					
					self.catalog_data = data
					self.load_show = false
				})
				
			}
		},
		onShow() {
			this.async_n()
			this.service.entire(this,'post',this.APIconfig.api_root.com_page.v_evaluate,{ //用户评论
				userid:this.$store.state.user.id,
				video_id:this.id,
				page:1,
				limit:2
			},function(self,res){
				self.comments = res.data.data
				for (let s of self.comments) {
					s.rating_num = new Array(Number(s.grade))
				}
			})
		},
		// onReady: function (res) {
		// 	this.videoContext = uni.createVideoContext('myVideo')
		// },
		onLoad(e) {
			this.share_arr.Url = 'http://www.wufu-app.com/h5/#/pages/com_page/video_details?id='+e.id+'&type='+e.type
			this.id = e.id
			this.type = e.type
			this.service.entire(this,'post',this.APIconfig.api_root.com_page.v_coupon,{ //优惠券列表
				userid:this.$store.state.user.id,
				mobile:this.$store.state.user.mobile,
			},function(self,res){
				self.coupon_data = res.data.coupon
			})
			this.service.entire(this,'post',this.APIconfig.api_root.com_page.v_recommend,{ //推荐视频
				userid:this.$store.state.user.id,
				video_id:e.id,
				page:1,
				limit:2,
				type:1
			},function(self,res){
				self.recommend_video = res.data.video_list
			})
		},
		onHide(){
			this.videoContext.pause()
		},
		onUnload(){
			this.videoContext.pause()
		}
	}
	function calcTimer(timer) {
		console.log(timer)
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
		padding-bottom: 120rpx;
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
			width: 25%;
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
