(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/subuser/s_order"],{"58f5":function(t,e,o){"use strict";(function(t,n){function r(t){return s(t)||i(t)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function s(t){if(Array.isArray(t)){for(var e=0,o=new Array(t.length);e<t.length;e++)o[e]=t[e];return o}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){return o.e("components/uni-load-more/uni-load-more").then(o.bind(null,"ee48"))},d={components:{uniLoadMore:u},data:function(){return{show:0,data:[],status:"",more:"more",page:1,loadRecord:!0}},methods:{returns:function(){t.redirectTo({url:"./myorder"})},jump:function(e){t.navigateTo({url:e})},deletes:function(e,o){var n=this;t.showModal({title:"提示",content:"是否确定删除订单？",success:function(r){if(r.confirm)n.service.entire(n,"post",n.APIconfig.api_root.subuser.s_delete,{user_id:n.$store.state.user.id,id:e},function(e,n){t.showToast({icon:"none",title:n.msg}),0==n.code&&e.data.splice(o,1)});else if(r.cancel)return}})},chiose:function(t){this.more="loading",this.data=[],this.show=t,this.loadRecord=!0,this.service.entire(this,"post",this.APIconfig.api_root.subuser.s_order,{user_id:this.$store.state.user.id,is_more:1,status:t,page:1},function(t,e){t.data=e.data.data,e.data.data.length<10&&(t.more="noMore",t.loadRecord=!1)})},loadMore:function(){var t=this.page;this.more="loading",this.service.entire(this,"post",this.APIconfig.api_root.subuser.s_order,{user_id:this.$store.state.user.id,is_more:1,status:this.show,page:t},function(e,o){var a=e.data;if(a.push.apply(a,r(o.data.data)),e.data=a,n("log",e.data," at pages\\subuser\\s_order.vue:205"),e.page=t+1,e.more="more",o.data.data.length<10)return e.more="noMore",void(e.loadRecord=!1)})}},onLoad:function(t){this.status=t.status,this.show=t.status},onReachBottom:function(){0!=this.loadRecord&&this.loadMore()},onShow:function(){this.data.length=0,this.page=1,this.loadMore()}};e.default=d}).call(this,o("6e42")["default"],o("0de9")["default"])},"5d92":function(t,e,o){"use strict";var n={"uni-load-more":()=>o.e("components/uni-load-more/uni-load-more").then(o.bind(null,"ee48"))},r=function(){var t=this,e=t.$createElement;t._self._c},a=[];o.d(e,"b",function(){return r}),o.d(e,"c",function(){return a}),o.d(e,"a",function(){return n})},6799:function(t,e,o){"use strict";(function(t){o("7932"),o("921b");n(o("66fd"));var e=n(o("d31c"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},"8d0b":function(t,e,o){"use strict";o.r(e);var n=o("58f5"),r=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);e["default"]=r.a},c026:function(t,e,o){},d31c:function(t,e,o){"use strict";o.r(e);var n=o("5d92"),r=o("8d0b");for(var a in r)"default"!==a&&function(t){o.d(e,t,function(){return r[t]})}(a);o("ec05");var i,s=o("f0c5"),u=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"72dde8d9",null,!1,n["a"],i);e["default"]=u.exports},ec05:function(t,e,o){"use strict";var n=o("c026"),r=o.n(n);r.a}},[["6799","common/runtime","common/vendor"]]]);