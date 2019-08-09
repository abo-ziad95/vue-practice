

const state = {
  funds: 10000,
  stocks: []
};

const mutations = {
  'BUY_STOCKS'(state, {stockID, stockPrice, quantity}){
    const record = state.stocks.find(el => el.id == stockID);
    if (record){
      record.quantity += quantity
    } else{
      state.stocks.push({
        id: stockID,
        quantity: quantity
      })
    }
    state.funds -= stockPrice * quantity
  },
  'SELL_STOCKS'(state, {stockID, stockPrice, quantity}){
    const record = state.stocks.find(el => el.id == stockID);
    if(record.quantity > quantity){
      record.quantity -= quantity
    } else{
      state.stocks.splice(state.stocks.indexOf(record) , 1)
    }
    state.funds += stockPrice * quantity
  },
  'SET_PORTFOLIO'(state, portfolio){
    state.funds = portfolio.funds
    state.stocks = portfolio.stokesPort ? portfolio.stokesPort : []
  }
};
const actions = {
  sellStocks({commit}, order){
    commit('SELL_STOCKS', order)
  },
  // buyStock({commit}, order) {
  //   commit('BUY_STOCKS', order)
  // }
};
const getters = {
  stockPortfolio(state, getters){
    return state.stocks.map(st => {
      const record = getters.stokes.find(el => el.id == st.id);
      return {
        id: st.id,
        quantity: st.quantity,
        name: record.name,
        price: record.price,
      }
    })
},
  funds(state){
    return state.funds
  }

};


export default {
  state,
  mutations,
  actions,
  getters
}
