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
    postSavedDocuments({commit}, id) {
      console.log(id, 'id')
      //console.log(commit, 'commit')
      axios
        .post('http://localhost:3001/savedDocuments', { '_id': id })
        .then((response) => {
          commit('POST_SAVED_DOCUMENTS', response.data)
        })
    }
  },
  modules: {
  }
})