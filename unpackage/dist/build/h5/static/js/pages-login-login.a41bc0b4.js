(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"1be9":function(t,e,i){"use strict";i.r(e);var a=i("3914"),n=i("cd0a");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("322e");var s,c=i("f0c5"),d=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"fcd8a1d0",null,!1,a["a"],s);e["default"]=d.exports},"322e":function(t,e,i){"use strict";var a=i("6739"),n=i.n(a);n.a},3914:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"bg"},[i("v-uni-view",{},[i("v-uni-image",{staticClass:"back",attrs:{src:"../../static/back.png",mode:"scaleToFill"}}),i("v-uni-view",{},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"logo"},[i("v-uni-view",{},[t._v("五福账号登录")])],1),i("v-uni-view",{staticClass:"box"},[i("v-uni-view",{staticClass:"logo_ipt"},[i("v-uni-text",[i("v-uni-image",{attrs:{src:"../../static/image/login/user.png",mode:"widthFix"}})],1),i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"用户名/手机号"},model:{value:t.accounts,callback:function(e){t.accounts=e},expression:"accounts"}})],1),i("v-uni-view",{staticClass:"logo_ipt"},[i("v-uni-text",[i("v-uni-image",{attrs:{src:"../../static/image/login/pwd.png",mode:"widthFix"}})],1),i("v-uni-input",{attrs:{type:"text",password:"true",value:"",placeholder:"请输入您的密码"},model:{value:t.pwd,callback:function(e){t.pwd=e},expression:"pwd"}})],1),i("v-uni-view",{staticClass:"logo_test"},[i("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jump("./reg")}}},[t._v("注册账号")]),i("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jump("./forget")}}},[t._v("忘记密码")])],1),i("v-uni-button",{staticClass:"red_button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.login()}}},[t._v("登录")]),i("v-uni-view",{staticClass:"message"},[i("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jump("./message_login")}}},[t._v("短信验证码登录")])],1)],1),i("v-uni-view",{staticClass:"other"},[i("v-uni-text",{staticClass:"line"}),i("v-uni-text",{staticClass:"other_test"},[t._v("其他登录方式")]),i("v-uni-text",{staticClass:"line"})],1),i("v-uni-view",{staticClass:"mode"},[i("v-uni-image",{attrs:{src:"../../static/image/login/wx.png",mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.wx()}}})],1)],1)],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.treaty_show,expression:"treaty_show == true"}],staticClass:"Mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.treaty_show=!1}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.treaty_show,expression:"treaty_show == true"}],staticClass:"treaty_box"},[i("v-uni-view",{staticClass:"box_top"},[t._v("注册须知")]),i("v-uni-scroll-view",{staticClass:"box_conent",attrs:{"scroll-y":"true"}},[i("v-uni-rich-text",{attrs:{nodes:t.treaty}})],1),i("v-uni-view",{staticClass:"all_btn"},[i("v-uni-button",{staticClass:"refuse",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.treaty_show=!1}}},[t._v("拒绝")]),i("v-uni-button",{staticClass:"agree",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.agree.apply(void 0,arguments)}}},[t._v("同意")])],1)],1)],1)},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},4782:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("4917");var a={data:function(){return{accounts:"",pwd:"",show:0,treaty_show:!1,treaty:""}},methods:{jump:function(t){uni.navigateTo({url:t})},login:function(){var t=this;if(t.accounts)if(t.pwd){uni.showLoading({title:"登录中",mask:!0});var e=setTimeout(function(){uni.hideLoading(),uni.showToast({icon:"none",title:"网络请求错误，请稍后再试"})},1e4);console.log(t.APIconfig.api_root.login.login),uni.request({url:t.APIconfig.api_root.login.login,method:"POST",dataType:"json",data:{username:t.accounts,password:t.pwd,time:Date.parse(new Date)/1e3},success:function(i){uni.hideLoading(),clearTimeout(e),console.log(i);var a=i.data;uni.showToast({icon:"none",title:a.msg}),0==a.code&&(console.log(a.data.memberInfo),uni.removeStorageSync("openid"),uni.removeStorageSync("nickname"),t.$store.commit("state_user",a.data.memberInfo),t.$store.commit("state_token",a.token),uni.setStorageSync("state_user",a.data.memberInfo),uni.setStorageSync("state_token",a.token),setTimeout(function(){uni.switchTab({url:"../index/index"})},1e3))}})}else uni.showToast({icon:"none",title:"请输入密码"});else uni.showToast({icon:"none",title:"请输入用户名或者手机号"})},agree:function(){},wx:function(){var t=this;uni.getStorageSync("wx")?this.agree.call(this):t.treaty_show=!0}},onLoad:function(){var t=this;uni.request({url:this.APIconfig.api_root.login.getProtocol,success:function(e){t.treaty=e.data.data.content}})},onShow:function(){var t=navigator.userAgent.toLowerCase();"micromessenger"==t.match(/MicroMessenger/i)?this.show=0:this.show=1}};e.default=a},6739:function(t,e,i){var a=i("7b51");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("795a58da",a,!0,{sourceMap:!1,shadowMode:!1})},"7b51":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-fcd8a1d0]{padding-top:0}.bg[data-v-fcd8a1d0]{\n\t/* height: 100%;\n\twidth: 100%; */}.bg .back[data-v-fcd8a1d0]{height:100%;width:100%;position:fixed;z-index:1}.content[data-v-fcd8a1d0]{width:100%;position:absolute;z-index:99}.uni-input-placeholder[data-v-fcd8a1d0]{color:#c5c5c5}.logo[data-v-fcd8a1d0]{text-align:center;font-size:%?42?%;color:#fff;padding-top:%?90?%;margin:%?54?% 0}.logo uni-image[data-v-fcd8a1d0]{width:%?258?%;height:%?202?%}.box[data-v-fcd8a1d0]{padding-top:%?86?%;background:#fff;border-radius:%?20?%;margin-left:8%;width:84%;height:%?550?%}.box .logo_ipt[data-v-fcd8a1d0]{display:-webkit-box;display:-webkit-flex;display:flex;\n\t/* justify-content: center; */-webkit-align-content:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#f5f5f5;border-radius:%?10?%;height:%?100?%;font-size:%?28?%;margin:0 %?38?% %?30?% %?38?%}.box .logo_ipt uni-text[data-v-fcd8a1d0]{margin:0 %?20?%}.box .logo_ipt uni-input[data-v-fcd8a1d0]{-webkit-box-flex:2;-webkit-flex-grow:2;flex-grow:2;font-size:%?28?%}.box .logo_ipt uni-image[data-v-fcd8a1d0]{width:%?30?%;height:%?42?%}.logo_test[data-v-fcd8a1d0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?44?%;font-size:%?24?%;color:#666}uni-button[data-v-fcd8a1d0]{\n\t\n\t/* width: 88%; */margin:%?30?% %?40?%}.message[data-v-fcd8a1d0]{text-align:center;color:#000;font-size:%?30?%}.other[data-v-fcd8a1d0]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?28?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:%?50?%}.other .line[data-v-fcd8a1d0]{width:%?120?%;height:%?1?%;border-bottom:%?1?% solid #fff}.other .other_test[data-v-fcd8a1d0]{margin:0 %?20?%;color:#fff;font-size:%?24?%}.mode[data-v-fcd8a1d0]{text-align:center;margin-top:%?20?%}.mode uni-image[data-v-fcd8a1d0]{width:%?80?%;height:%?80?%}.Mask[data-v-fcd8a1d0]{position:fixed;left:0;top:0;height:100%;width:100%;z-index:888;background:rgba(0,0,0,.6)}.treaty_box[data-v-fcd8a1d0]{position:fixed;z-index:999;height:%?780?%;padding:%?20?%;box-sizing:border-box;width:80%;background:#fff;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.treaty_box .box_top[data-v-fcd8a1d0]{text-align:center;font-size:%?36?%}.treaty_box .box_conent[data-v-fcd8a1d0]{margin:%?20?% 0;height:%?560?%}.treaty_box uni-button[data-v-fcd8a1d0]{width:45%;font-size:%?30?%;margin:0}.treaty_box .all_btn[data-v-fcd8a1d0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:absolute;width:90%;height:%?80?%;left:50%;bottom:%?20?%;margin:0;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.treaty_box .all_btn .agree[data-v-fcd8a1d0]{background:#d80000;color:#fff}",""])},cd0a:function(t,e,i){"use strict";i.r(e);var a=i("4782"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a}}]);