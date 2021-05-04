import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    Elements: [],
    savedDocuments: [  {
      "Label": "ÖVERSIKTSPLAN 2050",
      "Documenttype": "ÖP",
      "KFTargetArea": "3 Attraktiva Södertälje",
      "Status": "Under framtagande",
      "Thematic": "SAMHÄLLSBYGGNAD",
      "Year": "2024",
      "Office": "Kommunstyrelsenskontor",
      "Description": "Under framtagande",
      "Diarienummer": "SBN-2020-00051",
      "Author": "",
      "Image": "https://i.ibb.co/XJ5Cv84/Group-835.png",
      "Established": "",
      "Validity": "",
      "Committee": "Kommunstyrelsen",
      "Department": "Strategi",
      "SignificanceTelge": "No",
      "URL": "",
      "Revision-Plan": "",
      "GlobalGoal": "11 HÅLLBARA STÄDER OCH SAMHÄLLEN",
      "KF-Goal": "KF MÅL 5: Södertälje är en attraktiv kommun att bo i",
      "Budget/Price": "",
      "Tags": "",
      "Type": "Dokument",
      "File": "",
      "CoverImg":"https://i.ibb.co/12X2DQ2/handlingsplan-till-bredbandsstrategi.png"
  },
  {
      "Label": "ARKITEKTURSTRATEGI",
      "Documenttype": "STRATEGI",
      "KFTargetArea": "3 Attraktiva Södertälje",
      "Status": "Under framtagande",
      "Thematic": "SAMHÄLLSBYGGNAD",
      "Year": "2021",
      "Office": "Samhällsbyggnadskontoret",
      "Description": "Under framtagande",
      "Diarienummer": "",
      "Author": "",
      "Image": "https://i.ibb.co/XJ5Cv84/Group-835.png",
      "Established": "",
      "Validity": "",
      "Committee": "",
      "Department": "Strategi",
      "SignificanceTelge": "No",
      "URL": "",
      "Revision-Plan": "",
      "GlobalGoal": "10 MINSKAD OJÄMLIKHET",
      "KF-Goal": "",
      "Budget/Price": "",
      "Tags": "",
      "Type": "Dokument",
      "File": "",
      "CoverImg":"https://i.ibb.co/12X2DQ2/handlingsplan-till-bredbandsstrategi.png"
  },
  {
      "Label": "RIKTLINJER FÖR PLANBESKED",
      "Documenttype": "RIKTLINJER",
      "KFTargetArea": "3 Attraktiva Södertälje",
      "Status": "Under framtagande",
      "Thematic": "SAMHÄLLSBYGGNAD",
      "Year": "2021",
      "Office": "Samhällsbyggnadskontoret",
      "Description": "Under framtagande",
      "Diarienummer": "",
      "Author": "",
      "Image": "https://i.ibb.co/XJ5Cv84/Group-835.png",
      "Established": "",
      "Validity": "",
      "Committee": "",
      "Department": "",
      "SignificanceTelge": "No",
      "URL": "",
      "Revision-Plan": "",
      "GlobalGoal": "11 HÅLLBARA STÄDER OCH SAMHÄLLEN",
      "KF-Goal": "",
      "Budget/Price": "",
      "Tags": "",
      "Type": "Dokument",
      "File": "",
      "CoverImg":"https://i.ibb.co/12X2DQ2/handlingsplan-till-bredbandsstrategi.png"
  }],
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