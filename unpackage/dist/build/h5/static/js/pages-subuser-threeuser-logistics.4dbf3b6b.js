(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-subuser-threeuser-logistics"],{"04c7":function(t,e,n){"use strict";n.r(e);var i=n("e030"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"1d9e":function(t,e,n){"use strict";var i=n("91d5"),a=n.n(i);a.a},"2f50":function(t,e,n){"use strict";var i=n("4cee"),a=n.n(i);a.a},"32c0":function(t,e,n){"use strict";n.r(e);var i=n("545b"),a=n("f138");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("2f50");var r=n("2877"),s=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"6061b996",null);e["default"]=s.exports},"35a9":function(t,e,n){"use strict";n.r(e);var i=n("c412"),a=n("04c7");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("1d9e");var r=n("2877"),s=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"91aed196",null);e["default"]=s.exports},"4cee":function(t,e,n){var i=n("5dd4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("5b492f87",i,!0,{sourceMap:!1,shadowMode:!1})},"545b":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"top"},[n("v-uni-view",{staticClass:"top_enlarge",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.returns()}}},[n("v-uni-image",{attrs:{src:"/static/image/com_page/returns.png",mode:"widthFix"}})],1),n("v-uni-text",[t._v(t._s(t.titles))]),n("v-uni-text")],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"5dd4":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".top[data-v-6061b996]{height:%?105?%;padding:0 %?44?%;width:100%;box-sizing:border-box;position:fixed;top:0;z-index:99;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;font-weight:700;color:#333;background:#fff;box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1)}.top_enlarge[data-v-6061b996]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;width:%?90?%}.top uni-image[data-v-6061b996]{height:%?40?%;width:%?40?%}.top uni-text[data-v-6061b996]:nth-of-type(2){width:%?90?%;display:inline-block}",""])},"91d5":function(t,e,n){var i=n("fe7d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("69624864",i,!0,{sourceMap:!1,shadowMode:!1})},c412:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"status_bar"}),n("returns",{attrs:{titles:t.title}}),n("v-uni-view",{staticClass:"log_box"},[n("v-uni-rich-text",{attrs:{nodes:t.nodes}})],1)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},d01a:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:["titles"],data:function(){return{}},methods:{returns:function(){history.back()}}};e.default=i},e030:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a481"),n("3b2b");var a=i(n("32c0")),o={components:{returns:a.default},data:function(){return{title:"物流信息",nodes:""}},methods:{},onLoad:function(t){this.service.entire(this,"post",this.APIconfig.api_root.subuser.threeuser.s_order_getexpinfo,{express_id:t.id,express_number:t.number},function(t,e){console.log(e);var n=e.data,i=new RegExp("<li","gi"),a=new RegExp("<p","gi");n=n.replace(i,'<li style="padding:10px 0;font-size: 16px;border-bottom: 1px solid #F1F1F1;color:#666"'),n=n.replace(a,'<p style="margin-bottom:10px;font-size: 18px"'),console.log(t.nodes),t.nodes=n})}};e.default=o},f138:function(t,e,n){"use strict";n.r(e);var i=n("d01a"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},fe7d:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".log_box[data-v-91aed196]{padding:%?20?%}",""])}}]);