(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-return-index"],{"200c":function(t,e,n){"use strict";n.r(e);var i=n("c730"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"6c81":function(t,e,n){"use strict";n.r(e);var i=n("6fb2"),a=n("200c");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("ac9d");var r,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"ea2d9654",null,!1,i["a"],r);e["default"]=c.exports},"6fb2":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.way,expression:"way==1"}],staticClass:"aline"},[n("v-uni-view",{staticClass:"left"},[t._v("运单号"),n("v-uni-text",{staticClass:"requisite"},[t._v("*")]),t._v("：")],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入运单号"},model:{value:t.logistics_num,callback:function(e){t.logistics_num=e},expression:"logistics_num"}})],1)],1),n("v-uni-view",{staticClass:"bigaline"},[n("v-uni-view",{staticClass:"left"},[t._v("退票原因"),n("v-uni-text",{staticClass:"requisite"},[t._v("*")]),t._v("：")],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-textarea",{staticClass:"textarea",attrs:{placeholder:"请输入退票原因"},model:{value:t.return_reason,callback:function(e){t.return_reason=e},expression:"return_reason"}})],1)],1),n("v-uni-view",{staticClass:"btn"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.returnbtn.apply(void 0,arguments)}}},[t._v("确认退票")])],1)],1)],1)],1)},o=[]},"734e":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-ea2d9654]{background:#fff}.container .content[data-v-ea2d9654]{background:#fff;height:100%;padding:15px;-webkit-box-sizing:border-box;box-sizing:border-box}.container .content .aline[data-v-ea2d9654]{height:50px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #f5f5f5}.container .content .aline .left[data-v-ea2d9654]{width:93px;text-align:left;color:#333;font-size:14px}.container .content .aline .left .requisite[data-v-ea2d9654]{display:inline-block;height:50px;line-height:50px;color:red}.container .content .aline .right uni-input[data-v-ea2d9654]{width:200px;height:40px;font-size:14px}.container .content .bigaline[data-v-ea2d9654]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #f5f5f5}.container .content .bigaline .left[data-v-ea2d9654]{padding-top:8px;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:left;color:#333;height:82px;font-size:14px;margin-right:15px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.container .content .bigaline .left .requisite[data-v-ea2d9654]{display:inline-block;color:red}.container .content .bigaline .right uni-textarea[data-v-ea2d9654]{padding:10px 0 0;display:inline-block;width:200px;height:80px;font-size:14px}.container .content .btn[data-v-ea2d9654]{cursor:pointer;width:300px;height:45px;border:1px solid #007aff;margin:0 auto;position:fixed;bottom:30px;left:37px;border:none;outline:none;padding:30px 0 15px}.container .content .btn uni-button[data-v-ea2d9654]{background:#1b4cef;border-radius:30px;border:none;font-size:15px;height:45px;line-height:45px;outline:none}',""]),t.exports=e},8151:function(t,e,n){"use strict";n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i="http://www.zjcoldcloud.com/managesystem/public/index.php";function a(t,e){var n=new Promise((function(n,a){var o=e;uni.request({url:i+t,data:o,method:"GET",header:{"content-type":"application/x-www-form-urlencoded",accept:"*/*"},success:function(t){200===t.data.code&&t.data.code,n(t.data)},error:function(t){a("网络出错")}})}));return n}function o(t,e){var n=new Promise((function(n,a){var o=e;uni.request({url:i+t,data:o,method:"POST",header:{"content-type":"application/x-www-form-urlencoded",Accept:"application/json"},success:function(t){200===t.data.code&&t.data.code,n(t.data)},error:function(t){a("网络出错")}})}));return n}var r={baseUrl:i,gets:a,post:o};e.default=r},aadb:function(t,e,n){var i=n("734e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("6e1b6781",i,!0,{sourceMap:!1,shadowMode:!1})},ac9d:function(t,e,n){"use strict";var i=n("aadb"),a=n.n(i);a.a},c730:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("8151")),o={data:function(){return{way:"",logistics_num:"",return_reason:""}},onLoad:function(t){this.way=t.way,this.id=t.id;var e=uni.getStorageSync("invoiceopenId");this.openid=e},methods:{returnbtn:function(){var t={id:this.id,logistics_num:this.logistics_num,return_reason:this.return_reason,openid:this.openid};a.default.post("/erp/invoice/return",t).then((function(t){0==t.code?(uni.showToast({title:t.message}),setTimeout((function(){uni.reLaunch({url:"/pages/list/index"})}),1500)):uni.showToast({image:"../../static/image/error.png",title:t.message})})).catch((function(t){}))}}};e.default=o}}]);