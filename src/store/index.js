import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    Elements: [],
    savedDocuments: [],
  },
  mutations: {
      GET_INFO(state, Elements) {
        state.Elements = Elements;
      },
    POST_SAVED_DOCUMENTS(state) {
      state.savedDocuments = this.Elements;
    }
  },
  actions: {
    getDocuments({commit}) {
      axios
        .get('data.json')
        .then((response) => {
        console.log(response, 'response')
        commit('GET_INFO', response.data.Elements)
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


