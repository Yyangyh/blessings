(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-subindex-texts"],{"0c51":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-load-more"},["circle"===t.iconType||"auto"===t.iconType&&"android"===t.platform?i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[i("v-uni-view",{staticClass:"loader-android",style:{borderColor:t.color}})],1):i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[i("v-uni-view",{staticClass:"load1 load"},[i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load2 load"},[i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load3 load"},[i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}}),i("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:t.color}})],1)],1),i("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},"0e18":function(t,e,i){"use strict";var a={"uni-load-more":i("ee48").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"status_bar"}),i("v-uni-view",{staticClass:"top"},[i("v-uni-image",{attrs:{src:"../../static/image/com_page/returns.png",mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.service.returns()}}}),i("v-uni-text",[t._v("文章")]),i("v-uni-image",{attrs:{src:"../../static/image/com_page/search.png",mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"tab_list"},[i("v-uni-view",{staticClass:"list_all",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!t.show}}},[i("v-uni-view",{},[t._v(t._s(t.v_test))]),i("v-uni-image",{staticClass:"all_img",class:!1===t.show?"tran_none":!0===t.show?"tran_show":"",attrs:{src:"../../static/image/index/down.png",mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"list_all",class:{red:1===t.keyword_show},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.condition.apply(void 0,arguments)}}},[t._v("阅读更多")])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.show,expression:"show == true"}],staticClass:"mask_black",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!1}}}),i("v-uni-view",{staticClass:"down_box",class:!1===t.show?"mask_none":!0===t.show?"mask_show":""},[i("v-uni-view",{staticClass:"list_box"},[i("v-uni-view",{staticClass:"down_list",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chiose()}}},[t._v("全部")])],1),t._l(t.top_class,function(e,a){return i("v-uni-view",{key:e.id,staticClass:"list_box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.chiose(e.id,e.name)}}},[i("v-uni-view",{staticClass:"down_list"},[t._v(t._s(e.name))])],1)})],2),t._l(t.dataList,function(e,a){return i("v-uni-view",{key:e.id,staticClass:"texts_boxList"},[i("v-uni-view",{staticClass:"t_box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$jump("./article?id="+e.id)}}},[i("v-uni-view",{},[i("v-uni-image",{attrs:{src:t.$api_img()+e.images,mode:"scaleToFill"}})],1),i("v-uni-view",{staticClass:"b_right"},[i("v-uni-view",[t._v(t._s(e.title))]),i("v-uni-view",[t._v(t._s(e.access_count)+"次阅读")])],1)],1)],1)}),i("uni-load-more",{attrs:{status:t.more}})],2)},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},"15ff":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=uni.getSystemInfoSync().platform,n={name:"UniLoadMore",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},iconType:{type:String,default:"auto"},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{platform:a}}};e.default=n},"21df":function(t,e,i){var a=i("a39e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("26ee2e46",a,!0,{sourceMap:!1,shadowMode:!1})},"2e74":function(t,e,i){var a=i("7418");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("11877670",a,!0,{sourceMap:!1,shadowMode:!1})},3344:function(t,e,i){"use strict";i.r(e);var a=i("15ff"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"5bb4":function(t,e,i){"use strict";i.r(e);var a=i("b62a"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"67b9":function(t,e,i){"use strict";var a=i("2e74"),n=i.n(a);n.a},7418:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-load-more[data-v-1b3d7e48]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-load-more__text[data-v-1b3d7e48]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-1b3d7e48]{position:relative;height:24px;width:24px;margin-right:10px}.uni-load-more__img > .load[data-v-1b3d7e48]{position:absolute}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-1b3d7e48]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-1b3d7e48 .96s ease infinite;animation:load-data-v-1b3d7e48 .96s ease infinite}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-1b3d7e48]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-1b3d7e48]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-1b3d7e48]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-1b3d7e48]:nth-child(4){top:11px;left:0}.uni-load-more__img > .loader-android[data-v-1b3d7e48]{position:absolute;left:0;top:0;right:0;bottom:0;box-sizing:border-box;border:solid 2px #777;border-radius:50%;border-bottom-color:transparent!important;-webkit-animation:loader-android-data-v-1b3d7e48 1s 0s linear infinite;animation:loader-android-data-v-1b3d7e48 1s 0s linear infinite}.load1[data-v-1b3d7e48],\n.load2[data-v-1b3d7e48],\n.load3[data-v-1b3d7e48]{height:24px;width:24px}.load2[data-v-1b3d7e48]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-1b3d7e48]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 .uni-load-view_wrapper[data-v-1b3d7e48]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 .uni-load-view_wrapper[data-v-1b3d7e48]:nth-child(1){-webkit-animation-delay:.08s;animation-delay:.08s}.load3 .uni-load-view_wrapper[data-v-1b3d7e48]:nth-child(1){-webkit-animation-delay:.16s;animation-delay:.16s}.load1 .uni-load-view_wrapper[data-v-1b3d7e48]:nth-child(2){-webkit-animation-delay:.24s;animation-delay:.24s}.load2 .uni-load-view_wrapper[data-v-1b3d7e48]:nth-child(2){-webkit-animation-delay:.32s;animation-delay:.32s}.load3 .uni-load-view_wrapper[data-v-1b3d7e48]:nth-child(2){-webkit-animation-delay:.4s;animation-delay:.4s}.load1 .uni-load-view_wrapper[data-v-1b3d7e48]:nth-child(3){-webkit-animation-delay:.48s;animation-delay:.48s}.load2 .uni-load-view_wrapper[data-v-1b3d7e48]:nth-child(3){-webkit-animation-delay:.56s;animation-delay:.56s}.load3 .uni-load-view_wrapper[data-v-1b3d7e48]:nth-child(3){-webkit-animation-delay:.64s;animation-delay:.64s}.load1 .uni-load-view_wrapper[data-v-1b3d7e48]:nth-child(4){-webkit-animation-delay:.72s;animation-delay:.72s}.load2 .uni-load-view_wrapper[data-v-1b3d7e48]:nth-child(4){-webkit-animation-delay:.8s;animation-delay:.8s}.load3 .uni-load-view_wrapper[data-v-1b3d7e48]:nth-child(4){-webkit-animation-delay:.88s;animation-delay:.88s}@-webkit-keyframes load-data-v-1b3d7e48{0%{opacity:1}100%{opacity:.2}}@-webkit-keyframes loader-android-data-v-1b3d7e48{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""])},"75fc":function(t,e,i){"use strict";i.r(e);var a=i("a745"),n=i.n(a);function o(t){if(n()(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}var s=i("774e"),r=i.n(s),d=i("c8bb"),l=i.n(d);function c(t){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r()(t)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function w(t){return o(t)||c(t)||u()}i.d(e,"default",function(){return w})},a08d:function(t,e,i){"use strict";i.r(e);var a=i("0e18"),n=i("5bb4");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("f6c5");var s,r=i("f0c5"),d=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"42e52d36",null,!1,a["a"],s);e["default"]=d.exports},a39e:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-42e52d36]{position:relative;padding-top:%?205?%}.content .top[data-v-42e52d36]{position:fixed;width:100%;z-index:1000;box-sizing:border-box;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;height:%?105?%;padding:0 %?30?%;font-size:%?32?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff}.content .top uni-image[data-v-42e52d36]:first-child{width:%?31?%;height:%?31?%}.content .top uni-image[data-v-42e52d36]:last-child{width:%?50?%;height:%?50?%}.content .tab_list[data-v-42e52d36]{position:fixed;z-index:999;top:calc(0px + %?105?%);left:0;width:100%;box-sizing:border-box;background:#f6f6f7;color:#666;font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.content .tab_list uni-view[data-v-42e52d36]{height:%?100?%;line-height:%?100?%}.content .tab_list .list_all[data-v-42e52d36]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:50%}.content .tab_list .list_all uni-view[data-v-42e52d36]{color:#d80000}.content .tab_list .red[data-v-42e52d36]{color:#d80000}.content .tab_list .all_img[data-v-42e52d36]{-webkit-transition:.3s;transition:.3s;width:%?20?%;height:%?20?%;margin-left:%?20?%}.content .tran_none[data-v-42e52d36]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.content .tran_show[data-v-42e52d36]{-webkit-transform:rotate(0deg);transform:rotate(0deg)}.content .tab_list uni-image[data-v-42e52d36]{height:%?11?%;width:%?19?%;margin-left:%?14?%}.content .down_box[data-v-42e52d36]{position:fixed;top:calc(0px + %?205?%);left:0;width:100%;z-index:998;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-transition:.3s;transition:.3s;-webkit-transform:translateY(-100%);transform:translateY(-100%);background:#fff;font-size:%?28?%;padding:%?40?% %?20?%}.content .down_box .list_box[data-v-42e52d36]{width:33.3%}.content .down_box .list_box .down_list[data-v-42e52d36]{width:%?180?%;height:%?60?%;line-height:%?60?%;border-radius:%?60?%;background:#f1f1f1;text-align:center;margin:%?15?% auto}.content .down_box .list_box[data-v-42e52d36]:after{content:"";width:33.3%}.content .down_box .list_box:nth-of-type(1) .down_list[data-v-42e52d36]{color:#d80000}.content .mask_none[data-v-42e52d36]{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.content .mask_show[data-v-42e52d36]{-webkit-transform:translateY(0);transform:translateY(0)}.texts_boxList .t_box[data-v-42e52d36]{padding:%?20?% %?25?% %?20?% %?25?%;display:-webkit-box;display:-webkit-flex;display:flex}.texts_boxList .t_box uni-image[data-v-42e52d36]{width:%?268?%;height:%?179?%;margin-right:%?30?%}.texts_boxList .t_box .b_right[data-v-42e52d36]{-webkit-box-flex:2;-webkit-flex-grow:2;flex-grow:2}.texts_boxList .t_box .b_right uni-view[data-v-42e52d36]:first-child{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;font-size:%?28?%;margin:%?20?% 0}.texts_boxList .t_box .b_right uni-view[data-v-42e52d36]:last-child{font-size:%?28?%;color:#999}',""])},b62a:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("75fc")),o=a(i("ee48")),s={components:{uniLoadMore:o.default},data:function(){return{title:"文章",cur:"",show:!1,top_class:"",dataList:[],more:"more",page:1,loadRecord:!0,v_test:"全部",keyword_show:"",req_data:{num:10,page:1}}},methods:{Index:function(){this.more="loading",this.uni_request(this.req_data)},chiose:function(t,e){this.more="loading",this.req_data.page=1,this.loadRecord=!0,t?(this.req_data.cate_id=t,this.v_test=e):(delete this.req_data.cate_id,this.v_test="全部"),this.dataList.length=0,this.uni_request(this.req_data),this.show=!1},condition:function(){this.more="loading",this.req_data.page=1,this.loadRecord=!0,this.dataList.length=0,1===this.keyword_show?(this.keyword_show="",delete this.req_data.is_access):(this.keyword_show=1,this.req_data.is_access=!0),this.uni_request(this.req_data)},uni_request:function(t){this.service.entire(this,"get",this.APIconfig.api_root.subindex.s_getArticleList,t,function(t,e){var i=t.dataList;if(console.log(e),t.dataList=e.data,i.push.apply(i,(0,n.default)(e.data)),t.dataList=i,console.log(t.dataList),t.req_data.page+=1,t.more="more",e.data.length<10)return t.more="noMore",void(t.loadRecord=!1)})}},onLoad:function(t){t.v_pid&&(this.req_data.cate_id=t.v_pid,this.v_test=t.v_test),this.Index()},onShow:function(){this.service.entire(this,"post",this.APIconfig.api_root.subindex.s_getNormalCategory,{user_id:this.$store.state.user.id},function(t,e){console.log(e),t.top_class=e.data})},onReachBottom:function(){0!=this.loadRecord&&this.Index()}};e.default=s},ee48:function(t,e,i){"use strict";i.r(e);var a=i("0c51"),n=i("3344");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("67b9");var s,r=i("f0c5"),d=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"1b3d7e48",null,!1,a["a"],s);e["default"]=d.exports},f6c5:function(t,e,i){"use strict";var a=i("21df"),n=i.n(a);n.a}}]);