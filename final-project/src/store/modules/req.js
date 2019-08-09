import Vue from 'vue'
const mutations = {

};

const getters = {

};

const actions = {
  loadData({commit}){
    console.log('run')
    Vue.http.get('data.json')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data){
          const funds = data.funds,
                stokes = data.stokes,
                stokesPort = data.stockPortfolio,
                portfolio = {
                  stokesPort,
                  funds
                }
          commit('SET_STOKES', stokes)
          commit('SET_PORTFOLIO', portfolio)
        }

      })
  }
};

export default {
  actions,
  getters,
  mutations
}
