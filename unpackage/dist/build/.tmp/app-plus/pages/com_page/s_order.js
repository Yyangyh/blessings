(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/com_page/s_order"],{"186a":function(t,e,o){"use strict";var a=o("27a5"),n=o.n(a);n.a},"27a5":function(t,e,o){},"56d3":function(t,e,o){"use strict";var a,n=function(){var t=this,e=t.$createElement,o=(t._self._c,Number(t.data.total_price)),a=t.__map(t.coupon_list,function(e,o){var a=Number(e.coupon.where_order_price);return{$orig:t.__get_orig(e),m1:a}});t._isMounted||(t.e0=function(e){t.show=!t.show},t.e1=function(e){t.show=!t.show}),t.$mp.data=Object.assign({},{$root:{m0:o,l0:a}})},i=[];o.d(e,"b",function(){return n}),o.d(e,"c",function(){return i}),o.d(e,"a",function(){return a})},b269:function(t,e,o){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(){return o.e("pages/common/returns").then(o.bind(null,"c43c"))},i={data:function(){return{title:"确认订单",data:[],address:"",shopp:"",payment:"",indexs:"",id:"",payment_id:"",show_add:3,require_data:"",coupon_list:"",show:!1,recording:"未选择",extension:""}},components:{returns:n},methods:{choice:function(t){var e=!0,o=!1,a=void 0;try{for(var n,i=this.payment[Symbol.iterator]();!(e=(n=i.next()).done);e=!0){var r=n.value;r.choice=!1}}catch(s){o=!0,a=s}finally{try{e||null==i.return||i.return()}finally{if(o)throw a}}this.payment[t].choice=!0,this.payment_id=this.payment[t].id,this.payment_name=this.payment[t].payment},discount_choice:function(e){var o=!0,a=!1,n=void 0;try{for(var i,r=this.coupon_list[Symbol.iterator]();!(o=(i=r.next()).done);o=!0){var s=i.value;s.choice=!1}}catch(c){a=!0,n=c}finally{try{o||null==r.return||r.return()}finally{if(a)throw n}}this.coupon_list[e].choice=!0,t("log",this.coupon_list," at pages\\com_page\\s_order.vue:201")},finish:function(){var e=this;this.show=!1,this.coupon_list.forEach(function(t,o){1==t.choice&&(t.id?(e.require_data.coupon_id=e.coupon_list[o].id,0==e.coupon_list[o].coupon.type?e.recording="￥"+e.coupon_list[o].coupon.discount_value+"元":e.recording="￥"+e.coupon_list[o].coupon.discount_value+"折"):(e.require_data.coupon_id="",e.recording="不使用"))}),t("log",this.require_data," at pages\\com_page\\s_order.vue:216"),this.Index()},Index:function(){this.service.entire(this,"post",this.APIconfig.api_root.com_page.buy_index,this.require_data,function(e,o){if(e.data=o.data.base,""!=o.data.plugins_coupon_data.coupon_list){var a={not_coupon:"不使用"},n=o.data.plugins_coupon_data.coupon_list;n.push(a);var i=!0,r=!1,s=void 0;try{for(var c,u=n[Symbol.iterator]();!(i=(c=u.next()).done);i=!0){var d=c.value;d.choice=!1}}catch($){r=!0,s=$}finally{try{i||null==u.return||u.return()}finally{if(r)throw s}}if(""!=o.data.plugins_coupon_data.coupon_choice){var l=!0,p=!1,_=void 0;try{for(var f,h=n[Symbol.iterator]();!(l=(f=h.next()).done);l=!0){var v=f.value;v.id==o.data.plugins_coupon_data.coupon_choice.id&&(v.choice=!0)}}catch($){p=!0,_=$}finally{try{l||null==h.return||h.return()}finally{if(p)throw _}}}e.coupon_list=n}o.data.base.address?e.show_add=1:e.show_add=0,e.address=o.data.base.address,e.shopp=o.data.goods_list,e.extension=o.data.extension_data;var m=o.data.payment_list;t("log",e.shopp," at pages\\com_page\\s_order.vue:248");var y=!0,g=!1,b=void 0;try{for(var w,x=m[Symbol.iterator]();!(y=(w=x.next()).done);y=!0){var S=w.value;S.choice=!1}}catch($){g=!0,b=$}finally{try{y||null==x.return||x.return()}finally{if(g)throw b}}e.payment=m})},payments:function(){var e=this;this.address?this.payment_id?a.showModal({title:"提示",content:"是否确定支付？",success:function(o){if(o.confirm){var n={user_id:e.$store.state.user.id,address_id:e.address.id,payment_id:e.payment_id},i=Object.assign(n,e.require_data);t("log",e.payment_name," at pages\\com_page\\s_order.vue:284"),e.service.entire(e,"post",e.APIconfig.api_root.com_page.buy_add,i,function(o,n){t("log",n," at pages\\com_page\\s_order.vue:286"),0==n.code?o.service.entire(o,"post",o.APIconfig.api_root.com_page.order_pay,{user_id:e.$store.state.user.id,id:n.data.order.id},function(o,n){t("log",n," at pages\\com_page\\s_order.vue:292"),0==n.code?o.service.order.apply(o,[n,e.payment_name,"../subuser/s_order?status=-1"]):a.showToast({icon:"none",title:n.msg})}):a.showToast({icon:"none",title:n.msg})})}else if(o.cancel)return}}):a.showToast({icon:"none",title:"请选择支付方式"}):a.showToast({icon:"none",title:"请添加收货地址"})}},onLoad:function(e){t("log",JSON.parse(e.data)," at pages\\com_page\\s_order.vue:321"),this.options=JSON.parse(e.data);var o,a=JSON.parse(e.data);t("log"," at pages\\com_page\\s_order.vue:325"),o="cart"==a.type?{user_id:this.$store.state.user.id,ids:a.id,buy_type:a.type}:{user_id:this.$store.state.user.id,goods_id:a.id,stock:a.num,spec:a.spec,buy_type:a.type},this.require_data=o},onShow:function(){this.Index()}};e.default=i}).call(this,o("0de9")["default"],o("6e42")["default"])},b3d6:function(t,e,o){"use strict";(function(t){o("9e19"),o("921b");a(o("66fd"));var e=a(o("f7bd"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},caa4:function(t,e,o){"use strict";o.r(e);var a=o("b269"),n=o.n(a);for(var i in a)"default"!==i&&function(t){o.d(e,t,function(){return a[t]})}(i);e["default"]=n.a},f7bd:function(t,e,o){"use strict";o.r(e);var a=o("56d3"),n=o("caa4");for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);o("186a");var r,s=o("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"00d76556",null,!1,a["a"],r);e["default"]=c.exports}},[["b3d6","common/runtime","common/vendor"]]]);