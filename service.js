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
	let t = time
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
export default{
	entire,
	returns,
	jump,
	analysis_url,
	Test
}