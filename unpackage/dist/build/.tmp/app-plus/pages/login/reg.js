(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/reg"],{1544:function(e,t,n){},3041:function(e,t,n){"use strict";var o=n("1544"),i=n.n(o);i.a},4941:function(e,t,n){"use strict";(function(e){n("aa56"),n("921b");o(n("66fd"));var t=o(n("b842"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"80bc":function(e,t,n){"use strict";n.r(t);var o=n("c1ce"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=i.a},b842:function(e,t,n){"use strict";n.r(t);var o=n("b981"),i=n("80bc");for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);n("3041");var s=n("2877"),r=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,"003aebdc",null);t["default"]=r.exports},b981:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},c1ce:function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{verification:"获取验证码",disabled:!1,accounts:"",pwd:"",pwds:"",verify:"",username:"",parent_id:"",code:"",parent_dis:!1}},methods:{jump:function(t){e.navigateTo({url:t})},obtain:function(){var t=this;if(/^1[3-9][0-9]\d{8,11}$/.test(t.accounts)){if(1!=t.disabled){var o={mobile:t.accounts,time:Date.parse(new Date)/1e3};console.log(n(o," at pages\\login\\reg.vue:96")),e.request({url:t.APIconfig.api_root.login.sendPhone,method:"POST",data:o,success:function(o){console.log(n(o," at pages\\login\\reg.vue:102"));var i=o.data;console.log(n(i," at pages\\login\\reg.vue:104")),e.showToast({icon:"none",title:i.msg}),0==i.code&&(t.verification="60s",t.disabled=!0,t.timer=setInterval(function(){var e=t.verification.split("s")[0];e--,t.verification=e+"s"},1e3))}})}}else e.showToast({icon:"none",title:"手机号码格式不正确"})},reg:function(){var t=this;if(t.pwd||t.parent_id||!t.verify||!t.username)if(/^1[3-9][0-9]\d{8,11}$/.test(t.accounts))if(t.pwd==t.pwds){var o={mobile:t.accounts,time:Date.parse(new Date)/1e3,username:t.username,parent_id:t.parent_id,password:t.pwd,repeat_password:t.pwds,sms_code:t.verify};""!=t.parent_id&&(o.parent_id=t.parent_id),e.request({url:t.APIconfig.api_root.login.register,method:"POST",data:o,success:function(t){console.log(n(t," at pages\\login\\reg.vue:164"));var o=t.data;console.log(n(o," at pages\\login\\reg.vue:166")),e.showToast({icon:"none",title:o.msg}),0==o.code&&setTimeout(function(){e.redirectTo({url:"../login/login"})},1500)}})}else e.showToast({icon:"none",title:"密码不一致！"});else e.showToast({icon:"none",title:"手机号码格式不正确"});else e.showToast({icon:"none",title:"请完整填写注册信息！"})}},onLoad:function(e){e.code&&(this.parent_dis=!0,this.parent_id=e.code)},onShow:function(){},watch:{verification:function(e,t){"-1s"==e&&(clearInterval(this.timer),this.verification="重新获取",this.disabled=!1)}}};t.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["4941","common/runtime","common/vendor"]]]);