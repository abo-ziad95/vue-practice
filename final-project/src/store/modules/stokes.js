import Stokes from '../../data/stokesData'

const state = {
  stokes : []
};

const mutations = {
  'SET_STOKES' (state, stokes) {
    state.stokes = stokes
  },
  'RND_STOKES' (state){
    state.stokes.forEach((el) => {
      el.price = Math.round(el.price * (1 + Math.random() - 0.5))
    })
  }
};
const actions = {
  buyStoke: ({commit}, order) => {
    commit('BUY_STOCKS', order)
  },
  initStokes: ({commit}) => {
    commit('SET_STOKES', Stokes)
  },
  randomeStokes: ({commit}) =>{
    commit('RND_STOKES')
  }
};
const getters = {
  stokes: state => {
    return state.stokes
  }
}


export default {
  state,
  mutations,
  actions,
  getters
}
