<script>
	// #ifdef APP-PLUS
	const jyJPush = uni.requireNativePlugin('JY-JPush');
	// #endif
	export default {
		
		onLaunch: function() {
			
			console.log('App Launch')
			
			// #ifdef APP-PLUS
			
			
			
			
			//极光推送    插件搜索： JYJPush极光推送插件
			jyJPush.addJYJPushReceiveNotificationListener(result => { //监听消息通知事件（后台发送后，会触发）
				
				// console.log(JSON.stringify(result));
			});
			
			jyJPush.addJYJPushReceiveOpenNotificationListener(result => { //监听点击通知栏消息事件（点击通知栏的消息，或者悬浮框，会触发；做事件跳转，需要用到这个接口，如：后台发了一个新闻，消息里面会含有新闻的链接，点击消息就需要获取这个链接，然后跳转）
				if(result.notificationExtras != ''){
					let data = JSON.parse(result.notificationExtras)
					let type = data.type
					let id = data.id
					if(type == 'shangpin'){//商品
						uni.navigateTo({
							url:'/pages/subhome/details?id='+id
						})
					}else if(type == 'shipin'){ //视频
						uni.navigateTo({
							url:'/pages/com_page/video_details?'+id
						})
					}else if(type == 'huodong'){ //活动
						uni.navigateTo({
							url:'/pages/activity/particulars?id='+id
						})
					}else if(type == 'pintuan'){ //拼团
						uni.navigateTo({
							url:'/pages/subhome/threehome/group_products?id='+id
						})
					}else if(type == 'wenzhang'){ //文章
						uni.navigateTo({
							url:'/pages/subindex/article?id='+id
						})
					}
				}
				
				// console.log(result)
			});
			
			
			
			
			//极光推送
			
			
			//APP更新
			let that = this
			uni.request({
				url: this.APIconfig.api_root.common.getNewApk,  
				data: {
					'type':uni.getSystemInfoSync().platform == 'android' ? '1': '2'
				},  
				success: (res) => {
					plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {   //这里用 plus.runtime.getProperty() 来获取相关信息。
						that.$store.commit('state_version',widgetInfo.version)
						
						let used_version = widgetInfo.version.split('.').join('')
						let news_version =  res.data.data.ac_version.split('.').join('')
						
						if(used_version != news_version){
							let update_mode
							Number(news_version) - Number(used_version) >= 2 ? update_mode = true : update_mode = false
							if(res.data.data.ishot == 1){ //是否强制更新
								uni.showModal({
									title: '提示',
									content: '检测到新版本，需要更新后才能使用',
									success: function (ref) {
										toUpdate(res.data.data,update_mode)
									}
								});									
							}else if(res.data.data.ishot == 0){
								uni.showModal({
									title: '提示',
									content: '检测到新版本，是否确定更新？',
									success: function (ref) {
										if (ref.confirm) {
											toUpdate(res.data.data,update_mode)
										} else if (ref.cancel) {
											// console.log('用户点击取消');
										}
									}
								});
							}
						}
					});
				}  
			})
			
			let toUpdate = function(data,update_mode){
				if(update_mode){
					plus.runtime.openURL(data.url);
				}else{
					uni.showLoading({
						title: '下载中',
						mask:true
					});
					uni.downloadFile({
						url: data.hoturl,
						success: (downloadResult) => {
							uni.showLoading({
								title: '安装中',
								mask:true
							});
							if (downloadResult.statusCode === 200) {
								plus.runtime.install(downloadResult.tempFilePath, {
									force: true //强制安装
								}, function(e) {
									uni.hideLoading();
									plus.runtime.restart();
								}, function(e) {
									uni.hideLoading();
									console.log(e)
									console.log("安装文件失败！");  
								});
							}
						}
					});
				}
			}
			//APP更新
			
			
			
			
			
			 
			// #endif
			
			
			
			// #ifdef H5
			// H5调起APP
			// let url = window.location.href.split('https://')[1]
			// let getBrower=function(){
			// 	let browser={
			// 	  versions:function(){
			// 			var u = navigator.userAgent, app = navigator.appVersion;
			// 			  return {
			// 				  weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
			// 				  qq: u.match(/\sQQ/i) == " qq" //是否QQ
			// 		  };
			// 	  }(),
			// 		language:(navigator.browserLanguage || navigator.language).toLowerCase()
			// 	}
			// 	return browser.versions
			// }
			// let brower=getBrower()
			// if(brower.weixin||brower.qq){
			// 	// uni.showToast({
			// 	// 	icon:'none',
			// 	// 	title:'请在浏览器中打开'
			// 	// })
			// 	return
			// }
			// if(brower.android){
			//     let startTime=Date.now();
			//     let ifr = document.createElement('iframe');
			// 	ifr.src = 'wufu://'+url;//这里是唤起App的协议，有Android可爱的同事提供
			// 	ifr.style.display = 'none';
			// 	document.body.appendChild(ifr);
			// 	setTimeout(function(){
			// 		document.body.removeChild(ifr);
			// 		// window.open("唤起失败跳转的链接");
			// 		window.location.href = 'https://ios.8396048.com/0318/packet/wufu.apk'
			// 	},3000)
			// }else{
			// 	//ios使用这个打开
			// 	window.location.href = 'wufu://'+url; //唤起协议，由iOS小哥哥提供
			// 	setTimeout(function(){
			// 		window.location.href = 'https://ios.8396048.com/0318/packet/manifest.plist';
			// 	},3000)
			// }
			// H5调起APP
			//在页面加载时读取sessionStorage里的状态信息
			if (uni.getStorageSync("store")) {  //防止用户刷新页面导致vuex数据丢失
				// console.log(this.$store.state)
				this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(uni.getStorageSync("store"))))
				// console.log(this.$store.state)
			}
			
			//在页面刷新时将vuex里的信息保存到sessionStorage里
			window.addEventListener("beforeunload",()=>{
				uni.setStorageSync("store",JSON.stringify(this.$store.state))
			})
			// #endif
			
			
			if(uni.getStorageSync('state_token')){
				this.$store.commit('state_user',uni.getStorageSync('state_user'))
				this.$store.commit('state_token',uni.getStorageSync('state_token'))
			}
		},
		onShow: function() {
			// #ifdef APP-PLUS
			// H5调起APP
			// var args= plus.runtime.arguments;  
			// if(args){
			// 	// 处理args参数，如直达到某新页面等  
			// 	let url = args.split('/h5/#')[1]
			// 	uni.switchTab({
			// 		url:'/pages/index/index'
			// 	})
			// 	setTimeout(function(){
			// 		uni.navigateTo({
			// 			url:url
			// 		})
			// 	})
			// }
			// H5调起APP
			// #endif
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	page {
		/* height: 100%;
		width: 100%; */
		padding-top: var(--status-bar-height);
		background: #fff;
	}
	
	.content {
		padding-top: 105rpx;
	}
	
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		top: 0;
		left: 0;
		z-index: 998;
		background: #fff;
		position: fixed;
	}
	.red_button{
		font-size: 32rpx;
		background: #D80000;
		color: #FFFFFF;
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 40rpx;
	}
	.mask_black {
		position: fixed;
		height: 100%;
		width: 100%;
		background: rgba(0, 0, 0, 1);
		opacity: 0.5;
		top: 0;
		left: 0;
		z-index: 888;
	}
	.QRcode{
		position: fixed;
		right: 30rpx;
		bottom: 135rpx;
		image{
			width: 60rpx;
			height: 60rpx;
		}
	}
</style>
