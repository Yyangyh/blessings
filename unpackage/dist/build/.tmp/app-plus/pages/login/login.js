(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{1357:function(t,e,n){},3137:function(t,e,n){"use strict";(function(t){n("7932"),n("921b");o(n("66fd"));var e=o(n("4f49"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"45ff":function(t,e,n){"use strict";var o,a=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.treaty_show=!1},t.e1=function(e){t.treaty_show=!1})},i=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return o})},"4f49":function(t,e,n){"use strict";n.r(e);var o=n("45ff"),a=n("9c96");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("8fd5");var s,c=n("f0c5"),r=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);e["default"]=r.exports},7707:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("ffea"));function a(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{accounts:"",pwd:"",show:0,treaty_show:!1,treaty:"",agreement:o.default}},methods:{jump:function(e){t.navigateTo({url:e})},login:function(){var e=this;if(e.accounts)if(e.pwd){t.showLoading({title:"登录中",mask:!0});var n=setTimeout(function(){t.hideLoading(),t.showToast({icon:"none",title:"网络请求错误，请稍后再试"})},1e4);t.request({url:e.APIconfig.api_root.login.login,method:"POST",dataType:"json",data:{username:e.accounts,password:e.pwd,time:Date.parse(new Date)/1e3},success:function(o){t.hideLoading(),clearTimeout(n);var a=o.data;t.showToast({icon:"none",title:a.msg}),0==a.code&&(t.removeStorageSync("openid"),t.removeStorageSync("nickname"),e.$store.commit("state_user",a.data.memberInfo),e.$store.commit("state_token",a.token),t.setStorageSync("state_user",a.data.memberInfo),t.setStorageSync("state_token",a.token),setTimeout(function(){t.switchTab({url:"../index/index"})},1e3))}})}else t.showToast({icon:"none",title:"请输入密码"});else t.showToast({icon:"none",title:"请输入用户名或者手机号"})},agree:function(){var e=this;e.treaty_show=!1,t.showLoading({title:"登录中",mask:!0});var n=setTimeout(function(){t.hideLoading(),t.showToast({icon:"none",title:"网络请求错误，请稍后再试"})},1e4);t.login({provider:"weixin",success:function(o){t.request({url:e.APIconfig.api_root.common.getWxLogin,method:"get",data:{access_token:o.authResult.access_token,openid:o.authResult.openid},success:function(a){t.hideLoading(),clearTimeout(n);var i=a.data;0==i.code?(t.removeStorageSync("openid"),t.removeStorageSync("nickname"),e.$store.commit("state_user",i.data.memberInfo),e.$store.commit("state_token",i.token),t.setStorageSync("state_user",i.data.memberInfo),t.setStorageSync("state_token",i.token),t.setStorageSync("wx","wx"),t.switchTab({url:"../index/index"})):1==i.code&&(e.$store.commit("state_user",i.data.memberInfo),e.$store.commit("state_token",i.token),t.setStorageSync("state_user",i.data.memberInfo),t.setStorageSync("state_token",i.token),t.setStorageSync("openid",o.authResult.openid),t.setStorageSync("nickname",i.data.nickname),t.setStorageSync("wx","wx"),t.switchTab({url:"../index/index"}))}})}})},wx:function(){var e=this;t.getStorageSync("wx")?this.agree.call(this):e.treaty_show=!0}},onLoad:function(){var e=this;t.request({url:this.APIconfig.api_root.login.getProtocol,success:function(t){e.treaty=t.data.data.content}})},onShow:function(){this.$store.commit("Amodify_login",0)}};e.default=i}).call(this,n("6e42")["default"])},"8fd5":function(t,e,n){"use strict";var o=n("1357"),a=n.n(o);a.a},"9c96":function(t,e,n){"use strict";n.r(e);var o=n("7707"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=a.a}},[["3137","common/runtime","common/vendor"]]]);