import {createStore} from 'vuex'
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
    GET_SAVED(state) {
      state.savedDocuments = this.SavedDocs
    },
  },
  actions: {
    getDocuments({commit}) {
      axios.get('http://localhost:3001').then((response) => {
        console.log(response, 'response')
        commit('GET_INFO', response.data)
      })
    },
    getSaved({commit}) {
      console.log('hej')
      axios.get('http://localhost:3001/saved').then((response) => {
        console.log(response, 'Saved response')
        commit('GET_SAVED', response.data)
      })
    },
    postSavedDocuments({commit}, id) {
      console.log(id, 'id')
      //console.log(commit, 'commit')
      axios.post('http://localhost:3001/savedDocuments', {_id: id}).then((response) => {
        commit('POST_SAVED_DOCUMENTS', response.data)
      })
    },
    postRecentlyViewed({commit}, id) {
      console.log(id, 'id')
      //console.log(commit, 'commit')
      axios.post('http://localhost:3001/savedDocuments', {_id: id}).then((response) => {
        commit('POST_RECENTLY_VIEWED', response.data)
      })
    },
  },
  modules: {},
})