(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/subuser/assemble_order"],{3374:function(t,e,o){"use strict";(function(t){function n(t){return i(t)||a(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(t){if(Array.isArray(t)){for(var e=0,o=new Array(t.length);e<t.length;e++)o[e]=t[e];return o}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){return o.e("pages/common/returns").then(o.bind(null,"20fe"))},s=function(){return o.e("components/uni-load-more/uni-load-more").then(o.bind(null,"ee48"))},d={components:{returns:u,uniLoadMore:s},data:function(){return{title:"拼团订单",show:0,data:[],more:"more",page:1,loadRecord:!0}},methods:{returns:function(){t.redirectTo({url:"./myorder"})},chiose:function(t){this.more="loading",this.data="",this.show=t,this.page=1,this.loadRecord=!0,this.service.entire(this,"post",this.APIconfig.api_root.subuser.g_order_lists,{user_id:this.$store.state.user.id,is_more:1,status:t,page:1},function(t,e){if(t.data=e.data.data,e.data.data.length<10)return t.more="noMore",void(t.loadRecord=!1);t.more="more"})},loadMore:function(){var t=this.page;this.more="loading",this.service.entire(this,"post",this.APIconfig.api_root.subuser.g_order_lists,{user_id:this.$store.state.user.id,is_more:1,status:this.show,page:t},function(e,o){var r=e.data;if(r.push.apply(r,n(o.data.data)),e.data=r,e.page=t+1,o.data.data.length<10)return e.more="noMore",void(e.loadRecord=!1);e.more="more"})}},onReachBottom:function(){0!=this.loadRecord&&this.loadMore()},onLoad:function(t){this.show=t.status},onShow:function(){this.data.length=0,this.page=1,this.loadMore()}};e.default=d}).call(this,o("6e42")["default"])},"3ee2":function(t,e,o){"use strict";var n=o("9d19"),r=o.n(n);r.a},"3f40":function(t,e,o){"use strict";var n={"uni-load-more":()=>o.e("components/uni-load-more/uni-load-more").then(o.bind(null,"ee48"))},r=function(){var t=this,e=t.$createElement,o=(t._self._c,t.__map(t.data,function(e,o){var n=Number(e.price),r=Number(e.freight);return{$orig:t.__get_orig(e),m0:n,m1:r}}));t.$mp.data=Object.assign({},{$root:{l0:o}})},a=[];o.d(e,"b",function(){return r}),o.d(e,"c",function(){return a}),o.d(e,"a",function(){return n})},4766:function(t,e,o){"use strict";o.r(e);var n=o("3f40"),r=o("fbd8");for(var a in r)"default"!==a&&function(t){o.d(e,t,function(){return r[t]})}(a);o("3ee2");var i,u=o("f0c5"),s=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"30a4160a",null,!1,n["a"],i);e["default"]=s.exports},"6c48":function(t,e,o){"use strict";(function(t){o("7932"),o("921b");n(o("66fd"));var e=n(o("4766"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},"9d19":function(t,e,o){},fbd8:function(t,e,o){"use strict";o.r(e);var n=o("3374"),r=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);e["default"]=r.a}},[["6c48","common/runtime","common/vendor"]]]);