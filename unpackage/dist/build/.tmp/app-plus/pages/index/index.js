(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"4d25":function(t,e,i){"use strict";i.r(e);var n=i("8771"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},8771:function(t,e,i){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i("2f62");var o=function(){return Promise.all([i.e("common/vendor"),i.e("pages/common/index_search")]).then(i.bind(null,"98bf"))},a={components:{search:o},data:function(){return{swiper_list:"",indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,class_top:[],class_list:"",verification:"获取验证码",accounts:"",pwd:"",re_pwd:"",disabled:!1,verify:"",eject_show:"",eject:"",openid:""}},onLoad:function(){t.getStorageSync("openid")&&(this.openid=t.getStorageSync("openid"),t.hideTabBar()),n("log",this.$store.state.user," at pages\\index\\index.vue:199"),this.service.entire(this,"post",this.APIconfig.api_root.index.advertise,{},function(t,e){n("log",e," at pages\\index\\index.vue:203"),t.eject=e.data})},onShow:function(){if(""==t.getStorageSync("notice"))this.eject_show=!0;else{var e=(new Date).getTime();e-t.getStorageSync("start_notice")>432e5?(this.eject_show=!0,t.setStorageSync("start_notice",e)):this.eject_show=!1}this.service.notice.call(this),this.service.entire(this,"post",this.APIconfig.api_root.index.index,{userid:this.$store.state.user.id},function(t,e){t.swiper_list=e.data.slide,0==t.class_top.length&&t.class_top.push(e.data.class_list[0]),t.class_list=e.data.class_list})},methods:{jump:function(e){t.switchTab({url:e})},close:function(){this.eject_show=!1;var e=(new Date).getTime();t.getStorageSync("start_notice")||t.setStorageSync("start_notice",e),t.setStorageSync("notice",1)},eject_jump:function(e,i){i&&("shangpin"==e?t.navigateTo({url:"../subhome/details?id="+i}):"shipin"==e?t.navigateTo({url:"../com_page/video_details?type=1&id="+i}):"huodong"==e?t.navigateTo({url:"../activity/particulars?id="+i}):"pintuan"==e?t.navigateTo({url:"../subhome/threehome/group_products?id="+i}):t.navigateTo({url:"../subindex/article?id="+i}))},temporary:function(){t.showToast({icon:"none",title:"暂未开放！"})},config:function(){this.pwd==this.re_pwd?this.service.entire(this,"post",this.APIconfig.api_root.index.bindPhone,{sms_code:this.verify,mobile:this.accounts,password:this.pwd,openid:this.openid},function(e,i){t.showToast({icon:"none",title:i.msg}),0==i.code&&(e.openid="",t.removeStorageSync("openid"),t.showTabBar())}):t.showToast({icon:"none",title:"输入密码不一致！"})},obtain:function(){var e=this;if(!/^1[3-9][0-9]\d{8,11}$/.test(e.accounts))return t.showToast({icon:"none",title:"手机号码格式不正确"}),!0;if(1!=e.disabled){var i={mobile:e.accounts,time:Date.parse(new Date)/1e3};t.request({url:e.APIconfig.api_root.login.sendPhone,method:"POST",data:i,success:function(i){n("log",i," at pages\\index\\index.vue:322");var o=i.data;n("log",o," at pages\\index\\index.vue:324"),t.showToast({icon:"none",title:JSON.stringify(o.data.send_code)}),0==o.code&&(e.verification="60s",e.disabled=!0,e.timer=setInterval(function(){var t=e.verification.split("s")[0];t--,e.verification=t+"s"},1e3),t.showToast({icon:"none",title:o.data.send_code}))}})}}},onTabItemTap:function(t){n("log",t," at pages\\index\\index.vue:347")},watch:{verification:function(t,e){"-1s"==t&&(clearInterval(this.timer),this.verification="重新获取",this.disabled=!1)}}};e.default=a}).call(this,i("6e42")["default"],i("0de9")["default"])},"8d6d":function(t,e,i){"use strict";i.r(e);var n=i("fa42"),o=i("4d25");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("f0c7");var s,c=i("f0c5"),r=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=r.exports},ad48:function(t,e,i){"use strict";(function(t){i("7932"),i("921b");n(i("66fd"));var e=n(i("8d6d"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},b9af:function(t,e,i){},f0c7:function(t,e,i){"use strict";var n=i("b9af"),o=i.n(n);o.a},fa42:function(t,e,i){"use strict";var n,o=function(){var t=this,e=t.$createElement,i=(t._self._c,t.$api_img()),n=t.__map(t.class_top,function(e,i){var n=t.$api_img();return{$orig:t.__get_orig(e),m1:n}}),o=t.$api_img(),a=t.$api_img();t.$mp.data=Object.assign({},{$root:{m0:i,l0:n,m2:o,m3:a}})},a=[];i.d(e,"b",function(){return o}),i.d(e,"c",function(){return a}),i.d(e,"a",function(){return n})}},[["ad48","common/runtime","common/vendor"]]]);