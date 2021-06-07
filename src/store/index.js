import { createStore } from 'vuex'
import axios from 'axios'
const baseURL = 'http://localhost:3001'
export default createStore({
  state: {
    Elements: [],
    savedDocuments: [],
    recentlyViewed: [],
    documentComment: [],
    user: 'userX',
    //classes: '',
  },
  mutations: {
    GET_INFO(state, data) {
      state.Elements = data
    },
    GET_RECENTLY_VIEWED(state, data) {
      state.recentlyViewed = data
    },
    GET_SAVED(state, data) {
      state.savedDocuments = data
    },
    GET_COMMENTS(state, data) {
      state.documentComment = data
    },
    POST_SAVED_DOCUMENTS(state, data) { 
      state.savedDocuments = data
    },
    POST_RECENTLY_VIEWED(state, data) {
      state.recentlyViewed = data
    },
    POST_DOCUMENT_COMMENT(state, data) {
      state.documentComment = data
    },
    DELETE_SAVED_DOCUMENTS(state, data) {
      state.savedDocuments = data
    },
    DELETE_FIRST_DOCUMENTS(state, data) {
      state.recentlyViewed = data
    },
    DELETE_DOCUMENT_COMMENT(state, data) {
      state.documentComment = data
    },
    SET_USER(state, data) {
      state.user = data
    },
    // SET_CLASSES(state, data) {
    //   state.classes = data
    // }
  },
  actions: {
    getDocuments({ commit }) {
      axios.get(`${baseURL}`).then((response) => {
        console.log(response, 'getDocuments response')
        commit('GET_INFO', response.data)
      })
    },
    getSaved({ commit }) {
      axios.get(`${baseURL}/saved/${this.state.user}`).then((response) => {
        console.log(response, 'getSaved response')
        commit('GET_SAVED', response.data)
      })
    },
    getRecentlyViewed({ commit }) {
      axios.get(`${baseURL}/latestview/${this.state.user}`).then((response) => {
        console.log(response, 'latestview response')
        commit('GET_RECENTLY_VIEWED', response.data)
      })
    },
    getComments({ commit }, id) {
      axios.get(`${baseURL}/getComment/${id}`).then((response) => {
        console.log(response, 'getComment response')
        commit('GET_COMMENTS', response.data)
      })
    },
    postSavedDocuments({ commit }, id) {
      axios.post(`${baseURL}/savedDocuments`, { 'docId': id, 'user': this.state.user }).then((response) => {
        console.log(response, 'postSavedDocuments response')
        commit('POST_SAVED_DOCUMENTS', response.data)
      })
    },
    postRecentlyViewed({ commit }, id) {
      axios.post(`${baseURL}/recentlyViewed`, { 'docId': id, 'user': this.state.user }).then((response) => {
       console.log(response, 'recentlyViewed response')
       commit('POST_RECENTLY_VIEWED', response.data)
     })
    },
    postDocumentComment({ commit }, {id, classes, comment } ) {
      axios.post(`${baseURL}/postComment`, { 'docId': id, 'user': this.state.user, 'classes': classes, 'comment': comment }).then((response) => {
        console.log(response, 'postDocumentComment response')
        commit('POST_DOCUMENT_COMMENT', response.data)
      })
    },
    deleteSavedDocuments({commit}, id) {
      axios.delete(`${baseURL}/deleteSavedDocuments/${id}/${this.state.user}`).then((response) => {
        console.log(response, 'deleteSavedDocuments response')
        commit('DELETE_SAVED_DOCUMENTS', response.data)
      })
    }, 
    deletefirstElement({ commit}, id) {
      axios.delete(`${baseURL}/deleteFirstDocuments/${id}/${this.state.user}`).then((response) => {
        console.log(response, 'deleteFirstDocuments response')
        commit('DELETE_FIRST_DOCUMENTS', response.data)
      })
    },
    deleteDocumentComment({commit}, {id, classes }) {
      axios.delete(`${baseURL}/deleteComment/${id}/${this.state.user}/${classes}`).then((response) => {
        console.log(response, 'deleteDocumentsComment response')
        commit('DELETE_DOCUMENT_COMMENT', response.data)
      })
    }, 
    setUser({ commit }, user) {
      commit('SET_USER', user)
    },
    // setClasses({ commit }, classes) {
    //   commit('SET_CLASSES', classes)
    //   console.log(state.setClasses, 'state.setClasses')
    // },
  },
  modules: {},
})
