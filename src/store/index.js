import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    Elements: [],
    savedDocuments: [],
    recentlyViewed: [],
  },
  mutations: {
    GET_INFO(state, data) {
      state.Elements = data
    },
    POST_SAVED_DOCUMENTS(state) {
      state.savedDocuments = this.Elements
    },
    POST_RECENTLY_VIEWED(state) {
      state.recentlyViewed = this.Elements
    },
    GET_SAVED(state, data) {
      state.savedDocuments = data
    },
  },
  actions: {
    getDocuments({ commit }) {
      axios.get('http://localhost:3001').then((response) => {
        console.log(response, 'getDocuments response')
        commit('GET_INFO', response.data)
      })
    },
    getSaved({ commit }) {
      axios.get('http://localhost:3001/saved').then((response) => {
        console.log(response, 'getSaved response')
        commit('GET_SAVED', response.data)
      })
    },
    postSavedDocuments({ commit }) {
      console.log(this.state.savedDocuments, 'this.state.savedDocuments')
      axios.post('http://localhost:3001/savedDocuments', { '_id': this.state.savedDocuments }).then((response) => {
        console.log(response, 'postSavedDocuments response')
        commit('POST_SAVED_DOCUMENTS', response.data)
      })
    },
    postRecentlyViewed({ commit }, id) {
      axios.post('http://localhost:3001/savedDocuments', { _id: id }).then((response) => {
        commit('POST_RECENTLY_VIEWED', response.data)
      })
    },
  },
  modules: {},
})
