import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		hasLogin:false,
		user:'',
		token:'',
		notice:false
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
		set_user(state,data){ //更改用户信息
			for (let s of Object.keys(data)) {
				state.user[s] = data[s]
			}
		},
		state_token(state,data){
			state.token = data
		},
		notice_status(state,data){
			state.notice = data
		}
	},
    actions: {}
})
export default store