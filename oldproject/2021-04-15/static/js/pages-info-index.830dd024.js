(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-info-index"],{"1da1":function(t,e,i){"use strict";function a(t,e,i,a,n,r,o){try{var s=t[r](o),l=s.value}catch(d){return void i(d)}s.done?e(l):Promise.resolve(l).then(a,n)}function n(t){return function(){var e=this,i=arguments;return new Promise((function(n,r){var o=t.apply(e,i);function s(t){a(o,n,r,s,l,"next",t)}function l(t){a(o,n,r,s,l,"throw",t)}s(void 0)}))}}i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},"1de5":function(t,e,i){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"3f24":function(t,e,i){"use strict";i.r(e);var a=i("fd67"),n=i("87a7");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("852e");var o,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"02dd18b6",null,!1,a["a"],o);e["default"]=l.exports},6794:function(t,e,i){var a=i("24fb"),n=i("1de5"),r=i("7f91"),o=i("7f91");e=a(!1);var s=n(r),l=n(o);e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第一套图片上传样式（内部图标相机） */.upload-image-view[data-v-02dd18b6]{width:100%;margin:%?20?% 0 %?20?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.upload-image-view .title[data-v-02dd18b6]{width:100%;font-family:PingFang-SC-Regular;font-size:%?24?%;color:#4a4a4a;margin-bottom:%?15?%;line-height:100%}.upload-image-view .info[data-v-02dd18b6]{width:100%;font-family:PingFang-SC-Regular;font-size:%?24?%;color:#ff4259;height:%?48?%;margin-top:%?15?%;line-height:%?28?%}.upload-image-view .image-view[data-v-02dd18b6]{height:%?120?%;width:%?120?%;position:relative;margin:%?15?% %?15?% %?15?% %?0?%;border-radius:%?8?%}.upload-image-view .image-view uni-image[data-v-02dd18b6]{height:100%;width:100%;border-radius:%?8?%}.upload-image-view .image-view .del-btn[data-v-02dd18b6]{background-color:#f67371;border-radius:50%;width:%?25?%;height:%?25?%;position:absolute;top:%?-12?%;right:%?-12?%;z-index:2;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.upload-image-view .image-view .del-btn .baicha[data-v-02dd18b6]{display:inline-block;width:%?20?%;height:%?5?%;background:#fff;line-height:0;font-size:0;vertical-align:middle;-webkit-transform:rotate(45deg)}.upload-image-view .image-view .del-btn .baicha[data-v-02dd18b6]:after{content:"/";display:block;width:%?20?%;height:%?5?%;background:#fff;-webkit-transform:rotate(-90deg)}.upload-image-view .add-view[data-v-02dd18b6]{height:%?120?%;width:%?120?%;\r\n\t/* margin: 15upx 15upx 15upx 0upx; */display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;\r\n\t/* background: rgba(255, 255, 255, 0.00); */\r\n\t/* border: 3upx dashed #979797; */background:url('+s+') no-repeat;background-size:contain\r\n\t/* border-radius: 8upx; */}\r\n/* 相机 */.upload-image-view .add-view .xiangji[data-v-02dd18b6]{height:%?40?%;width:%?48?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap}.upload-image-view .add-view .xiangji .tixing[data-v-02dd18b6]{width:%?10?%;height:%?7?%;background-color:#fff;border-right:%?10?% solid #fff;border-bottom:%?7?% solid #b2b2b2;border-left:%?10?% solid #fff}.upload-image-view .add-view .xiangji .changfx[data-v-02dd18b6]{height:%?32?%;width:%?48?%;border-radius:5%;background-color:#b2b2b2;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.upload-image-view .add-view .xiangji .changfx .yuan1[data-v-02dd18b6]{height:%?20?%;width:%?20?%;border-radius:50%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.upload-image-view .add-view .xiangji .changfx .yuan2[data-v-02dd18b6]{height:%?10?%;width:%?10?%;border-radius:50%;background-color:#b2b2b2}\r\n/* 第二套图片上传样式（内部图标 十字架）*/\r\n/* 十字架 */.upload-image-view .add-view .cross[data-v-02dd18b6]{height:%?48?%;width:%?48?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;position:relative}.upload-image-view .add-view .cross .transverse-line[data-v-02dd18b6]{height:100%;width:48%;position:absolute;border-right:%?3?% solid #5a5a5a;top:0;left:0}.upload-image-view .add-view .cross .vertical-line[data-v-02dd18b6]{height:48%;width:100%;position:absolute;border-bottom:%?3?% solid #5a5a5a;top:0;left:0}uni-page-body[data-v-02dd18b6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;background-color:#fff}.body-view[data-v-02dd18b6]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.info-table[data-v-02dd18b6]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;background-color:#fff}.info-table .info-table-row[data-v-02dd18b6]{height:%?120?%;width:92%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:%?1?% solid #ccc}.info-table .info-table-row .table-row-left[data-v-02dd18b6]{height:%?40?%;font-size:%?28?%;font-weight:400;color:#1c1c1c;line-height:%?40?%}.info-table .info-table-row .table-row-right[data-v-02dd18b6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.info-table .info-table-row .table-row-right uni-image[data-v-02dd18b6]{width:%?13?%;height:%?24?%}.info-table .info-table-row .table-row-right uni-input[data-v-02dd18b6]{width:%?560?%;height:%?40?%;font-size:%?28?%;font-weight:400;color:#1c1c1c;line-height:%?40?%}.table-btn-view[data-v-02dd18b6]{position:fixed;bottom:%?27?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.table-btn-view .save-btn[data-v-02dd18b6]{width:92%;height:%?90?%;background:#0af;border-radius:%?10?%;color:#fff}.uploads[data-v-02dd18b6]{width:92%}.container[data-v-02dd18b6]{background:#fff;line-height:24px;width:100%}.container .content[data-v-02dd18b6]{background:#fff;height:100%}.container .list[data-v-02dd18b6]{padding:0 %?30?%;box-sizing:border-box}.container .list .aline[data-v-02dd18b6]{height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:%?2?% solid #f5f5f5}.container .list .aline .left[data-v-02dd18b6]{width:%?240?%;text-align:left;color:#333;font-size:%?28?%}.container .list .aline .left .requisite[data-v-02dd18b6]{display:inline-block;height:%?100?%;line-height:%?100?%;color:red}.container .list .aline .right uni-input[data-v-02dd18b6]{width:%?400?%;height:%?80?%;font-size:%?28?%}.container .list .bigaline[data-v-02dd18b6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:%?2?% solid #f5f5f5}.container .list .bigaline .left[data-v-02dd18b6]{width:%?240?%;text-align:left;color:#333;height:%?165?%;font-size:%?28?%}.container .list .bigaline .left .requisite[data-v-02dd18b6]{display:inline-block;height:%?100?%;line-height:%?100?%;color:red}.container .list .bigaline .right[data-v-02dd18b6]{height:auto;-webkit-box-flex:1;-webkit-flex:1;flex:1}.container .list .bigaline .right .uploadimgs[data-v-02dd18b6]{display:inline-block;height:%?120?%;width:%?120?%;margin:%?30?% 0;box-sizing:border-box}.container .list .bigaline .right uni-textarea[data-v-02dd18b6]{padding:%?20?% 0 0;display:inline-block;width:%?400?%;height:%?160?%;font-size:%?28?%}.container .list .bigalinetea[data-v-02dd18b6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:%?2?% solid #f5f5f5}.container .list .bigalinetea .left[data-v-02dd18b6]{width:%?240?%;text-align:left;color:#333;height:%?160?%;line-height:%?80?%;font-size:%?28?%}.container .list .bigalinetea .right[data-v-02dd18b6]{height:%?180?%}.container .list .bigalinetea .right uni-textarea[data-v-02dd18b6]{padding:%?20?% 0 0;display:inline-block;width:%?400?%;height:%?160?%;font-size:%?28?%}.container body[data-v-02dd18b6]{margin:0;padding:0;max-width:414px;margin:0 auto}.container .upload-fh[data-v-02dd18b6]{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAD1klEQVRoQ+XbTYhWVRgH8P8fwZUguFKi2pShbvqg2lhhG0PJlc40zQg62WhDg+jklIo1wViUNgwVTGSWWMngyvCjVdLHLrHaJaOBIIK2DHL7lweegcvL48D7vveee7xztu+d972/Ofec8zznPJe4T5qkRQC2AVgP4A8AMySvt3v7bPcP6rhe0lIAJwFsKvz+CZLb272f7MGSHnDsiy24WZKPNQosyUDWs88EsEGS3zQGLOkpx64OUG+T/LhdrF2f5SMt6QXHPhSghklOd4LNEixpo2OXBaitJL/rFJsdWFKvYxe3oO4A6Cd5phtsVmBJrwH4KgD9C+BVkj91i80GLGk3gKkA9I9jfy8DmwVY0kEAEwHoL8f+XRa2drCkDwG8E4B+A9BH8maZ2FrBkj4D8GYA+hHAKyT/KxtbG1iSRUiWCLS2045VFdjkYEm23HwPYHMAOk5yR1XQue9NFmlJskDCsC8FqCmSe6rGJuthSRYiGnZtgJogeSgFNglYkgX/hn08QI2RPJIKWzlYkqV1hn0kQL1B8ouU2ErBkixhN+zyADVA0j5L3iqZtCTZVoyBlrSILAmwNfZscqn/YOlgSf0AohTOkoBekj/XhS39kZa0E0A0Li0JMOzlOrGlgiWNAjgagCwJ6CF5tW5saWBJ7wEYD0CWBBj2Vg7YUsCSbB19KwBdcOz/uWC7BkuyzbRdAchOBfpygs7dS8eztKRvAQwEqGMkh3LEdtzDkj4CMBagJkna5JVt66iHJUX56jjJ97OVdhN4SLJtGdueaW3N7GFTLqgxPNetC2qWLqDtUGtf8Hif93CyOetwAf0ugGjC+tXRzYm0Cui9AD4JevpPRzcnli6gXwfwZYC+5mGm4WttHa3D892xJAspTwXX3Pae/qVOcelgX7JednS042F58bm60JWAHb3Ot3lWBDg7N5qpA10Z2NFPO/rRADdE8lhqdKVgR69y9BMBbpTkZEp05WBHP+jo5wJc0qQjCdjRdrZkOfSGAJ0s6UgGdrSdHhq6J0An2ThICi4EKMcBDAZom7mtgKUZ58NFoCQrYrFiltZmSYehm1MBUOjpwwAOBGhLOgzdnBqPAno/gA8CtMXdhr5S5rJVyxhuBUgaAfBpALOkw9CXykJnAfYZ3Iq9vw5glnQY+mIZ6GzAjt7iJ49RraWhf+gWnRXY0RaY2Frd/GrawkT2vFfVPhz0aLPqpQvoJx29JkA3qyK+gF7p6GcD9AjJz9sd09mN4WDJutdbLTdIRq8IzPs/yB7sE9nCeW+p8Hjbm2nDAKwcahbAdGPfTGt3nM53/V00ckNMKWY8LAAAAABJRU5ErkJggg==");background-repeat:no-repeat;background-size:100% 100%;height:30px;width:30px}.container .upload-hedaer[data-v-02dd18b6]{height:55px;display:grid;grid-template-columns:repeat(3,1fr);padding:0 10px;box-sizing:border-box;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center;background:#287cff;color:#fff;border-bottom:1px solid #efefef;font-size:19px}.container .upload-hedaer div[data-v-02dd18b6]:last-child{text-align:right}.container .upload-textarea[data-v-02dd18b6]{width:100%;height:60px;font-size:28px;border:1px solid #efefee;max-height:300px}.container .upload-article-text[data-v-02dd18b6]{width:100%;padding:10px;box-sizing:border-box}.container .upload-file[data-v-02dd18b6]{position:relative;background:url('+l+') no-repeat 50%/100% 100%;\r\n  /* width: 100px; */height:120px;-webkit-box-ordinal-group:10;-webkit-order:9;order:9}.container .upload-piclist[data-v-02dd18b6]{padding:0 10px;box-sizing:border-box;display:grid;grid-template-columns:repeat(3,120px);-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;grid-gap:14px}.container #file[data-v-02dd18b6]{width:100%;height:100%;opacity:0}.container .upload-Picitem[data-v-02dd18b6]{width:100%;height:120px}.container .upload-Picitem > img[data-v-02dd18b6]{width:100%;height:100%;object-fit:cover}.container .submit[data-v-02dd18b6]{padding:15px 0;background-color:#287cff;color:#fff;text-align:center;margin:10px;font-size:20px;border-radius:10px}.container .upload-sm[data-v-02dd18b6]{padding:10px;box-sizing:border-box;color:grey}.container .upload-sm ol > li[data-v-02dd18b6]{margin-bottom:10px}.container .way[data-v-02dd18b6]{padding:0 %?30?%;box-sizing:border-box;height:%?100?%;line-height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:%?2?% solid #f5f5f5}.container .way uni-button[data-v-02dd18b6]{display:inline-block;width:%?180?%;height:%?54?%;line-height:%?54?%;font-size:%?26?%;margin:0;background:#fff;margin-right:%?70?%;border-radius:%?60?%;border:1px solid #ccc}.container .way .active[data-v-02dd18b6]{color:#1b4bef;background:#d8e6ff;border:1px solid #1b4bef}.container .navbar[data-v-02dd18b6]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?100?%;line-height:%?100?%;padding:0 %?30?%;background:#fff;border-bottom:%?2?% solid #f5f5f5;position:relative;z-index:10}.container .navbar .nav-item[data-v-02dd18b6]{display:-webkit-box;display:-webkit-flex;display:flex;margin-right:%?60?%;-webkit-box-pack:start;-webkit-justify-content:start;justify-content:start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;font-size:14px;color:#333;position:relative}.container .navbar .nav-item.current[data-v-02dd18b6]{color:#1b4bef}.container .navbar .nav-item.current[data-v-02dd18b6]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:100%;height:0;border-bottom:2px solid #1b4bef}.container .uni-swiper-item[data-v-02dd18b6]{height:auto}.container .btn[data-v-02dd18b6]{cursor:pointer;width:%?600?%;height:%?90?%;border:1px solid #007aff;margin:0 auto;position:fixed;bottom:%?60?%;left:%?75?%;border:none;outline:none;padding:%?60?% 0 %?30?%}.container .btn uni-button[data-v-02dd18b6]{background:#1b4cef;border-radius:%?60?%;border:none;font-size:%?30?%;height:%?90?%;line-height:%?90?%;outline:none}.container .btnbutton[data-v-02dd18b6]{cursor:pointer;width:%?600?%;height:%?90?%;border:1px solid #007aff;margin:0 auto;bottom:%?60?%;left:%?75?%;border:none;outline:none;padding:%?60?% 0 %?30?%}.container .btnbutton uni-button[data-v-02dd18b6]{background:#1b4cef;border-radius:%?60?%;border:none;font-size:%?30?%;height:%?90?%;line-height:%?90?%;outline:none}body.?%PAGE?%[data-v-02dd18b6]{background-color:#fff}',""]),t.exports=e},"7f91":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA5LTIyVDE3OjIxOjI3KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA5LTIyVDE3OjIxOjI3KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wOS0yMlQxNzoyMToyNyswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkNjg5ODQ3Yy1mYzlmLWMwNGEtYWEyMy1lNzRhMGY4YWU5MTIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozNTI2ZGU1OS00ZGM3LWVlNDctODg3Yy01ZDhiNmQ4ZTNiMTAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3OTMxOTAzYi0yZjBhLTRjNDgtYTM1OS02Y2JhMWFhZDNmNjgiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3OTMxOTAzYi0yZjBhLTRjNDgtYTM1OS02Y2JhMWFhZDNmNjgiIHN0RXZ0OndoZW49IjIwMjAtMDktMjJUMTc6MjE6MjcrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDY4OTg0N2MtZmM5Zi1jMDRhLWFhMjMtZTc0YTBmOGFlOTEyIiBzdEV2dDp3aGVuPSIyMDIwLTA5LTIyVDE3OjIxOjI3KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+CxpcogAAAfRJREFUeJzt3U9KAzEYQPFvaunavVfRG3gcwRN0IXgbj9B6E/euVSRuGonDdNdM4sv7wcD0D/Qrj2m7aMiUUgpxTTf3761nUCVvL9exKW4fIiJ5II5DjloGvg1R/LbcLjw4rTiILu/Pj6rNuWeJwcBwBoYzMJyB4QwMZ2A4A8MZGM7AcAaGMzCcgeEMDGdgOAPDGRjOwHAGhjMwnIHhDAxnYDgDwxkYzsBwBoYbKfA+Ij5Ox77xLKsZKfBjROxOx0PjWVYzUuCr4nzXbIqVjRR4SAaGMzCcgeEMDGdgOAPDGRjOwHAGhjMwnIHhDAxnYDgDwxkYzsBwBoYzMJyB4QwMZ2A4A8P1EDivOKi9l9Bc7dfrYgVFD4HzigOaLlZQ9BBYFfUQ+CkiPlsPUcFXRDy3HqLcnDJ/T1F3Ppt/D9Pf5zTfnFJABoYzMJyB4QwMZ2A4A8MZGM7AcAaGMzCcgeEMDGdgOAPDGRjOwHAGhjMwnIHhDAxnYDgDw40U+Ls4J/7RftFIgfMKii5WHKxlpJUNo3Blw0gMDGdgOAPDGRjOwHAGhjMwnIHhDAxnYDgDwxkYzsBwBoYzMJyB4QwMZ2A4A8MZGM7AcAaGMzCcgeEMDGdguO3CfUu7hOmfKq/gY7MpdGmv+aS8gu8aDKLKppT8RCb7AeMQy/4LIr2JAAAAAElFTkSuQmCC"},"852e":function(t,e,i){"use strict";var a=i("bea1"),n=i.n(a);n.a},"87a7":function(t,e,i){"use strict";i.r(e);var a=i("e986"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"96cf":function(t,e){!function(e){"use strict";var i,a=Object.prototype,n=a.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag",d="object"===typeof t,c=e.regeneratorRuntime;if(c)d&&(t.exports=c);else{c=e.regeneratorRuntime=d?t.exports:{},c.wrap=x;var u="suspendedStart",b="suspendedYield",v="executing",p="completed",h={},f={};f[o]=function(){return this};var g=Object.getPrototypeOf,w=g&&g(g(G([])));w&&w!==a&&n.call(w,o)&&(f=w);var m=C.prototype=k.prototype=Object.create(f);A.prototype=m.constructor=C,C.constructor=A,C[l]=A.displayName="GeneratorFunction",c.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===A||"GeneratorFunction"===(e.displayName||e.name))},c.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(m),t},c.awrap=function(t){return{__await:t}},_(j.prototype),j.prototype[s]=function(){return this},c.AsyncIterator=j,c.async=function(t,e,i,a){var n=new j(x(t,e,i,a));return c.isGeneratorFunction(e)?n:n.next().then((function(t){return t.done?t.value:n.next()}))},_(m),m[l]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},c.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){while(e.length){var a=e.pop();if(a in t)return i.value=a,i.done=!1,i}return i.done=!0,i}},c.values=G,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(D),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=i)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(a,n){return s.type="throw",s.arg=t,e.next=a,n&&(e.method="next",e.arg=i),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],s=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),d=n.call(o,"finallyLoc");if(l&&d){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!d)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var r=a;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=t,o.arg=e,r?(this.method="next",this.next=r.finallyLoc,h):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),D(i),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var a=i.completion;if("throw"===a.type){var n=a.arg;D(i)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:G(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=i),h}}}function x(t,e,i,a){var n=e&&e.prototype instanceof k?e:k,r=Object.create(n.prototype),o=new O(a||[]);return r._invoke=I(t,i,o),r}function y(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(a){return{type:"throw",arg:a}}}function k(){}function A(){}function C(){}function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function j(t){function e(i,a,r,o){var s=y(t[i],t,a);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"===typeof d&&n.call(d,"__await")?Promise.resolve(d.__await).then((function(t){e("next",t,r,o)}),(function(t){e("throw",t,r,o)})):Promise.resolve(d).then((function(t){l.value=t,r(l)}),(function(t){return e("throw",t,r,o)}))}o(s.arg)}var i;function a(t,a){function n(){return new Promise((function(i,n){e(t,a,i,n)}))}return i=i?i.then(n,n):n()}this._invoke=a}function I(t,e,i){var a=u;return function(n,r){if(a===v)throw new Error("Generator is already running");if(a===p){if("throw"===n)throw r;return R()}i.method=n,i.arg=r;while(1){var o=i.delegate;if(o){var s=L(o,i);if(s){if(s===h)continue;return s}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(a===u)throw a=p,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);a=v;var l=y(t,e,i);if("normal"===l.type){if(a=i.done?p:b,l.arg===h)continue;return{value:l.arg,done:i.done}}"throw"===l.type&&(a=p,i.method="throw",i.arg=l.arg)}}}function L(t,e){var a=t.iterator[e.method];if(a===i){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=i,L(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=y(a,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var r=n.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=i),e.delegate=null,h):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function z(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(z,this),this.reset(!0)}function G(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,r=function e(){while(++a<t.length)if(n.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=i,e.done=!0,e};return r.next=r}}return{next:R}}function R(){return{value:i,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},bea1:function(t,e,i){var a=i("6794");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("636c4436",a,!0,{sourceMap:!1,shadowMode:!1})},e986:function(t,e,i){"use strict";var a=i("4ea4");i("99af"),i("4de4"),i("d81d"),i("a434"),i("d3b7"),i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("1da1")),r=[["camera"],["album"],["camera","album"]],o={components:{},data:function(){return{tabCurrentIndex:"",waybtnIndex:"",imageList:[],imageLength:10,sourceTypeIndex:2,sizeTypeIndex:2,navList:[{state:0,text:"增值税普通发票",orderList:[]},{state:1,text:"增值税专用发票",orderList:[]}],waybtn:[{text:"纸质发票",type:1},{text:"电子发票",type:2}],company_name:"",company_address:"",company_phone:"",tax_num:"",consignee:"",consignee_address:"",consignee_phone:"",consignee_email:"",bank:"",bank_num:"",file:[],desc:"",openid:"",state:"",id:"",type:"",postil:"",delivery_number:"",invoice_num:"",logistics_num:""}},onLoad:function(t){console.log(t),this.query(t.id),this.id=t.id;var e=uni.getStorageSync("invoiceopenId");this.openid=e,this.state=t.state,this.type=t.type},methods:{query:function(t){var e=this;this.$http.post({url:"/erp/invoice/detail",data:{id:t}}).then((function(t){if(console.log(t),0==t.code){e.tabCurrentIndex="1"==t.data.type?0:1,e.waybtnIndex=t.data.way,e.company_name=t.data.company_name,e.company_address=t.data.company_address,e.company_phone=t.data.company_phone,e.tax_num=t.data.tax_num,e.consignee=t.data.consignee,e.consignee_address=t.data.consignee_address,e.consignee_phone=t.data.consignee_phone,e.consignee_email=t.data.consignee_email,e.bank=t.data.bank,e.bank_num=t.data.bank_num,e.delivery_number=t.data.delivery_number,e.postil=t.data.postil,e.invoice_num=t.data.invoice_num,e.logistics_num=t.data.logistics_num;var i=t.data.file.split(";"),a=i.filter((function(t,e){return""!=t})),n=a.map((function(t,e){var i="http://www.zjcoldcloud.com/managesystem/storage/app/public/uploads/invoice/"+t;return i}));e.imageList=n,e.file=[],e.desc=t.data.desc}})).catch((function(t){}))},imgChange:function(){var t=document.getElementById("file").files;document.querySelectorAll(".upload-Picitem"),document.getElementsByClassName("upload-piclist")[0];console.log(t)},readerfile:function(t){return new Promise((function(e,i){var a=new FileReader;a.addEventListener("load",(function(){e(a.result)}),!1),t&&a.readAsDataURL(t)}))},changeTab:function(t){this.tabCurrentIndex=t.target.current},tabClick:function(t){this.tabCurrentIndex=t},tabwaybtn:function(t){this.waybtnIndex=t},nowgo:function(){3==this.state?uni.navigateTo({url:"/pages/again/index?id="+this.id+"&state="+this.state+"&type="+this.type}):uni.navigateTo({url:"/pages/change/reapply?id="+this.id+"&state="+this.state+"&type="+this.type})},chooseImage:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:uni.chooseImage({sourceType:r[this.sourceTypeIndex],count:this.imageLength-this.imageList.length,success:function(t){e.imageList=e.imageList.concat(t.tempFilePaths)}});case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),previewImage:function(t){var e=t.target.dataset.src;uni.previewImage({current:e,urls:this.imageList})},deleteImage:function(t){var e=t.target.dataset.index,i=this,a=i.imageList;a.splice(e,1),i.imageList=a}}};e.default=o},fd67:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"list"},[i("v-uni-view",{staticClass:"aline"},[i("v-uni-view",{staticClass:"left"},[t._v("发票类型"),i("v-uni-text",{staticClass:"requisite"},[t._v("*")]),t._v("：")],1),i("v-uni-view",{staticClass:"right"},[i("span",[t._v(t._s(0==t.tabCurrentIndex?"增值税普通发票":"增值税专用发票"))])])],1),i("v-uni-view",{staticClass:"aline"},[i("v-uni-view",{staticClass:"left"},[t._v("发票方式"),i("v-uni-text",{staticClass:"requisite"},[t._v("*")]),t._v("：")],1),i("v-uni-view",{staticClass:"right"},[i("span",[t._v(t._s(1==t.waybtnIndex?"纸质":"电子"))])])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:2===t.waybtnIndex,expression:"waybtnIndex === 2"}],staticClass:"aline"},[i("v-uni-view",{staticClass:"left"},[t._v("邮箱"),i("v-uni-text",{staticClass:"requisite"},[t._v("*")]),t._v("：")],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入邮箱账号",disabled:!0},model:{value:t.consignee_email,callback:function(e){t.consignee_email=e},expression:"consignee_email"}})],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.waybtnIndex,expression:"waybtnIndex === 1"}],staticClass:"aline"},[i("v-uni-view",{staticClass:"left"},[t._v("收货人"),i("v-uni-text",{staticClass:"requisite"},[t._v("*")]),t._v("：")],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入收货人",disabled:!0},model:{value:t.consignee,callback:function(e){t.consignee=e},expression:"consignee"}})],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.waybtnIndex,expression:"waybtnIndex === 1"}],staticClass:"aline"},[i("v-uni-view",{staticClass:"left"},[t._v("收货人地址"),i("v-uni-text",{staticClass:"requisite"},[t._v("*")]),t._v("：")],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"收货人地址",disabled:!0},model:{value:t.consignee_address,callback:function(e){t.consignee_address=e},expression:"consignee_address"}})],1)],1),i("v-uni-view",{staticClass:"aline"},[i("v-uni-view",{staticClass:"left"},[t._v("联系方式"),i("v-uni-text",{staticClass:"requisite"},[t._v("*")]),t._v("：")],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入联系方式",disabled:!0},model:{value:t.consignee_phone,callback:function(e){t.consignee_phone=e},expression:"consignee_phone"}})],1)],1),i("v-uni-view",{staticClass:"aline"},[i("v-uni-view",{staticClass:"left"},[t._v("公司名称"),i("v-uni-text",{staticClass:"requisite"},[t._v("*")]),t._v("：")],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入公司名称",disabled:!0},model:{value:t.company_name,callback:function(e){t.company_name=e},expression:"company_name"}})],1)],1),i("v-uni-view",{staticClass:"aline"},[i("v-uni-view",{staticClass:"left"},[t._v("纳税人识别号"),i("v-uni-text",{staticClass:"requisite"},[t._v("*")]),t._v("：")],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入纳税人识别号",disabled:!0},model:{value:t.tax_num,callback:function(e){t.tax_num=e},expression:"tax_num"}})],1)],1),i("v-uni-view",{staticClass:"aline"},[i("v-uni-view",{staticClass:"left"},[t._v("发货编号"),i("v-uni-text",{staticClass:"requisite"},[t._v("*")]),t._v("：")],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入发货编号",disabled:!0},model:{value:t.delivery_number,callback:function(e){t.delivery_number=e},expression:"delivery_number"}})],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.tabCurrentIndex,expression:"tabCurrentIndex === 1"}],staticClass:"aline"},[i("v-uni-view",{staticClass:"left"},[t._v("经营地址"),i("v-uni-text",{staticClass:"requisite"},[t._v("*")]),t._v("：")],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入经营地址",disabled:!0},model:{value:t.company_address,callback:function(e){t.company_address=e},expression:"company_address"}})],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.tabCurrentIndex,expression:"tabCurrentIndex === 1"}],staticClass:"aline"},[i("v-uni-view",{staticClass:"left"},[t._v("公司电话"),i("v-uni-text",{staticClass:"requisite"},[t._v("*")]),t._v("：")],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入公司电话",disabled:!0},model:{value:t.company_phone,callback:function(e){t.company_phone=e},expression:"company_phone"}})],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.tabCurrentIndex,expression:"tabCurrentIndex === 1"}],staticClass:"aline"},[i("v-uni-view",{staticClass:"left"},[t._v("开户银行"),i("v-uni-text",{staticClass:"requisite"},[t._v("*")]),t._v("：")],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入开户银行",disabled:!0},model:{value:t.bank,callback:function(e){t.bank=e},expression:"bank"}})],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.tabCurrentIndex,expression:"tabCurrentIndex === 1"}],staticClass:"aline"},[i("v-uni-view",{staticClass:"left"},[t._v("开户银行账号"),i("v-uni-text",{staticClass:"requisite"},[t._v("*")]),t._v("：")],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入开户银行账号",disabled:!0},model:{value:t.bank_num,callback:function(e){t.bank_num=e},expression:"bank_num"}})],1)],1),i("v-uni-view",{staticClass:"bigaline info-table-row"},[i("v-uni-view",{staticClass:"left"},[t._v("发货单"),i("v-uni-text",{staticClass:"requisite"},[t._v("*")]),t._v("：")],1),i("v-uni-view",{staticClass:"right table-row-right"},[i("v-uni-view",{staticClass:"uploads"},[i("v-uni-view",{staticClass:"upload-image-view"},[t._l(t.imageList,(function(e,a){return[i("v-uni-view",{key:a+"_0",staticClass:"image-view"},[i("v-uni-image",{attrs:{src:e,"data-src":e},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.previewImage.apply(void 0,arguments)}}})],1)]}))],2)],1)],1)],1),i("v-uni-view",{staticClass:"bigalinetea"},[i("v-uni-view",{staticClass:"left"},[t._v("备注")]),i("v-uni-view",{staticClass:"right"},[i("v-uni-textarea",{staticClass:"uni-textarea",attrs:{placeholder:"填写备注信息",disabled:!0},model:{value:t.desc,callback:function(e){t.desc=e},expression:"desc"}})],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:3==t.state||5==t.state||6==t.state||10==t.state,expression:"state==3||state==5||state==6||state==10"}],staticClass:"bigalinetea"},[i("v-uni-view",{staticClass:"left"},[t._v("未通过原因")]),i("v-uni-view",{staticClass:"right"},[i("v-uni-textarea",{staticClass:"uni-textarea",attrs:{disabled:!0},model:{value:t.postil,callback:function(e){t.postil=e},expression:"postil"}})],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:7==t.state||12==t.state||13==t.state,expression:"state==7||state==12||state==13"}],staticClass:"aline"},[i("v-uni-view",{staticClass:"left"},[t._v("发票号：")]),i("v-uni-view",{staticClass:"right"},[i("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入发票号",disabled:!0},model:{value:t.invoice_num,callback:function(e){t.invoice_num=e},expression:"invoice_num"}})],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:7==t.state||4==t.state||11==t.state||12==t.state||13==t.state,expression:"state==7||state==4||state==11||state==12||state==13"}],staticClass:"aline"},[i("v-uni-view",{staticClass:"left"},[t._v("运单号：")]),i("v-uni-view",{staticClass:"right"},[i("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入运单号",disabled:!0},model:{value:t.logistics_num,callback:function(e){t.logistics_num=e},expression:"logistics_num"}})],1)],1)],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:3==t.state||5==t.state||6==t.state||10==t.state,expression:"state==3||state==5||state==6||state==10"}],staticClass:"btnbutton"},[i("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nowgo.apply(void 0,arguments)}}},[t._v("重新开票")])],1)],1)},r=[]}}]);