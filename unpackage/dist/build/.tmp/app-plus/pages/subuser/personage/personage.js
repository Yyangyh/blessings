(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/subuser/personage/personage"],{2158:function(e,t,n){"use strict";var r,a=function(){var e=this,t=e.$createElement,n=(e._self._c,e.$api_img());e.$mp.data=Object.assign({},{$root:{m0:n}})},u=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return u}),n.d(t,"a",function(){return r})},"48ab":function(e,t,n){},"50eb":function(e,t,n){"use strict";n.r(t);var r=n("c269"),a=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);t["default"]=a.a},"54aa":function(e,t,n){"use strict";var r=n("48ab"),a=n.n(r);a.a},c269:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62"),a=u(n("43aa"));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){c(e,t,n[t])})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){return n.e("pages/common/returns").then(n.bind(null,"20fe"))},s={components:{returns:i},data:function(){return{back:a.default,title:"个人资料"}},computed:o({},(0,r.mapState)({user:"user"})),methods:{reveal:function(){var t=this,n=this;e.chooseImage({success:function(r){var a=r.tempFilePaths,u=n.service.loading("上传中");e.uploadFile({url:t.APIconfig.api_root.subuser.s_member,filePath:a[0],name:"file",formData:{type:2,user_id:n.$store.state.user.id},success:function(t){e.hideLoading(),clearTimeout(u);var r=JSON.parse(t.data);if(0==r.code){var a={avatar:r.data.userinfo.avatar};n.$store.commit("set_user",a)}}})}})}}};t.default=s}).call(this,n("6e42")["default"])},e597:function(e,t,n){"use strict";(function(e){n("7932"),n("921b");r(n("66fd"));var t=r(n("f9cc"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},f9cc:function(e,t,n){"use strict";n.r(t);var r=n("2158"),a=n("50eb");for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);n("54aa");var o,c=n("f0c5"),i=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);t["default"]=i.exports}},[["e597","common/runtime","common/vendor"]]]);