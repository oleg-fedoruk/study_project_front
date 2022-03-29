import { createStore } from 'vuex'

export default createStore({
  state: {
      backendUrl: 'http://127.0.0.1:1337/api/v1'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters:{
      getServerUrl: state => {
        return state.backendUrl
      }
  }
})
