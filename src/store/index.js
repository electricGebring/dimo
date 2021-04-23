import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    Elements: [],
    allCheckboxesSelected: false,
  },
  mutations: {
    GET_INFO(state, Elements) {
      state.Elements = Elements;
    },
    changeCheck(state) {
      state.allCheckboxesSelected = !state.allCheckboxesSelected;
    },
  },
  actions: {
    getDocuments({commit}) {
      axios.get('data.json').then((response) => {
        commit('GET_INFO', response.data.Elements)
      })
    },
    changeCheckboxes({context}) {
      context.commit('changeCheck')
    }
  },
  modules: {
  }
})