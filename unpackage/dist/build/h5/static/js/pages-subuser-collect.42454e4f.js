(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-subuser-collect"],{"035c":function(t,i,e){"use strict";var a,o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"uni-load-more"},["circle"===t.iconType||"auto"===t.iconType&&"android"===t.platform?e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[e("v-uni-view",{staticClass:"loader-android",style:{borderColor:t.color}})],1):e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[e("v-uni-view",{staticClass:"load1 load"},[e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1),e("v-uni-view",{staticClass:"load2 load"},[e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1),e("v-uni-view",{staticClass:"load3 load"},[e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),e("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1)],1),e("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},n=[];e.d(i,"b",function(){return o}),e.d(i,"c",function(){return n}),e.d(i,"a",function(){return a})},"377d":function(t,i,e){"use strict";var a=e("9266"),o=e.n(a);o.a},"469f":function(t,i,e){e("6c1c"),e("1654"),t.exports=e("7d7b")},"5d73":function(t,i,e){t.exports=e("469f")},"75fc":function(t,i,e){"use strict";e.r(i);var a=e("a745"),o=e.n(a);function n(t){if(o()(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}var r=e("774e"),s=e.n(r),l=e("c8bb"),d=e.n(l);function c(t){if(d()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function v(t){return n(t)||c(t)||u()}e.d(i,"default",function(){return v})},"7d7b":function(t,i,e){var a=e("e4ae"),o=e("7cd6");t.exports=e("584a").getIterator=function(t){var i=o(t);if("function"!=typeof i)throw TypeError(t+" is not iterable!");return a(i.call(t))}},"82f8":function(t,i,e){"use strict";e.r(i);var a=e("b295"),o=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,function(){return a[t]})}(n);i["default"]=o.a},"8bea":function(t,i,e){"use strict";e.r(i);var a=e("928a"),o=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,function(){return a[t]})}(n);i["default"]=o.a},"91e8":function(t,i,e){"use strict";e.r(i);var a=e("035c"),o=e("8bea");for(var n in o)"default"!==n&&function(t){e.d(i,t,function(){return o[t]})}(n);e("377d");var r,s=e("f0c5"),l=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"38334d23",null,!1,a["a"],r);i["default"]=l.exports},9266:function(t,i,e){var a=e("b204");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("26ebf76a",a,!0,{sourceMap:!1,shadowMode:!1})},"928a":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=uni.getSystemInfoSync().platform,o={name:"UniLoadMore",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},iconType:{type:String,default:"auto"},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{platform:a}}};i.default=o},9812:function(t,i,e){"use strict";var a={"uni-load-more":e("91e8").default},o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"status_bar"}),e("v-uni-view",{staticClass:"top"},[e("v-uni-image",{attrs:{src:"/static/image/com_page/returns.png",mode:"widthFix"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.service.returns()}}}),e("v-uni-text",[t._v("收藏")]),e("v-uni-text",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.show=!t.show}}},[t._v(t._s(t.show?"完成":"编辑"))])],1),e("v-uni-view",{staticClass:"allorder"},[e("v-uni-text",{staticClass:"one",class:{active:1==t.cur},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.choise(1)}}},[t._v("课程视频")]),e("v-uni-text",{staticClass:"two",class:{active:2==t.cur},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.choise(2)}}},[t._v("音频")]),e("v-uni-text",{staticClass:"three",class:{active:3==t.cur},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.choise(3)}}},[t._v("文章")]),e("v-uni-text",{staticClass:"four",class:{active:4==t.cur},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.choise(4)}}},[t._v("商品")])],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.cur||2==t.cur,expression:"cur == 1 || cur == 2"}],staticClass:"boxs"},t._l(t.dataList,function(i,a){return e("v-uni-view",{key:i.video_id,staticClass:"line"},[e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"tab_left",staticStyle:{transform:"scale(0.8)"}},[e("v-uni-label",{staticClass:"radio",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.singleElection(a)}}},[e("v-uni-radio",{attrs:{value:"r1",checked:i.choice}})],1)],1),e("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$jump("/pages/com_page/video_details?id="+i.video_id+"&type="+i.type)}}},[e("v-uni-image",{staticClass:"l_left",attrs:{src:t.$api_img()+i.v_pic,mode:"scaleToFill"}})],1),e("v-uni-view",{staticClass:"l_right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$jump("/pages/com_page/video_details?id="+i.video_id+"&type="+i.type)}}},[e("v-uni-view",[t._v(t._s(i.long_title))]),e("v-uni-view",{staticClass:"middle"},[t._v(t._s(i.view)+"次观看")]),e("v-uni-view",[t._v("￥99")])],1)],1)}),1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:3==t.cur,expression:"cur == 3"}],staticClass:"boxs"},t._l(t.dataList,function(i,a){return e("v-uni-view",{key:i.id,staticClass:"line"},[e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"tab_left",staticStyle:{transform:"scale(0.8)"}},[e("v-uni-label",{staticClass:"radio",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.singleElection(a)}}},[e("v-uni-radio",{attrs:{value:"r1",checked:i.choice}})],1)],1),e("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$jump("/pages/subindex/article?id="+i.id)}}},[e("v-uni-image",{staticClass:"l_left",attrs:{src:t.$api_img()+i.images,mode:"scaleToFill"}})],1),e("v-uni-view",{staticClass:"l_right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$jump("/pages/subindex/article?id="+i.id)}}},[e("v-uni-view",[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"article"},[t._v(t._s(i.access_count)+"次阅读")])],1)],1)}),1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:4==t.cur,expression:"cur==4"}],staticClass:"boxs"},[e("v-uni-view",{staticClass:"box_s"},t._l(t.dataList,function(i,a){return e("v-uni-view",{key:i.id,staticClass:"commodity"},[e("v-uni-image",{attrs:{src:t.$api_img()+i.images_old,mode:"scaleToFill"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$jump("/pages/subhome/details?id="+i.goods_id)}}}),e("v-uni-view",{staticClass:"texts"},[e("v-uni-view",{staticClass:"t_name"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"t_sell"},[t._v("已售"+t._s(i.sales_count)+"件")]),e("v-uni-view",{staticClass:"t_price"},[t._v("￥"+t._s(i.min_price))]),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"tab_left",staticStyle:{transform:"scale(0.8)"}},[e("v-uni-label",{staticClass:"radio",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.singleElection(a)}}},[e("v-uni-radio",{attrs:{value:"r1",checked:i.choice}})],1)],1)],1)],1)}),1)],1),e("v-uni-view",{staticClass:"tab_delete",class:t.show?"show":"Noshow"},[e("v-uni-view",{staticClass:"alls"},[e("v-uni-label",{staticClass:"radio",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.allElection()}}},[e("v-uni-radio",{attrs:{value:"r1",checked:t.checked}}),t._v("全选")],1)],1),e("v-uni-button",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.deletes()}}},[t._v("删除")])],1),e("uni-load-more",{attrs:{status:t.more}})],1)},n=[];e.d(i,"b",function(){return o}),e.d(i,"c",function(){return n}),e.d(i,"a",function(){return a})},9934:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-53460881]{background-color:#fff}.content[data-v-53460881]{padding-top:calc(%?225?% + 0px);padding-bottom:%?120?%}.top[data-v-53460881]{height:%?105?%;width:100%;position:fixed;top:0;left:0;background:#fff;z-index:888;padding:0 %?40?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;font-weight:700;color:#333;margin-bottom:%?24?%;background:#fff;box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1)}.top uni-image[data-v-53460881]{height:%?40?%;width:%?40?%}.top uni-text[data-v-53460881]:nth-of-type(2){color:#666;font-size:%?28?%;font-weight:400;display:inline-block}.allorder[data-v-53460881]{width:100%;height:%?120?%;position:fixed;top:calc(%?105?% + 0px);z-index:111;display:-webkit-box;display:-webkit-flex;display:flex;text-align:center;line-height:%?120?%;font-size:%?32?%;background-color:#f6f6f7}.allorder uni-text[data-v-53460881]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.active[data-v-53460881]{color:#d80000}.line[data-v-53460881]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?30?%;border-bottom:%?1?% solid #eee;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff}.line .l_left[data-v-53460881]{width:%?268?%;height:%?179?%;margin-right:%?30?%}.line .l_right[data-v-53460881]{height:%?179?%;-webkit-box-flex:2;-webkit-flex-grow:2;flex-grow:2;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column\n    /* justify-content: space-around; */}.line .l_right uni-view[data-v-53460881]:first-child{font-size:%?24?%}.line .l_right .article[data-v-53460881]{font-size:%?24?%!important;color:#999!important;margin-top:%?10?%}.line .l_right .middle[data-v-53460881]{font-size:%?24?%;color:#999;margin:%?10?% 0}.line .l_right uni-view[data-v-53460881]:last-child{font-size:%?28?%;color:#d80000;font-weight:500}.tab_delete[data-v-53460881]{position:fixed;bottom:0;left:0;width:100%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-top:%?2?% solid #f1f1f1;padding:0 %?40?%;height:%?120?%;color:#666;background:#fff;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:.3s;transition:.3s}.tab_delete .alls[data-v-53460881]{font-size:%?34?%}.tab_delete .alls .radio[data-v-53460881]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tab_delete uni-button[data-v-53460881]{background:#d80000;color:#fff;width:%?224?%;height:%?90?%;line-height:%?90?%;border-radius:%?90?%;margin-left:%?20?%;margin-right:%?0?%}.box_s[data-v-53460881]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.box_s .commodity[data-v-53460881]{width:50%;box-sizing:border-box;padding:%?20?%}.box_s .commodity uni-image[data-v-53460881]{width:%?341?%;height:%?341?%}.box_s .commodity .texts[data-v-53460881]{margin-top:%?25?%;position:relative}.box_s .commodity .texts .t_name[data-v-53460881]{font-size:%?24?%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.box_s .commodity .texts .t_sell[data-v-53460881]{font-size:%?24?%;color:#999;margin:%?15?% 0}.box_s .commodity .texts .t_price[data-v-53460881]{font-size:%?28?%;color:#d80000}.box_s .commodity .texts .tab_left[data-v-53460881]{position:absolute;right:0;bottom:0}.show[data-v-53460881]{-webkit-transform:translateY(0);transform:translateY(0)}.Noshow[data-v-53460881]{-webkit-transform:translateY(100%);transform:translateY(100%)}body.?%PAGE?%[data-v-53460881]{background-color:#fff}',""])},ac25:function(t,i,e){var a=e("9934");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("4d323cb7",a,!0,{sourceMap:!1,shadowMode:!1})},b204:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-load-more[data-v-38334d23]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-load-more__text[data-v-38334d23]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-38334d23]{position:relative;height:24px;width:24px;margin-right:10px}.uni-load-more__img > .load[data-v-38334d23]{position:absolute}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-38334d23]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-38334d23 .96s ease infinite;animation:load-data-v-38334d23 .96s ease infinite}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-38334d23]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-38334d23]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-38334d23]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-38334d23]:nth-child(4){top:11px;left:0}.uni-load-more__img > .loader-android[data-v-38334d23]{position:absolute;left:0;top:0;right:0;bottom:0;box-sizing:border-box;border:solid 2px #777;border-radius:50%;border-bottom-color:transparent!important;-webkit-animation:loader-android-data-v-38334d23 1s 0s linear infinite;animation:loader-android-data-v-38334d23 1s 0s linear infinite}.load1[data-v-38334d23],\n.load2[data-v-38334d23],\n.load3[data-v-38334d23]{height:24px;width:24px}.load2[data-v-38334d23]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-38334d23]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 .uni-load-view_wrapper[data-v-38334d23]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 .uni-load-view_wrapper[data-v-38334d23]:nth-child(1){-webkit-animation-delay:.08s;animation-delay:.08s}.load3 .uni-load-view_wrapper[data-v-38334d23]:nth-child(1){-webkit-animation-delay:.16s;animation-delay:.16s}.load1 .uni-load-view_wrapper[data-v-38334d23]:nth-child(2){-webkit-animation-delay:.24s;animation-delay:.24s}.load2 .uni-load-view_wrapper[data-v-38334d23]:nth-child(2){-webkit-animation-delay:.32s;animation-delay:.32s}.load3 .uni-load-view_wrapper[data-v-38334d23]:nth-child(2){-webkit-animation-delay:.4s;animation-delay:.4s}.load1 .uni-load-view_wrapper[data-v-38334d23]:nth-child(3){-webkit-animation-delay:.48s;animation-delay:.48s}.load2 .uni-load-view_wrapper[data-v-38334d23]:nth-child(3){-webkit-animation-delay:.56s;animation-delay:.56s}.load3 .uni-load-view_wrapper[data-v-38334d23]:nth-child(3){-webkit-animation-delay:.64s;animation-delay:.64s}.load1 .uni-load-view_wrapper[data-v-38334d23]:nth-child(4){-webkit-animation-delay:.72s;animation-delay:.72s}.load2 .uni-load-view_wrapper[data-v-38334d23]:nth-child(4){-webkit-animation-delay:.8s;animation-delay:.8s}.load3 .uni-load-view_wrapper[data-v-38334d23]:nth-child(4){-webkit-animation-delay:.88s;animation-delay:.88s}@-webkit-keyframes load-data-v-38334d23{0%{opacity:1}100%{opacity:.2}}@-webkit-keyframes loader-android-data-v-38334d23{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""])},b295:function(t,i,e){"use strict";var a=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=a(e("5d73")),n=a(e("75fc"));e("ac6a");var r=a(e("91e8")),s={components:{uniLoadMore:r.default},data:function(){return{cur:"",dataList:[],type:"",show:!1,checked:!1,more:"more",page:1,loadRecord:!0}},methods:{choise:function(t){console.log(t),this.cur=t,this.dataList.length=0;var i={user_id:this.$store.state.user.id,page:1};1!=t&&2!=t||(i.type=t),this.Index(i)},Index:function(t){this.more="loading",3==this.cur?this.service.entire(this,"post",this.APIconfig.api_root.subuser.a_getFavorite,t,function(t,i){console.log(i),i.data.forEach(function(t){return t.choice=!1});var e=t.dataList;if(e.push.apply(e,(0,n.default)(i.data)),t.dataList=e,console.log(t.dataList),t.page+=1,t.more="more",i.data.length<10)return t.more="noMore",void(t.loadRecord=!1)}):4==this.cur?this.service.entire(this,"post",this.APIconfig.api_root.subuser.usergoodsfavor,t,function(t,i){console.log(i),i.data.data.forEach(function(t){return t.choice=!1});var e=t.dataList;if(e.push.apply(e,(0,n.default)(i.data.data)),t.dataList=e,console.log(t.dataList),t.page+=1,t.more="more",i.data.data.length<10)return t.more="noMore",void(t.loadRecord=!1)}):this.service.entire(this,"post",this.APIconfig.api_root.subuser.u_favor,t,function(t,i){console.log(i),i.data.favor_list.forEach(function(t){return t.choice=!1});var e=t.dataList;if(e.push.apply(e,(0,n.default)(i.data.favor_list)),t.dataList=e,console.log(t.dataList),t.page+=1,t.more="more",i.data.favor_list.length<10)return t.more="noMore",void(t.loadRecord=!1)})},allElection:function(){if(this.checked=!this.checked,1==this.checked){var t=!0,i=!1,e=void 0;try{for(var a,n=(0,o.default)(this.dataList);!(t=(a=n.next()).done);t=!0){var r=a.value;r.choice=!0}}catch(f){i=!0,e=f}finally{try{t||null==n.return||n.return()}finally{if(i)throw e}}}else{var s=!0,l=!1,d=void 0;try{for(var c,u=(0,o.default)(this.dataList);!(s=(c=u.next()).done);s=!0){var v=c.value;v.choice=!1}}catch(f){l=!0,d=f}finally{try{s||null==u.return||u.return()}finally{if(l)throw d}}}},singleElection:function(t){if(this.dataList[t].choice=!this.dataList[t].choice,1==this.dataList[t].choice){var i=this.dataList.map(function(t){return t.choice});-1==i.indexOf(!1)&&(this.checked=!0)}if(0==this.dataList[t].choice){var e=!0,a=!1,n=void 0;try{for(var r,s=(0,o.default)(this.dataList);!(e=(r=s.next()).done);e=!0){var l=r.value;0==l.choice&&(this.checked=!1)}}catch(d){a=!0,n=d}finally{try{e||null==s.return||s.return()}finally{if(a)throw n}}}},deletes:function(){var t,i,e=[];if(3==this.cur){var a=!0,n=!1,r=void 0;try{for(var s,l=(0,o.default)(this.dataList);!(a=(s=l.next()).done);a=!0){var d=s.value;1==d.choice&&e.push(d.id)}}catch(y){n=!0,r=y}finally{try{a||null==l.return||l.return()}finally{if(n)throw r}}t=this.APIconfig.api_root.subuser.favoriteDel,i={user_id:this.$store.state.user.id,aids:e}}else if(4==this.cur){var c=!0,u=!1,v=void 0;try{for(var f,p=(0,o.default)(this.dataList);!(c=(f=p.next()).done);c=!0){var w=f.value;1==w.choice&&e.push(w.goods_id)}}catch(y){u=!0,v=y}finally{try{c||null==p.return||p.return()}finally{if(u)throw v}}t=this.APIconfig.api_root.subuser.cancelall,i={user_id:this.$store.state.user.id,goods_ids:e}}else{var h=!0,b=!1,m=void 0;try{for(var g,_=(0,o.default)(this.dataList);!(h=(g=_.next()).done);h=!0){var x=g.value;1==x.choice&&e.push(x.video_id)}}catch(y){b=!0,m=y}finally{try{h||null==_.return||_.return()}finally{if(b)throw m}}t=this.APIconfig.api_root.com_page.v_collect,i={userid:this.$store.state.user.id,video_id:e.join(","),c_type:0,mobile:this.$store.state.user.mobile}}this.service.entire(this,"post",t,i,function(t,i){if(console.log(i),uni.showToast({icon:"none",title:i.msg}),0==i.code){t.checked=!1;for(var e=t.dataList,a=e.length-1;a>=0;a--)1==e[a].choice&&e.splice(a,1)}})}},onReachBottom:function(){0!=this.loadRecord&&this.loadMore()},onLoad:function(){this.choise(1)}};i.default=s},c904:function(t,i,e){"use strict";var a=e("ac25"),o=e.n(a);o.a},d7a0:function(t,i,e){"use strict";e.r(i);var a=e("9812"),o=e("82f8");for(var n in o)"default"!==n&&function(t){e.d(i,t,function(){return o[t]})}(n);e("c904");var r,s=e("f0c5"),l=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"53460881",null,!1,a["a"],r);i["default"]=l.exports}}]);