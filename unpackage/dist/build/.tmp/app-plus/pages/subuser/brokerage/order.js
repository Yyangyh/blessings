(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/subuser/brokerage/order"],{"34d3":function(t,e,n){},3512:function(t,e,n){"use strict";var r=n("34d3"),o=n.n(r);o.a},"3bf2":function(t,e,n){"use strict";(function(t){function r(t){return i(t)||a(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){return n.e("pages/common/returns").then(n.bind(null,"e0ce"))},s=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"faa7"))},c={components:{returns:u,uniLoadMore:s},data:function(){return{title:"分销订单",cur:"",reveal:!1,data:"",dataList:[],msgs:"",more:"more",page:1,loadRecord:!0}},methods:{Indexs:function(t){this.cur=t,this.more="loading",this.dataList.length=0,this.page=1,this.loadRecord=!0;var e={user_id:this.$store.state.user.id,type:t,page:1};this.Index(e)},loadMore:function(){this.more="loading";var e={user_id:this.$store.state.user.id,page:this.page,type:this.cur};e.type==this.cur&&Reflect.deleteProperty(e,"type"),console.log(t(this.cur," at pages\\subuser\\brokerage\\order.vue:111")),this.Index(e)},Index:function(t){this.service.entire(this,"post",this.APIconfig.api_root.subuser.u_index,t,function(t,e){var n;t.data=e.data,(n=t.dataList).push.apply(n,r(e.data.order)),t.page++,t.more="more",e.data.order.length<10&&(t.more="noMore",t.loadRecord=!1)})}},onReachBottom:function(){0!=this.loadRecord&&this.loadMore()},onLoad:function(){this.Indexs(0)}};e.default=c}).call(this,n("0de9")["default"])},"883a":function(t,e,n){"use strict";n.r(e);var r=n("3bf2"),o=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=o.a},"8abc":function(t,e,n){"use strict";(function(t){n("aa56"),n("921b");r(n("66fd"));var e=r(n("a2fb"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},a2fb:function(t,e,n){"use strict";n.r(e);var r=n("d281"),o=n("883a");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("3512");var i=n("2877"),u=Object(i["a"])(o["default"],r["a"],r["b"],!1,null,null,null);e["default"]=u.exports},d281:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.msgs=t.index})},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})}},[["8abc","common/runtime","common/vendor"]]]);