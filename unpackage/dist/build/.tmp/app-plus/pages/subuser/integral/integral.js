(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/subuser/integral/integral"],{"5aaa":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})},6994:function(e,t,n){"use strict";var r=n("7c16"),a=n.n(r);a.a},"7c16":function(e,t,n){},adee:function(e,t,n){"use strict";n.r(t);var r=n("b0f7"),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t["default"]=a.a},b0f7:function(e,t,n){"use strict";(function(e){function r(e){return i(e)||o(e)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function i(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return n.e("pages/common/returns").then(n.bind(null,"e0ce"))},s=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"faa7"))},c={components:{returns:u,uniLoadMore:s},data:function(){return{title:"我的积分",cur:"",dataList:[],more:"more",page:1,loadRecord:!0}},methods:{choise:function(t){this.more="loading",this.dataList.length=0,this.page=1,this.loadRecord=!0,this.cur=t||2;var n={user_id:this.$store.state.user.id,page:1,type:t};console.log(e(n," at pages\\subuser\\integral\\integral.vue:66")),this.Index(n)},loadMore:function(){this.more="loading";var t={user_id:this.$store.state.user.id,page:this.page,type:this.cur};2==t.type&&Reflect.deleteProperty(t,"type"),console.log(e(t," at pages\\subuser\\integral\\integral.vue:79")),this.Index(t)},Index:function(e){this.service.entire(this,"post",this.APIconfig.api_root.subuser.u_integral_index,e,function(e,t){var n;(n=e.dataList).push.apply(n,r(t.data.data)),e.page++,e.more="more",t.data.data.length<10&&(e.more="noMore",e.loadRecord=!1)})}},onReachBottom:function(){0!=this.loadRecord&&this.loadMore()},onLoad:function(){this.choise()}};t.default=c}).call(this,n("0de9")["default"])},b16e:function(e,t,n){"use strict";(function(e){n("aa56"),n("921b");r(n("66fd"));var t=r(n("d82e"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},d82e:function(e,t,n){"use strict";n.r(t);var r=n("5aaa"),a=n("adee");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("6994");var i=n("2877"),u=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,null,null);t["default"]=u.exports}},[["b16e","common/runtime","common/vendor"]]]);