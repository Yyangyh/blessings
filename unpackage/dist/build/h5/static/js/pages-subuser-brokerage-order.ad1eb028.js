(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-subuser-brokerage-order"],{1063:function(t,e,a){"use strict";a.r(e);var i=a("e664"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},"1e93":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"status_bar"}),a("returns",{attrs:{titles:t.title}}),a("v-uni-view",{staticClass:"order_top"},[a("v-uni-view",{staticClass:"top_box"},[a("v-uni-view",[t._v("待结算")]),a("v-uni-view",[t._v(t._s(t.data.unsettle)+"元")])],1),a("v-uni-view",{staticClass:"top_box"},[a("v-uni-view",[t._v("已结算")]),a("v-uni-view",[t._v(t._s(t.data.settled)+"元")])],1),a("v-uni-view",{staticClass:"top_box"},[a("v-uni-view",[t._v("已完成")]),a("v-uni-view",[t._v(t._s(t.data.finnish)+"元")])],1)],1),a("v-uni-view",{staticClass:"allorder"},[a("v-uni-text",{staticClass:"one",class:{active:0==t.cur},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.Indexs(0)}}},[t._v("全部")]),a("v-uni-text",{staticClass:"two",class:{active:1==t.cur},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.Indexs(1)}}},[t._v("待结算")]),a("v-uni-text",{staticClass:"three",class:{active:2==t.cur},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.Indexs(2)}}},[t._v("已结算")]),a("v-uni-text",{staticClass:"four",class:{active:3==t.cur},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.Indexs(3)}}},[t._v("完成")])],1),a("v-uni-view",{staticClass:"box"},t._l(t.dataList,function(e,i){return a("v-uni-view",{key:e.id,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.msgs=i}}},[a("v-uni-view",{staticClass:"line"},[a("v-uni-view",{staticClass:"l_left"},[a("v-uni-image",{attrs:{src:t.APIconfig.api_img+e.avatar,mode:"widthFix"}}),a("v-uni-view",{staticClass:"left_text"},[a("v-uni-view",[a("v-uni-text",{staticStyle:{"margin-right":"5rpx"}},[t._v("昵称:")]),a("v-uni-text",[t._v(t._s(e.username))])],1),a("v-uni-view",{staticStyle:{"margin-top":"5rpx"}},[t._v(t._s(e.order_no))])],1)],1),a("v-uni-view",{staticClass:"middle"}),a("v-uni-view",{staticClass:"l_right"},[a("v-uni-view",[t._v(t._s(e.commission_money))]),a("v-uni-view",[t._v(t._s(e.status_text))])],1)],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.msgs===i,expression:"msgs === index"}],staticClass:"particulars"},[a("v-uni-view",{staticClass:"lines"},[a("v-uni-view",[t._v("订单号：")]),a("v-uni-text",[t._v(t._s(e.order_no))])],1),a("v-uni-view",{staticClass:"lines"},[a("v-uni-view",[t._v("状态：")]),a("v-uni-text",[t._v(t._s(e.status_text))])],1),a("v-uni-view",{staticClass:"lines"},[a("v-uni-view",[t._v("订单金额：")]),a("v-uni-text",[t._v(t._s(e.pay_price))])],1),a("v-uni-view",{staticClass:"lines"},[a("v-uni-view",[t._v("分销金额：")]),a("v-uni-text",[t._v(t._s(e.commission_money))])],1)],1)],1)}),1),a("uni-load-more",{attrs:{status:t.more}})],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"25d6":function(t,e,a){"use strict";var i=a("392d"),n=a.n(i);n.a},"392d":function(t,e,a){var i=a("477d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("d2f44dd2",i,!0,{sourceMap:!1,shadowMode:!1})},"477d":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-load-more[data-v-187f4872]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-load-more__text[data-v-187f4872]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-187f4872]{position:relative;height:24px;width:24px;margin-right:10px}.uni-load-more__img>.load[data-v-187f4872]{position:absolute}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-187f4872]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-187f4872 .96s ease infinite;animation:load-data-v-187f4872 .96s ease infinite}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-187f4872]:first-child{-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-187f4872]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-187f4872]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-187f4872]:nth-child(4){top:11px;left:0}.uni-load-more__img>.loader-android[data-v-187f4872]{position:absolute;left:0;top:0;right:0;bottom:0;box-sizing:border-box;border:solid 2px #777;border-radius:50%;border-bottom-color:transparent!important;-webkit-animation:loader-android-data-v-187f4872 1s 0s linear infinite;animation:loader-android-data-v-187f4872 1s 0s linear infinite}.load1[data-v-187f4872],.load2[data-v-187f4872],.load3[data-v-187f4872]{height:24px;width:24px}.load2[data-v-187f4872]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-187f4872]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 .uni-load-view_wrapper[data-v-187f4872]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.load2 .uni-load-view_wrapper[data-v-187f4872]:first-child{-webkit-animation-delay:.08s;animation-delay:.08s}.load3 .uni-load-view_wrapper[data-v-187f4872]:first-child{-webkit-animation-delay:.16s;animation-delay:.16s}.load1 .uni-load-view_wrapper[data-v-187f4872]:nth-child(2){-webkit-animation-delay:.24s;animation-delay:.24s}.load2 .uni-load-view_wrapper[data-v-187f4872]:nth-child(2){-webkit-animation-delay:.32s;animation-delay:.32s}.load3 .uni-load-view_wrapper[data-v-187f4872]:nth-child(2){-webkit-animation-delay:.4s;animation-delay:.4s}.load1 .uni-load-view_wrapper[data-v-187f4872]:nth-child(3){-webkit-animation-delay:.48s;animation-delay:.48s}.load2 .uni-load-view_wrapper[data-v-187f4872]:nth-child(3){-webkit-animation-delay:.56s;animation-delay:.56s}.load3 .uni-load-view_wrapper[data-v-187f4872]:nth-child(3){-webkit-animation-delay:.64s;animation-delay:.64s}.load1 .uni-load-view_wrapper[data-v-187f4872]:nth-child(4){-webkit-animation-delay:.72s;animation-delay:.72s}.load2 .uni-load-view_wrapper[data-v-187f4872]:nth-child(4){-webkit-animation-delay:.8s;animation-delay:.8s}.load3 .uni-load-view_wrapper[data-v-187f4872]:nth-child(4){-webkit-animation-delay:.88s;animation-delay:.88s}@-webkit-keyframes load-data-v-187f4872{0%{opacity:1}to{opacity:.2}}@-webkit-keyframes loader-android-data-v-187f4872{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""])},"4da4":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"top"},[a("v-uni-view",{staticClass:"top_enlarge",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.returns()}}},[a("v-uni-image",{attrs:{src:"/static/image/com_page/returns.png",mode:"widthFix"}})],1),a("v-uni-text",[t._v(t._s(t.titles))]),a("v-uni-text")],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},5713:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:["titles"],data:function(){return{}},methods:{returns:function(){history.back()}}};e.default=i},"75fc":function(t,e,a){"use strict";a.r(e);var i=a("a745"),n=a.n(i);function o(t){if(n()(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}var r=a("774e"),s=a.n(r),d=a("c8bb"),l=a.n(d);function c(t){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function v(t){return o(t)||c(t)||u()}a.d(e,"default",function(){return v})},"7d0b":function(t,e,a){"use strict";a.r(e);var i=a("5713"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},8053:function(t,e,a){"use strict";var i=a("d2cf"),n=a.n(i);n.a},"883a":function(t,e,a){"use strict";a.r(e);var i=a("ee0d"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},"9e5d":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".top[data-v-d1ab49dc]{height:%?105?%;padding:0 %?44?%;width:100%;box-sizing:border-box;position:fixed;top:0;z-index:99;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;font-weight:700;color:#333;background:#fff;box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1)}.top_enlarge[data-v-d1ab49dc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;width:%?180?%}.top uni-image[data-v-d1ab49dc]{height:%?40?%;width:%?40?%}.top uni-text[data-v-d1ab49dc]:nth-of-type(2){width:%?180?%;display:inline-block}",""])},a2fb:function(t,e,a){"use strict";a.r(e);var i=a("1e93"),n=a("883a");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("c196");var r=a("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"bc7bbd4a",null);e["default"]=s.exports},a3e6:function(t,e,a){var i=a("ac3d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("0bee8324",i,!0,{sourceMap:!1,shadowMode:!1})},a465:function(t,e,a){var i=a("63b6"),n=a("bf0b").f,o=a("e4ae");i(i.S,"Reflect",{deleteProperty:function(t,e){var a=n(o(t),e);return!(a&&!a.configurable)&&delete t[e]}})},ac3d:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-bc7bbd4a]{background:#f6f6f7}.order_top[data-v-bc7bbd4a]{width:%?750?%;height:%?158?%;background:-webkit-linear-gradient(left,#f74c4a,#f56e6a);background:linear-gradient(90deg,#f74c4a,#f56e6a);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;color:#fff}.order_top .top_box uni-view[data-v-bc7bbd4a]{margin:%?5?%}.allorder[data-v-bc7bbd4a]{width:100%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;line-height:%?100?%;font-size:%?28?%;background-color:#fff}.allorder uni-text[data-v-bc7bbd4a]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.active[data-v-bc7bbd4a]{color:#d80000}.box .line[data-v-bc7bbd4a]{background-color:#fff;border-bottom:%?1?% solid #f1f1f1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?30?% %?20?%}.box .line .l_left[data-v-bc7bbd4a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.box .line .l_left uni-image[data-v-bc7bbd4a]{width:%?100?%;height:%?100?%;margin-right:%?24?%;border-radius:50%}.box .line .l_left .left_text uni-view[data-v-bc7bbd4a]:first-child{font-size:%?28?%}.box .line .l_left .left_text uni-view[data-v-bc7bbd4a]:last-child{font-size:%?24?%;color:#999}.box .line .middle[data-v-bc7bbd4a]{width:%?1?%;height:%?81?%;background:#ccc}.box .line .l_right[data-v-bc7bbd4a]{font-size:%?24?%;text-align:center}.box .line .l_right uni-view[data-v-bc7bbd4a]{margin:%?2?% 0}.box .particulars[data-v-bc7bbd4a]{padding:0 %?20?%}.box .particulars .lines[data-v-bc7bbd4a]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?24?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#333}.box .particulars .lines uni-view[data-v-bc7bbd4a]{width:%?125?%;margin:%?12?% 0}.base[data-v-bc7bbd4a]{font-size:%?24?%;color:#999;text-align:center;margin-top:%?31?%}body.?%PAGE?%[data-v-bc7bbd4a]{background:#f6f6f7}',""])},afea:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-load-more"},["circle"===t.iconType||"auto"===t.iconType&&"android"===t.platform?a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[a("v-uni-view",{staticClass:"loader-android",style:{borderColor:t.color}})],1):a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[a("v-uni-view",{staticClass:"load1 load"},[a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1),a("v-uni-view",{staticClass:"load2 load"},[a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1),a("v-uni-view",{staticClass:"load3 load"},[a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1)],1),a("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},b5b1:function(t,e,a){a("a465"),t.exports=a("584a").Reflect.deleteProperty},c196:function(t,e,a){"use strict";var i=a("a3e6"),n=a.n(i);n.a},d2cf:function(t,e,a){var i=a("9e5d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("471ce824",i,!0,{sourceMap:!1,shadowMode:!1})},d656:function(t,e,a){t.exports=a("b5b1")},e0ce:function(t,e,a){"use strict";a.r(e);var i=a("4da4"),n=a("7d0b");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("8053");var r=a("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"d1ab49dc",null);e["default"]=s.exports},e664:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=uni.getSystemInfoSync().platform,n={name:"UniLoadMore",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},iconType:{type:String,default:"auto"},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{platform:i}}};e.default=n},ee0d:function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("75fc")),o=i(a("d656")),r=i(a("e0ce")),s=i(a("faa7")),d={components:{returns:r.default,uniLoadMore:s.default},data:function(){return{title:"分销订单",cur:"",reveal:!1,data:"",dataList:[],msgs:"",more:"more",page:1,loadRecord:!0}},methods:{Indexs:function(t){this.cur=t,this.more="loading",this.dataList.length=0,this.page=1,this.loadRecord=!0;var e={user_id:this.$store.state.user.id,type:t,page:1};this.Index(e)},loadMore:function(){this.more="loading";var t={user_id:this.$store.state.user.id,page:this.page,type:this.cur};t.type==this.cur&&(0,o.default)(t,"type"),console.log(this.cur),this.Index(t)},Index:function(t){this.service.entire(this,"post",this.APIconfig.api_root.subuser.u_index,t,function(t,e){var a;t.data=e.data,(a=t.dataList).push.apply(a,(0,n.default)(e.data.order)),t.page++,t.more="more",e.data.order.length<10&&(t.more="noMore",t.loadRecord=!1)})}},onReachBottom:function(){0!=this.loadRecord&&this.loadMore()},onLoad:function(){this.Indexs(0)}};e.default=d},faa7:function(t,e,a){"use strict";a.r(e);var i=a("afea"),n=a("1063");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("25d6");var r=a("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"187f4872",null);e["default"]=s.exports}}]);