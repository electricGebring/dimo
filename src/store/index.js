import { createStore } from 'vuex'
import axios from 'axios'
const baseURL = 'http://localhost:3001'
export default createStore({
  state: {
    Elements: [],
    savedDocuments: [],
    recentlyViewed: [],
    user: 'userX',
  },
  mutations: {
    GET_INFO(state, data) {
      state.Elements = data
    },
    POST_SAVED_DOCUMENTS(state, data) {
      state.savedDocuments = data
      console.log(state.savedDocuments, 'state.savedDocuments')
    },
    // POST_RECENTLY_VIEWED(state) {
    //   state.recentlyViewed = this.Elements
    // },
    GET_SAVED(state, data) {
      state.savedDocuments = data
    },
    DELETE_SAVED_DOCUMENTS(state, data) {
      state.savedDocuments = data
    }
  },
  actions: {
    getDocuments({ commit }) {
      axios.get(`${baseURL}`).then((response) => {
        //console.log(response, 'getDocuments response')
        commit('GET_INFO', response.data)
      })
    },
    getSaved({ commit }) {
      axios.get(`${baseURL}/saved/${this.state.user}`).then((response) => {
        console.log(response, 'getSaved response')
        commit('GET_SAVED', response.data)
      })
    },
    postSavedDocuments({ commit }, id) {
      axios.post(`${baseURL}/savedDocuments`, { 'docId': id, 'user': this.state.user }).then((response) => {
        console.log(response, 'postSavedDocuments response')
        commit('POST_SAVED_DOCUMENTS', response.data)
      })
    },
    deleteSavedDocuments({ commit}, id) {
      axios.delete(`${baseURL}/deleteSavedDocuments/${id}/${this.state.user}`).then((response) => {
        console.log(response, 'deleteSavedDocuments response')
        commit('DELETE_SAVED_DOCUMENTS', response.data)
      })
    }

    // postRecentlyViewed({ commit }, id) {
    //   axios.post('${baseURL}/savedDocuments', { _id: id }).then((response) => {
    //     commit('POST_RECENTLY_VIEWED', response.data)
    //   })
    // },
  },
  modules: {},
})
