(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"4d25":function(t,e,n){"use strict";n.r(e);var i=n("8771"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},8771:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("4795"));n("2f62");function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,i,o,a,s){try{var r=t[a](s),c=r.value}catch(u){return void n(u)}r.done?e(c):Promise.resolve(c).then(i,o)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var s=t.apply(e,n);function r(t){a(s,i,o,r,c,"next",t)}function c(t){a(s,i,o,r,c,"throw",t)}r(void 0)}))}}var r=function(){Promise.all([n.e("common/vendor"),n.e("pages/common/index_search")]).then(function(){return resolve(n("98bf"))}.bind(null,n)).catch(n.oe)},c={components:{search:r},data:function(){return{swiper_list:"",indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,class_top:[],class_list:"",verification:"获取验证码",accounts:"",pwd:"",re_pwd:"",disabled:!1,verify:"",eject_show:"",eject:"",openid:"",swiperOptoins:{indicatorDots:!0,displayMultipleItems:1,interval:3e3}}},onLoad:function(){t.getStorageSync("openid")&&(this.openid=t.getStorageSync("openid"),t.hideTabBar())},onShow:function(){if(""==t.getStorageSync("notice"))this.eject_show=!0;else{var e=(new Date).getTime();e-t.getStorageSync("start_notice")>6e5?(this.eject_show=!0,t.setStorageSync("start_notice",e)):this.eject_show=!1}this.Index_requ()},methods:{jump:function(e){t.switchTab({url:e})},Tjump:function(e){e&&t.navigateTo({url:"../com_page/video_details?"+e})},Index_requ:function(){var t=this;return s(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.service.asy_entire(t,"post",t.APIconfig.api_root.index.index,{userid:t.$store.state.user.id},(function(t,e){t.swiper_list=e.data.slide,0==t.class_top.length&&t.class_top.push(e.data.class_list[0]),t.class_list=e.data.class_list}));case 2:return e.next=4,t.service.asy_entire(t,"post",t.APIconfig.api_root.index.advertise,{},(function(t,e){t.eject=e.data}));case 4:return e.next=6,t.service.asy_entire(t,"post",t.APIconfig.api_root.common.UnRead,{user_id:t.$store.state.user.id},(function(t,e){t.$store.commit("notice_status",e.data.count)}));case 6:case"end":return e.stop()}}),e)})))()},close:function(){this.eject_show=!1;var e=(new Date).getTime();t.getStorageSync("start_notice")||t.setStorageSync("start_notice",e),t.setStorageSync("notice",1)},eject_jump:function(e,n){n&&("shangpin"==e?t.navigateTo({url:"../subhome/details?id="+n}):"shipin"==e?t.navigateTo({url:"../com_page/video_details?"+n}):"huodong"==e?t.navigateTo({url:"../activity/particulars?id="+n}):"pintuan"==e?t.navigateTo({url:"../subhome/threehome/group_products?id="+n}):t.navigateTo({url:"../subindex/article?id="+n}))},temporary:function(){t.showToast({icon:"none",title:"暂未开放！"})},config:function(){if(this.pwd==this.re_pwd){var e={sms_code:this.verify,mobile:this.accounts,password:this.pwd,openid:this.openid,nickname:t.getStorageSync("nickname"),parent_id:0};this.service.entire(this,"post",this.APIconfig.api_root.index.bindPhone,e,(function(e,n){t.showToast({icon:"none",title:n.msg}),0==n.code&&(e.openid="",e.$store.commit("state_user",n.data.memberInfo),e.$store.commit("state_token",n.token),t.setStorageSync("state_user",n.data.memberInfo),t.setStorageSync("state_token",n.token),t.removeStorageSync("openid"),t.showTabBar(),e.Index_requ())}))}else t.showToast({icon:"none",title:"输入密码不一致！"})},obtain:function(){var e=this;if(!/^1[3-9][0-9]\d{8,11}$/.test(e.accounts))return t.showToast({icon:"none",title:"手机号码格式不正确"}),!0;if(1!=e.disabled){var n={mobile:e.accounts,time:Date.parse(new Date)/1e3};t.request({url:e.APIconfig.api_root.login.sendPhone,method:"POST",data:n,success:function(n){var i=n.data;t.showToast({icon:"none",title:JSON.stringify(i.data.send_code)}),0==i.code&&(e.verification="60s",e.disabled=!0,e.timer=setInterval((function(){var t=e.verification.split("s")[0];t--,e.verification=t+"s"}),1e3),t.showToast({icon:"none",title:i.data.send_code}))}})}}},onTabItemTap:function(t){},watch:{verification:function(t,e){"-1s"==t&&(clearInterval(this.timer),this.verification="重新获取",this.disabled=!1)}}};e.default=c}).call(this,n("6e42")["default"])},"8d6d":function(t,e,n){"use strict";n.r(e);var i=n("fe8c"),o=n("4d25");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("f0c7");var s,r=n("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=c.exports},ad48:function(t,e,n){"use strict";(function(t){n("7932"),n("921b");i(n("66fd"));var e=i(n("8d6d"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},b85f:function(t,e,n){},f0c7:function(t,e,n){"use strict";var i=n("b85f"),o=n.n(i);o.a},fe8c:function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$api_img()),i=t.__map(t.class_top,(function(e,n){var i=t.$api_img(),o=t.__map(e.video_list,(function(e,n){var i=Number(e.v_price),o=t.service.NumEllipsis(e.view);return{$orig:t.__get_orig(e),m2:i,g0:o}}));return{$orig:t.__get_orig(e),m1:i,l0:o}})),o=t.$api_img(),a=t.__map(t.class_list,(function(e,n){var i=t.service.NumEllipsis(e.showCount);return{$orig:t.__get_orig(e),g1:i}})),s=t.$api_img();t.$mp.data=Object.assign({},{$root:{m0:n,l1:i,m3:o,l2:a,m4:s}})},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))}},[["ad48","common/runtime","common/vendor"]]]);