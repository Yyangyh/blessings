(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-subhome-threehome-group_products"],{"07b2":function(t,e,i){var a=i("c7ab");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("0c9e6604",a,!0,{sourceMap:!1,shadowMode:!1})},"12ec":function(t,e,i){"use strict";var a=i("07b2"),n=i.n(a);n.a},"28fd":function(t,e,i){"use strict";var a=i("ecfc"),n=i.n(a);n.a},3333:function(t,e,i){"use strict";i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:["datas"],data:function(){return{title:""}},onLoad:function(){},onBackPress:function(){if(nvImageMenu.isVisible())return nvImageMenu.hide(),nvMask.hide(),!0},onNavigationBarButtonTap:function(t){switch(t.type){case"share":break}},methods:{share:function(){var t=this.datas;void 0==this.$store.state.user.invite_code?this.service.entire(this,"post",this.APIconfig.api_root.index.u_token,{id:this.$store.state.user.id},(function(e,i){0==i.code&&(e.$store.commit("state_user",i.data.user_info),e.$store.commit("state_token",i.data.token),uni.setStorageSync("state_user",i.data.user_info),uni.setStorageSync("state_token",i.data.token),2==t.Url.split("?").length?t.Url=t.Url+"&code="+e.$store.state.user.invite_code:t.Url=t.Url+"?code="+e.$store.state.user.invite_code,t.Url,t.Title,t.Summary,t.ImageUrl,nvMask.show(),nvImageMenu.show())})):(2==t.Url.split("?").length?t.Url=t.Url+"&code="+this.$store.state.user.invite_code:t.Url=t.Url+"?code="+this.$store.state.user.invite_code,t.Url,t.Title,t.Summary,t.ImageUrl,nvMask.show(),nvImageMenu.show())}}};e.default=a},"39dd":function(t,e,i){"use strict";i.r(e);var a=i("f781"),n=i("7300");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("12ec");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"4eedfc25",null,!1,a["a"],r);e["default"]=c.exports},"5c79":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"status_bar"}),i("share",{ref:"share",attrs:{datas:t.share_arr}}),i("v-uni-view",{staticClass:"top"},[i("v-uni-image",{attrs:{src:"/static/image/com_page/returns.png",mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.service.returns()}}}),i("v-uni-text",[t._v("产品详情")]),i("v-uni-image",{attrs:{src:"/static/image/subhome/share.png"}})],1),i("v-uni-view",{staticClass:"top_img"},[i("v-uni-image",{attrs:{src:t.data.thumb,mode:"scaleToFill"}})],1),i("v-uni-view",{staticClass:"product_price"},[i("v-uni-view",{staticClass:"pr_top"},[t._v(t._s(t.data.title))]),i("v-uni-view",{staticClass:"price"},[i("v-uni-view",{},[i("v-uni-text",[t._v("￥"+t._s(t.data.price))]),i("v-uni-image",{attrs:{src:"/static/image/subhome/team.png",mode:"widthFix"}}),i("v-uni-text",[t._v(t._s(t.data.groupnum)+"人成团")])],1),i("v-uni-text",{staticClass:"sell"},[t._v("已售"+t._s(t.data.sales))])],1),i("v-uni-view",{staticClass:"pr_bottom"},[i("v-uni-view",{staticClass:"pr_coupon"},[i("v-uni-text",[t._v("拼团规则")])],1),i("v-uni-view",{staticClass:"receive_co"},[i("v-uni-text",[t._v("邀请好友组团")])],1)],1)],1),i("v-uni-view",{staticClass:"pro_img"},[i("v-uni-view",{staticClass:"img_test"},[t._v("产品介绍")]),i("v-uni-view",{staticClass:"rich"},[i("v-uni-rich-text",{staticClass:"test",attrs:{nodes:t.data.content}})],1)],1),i("v-uni-view",{staticClass:"bottom_tab"},[i("v-uni-view",{staticClass:"tab_list tab_right"},[i("v-uni-view",{staticClass:"single",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$jump("./group_order?type=single&id="+t.id)}}},[i("v-uni-view",{},[t._v("￥"+t._s(t.data.groupsprice))]),i("v-uni-view",{},[t._v("单独购买")])],1),i("v-uni-view",{staticClass:"group",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$jump("./operation?type=groups&id="+t.id)}}},[i("v-uni-view",{},[t._v("￥"+t._s(t.data.price))]),i("v-uni-view",{},[t._v("参与拼团")])],1)],1)],1)],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},7300:function(t,e,i){"use strict";i.r(e);var a=i("3333"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},c5f8:function(t,e,i){"use strict";i.r(e);var a=i("5c79"),n=i("e3fe");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("28fd");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"aaa25854",null,!1,a["a"],r);e["default"]=c.exports},c707:function(t,e,i){"use strict";var a=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("39dd")),o={components:{share:n.default},data:function(){return{show:0,data:"",id:"",share_arr:{}}},methods:{tips:function(){uni.showModal({title:"提示",content:"请点击右上角选择分享！",showCancel:!1,success:function(t){}})}},onLoad:function(t){this.share_arr.Url="https://wx.huanqiutongmall.com/h5/#/pages/login/reg",this.id=t.id,this.service.entire(this,"get",this.APIconfig.api_root.subhome.threehome.g_Detail,{id:t.id},(function(t,e){t.data=e.data.goods,t.share_arr.Title=t.data.title,t.share_arr.ImageUrl=t.data.thumb}))}};e.default=o},c7ab:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".sub_share[data-v-4eedfc25]{height:%?50?%;width:%?50?%}",""]),t.exports=e},e0ad:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-aaa25854]{background:#f1f1f1;padding-bottom:%?120?%}.top[data-v-aaa25854]{position:fixed;width:100%;z-index:886;-webkit-box-sizing:border-box;box-sizing:border-box;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;height:%?105?%;padding:0 %?30?%;font-size:%?32?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff}.top uni-image[data-v-aaa25854]:first-child{width:%?31?%;height:%?31?%}.top uni-image[data-v-aaa25854]:last-child{width:%?50?%;height:%?50?%}.top_img[data-v-aaa25854]{width:100%;height:%?360?%;position:relative}.top_img uni-image[data-v-aaa25854]{width:100%;height:100%}.product_price[data-v-aaa25854]{background:#fff;font-size:%?32?%;border-top:%?2?% solid #f1f1f1;margin-bottom:%?20?%}.product_price .pr_top[data-v-aaa25854]{\r\n  /* font-weight: bold; */font-size:%?32?%;padding:%?20?%}.product_price .price[data-v-aaa25854]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?20?%;border-bottom:%?2?% solid #f4f4f4;color:#999;font-size:%?30?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.product_price .price uni-view[data-v-aaa25854]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.product_price .price uni-image[data-v-aaa25854]{height:%?34?%;width:%?34?%;margin:0 %?20?% 0 %?30?%}.product_price .price uni-view uni-text[data-v-aaa25854]:nth-of-type(1){font-weight:700;color:#ff431d;font-size:%?36?%}.product_price .price uni-view uni-text[data-v-aaa25854]:nth-of-type(2){font-size:%?28?%}.product_price .price .sell[data-v-aaa25854]{font-size:%?24?%}.product_price .pr_bottom[data-v-aaa25854]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?20?%}.product_price .pr_bottom uni-image[data-v-aaa25854]{width:%?32?%;height:%?32?%}.product_price .pr_bottom .pr_coupon[data-v-aaa25854]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#333;font-size:%?30?%}.product_price .pr_bottom .pr_coupon uni-image[data-v-aaa25854]{margin-right:%?20?%}.product_price .pr_bottom .receive_co[data-v-aaa25854]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:right;color:#999;font-size:%?24?%}.pro_img .img_test[data-v-aaa25854]{text-align:center;padding:%?30?%;font-size:%?32?%}.pro_img .rich[data-v-aaa25854]{padding:%?20?%}.pro_img uni-image[data-v-aaa25854]{width:100%}.bottom_tab[data-v-aaa25854]{background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;padding:%?20?% %?76?%;position:fixed;bottom:0;left:0;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.bottom_tab .tab_list[data-v-aaa25854]{text-align:center;color:#999}.bottom_tab .tab_list uni-image[data-v-aaa25854]{height:%?44?%;width:%?44?%}.bottom_tab .tab_right[data-v-aaa25854]{font-size:%?32?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:100%}.bottom_tab .tab_right .single[data-v-aaa25854]{background:#d80000;color:#fff;font-size:%?24?%;width:%?250?%;height:%?80?%;border-radius:%?80?%}.bottom_tab .tab_right .single uni-view[data-v-aaa25854]:nth-of-type(1){font-size:%?30?%}.bottom_tab .tab_right .group[data-v-aaa25854]{background:#ef7c38;color:#fff;font-size:%?24?%;width:%?250?%;height:%?80?%;border-radius:%?80?%}.bottom_tab .tab_right .group uni-view[data-v-aaa25854]:nth-of-type(1){font-size:%?30?%}',""]),t.exports=e},e3fe:function(t,e,i){"use strict";i.r(e);var a=i("c707"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},ecfc:function(t,e,i){var a=i("e0ad");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("31e15d6a",a,!0,{sourceMap:!1,shadowMode:!1})},f781:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{})},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))}}]);