(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-particulars"],{"2f3d":function(t,i,e){"use strict";e.r(i);var n=e("9fb1"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);i["default"]=a.a},"4da4":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"top"},[e("v-uni-view",{staticClass:"top_enlarge",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.returns()}}},[e("v-uni-image",{attrs:{src:"/static/image/com_page/returns.png",mode:"widthFix"}})],1),e("v-uni-text",[t._v(t._s(t.titles))]),e("v-uni-text")],1)},a=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return a})},5713:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={props:["titles"],data:function(){return{}},methods:{returns:function(){history.back()}}};i.default=n},"722d":function(t,i,e){"use strict";e.r(i);var n=e("e3dd"),a=e("2f3d");for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);e("a835");var o=e("2877"),r=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"6f6757c3",null);i["default"]=r.exports},"7d0b":function(t,i,e){"use strict";e.r(i);var n=e("5713"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);i["default"]=a.a},8053:function(t,i,e){"use strict";var n=e("d2cf"),a=e.n(n);a.a},"9e5d":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".top[data-v-d1ab49dc]{height:%?105?%;padding:0 %?44?%;width:100%;box-sizing:border-box;position:fixed;top:0;z-index:99;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;font-weight:700;color:#333;background:#fff;box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1)}.top_enlarge[data-v-d1ab49dc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;width:%?180?%}.top uni-image[data-v-d1ab49dc]{height:%?40?%;width:%?40?%}.top uni-text[data-v-d1ab49dc]:nth-of-type(2){width:%?180?%;display:inline-block}",""])},"9fb1":function(t,i,e){"use strict";var n=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("db0c")),s=n(e("e814")),o=n(e("e0ce")),r=n(e("3980")),d={components:{returns:o.default,load:r.default},data:function(){return{title:"活动详情",dataList:"",sign_user:"",ends:!0,day:"",hr:"",min:"",sec:"",timer:"",load_show:!0,detail_img:""}},methods:{countdown:function(t){t<0&&(t=0,this.ends=!1,clearInterval(this.timer));var i=(0,s.default)(t/60/60/24),e=(0,s.default)(t/60/60%24),n=(0,s.default)(t/60%60),a=(0,s.default)(t%60);this.day=i,this.hr=e>9?e:"0"+e,this.min=n>9?n:"0"+n,this.sec=a>9?a:"0"+a,1==this.load_show&&(this.load_show=!1)}},onHide:function(){clearInterval(this.timer)},onUnload:function(){clearInterval(this.timer)},onShow:function(){this.service.entire(this,"post",this.APIconfig.api_root.subindex.a_activity_detail,{id:this.id},function(t,i){console.log(i),t.dataList=i.data.data,t.sign_user=i.data.data.sign_user,t.sign_user.length>5&&(t.sign_user.length=5);var e=i.data.data.detail;e=(0,a.default)(e),console.log(e),t.detail_img=e;var n=t.dataList.end_time-Date.parse(new Date)/1e3;t.timer=setInterval(function(){n--,t.countdown(n)},1e3)})},onLoad:function(t){console.log(t),this.id=t.id}};i.default=d},a835:function(t,i,e){"use strict";var n=e("c8f9"),a=e.n(n);a.a},c8f9:function(t,i,e){var n=e("e1cf");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("be56634e",n,!0,{sourceMap:!1,shadowMode:!1})},d2cf:function(t,i,e){var n=e("9e5d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("471ce824",n,!0,{sourceMap:!1,shadowMode:!1})},e0ce:function(t,i,e){"use strict";e.r(i);var n=e("4da4"),a=e("7d0b");for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);e("8053");var o=e("2877"),r=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"d1ab49dc",null);i["default"]=r.exports},e1cf:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* .content{\n\t\theight: 100%vh;\n\t\twidth: 100%; */uni-page-body[data-v-6f6757c3]{background-color:#f2f2f2}.content[data-v-6f6757c3]{padding-bottom:%?140?%}.worp[data-v-6f6757c3]{width:100%;background-color:#fff;padding-top:0!important;margin:0 0 %?30?% 0}.worp hr[data-v-6f6757c3]{height:%?1?%;border:none;border-top:1px solid #f4f4f4;width:97%;margin:0 auto}.worp uni-image[data-v-6f6757c3]{width:100%;height:%?364?%}.worp .theme[data-v-6f6757c3]{font-size:%?24?%;color:#333;margin:%?20?% 0 %?20?% %?23?%}.worp .line[data-v-6f6757c3]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:%?23?%}.worp .line uni-image[data-v-6f6757c3]{width:%?32?%;height:%?32?%;margin-right:%?28?%}.worp .line uni-text[data-v-6f6757c3]{font-size:%?28?%;color:#666;margin-right:%?20?%}.worp .line .theme1[data-v-6f6757c3]{font-size:%?24?%;color:#333;margin:%?20?% 0 %?20?% %?0?%}.worp .price[data-v-6f6757c3]{font-size:%?25?%;font-weight:700;color:#d80000;margin:%?20?% 0 0 %?23?%;letter-spacing:%?3?%}.worp .countdown[data-v-6f6757c3]{display:-webkit-box;display:-webkit-flex;display:flex;margin-left:%?23?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.worp .countdown uni-text[data-v-6f6757c3]{font-size:%?26?%;color:#f2221f}.worp .countdown uni-view[data-v-6f6757c3]{width:%?44?%;height:%?44?%;text-align:center;font-size:%?21?%;color:#fff;line-height:%?44?%;background-color:#d80000;border-radius:%?5?%;margin:%?10?% 0}.worp .top[data-v-6f6757c3]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:0 %?23?%;padding:%?20?% 0}.worp .top uni-text[data-v-6f6757c3]:first-child{font-size:%?27?%;color:#000}.worp .top uni-text[data-v-6f6757c3]:last-child{font-size:%?23?%;color:#ef7c38}.worp .personnel-list[data-v-6f6757c3]{display:-webkit-box;display:-webkit-flex;display:flex\n    /* justify-content: space-around; */}.worp .personnel-list .list[data-v-6f6757c3]{width:20%;text-align:center;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden}.worp .personnel-list .list .l_img[data-v-6f6757c3]{width:%?96?%;height:%?96?%;border-radius:50%;overflow:hidden;display:inline-block}.worp .personnel-list .list uni-image[data-v-6f6757c3]{width:100%;height:100%}.worp .personnel-list .list uni-view[data-v-6f6757c3]{font-size:%?23?%;text-align:center}.p-t[data-v-6f6757c3]{font-size:%?28?%}.image[data-v-6f6757c3]{margin-top:%?30?%;width:100%;height:%?988?%}.underway[data-v-6f6757c3]{background:#fff;position:fixed;left:0;bottom:0;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?140?%}.underway uni-button[data-v-6f6757c3]:first-child{width:%?250?%;height:%?80?%;font-size:%?30?%;color:#fff;text-align:center;line-height:%?80?%;background-color:#d80000;border:none;border-radius:%?40?%;letter-spacing:%?10?%}.underway uni-button[data-v-6f6757c3]:last-child{width:%?250?%;height:%?80?%;font-size:%?30?%;color:#fff;text-align:center;line-height:%?80?%;background-color:#ef7c38;border:none;border-radius:%?40?%;letter-spacing:%?10?%}\n/* \t结束按钮 */.finish[data-v-6f6757c3]{background:#fff;height:%?140?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;left:0;bottom:0;width:100%\n  /* display: none; */}.finish uni-button[data-v-6f6757c3]{width:%?600?%;height:%?80?%;font-size:%?30?%;color:#fff;text-align:center;line-height:%?80?%;background-color:#999;border:none;border-radius:%?40?%;letter-spacing:%?10?%}\n/* \t} */body.?%PAGE?%[data-v-6f6757c3]{background-color:#f2f2f2}',""])},e3dd:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"status_bar"}),e("returns",{attrs:{titles:t.title}}),e("v-uni-view",{staticClass:"worp"},[e("v-uni-image",{attrs:{src:t.APIconfig.api_img+t.dataList.cover,mode:"widthFix"}}),e("v-uni-view",{staticClass:"theme"},[t._v(t._s(t.dataList.title))]),e("v-uni-view",{staticClass:"line"},[e("v-uni-image",{attrs:{src:"../../static/image/index/apply.png",mode:"widthFix"}}),e("v-uni-text",[t._v("已报名"+t._s(t.dataList.sign_number)+"人")]),e("v-uni-text",[t._v("限"+t._s(t.dataList.limit)+"人报名")])],1),e("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(t.dataList.price)+"/"+t._s(t.dataList.integral)+"积分")]),e("v-uni-view",{staticClass:"countdown"},[e("v-uni-text",[t._v("剩余")]),e("v-uni-view",[t._v(t._s(t.day))]),e("v-uni-text",[t._v("天")]),e("v-uni-view",[t._v(t._s(t.hr))]),e("v-uni-text",[t._v("时")]),e("v-uni-view",[t._v(t._s(t.min))]),e("v-uni-text",[t._v("分")]),e("v-uni-view",[t._v(t._s(t.sec))]),e("v-uni-text",[t._v("秒")])],1)],1),e("v-uni-view",{staticClass:"worp"},[e("v-uni-view",{staticClass:"line"},[e("v-uni-image",{attrs:{src:"../../static/image/index/time.png",mode:"widthFix"}}),e("v-uni-text",{staticClass:"theme1"},[t._v(t._s(t.dataList.start_time_text))])],1),e("hr"),e("v-uni-view",{staticClass:"line"},[e("v-uni-image",{attrs:{src:"../../static/image/index/site.png",mode:"widthFix"}}),e("v-uni-text",{staticClass:"theme1"},[t._v(t._s(t.dataList.address))])],1),e("hr"),e("v-uni-view",{staticClass:"line"},[e("v-uni-image",{attrs:{src:"../../static/image/index/zhubanfang.png",mode:"widthFix"}}),e("v-uni-text",{staticClass:"theme1"},[t._v("主办方："+t._s(t.dataList.organizer))])],1)],1),t.sign_user.length?e("v-uni-view",{staticClass:"worp"},[e("v-uni-view",{staticClass:"top"},[e("v-uni-text",[t._v("已报名")]),e("v-uni-text",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$jump("./registered?id="+t.id)}}},[t._v("查看更多")])],1),e("v-uni-view",{staticClass:"personnel-list"},t._l(t.sign_user,function(i,n){return e("v-uni-view",{key:n,staticClass:"list"},[e("v-uni-view",{staticClass:"l_img"},[e("v-uni-image",{attrs:{src:t.APIconfig.api_img+i.avatar,mode:"widthFix"}})],1),e("v-uni-view",[t._v(t._s(i.nickname?i.nickname:"神秘用户"))])],1)}),1)],1):t._e(),e("v-uni-view",{staticClass:"p-t"},[t._v("活动详情")]),t._l(t.detail_img,function(i,n){return e("v-uni-image",{staticClass:"image",attrs:{src:t.APIconfig.api_img+i.images,mode:"widthFix"}})}),1==t.ends?e("v-uni-view",{staticClass:"underway"},[e("v-uni-button",{attrs:{type:"default"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$jump("./apply?id="+t.id)}}},[t._v("立即报名")]),e("v-uni-button",{attrs:{type:"default"}},[t._v("邀请好友")])],1):e("v-uni-view",{staticClass:"finish"},[e("v-uni-button",[t._v("活动已结束")])],1),t.load_show?e("load"):t._e()],2)},a=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return a})}}]);