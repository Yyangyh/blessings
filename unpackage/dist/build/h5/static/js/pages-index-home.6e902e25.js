(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-home"],{"46c7":function(t,i,e){"use strict";e.r(i);var n=e("9afb"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);i["default"]=a.a},"49b0":function(t,i,e){"use strict";e.r(i);var n=e("d07f"),a=e("46c7");for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);e("8888");var o=e("2877"),c=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"450e5562",null);i["default"]=c.exports},7796:function(t,i,e){var n=e("b5f3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("eea9f21e",n,!0,{sourceMap:!1,shadowMode:!1})},8888:function(t,i,e){"use strict";var n=e("7796"),a=e.n(n);a.a},"9afb":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{swiper_list:"",new_goods:"",fight:"",recommend:"",category:"",indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,cart_status:!1}},methods:{change:function(t){this.current=t.detail.current}},onShow:function(){this.service.entire(this,"post",this.APIconfig.api_root.com_page.c_Index,{user_id:this.$store.state.user.id},function(t,i){t.cart_status=i.data.data.length}),this.service.entire(this,"get",this.APIconfig.api_root.index.good_index,{userid:this.$store.state.user.id},function(t,i){console.log(i),t.category=i.data.category,t.swiper_list=i.data.banner_list,t.class_top=i.data.class_top,t.class_list=i.data.class_list,t.new_goods=i.data.new_goods,t.fight=i.data.fight,t.recommend=i.data.recommend})}};i.default=n},b5f3:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content .swiper_box[data-v-450e5562]{padding:0 %?20?%}.content .swiper_box uni-image[data-v-450e5562]{width:100%}.content .subject[data-v-450e5562]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.content .subject .classify[data-v-450e5562]{margin:%?41?% 0;width:25%;text-align:center}.content .subject .classify uni-image[data-v-450e5562]{width:%?85?%;height:%?85?%}.content .subject .classify uni-view[data-v-450e5562]{font-size:%?24?%}.content .propulsion[data-v-450e5562]{background-color:#f6f6f6;display:-webkit-box;display:-webkit-flex;display:flex;padding-bottom:%?30?%;padding-top:%?20?%}.content .propulsion .commodity_box .top[data-v-450e5562]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:0 %?20?%;padding-bottom:%?24?%}.content .propulsion .commodity_box .top uni-image[data-v-450e5562]{width:%?31?%;height:%?31?%;margin:%?0?% %?10?% 0 0}.content .propulsion .commodity_box .commodity[data-v-450e5562]{padding:0 %?10?%}.content .propulsion .commodity_box .commodity .pages[data-v-450e5562]{width:%?341?%;height:%?231?%;margin:0 0 %?10?% 0}.content .propulsion .commodity_box .commodity .pages uni-image[data-v-450e5562]{width:100%;height:100%}.content .propulsion .commodity_box .commodity .name[data-v-450e5562]{font-size:%?23?%;padding-right:%?10?%;margin:%?8?% 0;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.content .all .top[data-v-450e5562]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?29?% %?22?% %?20?% %?22?%}.content .all .top .top1[data-v-450e5562]{font-size:%?28?%}.content .all .top .top2[data-v-450e5562]{font-size:%?23?%;color:#ef7c38}.content .all .allB[data-v-450e5562]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:space-around;justify-content:space-around;padding:0 %?20?%;box-sizing:border-box}.content .all .allB .product[data-v-450e5562]{width:50%;padding:%?10?%;box-sizing:border-box}.content .all .allB .product .name[data-v-450e5562]{font-size:%?23?%;margin:%?8?% 0;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.content .all .allB .product uni-image[data-v-450e5562]{width:%?341?%}.content_top[data-v-450e5562]{position:fixed;top:0;left:0;width:100%;background:#fff;z-index:99;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?105?%;padding:0 %?20?%}.content_top .top_search[data-v-450e5562]{-webkit-box-flex:2;-webkit-flex-grow:2;flex-grow:2;height:%?65?%;border-radius:%?65?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-left:%?40?%;background:#eee}.content_top uni-view uni-input[data-v-450e5562]{font-size:%?24?%}.content_top .top_img[data-v-450e5562]{position:relative}.content_top .top_img uni-view[data-v-450e5562]{position:absolute;right:%?-4?%;top:%?-4?%;height:%?10?%;width:%?10?%;border-radius:50%;background:#d80000}.content_top uni-image[data-v-450e5562]{height:%?50?%;width:%?50?%;margin-left:%?10?%}',""])},d07f:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"status_bar"}),e("v-uni-view",{staticClass:"content_top"},[e("v-uni-view",{staticClass:"top_search"},[e("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入关键词搜索"}})],1),e("v-uni-view",{staticClass:"top_img",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$jump("../com_page/shopp_cart")}}},[e("v-uni-image",{attrs:{src:"/static/image/index/shopp.png",mode:"widthFix"}}),t.cart_status?e("v-uni-view"):t._e()],1)],1),e("v-uni-view",{staticClass:"swiper_box"},[e("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration}},t._l(t.swiper_list,function(i,n){return e("v-uni-swiper-item",{key:i.id,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$jump("../subhome/details?id="+i.goods_id)}}},[e("v-uni-view",{staticClass:"swiper-item uni-bg-red",staticStyle:{"text-align":"center"}},[e("v-uni-image",{attrs:{src:i.images_url,mode:"widthFix"}})],1)],1)}),1)],1),e("v-uni-view",{staticClass:"subject"},[t._l(t.category,function(i,n){return e("v-uni-view",{key:i.id,staticClass:"classify",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$jump("../subhome/home_com?id="+i.id+"&title="+i.name)}}},[e("v-uni-image",{attrs:{src:i.icon}}),e("v-uni-view",[t._v(t._s(i.name))])],1)}),e("v-uni-view",{staticClass:"classify"},[e("v-uni-image",{attrs:{src:"../../static/image/index/school.png"}}),e("v-uni-view",[t._v("家风学堂")])],1),e("v-uni-view",{staticClass:"classify",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$jump("../subhome/assemble")}}},[e("v-uni-image",{attrs:{src:"../../static/image/index/assemble.png"}}),e("v-uni-view",[t._v("拼团")])],1)],2),e("v-uni-view",{staticClass:"propulsion"},[e("v-uni-view",{staticClass:"commodity_box"},[e("v-uni-view",{staticClass:"top"},[e("v-uni-image",{attrs:{src:"../../static/image/index/start.png"}}),e("v-uni-text",{staticStyle:{color:"#D80000","font-size":"30upx"}},[t._v("新品上市")])],1),t._l(t.new_goods,function(i,n){return e("v-uni-view",{key:i.id,staticClass:"commodity",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$jump("/pages/subhome/details?id="+i.id)}}},[e("v-uni-view",{staticClass:"pages"},[e("v-uni-image",{attrs:{src:i.images}})],1),e("v-uni-view",{staticClass:"name"},[t._v(t._s(i.title))]),e("v-uni-view",{staticStyle:{color:"#D80000","font-size":"30upx"}},[t._v(t._s(i.price))])],1)})],2),e("v-uni-view",{staticClass:"commodity_box"},[e("v-uni-view",{staticClass:"top"},[e("v-uni-image",{attrs:{src:"../../static/image/index/start.png"}}),e("v-uni-text",{staticStyle:{color:"#EF7C38","font-size":"30upx"}},[t._v("超值拼团")])],1),t._l(t.fight,function(i,n){return e("v-uni-view",{key:i.id,staticClass:"commodity",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$jump("/pages/subhome/threehome/group_products?id="+i.id)}}},[e("v-uni-view",{staticClass:"pages"},[e("v-uni-image",{attrs:{src:t.APIconfig.api_img+i.thumb}})],1),e("v-uni-view",{staticClass:"name"},[t._v(t._s(i.title))]),e("v-uni-view",{staticStyle:{color:"#D80000","font-size":"30upx"}},[t._v(t._s(i.price))])],1)})],2)],1),e("v-uni-view",{staticClass:"all"},[e("v-uni-view",{staticClass:"top"},[e("v-uni-view",{staticClass:"top1"},[t._v("推荐产品")]),e("v-uni-view",{staticClass:"top2"},[t._v("全部")])],1),e("v-uni-view",{staticClass:"allB"},t._l(t.recommend,function(i,n){return e("v-uni-view",{key:i.id,staticClass:"product",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$jump("/pages/subhome/details?id="+i.id)}}},[e("v-uni-view",{},[e("v-uni-image",{attrs:{src:i.images,mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"name",staticStyle:{"font-size":"24upx",margin:"10upx"}},[t._v(t._s(i.title))]),e("v-uni-view",{staticStyle:{color:"#999999","font-size":"24upx",margin:"10upx"}},[t._v("已售"+t._s(i.inventory)+"件")]),e("v-uni-view",{staticStyle:{color:"#D80000","font-size":"30upx",margin:"10upx"}},[t._v(t._s(i.price))])],1)}),1)],1)],1)},a=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return a})}}]);