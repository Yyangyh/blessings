(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/subindex/article"],{4955:function(t,e,i){},5001:function(t,e,i){"use strict";i.r(e);var a=i("d02e"),n=i("f196");for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);i("7b0a");var s,u=i("f0c5"),o=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);e["default"]=o.exports},"7b0a":function(t,e,i){"use strict";var a=i("4955"),n=i.n(a);n.a},b1d6:function(t,e,i){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(){return i.e("pages/common/returns").then(i.bind(null,"20fe"))},r=function(){return i.e("pages/common/share").then(i.bind(null,"39dd"))},s={components:{returns:n,share:r},data:function(){return{title:"文章",dataList:"",data_list:"",show:!1,id:"",share_arr:{}}},methods:{collection:function(){var e=this.service.loading();this.service.entire(this,"get",this.APIconfig.api_root.subindex.s_favoriteArticle,{aid:this.id,user_id:this.$store.state.user.id},function(i,a){t.hideLoading(),clearTimeout(e),0==a.code&&(1==i.dataList.is_lighten?i.dataList.is_lighten=-1:i.dataList.is_lighten=1)})}},onLoad:function(t){this.id=t.id,this.share_arr.Url="http://www.wufu-app.com/h5/#/pages/subindex/article?id="+t.id,this.service.entire(this,"get",this.APIconfig.api_root.subindex.s_getArticleDetail,{aid:t.id,user_id:this.$store.state.user.id},function(t,e){a("log",e," at pages\\subindex\\article.vue:123"),t.share_arr.Title=e.data.title,t.share_arr.ImageUrl=t.$api_img()+e.data.images[0],t.dataList=e.data;var i=e.data.content,n=new RegExp("<img","gi");i=i.replace(n,'<img style="max-width: 100%;"'),t.video_content=i,t.dataList.rating_num=new Array(Number(t.dataList.grade)),a("log",t.dataList," at pages\\subindex\\article.vue:137")}),this.service.entire(this,"get",this.APIconfig.api_root.subindex.s_getCommentByAid,{aid:this.id},function(t,e){t.data_list=e.data,a("log",t.data_list," at pages\\subindex\\article.vue:144");var i=!0,n=!1,r=void 0;try{for(var s,u=t.data_list[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var o=s.value;o.rating_nums=new Array(Number(o.grade))}}catch(d){n=!0,r=d}finally{try{i||null==u.return||u.return()}finally{if(n)throw r}}})}};e.default=s}).call(this,i("6e42")["default"],i("0de9")["default"])},cf94:function(t,e,i){"use strict";(function(t){i("7932"),i("921b");a(i("66fd"));var e=a(i("5001"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},d02e:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=(t._self._c,t.$api_img());t._isMounted||(t.e0=function(e){return t.service.returns()}),t.$mp.data=Object.assign({},{$root:{m0:i}})},r=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return r}),i.d(e,"a",function(){return a})},f196:function(t,e,i){"use strict";i.r(e);var a=i("b1d6"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);e["default"]=n.a}},[["cf94","common/runtime","common/vendor"]]]);