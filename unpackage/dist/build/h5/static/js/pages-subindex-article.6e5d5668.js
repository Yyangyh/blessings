(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-subindex-article"],{"0f04":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"status_bar"}),i("share",{ref:"share",attrs:{datas:t.share_arr}}),i("v-uni-view",{staticClass:"top"},[i("v-uni-image",{attrs:{src:"../../static/image/com_page/returns.png",mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.service.returns()}}}),i("v-uni-text",[t._v("文章")]),i("v-uni-image",{attrs:{src:"../../static/image/subhome/share.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tips.apply(void 0,arguments)}}})],1),i("hr"),i("v-uni-view",[i("v-uni-view",{staticClass:"title_top"},[i("v-uni-view",{staticClass:"t_left"},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.dataList.title))]),i("v-uni-view",{staticClass:"times"},[t._v(t._s(t.dataList.add_time))]),i("v-uni-view",{staticClass:" graded"},[i("v-uni-view",{staticClass:"start"},t._l(t.dataList.rating_num,function(t,e){return i("v-uni-image",{key:e,attrs:{src:"../../static/image/subhome/start.png",mode:"widthFix"}})}),1),i("v-uni-view",{staticClass:"time"},[t._v(t._s(t.dataList.grade))]),i("v-uni-view",{staticClass:"time"},[t._v(t._s(t.dataList.access_count)+"次观看")])],1)],1),-1==t.dataList.is_lighten?i("v-uni-image",{staticClass:"t_right",attrs:{src:"/static/image/com_page/collect.png",mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.collection.apply(void 0,arguments)}}}):1==t.dataList.is_lighten?i("v-uni-image",{staticClass:"t_right",attrs:{src:"../../static/image/com_page/collect_HL.png",mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.collection.apply(void 0,arguments)}}}):t._e()],1),t.video_content?i("v-uni-view",{staticClass:"rich"},[i("v-uni-rich-text",{attrs:{nodes:t.video_content}})],1):t._e()],1),i("v-uni-view",{staticClass:"user_top"},[i("v-uni-view",{},[t._v("用户评论")]),0!=t.data_list.length?i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$jump("./comment?id="+t.id)}}},[t._v("全部")]):t._e()],1),t._l(t.data_list,function(e,n){return 0!=t.data_list.length?i("v-uni-view",{key:e.id,staticClass:"user_comment"},[i("v-uni-view",{staticClass:"user"},[i("v-uni-view",{staticClass:"user_one"},[i("v-uni-image",{staticClass:"user_img",attrs:{src:t.$api_img()+e.commenter.avatar,mode:"widthFix"}}),i("v-uni-view",{staticClass:"user_test"},[i("v-uni-view",[t._v(t._s(e.create_time))])],1)],1),i("v-uni-view",{staticClass:"user_star"},[i("v-uni-view",{},t._l(e.rating_nums,function(t,e){return i("v-uni-image",{attrs:{src:"/static/image/com_page/stars.png",mode:"widthFix"}})}),1)],1)],1),i("v-uni-view",{staticClass:"com_content"},[i("v-uni-view",{staticClass:"content_test"},[i("v-uni-view",{},[t._v(t._s(e.content))])],1)],1)],1):t._e()}),0==t.data_list.length?i("v-uni-view",{staticClass:"lack_img"},[i("v-uni-image",{attrs:{src:"/static/image/com_page/lack.png",mode:"widthFix"}}),i("v-uni-view",{},[t._v("暂无评论")])],1):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"mask_black",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!t.show}}}),i("v-uni-view",{staticClass:"com_box"},[i("v-uni-view",{staticClass:"box_left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!t.show}}},[t._v("请发表你的评论")]),i("v-uni-view",{staticClass:"box_right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!t.show}}},[t._v("发表")])],1),i("v-uni-view",{staticClass:"write",class:t.show?"show":"Noshow"},[i("v-uni-view",{staticClass:"w_title"},[t._v("觉得怎么样，打个星吧~")]),i("v-uni-view",{staticClass:"start"},t._l(t.imgList,function(e,n){return i("v-uni-image",{key:n,attrs:{src:e.src},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chiose(n)}}})}),1),i("v-uni-textarea",{attrs:{value:"",placeholder:"请发表你的评论"},model:{value:t.com_text,callback:function(e){t.com_text=e},expression:"com_text"}}),i("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.publish.apply(void 0,arguments)}}},[t._v("发表")])],1)],2)},s=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return s}),i.d(e,"a",function(){return n})},"1ef9":function(t,e,i){"use strict";i.r(e);var n=i("e438"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},"2fbc":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.top[data-v-7bd4bcfc]{height:%?105?%;padding:0 %?44?%;width:100%;box-sizing:border-box;position:fixed;top:0;z-index:99;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;font-weight:700;color:#333;background:#fff;box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1)}.top .top_enlarge[data-v-7bd4bcfc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;width:%?180?%}.top uni-text[data-v-7bd4bcfc]:nth-of-type(2){width:%?180?%;display:inline-block}.top uni-image[data-v-7bd4bcfc]{height:%?40?%;width:%?40?%}',""])},"30c8":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".sub_share[data-v-4ea93e1e]{height:%?50?%;width:%?50?%}",""])},"42b7":function(t,e,i){"use strict";var n=i("b2f7"),a=i.n(n);a.a},"469f":function(t,e,i){i("6c1c"),i("1654"),t.exports=i("7d7b")},"5d73":function(t,e,i){t.exports=i("469f")},"5e92":function(t,e,i){"use strict";var n=i("b99d"),a=i.n(n);a.a},"7d7b":function(t,e,i){var n=i("e4ae"),a=i("7cd6");t.exports=i("584a").getIterator=function(t){var e=a(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return n(e.call(t))}},8182:function(t,e,i){"use strict";i.r(e);var n=i("c3ce"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},"8aa1":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"top_enlarge",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.returns()}}},[i("v-uni-image",{attrs:{src:"/static/image/com_page/returns.png",mode:"widthFix"}})],1),i("v-uni-text",[t._v(t._s(t.titles))]),i("v-uni-text")],1)},s=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return s}),i.d(e,"a",function(){return n})},"8de1":function(t,e,i){"use strict";i.r(e);var n=i("0f04"),a=i("efb1");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("5e92");var o,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"702f2962",null,!1,n["a"],o);e["default"]=c.exports},a087:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{})},s=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return s}),i.d(e,"a",function(){return n})},af01:function(t,e,i){var n=i("2fbc");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("41b9949d",n,!0,{sourceMap:!1,shadowMode:!1})},b2cd:function(t,e,i){"use strict";i.r(e);var n=i("a087"),a=i("8182");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("42b7");var o,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"4ea93e1e",null,!1,n["a"],o);e["default"]=c.exports},b2f7:function(t,e,i){var n=i("30c8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("2271348d",n,!0,{sourceMap:!1,shadowMode:!1})},b490:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-702f2962]{padding-bottom:%?120?%}.content .user_top[data-v-702f2962]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-weight:700;font-size:%?28?%;padding:%?20?%}.content .user_top uni-view[data-v-702f2962]:nth-of-type(2){color:#ef7c38}.content .user_comment[data-v-702f2962]{background:#fff;border-bottom:%?2?% solid #eee;padding:%?20?% %?30?%}.content .user_comment .user[data-v-702f2962]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin:%?20?% 0}.content .user_comment .user .user_one[data-v-702f2962]{display:-webkit-box;display:-webkit-flex;display:flex}.content .user_comment .user .user_one .user_img[data-v-702f2962]{width:%?90?%;height:%?90?%;border-radius:50%}.content .user_comment .user .user_one .user_test[data-v-702f2962]{margin:0 %?20?%;font-size:%?32?%}.content .user_comment .user .user_one .user_test uni-view[data-v-702f2962]{font-weight:700;color:#333;font-size:%?28?%}.content .user_comment .user .user_star[data-v-702f2962]{-webkit-align-self:flex-start;align-self:flex-start;font-size:%?24?%;color:#333}.content .user_comment .user .user_star uni-image[data-v-702f2962]{height:%?26?%;width:%?26?%}.content .user_comment .user .user_star uni-text[data-v-702f2962]{font-size:%?24?%;color:#999}.content .user_comment .com_content .content_test uni-view[data-v-702f2962]{font-size:%?24?%;color:#666;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.content .user_comment .com_content .content_img uni-image[data-v-702f2962]{height:%?120?%;width:%?120?%;margin-right:%?16?%;margin-top:%?30?%}.content .user_comment .com_content .more[data-v-702f2962]{font-size:%?32?%;color:#666;margin:%?20?% 0}.content .lack_img[data-v-702f2962]{text-align:center;padding-top:%?30?%;font-size:%?28?%;color:#999}.content .lack_img uni-image[data-v-702f2962]{height:%?310?%;width:%?310?%}.top[data-v-702f2962]{position:fixed;width:100%;z-index:886;box-sizing:border-box;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;height:%?105?%;padding:0 %?30?%;font-size:%?32?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff}.top uni-image[data-v-702f2962]:first-child{width:%?31?%;height:%?31?%}.top uni-image[data-v-702f2962]:last-child{width:%?50?%;height:%?50?%}hr[data-v-702f2962]{border:none;height:%?1?%;border-bottom:%?1?% solid #f6f6f7}.title_top[data-v-702f2962]{width:100%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:%?20?%}.title_top .title[data-v-702f2962]{font-size:%?28?%;padding:%?33?% %?20?% %?20?% %?20?%}.title_top .times[data-v-702f2962]{font-size:%?24?%;color:#999;margin:0 0 %?25?% 0;padding-left:%?20?%}.title_top .graded[data-v-702f2962]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-left:%?20?%}.title_top .graded .start[data-v-702f2962]{display:-webkit-box;display:-webkit-flex;display:flex}.title_top .graded .start uni-image[data-v-702f2962]{width:%?25?%;height:%?25?%;margin-right:%?12?%}.title_top .graded .time[data-v-702f2962]{font-size:%?24?%;color:#999;margin-right:%?30?%}.title_top .t_right[data-v-702f2962]{width:%?44?%;height:%?44?%;margin:%?80?% %?30?% 0 0}.rich[data-v-702f2962]{padding:0 %?20?%}.com_box[data-v-702f2962]{position:fixed;left:0;bottom:0;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-content:center;align-content:center;font-size:%?24?%;padding:0 %?20?%;box-sizing:border-box;height:%?120?%;border-top:%?2?% solid #f2f2f2;padding-top:%?20?%}.com_box .box_left[data-v-702f2962]{-webkit-box-flex:2;-webkit-flex-grow:2;flex-grow:2;border:%?2?% solid #999;height:%?60?%;line-height:%?60?%;border-radius:%?60?%;padding:0 %?31?%;color:#999}.com_box .box_right[data-v-702f2962]{background:-webkit-linear-gradient(left,#f74c4a,#f56e6a);background:linear-gradient(90deg,#f74c4a,#f56e6a);border-radius:%?10?%;width:%?100?%;text-align:center;line-height:%?60?%;height:%?60?%;color:#fff;margin-left:%?44?%}.write[data-v-702f2962]{position:fixed;left:0;bottom:0;z-index:998;width:100%;height:%?416?%;background:#f6f6f6;padding:%?30?% %?20?%;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:.3s;transition:.3s}.write .w_title[data-v-702f2962]{font-size:%?24?%;color:#666}.write .start[data-v-702f2962]{margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex}.write .start uni-image[data-v-702f2962]{width:%?41?%;height:%?41?%;margin:%?20?% %?10?%}.write uni-textarea[data-v-702f2962]{font-size:%?24?%;color:#999;padding:%?10?%;width:%?690?%;height:%?170?%;background-color:#fff;border:%?1?% solid #999;margin-top:%?20?%}.write uni-button[data-v-702f2962]{width:%?120?%;height:%?60?%;background:-webkit-linear-gradient(left,#f74c4a,#f56e6a);background:linear-gradient(90deg,#f74c4a,#f56e6a);border-radius:%?10?%;color:#fff;font-size:%?24?%;line-height:%?60?%;text-align:center;margin:%?20?% 0 0 %?600?%}.show[data-v-702f2962]{-webkit-transform:translateY(0);transform:translateY(0)}.Noshow[data-v-702f2962]{-webkit-transform:translateY(100%);transform:translateY(100%)}',""])},b99d:function(t,e,i){var n=i("b490");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6bc7cf1b",n,!0,{sourceMap:!1,shadowMode:!1})},c3ce:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:["datas"],data:function(){return{title:""}},onLoad:function(){},onBackPress:function(){if(nvImageMenu.isVisible())return nvImageMenu.hide(),nvMask.hide(),!0},onNavigationBarButtonTap:function(t){switch(t.type){case"share":break}},methods:{share:function(){var t=this.datas;t.Url,t.Title,t.Summary,t.ImageUrl,nvMask.show(),nvImageMenu.show()}}};e.default=n},c43c:function(t,e,i){"use strict";i.r(e);var n=i("8aa1"),a=i("1ef9");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("f3eb");var o,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"7bd4bcfc",null,!1,n["a"],o);e["default"]=c.exports},cbd4:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5d73"));i("c5f6"),i("a481"),i("3b2b");var s=n(i("bd86")),o=n(i("c43c")),r=n(i("b2cd")),c={components:{returns:o.default,share:r.default},data:function(){var t;return t={title:"文章",dataList:"",data_list:"",video_content:"",show:!1,id:"",com_text:""},(0,s.default)(t,"show",!1),(0,s.default)(t,"imgList",[{src:"/static/image/com_page/kongstart.png"},{src:"/static/image/com_page/kongstart.png"},{src:"/static/image/com_page/kongstart.png"},{src:"/static/image/com_page/kongstart.png"},{src:"/static/image/com_page/kongstart.png"}]),(0,s.default)(t,"share_arr",{}),t},methods:{tips:function(){uni.showModal({title:"提示",content:"请点击右上角选择分享！",showCancel:!1,success:function(t){}})},publish:function(){this.branch?this.com_text?this.service.entire(this,"post",this.APIconfig.api_root.subindex.s_article_comment,{mid:this.$store.state.user.id,aid:this.id,grade:this.branch,content:this.com_text},function(t,e){console.log(e),console.log(e),uni.showToast({icon:"none",title:e.msg}),0==e.code&&(t.show=!1,t.Index())}):uni.showToast({icon:"none",title:"输入评论内容！"}):uni.showToast({icon:"none",title:"请选择星级打分！"})},chiose:function(t){this.branch=t+1;for(var e=0;e<this.imgList.length;e++)this.imgList[e].src="/static/image/com_page/kongstart.png";for(var i=0;i<=t;i++)this.imgList[i].src="/static/image/com_page/bigstart.png"},collection:function(){var t=this.service.loading();this.service.entire(this,"get",this.APIconfig.api_root.subindex.s_favoriteArticle,{aid:this.id,user_id:this.$store.state.user.id},function(e,i){uni.hideLoading(),clearTimeout(t),0==i.code&&(1==e.dataList.is_lighten?e.dataList.is_lighten=-1:e.dataList.is_lighten=1)})}},onLoad:function(t){this.id=t.id,this.share_arr.Url="http://www.wufu-app.com/h5/#/pages/subindex/article?id="+t.id,this.service.entire(this,"get",this.APIconfig.api_root.subindex.s_getArticleDetail,{aid:t.id,user_id:this.$store.state.user.id},function(t,e){console.log(e),t.share_arr.Title=e.data.title,t.share_arr.ImageUrl=t.$api_img()+e.data.images[0],t.dataList=e.data;var i=e.data.content,n=new RegExp("<img","gi");i=i.replace(n,'<img style="max-width: 100%;"'),t.video_content=i,t.dataList.rating_num=new Array(Number(t.dataList.grade)),console.log(t.dataList)}),this.service.entire(this,"get",this.APIconfig.api_root.subindex.s_getCommentByAid,{aid:this.id},function(t,e){t.data_list=e.data,console.log(t.data_list);var i=!0,n=!1,s=void 0;try{for(var o,r=(0,a.default)(t.data_list);!(i=(o=r.next()).done);i=!0){var c=o.value;c.rating_nums=new Array(Number(c.grade))}}catch(d){n=!0,s=d}finally{try{i||null==r.return||r.return()}finally{if(n)throw s}}})}};e.default=c},e438:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:["titles"],data:function(){return{}},methods:{returns:function(){history.back()}}};e.default=n},efb1:function(t,e,i){"use strict";i.r(e);var n=i("cbd4"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},f3eb:function(t,e,i){"use strict";var n=i("af01"),a=i.n(n);a.a}}]);