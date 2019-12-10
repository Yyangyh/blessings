const entire = function(self,type,url,data,func){
	if(self.$store.state.hasLogin === true){
		 data.token = self.$store.state.token
	}else if(self.$store.state.hasLogin === false){
		uni.reLaunch({
			url:'/pages/login/login'
		})
	}
	
	uni.request({
		url:url,
		data:data,
		method:type,
		header:{'X-Requested-With':'xmlhttprequest','Content-Type':'application/json'},
		success(res) {
			let res_list = res.data
			if(res_list.code == 9){ //token过期时替换重新请求
				self.$store.commit('state_token',res_list.data.token)
				entire(self,type,url,data,func)
			}else if(res_list.code == 10){
				uni.navigateTo({
					url:'/pages/login/login'
				})
				
			}else{
				func(self,res_list)
			}
		}
	})
}

const order = function(ref, self, url, wxUrl) { //支付调用
	// console.log(self.payment_name)
	uni.showToast({
		icon: "none",
		title: ref.msg
	})
	if (self.payment_name == 'Alipay') {
		//当选择支付宝支付时
		// #ifndef  APP-PLUS
		uni.showToast({
			icon: 'none',
			title: '只能在APP内选择支付宝支付'
		})
		return
		// #endif

		uni.showToast({
			icon: 'none',
			title: '支付宝支付暂未开放'
		})
		return
	} else if (self.payment_name == 'Weixin') { //当选择微信支付时
		// #ifdef H5  

		let ua = navigator.userAgent.toLowerCase();
		if (ua.match(/MicroMessenger/i) == "micromessenger") { //判断是否是在微信内置浏览器打开
			let appId = ref.data.data.appId
			let timeStamp = ref.data.data.timeStamp
			let nonceStr = ref.data.data.nonceStr
			let package_id = ref.data.data.package
			let signType = ref.data.data.signType
			let paySign = ref.data.data.paySign
			console.log(signType)

			function onBridgeReady(appId, timeStamp, nonceStr, package_id, signType, paySign) {
				WeixinJSBridge.invoke(
					'getBrandWCPayRequest', {
						"appId": appId, //公众号名称，由商户传入     
						"timeStamp": timeStamp, //时间戳，自1970年以来的秒数     
						"nonceStr": nonceStr, //随机串     
						"package": package_id,
						"signType": signType, //微信签名方式：     
						"paySign": paySign //微信签名 
					},
					function(res) {
						if (res.err_msg == "get_brand_wcpay_request:ok") {
							if(url.split('/index/').length == 2){
								uni.switchTab({
								    url: url
								});
							}else{
								uni.redirectTo({
									url: url
								})
							}
							
							// 使用以上方式判断前端返回,微信团队郑重提示：
							//res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
						}
					});
			}
			if (typeof WeixinJSBridge == "undefined") {
				if (document.addEventListener) {
					document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
				} else if (document.attachEvent) {
					document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
					document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
				}
			} else {
				onBridgeReady(appId, timeStamp, nonceStr, package_id, signType, paySign);
			}
		} else { //普通浏览器微信支付
			let string = encodeURI('http://wx.huanqiutongmall.com/h5/#/' + wxUrl)
			window.location.href = ref.data.data + '&redirect_url=' + string
		}
		// #endif  


		// #ifdef  APP-PLUS
		uni.requestPayment({
			provider: 'wxpay',
			orderInfo: ref.data.data, //微信、支付宝订单数据
			success: function(ref) {
				if(url.split('/index/').length == 2){
					uni.switchTab({
					    url: url
					});
				}else{
					uni.redirectTo({
						url: url
					})
				}
			},
			fail: function(err) {
				console.log('fail:' + JSON.stringify(err));
			}
		});
		// #endif
	} else if (self.payment_name == 'WalletPay') { //选择钱包支付时
		setTimeout(function() {
			if(url.split('/index/').length == 2){
				uni.switchTab({
				    url: url
				});
			}else{
				uni.redirectTo({
					url: url
				})
			}
		}, 1500)
	} else if (self.payment_name == 'BtPay') { //选择版通支付时

		setTimeout(function() {
			if(url.split('/index/').length == 2){
				uni.switchTab({
				    url: url
				});
			}else{
				uni.redirectTo({
					url: url
				})
			}
		}, 1500)

	} else if (self.payment_name == '') { //积分支付时
		setTimeout(function() {
			if(url.split('/index/').length == 2){
				uni.switchTab({
				    url: url
				});
			}else{
				uni.redirectTo({
					url: url
				})
			}
		}, 1500)

	}
}

const returns = function(that) {
	// #ifdef H5
	history.back()
	// #endif  
	
	
	// #ifdef APP-PLUS
	uni.navigateBack(1)
	// #endif
}



const analysis_url = function(video_url){
	
	video_url = video_url.replace(/luU3/gi, 'http')
	video_url = video_url.replace(/IKXG/gi, ':')
	video_url = video_url.replace(/SuJl/gi, '?')
	video_url = video_url.replace(/IXSh/gi, '&')
	video_url = video_url.replace(/IKsg/gi, '/')
	video_url = video_url.replace(/'oXgs/gi, '=')
	video_url = video_url.replace(/oXgs/gi, '=')
	video_url = video_url.replace(/XISKH5dImd/gi, 'bkt.clouddn.com')
	video_url = video_url.replace(/JSIk5/gi, '.')
	video_url = video_url.replace(/jKd5/gi, '-')
	
	return video_url
}

const Test = function(time) { //时间戳转换
	let t
	String(time).length == 10 ? t = time*1000 : t = time
	let NewDtime = new Date(parseInt(t));
	return formatDate(NewDtime);
}
function formatDate(dt) { 
	let year = dt.getFullYear();
	let month = dt.getMonth() + 1;
	let date = dt.getDate();
	if (month < 10) {
		month = "0" + month;
	}
	if (date < 10) {
		date = "0" + date;
	}
	return year + "-" + month + "-" + date;
}

const loading = function(title){ //加载层
	uni.showLoading({
		title: title,
		mask: true
	});
	let times = setTimeout(function() {
		uni.hideLoading()
		uni.showToast({
			icon: 'none',
			title: '网络请求错误，请稍后再试'
		})
		return
	}, 10000)
	return times
}

export default{
	entire,
	order,
	returns,
	analysis_url,
	Test,
	loading
}