(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-change-index"],{"07db":function(t,n,e){var i=e("380c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("68751026",i,!0,{sourceMap:!1,shadowMode:!1})},"158f":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"list"},[e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.way,expression:"way==1"}],staticClass:"aline"},[e("v-uni-view",{staticClass:"left"},[t._v("运单号"),e("v-uni-text",{staticClass:"requisite"},[t._v("*")]),t._v("：")],1),e("v-uni-view",{staticClass:"right"},[e("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入运单号"},model:{value:t.logistics_num,callback:function(n){t.logistics_num=n},expression:"logistics_num"}})],1)],1),e("v-uni-view",{staticClass:"bigaline"},[e("v-uni-view",{staticClass:"left"},[t._v("换票原因"),e("v-uni-text",{staticClass:"requisite"},[t._v("*")]),t._v("：")],1),e("v-uni-view",{staticClass:"right"},[e("v-uni-textarea",{staticClass:"textarea",attrs:{placeholder:"请输入换票原因"},model:{value:t.change_reason,callback:function(n){t.change_reason=n},expression:"change_reason"}})],1)],1),e("v-uni-view",{staticClass:"btn"},[e("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.changebtn.apply(void 0,arguments)}}},[t._v("确认换票")])],1)],1)],1)],1)},o=[]},"258d":function(t,n,e){"use strict";e.r(n);var i=e("8bf2"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"380c":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-cf12d010]{background:#fff}.container .content[data-v-cf12d010]{background:#fff;height:100%;padding:15px;-webkit-box-sizing:border-box;box-sizing:border-box}.container .content .aline[data-v-cf12d010]{height:50px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #f5f5f5}.container .content .aline .left[data-v-cf12d010]{width:93px;text-align:left;color:#333;font-size:14px}.container .content .aline .left .requisite[data-v-cf12d010]{display:inline-block;height:50px;line-height:50px;color:red}.container .content .aline .right uni-input[data-v-cf12d010]{width:200px;height:40px;font-size:14px}.container .content .bigaline[data-v-cf12d010]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #f5f5f5}.container .content .bigaline .left[data-v-cf12d010]{padding-top:8px;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:left;color:#333;height:82px;font-size:14px;margin-right:15px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.container .content .bigaline .left .requisite[data-v-cf12d010]{display:inline-block;color:red}.container .content .bigaline .right uni-textarea[data-v-cf12d010]{padding:10px 0 0;display:inline-block;width:200px;height:80px;font-size:14px}.container .content .btn[data-v-cf12d010]{cursor:pointer;width:300px;height:45px;border:1px solid #007aff;margin:0 auto;position:fixed;bottom:30px;left:37px;border:none;outline:none;padding:30px 0 15px}.container .content .btn uni-button[data-v-cf12d010]{background:#1b4cef;-webkit-border-radius:30px;border-radius:30px;border:none;font-size:15px;height:45px;line-height:45px;outline:none}',""]),t.exports=n},"3a10":function(t,n,e){"use strict";e.r(n);var i=e("158f"),a=e("258d");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("5535");var s,c=e("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"cf12d010",null,!1,i["a"],s);n["default"]=r.exports},5535:function(t,n,e){"use strict";var i=e("07db"),a=e.n(i);a.a},8151:function(t,n,e){"use strict";e("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i="http://www.zjcoldcloud.com/managesystem_back/public/index.php";function a(t,n){var e=new Promise((function(e,a){var o=n;uni.request({url:i+t,data:o,method:"GET",header:{"content-type":"application/x-www-form-urlencoded",accept:"*/*"},success:function(t){200===t.data.code&&t.data.code,e(t.data)},error:function(t){a("网络出错")}})}));return e}function o(t,n){var e=new Promise((function(e,a){var o=n;uni.request({url:i+t,data:o,method:"POST",header:{"content-type":"application/x-www-form-urlencoded",Accept:"application/json"},success:function(t){200===t.data.code&&t.data.code,e(t.data)},error:function(t){a("网络出错")}})}));return e}var s={baseUrl:i,gets:a,post:o};n.default=s},"8bf2":function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("8151")),o={data:function(){return{way:"",logistics_num:"",change_reason:""}},onLoad:function(t){this.way=t.way,this.id=t.id;var n=uni.getStorageSync("invoiceopenId");this.openid=n},methods:{changebtn:function(){var t={id:this.id,logistics_num:this.logistics_num,change_reason:this.change_reason,openid:this.openid};a.default.post("/erp/invoice/change",t).then((function(t){0==t.code?(uni.showToast({title:t.message}),setTimeout((function(){uni.reLaunch({url:"/pages/list/index"})}),1500)):uni.showToast({image:"../../static/image/error.png",title:t.message})})).catch((function(t){}))}}};n.default=o}}]);