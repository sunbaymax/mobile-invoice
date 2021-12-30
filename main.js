import Vue from 'vue'
import App from './App'
import request from 'common/request.js'
Vue.prototype.$http = request
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard);
Vue.config.productionTip = false
// #ifdef MP
	Vue.mixin({
	  onLoad: function () {
		wx.hideShareMenu();
	  }
	})
// #endif
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
