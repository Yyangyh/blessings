(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/subclass/applyFor"],{"1d9d":function(t,e,n){"use strict";(function(t){n("9e19"),n("921b");a(n("66fd"));var e=a(n("49f5"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},2940:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return n.e("pages/common/returns").then(n.bind(null,"c43c"))},s={components:{returns:i},data:function(){return{title:"申请",name:"",phone:"",idCard:"",text:"",site:"",index:0,array:["男","女"],grade_index:0,grade_list:[],apply_index:0,apply_list:[]}},methods:{Change:function(e){t("log","picker发送选择改变，携带值为",e.target.value," at pages\\subclass\\applyFor.vue:101"),this.index=e.target.value},Change_grade:function(e){t("log","picker发送选择改变，携带值为",e.target.value," at pages\\subclass\\applyFor.vue:105"),this.grade_index=e.target.value},Change_apply:function(e){t("log","picker发送选择改变，携带值为",e.target.value," at pages\\subclass\\applyFor.vue:109"),this.apply_index=e.target.value},register:function(){var e=/^\d{15}(\d{2}[A-Za-z0-9])?$/.test(this.idCard),n=/^[\u4E00-\u9FA5]{2,4}$/.test(this.name);if(""==this.phone||""==this.name||""==this.idCard||""==this.text||""==this.idCard||""==this.site)return a.showToast({icon:"none",title:"输入框不能为空!"}),!1;if(!/^1[3-9][0-9]\d{8,11}$/.test(this.phone))return a.showToast({icon:"none",title:"请输入正确的11位手机号码!"}),!1;if(!e)return a.showToast({icon:"none",title:"请输入正确的身份证号码!"}),!1;if(!n)return a.showToast({icon:"none",title:"请您输入正确的名字!"}),!1;var i={user_id:this.$store.state.user.id,username:this.name,mobile:this.phone,id_card:this.idCard,gender:0==this.index?1:2,culture:this.text,apply:this.grade_list[this.grade_index].id,classify:this.apply_list[this.apply_index].id,address:this.site};t("log",i," at pages\\subclass\\applyFor.vue:152"),this.service.entire(this,"post",this.APIconfig.api_root.subclass.c_formData,i,function(t,e){a.showToast({icon:"none",title:e.msg}),0==e.code&&setTimeout(function(){t.service.returns()},1e3)})}},onLoad:function(){},onShow:function(){this.service.entire(this,"post",this.APIconfig.api_root.subclass.c_Index,{},function(e,n){t("log",n," at pages\\subclass\\applyFor.vue:171"),e.grade_list=n.data.grade,e.apply_list=n.data.apply})}};e.default=s}).call(this,n("0de9")["default"],n("6e42")["default"])},"49f5":function(t,e,n){"use strict";n.r(e);var a=n("e25f"),i=n("da5a");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("cd06");var r,o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=u.exports},"57b4":function(t,e,n){},cd06:function(t,e,n){"use strict";var a=n("57b4"),i=n.n(a);i.a},da5a:function(t,e,n){"use strict";n.r(e);var a=n("2940"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=i.a},e25f:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return a})}},[["1d9d","common/runtime","common/vendor"]]]);