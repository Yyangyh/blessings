(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/subhome/threehome/group_order"],{"2fde":function(t,e,n){"use strict";(function(t){n("9e19"),n("921b");i(n("66fd"));var e=i(n("a9d0"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},5549:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=(t._self._c,Number(t.shopp.groupsprice)),i=Number(t.shopp.freight),a=Number(t.shopp.price),o=Number(t.shopp.freight);t.$mp.data=Object.assign({},{$root:{m0:n,m1:i,m2:a,m3:o}})},o=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i})},7712:function(t,e,n){"use strict";var i=n("b46a"),a=n.n(i);a.a},"8e14":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return n.e("pages/common/returns").then(n.bind(null,"c43c"))},a={components:{returns:i},data:function(){return{title:"确认订单",data:"",type:"",address:"",shopp:"",payment:"",payment_id:"",show_add:3,options:"",payment_name:"",teamid:""}},methods:{jump:function(e){t.navigateTo({url:e})},choice:function(t){var e=!0,n=!1,i=void 0;try{for(var a,o=this.payment[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var r=a.value;r.choice=!1}}catch(s){n=!0,i=s}finally{try{e||null==o.return||o.return()}finally{if(n)throw i}}this.payment[t].choice=!0,this.payment_id=this.payment[t].id,this.payment_name=this.payment[t].payment},payments:function(){var e=this;if(this.address)if(this.payment_id){var n={aid:e.address.id,id:e.shopp.id,payment_id:e.payment_id,type:e.type,user_id:this.$store.state.user.id};this.teamid&&(n.teamid=this.teamid),t.showModal({title:"提示",content:"是否确定支付？",success:function(i){if(i.confirm)e.service.entire(e,"get",e.APIconfig.api_root.subhome.threehome.g_Confirm,n,function(n,i){0==i.code?n.service.entire(n,"get",n.APIconfig.api_root.subhome.threehome.g_pay,{user_id:n.$store.state.user.id,orderid:i.data.orderid,payment_id:n.payment_id},function(t,i){n.service.order.apply(n,[i,e.payment_name,"../../subuser/assemble_order?status=0"])}):t.showToast({icon:"none",title:i.msg})});else if(i.cancel)return}})}else t.showToast({icon:"none",title:"请选择支付方式"});else t.showToast({icon:"none",title:"请添加收货地址"})}},onLoad:function(t){this.options=t,this.type=t.type,t.teamid&&(this.teamid=t.teamid)},onShow:function(){var e=this.options,n={id:e.id,type:e.type,user_id:this.$store.state.user.id};this.teamid&&(n.teamid=this.teamid),this.service.entire(this,"get",this.APIconfig.api_root.subhome.threehome.g_ConfirmDetail,n,function(e,n){if(-100!=n.code){e.data=n.data,n.data.address?e.show_add=1:e.show_add=0,e.address=n.data.address,e.shopp=n.data.goods;var i=n.data.payment_list,a=!0,o=!1,r=void 0;try{for(var s,d=i[Symbol.iterator]();!(a=(s=d.next()).done);a=!0){var u=s.value;u.choice=!1}}catch(c){o=!0,r=c}finally{try{a||null==d.return||d.return()}finally{if(o)throw r}}e.payment=i}else t.showModal({title:"提示",content:n.msg,showCancel:!1,success:function(e){e.confirm&&t.navigateBack({delta:1})}})})}};e.default=a}).call(this,n("6e42")["default"])},a9d0:function(t,e,n){"use strict";n.r(e);var i=n("5549"),a=n("ecf9");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("7712");var r,s=n("f0c5"),d=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"77439399",null,!1,i["a"],r);e["default"]=d.exports},b46a:function(t,e,n){},ecf9:function(t,e,n){"use strict";n.r(e);var i=n("8e14"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a}},[["2fde","common/runtime","common/vendor"]]]);