(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/subindex/article"],{"328a":function(t,e,i){"use strict";(function(t){i("0b23"),i("921b");a(i("66fd"));var e=a(i("f369"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},"3b8c":function(t,e,i){"use strict";(function(t,a){function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(){return i.e("pages/common/returns").then(i.bind(null,"14de"))},r=function(){return i.e("pages/common/share").then(i.bind(null,"400c"))},o={components:{returns:s,share:r},data:function(){var t;return t={title:"文章",dataList:"",data_list:"",video_content:"",show:!1,id:"",com_text:""},n(t,"show",!1),n(t,"imgList",[{src:"/static/image/com_page/kongstart.png"},{src:"/static/image/com_page/kongstart.png"},{src:"/static/image/com_page/kongstart.png"},{src:"/static/image/com_page/kongstart.png"},{src:"/static/image/com_page/kongstart.png"}]),n(t,"share_arr",{}),t},methods:{tips:function(){this.$refs.share.share()},publish:function(){this.branch?this.com_text?this.service.entire(this,"post",this.APIconfig.api_root.subindex.s_article_comment,{mid:this.$store.state.user.id,aid:this.id,grade:this.branch,content:this.com_text},function(e,i){a("log",i," at pages\\subindex\\article.vue:167"),a("log",i," at pages\\subindex\\article.vue:168"),t.showToast({icon:"none",title:i.msg}),0==i.code&&(e.show=!1,e.Index())}):t.showToast({icon:"none",title:"输入评论内容！"}):t.showToast({icon:"none",title:"请选择星级打分！"})},chiose:function(t){this.branch=t+1;for(var e=0;e<this.imgList.length;e++)this.imgList[e].src="/static/image/com_page/kongstart.png";for(var i=0;i<=t;i++)this.imgList[i].src="/static/image/com_page/bigstart.png"},collection:function(){var e=this.service.loading();this.service.entire(this,"get",this.APIconfig.api_root.subindex.s_favoriteArticle,{aid:this.id,user_id:this.$store.state.user.id},function(i,a){t.hideLoading(),clearTimeout(e),0==a.code&&(1==i.dataList.is_lighten?i.dataList.is_lighten=-1:i.dataList.is_lighten=1)})}},onLoad:function(t){this.id=t.id,this.share_arr.Url="http://www.wufu-app.com/h5/#/pages/subindex/article?id="+t.id,this.service.entire(this,"get",this.APIconfig.api_root.subindex.s_getArticleDetail,{aid:t.id,user_id:this.$store.state.user.id},function(t,e){a("log",e," at pages\\subindex\\article.vue:209"),t.share_arr.Title=e.data.title,t.share_arr.ImageUrl=t.$api_img()+e.data.images[0],t.dataList=e.data;var i=e.data.content,n=new RegExp("<img","gi");i=i.replace(n,'<img style="max-width: 100%;"'),t.video_content=i,t.dataList.rating_num=new Array(Number(t.dataList.grade)),a("log",t.dataList," at pages\\subindex\\article.vue:223")}),this.service.entire(this,"get",this.APIconfig.api_root.subindex.s_getCommentByAid,{aid:this.id},function(t,e){t.data_list=e.data,a("log",t.data_list," at pages\\subindex\\article.vue:230");var i=!0,n=!1,s=void 0;try{for(var r,o=t.data_list[Symbol.iterator]();!(i=(r=o.next()).done);i=!0){var c=r.value;c.rating_nums=new Array(Number(c.grade))}}catch(u){n=!0,s=u}finally{try{i||null==o.return||o.return()}finally{if(n)throw s}}})}};e.default=o}).call(this,i("6e42")["default"],i("0de9")["default"])},"554d":function(t,e,i){"use strict";i.r(e);var a=i("3b8c"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},"61c7":function(t,e,i){},b1ba:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=(t._self._c,t.$api_img());t._isMounted||(t.e0=function(e){return t.service.returns()},t.e1=function(e){t.show=!t.show},t.e2=function(e){t.show=!t.show},t.e3=function(e){t.show=!t.show}),t.$mp.data=Object.assign({},{$root:{m0:i}})},s=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return s}),i.d(e,"a",function(){return a})},f369:function(t,e,i){"use strict";i.r(e);var a=i("b1ba"),n=i("554d");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("f4d7");var r,o=i("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=c.exports},f4d7:function(t,e,i){"use strict";var a=i("61c7"),n=i.n(a);n.a}},[["328a","common/runtime","common/vendor"]]]);