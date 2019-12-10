import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		hasLogin:false,
		user:'',
		token:''
	},
    mutations: {
		change_login(state){
			state.hasLogin = true
		},
		logout(state){
			state.hasLogin = false
		},
		state_user(state,data){
			state.user = data
		},
		user_username(state,data){
			state.user.username = data
		},
		state_token(state,data){
			state.token = data
		}
	},
    actions: {}
})
export default store