import Vue from 'vue'
import Vuex from 'vuex'
import jsonFile from '../data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    records: jsonFile.records || [],
    total: jsonFile.total || {
      all:0,
      income:0,
      outcome:0
    }
  },
  getters:{
    getTotal: (state) => (type) => {
      return state.total[type]
    },
    getRecords(state){
      return state.records
    }
  },
  mutations: {
    addRecord(state,payload){
      if(payload.type == 'Income'){
        state.total.all += Number(payload.current)
        state.total.income += Number(payload.current)
      }else{
        state.total.all -= Number(payload.current)
        state.total.outcome += Number(payload.current)
      }
      state.records.push(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
