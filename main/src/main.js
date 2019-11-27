import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import firebase from 'firebase'
import * as VueGoogleMaps from 'vue2-google-maps'
import 'native-toast/dist/native-toast.css'
import FullCalendar from 'vue-full-calendar'
import "fullcalendar/dist/fullcalendar.min.css";

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
//    //console.log(Vals) requiresAuth &&requiresAuth &&
//   if ( requiresAuth &&  !localStorage.getItem("loggedUser")) {
    
//       next('/login')
//   } else if (requiresAuth && localStorage.getItem("loggedUser")) {
//       next()
//   } else {
//       next()
//   }
// })

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(Antd);
Vue.use(FullCalendar)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAOkWyGIdy3PNtv36rswAnB8vX_cU-_Pc0',
    libraries: 'places',
  },
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

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
