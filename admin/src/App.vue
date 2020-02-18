<template>
  <router-view id="#app"></router-view>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import nativeToast from 'native-toast'

export default {
methods:{
  // ...mapActions(['fetchAllServiceProviders'])
  notifyVue(message, type) {
     nativeToast({
          message: message,
          position: 'north-east',
          timeout: 5000,
          type: type
        })
  },
},
watch:{
 notifications(){
   if(this.notifications!=null){
      this.notifyVue(this.notifications.message,this.notifications.type)
   }
 },
 authedUser() {
   if(this.authedUser!=null){
     this.$router.push({path:'/admin/dashboard'})

   }
   else{
     console.log("noone")
     this.$router.push({path:'/'})
   }

 }
},
computed:{
  ...mapGetters(['notifications','authedUser'])
},
created() {
      this.$store.dispatch("fetchAllPayments")
      this.$store.dispatch("fetchAllServiceProviders")
      this.$store.dispatch("fetchAllClients")
      this.$store.dispatch("fetchAllJobs")
      this.$store.dispatch("fetchUnApprovedUsers")
      this.$store.dispatch("fetchAllCategories")
      this.$store.dispatch("fetchAllCertifications")
      this.$store.dispatch("fetchProfileChanges")
      this.$store.dispatch("fetchAllLanguages")

      
      if(localStorage.getItem("authedUser")!=null){
        console.log("not null")
        this.$store.commit("setauthedUser",JSON.parse(localStorage.getItem("authedUser")))
      }
      else{
        console.log("nulls")
      }

 }
};
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Encode+Sans&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
body {
  font-family: 'Roboto', 'sans-serif' !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  scroll-behavior: smooth !important;
}
b{
  font-weight:bold !important;
}
sidebar-link,p{
  font-family: 'Encode Sans', 'sans-serif' !important;
}
.native-toast-success{
  background-color:#007bff !important;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Noto Sans', sans-serif !important;
  font-weight: 600 !important;
}

/* .category{
  font-size:13px !important;
} */
md-card-header{
  font-family: 'Encode Sans', sans-serif !important;

}
.modal-content .modal-footer button + button {
 margin-bottom:0px !important 

}
h6{
    text-transform: capitalize !important;

}

.md-table-head-container .md-ripple .md-disabled{
  text-align: left !important
}

#modal-1___BV_modal_body_{
  padding-bottom:0px !important;
}
</style>