(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-apply-index"],{"0e2f":function(e,i,t){"use strict";var n=t("4ea4");t("99af"),t("4de4"),t("a15b"),t("d81d"),t("a434"),t("4d63"),t("ac1f"),t("25f0"),t("1276"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,t("96cf");var a=n(t("1da1")),s=n(t("e880")),o=!0,r={components:{WCompress:s.default},data:function(){return{multi:[],tabCurrentIndex:0,waybtnIndex:2,imageList:[],imageLength:6,sourceTypeIndex:2,sizeTypeIndex:2,navList:[{state:0,text:"增值税普通发票",orderList:[]},{state:1,text:"增值税专用发票",orderList:[]}],waybtn:[],company_name:"",company_address:"",company_phone:"",tax_num:"",consignee:"",consignee_address:"",consignee_phone:"",consignee_email:"",bank:"",bank_num:"",file:[],desc:"",openid:"",id:"",curimg:[]}},onLoad:function(e){this.tabCurrentIndex=0,this.waybtn=[{text:"电子发票",type:2}];var i=uni.getStorageSync("invoiceopenId");this.openid=i},methods:{onMulti:function(){var e=this;uni.chooseImage({count:9,success:function(i){uni.showLoading({title:"图片压缩中...",mask:!0}),e.$refs.wCompress.start(i.tempFilePaths).then((function(i){console.log(i),e.multi=i,uni.hideLoading()})).catch((function(e){console.log(e),uni.hideLoading()}))}})},changeTab:function(e){this.tabCurrentIndex=e.target.current},tabClick:function(e){this.tabCurrentIndex=e;var i=[];1==e?(i=[{text:"纸质发票",type:1}],this.waybtnIndex=1):(i=[{text:"电子发票",type:2}],this.waybtnIndex=2),this.waybtn=i},tabwaybtn:function(e){this.waybtnIndex=e},checkMobile:function(e){return RegExp(/^1[3456789]\d{9}$/).test(e)},nowgo:function(){console.log(this.curimg);var e=this.curimg,i=e.join(";");if(o){for(var t={},n=[],a=document.querySelectorAll(".upload-Picitem"),s=0;s<a.length;s++)n.push(a[s].lastChild.src);if("0"==this.tabCurrentIndex&&"1"==this.waybtnIndex){if(""==this.consignee)return uni.showToast({image:"../../static/image/error.png",title:"收货人不能为空"}),!1;if(""==this.consignee_address)return uni.showToast({image:"../../static/image/error.png",title:"收货人地址不能为空"}),!1;if(""==this.consignee_phone)return uni.showToast({image:"../../static/image/error.png",title:"联系方式不能为空"}),!1;if(!this.checkMobile(this.consignee_phone))return void uni.showToast({title:"手机号格式错误",icon:"none"});if(""==this.company_name)return uni.showToast({image:"../../static/image/error.png",title:"公司名称不能为空"}),!1;if(""==this.tax_num)return uni.showToast({image:"../../static/image/error.png",title:"纳税人识别号不能为空"}),!1;t={type:1,way:1,state:1,consignee:this.consignee,consignee_address:this.consignee_address,consignee_phone:this.consignee_phone,company_name:this.company_name,tax_num:this.tax_num,desc:this.desc,openid:this.openid},console.log(" 0 普通发票 1纸质")}else if("0"==this.tabCurrentIndex&&"2"==this.waybtnIndex){if(""==this.company_name)return uni.showToast({image:"../../static/image/error.png",title:"公司名称不能为空"}),!1;if(""==this.consignee_phone)return uni.showToast({image:"../../static/image/error.png",title:"联系方式不能为空"}),!1;if(!this.checkMobile(this.consignee_phone))return void uni.showToast({title:"手机号格式错误",icon:"none"});if(""==this.tax_num)return uni.showToast({image:"../../static/image/error.png",title:"纳税人识别号不能为空"}),!1;if(""==this.consignee_email)return uni.showToast({image:"../../static/image/error.png",title:"邮箱账号不能为空"}),!1;t={type:1,way:2,state:1,consignee_phone:this.consignee_phone,consignee_email:this.consignee_email,company_name:this.company_name,tax_num:this.tax_num,desc:this.desc,openid:this.openid},console.log(" 0 普通发票 2电子")}else if("1"==this.tabCurrentIndex&&"1"==this.waybtnIndex){if(""==this.consignee)return uni.showToast({image:"../../static/image/error.png",title:"收货人不能为空"}),!1;if(""==this.consignee_address)return uni.showToast({image:"../../static/image/error.png",title:"收货人地址不能为空"}),!1;if(!this.checkMobile(this.consignee_phone))return void uni.showToast({title:"手机号格式错误",icon:"none"});if(""==this.consignee_phone)return uni.showToast({image:"../../static/image/error.png",title:"联系方式不能为空"}),!1;if(""==this.company_name)return uni.showToast({image:"../../static/image/error.png",title:"公司名称不能为空"}),!1;if(""==this.tax_num)return uni.showToast({image:"../../static/image/error.png",title:"纳税人识别号不能为空"}),!1;if(""==this.company_address)return uni.showToast({image:"../../static/image/error.png",title:"公司营业地址不能为空"}),!1;if(""==this.company_phone)return uni.showToast({image:"../../static/image/error.png",title:"公司电话不能为空"}),!1;if(""==this.bank)return uni.showToast({image:"../../static/image/error.png",title:"开户银行不能为空"}),!1;if(""==this.bank_num)return uni.showToast({image:"../../static/image/error.png",title:"开户银行账号不能为空"}),!1;t={type:2,way:1,state:1,consignee:this.consignee,consignee_address:this.consignee_address,consignee_phone:this.consignee_phone,company_name:this.company_name,tax_num:this.tax_num,company_address:this.company_address,company_phone:this.company_phone,bank:this.bank,bank_num:this.bank_num,desc:this.desc,openid:this.openid},console.log("1 专用发票 1纸质")}else{if(""==this.company_name)return uni.showToast({image:"../../static/image/error.png",title:"公司名称不能为空"}),!1;if(""==this.tax_num)return uni.showToast({image:"../../static/image/error.png",title:"纳税人识别号不能为空"}),!1;if(""==this.company_address)return uni.showToast({image:"../../static/image/error.png",title:"公司营业地址不能为空"}),!1;if(""==this.company_phone)return uni.showToast({image:"../../static/image/error.png",title:"公司电话不能为空"}),!1;if(""==this.bank)return uni.showToast({image:"../../static/image/error.png",title:"开户银行不能为空"}),!1;if(""==this.bank_num)return uni.showToast({image:"../../static/image/error.png",title:"开户银行账号不能为空"}),!1;if(""==this.consignee_email)return uni.showToast({image:"../../static/image/error.png",title:"邮箱不能为空"}),!1;t={type:2,way:2,state:1,consignee_email:this.consignee_email,company_name:this.company_name,tax_num:this.tax_num,company_address:this.company_address,company_phone:this.company_phone,bank:this.bank,bank_num:this.bank_num,desc:this.desc,openid:this.openid},console.log("1 专用发票 2电子")}var r=this.imageList.map((function(e,i){return{name:"image"+i,uri:e}}));if(r.length<=0)return uni.showToast({image:"../../static/image/error.png",title:"请上传发货单"}),!1;t.file=i,console.log(t),this.$http.post({url:"/erp/invoice/add",data:t}).then((function(e){console.log(e),o=!1,setTimeout((function(){o=!0}),1e3),0==e.code?(uni.showToast({title:"提交成功!"}),setTimeout((function(){uni.navigateTo({url:"/pages/list/index"})}),1500)):uni.showToast({image:"../../static/image/error.png",title:e.data.message})})).catch((function(e){console.log(e),uni.showToast({image:"../../static/image/error.png",title:"提交失败!"})}))}},chooseImage:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(){var i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:uni.chooseImage({count:9,success:function(e){uni.showLoading({title:"图片压缩中...",mask:!0}),i.$refs.wCompress.start(e.tempFilePaths).then((function(e){console.log(e),i.multi=i.imageList.concat(e),i.imageList=i.imageList.concat(e);var t=e,n=t.map((function(e,i){return{name:"image"+i,uri:e}}));if(n.length<=0)return uni.showToast({image:"../../static/image/error.png",title:"请上传发货单"}),!1;uni.uploadFile({url:"http://www.zjcoldcloud.com/managesystem/public/index.php/erp/invoice/upload",files:n,name:"file",formData:{id:1},success:function(e){var t=JSON.parse(e.data);if(0==t.code){var n=t.data.file.split(";"),a=n.filter((function(e,i){return""!=e})),s=i.curimg;i.curimg=s.concat(a)}}}),uni.hideLoading()})).catch((function(e){console.log(e),uni.hideLoading()}))}});case 1:case"end":return e.stop()}}),e)})));function i(){return e.apply(this,arguments)}return i}(),previewImg:function(e){var i=[];i[0]=e,uni.previewImage({current:0,urls:i})},previewImage:function(e){var i=e.target.dataset.src;uni.previewImage({current:i,urls:this.imageList})},deleteImage:function(e){console.log(e,"删除");var i=e.currentTarget.dataset.index,t=this,n=t.imageList,a=t.multi,s=t.curimg;console.log(n[i],"del"),n.splice(i,1),s.splice(i,1),a.splice(i,1),t.imageList=n,t.curimg=s,t.multi=a}}};i.default=r},"1de5":function(e,i,t){"use strict";e.exports=function(e,i){return i||(i={}),e=e&&e.__esModule?e.default:e,"string"!==typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),i.hash&&(e+=i.hash),/["'() \t\n]/.test(e)||i.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},"37fe":function(e,i,t){e.exports=t.p+"static/img/fahuodan.a2ae51ef.png"},"3ba1":function(e,i,t){var n=t("24fb"),a=t("1de5"),s=t("7f91"),o=t("7f91");i=n(!1);var r=a(s),c=a(o);i.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第一套图片上传样式（内部图标相机） */.upload-image-view[data-v-475306c0]{width:100%;margin:%?20?% 0 %?20?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.upload-image-view .title[data-v-475306c0]{width:100%;font-family:PingFang-SC-Regular;font-size:%?24?%;color:#4a4a4a;margin-bottom:%?15?%;line-height:100%}.upload-image-view .info[data-v-475306c0]{width:100%;font-family:PingFang-SC-Regular;font-size:%?24?%;color:#ff4259;height:%?48?%;margin-top:%?15?%;line-height:%?28?%}.upload-image-view .image-view[data-v-475306c0]{height:%?120?%;width:%?120?%;position:relative;margin:%?15?% %?15?% %?15?% %?0?%;border-radius:%?8?%}.upload-image-view .image-view uni-image[data-v-475306c0]{height:100%;width:100%;border-radius:%?8?%}.upload-image-view .image-view .del-btn[data-v-475306c0]{background-color:#f67371;border-radius:50%;width:%?25?%;height:%?25?%;position:absolute;top:%?-12?%;right:%?-12?%;z-index:2;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.upload-image-view .image-view .del-btn .baicha[data-v-475306c0]{display:inline-block;width:%?20?%;height:%?5?%;background:#fff;line-height:0;font-size:0;vertical-align:middle;-webkit-transform:rotate(45deg)}.upload-image-view .image-view .del-btn .baicha[data-v-475306c0]:after{content:"/";display:block;width:%?20?%;height:%?5?%;background:#fff;-webkit-transform:rotate(-90deg)}.upload-image-view .add-view[data-v-475306c0]{height:%?120?%;width:%?120?%;\r\n\t/* margin: 15upx 15upx 15upx 0upx; */display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;\r\n\t/* background: rgba(255, 255, 255, 0.00); */\r\n\t/* border: 3upx dashed #979797; */background:url('+r+') no-repeat;background-size:contain\r\n\t/* border-radius: 8upx; */}\r\n/* 相机 */.upload-image-view .add-view .xiangji[data-v-475306c0]{height:%?40?%;width:%?48?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap}.upload-image-view .add-view .xiangji .tixing[data-v-475306c0]{width:%?10?%;height:%?7?%;background-color:#fff;border-right:%?10?% solid #fff;border-bottom:%?7?% solid #b2b2b2;border-left:%?10?% solid #fff}.upload-image-view .add-view .xiangji .changfx[data-v-475306c0]{height:%?32?%;width:%?48?%;border-radius:5%;background-color:#b2b2b2;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.upload-image-view .add-view .xiangji .changfx .yuan1[data-v-475306c0]{height:%?20?%;width:%?20?%;border-radius:50%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.upload-image-view .add-view .xiangji .changfx .yuan2[data-v-475306c0]{height:%?10?%;width:%?10?%;border-radius:50%;background-color:#b2b2b2}\r\n/* 第二套图片上传样式（内部图标 十字架）*/\r\n/* 十字架 */.upload-image-view .add-view .cross[data-v-475306c0]{height:%?48?%;width:%?48?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;position:relative}.upload-image-view .add-view .cross .transverse-line[data-v-475306c0]{height:100%;width:48%;position:absolute;border-right:%?3?% solid #5a5a5a;top:0;left:0}.upload-image-view .add-view .cross .vertical-line[data-v-475306c0]{height:48%;width:100%;position:absolute;border-bottom:%?3?% solid #5a5a5a;top:0;left:0}uni-page-body[data-v-475306c0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;background-color:#fff}.body-view[data-v-475306c0]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.info-table[data-v-475306c0]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;background-color:#fff}.info-table .info-table-row[data-v-475306c0]{height:%?120?%;width:92%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:%?1?% solid #ccc}.info-table .info-table-row .table-row-left[data-v-475306c0]{height:%?40?%;font-size:%?28?%;font-weight:400;color:#1c1c1c;line-height:%?40?%}.info-table .info-table-row .table-row-right[data-v-475306c0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.info-table .info-table-row .table-row-right uni-image[data-v-475306c0]{width:%?13?%;height:%?24?%}.info-table .info-table-row .table-row-right uni-input[data-v-475306c0]{width:%?560?%;height:%?40?%;font-size:%?28?%;font-weight:400;color:#1c1c1c;line-height:%?40?%}.table-btn-view[data-v-475306c0]{position:fixed;bottom:%?27?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.table-btn-view .save-btn[data-v-475306c0]{width:92%;height:%?90?%;background:#0af;border-radius:%?10?%;color:#fff}.uploads[data-v-475306c0]{width:92%}.container[data-v-475306c0]{background:#fff;line-height:24px;width:100%}.container .content[data-v-475306c0]{background:#fff;height:100%}.container .list[data-v-475306c0]{padding:0 %?30?%;box-sizing:border-box}.container .list .aline[data-v-475306c0]{height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:%?2?% solid #f5f5f5}.container .list .aline .left[data-v-475306c0]{width:%?240?%;text-align:left;color:#333;font-size:%?28?%}.container .list .aline .left .requisite[data-v-475306c0]{display:inline-block;height:%?100?%;line-height:%?100?%;color:red}.container .list .aline .right uni-input[data-v-475306c0]{width:%?400?%;height:%?80?%;font-size:%?28?%}.container .list .bigaline[data-v-475306c0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:%?2?% solid #f5f5f5}.container .list .bigaline .left[data-v-475306c0]{width:%?240?%;text-align:left;color:#333;height:%?165?%;font-size:%?28?%}.container .list .bigaline .left .requisite[data-v-475306c0]{display:inline-block;height:%?100?%;line-height:%?100?%;color:red}.container .list .bigaline .right[data-v-475306c0]{height:auto;-webkit-box-flex:1;-webkit-flex:1;flex:1}.container .list .bigaline .right .uploadimgs[data-v-475306c0]{display:inline-block;height:%?120?%;width:%?120?%;margin:%?30?% 0;box-sizing:border-box}.container .list .bigaline .right uni-textarea[data-v-475306c0]{padding:%?20?% 0 0;display:inline-block;width:%?400?%;height:%?160?%;font-size:%?28?%}.container .list .bigalinetea[data-v-475306c0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:%?2?% solid #f5f5f5}.container .list .bigalinetea .left[data-v-475306c0]{width:%?240?%;text-align:left;color:#333;height:%?160?%;line-height:%?80?%;font-size:%?28?%}.container .list .bigalinetea .right[data-v-475306c0]{height:%?180?%}.container .list .bigalinetea .right uni-textarea[data-v-475306c0]{padding:%?20?% 0 0;display:inline-block;width:%?400?%;height:%?160?%;font-size:%?28?%}.container body[data-v-475306c0]{margin:0;padding:0;max-width:414px;margin:0 auto}.container .upload-fh[data-v-475306c0]{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAD1klEQVRoQ+XbTYhWVRgH8P8fwZUguFKi2pShbvqg2lhhG0PJlc40zQg62WhDg+jklIo1wViUNgwVTGSWWMngyvCjVdLHLrHaJaOBIIK2DHL7lweegcvL48D7vveee7xztu+d972/Ofec8zznPJe4T5qkRQC2AVgP4A8AMySvt3v7bPcP6rhe0lIAJwFsKvz+CZLb272f7MGSHnDsiy24WZKPNQosyUDWs88EsEGS3zQGLOkpx64OUG+T/LhdrF2f5SMt6QXHPhSghklOd4LNEixpo2OXBaitJL/rFJsdWFKvYxe3oO4A6Cd5phtsVmBJrwH4KgD9C+BVkj91i80GLGk3gKkA9I9jfy8DmwVY0kEAEwHoL8f+XRa2drCkDwG8E4B+A9BH8maZ2FrBkj4D8GYA+hHAKyT/KxtbG1iSRUiWCLS2045VFdjkYEm23HwPYHMAOk5yR1XQue9NFmlJskDCsC8FqCmSe6rGJuthSRYiGnZtgJogeSgFNglYkgX/hn08QI2RPJIKWzlYkqV1hn0kQL1B8ouU2ErBkixhN+zyADVA0j5L3iqZtCTZVoyBlrSILAmwNfZscqn/YOlgSf0AohTOkoBekj/XhS39kZa0E0A0Li0JMOzlOrGlgiWNAjgagCwJ6CF5tW5saWBJ7wEYD0CWBBj2Vg7YUsCSbB19KwBdcOz/uWC7BkuyzbRdAchOBfpygs7dS8eztKRvAQwEqGMkh3LEdtzDkj4CMBagJkna5JVt66iHJUX56jjJ97OVdhN4SLJtGdueaW3N7GFTLqgxPNetC2qWLqDtUGtf8Hif93CyOetwAf0ugGjC+tXRzYm0Cui9AD4JevpPRzcnli6gXwfwZYC+5mGm4WttHa3D892xJAspTwXX3Pae/qVOcelgX7JednS042F58bm60JWAHb3Ot3lWBDg7N5qpA10Z2NFPO/rRADdE8lhqdKVgR69y9BMBbpTkZEp05WBHP+jo5wJc0qQjCdjRdrZkOfSGAJ0s6UgGdrSdHhq6J0An2ThICi4EKMcBDAZom7mtgKUZ58NFoCQrYrFiltZmSYehm1MBUOjpwwAOBGhLOgzdnBqPAno/gA8CtMXdhr5S5rJVyxhuBUgaAfBpALOkw9CXykJnAfYZ3Iq9vw5glnQY+mIZ6GzAjt7iJ49RraWhf+gWnRXY0RaY2Frd/GrawkT2vFfVPhz0aLPqpQvoJx29JkA3qyK+gF7p6GcD9AjJz9sd09mN4WDJutdbLTdIRq8IzPs/yB7sE9nCeW+p8Hjbm2nDAKwcahbAdGPfTGt3nM53/V00ckNMKWY8LAAAAABJRU5ErkJggg==");background-repeat:no-repeat;background-size:100% 100%;height:30px;width:30px}.container .upload-hedaer[data-v-475306c0]{height:55px;display:grid;grid-template-columns:repeat(3,1fr);padding:0 10px;box-sizing:border-box;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center;background:#287cff;color:#fff;border-bottom:1px solid #efefef;font-size:19px}.container .upload-hedaer div[data-v-475306c0]:last-child{text-align:right}.container .upload-textarea[data-v-475306c0]{width:100%;height:60px;font-size:28px;border:1px solid #efefee;max-height:300px}.container .upload-article-text[data-v-475306c0]{width:100%;padding:10px;box-sizing:border-box}.container .upload-file[data-v-475306c0]{position:relative;background:url('+c+') no-repeat 50%/100% 100%;\r\n  /* width: 100px; */height:120px;-webkit-box-ordinal-group:10;-webkit-order:9;order:9}.container .upload-piclist[data-v-475306c0]{padding:0 10px;box-sizing:border-box;display:grid;grid-template-columns:repeat(3,120px);-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;grid-gap:14px}.container #file[data-v-475306c0]{width:100%;height:100%;opacity:0}.container .upload-Picitem[data-v-475306c0]{width:100%;height:120px}.container .upload-Picitem > img[data-v-475306c0]{width:100%;height:100%;object-fit:cover}.container .submit[data-v-475306c0]{padding:15px 0;background-color:#287cff;color:#fff;text-align:center;margin:10px;font-size:20px;border-radius:10px}.container .upload-sm[data-v-475306c0]{padding:10px;box-sizing:border-box;color:grey}.container .upload-sm ol > li[data-v-475306c0]{margin-bottom:10px}.container .way[data-v-475306c0]{padding:0 %?30?%;box-sizing:border-box;height:%?100?%;line-height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:%?2?% solid #f5f5f5}.container .way uni-button[data-v-475306c0]{display:inline-block;width:%?180?%;height:%?54?%;line-height:%?54?%;font-size:%?26?%;margin:0;background:#fff;margin-right:%?70?%;border-radius:%?60?%;border:1px solid #ccc}.container .way .active[data-v-475306c0]{color:#1b4bef;background:#d8e6ff;border:1px solid #1b4bef}.container .navbar[data-v-475306c0]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?100?%;line-height:%?100?%;padding:0 %?30?%;background:#fff;border-bottom:%?2?% solid #f5f5f5;position:relative;z-index:10}.container .navbar .nav-item[data-v-475306c0]{display:-webkit-box;display:-webkit-flex;display:flex;margin-right:%?60?%;-webkit-box-pack:start;-webkit-justify-content:start;justify-content:start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;font-size:14px;color:#333;position:relative}.container .navbar .nav-item.current[data-v-475306c0]{color:#1b4bef}.container .navbar .nav-item.current[data-v-475306c0]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:100%;height:0;border-bottom:2px solid #1b4bef}.container .uni-swiper-item[data-v-475306c0]{height:auto}.container .btn[data-v-475306c0]{cursor:pointer;width:%?600?%;height:%?90?%;border:1px solid #007aff;margin:0 auto;position:fixed;bottom:%?60?%;left:%?75?%;border:none;outline:none;padding:%?60?% 0 %?30?%}.container .btn uni-button[data-v-475306c0]{background:#1b4cef;border-radius:%?60?%;border:none;font-size:%?30?%;height:%?90?%;line-height:%?90?%;outline:none}.container .btnbutton[data-v-475306c0]{cursor:pointer;width:%?600?%;height:%?90?%;border:1px solid #007aff;margin:0 auto;bottom:%?60?%;left:%?75?%;border:none;outline:none;padding:%?60?% 0 %?30?%}.container .btnbutton uni-button[data-v-475306c0]{background:#1b4cef;border-radius:%?60?%;border:none;font-size:%?30?%;height:%?90?%;line-height:%?90?%;outline:none}body.?%PAGE?%[data-v-475306c0]{background-color:#fff}',""]),e.exports=i},4456:function(e,i,t){"use strict";t.r(i);var n=t("b9d9"),a=t("6914");for(var s in a)"default"!==s&&function(e){t.d(i,e,(function(){return a[e]}))}(s);t("cd9d");var o,r=t("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"475306c0",null,!1,n["a"],o);i["default"]=c.exports},6914:function(e,i,t){"use strict";t.r(i);var n=t("0e2f"),a=t.n(n);for(var s in n)"default"!==s&&function(e){t.d(i,e,(function(){return n[e]}))}(s);i["default"]=a.a},"7f91":function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA5LTIyVDE3OjIxOjI3KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA5LTIyVDE3OjIxOjI3KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wOS0yMlQxNzoyMToyNyswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkNjg5ODQ3Yy1mYzlmLWMwNGEtYWEyMy1lNzRhMGY4YWU5MTIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozNTI2ZGU1OS00ZGM3LWVlNDctODg3Yy01ZDhiNmQ4ZTNiMTAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3OTMxOTAzYi0yZjBhLTRjNDgtYTM1OS02Y2JhMWFhZDNmNjgiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3OTMxOTAzYi0yZjBhLTRjNDgtYTM1OS02Y2JhMWFhZDNmNjgiIHN0RXZ0OndoZW49IjIwMjAtMDktMjJUMTc6MjE6MjcrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDY4OTg0N2MtZmM5Zi1jMDRhLWFhMjMtZTc0YTBmOGFlOTEyIiBzdEV2dDp3aGVuPSIyMDIwLTA5LTIyVDE3OjIxOjI3KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+CxpcogAAAfRJREFUeJzt3U9KAzEYQPFvaunavVfRG3gcwRN0IXgbj9B6E/euVSRuGonDdNdM4sv7wcD0D/Qrj2m7aMiUUgpxTTf3761nUCVvL9exKW4fIiJ5II5DjloGvg1R/LbcLjw4rTiILu/Pj6rNuWeJwcBwBoYzMJyB4QwMZ2A4A8MZGM7AcAaGMzCcgeEMDGdgOAPDGRjOwHAGhjMwnIHhDAxnYDgDwxkYzsBwBoYbKfA+Ij5Ox77xLKsZKfBjROxOx0PjWVYzUuCr4nzXbIqVjRR4SAaGMzCcgeEMDGdgOAPDGRjOwHAGhjMwnIHhDAxnYDgDwxkYzsBwBoYzMJyB4QwMZ2A4A8P1EDivOKi9l9Bc7dfrYgVFD4HzigOaLlZQ9BBYFfUQ+CkiPlsPUcFXRDy3HqLcnDJ/T1F3Ppt/D9Pf5zTfnFJABoYzMJyB4QwMZ2A4A8MZGM7AcAaGMzCcgeEMDGdgOAPDGRjOwHAGhjMwnIHhDAxnYDgDw40U+Ls4J/7RftFIgfMKii5WHKxlpJUNo3Blw0gMDGdgOAPDGRjOwHAGhjMwnIHhDAxnYDgDwxkYzsBwBoYzMJyB4QwMZ2A4A8MZGM7AcAaGMzCcgeEMDGdguO3CfUu7hOmfKq/gY7MpdGmv+aS8gu8aDKLKppT8RCb7AeMQy/4LIr2JAAAAAElFTkSuQmCC"},b9d9:function(e,i,t){"use strict";t.d(i,"b",(function(){return a})),t.d(i,"c",(function(){return s})),t.d(i,"a",(function(){return n}));var n={wCompress:t("e880").default},a=function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"navbar"},e._l(e.navList,(function(i,t){return n("v-uni-view",{key:t,staticClass:"nav-item",class:{current:e.tabCurrentIndex===t},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.tabClick(t)}}},[e._v(e._s(i.text))])})),1),n("v-uni-view",{staticClass:"way"},e._l(e.waybtn,(function(i,t){return n("v-uni-button",{key:t,staticClass:"waybtn",class:{active:e.waybtnIndex==i.type},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.tabwaybtn(i.type)}}},[e._v(e._s(i.text))])})),1),n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:2===e.waybtnIndex,expression:"waybtnIndex === 2"}],staticClass:"aline"},[n("v-uni-view",{staticClass:"left"},[e._v("邮箱"),n("v-uni-text",{staticClass:"requisite"},[e._v("*")]),e._v("：")],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入邮箱账号"},model:{value:e.consignee_email,callback:function(i){e.consignee_email=i},expression:"consignee_email"}})],1)],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===e.waybtnIndex,expression:"waybtnIndex === 1"}],staticClass:"aline"},[n("v-uni-view",{staticClass:"left"},[e._v("收货人"),n("v-uni-text",{staticClass:"requisite"},[e._v("*")]),e._v("：")],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入收货人"},model:{value:e.consignee,callback:function(i){e.consignee=i},expression:"consignee"}})],1)],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===e.waybtnIndex,expression:"waybtnIndex === 1"}],staticClass:"aline"},[n("v-uni-view",{staticClass:"left"},[e._v("收货人地址"),n("v-uni-text",{staticClass:"requisite"},[e._v("*")]),e._v("：")],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"收货人地址"},model:{value:e.consignee_address,callback:function(i){e.consignee_address=i},expression:"consignee_address"}})],1)],1),n("v-uni-view",{staticClass:"aline"},[n("v-uni-view",{staticClass:"left"},[e._v("联系方式"),n("v-uni-text",{staticClass:"requisite"},[e._v("*")]),e._v("：")],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入联系方式"},model:{value:e.consignee_phone,callback:function(i){e.consignee_phone=i},expression:"consignee_phone"}})],1)],1),n("v-uni-view",{staticClass:"aline"},[n("v-uni-view",{staticClass:"left"},[e._v("公司名称"),n("v-uni-text",{staticClass:"requisite"},[e._v("*")]),e._v("：")],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入公司名称"},model:{value:e.company_name,callback:function(i){e.company_name=i},expression:"company_name"}})],1)],1),n("v-uni-view",{staticClass:"aline"},[n("v-uni-view",{staticClass:"left"},[e._v("纳税人识别号"),n("v-uni-text",{staticClass:"requisite"},[e._v("*")]),e._v("：")],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入纳税人识别号"},model:{value:e.tax_num,callback:function(i){e.tax_num=i},expression:"tax_num"}})],1)],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===e.tabCurrentIndex,expression:"tabCurrentIndex === 1"}],staticClass:"aline"},[n("v-uni-view",{staticClass:"left"},[e._v("经营地址"),n("v-uni-text",{staticClass:"requisite"},[e._v("*")]),e._v("：")],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入经营地址"},model:{value:e.company_address,callback:function(i){e.company_address=i},expression:"company_address"}})],1)],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===e.tabCurrentIndex,expression:"tabCurrentIndex === 1"}],staticClass:"aline"},[n("v-uni-view",{staticClass:"left"},[e._v("公司电话"),n("v-uni-text",{staticClass:"requisite"},[e._v("*")]),e._v("：")],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入公司电话"},model:{value:e.company_phone,callback:function(i){e.company_phone=i},expression:"company_phone"}})],1)],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===e.tabCurrentIndex,expression:"tabCurrentIndex === 1"}],staticClass:"aline"},[n("v-uni-view",{staticClass:"left"},[e._v("开户银行"),n("v-uni-text",{staticClass:"requisite"},[e._v("*")]),e._v("：")],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入开户银行"},model:{value:e.bank,callback:function(i){e.bank=i},expression:"bank"}})],1)],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===e.tabCurrentIndex,expression:"tabCurrentIndex === 1"}],staticClass:"aline"},[n("v-uni-view",{staticClass:"left"},[e._v("开户银行账号"),n("v-uni-text",{staticClass:"requisite"},[e._v("*")]),e._v("：")],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入开户银行账号"},model:{value:e.bank_num,callback:function(i){e.bank_num=i},expression:"bank_num"}})],1)],1),n("v-uni-view",{staticClass:"bigaline info-table-row"},[n("v-uni-view",{staticClass:"left"},[e._v("发货单"),n("v-uni-text",{staticClass:"requisite"},[e._v("*")]),e._v("：")],1),n("v-uni-view",{staticClass:"right table-row-right"},[n("v-uni-view",{staticClass:"uploads"},[n("v-uni-view",{staticClass:"upload-image-view"},[e._l(e.multi,(function(i,t){return[n("v-uni-view",{key:t+"_0",staticClass:"image-view"},[n("v-uni-image",{attrs:{src:i,"data-src":i},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.previewImage.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"del-btn",attrs:{"data-index":t},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.deleteImage.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"baicha"})],1)],1)]})),e.multi.length<e.imageLength?n("v-uni-view",{staticClass:"add-view",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.chooseImage.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cross"},[n("v-uni-view",{staticClass:"transverse-line"}),n("v-uni-view",{staticClass:"vertical-line"})],1)],1):e._e(),n("v-uni-view",{staticClass:"info"},[e._v("请您务必上传收货的中集智冷成品出库单,否则无法正常开票。示例如下：")]),n("v-uni-view",{staticStyle:{"margin-top":"20upx"}},[n("v-uni-image",{staticStyle:{display:"inline-block",width:"220upx",height:"100upx"},attrs:{src:t("37fe").replace(/^\./,"")},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.previewImg("../../static/image/fahuodan.png")}}})],1)],2)],1)],1)],1),n("v-uni-view",{staticClass:"bigalinetea"},[n("v-uni-view",{staticClass:"left"},[e._v("备注")]),n("v-uni-view",{staticClass:"right"},[n("v-uni-textarea",{staticClass:"uni-textarea",attrs:{placeholder:"填写备注信息"},model:{value:e.desc,callback:function(i){e.desc=i},expression:"desc"}})],1)],1)],1)],1),n("v-uni-view",{staticClass:"btnbutton"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.nowgo.apply(void 0,arguments)}}},[e._v("申请开票")])],1),n("w-compress",{ref:"wCompress"})],1)},s=[]},cd9d:function(e,i,t){"use strict";var n=t("fd55"),a=t.n(n);a.a},fd55:function(e,i,t){var n=t("3ba1");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=t("4f06").default;a("7fe23644",n,!0,{sourceMap:!1,shadowMode:!1})}}]);