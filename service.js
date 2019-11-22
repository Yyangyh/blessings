const entire = function(self,type,url,data,func){
	uni.request({
		url:url,
		data:data,
		method:type,
		success(res) {
			let res_list = res.data
			if(res_list.code == -400){
				uni.showToast({
					icon:'none',
					title:'登录失效，请重新登录'
				})
				self.$store.commit('logout')
				setTimeout(function(){
					uni.redirectTo({
						url:'/pages/login/login'
					})
				},1500)
			}else{
				func(self,res_list)
			}
		}
	})
}

const returns = function(that) {
	// #ifdef H5
	history.back()
	// #endif  
	
	
	// #ifdef APP-PLUS
	uni.navigateBack(1)
	// #endif
}

const jump = function(url) {
	console.log(url)
	uni.navigateTo({
		url:url
	})
}

export default{
	entire,
	returns,
	jump
}