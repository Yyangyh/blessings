(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-subindex-result"],{"0cba":function(t,e,i){"use strict";var n=i("9ed1"),a=i.n(n);a.a},"227a":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"status_bar"}),i("returns",{attrs:{titles:t.title}}),i("v-uni-view",{staticClass:"worp"},[i("v-uni-view",{staticClass:"worp_box"},[i("v-uni-view",{staticClass:"title"},[t._v("测评结果")]),i("v-uni-view",{staticClass:"texts"},[t._v(t._s(t.result_data))])],1),i("v-uni-view",{staticClass:"word_img"},[i("v-uni-image",{attrs:{src:"/static/image/evaluating/resultback.png",mode:"widthFix"}})],1)],1),i("v-uni-view",{staticClass:"recommend"},[t._v("相关视频推荐")]),i("v-uni-view",{staticClass:"vider_content_two"},[i("v-uni-view",{staticClass:"vider_content"},t._l(t.recommend,function(e,n){return i("v-uni-view",{key:e.id,staticClass:"content_list",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$jump("../com_page/video_details?id="+e.id)}}},[i("v-uni-view",{staticClass:"list_img_box"},[i("v-uni-image",{attrs:{src:e.v_pic,mode:"scaleToFill"}})],1),i("v-uni-view",{staticClass:"list_right"},[i("v-uni-view",{staticClass:"list_one"},[t._v(t._s(e.long_title))]),i("v-uni-view",{staticClass:"list_two"},[t._v(t._s(e.view)+"次观看")]),i("v-uni-view",{staticClass:"list_three"},[i("v-uni-view",{},[t._v(t._s(0==e.is_free?"￥"+e.v_price:"免费"))]),1==e.is_free_vip?i("v-uni-view",{},[t._v("VIP免费")]):t._e()],1)],1)],1)}),1)],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"2f50":function(t,e,i){"use strict";var n=i("4cee"),a=i.n(n);a.a},"32c0":function(t,e,i){"use strict";i.r(e);var n=i("545b"),a=i("f138");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("2f50");var o=i("2877"),r=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"6061b996",null);e["default"]=r.exports},"4cee":function(t,e,i){var n=i("5dd4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("5b492f87",n,!0,{sourceMap:!1,shadowMode:!1})},"545b":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"top_enlarge",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.returns()}}},[i("v-uni-image",{attrs:{src:"/static/image/com_page/returns.png",mode:"widthFix"}})],1),i("v-uni-text",[t._v(t._s(t.titles))]),i("v-uni-text")],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"5dd4":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".top[data-v-6061b996]{height:%?105?%;padding:0 %?44?%;width:100%;box-sizing:border-box;position:fixed;top:0;z-index:99;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;font-weight:700;color:#333;background:#fff;box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1)}.top_enlarge[data-v-6061b996]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;width:%?90?%}.top uni-image[data-v-6061b996]{height:%?40?%;width:%?40?%}.top uni-text[data-v-6061b996]:nth-of-type(2){width:%?90?%;display:inline-block}",""])},"9ec4":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("32c0")),s={components:{returns:a.default},data:function(){return{title:"我的测评",result_data:"",recommend:""}},onLoad:function(t){t.data?this.service.entire(this,"post",this.APIconfig.api_root.subindex.s_test_Result,{paper_id:t.id,user_id:this.$store.state.user.id,data:JSON.parse(t.data)},function(t,e){console.log(e),console.log(e.code),t.result_data=e.data.result_des,t.recommend=e.data.recommend}):this.service.entire(this,"post",this.APIconfig.api_root.subindex.s_lookSignExam,{id:t.id},function(t,e){console.log(e),console.log(e.code),t.result_data=e.data.res_des,t.recommend=e.data.recommend})}};e.default=s},"9ed1":function(t,e,i){var n=i("f867");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("52e4ce04",n,!0,{sourceMap:!1,shadowMode:!1})},a3e4:function(t,e,i){"use strict";i.r(e);var n=i("9ec4"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},d01a:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:["titles"],data:function(){return{}},methods:{returns:function(){history.back()}}};e.default=n},f138:function(t,e,i){"use strict";i.r(e);var n=i("d01a"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},f867:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.worp[data-v-45c5d58c]{width:100%;height:%?813?%;position:relative}.worp .worp_box[data-v-45c5d58c]{position:absolute;top:0;left:0;width:100%;z-index:99}.worp .worp_box .title[data-v-45c5d58c]{font-size:%?32?%;color:#fff;text-align:center;padding-top:%?82?%}.worp .worp_box .texts[data-v-45c5d58c]{font-size:%?26?%;text-indent:2em;margin:%?50?% %?107?% 0}.worp .word_img[data-v-45c5d58c]{position:absolute;top:0;left:0;width:100%;z-index:98}.worp .word_img uni-image[data-v-45c5d58c]{width:100%;height:%?800?%}.recommend[data-v-45c5d58c]{font-size:%?28?%;margin:%?20?% %?20?%}.vider_content_two .vider_content[data-v-45c5d58c]{padding:0 %?20?%;font-size:%?24?%}.vider_content_two .vider_content uni-image[data-v-45c5d58c]{width:%?268?%;height:%?179?%;margin-right:%?29?%}.vider_content_two .vider_content .content_list[data-v-45c5d58c]{display:-webkit-box;display:-webkit-flex;display:flex;padding-bottom:%?20?%}.vider_content_two .vider_content .content_list .list_right[data-v-45c5d58c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-bottom:%?30?%}.vider_content_two .vider_content .content_list .list_right .list_three[data-v-45c5d58c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;color:#d80000;font-size:%?28?%}.vider_content_two .vider_content .content_list .list_right .list_three uni-view[data-v-45c5d58c]:nth-of-type(2){background:#000;font-size:%?24?%;color:#fff;height:%?20?%;padding:%?10?%;line-height:%?20?%;border-radius:%?20?%}',""])},fa78:function(t,e,i){"use strict";i.r(e);var n=i("227a"),a=i("a3e4");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("0cba");var o=i("2877"),r=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"45c5d58c",null);e["default"]=r.exports}}]);