(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/com_page/video_class"],{"1dcd":function(t,e,i){"use strict";var o=i("f607"),n=i.n(o);n.a},"43b7":function(t,e,i){"use strict";i.r(e);var o=i("b819"),n=i("5939");for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);i("1dcd");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=d.exports},5939:function(t,e,i){"use strict";i.r(e);var o=i("6531"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);e["default"]=n.a},6531:function(t,e,i){"use strict";(function(t){function o(t){return r(t)||a(t)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function r(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(){return i.e("components/uni-load-more/uni-load-more").then(i.bind(null,"faa7"))},d={components:{uniLoadMore:s},data:function(){return{data:"",type:"",show:!1,top_class:"",title:"",video_list:[],more:"more",page:1,loadRecord:!0,v_test:"全部",old_id:"",keyword_show:"",req_data:{type:"",limit:10,page:1,v_pid:""}}},methods:{Index:function(){this.more="loading",this.uni_request(this.req_data)},chiose:function(t,e){this.req_data.page=1,this.more="loading",this.loadRecord=!0,t?(this.req_data.v_pid=t,this.v_test=e):(this.req_data.v_pid=this.old_id,this.v_test="全部"),this.video_list.length=0,this.uni_request(this.req_data),this.show=!1},condition:function(t){this.more="loading",this.req_data.page=1,this.loadRecord=!0,this.video_list.length=0,this.keyword_show==t?(this.keyword_show="",delete this.req_data.view,delete this.req_data.is_free):(this.keyword_show=t,1==t&&(this.req_data.is_free=1,delete this.req_data.view),2==t&&(this.req_data.view=1,delete this.req_data.is_free)),this.uni_request(this.req_data)},uni_request:function(e){this.service.entire(this,"get",this.APIconfig.api_root.com_page.videoList,e,function(e,i){e.top_class||(e.top_class=i.data.top_list);var n=e.video_list;if(n.push.apply(n,o(i.data.video_list)),e.video_list=n,console.log(t(e.video_list," at pages\\com_page\\video_class.vue:164")),e.req_data.page+=1,e.more="more",i.data.video_list.length<10)return e.more="noMore",void(e.loadRecord=!1)})}},onLoad:function(t){this.title=t.title,this.req_data.v_pid=t.id,this.old_id=t.id,this.req_data.type=t.type,t.v_pid&&(this.req_data.v_pid=t.v_pid,this.v_test=t.v_test),this.Index()},onReachBottom:function(){0!=this.loadRecord&&this.Index()}};e.default=d}).call(this,i("0de9")["default"])},b819:function(t,e,i){"use strict";var o,n=function(){var t=this,e=t.$createElement,i=(t._self._c,t.__map(t.video_list,function(e,i){var o=t.service.Test(e.created_at);return{$orig:t.__get_orig(e),g0:o}}));t._isMounted||(t.e0=function(e){return t.service.returns()},t.e1=function(e){t.show=!t.show},t.e2=function(e){t.show=!1}),t.$mp.data=Object.assign({},{$root:{l0:i}})},a=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return a}),i.d(e,"a",function(){return o})},c8c3:function(t,e,i){"use strict";(function(t){i("aa56"),i("921b");o(i("66fd"));var e=o(i("43b7"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},f607:function(t,e,i){}},[["c8c3","common/runtime","common/vendor"]]]);