(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-subhome-assemble"],{"05cf":function(t,i,e){"use strict";e.r(i);var n=e("c934"),a=e("7f25");for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);e("fec3");var s,r=e("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"1b483908",null,!1,n["a"],s);i["default"]=c.exports},4907:function(t,i,e){var n=e("ddad");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("60e2da61",n,!0,{sourceMap:!1,shadowMode:!1})},"7f25":function(t,i,e){"use strict";e.r(i);var n=e("cf64"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);i["default"]=a.a},c934:function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"status_bar"}),e("v-uni-view",{staticClass:"top"},[e("v-uni-image",{attrs:{src:"/static/image/com_page/returns.png",mode:"widthFix"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.returns()}}}),e("v-uni-text",[t._v("拼团")]),e("v-uni-text",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$jump("threehome/my_group")}}},[t._v("我的团")])],1),t._l(t.data,function(i,n){return e("v-uni-view",{key:i.id,staticClass:"tab"},[e("v-uni-view",{staticClass:"tab_top",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$jump("./threehome/group_products?id="+i.id)}}},[e("v-uni-image",{attrs:{src:i.thumb,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"tab_right"},[e("v-uni-view",{staticClass:"test_two"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"price"},[t._v("拼团价"),e("v-uni-text",{staticClass:"price_one"},[t._v("￥"+t._s(i.price))]),e("v-uni-text",{staticClass:"price_two"},[t._v("￥"+t._s(i.groupsprice))])],1)],1)],1),e("v-uni-view",{staticClass:"tab_bottom"},[e("v-uni-view",{staticClass:"bo_one"},[e("v-uni-image",{attrs:{src:"/static/image/subhome/team.png",mode:"widthFix"}}),e("v-uni-text",[t._v(t._s(i.groupnum)+"人成团")])],1),e("v-uni-view",{staticClass:"bo_two",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$jump("./threehome/group_products?id="+i.id)}}},[t._v("立即参团")])],1)],1)})],2)},o=[];e.d(i,"b",function(){return a}),e.d(i,"c",function(){return o}),e.d(i,"a",function(){return n})},cf64:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{data:""}},methods:{returns:function(){uni.switchTab({url:"/pages/index/home"})}},onShow:function(){this.service.entire(this,"get",this.APIconfig.api_root.subhome.g_lists,{page:1},function(t,i){t.data=i.data.data})}};i.default=n},ddad:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-1b483908]{height:100%;width:100%;background:#f4f4f4}.content[data-v-1b483908]{padding-top:%?105?%;height:100%;width:100%;background:#f4f4f4}.top[data-v-1b483908]{height:%?105?%;width:100%;position:fixed;top:0;left:0;background:#fff;z-index:888;padding:0 %?40?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;font-weight:700;color:#333;margin-bottom:%?24?%;background:#fff;box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1)}.top uni-image[data-v-1b483908]{height:%?40?%;width:%?40?%}.top uni-text[data-v-1b483908]:nth-of-type(2){color:#666;font-size:%?28?%;font-weight:400;display:inline-block}.tab[data-v-1b483908]{background:#fff;margin:%?20?% %?20?% %?16?% %?20?%;border-radius:%?10?%;height:%?300?%}.tab .tab_top[data-v-1b483908]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?% 0;margin:0 %?20?%;border-bottom:%?2?% solid #f1f1f1}.tab .tab_top .tab_right[data-v-1b483908]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-left:%?26?%}.tab .tab_top .tab_right .test_two[data-v-1b483908]{color:#333;font-size:%?30?%}.tab .tab_top .tab_right .price[data-v-1b483908]{color:#ff431d;font-size:%?28?%}.tab .tab_top .tab_right .price .price_one[data-v-1b483908]{font-size:%?36?%;\n          /* font-weight: bold; */margin-right:%?8?%}.tab .tab_top .tab_right .price .price_two[data-v-1b483908]{text-decoration:line-through;font-size:%?28?%;color:#999}.tab .tab_top uni-image[data-v-1b483908]{height:%?142?%;width:%?220?%}.tab .tab_bottom[data-v-1b483908]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?92?%;padding:0 %?20?%}.tab .tab_bottom .bo_one[data-v-1b483908]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;color:#666}.tab .tab_bottom .bo_two[data-v-1b483908]{color:#fff;background:#d80000;width:%?170?%;height:%?66?%;line-height:%?66?%;border-radius:%?66?%;font-size:%?28?%;text-align:center}.tab .tab_bottom uni-image[data-v-1b483908]{height:%?34?%;width:%?34?%;margin-right:%?20?%}body.?%PAGE?%[data-v-1b483908]{background:#f4f4f4}',""])},fec3:function(t,i,e){"use strict";var n=e("4907"),a=e.n(n);a.a}}]);