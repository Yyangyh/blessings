(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/subuser/assemble_order"],{3374:function(t,e,o){"use strict";(function(t,r){function n(t){return u(t)||i(t)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(t){if(Array.isArray(t)){for(var e=0,o=new Array(t.length);e<t.length;e++)o[e]=t[e];return o}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(){return o.e("pages/common/returns").then(o.bind(null,"20fe"))},d=function(){return o.e("components/uni-load-more/uni-load-more").then(o.bind(null,"ee48"))},c={components:{returns:s,uniLoadMore:d},data:function(){return{title:"拼团订单",show:0,data:[],more:"more",page:1,loadRecord:!0}},methods:{returns:function(){t.redirectTo({url:"./myorder"})},chiose:function(t){this.more="loading",this.data="",this.show=t,this.page=1,this.loadRecord=!0,this.service.entire(this,"post",this.APIconfig.api_root.subuser.g_order_lists,{user_id:this.$store.state.user.id,is_more:1,status:t,page:1},function(t,e){if(t.data=e.data.data,e.data.data.length<10)return t.more="noMore",void(t.loadRecord=!1);t.more="more"})},loadMore:function(){var t=this.page;this.more="loading",this.service.entire(this,"post",this.APIconfig.api_root.subuser.g_order_lists,{user_id:this.$store.state.user.id,is_more:1,status:this.show,page:t},function(e,o){r("log",o.data.data," at pages\\subuser\\assemble_order.vue:142");var a=e.data;if(a.push.apply(a,n(o.data.data)),e.data=a,e.page=t+1,o.data.data.length<10)return e.more="noMore",void(e.loadRecord=!1);e.more="more"})}},onReachBottom:function(){0!=this.loadRecord&&this.loadMore()},onLoad:function(t){this.show=t.status},onShow:function(){this.data.length=0,this.page=1,this.loadMore()}};e.default=c}).call(this,o("6e42")["default"],o("0de9")["default"])},4544:function(t,e,o){"use strict";var r=o("f8ac"),n=o.n(r);n.a},4766:function(t,e,o){"use strict";o.r(e);var r=o("fa17"),n=o("fbd8");for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);o("4544");var i,u=o("f0c5"),s=Object(u["a"])(n["default"],r["b"],r["c"],!1,null,"80e408c2",null,!1,r["a"],i);e["default"]=s.exports},"6c48":function(t,e,o){"use strict";(function(t){o("7932"),o("921b");r(o("66fd"));var e=r(o("4766"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},f8ac:function(t,e,o){},fa17:function(t,e,o){"use strict";var r={"uni-load-more":()=>o.e("components/uni-load-more/uni-load-more").then(o.bind(null,"ee48"))},n=function(){var t=this,e=t.$createElement,o=(t._self._c,t.__map(t.data,function(e,o){var r=Number(e.price),n=Number(e.freight);return{$orig:t.__get_orig(e),m0:r,m1:n}}));t.$mp.data=Object.assign({},{$root:{l0:o}})},a=[];o.d(e,"b",function(){return n}),o.d(e,"c",function(){return a}),o.d(e,"a",function(){return r})},fbd8:function(t,e,o){"use strict";o.r(e);var r=o("3374"),n=o.n(r);for(var a in r)"default"!==a&&function(t){o.d(e,t,function(){return r[t]})}(a);e["default"]=n.a}},[["6c48","common/runtime","common/vendor"]]]);