(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/com_page/v_search"],{"0377":function(e,t,n){"use strict";n.r(t);var o=n("5cf3"),i=n("3b9e");for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);n("e29c");var r,u=n("f0c5"),c=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,"1a60085b",null,!1,o["a"],r);t["default"]=c.exports},"3b9e":function(e,t,n){"use strict";n.r(t);var o=n("d921"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=i.a},"5cf3":function(e,t,n){"use strict";var o={"uni-load-more":()=>n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"ee48"))},i=function(){var e=this,t=e.$createElement,n=(e._self._c,e.$api_img());e._isMounted||(e.e0=function(t){return e.service.returns()}),e.$mp.data=Object.assign({},{$root:{m0:n}})},a=[];n.d(t,"b",function(){return i}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return o})},"6cf3":function(e,t,n){"use strict";(function(e){n("7932"),n("921b");o(n("66fd"));var t=o(n("0377"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"96fd":function(e,t,n){},d921:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"ee48"))},i={components:{uniLoadMore:o},data:function(){return{test:"",data:"",page:1,more:"",loadRecord:!0}},onReachBottom:function(){this.loadRecord},methods:{onKeyInput:function(){var e=this;setTimeout(function(){e.test&&(e.more="loading",e.index_all(e.test))},0)},index_all:function(t){this.service.entire(this,"get",this.APIconfig.api_root.com_page.videoList,{keyword:t,type:this.s_type,page:this.page,limit:10},function(t,n){if(t.data=n.data.video_list,n.data.video_list.length<10)return t.more="noMore",void(t.loadRecord=!1);t.more="more",e("log",t.data," at pages\\com_page\\v_search.vue:102")})}},onLoad:function(e){this.s_type=e.type}};t.default=i}).call(this,n("0de9")["default"])},e29c:function(e,t,n){"use strict";var o=n("96fd"),i=n.n(o);i.a}},[["6cf3","common/runtime","common/vendor"]]]);