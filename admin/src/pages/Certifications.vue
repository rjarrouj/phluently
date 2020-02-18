<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Update Password </h4>
            <p class="category">Manage Account Password</p>
          </md-card-header>
          <md-card-content>
            <md-card>

              <md-card-content>
                 <md-field class="col-md-4">
                              <label for="first-name">Old Password</label>
                              <md-input type="password" v-model="old_password"   />
                            </md-field>
                   <md-field class="col-md-4">
                              <label for="first-name">New Password</label>
                              <md-input type="password" v-model="new_password"   />
                            </md-field>
                 
              </md-card-content>

              <md-card-actions>
                <md-button @click="updatepassword"  class="md-primary">Update</md-button>
              </md-card-actions>
            </md-card>

          </md-card-content>
        </md-card>
      </div>

      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
      
      </div>
    </div>
  </div>
</template>

<script>

const toLower = text => {
    return text.toString().toLowerCase()
  }

  const searchByName = (items, term) => {
    if (term) {
      return items.filter(item => toLower(item.name).includes(toLower(term)))
    }

    return items
  }

// import { SimpleTable, OrderedTable } from "@/components";
import {mapGetters} from 'vuex'
import firebase from 'firebase'
export default {
    data: () => ({
      new_password:'',
      old_password:'',
      new_certification:'',
      search: null,
      selected_category:'',
      searched: [],
      showDialog: false,
     }),
    computed:{
      ...mapGetters(['certifications','authedUser'])
    },
    watch:{
      certifications(){
              this.searched = this.certifications

      }
    },
    methods: {
      updatepassword()
      {
                var user = firebase.auth().currentUser;
                
                const credential = firebase.auth.EmailAuthProvider.credential(
                    this.authedUser.email, 
                    this.old_password
                );

                // Prompt the user to re-provide their sign-in credentials
user.reauthenticateAndRetrieveDataWithCredential(credential)
      .then(() => {
        user.updatePassword(this.new_password)
          .then(() => {
          this.$store.commit("setNotifications",{message:'your password was successfully changed.',type:'success'})

            console.log('your password was successfully changed.')
          })
          .catch(error => {
            this.$store.commit("setNotifications",{message:error.message,type:'error'})

          })
      })
      .catch(error => {
        this.$store.commit("setNotifications",{message:error.message,type:'error'})

      })

                // user.reauthenticateAndRetrieveDataWithCredential(credential).then(function() {
                // // User re-authenticated.
                // console.log("came");
                // this.authuser.updatePassword(this.newpassword);
                // }).catch(function(error) {
                // // An error happened.
                // console.log(error.message);
                // });

      },
      lc_updateCertification() {
        if(this.selected_category.name!=''){
        this.$store.dispatch("updateCertifications",this.selected_category)
        this.hide('modal-1')
        }
        else{
            this.$store.commit("setNotifications",{message:'Invalid Input! Try again',type:'error'})
        }
      },
      setUser(item){
        this.selected_category=item
        this.$bvModal.show('modal-1')	
      },
      lc_createCertification(){
        if(this.new_certification!=''){
          this.$store.dispatch("createCertifications",{name:this.new_certification})
          this.hide('new-certification')
        }
        else {
            this.$store.commit("setNotifications",{message:'Invalid Input! Try again',type:'error'})
        }
      },
      hide(id){
        this.$bvModal.hide(id)	
      },
      newUser () {
        window.alert('Noop')
      },
      searchOnTable () {
        this.searched = searchByName(this.certifications, this.search)
      }
    },
    created () {
      this.searched = this.certifications
    }
  }
</script>

<style scoped>


</style>
