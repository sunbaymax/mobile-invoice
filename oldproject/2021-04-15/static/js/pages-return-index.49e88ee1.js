(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-return-index"],{"350d":function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={components:{},data:function(){return{openid:"",return_reason:"",id:"",logistics_num:"",waybtnIndex:"",way:"",tabCurrentIndex:0}},onLoad:function(t){var i=uni.getStorageSync("invoiceopenId");this.openid=i,this.tabCurrentIndex=0,this.way=t.way,this.id=t.id},methods:{nowgo:function(){this.$http.post({url:"/erp/invoice/return",data:{id:this.id,logistics_num:this.logistics_num,return_reason:this.return_reason,openid:this.openid}}).then((function(t){uni.showToast({title:"提交成功!"}),setTimeout((function(){uni.navigateTo({url:"/pages/list/index"})}),1500)})).catch((function(t){uni.showToast({image:"../../static/image/error.png",title:"没有更多数据"})}))}}};i.default=e},4092:function(t,i,n){"use strict";n.r(i);var e=n("350d"),a=n.n(e);for(var r in e)"default"!==r&&function(t){n.d(i,t,(function(){return e[t]}))}(r);i["default"]=a.a},"429a":function(t,i,n){var e=n("b768");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("2dc4343c",e,!0,{sourceMap:!1,shadowMode:!1})},"73e5":function(t,i,n){"use strict";var e;n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return r})),n.d(i,"a",(function(){return e}));var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.way,expression:"way==1"}],staticClass:"aline"},[n("v-uni-view",{staticClass:"left"},[t._v("运单号"),n("v-uni-text",{staticClass:"requisite"},[t._v("*")]),t._v("：")],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入运单号"},model:{value:t.logistics_num,callback:function(i){t.logistics_num=i},expression:"logistics_num"}})],1)],1),n("v-uni-view",{staticClass:"bigaline"},[n("v-uni-view",{staticClass:"left"},[t._v("退票原因"),n("v-uni-text",{staticClass:"requisite"},[t._v("*")]),t._v("：")],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-textarea",{staticClass:"uni-textarea",attrs:{placeholder:"请输入退票原因"},model:{value:t.return_reason,callback:function(i){t.return_reason=i},expression:"return_reason"}})],1)],1)],1)],1),n("v-uni-view",{class:[1==t.tabCurrentIndex?"btnbutton":"btn"]},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.nowgo.apply(void 0,arguments)}}},[t._v("确认退换")])],1)],1)},r=[]},"94ab":function(t,i,n){"use strict";var e=n("429a"),a=n.n(e);a.a},b768:function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-1bd93bb5]{background:#fff}.container .content[data-v-1bd93bb5]{background:#fff;height:100%;padding:%?30?%;box-sizing:border-box}.container .aline[data-v-1bd93bb5]{height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:%?2?% solid #f5f5f5}.container .aline .left[data-v-1bd93bb5]{width:%?186?%;text-align:left;color:#333;font-size:%?28?%}.container .aline .left .requisite[data-v-1bd93bb5]{display:inline-block;height:%?100?%;line-height:%?100?%;color:red}.container .aline .right uni-input[data-v-1bd93bb5]{width:%?400?%;height:%?80?%;font-size:%?28?%}.container .bigaline[data-v-1bd93bb5]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:%?2?% solid #f5f5f5}.container .bigaline .left[data-v-1bd93bb5]{text-align:left;color:#333;height:%?165?%;font-size:%?28?%;margin-right:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.container .bigaline .left .requisite[data-v-1bd93bb5]{display:inline-block;color:red}.container .bigaline .right[data-v-1bd93bb5]{height:%?200?%}.container .bigaline .right .uploadimgs[data-v-1bd93bb5]{display:inline-block;height:%?120?%;width:%?120?%;margin:%?30?% 0;box-sizing:border-box}.container .bigaline .right uni-textarea[data-v-1bd93bb5]{padding:%?20?% 0 0;display:inline-block;width:%?400?%;height:%?160?%;font-size:%?28?%}.container .btn[data-v-1bd93bb5]{cursor:pointer;width:%?600?%;height:%?90?%;border:1px solid #007aff;margin:0 auto;position:fixed;bottom:%?60?%;left:%?75?%;border:none;outline:none;padding:%?60?% 0 %?30?%}.container .btn uni-button[data-v-1bd93bb5]{background:#1b4cef;border-radius:%?60?%;border:none;font-size:%?30?%;height:%?90?%;line-height:%?90?%;outline:none}',""]),t.exports=i},b7cd:function(t,i,n){"use strict";n.r(i);var e=n("73e5"),a=n("4092");for(var r in a)"default"!==r&&function(t){n.d(i,t,(function(){return a[t]}))}(r);n("94ab");var o,s=n("f0c5"),l=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"1bd93bb5",null,!1,e["a"],o);i["default"]=l.exports}}]);