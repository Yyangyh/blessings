(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/textArea"],{"09ae":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={props:["index"],data:function(){return{content:"",send:""}},methods:{saying:function(){var n=this;this.send&&clearTimeout(this.send),this.send=setTimeout(function(){n.$emit("saying",{content:n.content,index:n.index})},200)}}};t.default=u},3416:function(n,t,e){"use strict";e.r(t);var u=e("95b1"),i=e("5167");for(var a in i)"default"!==a&&function(n){e.d(t,n,function(){return i[n]})}(a);e("3924");var r=e("2877"),o=Object(r["a"])(i["default"],u["a"],u["b"],!1,null,null,null);t["default"]=o.exports},3924:function(n,t,e){"use strict";var u=e("f508"),i=e.n(u);i.a},5167:function(n,t,e){"use strict";e.r(t);var u=e("09ae"),i=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=i.a},"95b1":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return i})},f508:function(n,t,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/textArea-create-component',
    {
        'components/textArea-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("3416"))
        })
    },
    [['components/textArea-create-component']]
]);
