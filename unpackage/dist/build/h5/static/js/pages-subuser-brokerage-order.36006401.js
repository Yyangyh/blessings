(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-subuser-brokerage-order"],{"14de":function(t,e,i){"use strict";i.r(e);var a=i("dd66"),n=i("8ce0");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("1882");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"ca76880e",null,!1,a["a"],r);e["default"]=d.exports},1649:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:["titles"],data:function(){return{}},methods:{returns:function(){history.back()}}};e.default=a},1882:function(t,e,i){"use strict";var a=i("f97c"),n=i.n(a);n.a},"27d3":function(t,e,i){var a=i("5090");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("2c4d6888",a,!0,{sourceMap:!1,shadowMode:!1})},"2bcf":function(t,e,i){"use strict";i.r(e);var a=i("8f2c"),n=i("954d");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("a67f");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"e59021f4",null,!1,a["a"],r);e["default"]=d.exports},"2c5b":function(t,e,i){"use strict";var a={"uni-load-more":i("2bcf").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"status_bar"}),i("returns",{attrs:{titles:t.title}}),i("v-uni-view",{staticClass:"order_top"},[i("v-uni-view",{staticClass:"top_box"},[i("v-uni-view",[t._v("待结算")]),i("v-uni-view",[t._v(t._s(t.data.unsettle)+"元")])],1),i("v-uni-view",{staticClass:"top_box"},[i("v-uni-view",[t._v("已结算")]),i("v-uni-view",[t._v(t._s(t.data.settled)+"元")])],1),i("v-uni-view",{staticClass:"top_box"},[i("v-uni-view",[t._v("已完成")]),i("v-uni-view",[t._v(t._s(t.data.finnish)+"元")])],1)],1),i("v-uni-view",{staticClass:"allorder"},[i("v-uni-text",{staticClass:"one",class:{active:0==t.cur},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.Indexs(0)}}},[t._v("全部")]),i("v-uni-text",{staticClass:"two",class:{active:1==t.cur},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.Indexs(1)}}},[t._v("待结算")]),i("v-uni-text",{staticClass:"three",class:{active:2==t.cur},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.Indexs(2)}}},[t._v("已结算")]),i("v-uni-text",{staticClass:"four",class:{active:3==t.cur},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.Indexs(3)}}},[t._v("完成")])],1),i("v-uni-view",{staticClass:"box"},t._l(t.dataList,function(e,a){return i("v-uni-view",{key:e.id,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.assi_index(a)}}},[i("v-uni-view",{staticClass:"line"},[i("v-uni-view",{staticClass:"l_left"},[i("v-uni-image",{attrs:{src:t.$api_img()+e.avatar,mode:"widthFix"}}),i("v-uni-view",{staticClass:"left_text"},[i("v-uni-view",[i("v-uni-text",{staticStyle:{"margin-right":"5rpx"}},[t._v("昵称:")]),i("v-uni-text",[t._v(t._s(e.username))])],1),i("v-uni-view",{staticStyle:{"margin-top":"5rpx"}},[t._v(t._s(e.order_no))])],1)],1),i("v-uni-view",{staticClass:"middle"}),i("v-uni-view",{staticClass:"l_right"},[i("v-uni-view",[t._v(t._s(e.commission_money))]),i("v-uni-view",[t._v(t._s(e.status_text))])],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.msgs===a,expression:"msgs === index"}],staticClass:"particulars"},[i("v-uni-view",{staticClass:"lines"},[i("v-uni-view",[t._v("订单号：")]),i("v-uni-text",[t._v(t._s(e.order_no))])],1),i("v-uni-view",{staticClass:"lines"},[i("v-uni-view",[t._v("状态：")]),i("v-uni-text",[t._v(t._s(e.status_text))])],1),i("v-uni-view",{staticClass:"lines"},[i("v-uni-view",[t._v("订单金额：")]),i("v-uni-text",[t._v(t._s(e.pay_price))])],1),i("v-uni-view",{staticClass:"lines"},[i("v-uni-view",[t._v("分销金额：")]),i("v-uni-text",[t._v(t._s(e.commission_money))])],1)],1)],1)}),1),i("uni-load-more",{attrs:{status:t.more}})],1)},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},5090:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-load-more[data-v-e59021f4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-load-more__text[data-v-e59021f4]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-e59021f4]{position:relative;height:24px;width:24px;margin-right:10px}.uni-load-more__img > .load[data-v-e59021f4]{position:absolute}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-e59021f4]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-e59021f4 .96s ease infinite;animation:load-data-v-e59021f4 .96s ease infinite}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-e59021f4]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-e59021f4]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-e59021f4]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-e59021f4]:nth-child(4){top:11px;left:0}.uni-load-more__img > .loader-android[data-v-e59021f4]{position:absolute;left:0;top:0;right:0;bottom:0;box-sizing:border-box;border:solid 2px #777;border-radius:50%;border-bottom-color:transparent!important;-webkit-animation:loader-android-data-v-e59021f4 1s 0s linear infinite;animation:loader-android-data-v-e59021f4 1s 0s linear infinite}.load1[data-v-e59021f4],\n.load2[data-v-e59021f4],\n.load3[data-v-e59021f4]{height:24px;width:24px}.load2[data-v-e59021f4]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-e59021f4]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 .uni-load-view_wrapper[data-v-e59021f4]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 .uni-load-view_wrapper[data-v-e59021f4]:nth-child(1){-webkit-animation-delay:.08s;animation-delay:.08s}.load3 .uni-load-view_wrapper[data-v-e59021f4]:nth-child(1){-webkit-animation-delay:.16s;animation-delay:.16s}.load1 .uni-load-view_wrapper[data-v-e59021f4]:nth-child(2){-webkit-animation-delay:.24s;animation-delay:.24s}.load2 .uni-load-view_wrapper[data-v-e59021f4]:nth-child(2){-webkit-animation-delay:.32s;animation-delay:.32s}.load3 .uni-load-view_wrapper[data-v-e59021f4]:nth-child(2){-webkit-animation-delay:.4s;animation-delay:.4s}.load1 .uni-load-view_wrapper[data-v-e59021f4]:nth-child(3){-webkit-animation-delay:.48s;animation-delay:.48s}.load2 .uni-load-view_wrapper[data-v-e59021f4]:nth-child(3){-webkit-animation-delay:.56s;animation-delay:.56s}.load3 .uni-load-view_wrapper[data-v-e59021f4]:nth-child(3){-webkit-animation-delay:.64s;animation-delay:.64s}.load1 .uni-load-view_wrapper[data-v-e59021f4]:nth-child(4){-webkit-animation-delay:.72s;animation-delay:.72s}.load2 .uni-load-view_wrapper[data-v-e59021f4]:nth-child(4){-webkit-animation-delay:.8s;animation-delay:.8s}.load3 .uni-load-view_wrapper[data-v-e59021f4]:nth-child(4){-webkit-animation-delay:.88s;animation-delay:.88s}@-webkit-keyframes load-data-v-e59021f4{0%{opacity:1}100%{opacity:.2}}@-webkit-keyframes loader-android-data-v-e59021f4{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""])},"64e1":function(t,e,i){"use strict";i.r(e);var a=i("2c5b"),n=i("6cac");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("8ae3");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"622fdbf8",null,!1,a["a"],r);e["default"]=d.exports},"67f4":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=uni.getSystemInfoSync().platform,n={name:"UniLoadMore",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},iconType:{type:String,default:"auto"},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{platform:a}}};e.default=n},"6cac":function(t,e,i){"use strict";i.r(e);var a=i("865d"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"75fc":function(t,e,i){"use strict";i.r(e);var a=i("a745"),n=i.n(a);function o(t){if(n()(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}var r=i("774e"),s=i.n(r),d=i("c8bb"),l=i.n(d);function c(t){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){return o(t)||c(t)||u()}i.d(e,"default",function(){return f})},"865d":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("75fc")),o=a(i("14de")),r=a(i("2bcf")),s={components:{returns:o.default,uniLoadMore:r.default},data:function(){return{title:"分享订单",cur:"",reveal:!1,data:"",dataList:[],msgs:"",more:"more",loadRecord:!0}},methods:{assi_index:function(t){this.msgs=t},Indexs:function(t){this.cur=t,this.more="loading",this.dataList.length=0,this.loadRecord=!0;var e={user_id:this.$store.state.user.id,type:t};this.Index(e)},loadMore:function(){var t;this.more="loading";var e=this.All_data.length;(t=this.dataList).push.apply(t,(0,n.default)(this.All_data.splice(0,10))),e<10?(this.loadRecord=!1,this.more="noMore"):this.more="more"},Index:function(t){this.service.entire(this,"post",this.APIconfig.api_root.subuser.u_index,t,function(t,e){var i;t.data=e.data,t.All_data=e.data.order;var a=t.All_data.length;(i=t.dataList).push.apply(i,(0,n.default)(t.All_data.splice(0,10))),a<10?(t.loadRecord=!1,t.more="noMore"):t.more="more"})}},onReachBottom:function(){0!=this.loadRecord&&this.loadMore()},onLoad:function(){this.Indexs(0)}};e.default=s},"8ae3":function(t,e,i){"use strict";var a=i("8fdd"),n=i.n(a);n.a},"8ce0":function(t,e,i){"use strict";i.r(e);var a=i("1649"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"8f2c":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-load-more"},["circle"===t.iconType||"auto"===t.iconType&&"android"===t.platform?i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[i("v-uni-view",{staticClass:"loader-android",style:{borderColor:t.color}})],1):i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[i("v-uni-view",{staticClass:"load1 load"},[i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load2 load"},[i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load3 load"},[i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1)],1),i("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},"8fdd":function(t,e,i){var a=i("9c5b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("665eda5e",a,!0,{sourceMap:!1,shadowMode:!1})},"954d":function(t,e,i){"use strict";i.r(e);var a=i("67f4"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"9c5b":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-622fdbf8]{background:#f6f6f7}.order_top[data-v-622fdbf8]{width:%?750?%;height:%?158?%;background:-webkit-linear-gradient(left,#f74c4a,#f56e6a);background:linear-gradient(90deg,#f74c4a,#f56e6a);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;color:#fff}.order_top .top_box uni-view[data-v-622fdbf8]{margin:%?5?%}.allorder[data-v-622fdbf8]{width:100%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;line-height:%?100?%;font-size:%?28?%;background-color:#fff;border-bottom:%?2?% solid #f1f1f1}.allorder uni-text[data-v-622fdbf8]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.active[data-v-622fdbf8]{color:#d80000}.box .line[data-v-622fdbf8]{background-color:#fff;border-bottom:%?1?% solid #f1f1f1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?30?% %?20?%}.box .line .l_left[data-v-622fdbf8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.box .line .l_left uni-image[data-v-622fdbf8]{width:%?100?%;height:%?100?%;margin-right:%?24?%;border-radius:50%}.box .line .l_left .left_text uni-view[data-v-622fdbf8]:first-child{font-size:%?28?%}.box .line .l_left .left_text uni-view[data-v-622fdbf8]:last-child{font-size:%?24?%;color:#999}.box .line .middle[data-v-622fdbf8]{width:%?1?%;height:%?81?%;background:#ccc}.box .line .l_right[data-v-622fdbf8]{font-size:%?24?%;text-align:center}.box .line .l_right uni-view[data-v-622fdbf8]{margin:%?2?% 0}.box .particulars[data-v-622fdbf8]{padding:0 %?20?%}.box .particulars .lines[data-v-622fdbf8]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?24?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#333}.box .particulars .lines uni-view[data-v-622fdbf8]{width:%?125?%;margin:%?12?% 0}.base[data-v-622fdbf8]{font-size:%?24?%;color:#999;text-align:center;margin-top:%?31?%}body.?%PAGE?%[data-v-622fdbf8]{background:#f6f6f7}',""])},a67f:function(t,e,i){"use strict";var a=i("27d3"),n=i.n(a);n.a},d8a7:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.top[data-v-ca76880e]{height:%?105?%;padding:0 %?44?%;width:100%;box-sizing:border-box;position:fixed;top:0;z-index:99;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;font-weight:700;color:#333;background:#fff;box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1)}.top .top_enlarge[data-v-ca76880e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;width:%?180?%}.top uni-text[data-v-ca76880e]:nth-of-type(2){width:%?180?%;display:inline-block}.top uni-image[data-v-ca76880e]{height:%?40?%;width:%?40?%}',""])},dd66:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"top_enlarge",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.returns()}}},[i("v-uni-image",{attrs:{src:"/static/image/com_page/returns.png",mode:"widthFix"}})],1),i("v-uni-text",[t._v(t._s(t.titles))]),i("v-uni-text")],1)},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},f97c:function(t,e,i){var a=i("d8a7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("70c21042",a,!0,{sourceMap:!1,shadowMode:!1})}}]);