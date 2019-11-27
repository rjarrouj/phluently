<template>
<div id="op">
   <div class="content">
    <div class="container-fluid" >
           <div class="row">
               <div class="col-md-12" style="margin-top:7rem;">
                   <b-card
                    tag="article"
                    
                    class="col-md-4 mb-2 ml-auto mr-auto"
                    style="margin-top:2rem !important;">
                    <b-card-body>
                      <div class="row">
                        <div class="col-md-12 text-center">
                          <img :src="cardUserImage"  style="width:28%" class="text-center" alt="">
                        </div>
                      </div>
                      <b-form-group
                        id="fieldset-1"
                        label="Email"
                        style="height:63px;"
                        label-for="input-1" >
                        <b-form-input id="input-1" placeholder="Type your email here.." v-model="login.email"  trim></b-form-input>
                      </b-form-group>
                      <b-form-group
                        id="fieldset-1"
                        label="Password"
                        label-for="input-2" >
                        <b-form-input id="input-2" placeholder="Type your password here.." v-model="login.password" maxlength="15" type="password"  trim></b-form-input>
                      </b-form-group>
                      <div class="row">
                        <div class="col-md-12 text-center">
                          <button class="text-center p-2 text-white pl-5 pr-5" @click="authUser()" style="border:none;border-radius: 3px;background: #0482ff;" >LOGIN</button>
                        </div>
                      </div>
                    </b-card-body>

                  </b-card>
               </div>

           </div>
    </div>
</div>
</div>
</template>
<script>
export default {
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/phluently.png")
    }
  },
    data() {
      return {
       
        
        login:{
          email:'rabiit@gmail.com',
          password:'rabbit'
        }
        
      }
    },
   
    methods:{
        authUser() {
            console.log(this.login)
            this.$store.dispatch("authenticatelogin",this.login)
        },
        
      
    },
 
}
</script>
<style scoped>
body{
  /* background: #F3F7FA !important; */
}
/* html, body {margin: 0; height: 100% !important; overflow: hidden !important} */

/* #op{margin: 0; height: 100% !important; overflow: hidden !important} */
</style>

