(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"0533":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"bg"},[a("v-uni-view",{},[a("v-uni-image",{staticClass:"back",attrs:{src:n("affb"),mode:"scaleToFill"}}),a("v-uni-view",{},[a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"logo"},[a("v-uni-view",{},[t._v("五福账号登录")])],1),a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"logo_ipt"},[a("v-uni-text",[a("v-uni-image",{attrs:{src:n("c7af"),mode:"widthFix"}})],1),a("v-uni-input",{attrs:{type:"text",value:"",placeholder:"用户名/手机号"},model:{value:t.accounts,callback:function(e){t.accounts=e},expression:"accounts"}})],1),a("v-uni-view",{staticClass:"logo_ipt"},[a("v-uni-text",[a("v-uni-image",{attrs:{src:n("5840"),mode:"widthFix"}})],1),a("v-uni-input",{attrs:{type:"text",password:"true",value:"",placeholder:"请输入您的密码"},model:{value:t.pwd,callback:function(e){t.pwd=e},expression:"pwd"}})],1),a("v-uni-view",{staticClass:"logo_test"},[a("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jump("./reg")}}},[t._v("注册账号")]),a("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jump("./forget")}}},[t._v("忘记密码")])],1),a("v-uni-button",{staticClass:"red_button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.login()}}},[t._v("登录")]),a("v-uni-view",{staticClass:"message"},[a("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jump("./message_login")}}},[t._v("短信验证码登录")])],1)],1),a("v-uni-view",{staticClass:"agreement",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jump("./agreement")}}},[t._v("《用户协议和隐私政策》")])],1)],1)],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.treaty_show,expression:"treaty_show == true"}],staticClass:"Mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.treaty_show=!1}}}),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.treaty_show,expression:"treaty_show == true"}],staticClass:"treaty_box"},[a("v-uni-image",{attrs:{src:n("ffea"),mode:"widthFix"}}),a("v-uni-view",{staticClass:"t_conent"},[a("v-uni-scroll-view",{staticClass:"box_conent",attrs:{"scroll-y":"true"}},[a("v-uni-rich-text",{attrs:{nodes:t.treaty}})],1),a("v-uni-view",{staticClass:"all_btn"},[a("v-uni-button",{staticClass:"refuse",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.treaty_show=!1}}},[t._v("拒绝")]),a("v-uni-button",{staticClass:"agree",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.agree.apply(void 0,arguments)}}},[t._v("同意")])],1)],1)],1)],1)},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},"4f49":function(t,e,n){"use strict";n.r(e);var a=n("0533"),i=n("9c96");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("8727");var s,r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"5e65a887",null,!1,a["a"],s);e["default"]=c.exports},5840:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAlCAYAAAC+uuLPAAADaElEQVRYR7WYT4gcRRTGv9ezO+shOMZLAkswihIwf0CQzW51766t3gQJgQSCYQ8JOQQ8uIeAysaLGBHiQTwIiqB4EFZE9jJelMnqVA37hwTMhpBD/pEsiZqEBRUzPU5/UpJZZtuemerdTp0a6nvfr17Nq+rXI3AcJGVubm53s9kcF5FtAB4neZfkDQCVIAguOFpBegmnp6cLg4ODEwDeAvBMF/1Fkh/4vv+ViMTdfLtCjTGDAL4lubfX4lrzJHUcxwfGxsZudYrpCJ2dnd3W19dXA2DBWcfl/v7+YGho6HZaYCqUpGeM0QCGU4L+BlATkTsktwCwu/BIiu4npdQLIsLkXCrUGDNB8suEuE7yZKPR+CQMwz9bc5VKZdPAwMAkySkAxfYYETmolPrGCaq1tlmqNnE9juPx0dHRuU77rLV+EcD3CfCPvu+/3BNaLpcHSqXSXwAKLbGIvKOUerfXD2uMOUXSVnlr1KMo2hSG4T9rdiBppLV+AsC1xDbtUUqd7wWtVqvPi8hCu65QKGwdHh7+tSu0Vqttj+P4arvI87wnR0ZG1iwkbQGusf8rJNfANKg91yRvJua2+L7/20PL1BprrX8A8JJ9JvldEAT7exbSRjK15ktLS8WVlZV9ItKMomgmWURWk+v29iq01dPQelhcXCzV6/VnAdjq/TphcCiO49QrzQUkIvcBXAiC4I/VTKvV6tsicrLDdebi66K5bxlKqdNijDlC8nOXqDw0IvKaaK3PAnguD0NHD2Oh9wBsdgzIQ3bdQlcAlPJwc/TIDhWRM7YGRORGHMfbReQogFFHoJVlhp5SSk21v5htw1ar1T4kOekIzgRdUErtTesEbKehtT4nInscwO5QEXlDKfVRJ1NjzJsk388VCmDCtpedTLXWxwB8miuU5OkgCE50yfRjkq/nCgVwL4qiHWEY3kkaz8/Pb200GpcAPJo31Potep53oL2LMMY8bd+bAHY5ANd1ZGzQjO/7+1oArfUZAOOOwHVDy77vv9IG/RlA8LChv0dR9JRtuCuVymPFYvFKxrvb/Zy2Z0LyFwBlz/NeJWlf/FnG+qBZCCna/6BLAHZu0ChL+Dl50Kq8lyVqI1oRmZQHX9pfADi8ETPH2M+Wl5ePr7agWmt7uG3bsvrh5GjkImuSPNv6X+Jft0eplq0XPg4AAAAASUVORK5CYII="},6524:function(t,e,n){var a=n("9cad");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("d1801f1a",a,!0,{sourceMap:!1,shadowMode:!1})},8727:function(t,e,n){"use strict";var a=n("6524"),i=n.n(a);i.a},9595:function(t,e,n){"use strict";var a=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("ffea")),o={data:function(){return{accounts:"",pwd:"",show:0,treaty_show:!1,treaty:"",agreement:i.default}},methods:{jump:function(t){uni.navigateTo({url:t})},login:function(){var t=this;if(t.accounts)if(t.pwd){uni.showLoading({title:"登录中",mask:!0});var e=setTimeout((function(){uni.hideLoading(),uni.showToast({icon:"none",title:"网络请求错误，请稍后再试"})}),1e4);uni.request({url:t.APIconfig.api_root.login.login,method:"POST",dataType:"json",data:{username:t.accounts,password:t.pwd,time:Date.parse(new Date)/1e3},success:function(n){uni.hideLoading(),clearTimeout(e);var a=n.data;uni.showToast({icon:"none",title:a.msg}),0==a.code&&(uni.removeStorageSync("openid"),uni.removeStorageSync("nickname"),t.$store.commit("state_user",a.data.memberInfo),t.$store.commit("state_token",a.token),uni.setStorageSync("state_user",a.data.memberInfo),uni.setStorageSync("state_token",a.token),setTimeout((function(){uni.switchTab({url:"../index/index"})}),1e3))}})}else uni.showToast({icon:"none",title:"请输入密码"});else uni.showToast({icon:"none",title:"请输入用户名或者手机号"})},agree:function(){},wx:function(){var t=this;uni.getStorageSync("wx")?this.agree.call(this):t.treaty_show=!0}},onLoad:function(){var t=this;uni.request({url:this.APIconfig.api_root.login.getProtocol,success:function(e){t.treaty=e.data.data.content}})},onShow:function(){this.$store.commit("Amodify_login",0)}};e.default=o},"9c96":function(t,e,n){"use strict";n.r(e);var a=n("9595"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"9cad":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-5e65a887]{padding-top:0}.bg[data-v-5e65a887]{\n  /* height: 100%;\n\twidth: 100%; */}.bg .back[data-v-5e65a887]{height:100%;width:100%;position:fixed;z-index:1}.content[data-v-5e65a887]{width:100%;position:absolute;z-index:99}.uni-input-placeholder[data-v-5e65a887]{color:#c5c5c5}.logo[data-v-5e65a887]{text-align:center;font-size:%?42?%;color:#fff;padding-top:%?90?%;margin:%?54?% 0}.logo uni-image[data-v-5e65a887]{width:%?258?%;height:%?202?%}.box[data-v-5e65a887]{padding-top:%?86?%;background:#fff;border-radius:%?20?%;margin-left:8%;width:84%;height:%?550?%}.box .logo_ipt[data-v-5e65a887]{display:-webkit-box;display:-webkit-flex;display:flex;\n  /* justify-content: center; */-webkit-align-content:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#f5f5f5;border-radius:%?10?%;height:%?100?%;font-size:%?28?%;margin:0 %?38?% %?30?% %?38?%}.box .logo_ipt uni-text[data-v-5e65a887]{margin:0 %?20?%}.box .logo_ipt uni-input[data-v-5e65a887]{-webkit-box-flex:2;-webkit-flex-grow:2;flex-grow:2;font-size:%?28?%}.box .logo_ipt uni-image[data-v-5e65a887]{width:%?30?%;height:%?42?%}.logo_test[data-v-5e65a887]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?44?%;font-size:%?24?%;color:#666}uni-button[data-v-5e65a887]{\n  /* width: 88%; */margin:%?30?% %?40?%}.message[data-v-5e65a887]{text-align:center;color:#000;font-size:%?30?%}.other[data-v-5e65a887]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?28?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:%?50?%}.other .line[data-v-5e65a887]{width:%?120?%;height:%?1?%;border-bottom:%?1?% solid #fff}.other .other_test[data-v-5e65a887]{margin:0 %?20?%;color:#fff;font-size:%?24?%}.mode[data-v-5e65a887]{text-align:center;margin-top:%?20?%}.mode uni-image[data-v-5e65a887]{width:%?80?%;height:%?80?%}.agreement[data-v-5e65a887]{margin-top:%?30?%;color:#fff;font-size:%?28?%;text-align:center}.Mask[data-v-5e65a887]{position:fixed;left:0;top:0;height:100%;width:100%;z-index:888;background:rgba(0,0,0,.6)}.treaty_box[data-v-5e65a887]{position:fixed;z-index:999;height:%?800?%;width:80%;background:#fff;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.treaty_box uni-image[data-v-5e65a887]{z-index:98;width:100%;position:absolute;top:0;left:0}.treaty_box .t_conent[data-v-5e65a887]{position:absolute;width:100%;height:%?800?%;top:0;left:0;z-index:100;padding:%?20?%;box-sizing:border-box}.treaty_box .t_conent .box_top[data-v-5e65a887]{text-align:center;font-size:%?36?%}.treaty_box .t_conent .box_conent[data-v-5e65a887]{margin:%?20?% 0;height:%?600?%}.treaty_box .t_conent uni-button[data-v-5e65a887]{width:45%;font-size:%?30?%;margin:0}.treaty_box .t_conent .all_btn[data-v-5e65a887]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:absolute;width:90%;height:%?80?%;left:50%;bottom:%?20?%;margin:0;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.treaty_box .t_conent .all_btn .agree[data-v-5e65a887]{background:#ff0;color:#000}',""]),t.exports=e},affb:function(t,e,n){t.exports=n.p+"static/img/back.7db9ff86.png"},c7af:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAlCAYAAAC+uuLPAAADLUlEQVRYR72XTYwUVRDH/9W77AYlGS4SSdaYIAcgC4Egh331esNEowaVAwlfWTkYCBcOIMqBKJ5EL4Zo4sWDxkRFGEyMyokQmp10vwlmouEAngjCgQMYD6yJu4vTf/M2jFmZj+75cOpa71+/V69fvaoWdGFRFC0H8HexWPyzCzkkjyhJkhUkDwRBsJ3kRgCjD3V/AHAAzhYKhdL4+Ph8nnhtoaVSaWhsbOwYyXcBLG0XUERuisjBiYmJi1ngltBqtfrY3NxcCcDLWUEW+QngLVU91XaDzZwkpVKpfEtyRwfAxUtfV9UvWmmbZuqcO0jy0y6BXvYXgPWqeqNZjAaoc24pyVsAnugB6qVnVHVvLmgcx1Mi8lWPQC9/ICJPGmP8Df+PNWSaJMmXAF7rAxQkd1tr/WXMhP4CwNdiP+w9VT2RB/obgKf7QQTwsaoeyYTGcXxVRDb0CXpSVd/JhDrnfiD5aj+gIrLfGPN5Huhhkh/1AwpgdbNabbi95XJ55dDQkK/TJT2Cnapqrjr1i+I4/kREDvUIfVFVL+SGRlG0bGRk5CqAVd2AReQzY8yBVtqWXaZSqaxN0/QygBUdgqP5+fltxWJxtmOoF0xPTz81PDx8GoDNCT5VKBSOZzXzzMmBZOCc2wXgKIBngYZpw2f0o4h8YIzxr1mm5YU+/7CZ+4b+zCNRfyZ5ieT31tpERHwjb2stoVEUDY+Oju4neTzvsygi10n6jL9uB2/VxNeQ9N9yU9auW/jLaZruC8Pwdq6Scc69BMCPKo93CazLfk/T9JUwDK+0fQaTJHkBwPk+vEZ1zn2Sz1lrq4vB/x6vc241Se8s9Jjho/I7tVpt4+Tk5L26YwHqpz/nXLmDeux0X+dU1Zfdgi1AnXM7STaMFZ1Gbrc+TdMwDMN4MbRKcnM/IU1inVfVhT7tj9WXx6//M9CHTwGsVNW7kiTJmwA+HAAUIjJljDntod8A2DMIqJ9IrLVveOhPALYMCPqdtXaH/6bXSK4bBFRELhtjij5T/wsxNQgoybette9LtVpdMjs7uzUIgvpbO1Or1WpdbGImCIJ2upn6ZJjZT7uAZ0r+AfGiPDW8aCQjAAAAAElFTkSuQmCC"},ffea:function(t,e,n){t.exports=n.p+"static/img/agreement.bdc41f63.jpg"}}]);