(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/com_page/video_details"],{"05fe":function(e,t,i){"use strict";var o,a=function(){var e=this,t=e.$createElement,i=(e._self._c,e.$api_img()),o=e.$api_img(),a=e.__map(e.comments,function(t,i){var o=e.service.Test(t.created_at);return{$orig:e.__get_orig(t),g0:o}}),s=e.$api_img(),r=e.service.Test(Date.parse(new Date)/1e3),n=e.__map(e.coupon_data,function(t,i){var o=Number(t.where_order_price),a=Number(t.discount_value),s=e.service.Test(Date.parse(new Date)/1e3+3600*t.expire_hour),r=e.service.Test(t.fixed_time_start),n=e.service.Test(t.fixed_time_end);return{$orig:e.__get_orig(t),m3:o,m4:a,g2:s,g3:r,g4:n}});e._isMounted||(e.e0=function(t){return e.service.returns()},e.e1=function(t){e.test_show=0},e.e2=function(t){e.test_show=1},e.e3=function(t){e.test_show=2},e.e4=function(t){e.test_show=3},e.e5=function(t){e.coupon_show=!e.coupon_show},e.e6=function(t){e.coupon_show=!1,e.give_show=!1},e.e7=function(t){e.coupon_show=!1},e.e8=function(t){e.give_show=!1},e.e9=function(t){e.give_show=!0}),e.$mp.data=Object.assign({},{$root:{m0:i,m1:o,l0:a,m2:s,g1:r,l1:n}})},s=[];i.d(t,"b",function(){return a}),i.d(t,"c",function(){return s}),i.d(t,"a",function(){return o})},"3ae8":function(e,t,i){"use strict";i.r(t);var o=i("3bea"),a=i.n(o);for(var s in o)"default"!==s&&function(e){i.d(t,e,function(){return o[e]})}(s);t["default"]=a.a},"3bea":function(e,t,i){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("a34a")),s=n(i("082c")),r=n(i("be83"));function n(e){return e&&e.__esModule?e:{default:e}}function c(e,t,i,o,a,s,r){try{var n=e[s](r),c=n.value}catch(d){return void i(d)}n.done?t(c):Promise.resolve(c).then(o,a)}function d(e){return function(){var t=this,i=arguments;return new Promise(function(o,a){var s=e.apply(t,i);function r(e){c(s,o,a,r,n,"next",e)}function n(e){c(s,o,a,r,n,"throw",e)}r(void 0)})}}var u=function(){return i.e("pages/common/load").then(i.bind(null,"22c2"))},l={components:{load:u},data:function(){return{id:"",type:"",data:"",video_data:"",video_content:"",test_show:0,catalog_data:"",play_url:"",indexs:"",show:!1,collects:"",tips_test:"",tips_img:"",coupon_data:"",coupon_show:!1,comments:"",recommend_video:"",play_store:!1,poster:"",record_time:0,load_show:!0,duration_time:"",receive_status:!1,initial_time:0,give_show:!1}},computed:{is_free:function(){return 1!=this.video_data.is_free&&(0==this.video_data.is_free?-1==this.video_data.is_free_vip.indexOf(this.$store.state.user.level_id)&&1!=this.data.vorder.is_bay_all:void 0)}},methods:{pause:function(e){},timeupdate:function(e){if(this.duration_time=e.detail.duration,(this.indexs||0===this.indexs)&&Math.ceil(e.detail.currentTime)%10==0&&Math.ceil(e.detail.currentTime)!=this.record_time){this.record_time=Math.ceil(e.detail.currentTime),this.record_play(e.detail.currentTime,e.detail.duration);var t=Math.round(Math.ceil(e.detail.currentTime)/Math.ceil(e.detail.duration)*100)/100;t>.8&&0==this.receive_status&&(this.receive_int(),this.receive_status=!0)}},record_play:function(t,i){var o=this;if(!isNaN(i))return new Promise(function(a,s){o.service.entire(o,"post",o.APIconfig.api_root.com_page.v_playProcess,{video_id:o.id,user_id:o.$store.state.user.id,section_id:o.catalog_data[o.indexs].id,play_time:t,s_process:i},function(t,i){t.duration_time=0,e("log",t.indexs," at pages\\com_page\\video_details.vue:398"),t.catalog_data[t.indexs].section_plan=i.section_plan,a("suc")})})},receive_int:function(){this.service.entire(this,"post",this.APIconfig.api_root.com_page.v_integral,{video_id:this.id,userid:this.$store.state.user.id,mobile:this.$store.state.user.mobile,section_id:this.catalog_data[this.indexs].id},function(e,t){})},play_start:function(e){0==this.play_store&&(this.play_store=!0,this.service.entire(this,"post",this.APIconfig.api_root.com_page.v_playCount,{video_id:this.id,userid:this.$store.state.user.id},function(e,t){}))},chiose_video:function(e,t,i){var a=this;0==t?o.showModal({title:"提示",content:"是否购买该章节？",success:function(e){e.confirm&&a.order_sn(i)}}):(this.indexs=e,this.initial_time=0,this.play_url=this.service.analysis_url(this.catalog_data[e].video_url))},play_end:function(){var t=d(a.default.mark(function t(i){var s;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(s=function(e){var t=this;0==this.catalog_data[e].cou_is_free?o.showModal({title:"提示",content:"该章节为付费章节，是否购买该章节？",success:function(i){i.confirm&&t.order_sn(t.catalog_data[e].id)}}):this.play_url=this.service.analysis_url(this.catalog_data[e].video_url)},!this.indexs&&0!==this.indexs){t.next=14;break}return this,this.record_time=0,t.next=6,this.record_play(this.duration_time,this.duration_time);case 6:if(0==this.receive_status?this.receive_int():this.receive_status=!1,this.indexs!==this.catalog_data.length-1){t.next=9;break}return t.abrupt("return");case 9:this.indexs++,e("log",this.indexs," at pages\\com_page\\video_details.vue:469"),s.call(this,this.indexs),t.next=16;break;case 14:this.indexs=0,s.call(this,this.indexs);case 16:case"end":return t.stop()}},t,this)}));function i(e){return t.apply(this,arguments)}return i}(),collect:function(){var e=this.service.loading();this.service.entire(this,"post",this.APIconfig.api_root.com_page.v_collect,{video_id:this.id,userid:this.$store.state.user.id,mobile:this.$store.state.user.mobile,c_type:1==this.collects?0:1},function(t,i){o.hideLoading(),clearTimeout(e),t.tips_test=i.msg,t.tips_img=s.default,t.show=!0,setTimeout(function(){t.show=!1},1500),0==i.code&&(1==t.collects?t.collects=0:t.collects=1)})},play_integral:function(){var e=this.service.loading();this.service.entire(this,"post",this.APIconfig.api_root.com_page.v_integral,{video_id:this.id,userid:this.$store.state.user.id,mobile:this.$store.state.user.mobile,section_id:1},function(t,i){o.hideLoading(),clearTimeout(e),t.tips_test=i.msg,t.tips_img=r.default,t.show=!0,setTimeout(function(){t.show=!1},1500)})},getCoupon:function(t,i,a){e("log",t,i," at pages\\com_page\\video_details.vue:518"),i||this.service.entire(this,"post",this.APIconfig.api_root.com_page.v_getCoupon,{userid:this.$store.state.user.id,coupon_id:t},function(e,i){o.showToast({icon:"none",title:i.msg}),0==i.code&&(e.coupon_data[a].c_id=t)})},order_sn:function(e){var t=e||0;this.service.entire(this,"post",this.APIconfig.api_root.com_page.v_addOrder,{userid:this.$store.state.user.id,video_id:this.id,section_id:t},function(e,i){0==i.code?e.$jump("./v_order?id="+e.id+"&s_id="+t+"&order_sn="+i.data.order_sn):o.showToast({icon:"none",title:i.msg})})},async_n:function(){var t=d(a.default.mark(function t(){return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.service.asy_entire(this,"post",this.APIconfig.api_root.com_page.VideoDetail,{video_id:this.id,userid:this.$store.state.user.id,mobile:this.$store.state.user.mobile},function(e,t){e.data=t.data,t.data.video.v_url?e.play_url=e.service.analysis_url(t.data.video.v_url):e.indexs=0,e.video_data=t.data.video;var i=t.data.video.video_content,o=new RegExp("<img","gi");i=i.replace(o,'<img style="max-width: 100%;"'),e.video_content=i,e.collects=t.data.video.collect,e.poster=t.data.video.v_pic,e.video_data.evaluate&&(e.video_data.stars_num=new Array(Number(e.video_data.evaluate)))});case 2:return t.next=4,this.service.asy_entire(this,"post",this.APIconfig.api_root.com_page.catalogue,{video_id:this.id,user_id:this.$store.state.user.id},function(t,i){var o=i.data.video_list;if(0==t.is_free){var a=!0,s=!1,r=void 0;try{for(var n,c=o[Symbol.iterator]();!(a=(n=c.next()).done);a=!0){var d=n.value;d.cou_is_free=!0}}catch(k){s=!0,r=k}finally{try{a||null==c.return||c.return()}finally{if(s)throw r}}}else{var u=!0,l=!1,_=void 0;try{for(var h,v=o[Symbol.iterator]();!(u=(h=v.next()).done);u=!0){var f=h.value;f.cou_is_free=!1}}catch(k){l=!0,_=k}finally{try{u||null==v.return||v.return()}finally{if(l)throw _}}if(1==t.data.vorder.is_bay_all){var p=!0,m=!1,g=void 0;try{for(var y,w=o[Symbol.iterator]();!(p=(y=w.next()).done);p=!0){var x=y.value;x.cou_is_free=!0}}catch(k){m=!0,g=k}finally{try{p||null==w.return||w.return()}finally{if(m)throw g}}}else if(0==t.data.vorder.is_bay_all){var b=!0,$=!1,P=void 0;try{for(var T,A=o[Symbol.iterator]();!(b=(T=A.next()).done);b=!0){var I=T.value;-1==t.data.vorder.section_all.indexOf(I.id)&&0!=I.v_price||(I.cou_is_free=!0)}}catch(k){$=!0,P=k}finally{try{b||null==A.return||A.return()}finally{if($)throw P}}}}if(i.data.video.new_play){e("log",o[i.play_index]," at pages\\com_page\\video_details.vue:601"),t.indexs=i.play_index,t.play_url=t.service.analysis_url(o[i.play_index].video_url);var M=i.data.video.new_play.play_time;t.initial_time=M>10?M-10:M}t.catalog_data=o,t.load_show=!1});case 4:case"end":return t.stop()}},t,this)}));function i(){return t.apply(this,arguments)}return i}()},onShow:function(){this.async_n(),this.service.entire(this,"post",this.APIconfig.api_root.com_page.v_evaluate,{userid:this.$store.state.user.id,video_id:this.id,page:1,limit:2},function(e,t){e.comments=t.data.data;var i=!0,o=!1,a=void 0;try{for(var s,r=e.comments[Symbol.iterator]();!(i=(s=r.next()).done);i=!0){var n=s.value;n.rating_num=new Array(Number(n.grade))}}catch(c){o=!0,a=c}finally{try{i||null==r.return||r.return()}finally{if(o)throw a}}})},onLoad:function(e){this.id=e.id,this.type=e.type,this.service.entire(this,"post",this.APIconfig.api_root.com_page.v_coupon,{userid:this.$store.state.user.id,mobile:this.$store.state.user.mobile},function(e,t){e.coupon_data=t.data.coupon}),this.service.entire(this,"post",this.APIconfig.api_root.com_page.v_recommend,{userid:this.$store.state.user.id,video_id:e.id,page:1,limit:2,type:1},function(e,t){e.recommend_video=t.data.video_list})}};t.default=l}).call(this,i("0de9")["default"],i("6e42")["default"])},"61ba":function(e,t,i){"use strict";(function(e){i("7932"),i("921b");o(i("66fd"));var t=o(i("e08f"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("6e42")["createPage"])},"7e87":function(e,t,i){"use strict";var o=i("923d"),a=i.n(o);a.a},"923d":function(e,t,i){},e08f:function(e,t,i){"use strict";i.r(t);var o=i("05fe"),a=i("3ae8");for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);i("7e87");var r,n=i("f0c5"),c=Object(n["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);t["default"]=c.exports}},[["61ba","common/runtime","common/vendor"]]]);