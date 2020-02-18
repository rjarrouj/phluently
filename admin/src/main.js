import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";

// router setup
import routes from "./routes/routes";

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import Notifications from "./components/NotificationPlugin";

import VueApexCharts from 'vue-apexcharts'


// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'native-toast/dist/native-toast.css'
import Chartist from "chartist";

import store from './store'
import firebase from 'firebase'


// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active"
});

Vue.prototype.$Chartist = Chartist;
Vue.use(BootstrapVue)

Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
   //console.log(Vals) requiresAuth &&requiresAuth &&
  if ( requiresAuth &&  !localStorage.getItem("authedUser")) {
    
      next('/')
  } else if (requiresAuth && localStorage.getItem("authedUser")) {
      next()
  } else {
      next()
  }
})

var firebaseConfig = {
  apiKey: "AIzaSyCCzA4sNodjtL9Lj-DHKE4dKu_bpenE55Y",
  authDomain: "phluently-768ac.firebaseapp.com",
  databaseURL: "https://phluently-768ac.firebaseio.com",
  projectId: "phluently-768ac",
  storageBucket: "phluently-768ac.appspot.com",
  messagingSenderId: "882777616957",
  appId: "1:882777616957:web:11154674df673a52083054",
  measurementId: "G-YKP344PSMQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
window.firebase = firebase;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  firebase,
  store,
  data: {
    Chartist: Chartist
  }
});
