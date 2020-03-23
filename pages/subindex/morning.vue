<template>
	<view class="content">
		<view class="status_bar">
					
		</view>
		<view class="top">
			<view class="top_enlarge"  @tap="service.returns()">
				<image src="/static/image/com_page/returns.png" mode="widthFix"></image>
			</view>
			<text>早间晨语</text>
			<view class="screen" @tap="open()">
				<image src="../../static/image/index/screen.png" mode="widthFix"></image>
				<text>筛选</text>
			</view>
		</view>
		<view class="m_box">
			<view class="box_list" v-for="(item,index) in data" :key="item.id">
				<view class="list_logo">
					<view class="logo">
						<image :src="$api_img() + item.logo" mode="scaleToFill"></image>
					</view>
					<view class="logo_test">
						<view class="test_top">
							{{item.name}}
						</view>
						<view class="test_btm">
							{{item.spoke}}
						</view>
					</view>
				</view>
				<view class="list_content">
					<rich-text :nodes="item.content"></rich-text>
				</view>
				<view class="list_img">
					<image :src="$api_img() + item.image" mode="widthFix"></image>
				</view>
				<view class="list_time">
					{{service.Test(item.create_time)}}
				</view>
				<view class="list_oper">
					<view class="oper" @tap="preservation(item.image,item.id,index)">
						<image v-if="item.is_downimage == 0" src="../../static/image/index/oper1.png" mode="widthFix"></image>
						<image v-else src="../../static/image/index/Hoper1.png" mode="widthFix"></image>
						<view class="">
							图片下载
						</view>
					</view>
					<view class="oper" @tap="copy(item.formatcontent,item.id,index)">
						<image v-if="item.is_copycontent == 0"  src="../../static/image/index/oper2.png" mode="widthFix"></image>
						<image v-else src="../../static/image/index/Hoper2.png" mode="widthFix"></image>
						<view class="">
							文案复制
						</view>
					</view>
					<view class="oper"  @tap="share(index)">
						<image v-if="item.is_share == 0"  src="../../static/image/index/oper3.png" mode="widthFix"></image>
						<image v-else src="../../static/image/index/Hoper3.png" mode="widthFix"></image>
						<view class="">
							一键转发
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view>
		    <uni-calendar 
		    ref="calendar"
		    :insert="false"
		    @confirm="confirm"
			:showMonth="false"
		     ></uni-calendar>
		</view>
		
	</view>
</template>

