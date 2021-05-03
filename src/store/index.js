import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    Elements: [],
    savedDocuments: [],
  },
  mutations: {
    GET_INFO(state, data) {
      state.Elements = data;
    },
    POST_SAVED_DOCUMENTS(state, data) {
      state.savedDocuments = data;
    }
  },
  actions: {
    getDocuments({commit}) {
      axios
        .get('http://localhost:3001/')
        .then((response) => {
        console.log(response, 'response')
        commit('GET_INFO', response.data)
        })
    },
    // postSavedDocuments({commit}) {
    //   axios
    //     .post('http://localhost:3001/savedDocuments', här ska vi ha med något jävla id, { 'Content-type': 'application/json' })
    //     .then((response) => {
    //       commit('POST_SAVED_DOCUMENTS')
    //     })
    // }
  },
  modules: {
  }
})