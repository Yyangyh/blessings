(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/com_page/share_video"],{"596c":function(t,e,n){"use strict";(function(t){n("7932"),n("921b");i(n("66fd"));var e=i(n("acfc"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"5ef7":function(t,e,n){"use strict";n.r(e);var i=n("d331"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},9060:function(t,e,n){},a0df:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.service.NumEllipsis(t.video_data.view)),i=t.$api_img(),a=t.$api_img(),o=t.__map(t.comments,(function(e,n){var i=t.service.Test(e.created_at);return{$orig:t.__get_orig(e),g1:i}})),r=t.$api_img(),u=t.__map(t.recommend_video,(function(e,n){var i=Number(e.v_price),a=Number(e.v_price),o=t.service.NumEllipsis(e.view);return{$orig:t.__get_orig(e),m3:i,m4:a,g2:o}}));t._isMounted||(t.e0=function(e){return t.service.returns()},t.e1=function(e){t.lock=!0},t.e2=function(e){t.lock=!1},t.e3=function(e){t.test_show=1},t.e4=function(e){t.test_show=0},t.e5=function(e){t.coupon_show=!1}),t.$mp.data=Object.assign({},{$root:{g0:n,m0:i,m1:a,l0:o,m2:r,l1:u}})},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},acfc:function(t,e,n){"use strict";n.r(e);var i=n("a0df"),a=n("5ef7");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("d60c");var r,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},d331:function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("4795"));function o(t){return t&&t.__esModule?t:{default:t}}function r(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=u(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a,o=!0,r=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return o=t.done,t},e:function(t){r=!0,a=t},f:function(){try{o||null==i.return||i.return()}finally{if(r)throw a}}}}function u(t,e){if(t){if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function s(t,e,n,i,a,o,r){try{var u=t[o](r),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(i,a)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var o=t.apply(e,n);function r(t){s(o,i,a,r,u,"next",t)}function u(t){s(o,i,a,r,u,"throw",t)}r(void 0)}))}}var l=function(){n.e("pages/common/load").then(function(){return resolve(n("22c2"))}.bind(null,n)).catch(n.oe)},f=function(){n.e("components/wangding-audioQuickPlay/index").then(function(){return resolve(n("c161"))}.bind(null,n)).catch(n.oe)},v=t.getBackgroundAudioManager(),_={components:{load:l,Audio:f},data:function(){return{id:"",type:"",data:"",video_data:"",video_content:"",test_show:1,catalog_data:"",play_url:"",indexs:"",show:!1,tips_test:"",tips_img:"",coupon_data:"",coupon_show:!1,comments:"",recommend_video:"",play_store:!1,poster:"",record_time:0,load_show:!0,duration_time:"",initial_time:0,code:"",lock:!1,status:2,currentTime:0,duration:100,videoContext:""}},computed:{is_free:function(){return 1!=this.video_data.is_free&&(0==this.video_data.is_free||void 0)},timer:function(){return h(this.currentTime)},overTimer:function(){return h(Number(this.video_data.avinfo))}},methods:{play:function(){this.status=2,this.videoContext.play()},stop:function(){this.videoContext.pause(),this.status=1},sliderChange:function(t){v.seek(t.detail.value)},sliderChanging:function(t){this.currentTime=t.detail.value},loadedmetadata:function(t){this.duration=t.detail.duration},pause:function(t){},tips:function(){},Au_timeupdate:function(t){var e,n;this.lock||(t.detail.detail?(e=t.detail.detail.currentTime,n=t.detail.detail.duration):(e=t.detail.currentTime,n=t.detail.duration),this.duration_time=t.detail.duration,this.currentTime=e,this.duration=n)},chiose_video:function(e,n,i){var a=this;0==n?t.showModal({title:"提示",content:"是否购买该视频？",success:function(t){t.confirm&&a.$jump("../login/reg?code="+a.code)}}):(this.indexs=e,this.initial_time=0,this.play_url=this.service.analysis_url(this.catalog_data[e].video_url))},play_end:function(e){var n=this;return d(a.default.mark((function e(){var i;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=function(e){var n=this;0==this.catalog_data[e].cou_is_free?t.showModal({title:"提示",content:"该视频需要购买才能继续观看，是否购买？",success:function(t){t.confirm?n.$jump("../login/reg?code="+n.code):t.cancel&&n.indexs--}}):this.play_url=this.service.analysis_url(this.catalog_data[e].video_url)},!n.indexs&&0!==n.indexs){e.next=10;break}if(n,n.record_time=0,n.indexs!==n.catalog_data.length-1){e.next=6;break}return e.abrupt("return");case 6:n.indexs++,i.call(n,n.indexs),e.next=12;break;case 10:n.indexs=0,i.call(n,n.indexs);case 12:case"end":return e.stop()}}),e)})))()},initAudio:function(){var t=this,e=v;e.paused&&e.play(),e.onEnded((function(){t.status=1,t.play_end.call(this)}))},async_n:function(){var t=this;return d(a.default.mark((function e(){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.service.asy_entire(t,"post",t.APIconfig.api_root.com_page.ShareVideoDetail,{video_id:t.id},(function(t,e){t.data=e.data,e.data.v_url?t.play_url=t.service.analysis_url(e.data.v_url):t.indexs=0,t.video_data=e.data,1==t.video_data.is_online&&(t.test_show=0);var n=e.data.video_content,i=new RegExp("<img","gi");t.video_content=n.replace(i,'<img style="max-width: 100%;"'),t.poster=e.data.screensaver,t.video_data.evaluate&&(t.video_data.stars_num=new Array(Number(t.video_data.evaluate)))}));case 2:return e.next=4,t.service.asy_entire(t,"post",t.APIconfig.api_root.com_page.ShareCatalogue,{video_id:t.id,user_id:t.$store.state.user.id},(function(t,e){var n=e.data.video_list;if(0==t.is_free){var i,a=r(n);try{for(a.s();!(i=a.n()).done;){var o=i.value;o.cou_is_free=!0}}catch(d){a.e(d)}finally{a.f()}}else{var u,c=r(n);try{for(c.s();!(u=c.n()).done;){var s=u.value;s.cou_is_free=!1}}catch(d){c.e(d)}finally{c.f()}}t.catalog_data=n,t.load_show=!1}));case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.videoContext=t.createVideoContext("myAudio");var e=navigator.userAgent.toLowerCase();"micromessenger"==e.match(/MicroMessenger/i)&&(this.status=1)},onShow:function(){},onReady:function(t){},onLoad:function(t){i("log",t," at pages\\com_page\\share_video.vue:544"),this.id=t.id,this.type=t.type,t.code&&(this.code=t.code),this.async_n()},onHide:function(){this.videoContext.pause(),this.status=1},onUnload:function(){this.videoContext.pause(),this.status=1}};function h(t){if(0===t||"number"!==typeof t||isNaN(t)||t<0)return"00:00";var e=Math.floor(t/60),n=Math.floor(t%60);return e<10&&(e="0"+e),n<10&&(n="0"+n),e+":"+n}e.default=_}).call(this,n("6e42")["default"],n("0de9")["default"])},d60c:function(t,e,n){"use strict";var i=n("9060"),a=n.n(i);a.a}},[["596c","common/runtime","common/vendor"]]]);