<script>
	import uniCalendar from "../../components/uni-calendar/uni-calendar.vue"
	import js_sdk from '../../js_sdk/ican-H5Api/ican-H5Api.js'
	
	// #ifdef APP-PLUS
		var strShareUrl = ""
		var strShareTitle = ""
		var strShareSummary = ""
		var strShareImageUrl = ""
		
		
		var screenWidth = plus.screen.resolutionWidth
	
		var margin = 25,
			iconWidth = 55,
			icontextSpace = 5,
			textHeight = 12
		var left1 = margin / 360 * screenWidth
		var iconSpace = (screenWidth - (left1 * 2) - (iconWidth * 4)) / 3 //屏幕宽度减去左右留白间距，再减去4个图标的宽度，就是3个同行图标的间距
		if (iconSpace <= 5) { //屏幕过窄时，缩小边距和图标大小，再算一次
			margin = 15
			iconWidth = 40
			left1 = margin / 360 * screenWidth
			iconSpace = (screenWidth - (left1 * 2) - (iconWidth * 4)) / 3 //屏幕宽度减去左右留白间距，再减去4个图标的宽度，就是3个同行图标的间距
		}
		var left2 = left1 + iconWidth + iconSpace
		var left3 = left1 + (iconWidth + iconSpace) * 2
		var left4 = left1 + (iconWidth + iconSpace) * 3
		var top1 = left1
		var top2 = top1 + iconWidth + icontextSpace + textHeight + left1
	//
		var nvMask = new plus.nativeObj.View("nvMask", { //先创建遮罩层
			top: '0px',
			left: '0px',
			height: '100%',
			width: '100%',
			backgroundColor: 'rgba(0,0,0,0.2)'
		});
		nvMask.addEventListener("click", function() { //处理遮罩层点击
			nvMask.hide();
			nvImageMenu.hide();
		})
		var nvImageMenu = new plus.nativeObj.View("nvImageMenu", { //创建底部图标菜单
			bottom: '0px',
			left: '0px',
			// height: '264px',
			height: '184px',
			width: '100%',
			backgroundColor: 'rgb(255,255,255)'
		});
		//绘制底部图标菜单的内容
		nvImageMenu.draw([
			{
				tag: 'rect',//菜单顶部的分割灰线
				color: '#e7e7e7',
				position: {
					top: '0px',
					height: '1px'
				}
			},
			{
				tag: 'font',
				id: 'sharecancel',//底部取消按钮的文字
				text: '取消分享',
				textStyles: {
					size: '14px'
				},
				position: {
					bottom: '0px',
					height: '44px'
				}
			},
			{
				tag: 'rect',//底部取消按钮的顶部边线
				color: '#e7e7e7',
				position: {
					bottom: '45px',
					height: '1px'
				}
			},
			{
				tag: 'img',
				id: 'imgwechatfriend',
				src: '/static/sharemenu/wechatfriend.png',
				position: {
					top: top1,
					left: left1,
					width: iconWidth,
					height: iconWidth
				}
			},
			{
				tag: 'font',
				id: 'fontwechatfriend',
				text: '微信好友',
				textStyles: {
					size: textHeight
				},
				position: {
					top: top1 + iconWidth + icontextSpace,
					left: left1,
					width: iconWidth,
					height: textHeight
				}
			},
			{
				tag: 'img',
				id: 'imgwechatmoments',
				src: '/static/sharemenu/wechatmoments.png',
				position: {
					top: top1,
					left: left2,
					width: iconWidth,
					height: iconWidth
				}
			},
			{
				tag: 'font',
				id: 'fontwechatmoments',
				text: '微信朋友圈',
				textStyles: {
					size: textHeight
				},
				position: {
					top: top1 + iconWidth + icontextSpace,
					left: left2 - 2.5,
					width: iconWidth + 5,
					height: textHeight
				}
			},
			{
				tag: 'img',
				id: 'imgcopyurl',
				src: '/static/sharemenu/copyurl.png',
				position: {
					top: top1,
					left: left3,
					width: iconWidth,
					height: iconWidth
				}
			},
			{
				tag: 'font',
				id: 'fontcopyurl',
				text: '复制',
				textStyles: {
					size: textHeight
				},
				position: {
					top: top1 + iconWidth + icontextSpace,
					left: left3,
					width: iconWidth,
					height: textHeight
				}
			},
			{
				tag: 'img',
				id: 'imgmore',
				src: '/static/sharemenu/more.png',
				position: {
					top: top1,
					left: left4,
					width: iconWidth,
					height: iconWidth
				}
			},
			{
				tag: 'font',
				id: 'fontmore',
				text: '更多',
				textStyles: {
					size: textHeight
				},
				position: {
					top: top1 + iconWidth + icontextSpace,
					left: left4,
					width: iconWidth,
					height: textHeight
				}
			},
		])
		nvImageMenu.addEventListener("click", function(e) { //处理底部图标菜单的点击事件，根据点击位置触发不同的逻辑
			// console.log("click menu"+JSON.stringify(e));
			if (e.screenY > plus.screen.resolutionHeight - 44) { //点击了底部取消按钮
				nvMask.hide();
				nvImageMenu.hide();
			} else if (e.clientX < 5 || e.clientX > screenWidth - 5 || e.clientY < 5) {
			} else { //点击了图标按钮
				var iClickIndex = -1 //点击的图标按钮序号，第一个图标按钮的index为0
				var iRow = e.clientY < (top2 - (left1 / 2)) ? 0 : 1
				var iCol = -1
				if (e.clientX < (left2 - (iconSpace / 2))) {
					iCol = 0
				} else if (e.clientX < (left3 - (iconSpace / 2))) {
					iCol = 1
				} else if (e.clientX < (left4 - (iconSpace / 2))) {
					iCol = 2
				} else {
					iCol = 3
				}
				if (iRow == 0) {
					iClickIndex = iCol
				} else {
					iClickIndex = iCol + 4
				}
				console.log("点击按钮的序号: " + iClickIndex);
				if (iClickIndex >= 0 && iClickIndex <= 5) { //处理具体的点击逻辑，此处也可以自行定义逻辑。如果增减了按钮，此处也需要跟着修改
					var strProvider="",strScene=""
					switch (iClickIndex) {
						case 0:
							strProvider = "weixin"
							strScene = "WXSceneSession"
							break;
						case 1:
							strProvider = "weixin"
							strScene = "WXSenceTimeline"
							break;
						
						case 2:
							uni.setClipboardData({
								data: strShareUrl,
								complete() {
									uni.showToast({
										title: "已复制到剪贴板"
									})
								}
							})
							break;
						case 3:
							plus.share.sendWithSystem({
								content: strShareUrl,
							})
							break;
					}
					if (strProvider!="") { //点击了0-3序号的这4个按钮
						uni.share({
							provider: strProvider,
							scene:strScene,
							type: 0,
							href: strShareUrl,
							title: strShareTitle,
							summary: strShareSummary,
							imageUrl: strShareImageUrl,
							success: function(res) {
								console.log("success:" + JSON.stringify(res));
							},
							fail: function(err) {
								console.log("fail:" + JSON.stringify(err));
							}
						})
					}
				}
			}
		})
		
		// #endif
	export default {
		components:{
			uniCalendar,
		},
		data() {
			return {
				title: '',
				data:'',
				share_arr:{},
			}
		},
		onLoad(e) {
			let data = {
				page:1,
				user_id:this.$store.state.user.id,
			}
			if(e){
				data.morning_id = e.id
			}
			this.service.entire(this,'post',this.APIconfig.api_root.subindex.getMorningnew,data,function(self,res){
				console.log(res)
				self.data = res.data
				console.log(self.data)
			})
			
		},
		onBackPress() {
			if (nvImageMenu.isVisible()) {
				nvImageMenu.hide()
				nvMask.hide()
				return true
			}
		},
		onNavigationBarButtonTap(e) {
			switch (e.type) {
				case "share": //点击分享按钮
					// #ifdef APP-PLUS
					nvMask.show()
					nvImageMenu.show() //5+应支持从底部向上弹出的动画
					// #endif
					break;
			}
		},
		
		methods: {
			share(index){
				strShareUrl ='http://www.wufu-app.com/h5/#/pages/subindex/morning?id='+this.data[index].id
				strShareTitle =  this.data[index].name//分享
				strShareSummary = this.data[index].spoke//分享
				strShareImageUrl =  this.$api_img() + this.data[index].image//分享
				nvMask.show()
				nvImageMenu.show() //5+应支持从底部向上弹出的动画
			},
			
				open(type){
					this.type = type
					this.$refs.calendar.open();
				},
				tips(index){ //分享
				 
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
					
					let that = this
					
					
					// #endif
				},
				confirm(e) {  //日历表选择日期时间
					this.service.entire(this,'post',this.APIconfig.api_root.subindex.getMorningnew,{ //
						page:1,
						start_time:new Date(e.fulldate).getTime()/1000,
						user_id:this.$store.state.user.id,
					},function(self,res){
						self.data = res.data
					})
				},
				copy(data,id,index) { //复制文案
					let that = this
					uni.setClipboardData({
						data: data,
						success: function(res) {
							that.oper(2,id)
							that.data[index].is_copycontent = 1
							uni.showToast({
								icon: 'none',
								title: '复制成功'
							})
						}
					})
				},
				oper(type,id){
					this.service.entire(this,'post',this.APIconfig.api_root.subindex.satusOfMorningnew,{ //
						morning_id:id,
						user_id:this.$store.state.user.id,
						type:type
					},function(self,res){
					})
				},
				preservation(Url,id,index) { //保存图片
					// #ifdef APP-PLUS
					let that = this
					//在app内运行
					Url = this.$api_img() + Url
					let filename = Math.random() + ".png"
					plus.downloader.createDownload(Url, {
						filename: "_downloads/" + filename
					}, (download, status) => {
						if (status == 200) { //下载成功  
							plus.gallery.save(download.filename, () => {
								uni.hideLoading();
								that.oper(1,id)
								that.data[index].is_downimage = 1
								uni.showToast({
									icon: 'none',
									title: '保存成功！'
								});
							})
						}
					}).start()
					// #endif
				}
			
		}
	}
	
	
