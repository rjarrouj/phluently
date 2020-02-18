import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/User';
import Jobs from './modules/Jobs';
import Payments from './modules/Payments';
import Messages from './modules/Messages';
import Firebase from './modules/Firebase';
import Utils from './modules/Utils';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    User,
    Jobs,
    Payments,
    Messages,
    Firebase,
    Utils
  }
})

export default store
