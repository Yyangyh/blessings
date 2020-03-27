const entire = function(self,type,url,data,func){
	if(self.$store.state.token){
		 data.token = self.$store.state.token
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
				self.$store.commit('state_user',res_list.data.userinfo)
				uni.setStorageSync('state_token',res_list.data.token)
				// console.log(self.$store.state.user)
				entire(self,type,url,data,func)
			}else if(res_list.code == 10){
				
				if(self.$store.state.login == 1){
					uni.reLaunch({
						url:'/pages/login/login'
					})
					return false
				}
				
			}else{
				func(self,res_list)
			}
		}
	})
}

const asy_entire = function(self,type,url,data,func){ //同步请求
	if(self.$store.state.token){
		 data.token = self.$store.state.token
	}
	 return new Promise((resolve, reject) => {
	        uni.request({
	        	url:url,
	        	data:data,
	        	method:type,
	        	header:{'X-Requested-With':'xmlhttprequest','Content-Type':'application/json'},
	        	success(res) {
	        		let res_list = res.data
	        		if(res_list.code == 9){ //token过期时替换重新请求
	        			self.$store.commit('state_token',res_list.data.token)
						self.$store.commit('state_user',res_list.data.userinfo)
						uni.setStorageSync('state_token',res_list.data.token)
	        			asy_entire(self,type,url,data,func)
	        		}else if(res_list.code == 10){
	        			uni.reLaunch({
	        				url:'/pages/login/login'
	        			})
	        			return false
	        		}else{
	        			func(self,res_list)
	        		}
					resolve('suc');
	        	},
				fail: (err) => {
					reject('err')
				}
	        })
	})
}

const upimg = function(self,upname,url,data,filePath,func){ //上传图片
	if(self.$store.state.token){
		 data.token = self.$store.state.token
	}else{
		uni.reLaunch({
			url:'/pages/login/login'
		})
	}
	uni.uploadFile({
		url: url, 
		filePath: filePath,
		name: upname,
		formData: data,
		success: (uploadFileRes) => {
			// console.log(Object.prototype.toString.call(uploadFileRes.data)) 判断数据类型
			let res_list = JSON.parse(uploadFileRes.data)
			if(res_list.code == 9){ //token过期时替换重新请求
				self.$store.commit('state_token',res_list.data.token)
				self.$store.commit('state_user',res_list.data.userinfo)
				uni.setStorageSync('state_token',res_list.data.token)
				upimg(self,type,url,data,func)
			}else if(res_list.code == 10){
				uni.reLaunch({
					url:'/pages/login/login'
				})
			}else{
				func(self,res_list)
			}
		}
	});
}

const order = function(ref,pay_type,url) { //支付调用
	let that = this
	if(pay_type == 'Alipay'){
		uni.requestPayment({
		    provider: 'alipay',
		    orderInfo: ref.data, //微信、支付宝订单数据
		    success: function (ref) {
				if(url.split('/index/').length == 2){
					uni.switchTab({
					    url: url
					});
				}else{
					uni.redirectTo({
						url: url
					})
				}
		    }
		   
		});
	}else if(pay_type == 'Weixin'){
		uni.requestPayment({
		    provider: 'wxpay',
		    orderInfo: ref.data, //微信、支付宝订单数据
		    success: function (ref) {
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
		});
	}else{
		uni.showToast({
			icon:'none',
			title:ref.msg
		})
		setTimeout(function(){
			uni.redirectTo({
				url: url
			})
		},1000)
	}
}

const returns = function() {
	// #ifdef H5
	history.back()
	// #endif  
	
	
	// #ifdef APP-PLUS
	uni.navigateBack(1)
	// #endif
}

const notice = function() { //通知信息
	this.service.entire(this,'post',this.APIconfig.api_root.common.UnRead,{user_id:this.$store.state.user.id},function(self,res){
		// res.data.count == 0 ? self.$store.commit('notice_status',false) :  self.$store.commit('notice_status',true)
		self.$store.commit('notice_status',res.data.count)
	})
}

const analysis_url = function(video_url){
	
	video_url = video_url.replace(/luU3/gi, 'https')
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

const debounce = function(fn, wait){ //
	// console.log(this.timeout)
	// console.log(new Date().getTime() - this.timeout)
	let that = this
	that.timeout = null
	return function() {
		if(that.timeout !== null)clearTimeout(that.timeout);
		that.timeout = setTimeout(fn, wait);
		
	}
	
	// if(this.timeout){ 
	// 	if(new Date().getTime() - this.timeout < 1000){
	// 		this.timeout = new Date().getTime()
	// 		return false
	// 	}else{
	// 		this.timeout = new Date().getTime()
	// 		return true
	// 	}
	// }else{
	// 	this.timeout = new Date().getTime()
	// 	return true
	// }
}

export default{
	entire,
	asy_entire,
	upimg,
	order,
	returns,
	analysis_url,
	Test,
	loading,
	notice,
	debounce
}