</script>

<style lang="scss">
	.top{
		height: 105rpx;
		padding: 0 44rpx;
		width: 100%;
		box-sizing: border-box;
		position: fixed;
		top: var(--status-bar-height);
		z-index: 333;
		left: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
		background: #fff;
		box-shadow:0px 2rpx 4rpx 0px rgba(0, 0, 0, 0.1);
		.top_enlarge{
			display: flex;
			align-items: center;
			height: 100%;
			width: 180rpx;
		}
		.screen{
			width: 180rpx;	
			display: flex;
			align-items: center;
			justify-content: flex-end;
			image{
				margin-right: 12rpx;
				width: 30rpx;
				height: 34rpx;
			}
			text{
				font-size: 30rpx;
				font-weight: 400;
				display: inline-block;
				text-align: right;
			}
		}
		
		image{
			height: 40rpx;
			width: 40rpx;
		}
	}
	.m_box{
		.box_list{
			padding:  20rpx;
			margin-bottom: 20rpx;
			border-bottom: 2rpx solid #F2F2F2;
			.list_logo{
				display: flex;
				align-items: center;
				.logo{
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
					overflow: hidden;
					margin-right: 32rpx;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.logo_test{
					font-size: 28rpx;
					height: 80rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.test_btm{
						font-size: 24rpx;
						color: #999999;
					}
				}
				
			}
			.list_content{
				line-height: 36rpx;
				margin: 42rpx 0 30rpx 0;
			}
			.list_img{
				image{
					width: 100%;
				}
			}
			.list_time{
				font-size: 24rpx;
				color: #999999;
				margin: 34rpx 0 30rpx 0;
			}
			.list_oper{
				display: flex;
				justify-content: space-between;
				.oper{
					font-size: 24rpx;
					color: #333333;
					text-align: center;
					image{
						height: 50rpx;
						width: 50rpx;
					}
				}
			}
		}
	}
</style>
