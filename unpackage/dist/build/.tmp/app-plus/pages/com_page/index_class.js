(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/com_page/index_class"],{7178:function(t,e,i){"use strict";var n=i("7d1d"),o=i.n(n);o.a},"7d1d":function(t,e,i){},8354:function(t,e,i){"use strict";i.r(e);var n=i("f78a"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},a1f1:function(t,e,i){"use strict";(function(t){i("7932"),i("921b");n(i("66fd"));var e=n(i("ca72"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},ca72:function(t,e,i){"use strict";i.r(e);var n=i("e872"),o=i("8354");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("7178");var r,s=i("f0c5"),d=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);e["default"]=d.exports},e872:function(t,e,i){"use strict";var n={"uni-load-more":()=>i.e("components/uni-load-more/uni-load-more").then(i.bind(null,"ee48"))},o=function(){var t=this,e=t.$createElement,i=(t._self._c,t.$api_img());t._isMounted||(t.e0=function(e){return t.service.returns()},t.e1=function(e){t.show=!t.show},t.e2=function(e){t.show=!1}),t.$mp.data=Object.assign({},{$root:{m0:i}})},a=[];i.d(e,"b",function(){return o}),i.d(e,"c",function(){return a}),i.d(e,"a",function(){return n})},f78a:function(t,e,i){"use strict";(function(t){function n(t){return r(t)||a(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function r(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(){return i.e("components/uni-load-more/uni-load-more").then(i.bind(null,"ee48"))},d={components:{uniLoadMore:s},data:function(){return{data:"",show:0,top_class:"",video_list:[],more:"more",loadRecord:!0,v_pid:"",v_test:"全部",keyword_show:"",req_data:{type:"",limit:10,page:1}}},methods:{Index:function(){this.more="loading",this.uni_request(this.req_data)},chiose:function(t,e){this.more="loading",this.req_data.page=1,this.loadRecord=!0,t?(this.req_data.v_pid=t,this.v_test=e):(delete this.req_data.v_pid,this.v_test="全部"),this.video_list.length=0,this.uni_request(this.req_data),this.show=!1},condition:function(t){this.more="loading",this.req_data.page=1,this.loadRecord=!0,this.video_list.length=0,this.keyword_show==t?(this.keyword_show="",delete this.req_data.view,delete this.req_data.is_free):(this.keyword_show=t,1==t&&(this.req_data.is_free=1,delete this.req_data.view),2==t&&(this.req_data.view=1,delete this.req_data.is_free)),this.uni_request(this.req_data)},uni_request:function(e){this.service.entire(this,"get",this.APIconfig.api_root.com_page.videoList,e,function(e,i){e.top_class=i.data.top_list;var o=e.video_list;if(o.push.apply(o,n(i.data.video_list)),e.video_list=o,t("log",e.video_list," at pages\\com_page\\index_class.vue:166"),e.req_data.page+=1,e.more="more",i.data.video_list.length<10)return e.more="noMore",void(e.loadRecord=!1)})}},onLoad:function(t){this.req_data.type=t.type,this.Index()},onShow:function(){this.service.notice.call(this)},onReachBottom:function(){0!=this.loadRecord&&this.Index()}};e.default=d}).call(this,i("0de9")["default"])}},[["a1f1","common/runtime","common/vendor"]]]);