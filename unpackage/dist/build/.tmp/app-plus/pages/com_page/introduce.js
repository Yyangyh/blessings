(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/com_page/introduce"],{"0e81":function(e,t,n){"use strict";n.r(t);var c=n("4338"),u=n("4c31");for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);n("fff2");var a,r=n("f0c5"),i=Object(r["a"])(u["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],a);t["default"]=i.exports},4338:function(e,t,n){"use strict";var c,u=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"b",function(){return u}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return c})},"4c31":function(e,t,n){"use strict";n.r(t);var c=n("9e62"),u=n.n(c);for(var o in c)"default"!==o&&function(e){n.d(t,e,function(){return c[e]})}(o);t["default"]=u.a},"4ecb":function(e,t,n){},"9e62":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=function(){return n.e("pages/common/returns").then(n.bind(null,"e0ce"))},u={components:{returns:c},data:function(){return{title:"讲师介绍",dataList:""}},onLoad:function(t){console.log(e(t.techer_id," at pages\\com_page\\introduce.vue:40")),this.service.entire(this,"post",this.APIconfig.api_root.com_page.v_techerDetail,{techer_id:t.techer_id},function(t,n){console.log(e(n," at pages\\com_page\\introduce.vue:44")),t.dataList=n.data})}};t.default=u}).call(this,n("0de9")["default"])},fc14:function(e,t,n){"use strict";(function(e){n("aa56"),n("921b");c(n("66fd"));var t=c(n("0e81"));function c(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},fff2:function(e,t,n){"use strict";var c=n("4ecb"),u=n.n(c);u.a}},[["fc14","common/runtime","common/vendor"]]]);