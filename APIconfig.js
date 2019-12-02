const api = ''

// const api ='http://192.168.0.195:8900?s='
const api_img ='http://192.168.0.195:8900?s='

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
		buy_index: api+'/api/buy/index',//确认商品信息信息
		buy_add: api+'/api/buy/add',//提交订单
		order_pay: api+'/api/order/pay',//订单支付
		
	},
	subhome:{
		s_index: api+'/api/search/index',//商品列表
		s_category: api+'/api/good/category',//分类列表
		s_detail: api+'/api/good/detail',//获取商品详情
		s_receive: api+'/api/coupon/receive',//领取优惠券
		s_SpecType: api+'/api/good/SpecType',//商品规格详情查询
		s_SpecDetail: api+'/api/good/SpecDetail',//商品规格详情价格查询
		s_Save: api+'/api/cart/Save',//加入购物车
	},
	subuser:{
		s_order: api+'/api/order/index',//商城订单列表
		s_delete: api+'/api/order/delete',//订单删除
		address_index: api+'/api/useraddress/index',//获取用收货地址列表
		address_delete: api+'/api/useraddress/delete',//收货地址删除
		address_setdefault: api+'/api/useraddress/setdefault',//设置默认收货地址
		s_aftersale_list: api+'/api/orderaftersale/index',//商城退款列表
		threeuser:{
			region_index: api+'/api/region/index',//获取省市区三级
			address_save: api+'/api/useraddress/save',//用户地址保存
			address_detail: api+'/api/useraddress/detail',//收货地址详情
			s_order_detail: api+'/api/order/detail',//商城订单详情
			s_order_collect: api+'/api/order/collect',//商城订单确认收货
			s_order_cancel: api+'/api/order/cancel',//商城订单取消
			s_order_aftersale: api+'/api/orderaftersale/aftersale',//售后页面
			s_ueditor_index: api+'/api/ueditor/index',//售后申请凭证图片上传
			s_aftersale_create: api+'/api/orderaftersale/create',//售后提交申请
			s_order_getexpinfo: api+'/api/order/getexpinfo',//商城物流
		}
	},
	subindex:{
		s_test:api+'api/test/getPaper',//通过试卷id获取试卷信息
		s_test_classify:api+'api/test/getPaperCategory',//幸福评测分类或分类下数据获取
		
	}
}


export default{
	api,
	api_root,
	api_img
	
}