(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/message_login"],{"07a1":function(t,e,n){},"5d46":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{verification:"获取验证码",disabled:!1,accounts:"",verify:""}},methods:{jump:function(e){t.navigateTo({url:e})},obtain:function(){var e=this;if(/^1[3-9][0-9]\d{8,11}$/.test(e.accounts)){if(1!=e.disabled){var n={mobile:e.accounts,time:Date.parse(new Date)/1e3};t.request({url:e.APIconfig.api_root.login.sendPhone,method:"POST",data:n,success:function(n){var i=n.data;t.showToast({icon:"none",title:i.msg}),0==i.code&&(e.verification="60s",e.disabled=!0,e.timer=setInterval(function(){var t=e.verification.split("s")[0];t--,e.verification=t+"s"},1e3))}})}}else t.showToast({icon:"none",title:"手机号码格式不正确"})},login:function(){var e=this;t.request({url:e.APIconfig.api_root.login.phoneLogin,method:"POST",data:{mobile:e.accounts,sms_code:e.verify,time:Date.parse(new Date)/1e3},success:function(e){var n=e.data;t.showToast({icon:"none",title:n.msg}),0==n.code&&(t.setStorageSync("token",JSON.stringify(n.data.memberInfo)),setTimeout(function(){t.switchTab({url:"../index/index"})},1e3))}})}},watch:{verification:function(t,e){"-1s"==t&&(clearInterval(this.timer),this.verification="重新获取",this.disabled=!1)}}};e.default=n}).call(this,n("6e42")["default"])},"5f4e":function(t,e,n){"use strict";var i=n("07a1"),a=n.n(i);a.a},8826:function(t,e,n){"use strict";(function(t){n("7932"),n("921b");i(n("66fd"));var e=i(n("92ef"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"92ef":function(t,e,n){"use strict";n.r(e);var i=n("c48e"),a=n("ff6b");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("5f4e");var c,r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"3a00a1b0",null,!1,i["a"],c);e["default"]=s.exports},c48e:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i})},ff6b:function(t,e,n){"use strict";n.r(e);var i=n("5d46"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a}},[["8826","common/runtime","common/vendor"]]]);