(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-subuser-assemble_refund"],{"15ff":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=uni.getSystemInfoSync().platform,o={name:"UniLoadMore",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},iconType:{type:String,default:"auto"},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{platform:i}}};a.default=o},"19c1":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={props:["titles"],data:function(){return{}},methods:{returns:function(){history.back()}}};a.default=i},"1cbf":function(t,a,e){var i=e("7371");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("0617f0a4",i,!0,{sourceMap:!1,shadowMode:!1})},2082:function(t,a,e){"use strict";var i,o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-load-more"},["circle"===t.iconType||"auto"===t.iconType&&"android"===t.platform?e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[e("v-uni-view",{staticClass:"loader-android",style:{borderColor:t.color}})],1):e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[e("v-uni-view",{staticClass:"load1 load"},[e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1),e("v-uni-view",{staticClass:"load2 load"},[e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1),e("v-uni-view",{staticClass:"load3 load"},[e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1)],1),e("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},n=[];e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return i}))},"20fe":function(t,a,e){"use strict";e.r(a);var i=e("bb9a"),o=e("db07");for(var n in o)"default"!==n&&function(t){e.d(a,t,(function(){return o[t]}))}(n);e("2a10");var r,s=e("f0c5"),l=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"d459b51e",null,!1,i["a"],r);a["default"]=l.exports},"245e":function(t,a,e){"use strict";var i=e("1cbf"),o=e.n(i);o.a},"2a10":function(t,a,e){"use strict";var i=e("3de1"),o=e.n(i);o.a},3344:function(t,a,e){"use strict";e.r(a);var i=e("15ff"),o=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=o.a},"3de1":function(t,a,e){var i=e("7822");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("2266c13a",i,!0,{sourceMap:!1,shadowMode:!1})},"5add":function(t,a,e){"use strict";var i=e("5bfe"),o=e.n(i);o.a},"5bfe":function(t,a,e){var i=e("8213");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("cd704186",i,!0,{sourceMap:!1,shadowMode:!1})},7371:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".mall_box[data-v-37a4ac01]{font-size:%?30?%}.refund[data-v-37a4ac01]{\n\t/* 退款 */color:#666}.obligation[data-v-37a4ac01]{\n\t/* 待支付 */color:#d9011c}.stayGoods[data-v-37a4ac01]{\n\t/* 收货 */color:#02a7f0}.stayComment[data-v-37a4ac01]{\n\t/* 待评价 */color:#f09b22}.top[data-v-37a4ac01]{position:fixed;width:100%;box-sizing:border-box;top:0;left:0;z-index:99;height:%?105?%;padding:0 %?44?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;font-weight:700;color:#333;background:#fff;box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1)}.top .top_enlarge[data-v-37a4ac01]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;width:%?180?%}.top uni-image[data-v-37a4ac01]{height:%?40?%;width:%?40?%}.top uni-text[data-v-37a4ac01]:nth-of-type(2){width:%?180?%;display:inline-block}.mall_box .box_top[data-v-37a4ac01]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?20?%;margin:%?28?% 0 %?40?% 0}.mall_box .box_top .top_list[data-v-37a4ac01]{padding:0 %?20?%;height:%?44?%;line-height:%?44?%;border-radius:%?44?%}.show[data-v-37a4ac01]{color:#fff;background:#1d9dff}.mall_box .box_bottom[data-v-37a4ac01]{background:#fff;padding-top:%?20?%}.mall_box .box_bottom .bottom_list[data-v-37a4ac01]{padding:%?20?%;background:#fff;border-radius:%?20?%;margin:0 %?20?% %?32?% %?20?%;box-shadow:0 %?0?% %?20?% 0 rgba(0,0,0,.1)}.mall_box .box_bottom .bottom_list .list_top[data-v-37a4ac01]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.mall_box .box_bottom .bottom_list .list_top .top1[data-v-37a4ac01]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.mall_box .box_bottom .bottom_list .list_top .top1 uni-text[data-v-37a4ac01]{margin:0 %?20?%;font-weight:400;color:#999}.mall_box .box_bottom .bottom_list .list_top .top1 uni-image[data-v-37a4ac01]{height:%?30?%;width:%?30?%}.mall_box .box_bottom .bottom_list .list_top .top2[data-v-37a4ac01]{\n\t/* color: #999999; */font-size:%?28?%;color:#d9011c\n\t/* font-weight: bold; */}.mall_box .box_bottom .bottom_list .list_middle[data-v-37a4ac01]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?30?%}.mall_box .box_bottom .bottom_list .list_middle .middle1[data-v-37a4ac01]{font-size:%?24?%;color:#999}.mall_box .box_bottom .bottom_list .list_middle .middle1 uni-view[data-v-37a4ac01]:nth-of-type(1){font-size:%?28?%;font-weight:700;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.mall_box .box_bottom .bottom_list .list_middle .middle2[data-v-37a4ac01]{font-size:%?26?%;color:#999;-webkit-box-flex:2;-webkit-flex-grow:2;flex-grow:2;text-align:right}.mall_box .box_bottom .bottom_list .list_middle uni-image[data-v-37a4ac01]{height:%?122?%;width:%?122?%;margin-right:%?20?%}.mall_box .box_bottom .bottom_list .list_bottom[data-v-37a4ac01]{text-align:right;font-size:%?24?%;color:#999}.mall_box .box_bottom .bottom_list .list_bottom .bottom2[data-v-37a4ac01]{text-align:right;margin:%?10?% 0}.mall_box .box_bottom .bottom_list .list_bottom .bottom2 uni-text[data-v-37a4ac01]{font-weight:700;margin-left:%?10?%}\n\n/* \t.mall_box .box_bottom  .bottom_list .list_bottom .bottom3{\n\tdisplay: inline-block;\n\twidth: 154rpx;\n\theight: 52rpx;\n\tline-height: 52rpx;\n\tborder-radius: 52rpx;\n\tbackground: #1D9DFF;\n\tcolor: #fff;\n\ttext-align: center;\n\tmargin-left: 20rpx;\n} */.bottom3[data-v-37a4ac01]{display:inline-block;width:%?154?%;height:%?52?%;line-height:%?52?%;border-radius:%?52?%;background:#1d9dff;color:#fff;text-align:center;margin-left:%?20?%}.bottom4[data-v-37a4ac01]{display:inline-block;width:%?184?%;height:%?52?%;line-height:%?52?%;border-radius:%?52?%;background:#1d9dff;color:#fff;text-align:center;margin-left:%?20?%}.bottom_one[data-v-37a4ac01]{\n\t/* display: flex;\n\tjustify-content: space-between; */}.pl_box[data-v-37a4ac01]{margin-bottom:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.pl[data-v-37a4ac01]{width:%?154?%;height:%?52?%;line-height:%?52?%;border-radius:%?52?%;background:#1d9dff;color:#fff;text-align:center\n\t/* float: right; */}",""]),t.exports=a},7822:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.top[data-v-d459b51e]{height:%?105?%;padding:0 %?44?%;width:100%;box-sizing:border-box;position:fixed;top:0;z-index:99;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;font-weight:700;color:#333;background:#fff;box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1)}.top .top_enlarge[data-v-d459b51e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;width:%?180?%}.top uni-text[data-v-d459b51e]:nth-of-type(2){width:%?180?%;display:inline-block}.top uni-image[data-v-d459b51e]{height:%?40?%;width:%?40?%}',""]),t.exports=a},"806f":function(t,a,e){"use strict";var i={"uni-load-more":e("ee48").default},o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"status_bar"}),e("v-uni-view",{staticClass:"top"},[e("v-uni-view",{staticClass:"top_enlarge",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.returns()}}},[e("v-uni-image",{attrs:{src:"/static/image/com_page/returns.png",mode:"widthFix"}})],1),e("v-uni-text",[t._v("退款")]),e("v-uni-text")],1),e("v-uni-view",{staticClass:"mall_box"},[e("v-uni-view",{staticClass:"box_bottom"},t._l(t.data,(function(a,i){return e("v-uni-view",{key:a.id,staticClass:"bottom_list"},[e("v-uni-view",{staticClass:"list_top"},[e("v-uni-view",{staticClass:"top1"},[e("v-uni-image",{attrs:{src:"/static/image/subuser/logo.png",mode:"widthFix"}}),e("v-uni-text",[t._v("五福家庭")])],1),e("v-uni-view",{staticClass:"top2"},[t._v(t._s(a.status_text))])],1),e("v-uni-view",[e("v-uni-view",{staticClass:"list_middle",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jump("threeuser/order_details?id="+a.id)}}},[e("v-uni-view",{},[e("v-uni-image",{attrs:{src:a.order_data.goods[0].thumb,mode:"aspectFill"}})],1),e("v-uni-view",{staticClass:"middle1"},[e("v-uni-view",{},[t._v(t._s(a.order_data.goods[0].title))])],1),e("v-uni-view",{staticClass:"middle2"},[t._v("x1")])],1)],1),e("v-uni-view",{staticClass:"list_bottom"},[e("v-uni-view",{staticClass:"bottom_one"},[e("v-uni-view",{staticClass:"bottom2"},[t._v("订单金额"),e("v-uni-text",[t._v("￥"+t._s(a.price))])],1),e("v-uni-view",[1==a.type&&1==a.status?e("v-uni-view",{staticClass:"bottom4",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jump("threeuser/return_goods?id="+a.order_id)}}},[t._v("填写退货信息")]):t._e(),e("v-uni-view",{staticClass:"bottom3",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jump("threeuser/ass_refund_details?id="+a.order_id)}}},[t._v("详情")])],1)],1)],1)],1)})),1)],1),e("uni-load-more",{attrs:{status:t.more}})],1)},n=[];e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return i}))},8213:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-load-more[data-v-551a7ae4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-load-more__text[data-v-551a7ae4]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-551a7ae4]{position:relative;height:24px;width:24px;margin-right:10px}.uni-load-more__img > .load[data-v-551a7ae4]{position:absolute}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-551a7ae4]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-551a7ae4 .96s ease infinite;animation:load-data-v-551a7ae4 .96s ease infinite}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-551a7ae4]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-551a7ae4]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-551a7ae4]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-551a7ae4]:nth-child(4){top:11px;left:0}.uni-load-more__img > .loader-android[data-v-551a7ae4]{position:absolute;left:0;top:0;right:0;bottom:0;box-sizing:border-box;border:solid 2px #777;border-radius:50%;border-bottom-color:transparent!important;-webkit-animation:loader-android-data-v-551a7ae4 1s 0s linear infinite;animation:loader-android-data-v-551a7ae4 1s 0s linear infinite}.load1[data-v-551a7ae4],\n.load2[data-v-551a7ae4],\n.load3[data-v-551a7ae4]{height:24px;width:24px}.load2[data-v-551a7ae4]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-551a7ae4]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 .uni-load-view_wrapper[data-v-551a7ae4]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 .uni-load-view_wrapper[data-v-551a7ae4]:nth-child(1){-webkit-animation-delay:.08s;animation-delay:.08s}.load3 .uni-load-view_wrapper[data-v-551a7ae4]:nth-child(1){-webkit-animation-delay:.16s;animation-delay:.16s}.load1 .uni-load-view_wrapper[data-v-551a7ae4]:nth-child(2){-webkit-animation-delay:.24s;animation-delay:.24s}.load2 .uni-load-view_wrapper[data-v-551a7ae4]:nth-child(2){-webkit-animation-delay:.32s;animation-delay:.32s}.load3 .uni-load-view_wrapper[data-v-551a7ae4]:nth-child(2){-webkit-animation-delay:.4s;animation-delay:.4s}.load1 .uni-load-view_wrapper[data-v-551a7ae4]:nth-child(3){-webkit-animation-delay:.48s;animation-delay:.48s}.load2 .uni-load-view_wrapper[data-v-551a7ae4]:nth-child(3){-webkit-animation-delay:.56s;animation-delay:.56s}.load3 .uni-load-view_wrapper[data-v-551a7ae4]:nth-child(3){-webkit-animation-delay:.64s;animation-delay:.64s}.load1 .uni-load-view_wrapper[data-v-551a7ae4]:nth-child(4){-webkit-animation-delay:.72s;animation-delay:.72s}.load2 .uni-load-view_wrapper[data-v-551a7ae4]:nth-child(4){-webkit-animation-delay:.8s;animation-delay:.8s}.load3 .uni-load-view_wrapper[data-v-551a7ae4]:nth-child(4){-webkit-animation-delay:.88s;animation-delay:.88s}@-webkit-keyframes load-data-v-551a7ae4{0%{opacity:1}100%{opacity:.2}}@-webkit-keyframes loader-android-data-v-551a7ae4{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=a},b6802:function(t,a,e){"use strict";function i(t,a){(null==a||a>t.length)&&(a=t.length);for(var e=0,i=new Array(a);e<a;e++)i[e]=t[e];return i}e.d(a,"a",(function(){return i}))},bb9a:function(t,a,e){"use strict";var i,o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"top"},[e("v-uni-view",{staticClass:"top_enlarge",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.returns()}}},[e("v-uni-image",{attrs:{src:"/static/image/com_page/returns.png",mode:"widthFix"}})],1),e("v-uni-text",[t._v(t._s(t.titles))]),e("v-uni-text")],1)},n=[];e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return i}))},d0ff:function(t,a,e){"use strict";e.r(a);var i=e("b6802");function o(t){if(Array.isArray(t))return Object(i["a"])(t)}e("a4d3"),e("e01a"),e("d28b"),e("a630"),e("e260"),e("d3b7"),e("3ca3"),e("ddb0");function n(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var r=e("dde1");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return o(t)||n(t)||Object(r["a"])(t)||s()}e.d(a,"default",(function(){return l}))},db07:function(t,a,e){"use strict";e.r(a);var i=e("19c1"),o=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=o.a},dde1:function(t,a,e){"use strict";e.d(a,"a",(function(){return o}));e("a630"),e("fb6a"),e("d3b7"),e("25f0"),e("3ca3");var i=e("b6802");function o(t,a){if(t){if("string"===typeof t)return Object(i["a"])(t,a);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(i["a"])(t,a):void 0}}},e34a:function(t,a,e){"use strict";var i=e("ee27");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=i(e("d0ff")),n=i(e("20fe")),r=i(e("ee48")),s={components:{returns:n.default,uniLoadMore:r.default},data:function(){return{show:0,data:[],status:"",more:"more",page:1,loadRecord:!0}},methods:{returns:function(){uni.switchTab({url:"/pages/index/user"})},jump:function(t){uni.navigateTo({url:t})},loadMore:function(){var t=this.page;this.more="loading",this.service.entire(this,"get",this.APIconfig.api_root.subuser.g_AftersaleLists,{user_id:this.$store.state.user.id,is_more:1,status:this.show,page:t},(function(a,e){var i=a.data;if(i.push.apply(i,(0,o.default)(e.data.data)),a.data=i,a.page=t+1,a.more="more",e.data.data.length<10)return a.more="noMore",void(a.loadRecord=!1)}))}},onLoad:function(t){this.status=t.status,this.show=t.status},onReachBottom:function(){0!=this.loadRecord&&this.loadMore()},onShow:function(){this.data.length=0,this.page=1,this.loadMore()}};a.default=s},e610:function(t,a,e){"use strict";e.r(a);var i=e("e34a"),o=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=o.a},ee48:function(t,a,e){"use strict";e.r(a);var i=e("2082"),o=e("3344");for(var n in o)"default"!==n&&function(t){e.d(a,t,(function(){return o[t]}))}(n);e("5add");var r,s=e("f0c5"),l=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"551a7ae4",null,!1,i["a"],r);a["default"]=l.exports},f17b:function(t,a,e){"use strict";e.r(a);var i=e("806f"),o=e("e610");for(var n in o)"default"!==n&&function(t){e.d(a,t,(function(){return o[t]}))}(n);e("245e");var r,s=e("f0c5"),l=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"37a4ac01",null,!1,i["a"],r);a["default"]=l.exports}}]);