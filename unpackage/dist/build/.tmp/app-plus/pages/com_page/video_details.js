(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/com_page/video_details"],{"3ae8":function(t,e,i){"use strict";i.r(e);var a=i("3bea"),r=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=r.a},"3bea":function(t,e,i){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,o=d(i("a34a")),n=d(i("082c")),s=d(i("be83"));function d(t){return t&&t.__esModule?t:{default:t}}function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function u(t,e,i,a,r,o,n){try{var s=t[o](n),d=s.value}catch(c){return void i(c)}s.done?e(d):Promise.resolve(d).then(a,r)}function l(t){return function(){var e=this,i=arguments;return new Promise(function(a,r){var o=t.apply(e,i);function n(t){u(o,a,r,n,s,"next",t)}function s(t){u(o,a,r,n,s,"throw",t)}n(void 0)})}}var _=function(){return i.e("pages/common/load").then(i.bind(null,"22c2"))},h=function(){return i.e("pages/common/share").then(i.bind(null,"39dd"))},f=function(){return i.e("components/wangding-audioQuickPlay/index").then(i.bind(null,"c161"))},v=(r={components:{load:_,share:h,Audio:f},data:function(){return{id:"",type:"",data:"",video_data:"",video_content:"",test_show:0,catalog_data:"",play_url:"",indexs:"",show:!1,collects:"",tips_test:"",tips_img:"",coupon_data:"",coupon_show:!1,comments:"",recommend_video:"",play_store:!1,poster:"",record_time:0,load_show:!0,duration_time:"",receive_status:!1,initial_time:0,share_arr:{},lock:!1,status:2,currentTime:0,duration:100,videoContext:""}},computed:{is_free:function(){return 1!=this.video_data.is_free&&(0==this.video_data.is_free?-1==this.video_data.is_free_vip.indexOf(this.$store.state.user.level_id)&&1!=this.data.vorder.is_bay_all:void 0)},timer:function(){return p(this.currentTime)},overTimer:function(){return p(this.duration)}},onLoad:function(){var e=t.requireNativePlugin("Html5app-Music");a("log",e," at pages\\com_page\\video_details.vue:440")},created:function(){this.videoContext=t.createVideoContext("myAudio")},methods:{play:function(){this.status=2,this.videoContext.play()},stop:function(){this.videoContext.pause(),this.status=1},Au_timeupdate:function(t){if(!this.lock){var e,i;if(t.detail.detail?(e=t.detail.detail.currentTime,i=t.detail.detail.duration):(e=t.detail.currentTime,i=t.detail.duration),this.duration_time=t.detail.duration,(this.indexs||0===this.indexs)&&Math.ceil(t.detail.currentTime)%10==0&&Math.ceil(t.detail.currentTime)!=this.record_time){this.record_time=Math.ceil(t.detail.currentTime),this.record_play(t.detail.currentTime,t.detail.duration);var a=Math.round(Math.ceil(t.detail.currentTime)/Math.ceil(t.detail.duration)*100)/100;a>.8&&0==this.receive_status&&(this.receive_int(),this.receive_status=!0)}this.currentTime=e,this.duration=i}},sliderChange:function(t){this.videoContext.seek(t.detail.value)},sliderChanging:function(t){this.currentTime=t.detail.value},loadedmetadata:function(t){this.duration=t.detail.duration},pause:function(t){},tips:function(){this.$refs.share.share()},timeupdate:function(t){if(this.duration_time=t.detail.duration,(this.indexs||0===this.indexs)&&Math.ceil(t.detail.currentTime)%10==0&&Math.ceil(t.detail.currentTime)!=this.record_time){this.record_time=Math.ceil(t.detail.currentTime),this.record_play(t.detail.currentTime,t.detail.duration);var e=Math.round(Math.ceil(t.detail.currentTime)/Math.ceil(t.detail.duration)*100)/100;e>.8&&0==this.receive_status&&(this.receive_int(),this.receive_status=!0)}},record_play:function(t,e){var i=this;if(!isNaN(e))return new Promise(function(a,r){i.service.entire(i,"post",i.APIconfig.api_root.com_page.v_playProcess,{video_id:i.id,user_id:i.$store.state.user.id,section_id:i.catalog_data[i.indexs].id,play_time:t,s_process:e},function(t,e){t.duration_time=0,t.catalog_data[t.indexs].section_plan=e.section_plan,a("suc")})})},receive_int:function(){this.service.entire(this,"post",this.APIconfig.api_root.com_page.v_integral,{video_id:this.id,userid:this.$store.state.user.id,mobile:this.$store.state.user.mobile,section_id:this.catalog_data[this.indexs].id},function(t,e){})},play_start:function(t){0==this.play_store&&(this.play_store=!0,this.service.entire(this,"post",this.APIconfig.api_root.com_page.v_playCount,{video_id:this.id,userid:this.$store.state.user.id},function(t,e){}))},chiose_video:function(e,i,a){var r=this;0==i?t.showModal({title:"提示",content:"是否购买该视频？",success:function(t){t.confirm&&r.order_sn()}}):(this.indexs=e,this.initial_time=0,this.play_url=this.service.analysis_url(this.catalog_data[e].video_url))},play_end:function(){var e=l(o.default.mark(function e(i){var a;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a=function(e){var i=this;0==this.catalog_data[e].cou_is_free?t.showModal({title:"提示",content:"该视频需要购买才能继续观看，是否购买？",success:function(t){t.confirm?i.order_sn():t.cancel&&i.indexs--}}):this.play_url=this.service.analysis_url(this.catalog_data[e].video_url)},!this.indexs&&0!==this.indexs){e.next=13;break}return this,this.record_time=0,e.next=6,this.record_play(this.duration_time,this.duration_time);case 6:if(0==this.receive_status?this.receive_int():this.receive_status=!1,this.indexs!==this.catalog_data.length-1){e.next=9;break}return e.abrupt("return");case 9:this.indexs++,a.call(this,this.indexs),e.next=15;break;case 13:this.indexs=0,a.call(this,this.indexs);case 15:case"end":return e.stop()}},e,this)}));function i(t){return e.apply(this,arguments)}return i}(),collect:function(){var e=this.service.loading();this.service.entire(this,"post",this.APIconfig.api_root.com_page.v_collect,{video_id:this.id,userid:this.$store.state.user.id,mobile:this.$store.state.user.mobile,c_type:1==this.collects?0:1},function(i,a){t.hideLoading(),clearTimeout(e),i.tips_test=a.msg,i.tips_img=n.default,i.show=!0,setTimeout(function(){i.show=!1},1500),0==a.code&&(1==i.collects?i.collects=0:i.collects=1)})},play_integral:function(){var e=this.service.loading();this.service.entire(this,"post",this.APIconfig.api_root.com_page.v_integral,{video_id:this.id,userid:this.$store.state.user.id,mobile:this.$store.state.user.mobile,section_id:1},function(i,a){t.hideLoading(),clearTimeout(e),i.tips_test=a.msg,i.tips_img=s.default,i.show=!0,setTimeout(function(){i.show=!1},1500)})},getCoupon:function(e,i,a){i||this.service.entire(this,"post",this.APIconfig.api_root.com_page.v_getCoupon,{userid:this.$store.state.user.id,coupon_id:e},function(i,r){t.showToast({icon:"none",title:r.msg}),0==r.code&&(i.coupon_data[a].c_id=e)})},order_sn:function(e){var i=e||0;this.service.entire(this,"post",this.APIconfig.api_root.com_page.v_addOrder,{userid:this.$store.state.user.id,video_id:this.id,section_id:i},function(e,a){0==a.code?e.$jump("./v_order?id="+e.id+"&s_id="+i+"&order_sn="+a.data.order_sn+"&type="+e.type):t.showToast({icon:"none",title:a.msg})})},async_n:function(){var t=l(o.default.mark(function t(){return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.service.asy_entire(this,"post",this.APIconfig.api_root.com_page.VideoDetail,{video_id:this.id,userid:this.$store.state.user.id,mobile:this.$store.state.user.mobile},function(t,e){t.data=e.data,e.data.video.v_url?t.play_url=t.service.analysis_url(e.data.video.v_url):t.indexs=0,t.video_data=e.data.video,t.share_arr.Title=e.data.video.title,t.share_arr.Summary=e.data.video.long_title,t.share_arr.ImageUrl=t.$api_img()+e.data.video.v_pic;var i=e.data.video.video_content,a=new RegExp("<img","gi");i=i.replace(a,'<img style="max-width: 100%;"'),t.video_content=i,t.collects=e.data.video.collect,t.poster=e.data.video.screensaver,t.video_data.evaluate&&(t.video_data.stars_num=new Array(Number(t.video_data.evaluate)))});case 2:return t.next=4,this.service.asy_entire(this,"post",this.APIconfig.api_root.com_page.catalogue,{video_id:this.id,user_id:this.$store.state.user.id},function(t,e){var i=e.data.video_list;if(0==t.is_free){var a=!0,r=!1,o=void 0;try{for(var n,s=i[Symbol.iterator]();!(a=(n=s.next()).done);a=!0){var d=n.value;d.cou_is_free=!0}}catch(k){r=!0,o=k}finally{try{a||null==s.return||s.return()}finally{if(r)throw o}}}else{var c=!0,u=!1,l=void 0;try{for(var _,h=i[Symbol.iterator]();!(c=(_=h.next()).done);c=!0){var f=_.value;f.cou_is_free=!1}}catch(k){u=!0,l=k}finally{try{c||null==h.return||h.return()}finally{if(u)throw l}}if(1==t.data.vorder.is_bay_all){var v=!0,p=!1,m=void 0;try{for(var g,y=i[Symbol.iterator]();!(v=(g=y.next()).done);v=!0){var w=g.value;w.cou_is_free=!0}}catch(k){p=!0,m=k}finally{try{v||null==y.return||y.return()}finally{if(p)throw m}}}else if(0==t.data.vorder.is_bay_all){var x=!0,b=!1,$=void 0;try{for(var T,M=i[Symbol.iterator]();!(x=(T=M.next()).done);x=!0){var P=T.value;P.cou_is_free=!1}}catch(k){b=!0,$=k}finally{try{x||null==M.return||M.return()}finally{if(b)throw $}}}}if(e.data.video.new_play){t.indexs=e.play_index,t.play_url=t.service.analysis_url(i[e.play_index].video_url);var A=e.data.video.new_play.play_time;t.initial_time=A>10?A-5:A}t.catalog_data=i,t.load_show=!1});case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},onShow:function(){this.async_n(),this.service.entire(this,"post",this.APIconfig.api_root.com_page.v_evaluate,{userid:this.$store.state.user.id,video_id:this.id,page:1,limit:2},function(t,e){t.comments=e.data.data;var i=!0,a=!1,r=void 0;try{for(var o,n=t.comments[Symbol.iterator]();!(i=(o=n.next()).done);i=!0){var s=o.value;s.rating_num=new Array(Number(s.grade))}}catch(d){a=!0,r=d}finally{try{i||null==n.return||n.return()}finally{if(a)throw r}}})}},c(r,"onLoad",function(t){this.share_arr.Url="https://www.wufu-app.com/h5/#/pages/login/reg?code="+this.$store.state.user.invite_code,this.id=t.id,this.type=t.type,this.service.entire(this,"post",this.APIconfig.api_root.com_page.v_coupon,{userid:this.$store.state.user.id,mobile:this.$store.state.user.mobile},function(t,e){t.coupon_data=e.data.coupon}),this.service.entire(this,"post",this.APIconfig.api_root.com_page.v_recommend,{userid:this.$store.state.user.id,video_id:t.id,page:1,limit:2,type:1},function(t,e){t.recommend_video=e.data.video_list})}),c(r,"onHide",function(){this.videoContext.pause(),this.status=1}),c(r,"onUnload",function(){this.videoContext.pause(),this.status=1}),r);function p(t){if(0===t||"number"!==typeof t||isNaN(t)||t<0)return"00:00";var e=Math.floor(t/60),i=Math.floor(t%60);return e<10&&(e="0"+e),i<10&&(i="0"+i),e+":"+i}e.default=v}).call(this,i("6e42")["default"],i("0de9")["default"])},"61ba":function(t,e,i){"use strict";(function(t){i("7932"),i("921b");a(i("66fd"));var e=a(i("e08f"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},"7e87":function(t,e,i){"use strict";var a=i("923d"),r=i.n(a);r.a},"844d":function(t,e,i){"use strict";var a,r=function(){var t=this,e=t.$createElement,i=(t._self._c,t.$api_img()),a=t.$api_img(),r=t.__map(t.comments,function(e,i){var a=t.service.Test(e.created_at);return{$orig:t.__get_orig(e),g0:a}}),o=t.$api_img(),n=t.service.Test(Date.parse(new Date)/1e3),s=t.__map(t.coupon_data,function(e,i){var a=Number(e.where_order_price),r=Number(e.discount_value),o=t.service.Test(Date.parse(new Date)/1e3+3600*e.expire_hour),n=t.service.Test(e.fixed_time_start),s=t.service.Test(e.fixed_time_end);return{$orig:t.__get_orig(e),m3:a,m4:r,g2:o,g3:n,g4:s}}),d=Number(t.video_data.v_price);t._isMounted||(t.e0=function(e){return t.service.returns()},t.e1=function(e){t.lock=!0},t.e2=function(e){t.lock=!1},t.e3=function(e){t.test_show=0},t.e4=function(e){t.test_show=1},t.e5=function(e){t.test_show=2},t.e6=function(e){t.test_show=3},t.e7=function(e){t.coupon_show=!t.coupon_show},t.e8=function(e){t.coupon_show=!1},t.e9=function(e){t.coupon_show=!1}),t.$mp.data=Object.assign({},{$root:{m0:i,m1:a,l0:r,m2:o,g1:n,l1:s,m5:d}})},o=[];i.d(e,"b",function(){return r}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},"923d":function(t,e,i){},e08f:function(t,e,i){"use strict";i.r(e);var a=i("844d"),r=i("3ae8");for(var o in r)"default"!==o&&function(t){i.d(e,t,function(){return r[t]})}(o);i("7e87");var n,s=i("f0c5"),d=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],n);e["default"]=d.exports}},[["61ba","common/runtime","common/vendor"]]]);