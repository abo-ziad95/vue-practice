import Vue from 'vue';
import Vuex from 'vuex';
import stokes from './modules/stokes';
import portfolio from './modules/portfolio';
import req from './modules/req'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    stokes,
    portfolio,
    req
  }
})
