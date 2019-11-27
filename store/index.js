import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		hasLogin:false,
		user:'',
	},
    mutations: {
		change_login(state){
			state.hasLogin = true
		},
		logout(state){
			state.hasLogin = false
		},
		state_user(state,data){
			console.log(data)
			state.user = data
		}
	},
    actions: {}
})
export default store