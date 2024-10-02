const mutations = {
	login(state, userInfo) {
		state.loginState = true;
		state.userInfo = userInfo;
	},
	logout(state){
		state.loginState = false;
		state.userInfo = {};
	}
}

export default mutations;