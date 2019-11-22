const api = ''
// const api ='http://0318.t1.nethhw188.com'
const api_img ='http://0318.t1.nethhw188.com'

const api_root = {
	login:{
		register: api+'/api/member/register',//注册
		sendPhone: api+'/api/member/sendPhone',//发送验证码
		login: api+'/api/member/login',//登录
		phoneLogin: api+'/api/member/phoneLogin',//手机号登录
		findPassword: api+'/api/member/findPassword',//找回密码验证
		reset: api+'/api/member/reset',//重置密码
	},
	index:{
		index: api+'/api/VideoHome/index',//首页
		good_index: api+'/api/good/index',//商城首页
		felicity_index: api+'/api/felicity/index',//幸福课堂首页数据
	},
	com_page:{
		videoList: api+'/api/videohome/videoList',//幸福时光视频列表
		VideoDetail: api+'/api/videohome/VideoDetail',//视频详情
	}
}


export default{
	api,
	api_root,
	api_img
	
}