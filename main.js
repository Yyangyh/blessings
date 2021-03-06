import Vue from 'vue'
import App from './App'
import store from './store'
import APIconfig from './APIconfig.js'
import service from './service.js'


Vue.prototype.APIconfig = APIconfig
Vue.prototype.service = service
Vue.prototype.$store = store

import Load from './pages/common/load.vue'

Vue.component('Load',Load)

Vue.prototype.$jump = function(url){
	uni.navigateTo({
		url:url
	})
}
Vue.prototype.$api_img = function(){
	return 'https://www.wufu-app.com' 
	// return 'http://t.wufu-app.com' 
}

Vue.config.productionTip = false
 
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
