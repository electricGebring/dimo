import { createStore } from 'vuex'
import axios from 'axios'

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
    },
    DELETE_FIRST_DOCUMENTS(state, data) {
      state.recentlyViewed = data
    },
    GET_RECENTLY_VIEWED(state, data) {
      state.recentlyViewed = data
    },
    POST_RECENTLY_VIEWED(state, data) {
      state.recentlyViewed = data
      console.log(state.recentlyViewed, 'state.recentlyViewed')
    },
  },
  actions: {
    getDocuments({ commit }) {
      axios.get('http://localhost:3001').then((response) => {
        //console.log(response, 'getDocuments response')
        commit('GET_INFO', response.data)
      })
    },
    getSaved({ commit }) {
      axios.get('http://localhost:3001/saved').then((response) => {
        console.log(response, 'getSaved response')
        commit('GET_SAVED', response.data)
      })
    },
    getRecentlyViewed({ commit }) {
      axios.get('http://localhost:3001/latestview').then((response) => {
        commit('GET_RECENTLY_VIEWED', response.data)
      })
    },
    postSavedDocuments({ commit }, id) {
      axios.post('http://localhost:3001/savedDocuments', { 'docId': id, 'user': this.state.user }).then((response) => {
        console.log(response, 'postSavedDocuments response')
        commit('POST_SAVED_DOCUMENTS', response.data)
      })
    },
    deleteSavedDocuments({ commit}, id) {
      axios.delete(`http://localhost:3001/deleteSavedDocuments/${id}`).then((response) => {
        console.log(response, 'deleteSavedDocuments response')
        commit('DELETE_SAVED_DOCUMENTS', response.data)
      })
    }, deletefirstElement({ commit}, id) {
      axios.delete(`http://localhost:3001/deleteFirstDocuments/${id}`).then((response) => {
        console.log(response, 'deleteFirstDocuments response')
        commit('DELETE_FIRST_DOCUMENTS', response.data)
      })
    },
    postRecentlyViewed({ commit }, id) {
       axios.post('http://localhost:3001/recentlyViewed', { 'docId': id, 'user': this.state.user }).then((response) => {
        console.log(response, 'recentlyViewed response')
        commit('POST_RECENTLY_VIEWED', response.data)
      })
    
     },
  },
  modules: {},
})
