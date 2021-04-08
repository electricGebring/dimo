import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import axios from 'axios'

export default createStore({
  state: {
    Elements: [],
  },
  mutations: {
    GET_INFO(state, Elements) {
      state.Elements = Elements;
    }
  },
  actions: {
    getDocuments({commit}) {
      axios.get('data.json').then((response) => {
        commit('GET_INFO', response.data.Elements)
      })
    }
  },
  modules: {
  },
  plugins: [createPersistedState()],
})