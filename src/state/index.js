import Vuex from 'vuex'
import user from './modules/user'
import users from './modules/users'
import collections from './modules/collections'

export const store = new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {},
  actions: {},
  modules: {
    user,
    users,
    collections
  }
});