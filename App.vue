<script>
	export default {
		
		onLaunch: function() {
			
			console.log('App Launch')
			
			// #ifdef APP-PLUS
			var req = { //升级检测数据  
				"version": plus.runtime.version,
				'type':uni.getSystemInfoSync().platform == 'android' ? '1': '2'
			};  
			uni.request({  
				url: this.APIconfig.api_root.common.getNewApk,  
				data: req,  
				success: (res) => {
					console.log(res)
					
					if (res.data.data) {  
						
						plus.runtime.openURL(res.data.data);
					}
				}  
			}) 
			// #endif
			
			
			
			// #ifdef H5
			let url = window.location.href.split('https://')[1]
			let getBrower=function(){
				let browser={
				  versions:function(){
						var u = navigator.userAgent, app = navigator.appVersion;
						  return {
							  trident: u.indexOf('Trident') > -1, //IE内核
							  presto: u.indexOf('Presto') > -1, //opera内核
							  webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
							  gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
							  mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
							  ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
							  android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
							  iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
							  iPad: u.indexOf('iPad') > -1, //是否iPad
							  webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
							  weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
							  qq: u.match(/\sQQ/i) == " qq" //是否QQ
					  };
				  }(),
					language:(navigator.browserLanguage || navigator.language).toLowerCase()
				}
				return browser.versions
			 }
			let brower=getBrower()
			if(brower.weixin||brower.qq){
				uni.showToast({
					icon:'none',
					title:'请在浏览器中打开'
				})
				return
			}
			if(brower.android){
			    let startTime=Date.now();
			    let ifr = document.createElement('iframe');
				ifr.src = 'wufu://'+url;//这里是唤起App的协议，有Android可爱的同事提供
				ifr.style.display = 'none';
				document.body.appendChild(ifr);
				setTimeout(function(){
					document.body.removeChild(ifr);
					// window.open("唤起失败跳转的链接");
					window.location.href = 'https://ios.8396048.com/0318/packet/wufu.apk'
				},3000)
			}else{
				//ios使用这个打开
				window.location.href = 'wufu://'+url; //唤起协议，由iOS小哥哥提供
				setTimeout(function(){
					window.location.href = 'https://ios.8396048.com/0318/packet/manifest.plist';
				},3000)
			}
			
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
			var args= plus.runtime.arguments;  
			if(args){  
				// 处理args参数，如直达到某新页面等  
				let url = args.split('/h5/#')[1]
				uni.switchTab({
					url:'/pages/index/index'
				})
				setTimeout(function(){
					uni.navigateTo({
						url:url
					})
				})
				
			}
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
