(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/com_page/video_class"],{"043b":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){return t.service.returns()},t.e1=function(e){t.show=!t.show},t.e2=function(e){t.show=!1})},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},"047f":function(t,e,i){},"1a4c":function(t,e,i){"use strict";(function(t){function n(t){return a(t)||r(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function a(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(){return i.e("components/uni-load-more/uni-load-more").then(i.bind(null,"faa7"))},u={components:{uniLoadMore:s},data:function(){return{data:"",show:!1,top_class:"",title:"",video_list:[],more:"more",page:1,loadRecord:!0,v_pid:"",v_test:"全部",old_id:""}},methods:{Index:function(){this.more="loading";var t={limit:10,page:this.page,v_pid:this.v_pid};this.uni_request(t)},chiose:function(t,e){this.page=1,this.loadRecord=!0;var i={limit:10,page:this.page};t?(i.v_pid=t,this.v_pid=t,this.v_test=e):(this.v_pid=this.old_id,i.v_pid=this.old_id,this.v_test="全部"),this.video_list.length=0,this.uni_request(i),this.show=!1},uni_request:function(e){this.service.entire(this,"get",this.APIconfig.api_root.com_page.videoList,e,function(e,i){e.top_class=i.data.top_list;var o=e.video_list;if(o.push.apply(o,n(i.data.video_list)),e.video_list=o,console.log(t(e.video_list," at pages\\com_page\\video_class.vue:133")),e.page+=1,e.more="more",i.data.video_list.length<10)return e.more="noMore",void(e.loadRecord=!1)})}},onLoad:function(t){this.title=t.title,this.v_pid=t.id,this.old_id=t.id,this.Index()},onReachBottom:function(){0!=this.loadRecord&&this.Index()}};e.default=u}).call(this,i("0de9")["default"])},3611:function(t,e,i){"use strict";var n=i("047f"),o=i.n(n);o.a},"43b7":function(t,e,i){"use strict";i.r(e);var n=i("043b"),o=i("5939");for(var r in o)"default"!==r&&function(t){i.d(e,t,function(){return o[t]})}(r);i("3611");var a=i("2877"),s=Object(a["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},5939:function(t,e,i){"use strict";i.r(e);var n=i("1a4c"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);e["default"]=o.a},c8c3:function(t,e,i){"use strict";(function(t){i("aa56"),i("921b");n(i("66fd"));var e=n(i("43b7"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])}},[["c8c3","common/runtime","common/vendor"]]]);