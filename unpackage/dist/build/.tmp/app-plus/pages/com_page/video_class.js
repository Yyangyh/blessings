(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/com_page/video_class"],{"35b8":function(t,e,i){"use strict";(function(t){i("7932"),i("921b");n(i("66fd"));var e=n(i("e47f"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},4069:function(t,e,i){"use strict";i.r(e);var n=i("beaf"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},"459b":function(t,e,i){"use strict";var n=i("8d40"),o=i.n(n);o.a},"8d40":function(t,e,i){},beaf:function(t,e,i){"use strict";function n(t){return s(t)||a(t)||r(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,e){if(t){if("string"===typeof t)return d(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?d(t,e):void 0}}function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t){if(Array.isArray(t))return d(t)}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){i.e("components/uni-load-more/uni-load-more").then(function(){return resolve(i("ee48"))}.bind(null,i)).catch(i.oe)},c={components:{uniLoadMore:u},data:function(){return{data:"",type:"",show:!1,top_class:"",title:"",video_list:[],more:"more",page:1,loadRecord:!0,v_test:"全部",old_id:"",keyword_show:"",req_data:{type:"",limit:10,page:1,v_pid:""}}},methods:{Index:function(){this.more="loading",this.uni_request(this.req_data)},chiose:function(t,e){this.req_data.page=1,this.more="loading",this.loadRecord=!0,t?(this.req_data.v_pid=t,this.v_test=e):(this.req_data.v_pid=this.old_id,this.v_test="全部"),this.video_list.length=0,this.uni_request(this.req_data),this.show=!1},condition:function(t){this.more="loading",this.req_data.page=1,this.loadRecord=!0,this.video_list.length=0,this.keyword_show==t?(this.keyword_show="",delete this.req_data.view,delete this.req_data.is_free):(this.keyword_show=t,1==t&&(this.req_data.is_free=1,delete this.req_data.view),2==t&&(this.req_data.view=1,delete this.req_data.is_free)),this.uni_request(this.req_data)},uni_request:function(t){this.service.entire(this,"get",this.APIconfig.api_root.com_page.videoList,t,(function(t,e){t.top_class=e.data.top_list;var i=t.video_list;if(i.push.apply(i,n(e.data.video_list)),t.video_list=i,t.req_data.page+=1,t.more="more",e.data.video_list.length<10)return t.more="noMore",void(t.loadRecord=!1)}))}},onLoad:function(t){this.title=t.title,this.type=t.type,this.req_data.v_pid=t.id,this.old_id=t.id,this.req_data.type=t.type,t.v_pid&&(this.req_data.v_pid=t.v_pid,this.v_test=t.v_test),this.Index()},onReachBottom:function(){0!=this.loadRecord&&this.Index()}};e.default=c},dc3b:function(t,e,i){"use strict";var n={"uni-load-more":function(){return i.e("components/uni-load-more/uni-load-more").then(i.bind(null,"ee48"))}},o=function(){var t=this,e=t.$createElement,i=(t._self._c,t.$api_img()),n=t.__map(t.video_list,(function(e,i){var n=t.service.Test(e.created_at),o=Number(e.v_price),r=Number(e.v_price),a=t.service.NumEllipsis(e.view);return{$orig:t.__get_orig(e),g0:n,m1:o,m2:r,g1:a}}));t._isMounted||(t.e0=function(e){return t.service.returns()},t.e1=function(e){t.show=!t.show},t.e2=function(e){t.show=!1}),t.$mp.data=Object.assign({},{$root:{m0:i,l0:n}})},r=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}))},e47f:function(t,e,i){"use strict";i.r(e);var n=i("dc3b"),o=i("4069");for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("459b");var a,s=i("f0c5"),d=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);e["default"]=d.exports}},[["35b8","common/runtime","common/vendor"]]]);