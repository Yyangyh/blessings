(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-com_page-index_class"],{"0292":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=uni.getSystemInfoSync().platform,n={name:"UniLoadMore",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},iconType:{type:String,default:"auto"},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{platform:a}}};e.default=n},"0be9":function(t,e,i){var a=i("e56b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("d0cd3c72",a,!0,{sourceMap:!1,shadowMode:!1})},2465:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"status_bar"}),i("v-uni-view",{staticClass:"content_top"},[i("v-uni-view",{staticClass:"top_returns",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.service.returns()}}},[i("v-uni-image",{attrs:{src:"../../static/image/com_page/returns.png",mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"top_search"},[i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入关键词搜索"}})],1),i("v-uni-view",{staticClass:"top_img",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jump("../com_page/notice")}}},[i("v-uni-image",{attrs:{src:"/static/image/index/news.png",mode:"widthFix"}}),t.$store.state.notice?i("v-uni-view"):t._e()],1)],1),i("v-uni-view",{staticClass:"tab_list"},[i("v-uni-view",{staticClass:"list_all",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!t.show}}},[i("v-uni-view",{},[t._v(t._s(t.v_test))]),i("v-uni-image",{staticClass:"all_img",class:!1===t.show?"tran_none":!0===t.show?"tran_show":"",attrs:{src:"/static/image/index/down.png",mode:"widthFix"}})],1),i("v-uni-view",{class:{red:1===t.keyword_show},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.condition(1)}}},[t._v(t._s(1==t.type?"免费视频":"免费音频"))]),i("v-uni-view",{class:{red:2===t.keyword_show},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.condition(2)}}},[t._v(t._s(1==t.type?"观看多":"收听多"))])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.show,expression:"show == true"}],staticClass:"mask_black",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!1}}}),i("v-uni-view",{staticClass:"down_box",class:!1===t.show?"mask_none":!0===t.show?"mask_show":""},[i("v-uni-view",{staticClass:"down_list",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chiose()}}},[t._v("全部")]),t._l(t.top_class,function(e,a){return i("v-uni-view",{key:e.id,staticClass:"down_list",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.chiose(e.id,e.cl_name)}}},[t._v(t._s(e.cl_name))])})],2),i("v-uni-view",{staticClass:"vider_content_two"},[i("v-uni-view",{staticClass:"vider_content"},t._l(t.video_list,function(e,a){return i("v-uni-view",{key:e.id,staticClass:"content_list",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$jump("../com_page/video_details?id="+e.id)}}},[i("v-uni-view",{staticClass:"list_img_box"},[i("v-uni-image",{attrs:{src:e.v_pic,mode:"scaleToFill"}})],1),i("v-uni-view",{staticClass:"list_right"},[i("v-uni-view",{staticClass:"list_one"},[t._v(t._s(e.long_title))]),i("v-uni-view",{staticClass:"list_two"},[t._v(t._s(e.view)+"次观看")]),i("v-uni-view",{staticClass:"list_three"},[i("v-uni-view",{},[t._v(t._s(0==e.is_free?"￥"+e.v_price:"免费"))]),1==e.is_free_vip?i("v-uni-view",{},[t._v("VIP免费")]):t._e()],1)],1)],1)}),1)],1),i("uni-load-more",{attrs:{status:t.more}})],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"71bb":function(t,e,i){var a=i("a55b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("79b88dfc",a,!0,{sourceMap:!1,shadowMode:!1})},"75fc":function(t,e,i){"use strict";i.r(e);var a=i("a745"),n=i.n(a);function o(t){if(n()(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}var s=i("774e"),r=i.n(s),d=i("c8bb"),l=i.n(d);function c(t){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r()(t)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function v(t){return o(t)||c(t)||u()}i.d(e,"default",function(){return v})},"998d":function(t,e,i){"use strict";var a=i("0be9"),n=i.n(a);n.a},a55b:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-load-more[data-v-98dabede]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-load-more__text[data-v-98dabede]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-98dabede]{position:relative;height:24px;width:24px;margin-right:10px}.uni-load-more__img>.load[data-v-98dabede]{position:absolute}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-98dabede]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-98dabede .96s ease infinite;animation:load-data-v-98dabede .96s ease infinite}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-98dabede]:first-child{-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-98dabede]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-98dabede]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img>.load .uni-load-view_wrapper[data-v-98dabede]:nth-child(4){top:11px;left:0}.uni-load-more__img>.loader-android[data-v-98dabede]{position:absolute;left:0;top:0;right:0;bottom:0;box-sizing:border-box;border:solid 2px #777;border-radius:50%;border-bottom-color:transparent!important;-webkit-animation:loader-android-data-v-98dabede 1s 0s linear infinite;animation:loader-android-data-v-98dabede 1s 0s linear infinite}.load1[data-v-98dabede],.load2[data-v-98dabede],.load3[data-v-98dabede]{height:24px;width:24px}.load2[data-v-98dabede]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-98dabede]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 .uni-load-view_wrapper[data-v-98dabede]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.load2 .uni-load-view_wrapper[data-v-98dabede]:first-child{-webkit-animation-delay:.08s;animation-delay:.08s}.load3 .uni-load-view_wrapper[data-v-98dabede]:first-child{-webkit-animation-delay:.16s;animation-delay:.16s}.load1 .uni-load-view_wrapper[data-v-98dabede]:nth-child(2){-webkit-animation-delay:.24s;animation-delay:.24s}.load2 .uni-load-view_wrapper[data-v-98dabede]:nth-child(2){-webkit-animation-delay:.32s;animation-delay:.32s}.load3 .uni-load-view_wrapper[data-v-98dabede]:nth-child(2){-webkit-animation-delay:.4s;animation-delay:.4s}.load1 .uni-load-view_wrapper[data-v-98dabede]:nth-child(3){-webkit-animation-delay:.48s;animation-delay:.48s}.load2 .uni-load-view_wrapper[data-v-98dabede]:nth-child(3){-webkit-animation-delay:.56s;animation-delay:.56s}.load3 .uni-load-view_wrapper[data-v-98dabede]:nth-child(3){-webkit-animation-delay:.64s;animation-delay:.64s}.load1 .uni-load-view_wrapper[data-v-98dabede]:nth-child(4){-webkit-animation-delay:.72s;animation-delay:.72s}.load2 .uni-load-view_wrapper[data-v-98dabede]:nth-child(4){-webkit-animation-delay:.8s;animation-delay:.8s}.load3 .uni-load-view_wrapper[data-v-98dabede]:nth-child(4){-webkit-animation-delay:.88s;animation-delay:.88s}@-webkit-keyframes load-data-v-98dabede{0%{opacity:1}to{opacity:.2}}@-webkit-keyframes loader-android-data-v-98dabede{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""])},ac09:function(t,e,i){"use strict";i.r(e);var a=i("0292"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},afb4:function(t,e,i){"use strict";i.r(e);var a=i("2465"),n=i("c49b");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("998d");var s=i("2877"),r=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"9359ea16",null);e["default"]=r.exports},be7d:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("75fc")),o=a(i("e01e")),s={components:{uniLoadMore:o.default},data:function(){return{data:"",show:0,top_class:"",video_list:[],type:"",more:"more",page:1,loadRecord:!0,v_pid:"",v_test:"全部",keyword_show:""}},methods:{Index:function(){this.more="loading";var t={type:this.type,limit:10,page:this.page};this.v_pid&&(t.v_pid=this.v_pid),this.is_free&&(t.is_free=this.is_free),this.view&&(t.view=this.view),this.uni_request(t)},chiose:function(t,e){this.more="loading",this.page=1,this.loadRecord=!0;var i={type:this.type,limit:10,page:this.page};t?(i.v_pid=t,this.v_pid=t,this.v_test=e):(this.v_pid="",this.v_test="全部"),this.video_list.length=0,this.is_free&&(i.is_free=this.is_free),this.view&&(i.view=this.view),this.uni_request(i),this.show=!1},condition:function(t){this.more="loading",this.page=1,this.loadRecord=!0,this.video_list.length=0;var e={type:this.type,limit:10,page:this.page};this.keyword_show=t,this.v_pid&&(e.v_pid=this.v_pid),1==t&&(e.is_free=1,this.is_free=1,this.view=""),2==t&&(e.view=1,this.view=1,this.is_free=""),this.uni_request(e)},uni_request:function(t){this.service.entire(this,"get",this.APIconfig.api_root.com_page.videoList,t,function(t,e){t.top_class=e.data.top_list;var i=t.video_list;if(i.push.apply(i,(0,n.default)(e.data.video_list)),t.video_list=i,console.log(t.video_list),t.page+=1,t.more="more",e.data.video_list.length<10)return t.more="noMore",void(t.loadRecord=!1)})}},onLoad:function(t){this.type=t.type,this.Index()},onShow:function(){this.service.notice(this)},onReachBottom:function(){0!=this.loadRecord&&this.Index()}};e.default=s},c49b:function(t,e,i){"use strict";i.r(e);var a=i("be7d"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},e01e:function(t,e,i){"use strict";i.r(e);var a=i("ec61"),n=i("ac09");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("f8d1");var s=i("2877"),r=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"98dabede",null);e["default"]=r.exports},e56b:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-9359ea16]{padding-top:calc(%?205?% + 0px)}.content_top[data-v-9359ea16]{position:fixed;z-index:999;top:0;left:0;width:100%;background:#fff;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?105?%;padding:0 %?20?%}.content_top .top_returns uni-image[data-v-9359ea16]{height:%?31?%;width:%?31?%;padding-right:%?10?%}.content_top .top_search[data-v-9359ea16]{-webkit-box-flex:2;-webkit-flex-grow:2;flex-grow:2;height:%?65?%;border-radius:%?65?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-left:%?40?%;background:#eee}.content_top uni-view uni-input[data-v-9359ea16]{font-size:%?24?%}.content_top .top_img[data-v-9359ea16]{position:relative}.content_top .top_img uni-view[data-v-9359ea16]{position:absolute;right:0;top:0;height:%?10?%;width:%?10?%;border-radius:50%;background:#d80000}.content_top uni-image[data-v-9359ea16]{height:%?50?%;width:%?50?%;margin-left:%?10?%}.tab_list[data-v-9359ea16]{position:fixed;z-index:999;top:calc(0px + %?105?%);left:0;width:100%;box-sizing:border-box;background:#f6f6f7;color:#666;font-size:%?28?%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?50?%}.tab_list uni-view[data-v-9359ea16]{height:%?100?%;line-height:%?100?%}.tab_list .list_all[data-v-9359ea16]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#d80000}.tab_list .red[data-v-9359ea16]{color:#d80000}.all_img[data-v-9359ea16]{-webkit-transition:.3s;transition:.3s}.tran_none[data-v-9359ea16]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.tran_show[data-v-9359ea16]{-webkit-transform:rotate(0deg);transform:rotate(0deg)}.tab_list uni-image[data-v-9359ea16]{height:%?11?%;width:%?19?%;margin-left:%?14?%}.down_box[data-v-9359ea16]{position:fixed;top:calc(0px + %?205?%);left:0;width:100%;z-index:998;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-transition:.3s;transition:.3s;-webkit-transform:translateY(-100%);transform:translateY(-100%);background:#fff;font-size:%?28?%;padding:%?40?% %?20?%}.down_box .down_list[data-v-9359ea16]{width:%?180?%;height:%?60?%;line-height:%?60?%;border-radius:%?60?%;background:#f1f1f1;text-align:center;margin-bottom:%?30?%}.down_box[data-v-9359ea16]:after{content:"";width:%?180?%}.down_box .down_list[data-v-9359ea16]:first-of-type{color:#d80000}.mask_none[data-v-9359ea16]{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.mask_show[data-v-9359ea16]{-webkit-transform:translateY(0);transform:translateY(0)}.vider_content_two[data-v-9359ea16]{border-bottom:%?6?% solid #f1f1f1}.vider_content_two .vider_content[data-v-9359ea16]{padding:0 %?20?%;font-size:%?24?%}.vider_content_two .vider_content uni-image[data-v-9359ea16]{width:%?268?%;height:%?179?%;margin-right:%?29?%}.vider_content_two .vider_content .content_list[data-v-9359ea16]{display:-webkit-box;display:-webkit-flex;display:flex;margin:%?30?% 0}.vider_content_two .vider_content .content_list .list_right[data-v-9359ea16]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-bottom:%?30?%}.vider_content_two .vider_content .content_list .list_right .list_three[data-v-9359ea16]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;color:#d80000;font-size:%?28?%}.vider_content_two .vider_content .content_list .list_right .list_three uni-view[data-v-9359ea16]:nth-of-type(2){background:#000;font-size:%?24?%;color:#fff;height:%?20?%;padding:%?10?%;line-height:%?20?%;border-radius:%?20?%}',""])},ec61:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-load-more"},["circle"===t.iconType||"auto"===t.iconType&&"android"===t.platform?i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[i("v-uni-view",{staticClass:"loader-android",style:{borderColor:t.color}})],1):i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[i("v-uni-view",{staticClass:"load1 load"},[i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load2 load"},[i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load3 load"},[i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1)],1),i("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},f8d1:function(t,e,i){"use strict";var a=i("71bb"),n=i.n(a);n.a}}]);