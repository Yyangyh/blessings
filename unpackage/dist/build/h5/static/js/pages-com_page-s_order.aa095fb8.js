(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-com_page-s_order"],{"19c1":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:["titles"],data:function(){return{}},methods:{returns:function(){history.back()}}};e.default=n},"1de5":function(t,e,i){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"20fe":function(t,e,i){"use strict";i.r(e);var n=i("bb9a"),a=i("db07");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("2a10");var s,c=i("f0c5"),d=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"d459b51e",null,!1,n["a"],s);e["default"]=d.exports},"21ef":function(t,e,i){var n=i("86d3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("278f7230",n,!0,{sourceMap:!1,shadowMode:!1})},"2a10":function(t,e,i){"use strict";var n=i("3de1"),a=i.n(n);a.a},"3de1":function(t,e,i){var n=i("7822");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("2266c13a",n,!0,{sourceMap:!1,shadowMode:!1})},"528e":function(t,e,i){t.exports=i.p+"static/img/coupon_blue.6e439273.png"},"54f8":function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return a}));i("a4d3"),i("e01a"),i("d28b"),i("e260"),i("d3b7"),i("3ca3"),i("ddb0");var n=i("dde1");function a(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=Object(n["a"])(t))){var e=0,i=function(){};return{s:i,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,s=!0,c=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return s=t.done,t},e:function(t){c=!0,o=t},f:function(){try{s||null==a["return"]||a["return"]()}finally{if(c)throw o}}}}},7822:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.top[data-v-d459b51e]{height:%?105?%;padding:0 %?44?%;width:100%;box-sizing:border-box;position:fixed;top:0;z-index:99;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;font-weight:700;color:#333;background:#fff;box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1)}.top .top_enlarge[data-v-d459b51e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;width:%?180?%}.top uni-text[data-v-d459b51e]:nth-of-type(2){width:%?180?%;display:inline-block}.top uni-image[data-v-d459b51e]{height:%?40?%;width:%?40?%}',""]),t.exports=e},"7c63":function(t,e,i){"use strict";var n=i("ee27");i("4160"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("54f8")),o=n(i("20fe")),s={data:function(){return{title:"确认订单",data:[],address:"",shopp:"",payment:"",indexs:"",id:"",payment_id:"",show_add:3,require_data:"",coupon_list:"",show:!1,recording:"未选择",extension:""}},components:{returns:o.default},methods:{choice:function(t){var e,i=(0,a.default)(this.payment);try{for(i.s();!(e=i.n()).done;){var n=e.value;n.choice=!1}}catch(o){i.e(o)}finally{i.f()}this.payment[t].choice=!0,this.payment_id=this.payment[t].id,this.payment_name=this.payment[t].payment},discount_choice:function(t){var e,i=(0,a.default)(this.coupon_list);try{for(i.s();!(e=i.n()).done;){var n=e.value;n.choice=!1}}catch(o){i.e(o)}finally{i.f()}this.coupon_list[t].choice=!0},finish:function(){var t=this;this.show=!1,this.coupon_list.forEach((function(e,i){1==e.choice&&(e.id?(t.require_data.coupon_id=t.coupon_list[i].id,0==t.coupon_list[i].coupon.type?t.recording="￥"+t.coupon_list[i].coupon.discount_value+"元":t.recording="￥"+t.coupon_list[i].coupon.discount_value+"折"):(t.require_data.coupon_id="",t.recording="不使用"))})),this.Index()},Index:function(){this.service.entire(this,"post",this.APIconfig.api_root.com_page.buy_index,this.require_data,(function(t,e){if(t.data=e.data.base,""!=e.data.plugins_coupon_data.coupon_list){var i={not_coupon:"不使用"},n=e.data.plugins_coupon_data.coupon_list;n.push(i);var o,s=(0,a.default)(n);try{for(s.s();!(o=s.n()).done;){var c=o.value;c.choice=!1}}catch(v){s.e(v)}finally{s.f()}if(""!=e.data.plugins_coupon_data.coupon_choice){var d,r=(0,a.default)(n);try{for(r.s();!(d=r.n()).done;){var l=d.value;l.id==e.data.plugins_coupon_data.coupon_choice.id&&(l.choice=!0)}}catch(v){r.e(v)}finally{r.f()}}t.coupon_list=n}e.data.base.address?t.show_add=1:t.show_add=0,t.address=e.data.base.address,t.shopp=e.data.goods_list,t.extension=e.data.extension_data;var u,f=e.data.payment_list,p=(0,a.default)(f);try{for(p.s();!(u=p.n()).done;){var b=u.value;b.choice=!1}}catch(v){p.e(v)}finally{p.f()}t.payment=f}))},payments:function(){var t=this;this.address?this.payment_id?uni.showModal({title:"提示",content:"是否确定支付？",success:function(e){if(e.confirm){var i={user_id:t.$store.state.user.id,address_id:t.address.id,payment_id:t.payment_id},n=Object.assign(i,t.require_data);t.service.entire(t,"post",t.APIconfig.api_root.com_page.buy_add,n,(function(e,i){0==i.code?e.service.entire(e,"post",e.APIconfig.api_root.com_page.order_pay,{user_id:t.$store.state.user.id,id:i.data.order.id},(function(e,i){0==i.code?e.service.order.apply(e,[i,t.payment_name,"../subuser/s_order?status=-1"]):uni.showToast({icon:"none",title:i.msg})})):uni.showToast({icon:"none",title:i.msg})}))}else if(e.cancel)return}}):uni.showToast({icon:"none",title:"请选择支付方式"}):uni.showToast({icon:"none",title:"请添加收货地址"})}},onLoad:function(t){this.options=JSON.parse(t.data);var e,i=JSON.parse(t.data);e="cart"==i.type?{user_id:this.$store.state.user.id,ids:i.id,buy_type:i.type}:{user_id:this.$store.state.user.id,goods_id:i.id,stock:i.num,spec:i.spec,buy_type:i.type},this.require_data=e},onShow:function(){this.Index()}};e.default=s},"86d3":function(t,e,i){var n=i("24fb"),a=i("1de5"),o=i("528e");e=n(!1);var s=a(o);e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-31ad0e55]{width:100%;padding-bottom:%?150?%}.void[data-v-31ad0e55]{width:100%;height:%?10?%;background:#f2f2f2}.top_add[data-v-31ad0e55]{width:100%;padding:0;margin:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative}.top_add .name[data-v-31ad0e55]{width:90%;padding:%?40?% 0;font-size:%?30?%;color:#000;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.top_add .name .info[data-v-31ad0e55]{width:90%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.top_add .name .address[data-v-31ad0e55]{width:90%;margin-top:%?10?%;font-size:%?28?%;color:#666}.top_add .more[data-v-31ad0e55]{width:%?28?%;\n    /* height: 28rpx; */margin-right:%?20?%}.top_add .more uni-image[data-v-31ad0e55]{width:%?28?%;height:%?28?%}.top_add .bg[data-v-31ad0e55]{width:100%;position:absolute;bottom:0}.top_add .bg uni-image[data-v-31ad0e55]{width:100%;height:%?10?%}.commodity[data-v-31ad0e55]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-content:center;align-content:center;padding-top:%?30?%;padding-bottom:%?24?%;border-bottom:%?10?% solid #f2f2f2}.commodity .left[data-v-31ad0e55]{width:30%;padding:0 5%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.commodity .left uni-image[data-v-31ad0e55]{width:%?220?%;height:%?142?%}.commodity .right[data-v-31ad0e55]{width:65%;margin-right:5%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.commodity .right .title[data-v-31ad0e55]{font-size:%?30?%;color:#333\n      /* font-weight: bold; */}.commodity .right .button[data-v-31ad0e55]{color:grey;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-flex-wrap:wrap;flex-wrap:wrap}.commodity .right .button uni-text[data-v-31ad0e55]{margin-right:%?10?%;margin-bottom:%?10?%;font-size:%?24?%;display:block;padding:%?10?% %?8?%;background:#f1f1f1}.commodity .right .price[data-v-31ad0e55]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.commodity .right .price .momey[data-v-31ad0e55]{font-size:%?36?%;color:#ff431d}.commodity .right .price .number[data-v-31ad0e55]{font-size:%?24?%;color:#666}.recording[data-v-31ad0e55]{width:100%;font-size:%?32?%;color:#333;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.recording .list[data-v-31ad0e55]{font-size:%?24?%;color:#999;width:90%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:%?2?% solid #f2f2f2}.recording .list uni-view[data-v-31ad0e55]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;color:#666}.recording .list uni-image[data-v-31ad0e55]{height:%?45?%;width:%?45?%;margin-left:%?10?%}.recording .list .list_red[data-v-31ad0e55]{color:#ff431d;font-size:%?28?%}.payment[data-v-31ad0e55]{font-size:%?28?%;padding:%?20?%}.payment uni-image[data-v-31ad0e55]{height:%?52?%;width:%?52?%}.payment .pa_test[data-v-31ad0e55]{padding:%?18?% 0}.payment .pa_box .box_list[data-v-31ad0e55]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative}.payment .pa_box .box_list .list_top[data-v-31ad0e55]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-weight:500;width:100%;height:%?100?%}.payment .pa_box .box_list .list_top uni-image[data-v-31ad0e55]{margin-right:%?38?%}.payment .pa_box .box_list .list_top uni-view[data-v-31ad0e55]{-webkit-box-flex:2;-webkit-flex-grow:2;flex-grow:2;height:%?100?%;line-height:%?100?%;border-bottom:%?2?% solid #f1f1f1}.choice[data-v-31ad0e55]{position:absolute;right:%?20?%;top:%?30?%;height:%?36?%!important;width:%?36?%!important}.pay[data-v-31ad0e55]{width:100%;height:%?120?%;border-top:%?1?% solid #f1f1f1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;bottom:0;background:#fff}.pay .paying[data-v-31ad0e55]{margin-left:5%;color:#666;font-size:%?32?%}.pay .paying uni-text[data-v-31ad0e55]{color:#ff431d}.pay .btn[data-v-31ad0e55]{width:%?224?%;height:%?90?%;font-size:%?36?%;margin-right:5%}.pay .btn uni-button[data-v-31ad0e55]{border-radius:%?45?%;background:#d80000;color:#fff}.discount_box[data-v-31ad0e55]{position:fixed;bottom:0;left:0;width:100%;min-height:%?860?%;background:#fff;z-index:900;-webkit-transition:.3s;transition:.3s;-webkit-transform:translateY(100%);transform:translateY(100%)}.discount_box .box_top[data-v-31ad0e55]{text-align:center;font-size:%?28?%;padding:%?20?% 0;color:#333}.discount_box .box_list[data-v-31ad0e55]{height:%?660?%}.discount_box .box_list .cou_list[data-v-31ad0e55]{background:url('+s+") no-repeat;background-size:100% 100%;width:%?710?%;height:%?182?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:0 auto;margin-top:%?30?%;color:#1d9dff;position:relative}.discount_box .box_list .cou_list .cou_test[data-v-31ad0e55]{\n        /* position: absolute; */width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?40?%}.discount_box .box_list .cou_list .cou_test .cou_left[data-v-31ad0e55]{color:#1d9dff;font-size:%?24?%}.discount_box .box_list .cou_list .cou_test .cou_left uni-text[data-v-31ad0e55]{font-size:%?48?%;margin-right:%?16?%}.discount_box .box_list .cou_list .cou_test .cou_left .left_two uni-text[data-v-31ad0e55]{font-size:%?24?%}.discount_box .box_list .cou_list .cou_test .cou_right[data-v-31ad0e55]{width:%?142?%;height:%?60?%;line-height:%?60?%;border-radius:%?60?%;text-align:center;font-size:%?30?%;color:#fff;background:#1d9dff}.discount_box .box_list .cou_list uni-image[data-v-31ad0e55]{width:%?45?%;height:%?45?%}.discount_box .box_list .cou_mask[data-v-31ad0e55]{position:absolute;z-index:999;height:%?182?%;width:100%;background:hsla(0,0%,100%,.6)}.discount_box uni-button[data-v-31ad0e55]{position:absolute;bottom:0;left:0;width:100%;font-size:%?30?%;color:#fff;background:#1d74ff}.scroll-Y[data-v-31ad0e55]{height:%?660?%}.mask_none[data-v-31ad0e55]{-webkit-transform:translateY(100%)!important;transform:translateY(100%)!important}.mask_show[data-v-31ad0e55]{-webkit-transform:translateY(0)!important;transform:translateY(0)!important}",""]),t.exports=e},"891e":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEUUlEQVRYR+2WUWgcVRSG/zOb1dSmzd5JsS1IiVYRBYumJjuJSpaqqFFpHjS11RcVBAMW+2Al6WwZ3buJUvQlSH0QX1TSB30wRVOwJVKIezeSWFFUAlZLSGtbszubapKamTky29242e7GtAn0JfM0zLn/ud+cc+45l3CNH7rG+2MFIBuBtGnsAfACgFUMdorTQqAxABUM3rjUlBERgREA8DNBe5VSpvEWAa8v1fFV6s9T2jSYCP2hmGop5YQtaLZjuGA6KeKJzVe50WUyu9OoYw3DWQAQPhMx9VQ559k1wN9CqqrlApjoCN+pBWjoEgDQJ6TaXi4CaTfcBsakLpNfLhdAJtpU77E3kAf4REj13HI5X4wf22y4maF97wO4RBittsXd1NN/sVjMANn7mja5YGddPDFeaE9Fw+3E1IaKylZhfW3nbbbZ+BrAz3ue1qZ3ffNjKaCUGW4h0Oc+wAUAVSCMegGur7GSk4WC36xIZciZmQLwu5DqlkKbbRr9DDwK4KiQ6mHfNmltXec6wfP+OxPu12NqsBjANhu2MbRj/ndKRxub4XEUhAcBfCekqisUjO1pXFW1mn2AlJCqptB2zopUBZ2ZEQC3gehFEUt8mDYbvwX4XgLtDcnEgcs2z1V/FpC5Y64Vp01jAECEmXbp8URvXlgAMCWkWl0qnLZpnGGgBoQjYDwJxjERVw+VWps2jVMANjHxTj2WPDQHcMFqutFxvLMAnxAyeU9ezK88dr1dnT7JwJgulVHo9LS19YaNpzFrrw/uB8OcszG3BoLO4BpMT5L10z/576lowwPE2nEwBkRcbcumoNBh2jRSAISQalFDyjaNXgaeKVf1DD6gy+TevD3X8t9lDy16l+ovBeAX4JpCAL8TZmYb6jwtcFGPJX6YV4T7jB2soYlAUwzcBebHAfqIic8Q+Dp2+ajeNfTFfxHInpr3mPCyHlPvzwPIRI2wx1DFbXmhGvjTNO7QGLdqAZ6BS61MaAcoBmCEyauscHhkbffQaB5g0rzvdhfuLwT8EZIqO9iyof6rM7x+lkiBUKsxhavjiaG8KHcMpwGMC6luKkrZxwCeLZcCAneHZLKzSHMYwBMAfSpk4mlKmY0dBPanYTWAHiHV7hJ9wAc4JaSqnX8M6zcEZrVaaAEiz20mom4AbxDxYdfBNHnOuP72cKZQM2GF12oO+Ud3MwEq34r9UBwMSdVe/DcFKcBCxZnZ3/iI5/ERANuFVH3louJ/T1uREJwZvxHV5QD4uJDJ5lIitiIVGWf6TQYmhEy+U85xqjO8hTTaTcQHQ7Hk8EIAvs2vBw/uiUv3AeBQSKqd/ydaTnsOeHAR4zhSYTszHzDhrB5Ty3ZzmjeOCdwbksld5f4wd2dwhVQVyxWFc1b9hqAT+NWPgMfgUeLAS9D8bMx/iDnIwFf+2WXWdpRac8VQHjFrvIWYeyg3l+e61RU7W5qgb1E9f2l7LKxeAViJwL9CC/am+T0v7wAAAABJRU5ErkJggg=="},"9a863":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"status_bar"}),n("returns",{attrs:{titles:t.title}}),n("v-uni-view",{staticClass:"top_add"},[1==t.show_add?n("v-uni-view",{staticClass:"name",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$jump("../subuser/address")}}},[n("v-uni-view",{staticClass:"info"},[n("v-uni-text",[t._v(t._s(t.address.name))]),n("v-uni-text",[t._v(t._s(t.address.tel))])],1),n("v-uni-view",{staticClass:"address"},[t._v(t._s(t.address.province_name)+t._s(t.address.city_name)+t._s(t.address.county_name)+t._s(t.address.address))])],1):0==t.show_add?n("v-uni-view",{staticClass:"name",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$jump("../subuser/address")}}},[n("v-uni-view",{},[t._v("未设置收货地址，请设置")])],1):t._e(),n("v-uni-view",{staticClass:"more"},[n("v-uni-image",{attrs:{src:"/static/image/index/go.png",mode:"widthFix"}})],1),n("v-uni-view",{staticClass:"bg"},[n("v-uni-image",{attrs:{src:"/static/image/com_page/void.png",mode:"widthFix"}})],1)],1),n("v-uni-view",{staticClass:"void"}),t._l(t.shopp,(function(e,i){return n("v-uni-view",{key:e.id,staticClass:"commodity"},[n("v-uni-view",{staticClass:"left"},[n("v-uni-image",{attrs:{src:e.images,mode:"widthFix"}})],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",[t._v(t._s(e.title))])],1),e.spec?n("v-uni-view",{staticClass:"button"},t._l(e.spec,(function(e,i){return n("v-uni-text",{key:i},[t._v(t._s(e.type)+"："+t._s(e.value))])})),1):t._e(),n("v-uni-view",{staticClass:"price"},[n("v-uni-view",{staticClass:"momey"},[t._v("￥"+t._s(e.price))]),n("v-uni-view",{staticClass:"number"},[t._v("数量：x"+t._s(e.stock))])],1)],1)],1)})),n("v-uni-view",{staticClass:"void"}),n("v-uni-view",{staticClass:"recording"},[n("v-uni-view",{staticClass:"list"},[n("v-uni-text",[t._v("商品小计")]),n("v-uni-text",{staticClass:"list_red"},[t._v("￥"+t._s(t.data.total_price))])],1),t.extension?n("v-uni-view",{staticClass:"list"},[n("v-uni-text",[t._v("运费")]),n("v-uni-text",{staticClass:"list_red"},[t._v(t._s(t.extension[0].tips))])],1):t._e(),n("v-uni-view",{staticClass:"list"},[n("v-uni-text",[t._v("优惠券")]),""!=t.coupon_list?n("v-uni-view",{staticClass:"discount",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!t.show}}},[n("v-uni-text",[t._v(t._s(t.recording))]),n("v-uni-image",{attrs:{src:i("891e"),mode:"widthFix"}})],1):n("v-uni-text",[t._v("无")])],1)],1),n("v-uni-view",{staticClass:"void"}),n("v-uni-view",{staticClass:"payment"},[n("v-uni-view",{staticClass:"pa_test"},[t._v("支付方式")]),n("v-uni-view",{staticClass:"pa_box"},t._l(t.payment,(function(e,i){return n("v-uni-view",{key:e.id,staticClass:"box_list",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.choice(i)}}},[n("v-uni-view",{staticClass:"list_top"},[n("v-uni-image",{attrs:{src:e.logo,mode:"widthFix"}}),n("v-uni-view",{},[t._v(t._s(e.name))])],1),n("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:e.choice,expression:"item.choice"}],staticClass:"choice",attrs:{src:"/static/image/com_page/chiose.png",mode:"widthFix"}})],1)})),1)],1),n("v-uni-view",{staticClass:"pay"},[n("v-uni-view",{staticClass:"paying"},[t._v("需支付："),n("v-uni-text",[t._v("￥"+t._s(t.data.actual_price))])],1),n("v-uni-view",{staticClass:"btn"},[n("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.payments()}}},[t._v("支付订单")])],1)],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"mask_black",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!t.show}}}),n("v-uni-view",{staticClass:"discount_box",class:!1===t.show?"mask_none":!0===t.show?"mask_show":""},[n("v-uni-view",{staticClass:"box_top"},[t._v("优惠详情")]),n("v-uni-view",{staticClass:"box_list"},[n("v-uni-scroll-view",{staticClass:"scroll-Y",attrs:{"scroll-y":"true"}},t._l(t.coupon_list,(function(e,i){return n("v-uni-view",{key:i,staticClass:"cou_list"},[e.coupon?[n("v-uni-view",{staticClass:"cou_test",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.discount_choice(i)}}},[n("v-uni-view",{staticClass:"cou_left"},[n("v-uni-view",{staticClass:"left_one"},[t._v("￥"),n("v-uni-text",[t._v(t._s(e.coupon.discount_value))]),t._v(t._s(1==e.coupon.type?"折":"元"))],1),n("v-uni-view",{staticClass:"left_two"},[n("v-uni-text",[t._v(t._s(e.coupon.use_limit_type_name))]),n("v-uni-text",[t._v(t._s(e.coupon.name))])],1),n("v-uni-view",{staticClass:"left_two"},[n("v-uni-view",{},[t._v("有效期："+t._s(e.time_start_text))]),n("v-uni-view",{},[t._v("-"+t._s(e.time_end_text))])],1)],1),n("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:e.choice,expression:"item.choice"}],attrs:{src:"/static/image/com_page/chiose.png",mode:"widthFix"}})],1),Number(t.data.total_price)<Number(e.coupon.where_order_price)?n("v-uni-view",{staticClass:"cou_mask"}):t._e()]:[n("v-uni-view",{staticClass:"cou_test",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.discount_choice(i)}}},[n("v-uni-view",{},[t._v(t._s(e.not_coupon))]),n("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:e.choice,expression:"item.choice"}],attrs:{src:"/static/image/com_page/chiose.png",mode:"widthFix"}})],1)]],2)})),1)],1),n("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.finish()}}},[t._v("完成")])],1)],2)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},"9d74":function(t,e,i){"use strict";var n=i("21ef"),a=i.n(n);a.a},b6802:function(t,e,i){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}i.d(e,"a",(function(){return n}))},bb9a:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"top_enlarge",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.returns()}}},[i("v-uni-image",{attrs:{src:"/static/image/com_page/returns.png",mode:"widthFix"}})],1),i("v-uni-text",[t._v(t._s(t.titles))]),i("v-uni-text")],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},ca11:function(t,e,i){"use strict";i.r(e);var n=i("7c63"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},d5e8:function(t,e,i){"use strict";i.r(e);var n=i("9a863"),a=i("ca11");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("9d74");var s,c=i("f0c5"),d=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"31ad0e55",null,!1,n["a"],s);e["default"]=d.exports},db07:function(t,e,i){"use strict";i.r(e);var n=i("19c1"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},dde1:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));i("a630"),i("fb6a"),i("d3b7"),i("25f0"),i("3ca3");var n=i("b6802");function a(t,e){if(t){if("string"===typeof t)return Object(n["a"])(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Object(n["a"])(t,e):void 0}}}}]);