(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/subuser/threeuser/logistics"],{4602:function(e,t,n){"use strict";var r=n("9737"),o=n.n(r);o.a},9737:function(e,t,n){},9992:function(e,t,n){"use strict";n.r(t);var r=n("ef27"),o=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=o.a},e064:function(e,t,n){"use strict";(function(e){n("7932"),n("921b");r(n("66fd"));var t=r(n("ec16"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},ec16:function(e,t,n){"use strict";n.r(t);var r=n("f8ca"),o=n("9992");for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);n("4602");var i,c=n("f0c5"),s=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,"bed20b5e",null,!1,r["a"],i);t["default"]=s.exports},ef27:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){n.e("pages/common/returns").then(function(){return resolve(n("20fe"))}.bind(null,n)).catch(n.oe)},o={components:{returns:r},data:function(){return{title:"物流信息",nodes:""}},methods:{},onLoad:function(e){this.service.entire(this,"post",this.APIconfig.api_root.subuser.threeuser.s_order_getexpinfo,{express_id:e.id,express_number:e.number},(function(e,t){var n=t.data,r=new RegExp("<li","gi"),o=new RegExp("<p","gi");n=n.replace(r,'<li style="padding:10px 0;font-size: 16px;border-bottom: 1px solid #F1F1F1;color:#666"'),n=n.replace(o,'<p style="margin-bottom:10px;font-size: 18px"'),e.nodes=n}))}};t.default=o},f8ca:function(e,t,n){"use strict";var r,o=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}))}},[["e064","common/runtime","common/vendor"]]]);