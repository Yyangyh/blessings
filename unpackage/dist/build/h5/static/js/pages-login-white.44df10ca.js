(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-white"],{"22da":function(n,t,i){t=n.exports=i("2350")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* .content{\n\tposition: relative;\n} */.jump[data-v-58a6e18c]{height:%?50?%;line-height:%?50?%;width:%?90?%;border-radius:%?50?%;border:%?2?% solid #ccc;font-size:%?28?%;position:fixed;background:#fff;z-index:111;padding:0 %?10?%;top:calc(%?20?% + 0px);right:%?20?%}uni-view[data-v-58a6e18c]{text-align:center}uni-text[data-v-58a6e18c]{height:%?20?%;width:%?20?%;border-radius:50%;margin-right:%?10?%;background:#ce7e92;display:inline-block}",""])},"473b":function(n,t,i){"use strict";i.r(t);var e=i("6198"),a=i.n(e);for(var s in e)"default"!==s&&function(n){i.d(t,n,function(){return e[n]})}(s);t["default"]=a.a},"54bf":function(n,t,i){var e=i("22da");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var a=i("4f06").default;a("d3587aae",e,!0,{sourceMap:!1,shadowMode:!1})},"602e":function(n,t,i){"use strict";var e=i("54bf"),a=i.n(e);a.a},6198:function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{show:0,page_show:!1,timer:""}},onLoad:function(){var n=this;uni.getStorageInfoSync("state_user")?uni.switchTab({url:"../index/index"}):(n.page_show=!0,n.timer=setInterval(function(){n.show++},1500))},methods:{jumps:function(){uni.getStorageSync("state_token")?uni.switchTab({url:"../index/index"}):uni.redirectTo({url:"./login"})}},onHide:function(){clearInterval(this.timer)},onUnload:function(){clearInterval(this.timer)},watch:{show:function(n,t){4==n&&this.jumps()}}};t.default=e},"72ba":function(n,t,i){"use strict";var e,a=function(){var n=this,t=n.$createElement,i=n._self._c||t;return!1===n.page_show?i("v-uni-view",{staticClass:".content"},[i("v-uni-view",{staticClass:"jump",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.jumps.apply(void 0,arguments)}}},[n._v("跳过")]),1==n.show?i("v-uni-view",{staticClass:"back1"},[i("v-uni-image",{attrs:{src:"../../static/s1.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"spot_box"},[i("v-uni-text",{staticStyle:{background:"#D80000"}}),i("v-uni-text"),i("v-uni-text")],1)],1):n._e(),2==n.show?i("v-uni-view",{staticClass:"back2"},[i("v-uni-image",{attrs:{src:"../../static/s2.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"spot_box"},[i("v-uni-text"),i("v-uni-text",{staticStyle:{background:"#D80000"}}),i("v-uni-text")],1)],1):n._e(),3==n.show?i("v-uni-view",{staticClass:"back3"},[i("v-uni-image",{attrs:{src:"../../static/s3.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"spot_box"},[i("v-uni-text"),i("v-uni-text"),i("v-uni-text",{staticStyle:{background:"#D80000"}})],1)],1):n._e()],1):n._e()},s=[];i.d(t,"b",function(){return a}),i.d(t,"c",function(){return s}),i.d(t,"a",function(){return e})},"964d":function(n,t,i){"use strict";i.r(t);var e=i("72ba"),a=i("473b");for(var s in a)"default"!==s&&function(n){i.d(t,n,function(){return a[n]})}(s);i("602e");var u,o=i("f0c5"),c=Object(o["a"])(a["default"],e["b"],e["c"],!1,null,"58a6e18c",null,!1,e["a"],u);t["default"]=c.exports}}]);