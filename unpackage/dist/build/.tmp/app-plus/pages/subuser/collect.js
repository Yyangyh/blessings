(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/subuser/collect"],{5602:function(t,e,i){"use strict";i.r(e);var r=i("8a6b"),o=i("7a3e");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("cafc");var n,c=i("f0c5"),s=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],n);e["default"]=s.exports},"59cd":function(t,e,i){"use strict";(function(t,r){function o(t){return c(t)||n(t)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function n(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(){return i.e("components/uni-load-more/uni-load-more").then(i.bind(null,"ee48"))},u={components:{uniLoadMore:s},data:function(){return{cur:"",dataList:[],type:"",show:!1,checked:!1,more:"more",page:1,loadRecord:!0}},methods:{choise:function(t){this.cur=t,this.dataList.length=0;var e={user_id:this.$store.state.user.id,page:1};1!=t&&2!=t||(e.type=t),this.Index(e)},Index:function(t){this.more="loading",3==this.cur?this.service.entire(this,"post",this.APIconfig.api_root.subuser.a_getFavorite,t,function(t,e){e.data.forEach(function(t){return t.choice=!1});var i=t.dataList;if(i.push.apply(i,o(e.data)),t.dataList=i,t.page+=1,t.more="more",e.data.length<10)return t.more="noMore",void(t.loadRecord=!1)}):4==this.cur?this.service.entire(this,"post",this.APIconfig.api_root.subuser.usergoodsfavor,t,function(t,e){e.data.data.forEach(function(t){return t.choice=!1});var i=t.dataList;if(i.push.apply(i,o(e.data.data)),t.dataList=i,t.page+=1,t.more="more",e.data.data.length<10)return t.more="noMore",void(t.loadRecord=!1)}):this.service.entire(this,"post",this.APIconfig.api_root.subuser.u_favor,t,function(t,e){e.data.favor_list.forEach(function(t){return t.choice=!1});var i=t.dataList;if(i.push.apply(i,o(e.data.favor_list)),t.dataList=i,t.page+=1,t.more="more",e.data.favor_list.length<10)return t.more="noMore",void(t.loadRecord=!1)})},allElection:function(){if(this.checked=!this.checked,1==this.checked){var t=!0,e=!1,i=void 0;try{for(var r,o=this.dataList[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var a=r.value;a.choice=!0}}catch(f){e=!0,i=f}finally{try{t||null==o.return||o.return()}finally{if(e)throw i}}}else{var n=!0,c=!1,s=void 0;try{for(var u,l=this.dataList[Symbol.iterator]();!(n=(u=l.next()).done);n=!0){var d=u.value;d.choice=!1}}catch(f){c=!0,s=f}finally{try{n||null==l.return||l.return()}finally{if(c)throw s}}}},singleElection:function(t){if(this.dataList[t].choice=!this.dataList[t].choice,1==this.dataList[t].choice){var e=this.dataList.map(function(t){return t.choice});-1==e.indexOf(!1)&&(this.checked=!0)}if(0==this.dataList[t].choice){var i=!0,r=!1,o=void 0;try{for(var a,n=this.dataList[Symbol.iterator]();!(i=(a=n.next()).done);i=!0){var c=a.value;0==c.choice&&(this.checked=!1)}}catch(s){r=!0,o=s}finally{try{i||null==n.return||n.return()}finally{if(r)throw o}}}},deletes:function(){var e,i,o=[];if(3==this.cur){var a=!0,n=!1,c=void 0;try{for(var s,u=this.dataList[Symbol.iterator]();!(a=(s=u.next()).done);a=!0){var l=s.value;1==l.choice&&o.push(l.id)}}catch(A){n=!0,c=A}finally{try{a||null==u.return||u.return()}finally{if(n)throw c}}e=this.APIconfig.api_root.subuser.favoriteDel,i={user_id:this.$store.state.user.id,aids:o}}else if(4==this.cur){var d=!0,f=!1,h=void 0;try{for(var v,p=this.dataList[Symbol.iterator]();!(d=(v=p.next()).done);d=!0){var m=v.value;1==m.choice&&o.push(m.goods_id)}}catch(A){f=!0,h=A}finally{try{d||null==p.return||p.return()}finally{if(f)throw h}}e=this.APIconfig.api_root.subuser.cancelall,i={user_id:this.$store.state.user.id,goods_ids:o}}else{var y=!0,g=!1,b=void 0;try{for(var _,L=this.dataList[Symbol.iterator]();!(y=(_=L.next()).done);y=!0){var w=_.value;1==w.choice&&o.push(w.video_id)}}catch(A){g=!0,b=A}finally{try{y||null==L.return||L.return()}finally{if(g)throw b}}e=this.APIconfig.api_root.com_page.v_collect,i={userid:this.$store.state.user.id,video_id:o.join(","),c_type:0,mobile:this.$store.state.user.mobile}}this.service.entire(this,"post",e,i,function(e,i){if(t("log",i," at pages\\subuser\\collect.vue:218"),r.showToast({icon:"none",title:i.msg}),0==i.code){e.checked=!1;for(var o=e.dataList,a=o.length-1;a>=0;a--)1==o[a].choice&&o.splice(a,1)}})}},onReachBottom:function(){0!=this.loadRecord&&this.loadMore()},onLoad:function(){this.choise(1)}};e.default=u}).call(this,i("0de9")["default"],i("6e42")["default"])},"7a3e":function(t,e,i){"use strict";i.r(e);var r=i("59cd"),o=i.n(r);for(var a in r)"default"!==a&&function(t){i.d(e,t,function(){return r[t]})}(a);e["default"]=o.a},"8a6b":function(t,e,i){"use strict";var r={"uni-load-more":()=>i.e("components/uni-load-more/uni-load-more").then(i.bind(null,"ee48"))},o=function(){var t=this,e=t.$createElement,i=(t._self._c,t.$api_img()),r=t.$api_img(),o=t.$api_img();t._isMounted||(t.e0=function(e){return t.service.returns()},t.e1=function(e){t.show=!t.show}),t.$mp.data=Object.assign({},{$root:{m0:i,m1:r,m2:o}})},a=[];i.d(e,"b",function(){return o}),i.d(e,"c",function(){return a}),i.d(e,"a",function(){return r})},"9de8":function(t,e,i){},cafc:function(t,e,i){"use strict";var r=i("9de8"),o=i.n(r);o.a},effb:function(t,e,i){"use strict";(function(t){i("7932"),i("921b");r(i("66fd"));var e=r(i("5602"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])}},[["effb","common/runtime","common/vendor"]]]);