<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    
    <router-view/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import nativeToast from 'native-toast'
import firebase from 'firebase'
export default {
  created() {
    this.$store.dispatch('fetchDevTokens');
    this.$store.dispatch('fetchAllJobs');
    this.$store.dispatch('fetchJobTypes');
    this.$store.dispatch('fetchLanguages');
    this.$store.dispatch('fetchRegisteredUsers');
    this.$store.dispatch('fetchMessages');
  },
  computed:{
    ...mapGetters(['notification','loggedUser','fireVapidkey'])

  },
  watch:{
    loggedUser(val){
        if(val!=null) {
          let currentToken=localStorage.getItem("token")
          if(val.type=='interpreter') {
            let obj={user_id:this.loggedUser.id,token:currentToken,categories:this.loggedUser.categories}
            this.$store.dispatch('pushDeviceTokens',obj)
          }
          else {
            let obj={user_id:this.loggedUser.id,token:currentToken}
            this.$store.dispatch('pushDeviceTokens',obj)
          }

        }
    },
    notification (val){
      if(val){
          nativeToast({
          message: this.notification.message,
          position: 'north-east',
          timeout: 5000,
          type: this.notification.type
        })
        this.$store.commit("unSetNotifications")
      }

    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth !important;
  overflow: hidden !important;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Noto Sans', sans-serif !important;
  font-weight: 600 !important;
}

.work-headings {
  font-size: 19px !important;
  line-height: 1.8rem;
  padding-bottom: 5px;
}

.text-primary {
  color: #0080FF !important;
}

.bg-primary {
  background: #0080FF !important;
}

.btn-primary {
  background: #0080FF !important;
}

input:focus, button:focus, select:focus, textarea:focus {
  box-shadow: none !important;
}

.btn-white {
  background: white !important;
  color: black !important;
  font-weight: bold !important;
  font-size: 18px !important;
  padding: 10px 35px !important;
}

.signup {
  border: 2px solid #0080FF;
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
}

.register-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
    color: #fff !important;
    font-weight: bold;
    background-color: #0080FF !important;
    border: 0px !important;
    box-shadow: none !important;
    outline: none !important;
}

.register-tabs .nav-link {
    border: 0px solid transparent;
    border-radius: 0 !important;
    color: #0080FF !important;
    font-weight: bold;
    background: #fff !important;
    border: 1px solid #0080FF !important;
    text-align: center !important;
}

.register-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
    color: #fff !important;
    font-weight: bold;
    background-color: #0080FF !important;
    border: 0px !important;
    box-shadow: none !important;
    outline: none !important;
}

.jobs .nav-link {
    font-size: 18px !important;
    font-weight: bold;
    
}
</style>
