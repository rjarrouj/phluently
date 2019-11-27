// =========================================================
// * Vue Material Dashboard - v1.2.1
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-dashboard
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/vue-material-dashboard/blob/master/LICENSE.md)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";

// router setup
import routes from "./routes/routes";

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import Notifications from "./components/NotificationPlugin";

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

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
   //console.log(Vals) requiresAuth &&requiresAuth &&
  if ( requiresAuth &&  !localStorage.getItem("loggedUser")) {
    
      next('/')
  } else if (requiresAuth && localStorage.getItem("loggedUser")) {
      next()
  } else {
      next()
  }
})

var firebaseConfig = {
  apiKey: "AIzaSyCljdwC3fTdj3FwjipHGlfjBRS47LccZ7g",
  authDomain: "phluently-admin.firebaseapp.com",
  databaseURL: "https://phluently-admin.firebaseio.com",
  projectId: "phluently-admin",
  storageBucket: "phluently-admin.appspot.com",
  messagingSenderId: "59377314407",
  appId: "1:59377314407:web:0e71b9a66a182053fc42c2"
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
