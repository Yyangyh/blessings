(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-reg"],{"0b1b":function(t,e,n){var i=n("5f80");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("33a763ca",i,!0,{sourceMap:!1,shadowMode:!1})},"15ea":function(t,e,n){"use strict";n.r(e);var i=n("4c1b"),a=n("3dce");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("7606");var s,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"5383d756",null,!1,i["a"],s);e["default"]=c.exports},"19c1":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:["titles"],data:function(){return{}},methods:{returns:function(){history.back()}}};e.default=i},"20fe":function(t,e,n){"use strict";n.r(e);var i=n("bb9a"),a=n("db07");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("2a10");var s,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"d459b51e",null,!1,i["a"],s);e["default"]=c.exports},"2a10":function(t,e,n){"use strict";var i=n("3de1"),a=n.n(i);a.a},"3dce":function(t,e,n){"use strict";n.r(e);var i=n("8e1a"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"3de1":function(t,e,n){var i=n("7822");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("2266c13a",i,!0,{sourceMap:!1,shadowMode:!1})},"4c1b":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"status_bar"}),i("returns",{attrs:{titles:t.title}}),i("v-uni-view",{staticClass:"ipt"},[i("v-uni-image",{attrs:{src:n("c7af2"),mode:""}}),i("v-uni-input",{attrs:{type:"text",value:"",maxlength:"11",placeholder:"输入手机号"},model:{value:t.accounts,callback:function(e){t.accounts=e},expression:"accounts"}})],1),i("v-uni-view",{staticClass:"ipt"},[i("v-uni-image",{attrs:{src:n("c7af2"),mode:""}}),i("v-uni-input",{attrs:{type:"text",value:"",maxlength:"8",placeholder:"请输入真实姓名"},model:{value:t.nickname,callback:function(e){t.nickname=e},expression:"nickname"}})],1),i("v-uni-view",{staticClass:"ipt"},[i("v-uni-input",{attrs:{type:"text",value:"",maxlength:"4",placeholder:"请输入验证码"},model:{value:t.verify,callback:function(e){t.verify=e},expression:"verify"}}),i("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.obtain()}}},[t._v(t._s(t.verification))])],1),i("v-uni-view",{staticClass:"ipt"},[i("v-uni-input",{attrs:{type:"text",disabled:t.parent_dis,value:"",maxlength:"8",placeholder:"请输入邀请码 ( 可选填 ) "},model:{value:t.parent_id,callback:function(e){t.parent_id=e},expression:"parent_id"}})],1),i("v-uni-view",{staticClass:"ipt"},[i("v-uni-image",{attrs:{src:n("5840"),mode:""}}),i("v-uni-input",{attrs:{type:"text",value:"",password:"treu",placeholder:"设置登录密码"},model:{value:t.pwd,callback:function(e){t.pwd=e},expression:"pwd"}})],1),i("v-uni-view",{staticClass:"ipt"},[i("v-uni-image",{attrs:{src:n("5840"),mode:""}}),i("v-uni-input",{attrs:{type:"text",value:"",password:"treu",placeholder:"确认密码"},model:{value:t.pwds,callback:function(e){t.pwds=e},expression:"pwds"}})],1),i("v-uni-view",{staticClass:"treaty"},[i("v-uni-label",{staticClass:"radio"},[i("v-uni-checkbox",{staticClass:"checkbox-3",staticStyle:{transform:"scale(0.8)"},attrs:{checked:t.checked},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checked=!t.checked}}})],1),t._v("我已阅读并了解"),i("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.treaty_show=!0}}},[t._v("【注册须知】")])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.treaty_show,expression:"treaty_show == true"}],staticClass:"Mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.treaty_show=!1}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.treaty_show,expression:"treaty_show == true"}],staticClass:"treaty_box"},[i("v-uni-image",{attrs:{src:n("ffea"),mode:"widthFix"}}),i("v-uni-view",{staticClass:"t_conent"},[i("v-uni-scroll-view",{staticClass:"box_conent",attrs:{"scroll-y":"true"}},[i("v-uni-rich-text",{attrs:{nodes:t.treaty}})],1),i("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.treaty_show=!1,t.checked=!0}}},[t._v("我已阅读")])],1)],1),i("v-uni-button",{staticClass:"red_button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.reg()}}},[t._v("注册")]),t.show?i("v-uni-button",{staticClass:"red_button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.href()}}},[t._v("应用下载")]):t._e()],1)},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},5840:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAlCAYAAAC+uuLPAAADaElEQVRYR7WYT4gcRRTGv9ezO+shOMZLAkswihIwf0CQzW51766t3gQJgQSCYQ8JOQQ8uIeAysaLGBHiQTwIiqB4EFZE9jJelMnqVA37hwTMhpBD/pEsiZqEBRUzPU5/UpJZZtuemerdTp0a6nvfr17Nq+rXI3AcJGVubm53s9kcF5FtAB4neZfkDQCVIAguOFpBegmnp6cLg4ODEwDeAvBMF/1Fkh/4vv+ViMTdfLtCjTGDAL4lubfX4lrzJHUcxwfGxsZudYrpCJ2dnd3W19dXA2DBWcfl/v7+YGho6HZaYCqUpGeM0QCGU4L+BlATkTsktwCwu/BIiu4npdQLIsLkXCrUGDNB8suEuE7yZKPR+CQMwz9bc5VKZdPAwMAkySkAxfYYETmolPrGCaq1tlmqNnE9juPx0dHRuU77rLV+EcD3CfCPvu+/3BNaLpcHSqXSXwAKLbGIvKOUerfXD2uMOUXSVnlr1KMo2hSG4T9rdiBppLV+AsC1xDbtUUqd7wWtVqvPi8hCu65QKGwdHh7+tSu0Vqttj+P4arvI87wnR0ZG1iwkbQGusf8rJNfANKg91yRvJua2+L7/20PL1BprrX8A8JJ9JvldEAT7exbSRjK15ktLS8WVlZV9ItKMomgmWURWk+v29iq01dPQelhcXCzV6/VnAdjq/TphcCiO49QrzQUkIvcBXAiC4I/VTKvV6tsicrLDdebi66K5bxlKqdNijDlC8nOXqDw0IvKaaK3PAnguD0NHD2Oh9wBsdgzIQ3bdQlcAlPJwc/TIDhWRM7YGRORGHMfbReQogFFHoJVlhp5SSk21v5htw1ar1T4kOekIzgRdUErtTesEbKehtT4nInscwO5QEXlDKfVRJ1NjzJsk388VCmDCtpedTLXWxwB8miuU5OkgCE50yfRjkq/nCgVwL4qiHWEY3kkaz8/Pb200GpcAPJo31Potep53oL2LMMY8bd+bAHY5ANd1ZGzQjO/7+1oArfUZAOOOwHVDy77vv9IG/RlA8LChv0dR9JRtuCuVymPFYvFKxrvb/Zy2Z0LyFwBlz/NeJWlf/FnG+qBZCCna/6BLAHZu0ChL+Dl50Kq8lyVqI1oRmZQHX9pfADi8ETPH2M+Wl5ePr7agWmt7uG3bsvrh5GjkImuSPNv6X+Jft0eplq0XPg4AAAAASUVORK5CYII="},"5f80":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-5383d756]{overflow:hidden}.uni-input-placeholder[data-v-5383d756]{color:#999}.ipt[data-v-5383d756]{display:-webkit-box;display:-webkit-flex;display:flex;margin:%?20?%;border-bottom:%?2?% solid #eee;padding:%?20?% %?20?%}.ipt uni-image[data-v-5383d756]{margin-right:%?20?%;width:%?35?%;height:%?45?%}.ipt uni-input[data-v-5383d756]{-webkit-box-flex:2;-webkit-flex-grow:2;flex-grow:2;font-size:%?30?%}.ipt uni-text[data-v-5383d756]{font-size:%?32?%;width:%?160?%;text-align:center;white-space:nowrap}.Mask[data-v-5383d756]{position:fixed;left:0;top:0;height:100%;width:100%;z-index:888;background:rgba(0,0,0,.6)}.treaty[data-v-5383d756]{background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?100?%;padding:0 %?20?%;font-size:%?30?%}.treaty uni-text[data-v-5383d756]{color:#1d74ff}.treaty_box[data-v-5383d756]{position:fixed;z-index:999;height:%?800?%;width:80%;background:#fff;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.treaty_box .t_conent[data-v-5383d756]{position:absolute;width:100%;height:%?800?%;top:0;left:0;z-index:100;box-sizing:border-box;padding:%?20?%}.treaty_box .t_conent .box_top[data-v-5383d756]{text-align:center;font-size:%?36?%}.treaty_box .t_conent .box_conent[data-v-5383d756]{margin:%?20?% 0;height:%?600?%}.treaty_box .t_conent uni-button[data-v-5383d756]{position:absolute;width:90%;height:%?80?%;bottom:%?20?%;font-size:%?30?%;left:50%;margin:0;background:#ff0;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.treaty_box uni-image[data-v-5383d756]{z-index:98;width:100%;position:absolute;top:0;left:0}uni-button[data-v-5383d756]{\n  /* width: 100%; */margin:%?34?% %?34?% %?30?% %?34?%}.test[data-v-5383d756]{text-align:center;font-size:%?32?%}.download[data-v-5383d756]{padding:%?20?%}.download .down_top[data-v-5383d756]{margin:%?20?% 0;font-size:%?34?%}.download .down_box[data-v-5383d756]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.download .down_box uni-view[data-v-5383d756]{width:%?240?%;height:%?80?%;line-height:%?80?%;text-align:center;background:#d80000;font-size:%?30?%;color:#fff;border-radius:%?20?%}',""]),t.exports=e},7606:function(t,e,n){"use strict";var i=n("0b1b"),a=n.n(i);a.a},7822:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.top[data-v-d459b51e]{height:%?105?%;padding:0 %?44?%;width:100%;box-sizing:border-box;position:fixed;top:0;z-index:99;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;font-weight:700;color:#333;background:#fff;box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1)}.top .top_enlarge[data-v-d459b51e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;width:%?180?%}.top uni-text[data-v-d459b51e]:nth-of-type(2){width:%?180?%;display:inline-block}.top uni-image[data-v-d459b51e]{height:%?40?%;width:%?40?%}',""]),t.exports=e},"8e1a":function(t,e,n){"use strict";var i=n("ee27");n("ac1f"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("20fe")),o={components:{returns:a.default},data:function(){return{title:"注册",verification:"获取验证码",disabled:!1,accounts:"",pwd:"",pwds:"",verify:"",username:"",nickname:"",parent_id:"",code:"",parent_dis:!1,treaty:"",treaty_show:!1,checked:!1,show:!1}},methods:{jump:function(t){uni.navigateTo({url:t})},obtain:function(){var t=this;if(/^1[3-9][0-9]\d{8,11}$/.test(t.accounts)){if(1!=t.disabled){var e={mobile:t.accounts,time:Date.parse(new Date)/1e3};uni.request({url:t.APIconfig.api_root.login.sendPhone,method:"POST",data:e,success:function(e){var n=e.data;uni.showToast({icon:"none",title:JSON.stringify(n.data.send_code)}),0==n.code&&(t.verification="60s",t.disabled=!0,t.timer=setInterval((function(){var e=t.verification.split("s")[0];e--,t.verification=e+"s"}),1e3),uni.showToast({icon:"none",title:n.data.send_code}))}})}}else uni.showToast({icon:"none",title:"手机号码格式不正确"})},reg:function(){var t=this;if(t.checked)if(t.pwd||t.parent_id||!t.verify||!t.nickname)if(/^1[3-9][0-9]\d{8,11}$/.test(t.accounts))if(t.pwd==t.pwds){var e={mobile:t.accounts,time:Date.parse(new Date)/1e3,username:t.accounts,nickname:t.nickname,parent_id:t.parent_id,password:t.pwd,repeat_password:t.pwds,sms_code:t.verify};""!=t.parent_id&&(e.parent_id=t.parent_id),uni.request({url:t.APIconfig.api_root.login.register,method:"POST",data:e,success:function(e){var n=e.data;t.show=!0,uni.showToast({icon:"none",title:n.msg}),0==n.code&&setTimeout((function(t,e){window.location.href="https://ios.8396048.com/0318/"}),1e3)}})}else uni.showToast({icon:"none",title:"密码不一致！"});else uni.showToast({icon:"none",title:"手机号码格式不正确"});else uni.showToast({icon:"none",title:"请完整填写注册信息！"});else uni.showToast({icon:"none",title:"请完整阅读注册须知并同意！"})},href:function(){window.location.href="https://ios.8396048.com/0318/"}},onLoad:function(t){this.show=!1,t.code&&(this.parent_dis=!0,this.parent_id=t.code)},onShow:function(){var t=this;uni.request({url:this.APIconfig.api_root.login.getProtocol,success:function(e){t.treaty=e.data.data.content}})},watch:{verification:function(t,e){"-1s"==t&&(clearInterval(this.timer),this.verification="重新获取",this.disabled=!1)}}};e.default=o},bb9a:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"top"},[n("v-uni-view",{staticClass:"top_enlarge",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.returns()}}},[n("v-uni-image",{attrs:{src:"/static/image/com_page/returns.png",mode:"widthFix"}})],1),n("v-uni-text",[t._v(t._s(t.titles))]),n("v-uni-text")],1)},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},c7af2:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAlCAYAAAC+uuLPAAADLUlEQVRYR72XTYwUVRDH/9W77AYlGS4SSdaYIAcgC4Egh331esNEowaVAwlfWTkYCBcOIMqBKJ5EL4Zo4sWDxkRFGEyMyokQmp10vwlmouEAngjCgQMYD6yJu4vTf/M2jFmZj+75cOpa71+/V69fvaoWdGFRFC0H8HexWPyzCzkkjyhJkhUkDwRBsJ3kRgCjD3V/AHAAzhYKhdL4+Ph8nnhtoaVSaWhsbOwYyXcBLG0XUERuisjBiYmJi1ngltBqtfrY3NxcCcDLWUEW+QngLVU91XaDzZwkpVKpfEtyRwfAxUtfV9UvWmmbZuqcO0jy0y6BXvYXgPWqeqNZjAaoc24pyVsAnugB6qVnVHVvLmgcx1Mi8lWPQC9/ICJPGmP8Df+PNWSaJMmXAF7rAxQkd1tr/WXMhP4CwNdiP+w9VT2RB/obgKf7QQTwsaoeyYTGcXxVRDb0CXpSVd/JhDrnfiD5aj+gIrLfGPN5Huhhkh/1AwpgdbNabbi95XJ55dDQkK/TJT2Cnapqrjr1i+I4/kREDvUIfVFVL+SGRlG0bGRk5CqAVd2AReQzY8yBVtqWXaZSqaxN0/QygBUdgqP5+fltxWJxtmOoF0xPTz81PDx8GoDNCT5VKBSOZzXzzMmBZOCc2wXgKIBngYZpw2f0o4h8YIzxr1mm5YU+/7CZ+4b+zCNRfyZ5ieT31tpERHwjb2stoVEUDY+Oju4neTzvsygi10n6jL9uB2/VxNeQ9N9yU9auW/jLaZruC8Pwdq6Scc69BMCPKo93CazLfk/T9JUwDK+0fQaTJHkBwPk+vEZ1zn2Sz1lrq4vB/x6vc241Se8s9Jjho/I7tVpt4+Tk5L26YwHqpz/nXLmDeux0X+dU1Zfdgi1AnXM7STaMFZ1Gbrc+TdMwDMN4MbRKcnM/IU1inVfVhT7tj9WXx6//M9CHTwGsVNW7kiTJmwA+HAAUIjJljDntod8A2DMIqJ9IrLVveOhPALYMCPqdtXaH/6bXSK4bBFRELhtjij5T/wsxNQgoybette9LtVpdMjs7uzUIgvpbO1Or1WpdbGImCIJ2upn6ZJjZT7uAZ0r+AfGiPDW8aCQjAAAAAElFTkSuQmCC"},db07:function(t,e,n){"use strict";n.r(e);var i=n("19c1"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},ffea:function(t,e,n){t.exports=n.p+"static/img/agreement.bdc41f63.jpg"}}]);