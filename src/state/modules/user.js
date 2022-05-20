const state = {
  name: null,
  mail: null,
  id: null,
  isLogin: false
}

const getters = {
  USER_ID: state => {return state.id},
  USER_NAME: state => {return state.name},
  USER_MAIL: state => {return state.mail},
  USER_INFO: state => {return state}
};

const mutations = {
  setName(state, newName) {
    state.name = newName;
  },
  setMail(state, newMail) {
    state.mail = newMail
  },
  setId (state, newId) {
    state.id = newId
  },
  setLogin (state, value) {
    state.isLogin = value
  },
  logOut (state) {
    state.id = null;
    state.name = null;
    state.mail = null;
    state.isLogin = false
  }
};

const actions = {
  loginUser({commit}, {id, name, mail, login}) {
    commit('setName', name);
    commit('setMail', mail);
    commit('setId', id);
    commit('setLogin', login);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}