import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    Elements: [],
  },
  mutations: {
    GET_INFO(state, data) {
      state.Elements = data;
    }
  },
  actions: {
    getDocuments({commit}) {
      axios
        .get('http://localhost:3001/')
        .then((response) => {
        console.log(response, 'response')
        commit('GET_INFO', response.data)
        }
      )
    },
  },
  modules: {
  }
})