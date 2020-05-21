<script>
	// #ifdef APP-PLUS
	const jyJPush = uni.requireNativePlugin('JY-JPush'); //极光推送参考：https://ext.dcloud.net.cn/plugin?id=741
	const masdk = require('./wxcomponents/index'); //数商云参考：https://blog.csdn.net/haishangfeie/article/details/102880897
	// #endif
	export default {
		
		onLaunch: function() {
			
			console.log('App Launch')
			
			// #ifdef APP-PLUS
			this.masdkInit()  //数商云
			
			//极光推送
			jyJPush.getRegistrationID(
			//  返回的数据会有registrationID，errorCode
			result => {
				console.log(JSON.stringify(result))
			});
			jyJPush.setJYJPushAlias({
				userAlias: 'tes12333'
				}, result=> {
				//  设置成功或者失败，都会通过这个result回调返回数据；数据格式保持极光返回的安卓/iOS数据一致
				//  注：若没有返回任何数据，考虑是否初始化完成
				console.log(JSON.stringify(result))
			});
			
			
			
			jyJPush.addJYJPushReceiveNotificationListener(result=> {
			//  监听成功后，若收到推送，会在result返回对应的数据；数据格式保持极光返回的安卓/iOS数据一致
				console.log(JSON.stringify(result))
			});
			
			setTimeout(function() {
				const jyJPush = uni.requireNativePlugin('JY-JPush');
				jyJPush.getLastPushInfo(result => {
					if (result != null) {
						console.log('last' + JSON.stringify(result))
					}
					});
			}, 500);
			
			jyJPush.addJYJPushReceiveOpenNotificationListener(result => { //监听在线点击通知栏消息事件（点击通知栏的消息，或者悬浮框，会触发；做事件跳转，需要用到这个接口，如：后台发了一个新闻，消息里面会含有新闻的链接，点击消息就需要获取这个链接，然后跳转）
				console.log(result)
				if(result.msg) return
				console.log(JSON.parse(result))
				let result_data = JSON.parse(result)
				if(result_data.n_extras != ''){
					result_jump(result_data.n_extras)
				}
			});
			
			
			jyJPush.getLastPushInfo(result => { //监听离线点击通知栏消息事件（点击通知栏的消息，或者悬浮框，会触发；做事件跳转，需要用到这个接口，如：后台发了一个新闻，消息里面会含有新闻的链接，点击消息就需要获取这个链接，然后跳转）
				if(result.msg) return
				let result_data = JSON.parse(result.data.lastPush)
				if(result_data.n_extras != ''){
					setTimeout(function(){ //定时器解决视频返回白屏的问题
						result_jump(result_data.n_extras)
					},1000)
				}
			});
			
			let result_jump = function(result){
				let type = result.type
				let id = result.id
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
		// #ifdef APP-PLUS
		methods: {
		    // 初始化数商云sdk
		    masdkInit () {
		      //初始化sdk,应该在小程序打开的时候就初始化。
		      masdk.init({
		        appKey: "7fe8e836921493cba9afc767c65c7233",//应用key,必填
		        appSecret: "1f4279f517a8d007cbafff0942bfe6d2",//应用secret,必填
		        debug: true,//是否开启debug模式，选填，默认为fasle
		        // domain: '服务器地址',//服务器地址，一般不用配置此项，此项只针对私有化部署客户 
		        webviewUrl: '/pages/webview/index',//用来打开活动的页面，选填，默认值是组件提供的webview页面:miniprogram_npm/shushangyun-masdk/pages/webview，如果有需要，此项指针对需要使用自己定义的页面去打开活动的开发者
		      })
			 
			 
		    },
		},
		globalData: {
		   // 一般的全局变量使用vuex实现，现在我遇到一个问题，数商云对象masdk无法在小程序自定义组件和普通页面公用，因此采用此种方式实现
		   masdk:masdk
		},
		// #endif
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
