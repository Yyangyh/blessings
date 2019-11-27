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
		catalogue: api+'/api/videohome/catalogue',//视频目录
		v_collect: api+'/api/videohome/collect',//视频收藏
		v_integral: api+'/api/videohome/integral',//领取积分
		v_coupon: api+'/api/videohome/coupon',//优惠券列表
		v_getCoupon: api+'/api/videohome/getCoupon',//领取优惠券
		v_evaluate: api+'/api/videohome/evaluate',//视频评价展示列表
		v_recommend: api+'/api/videohome/recommend',//视频推荐
		v_playCount: api+'/api/videohome/playCount',//添加阅读量 用户播放后发起
		c_Index: api+'/api/cart/Index',//购物车列表
		c_Stock: api+'/api/cart/Stock',//购物车数量保存
		c_Delete: api+'/api/cart/Delete',//购物车删除
	},
	subhome:{
		s_index: api+'/api/search/index',//商品列表
		s_category: api+'/api/good/category',//分类列表
		s_detail: api+'/api/good/detail',//获取商品详情
	},
	subuser:{
		s_order: api+'/api/order/index',//商城订单列表
	}
}


export default{
	api,
	api_root,
	api_img
	
}