
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/white","pages/index/index","pages/login/login","pages/login/agreement","pages/index/classroom","pages/index/home","pages/index/user","pages/com_page/notice","pages/com_page/video_give","pages/com_page/index_class","pages/com_page/video_class","pages/com_page/video_details","pages/com_page/introduce","pages/com_page/shopp_cart","pages/com_page/v_order","pages/com_page/s_order","pages/com_page/v_search","pages/com_page/s_search","pages/subhome/home_com","pages/subhome/assemble","pages/subhome/h_search","pages/subhome/h_list","pages/subhome/h_article","pages/subhome/threehome/h_article","pages/subhome/threehome/group_products","pages/subhome/threehome/my_group","pages/subhome/threehome/operation","pages/subhome/threehome/group_details","pages/subhome/threehome/group_order","pages/subuser/assemble_refund","pages/subuser/assemble_order","pages/subuser/s_order","pages/subuser/address","pages/subuser/customer","pages/subuser/myorder","pages/subuser/s_refund","pages/subuser/course_order","pages/subuser/member/open_order","pages/subuser/threeuser/c_order_details","pages/subuser/threeuser/return_goods","pages/subuser/threeuser/add_addto","pages/subuser/threeuser/ass_refund_details","pages/subuser/threeuser/assembleDetails","pages/subuser/threeuser/logistics","pages/subuser/threeuser/s_comment_order","pages/subuser/threeuser/s_comment_list","pages/subuser/threeuser/s_comment_success","pages/subuser/threeuser/s_refund_details","pages/subuser/threeuser/s_order_details","pages/subuser/threeuser/s_order_refund","pages/subuser/threeuser/cash","pages/login/forget","pages/login/message_login","pages/login/reg","pages/activity/activity","pages/activity/particulars","pages/activity/registered","pages/activity/apply","pages/subhome/details","pages/subclass/textual","pages/subclass/textual.1","pages/subclass/applyFor","pages/subclass/audit","pages/subclass/repetition","pages/subclass/certificate","pages/subclass/certificateList","pages/subindex/evaluating","pages/subindex/result","pages/subindex/topic","pages/subuser/brokerage/brokerage","pages/subuser/brokerage/schoolfellow","pages/subuser/brokerage/record","pages/subuser/brokerage/invite","pages/subuser/brokerage/sales","pages/subuser/brokerage/withdraw","pages/subuser/brokerage/order","pages/subindex/listbox","pages/subuser/member/member","pages/subuser/member/upgrade","pages/subuser/relation/relation","pages/subuser/relation/record","pages/subuser/personage/personage","pages/subuser/personage/alter","pages/subuser/collect","pages/subuser/setting/setting","pages/subuser/setting/binding","pages/subuser/setting/cellPhone","pages/subuser/setting/password","pages/subuser/conversion/conversion","pages/subuser/conversion/exchange","pages/subuser/activitys/activitys","pages/subuser/activitys/tessera","pages/subuser/study","pages/subuser/distribution/distribution","pages/subuser/distribution/application","pages/subuser/signIn","pages/subuser/integral/integral","pages/subuser/balance","pages/subuser/integral/know","pages/subindex/classify","pages/subindex/texts","pages/subindex/article","pages/subindex/morning","pages/subuser/abrief","pages/com_page/comment","pages/subindex/comment","pages/subindex/t_search","pages/subuser/distribution/agreement"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#999999","selectedColor":"#000000","borderStyle":"black","fontSize":"14px","height":"55px","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/image/index/index.png","selectedIconPath":"static/image/index/indexHL.png","text":"幸福时光"},{"pagePath":"pages/index/classroom","iconPath":"static/image/index/home.png","selectedIconPath":"static/image/index/homeHL.png","text":"幸福课堂"},{"pagePath":"pages/index/home","iconPath":"static/image/index/room.png","selectedIconPath":"static/image/index/roomHL.png","text":"幸福家风"},{"pagePath":"pages/index/user","iconPath":"static/image/index/user.png","selectedIconPath":"static/image/index/userHL.png","text":"个人中心"}]},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":false,"autoclose":true},"appname":"五福家庭","compilerVersion":"2.6.11","entryPagePath":"pages/login/white","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/white","meta":{"isQuit":true},"window":{"navigationBarTitleText":"五福","titleNView":false}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"幸福时光","titleNView":false}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登录","titleNView":false}},{"path":"/pages/login/agreement","meta":{},"window":{"navigationBarTitleText":"用户须知","titleNView":false}},{"path":"/pages/index/classroom","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"幸福课堂","titleNView":false}},{"path":"/pages/index/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"幸福家风","titleNView":false}},{"path":"/pages/index/user","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人中心","titleNView":false}},{"path":"/pages/com_page/notice","meta":{},"window":{"navigationBarTitleText":"系统通知","titleNView":false}},{"path":"/pages/com_page/video_give","meta":{},"window":{"navigationBarTitleText":"赠送说明","titleNView":false}},{"path":"/pages/com_page/index_class","meta":{},"window":{"navigationBarTitleText":"分类列表","titleNView":false}},{"path":"/pages/com_page/video_class","meta":{},"window":{"navigationBarTitleText":"视频列表","titleNView":false}},{"path":"/pages/com_page/video_details","meta":{},"window":{"navigationBarTitleText":"视频详情","titleNView":false}},{"path":"/pages/com_page/introduce","meta":{},"window":{"navigationBarTitleText":"讲师介绍","titleNView":false}},{"path":"/pages/com_page/shopp_cart","meta":{},"window":{"navigationBarTitleText":"购物车","titleNView":false}},{"path":"/pages/com_page/v_order","meta":{},"window":{"navigationBarTitleText":"订单详情","titleNView":false}},{"path":"/pages/com_page/s_order","meta":{},"window":{"navigationBarTitleText":"购物车","titleNView":false}},{"path":"/pages/com_page/v_search","meta":{},"window":{"navigationBarTitleText":"搜索","titleNView":false}},{"path":"/pages/com_page/s_search","meta":{},"window":{"navigationBarTitleText":"搜索","titleNView":false}},{"path":"/pages/subhome/home_com","meta":{},"window":{"navigationBarTitleText":"产品列表","titleNView":false}},{"path":"/pages/subhome/assemble","meta":{},"window":{"navigationBarTitleText":"拼团","titleNView":false}},{"path":"/pages/subhome/h_search","meta":{},"window":{"navigationBarTitleText":"搜索","titleNView":false}},{"path":"/pages/subhome/h_list","meta":{},"window":{"navigationBarTitleText":"家风建设","titleNView":false}},{"path":"/pages/subhome/h_article","meta":{},"window":{"navigationBarTitleText":"家风建设","titleNView":false}},{"path":"/pages/subhome/threehome/h_article","meta":{},"window":{"navigationBarTitleText":"文章详情","titleNView":false}},{"path":"/pages/subhome/threehome/group_products","meta":{},"window":{"navigationBarTitleText":"商品详情","titleNView":false}},{"path":"/pages/subhome/threehome/my_group","meta":{},"window":{"navigationBarTitleText":"我的团","titleNView":false}},{"path":"/pages/subhome/threehome/operation","meta":{},"window":{"navigationBarTitleText":"拼团操作","titleNView":false}},{"path":"/pages/subhome/threehome/group_details","meta":{},"window":{"navigationBarTitleText":"团详情","titleNView":false}},{"path":"/pages/subhome/threehome/group_order","meta":{},"window":{"navigationBarTitleText":"订单详情","titleNView":false}},{"path":"/pages/subuser/assemble_refund","meta":{},"window":{"navigationBarTitleText":"退款订单","titleNView":false}},{"path":"/pages/subuser/assemble_order","meta":{},"window":{"navigationBarTitleText":"订单列表","titleNView":false}},{"path":"/pages/subuser/s_order","meta":{},"window":{"navigationBarTitleText":"订单列表","titleNView":false}},{"path":"/pages/subuser/address","meta":{},"window":{"navigationBarTitleText":"地址列表","titleNView":false}},{"path":"/pages/subuser/customer","meta":{},"window":{"navigationBarTitleText":"联系客服","titleNView":false}},{"path":"/pages/subuser/myorder","meta":{},"window":{"navigationBarTitleText":"我的订单","titleNView":false}},{"path":"/pages/subuser/s_refund","meta":{},"window":{"navigationBarTitleText":"退款","titleNView":false}},{"path":"/pages/subuser/course_order","meta":{},"window":{"navigationBarTitleText":"课程订单","titleNView":false}},{"path":"/pages/subuser/member/open_order","meta":{},"window":{"navigationBarTitleText":"订单详情","titleNView":false}},{"path":"/pages/subuser/threeuser/c_order_details","meta":{},"window":{"navigationBarTitleText":"订单详情","titleNView":false}},{"path":"/pages/subuser/threeuser/return_goods","meta":{},"window":{"navigationBarTitleText":"填写退货信息","titleNView":false}},{"path":"/pages/subuser/threeuser/add_addto","meta":{},"window":{"navigationBarTitleText":"地址管理","titleNView":false}},{"path":"/pages/subuser/threeuser/ass_refund_details","meta":{},"window":{"navigationBarTitleText":"订单详情","titleNView":false}},{"path":"/pages/subuser/threeuser/assembleDetails","meta":{},"window":{"navigationBarTitleText":"订单详情","titleNView":false}},{"path":"/pages/subuser/threeuser/logistics","meta":{},"window":{"navigationBarTitleText":"物流信息","titleNView":false}},{"path":"/pages/subuser/threeuser/s_comment_order","meta":{},"window":{"navigationBarTitleText":"评论","titleNView":false}},{"path":"/pages/subuser/threeuser/s_comment_list","meta":{},"window":{"navigationBarTitleText":"评论列表","titleNView":false}},{"path":"/pages/subuser/threeuser/s_comment_success","meta":{},"window":{"navigationBarTitleText":"评论","titleNView":false}},{"path":"/pages/subuser/threeuser/s_refund_details","meta":{},"window":{"navigationBarTitleText":"退款详情","titleNView":false}},{"path":"/pages/subuser/threeuser/s_order_details","meta":{},"window":{"navigationBarTitleText":"订单详情","titleNView":false}},{"path":"/pages/subuser/threeuser/s_order_refund","meta":{},"window":{"navigationBarTitleText":"退款","titleNView":false}},{"path":"/pages/subuser/threeuser/cash","meta":{},"window":{"navigationBarTitleText":"余额提现","titleNView":false}},{"path":"/pages/login/forget","meta":{},"window":{"navigationBarTitleText":"忘记密码"}},{"path":"/pages/login/message_login","meta":{},"window":{"navigationBarTitleText":"短信登录"}},{"path":"/pages/login/reg","meta":{},"window":{"navigationBarTitleText":"注册","titleNView":false}},{"path":"/pages/activity/activity","meta":{},"window":{"navigationBarTitleText":"活动","titleNView":false}},{"path":"/pages/activity/particulars","meta":{},"window":{"navigationBarTitleText":"活动详情","titleNView":false}},{"path":"/pages/activity/registered","meta":{},"window":{"navigationBarTitleText":"已报名","titleNView":false}},{"path":"/pages/activity/apply","meta":{},"window":{"navigationBarTitleText":"立即报名","titleNView":false}},{"path":"/pages/subhome/details","meta":{},"window":{"navigationBarTitleText":"产品详情","titleNView":false}},{"path":"/pages/subclass/textual","meta":{},"window":{"navigationBarTitleText":"导师考证","titleNView":false}},{"path":"/pages/subclass/textual.1","meta":{},"window":{"navigationBarTitleText":"再次申请","titleNView":false}},{"path":"/pages/subclass/applyFor","meta":{},"window":{"navigationBarTitleText":"申请","titleNView":false}},{"path":"/pages/subclass/audit","meta":{},"window":{"navigationBarTitleText":"审核中","titleNView":false}},{"path":"/pages/subclass/repetition","meta":{},"window":{"navigationBarTitleText":"审核中","titleNView":false}},{"path":"/pages/subclass/certificate","meta":{},"window":{"navigationBarTitleText":"我的证书","titleNView":false}},{"path":"/pages/subclass/certificateList","meta":{},"window":{"navigationBarTitleText":"我的证书","titleNView":false}},{"path":"/pages/subindex/evaluating","meta":{},"window":{"navigationBarTitleText":"我的测评","titleNView":false}},{"path":"/pages/subindex/result","meta":{},"window":{"navigationBarTitleText":"我的测评","titleNView":false}},{"path":"/pages/subindex/topic","meta":{},"window":{"navigationBarTitleText":"我的测评","titleNView":false}},{"path":"/pages/subuser/brokerage/brokerage","meta":{},"window":{"navigationBarTitleText":"我的佣金","titleNView":false}},{"path":"/pages/subuser/brokerage/schoolfellow","meta":{},"window":{"navigationBarTitleText":"我的同学","titleNView":false}},{"path":"/pages/subuser/brokerage/record","meta":{},"window":{"navigationBarTitleText":"提现记录","titleNView":false}},{"path":"/pages/subuser/brokerage/invite","meta":{},"window":{"navigationBarTitleText":"我的邀码","titleNView":false}},{"path":"/pages/subuser/brokerage/sales","meta":{},"window":{"navigationBarTitleText":"分享奖学金","titleNView":false}},{"path":"/pages/subuser/brokerage/withdraw","meta":{},"window":{"navigationBarTitleText":"佣金提现","titleNView":false}},{"path":"/pages/subuser/brokerage/order","meta":{},"window":{"navigationBarTitleText":"分销订单","titleNView":false}},{"path":"/pages/subindex/listbox","meta":{},"window":{"navigationBarTitleText":"测评列表","titleNView":false}},{"path":"/pages/subuser/member/member","meta":{},"window":{"navigationBarTitleText":"会员中心","titleNView":false}},{"path":"/pages/subuser/member/upgrade","meta":{},"window":{"navigationBarTitleText":"积分升级","titleNView":false}},{"path":"/pages/subuser/relation/relation","meta":{},"window":{"navigationBarTitleText":"亲情号","titleNView":false}},{"path":"/pages/subuser/relation/record","meta":{},"window":{"navigationBarTitleText":"分享记录","titleNView":false}},{"path":"/pages/subuser/personage/personage","meta":{},"window":{"navigationBarTitleText":"个人资料","titleNView":false}},{"path":"/pages/subuser/personage/alter","meta":{},"window":{"navigationBarTitleText":"修改昵称","titleNView":false}},{"path":"/pages/subuser/collect","meta":{},"window":{"navigationBarTitleText":"收藏","titleNView":false}},{"path":"/pages/subuser/setting/setting","meta":{},"window":{"navigationBarTitleText":"设置","titleNView":false}},{"path":"/pages/subuser/setting/binding","meta":{},"window":{"navigationBarTitleText":"绑定上级","titleNView":false}},{"path":"/pages/subuser/setting/cellPhone","meta":{},"window":{"navigationBarTitleText":"修改手机号","titleNView":false}},{"path":"/pages/subuser/setting/password","meta":{},"window":{"navigationBarTitleText":"修改密码","titleNView":false}},{"path":"/pages/subuser/conversion/conversion","meta":{},"window":{"navigationBarTitleText":"优惠券","titleNView":false}},{"path":"/pages/subuser/conversion/exchange","meta":{},"window":{"navigationBarTitleText":"兑换中心","titleNView":false}},{"path":"/pages/subuser/activitys/activitys","meta":{},"window":{"navigationBarTitleText":"我的活动","titleNView":false}},{"path":"/pages/subuser/activitys/tessera","meta":{},"window":{"navigationBarTitleText":"入场卷","titleNView":false}},{"path":"/pages/subuser/study","meta":{},"window":{"navigationBarTitleText":"我的学习","titleNView":false}},{"path":"/pages/subuser/distribution/distribution","meta":{},"window":{"navigationBarTitleText":"管理中心","titleNView":false}},{"path":"/pages/subuser/distribution/application","meta":{},"window":{"navigationBarTitleText":"立即申请","titleNView":false}},{"path":"/pages/subuser/signIn","meta":{},"window":{"navigationBarTitleText":"每周签到","titleNView":false}},{"path":"/pages/subuser/integral/integral","meta":{},"window":{"navigationBarTitleText":"我的积分","titleNView":false}},{"path":"/pages/subuser/balance","meta":{},"window":{"navigationBarTitleText":"我的余额","titleNView":false}},{"path":"/pages/subuser/integral/know","meta":{},"window":{"navigationBarTitleText":"了解积分","titleNView":false}},{"path":"/pages/subindex/classify","meta":{},"window":{"navigationBarTitleText":"分类","titleNView":false}},{"path":"/pages/subindex/texts","meta":{},"window":{"navigationBarTitleText":"文章","titleNView":false}},{"path":"/pages/subindex/article","meta":{},"window":{"navigationBarTitleText":"文章","titleNView":false}},{"path":"/pages/subindex/morning","meta":{},"window":{"navigationBarTitleText":"早间晨语","titleNView":false}},{"path":"/pages/subuser/abrief","meta":{},"window":{"navigationBarTitleText":"公司简介","titleNView":false}},{"path":"/pages/com_page/comment","meta":{},"window":{"navigationBarTitleText":"全部评论","titleNView":false}},{"path":"/pages/subindex/comment","meta":{},"window":{"navigationBarTitleText":"全部评论","titleNView":false}},{"path":"/pages/subindex/t_search","meta":{},"window":{"navigationBarTitleText":"文章搜索","titleNView":false}},{"path":"/pages/subuser/distribution/agreement","meta":{},"window":{"navigationBarTitleText":"同意协议","titleNView":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
