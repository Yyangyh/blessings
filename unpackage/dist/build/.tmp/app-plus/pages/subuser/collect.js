(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/subuser/collect"],{"5e0e":function(t,e,r){"use strict";(function(t){r("9e19"),r("921b");i(r("66fd"));var e=i(r("d7a0"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,r("6e42")["createPage"])},"6cee":function(t,e,r){},"82f8":function(t,e,r){"use strict";r.r(e);var i=r("e83a"),o=r.n(i);for(var a in i)"default"!==a&&function(t){r.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},"9bb0":function(t,e,r){"use strict";var i=r("6cee"),o=r.n(i);o.a},d35d:function(t,e,r){"use strict";var i={"uni-load-more":()=>r.e("components/uni-load-more/uni-load-more").then(r.bind(null,"91e8"))},o=function(){var t=this,e=t.$createElement,r=(t._self._c,t.$api_img()),i=t.$api_img(),o=t.$api_img();t._isMounted||(t.e0=function(e){return t.service.returns()},t.e1=function(e){t.show=!t.show}),t.$mp.data=Object.assign({},{$root:{m0:r,m1:i,m2:o}})},a=[];r.d(e,"b",function(){return o}),r.d(e,"c",function(){return a}),r.d(e,"a",function(){return i})},d7a0:function(t,e,r){"use strict";r.r(e);var i=r("d35d"),o=r("82f8");for(var a in o)"default"!==a&&function(t){r.d(e,t,function(){return o[t]})}(a);r("9bb0");var n,s=r("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],n);e["default"]=c.exports},e83a:function(t,e,r){"use strict";(function(t,i){function o(t){return s(t)||n(t)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function n(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function s(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=function(){return r.e("components/uni-load-more/uni-load-more").then(r.bind(null,"91e8"))},u={components:{uniLoadMore:c},data:function(){return{cur:"",dataList:[],type:"",show:!1,checked:!1,more:"more",page:1,loadRecord:!0}},methods:{choise:function(e){t("log",e," at pages\\subuser\\collect.vue:96"),this.cur=e,this.dataList.length=0;var r={user_id:this.$store.state.user.id,page:1};1!=e&&2!=e||(r.type=e),this.Index(r)},Index:function(e){this.more="loading",3==this.cur?this.service.entire(this,"post",this.APIconfig.api_root.subuser.a_getFavorite,e,function(e,r){t("log",r," at pages\\subuser\\collect.vue:110"),r.data.forEach(function(t){return t.choice=!1});var i=e.dataList;if(i.push.apply(i,o(r.data)),e.dataList=i,t("log",e.dataList," at pages\\subuser\\collect.vue:115"),e.page+=1,e.more="more",r.data.length<10)return e.more="noMore",void(e.loadRecord=!1)}):4==this.cur?this.service.entire(this,"post",this.APIconfig.api_root.subuser.usergoodsfavor,e,function(e,r){t("log",r," at pages\\subuser\\collect.vue:126"),r.data.data.forEach(function(t){return t.choice=!1});var i=e.dataList;if(i.push.apply(i,o(r.data.data)),e.dataList=i,t("log",e.dataList," at pages\\subuser\\collect.vue:131"),e.page+=1,e.more="more",r.data.data.length<10)return e.more="noMore",void(e.loadRecord=!1)}):this.service.entire(this,"post",this.APIconfig.api_root.subuser.u_favor,e,function(e,r){t("log",r," at pages\\subuser\\collect.vue:142"),r.data.favor_list.forEach(function(t){return t.choice=!1});var i=e.dataList;if(i.push.apply(i,o(r.data.favor_list)),e.dataList=i,t("log",e.dataList," at pages\\subuser\\collect.vue:147"),e.page+=1,e.more="more",r.data.favor_list.length<10)return e.more="noMore",void(e.loadRecord=!1)})},allElection:function(){if(this.checked=!this.checked,1==this.checked){var t=!0,e=!1,r=void 0;try{for(var i,o=this.dataList[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value;a.choice=!0}}catch(f){e=!0,r=f}finally{try{t||null==o.return||o.return()}finally{if(e)throw r}}}else{var n=!0,s=!1,c=void 0;try{for(var u,l=this.dataList[Symbol.iterator]();!(n=(u=l.next()).done);n=!0){var d=u.value;d.choice=!1}}catch(f){s=!0,c=f}finally{try{n||null==l.return||l.return()}finally{if(s)throw c}}}},singleElection:function(t){if(this.dataList[t].choice=!this.dataList[t].choice,1==this.dataList[t].choice){var e=this.dataList.map(function(t){return t.choice});-1==e.indexOf(!1)&&(this.checked=!0)}if(0==this.dataList[t].choice){var r=!0,i=!1,o=void 0;try{for(var a,n=this.dataList[Symbol.iterator]();!(r=(a=n.next()).done);r=!0){var s=a.value;0==s.choice&&(this.checked=!1)}}catch(c){i=!0,o=c}finally{try{r||null==n.return||n.return()}finally{if(i)throw o}}}},deletes:function(){var e,r,o=[];if(3==this.cur){var a=!0,n=!1,s=void 0;try{for(var c,u=this.dataList[Symbol.iterator]();!(a=(c=u.next()).done);a=!0){var l=c.value;1==l.choice&&o.push(l.id)}}catch(A){n=!0,s=A}finally{try{a||null==u.return||u.return()}finally{if(n)throw s}}e=this.APIconfig.api_root.subuser.favoriteDel,r={user_id:this.$store.state.user.id,aids:o}}else if(4==this.cur){var d=!0,f=!1,h=void 0;try{for(var v,p=this.dataList[Symbol.iterator]();!(d=(v=p.next()).done);d=!0){var g=v.value;1==g.choice&&o.push(g.goods_id)}}catch(A){f=!0,h=A}finally{try{d||null==p.return||p.return()}finally{if(f)throw h}}e=this.APIconfig.api_root.subuser.cancelall,r={user_id:this.$store.state.user.id,goods_ids:o}}else{var m=!0,y=!1,b=void 0;try{for(var _,L=this.dataList[Symbol.iterator]();!(m=(_=L.next()).done);m=!0){var w=_.value;1==w.choice&&o.push(w.video_id)}}catch(A){y=!0,b=A}finally{try{m||null==L.return||L.return()}finally{if(y)throw b}}e=this.APIconfig.api_root.com_page.v_collect,r={userid:this.$store.state.user.id,video_id:o.join(","),c_type:0,mobile:this.$store.state.user.mobile}}this.service.entire(this,"post",e,r,function(e,r){if(t("log",r," at pages\\subuser\\collect.vue:225"),i.showToast({icon:"none",title:r.msg}),0==r.code){e.checked=!1;for(var o=e.dataList,a=o.length-1;a>=0;a--)1==o[a].choice&&o.splice(a,1)}})}},onReachBottom:function(){0!=this.loadRecord&&this.loadMore()},onLoad:function(){this.choise(1)}};e.default=u}).call(this,r("0de9")["default"],r("6e42")["default"])}},[["5e0e","common/runtime","common/vendor"]]]);