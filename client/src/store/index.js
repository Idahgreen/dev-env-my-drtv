import Vuex from 'vuex'
import Vue from 'vue'
import Api from '@/services/Api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    addUser: (state, user) => { state.users.push(user) }
  },
  getters: {
    getUsers: (state) => (state.users),
  },
  actions: {
    async addUser (state, {payload}) {
      return Api().post('register', payload)
    }
  }
})
