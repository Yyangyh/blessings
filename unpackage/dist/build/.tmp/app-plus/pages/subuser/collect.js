(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/subuser/collect"],{"2f4e":function(t,e,i){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{cur:"",dataList:"",type:"",show:!1,checked:!1}},methods:{choise:function(e){this.cur=e;var i={user_id:this.$store.state.user.id,page:1,type:e};console.log(t(i," at pages\\subuser\\collect.vue:78")),this.Index(i)},Index:function(e){this.service.entire(this,"post",this.APIconfig.api_root.subuser.u_favor,e,function(e,i){console.log(t(i," at pages\\subuser\\collect.vue:83")),i.data.favor_list.forEach(function(t){return t.choice=!1}),e.dataList=i.data.favor_list})},allElection:function(){if(this.checked=!this.checked,1==this.checked){var t=!0,e=!1,i=void 0;try{for(var o,n=this.dataList[Symbol.iterator]();!(t=(o=n.next()).done);t=!0){var a=o.value;a.choice=!0}}catch(d){e=!0,i=d}finally{try{t||null==n.return||n.return()}finally{if(e)throw i}}}else{var r=!0,c=!1,s=void 0;try{for(var u,l=this.dataList[Symbol.iterator]();!(r=(u=l.next()).done);r=!0){var f=u.value;f.choice=!1}}catch(d){c=!0,s=d}finally{try{r||null==l.return||l.return()}finally{if(c)throw s}}}},singleElection:function(t){if(this.dataList[t].choice=!this.dataList[t].choice,1==this.dataList[t].choice){var e=this.dataList.map(function(t){return t.choice});-1==e.indexOf(!1)&&(this.checked=!0)}if(0==this.dataList[t].choice){var i=!0,o=!1,n=void 0;try{for(var a,r=this.dataList[Symbol.iterator]();!(i=(a=r.next()).done);i=!0){var c=a.value;0==c.choice&&(this.checked=!1)}}catch(s){o=!0,n=s}finally{try{i||null==r.return||r.return()}finally{if(o)throw n}}}},deletes:function(){var e=[],o=!0,n=!1,a=void 0;try{for(var r,c=this.dataList[Symbol.iterator]();!(o=(r=c.next()).done);o=!0){var s=r.value;console.log(t(s," at pages\\subuser\\collect.vue:118")),1==s.choice&&e.push(s.video_id)}}catch(u){n=!0,a=u}finally{try{o||null==c.return||c.return()}finally{if(n)throw a}}console.log(t(this.dataList," at pages\\subuser\\collect.vue:122")),this.service.entire(this,"post",this.APIconfig.api_root.com_page.v_collect,{userid:this.$store.state.user.id,video_id:e.join(","),c_type:0,mobile:this.$store.state.user.mobile},function(e,o){if(console.log(t(o," at pages\\subuser\\collect.vue:129")),i.showToast({icon:"none",title:o.msg}),0==o.code)for(var n=e.dataList,a=n.length-1;a>=0;a--)1==n[a].choice&&n.splice(a,1)})}},onLoad:function(){this.choise(1)}};e.default=o}).call(this,i("0de9")["default"],i("6e42")["default"])},3469:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){return t.service.returns()},t.e1=function(e){t.show=!t.show},t.e2=function(e){t.cur=3},t.e3=function(e){t.cur=4})},n=[];i.d(e,"a",function(){return o}),i.d(e,"b",function(){return n})},"59b8":function(t,e,i){},"7e98":function(t,e,i){"use strict";(function(t){i("aa56"),i("921b");o(i("66fd"));var e=o(i("edcb"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},b0a6:function(t,e,i){"use strict";var o=i("59b8"),n=i.n(o);n.a},e999:function(t,e,i){"use strict";i.r(e);var o=i("2f4e"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);e["default"]=n.a},edcb:function(t,e,i){"use strict";i.r(e);var o=i("3469"),n=i("e999");for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);i("b0a6");var r=i("2877"),c=Object(r["a"])(n["default"],o["a"],o["b"],!1,null,null,null);e["default"]=c.exports}},[["7e98","common/runtime","common/vendor"]]]);