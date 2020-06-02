import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import firebase from 'firebase/app';
import 'firebase/messaging';
import * as VueGoogleMaps from 'vue2-google-maps'
import 'native-toast/dist/native-toast.css'
import FullCalendar from 'vue-full-calendar'
import "fullcalendar/dist/fullcalendar.min.css";
import store from './store'
import 'native-toast/dist/native-toast.css';
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import VueStripeCheckout from 'vue-stripe-checkout'
// import './registerServiceWorker'
import VueQuill from 'vue-quill'

router.beforeEach((to, from, next) => {
  const businessAuth = to.matched.some(x => x.meta.businessAuth)
   //console.log(Vals) requiresAuth &&requiresAuth &&
  if (businessAuth && !localStorage.getItem("loggedUser")) {
      next('/login')
  } else if (businessAuth && localStorage.getItem("loggedUser")) {
      const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
      const userType = loggedUser.type;
      if(userType.toLowerCase() === 'business') {
        next()
      }
      else {
        next('/interpreter/dashboard')
      }
    }
    else {
      next()
    }
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
   //console.log(Vals) requiresAuth &&requiresAuth &&
  if (requiresAuth && !localStorage.getItem("loggedUser")) {
      next('/login')
  } else if (requiresAuth && localStorage.getItem("loggedUser")) {
      const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
      const userType = loggedUser.type;
      if(userType.toLowerCase() === 'interpreter') {
        next()
      }
      else {
        next('/business/dashboard')
      }
    }
    else {
      next()
    }
})

// router.beforeEach((to, from, next) => {
//   const requiresBusinessAuth = to.matched.some(x => x.meta.requiresBusinessAuth)
//   if (requiresBusinessAuth &&  !localStorage.getItem("loggedUser")) {
//     next('/login')
//   } else {
//       if (requiresBusinessAuth && localStorage.getItem("loggedUser")) {
//         const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
//         const userType = loggedUser.type;
//         if(userType.toLowerCase() == 'business') {
//           next()
//         }
//       }
//     }
// })

Vue.config.productionTip = true

Vue.use(BootstrapVue)
Vue.use(Antd);
Vue.use(FullCalendar)
Vue.use(VueQuill)
Vue.component('multiselect', Multiselect)
Vue.use(VueGoogleMaps, {
  load: {
    //PLACE UR KEY HERE
    key: 'AIzaSyBpWWXUMAMXVAsJl0KG6eylEnwTYZw07aY',
    libraries: 'places',
  },
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

if (firebase.messaging.isSupported()) {
  const messaging = firebase.messaging();
// Add the public key generated from the console here.
  messaging.usePublicVapidKey("BC405fjuKa-r9JOJUbPmHTCL_Og4_BhdDBPFySt09ddpbQODl5_iSGFeauqW2Uy7_MSMcMzNoPMwclWiGJ-7XkA");
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');

      // TODO(developer): Retrieve an Instance ID token for use with FCM.
      // ...
    } else {
      console.log('Unable to get permission to notify.');
    }
  });
// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
  messaging.getToken().then((currentToken) => {
    console.log(currentToken)
    if(currentToken!=null && localStorage.getItem("token")==null) {
      localStorage.setItem("token",currentToken)
    }
    else{
      console.log("somethings inside localst")
      localStorage.removeItem("token")
      localStorage.setItem("token",currentToken)
    }

  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
  });
}

window.firebase = firebase;

new Vue({
  router,
  store,
  VueStripeCheckout,
  render: h => h(App)
}).$mount('#app')
