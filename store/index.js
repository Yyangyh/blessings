import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		user:'',
		token:'',
		notice:false,
		login_state:false,
		login:1,
		version:''
	},
    mutations: {
		state_version(state,data){
			state.version = data
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
		},
		modify_login(state,data){
			state.login_state = data
		},
		Amodify_login(state,data){
			state.login = data
		}
	},
    actions: {}
})
export default store