<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Account Approvals</h4>
            <p class="category">Activate the pending acconts from here</p>
          </md-card-header>
          <md-card-content>
             <md-table v-model="searched" md-card md-fixed-header>
                <md-table-toolbar>
                    <div class="md-toolbar-section-start">
                    <h1 class="md-title">Un Approved Accounts</h1>
                    </div>

                    <md-field md-clearable class="md-toolbar-section-end">
                    <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
                    </md-field>
                </md-table-toolbar>


                <md-table-row slot="md-table-row" slot-scope="{ item }">
                    <!-- <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell> -->
                    <md-table-cell md-label="Name" md-sort-by="first_name">{{ item.first_name }}</md-table-cell>
                    <md-table-cell md-label="experience" md-sort-by="experience">{{ item.experience }}</md-table-cell>
                    <md-table-cell md-label="Certifications" md-sort-by="certifications">{{ item.certifications }}</md-table-cell>
                    <md-table-cell md-label="Action" md-sort-by="action">  
                        <md-button class="md-dense md-raised md-primary btn-sm"  @click="setUser(item)">View</md-button>
                    </md-table-cell>
                </md-table-row>
                </md-table>
                 <b-modal id="modal-1"  hide-footer>
                   <template v-slot:modal-header>
                      <h5 class="ml-auto mr-auto">  <b>{{selected_user.first_name}}</b> </h5>
                    </template>
                   <b-container >
                     <div class="row">
                       <div class="col-md-6">
                        <h6> <b>Email</b>  </h6>
                       </div>
                       <div class="col-md-6">
                        <p>{{selected_user.email}}</p> 
                       </div>
                       <div class="col-md-6 mt-2">
                        <h6> <b>Experience</b>  </h6> 
                       </div>
                       <div class="col-md-6 mt-2">
                        <p>{{selected_user.experience}}</p> 

                       </div>
                       <div class="col-md-6 mt-2">
                        <h6> <b>Certifications</b>  </h6>
                       </div>
                       <div class="col-md-6 mt-2">
                        <p>{{selected_user.certifications}}</p>

                       </div>
                       <div class="col-md-6 mt-2">
                        <h6> <b>Languages</b>  </h6>
                        
                       </div>
                       <div class="col-md-6 mt-2">
                        <p >{{selected_user.languages}}</p> 
                       </div>
                       <div class="col-md-6 mt-2">
                        <h6> <b>Location</b>  </h6> 
                       </div>
                       <div class="col-md-6 mt-2">
                        <p>{{selected_user.location}}</p> 
                       </div>
                     </div> 
                     

                   </b-container>
                   <b-container fluid class="mt-4">
                      <md-button class="ml-2 md-dense md-raised md-primary pull-right" @click="lc_changeUserStatus('active');hide">Approve</md-button>
                      <md-button class="ml-2 md-dense md-raised md-danger pull-right" @click="lc_changeUserStatus('reject');hide">Reject</md-button>

                   </b-container>
                </b-modal>
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
      return items.filter(item => toLower(item.first_name).includes(toLower(term)))
    }
    return items
  }
// import { SimpleTable, OrderedTable } from "@/components";
import {mapGetters} from 'vuex'
export default {
    data: () => ({
      search: null,
      selected_user:'',
      searched: [],
      showDialog: false,
     
    }),
    watch:{
      users(){
      this.searched = this.users

      }
    },
    computed:{
      ...mapGetters({users:'unapproved_users'})
    },
    methods: {
      lc_changeUserStatus(status) {
        this.selected_user.status=status
        this.$store.dispatch('changeUserStatus',this.selected_user)
        this.hide()
        // console.log(this.selected_user)

      },
      setUser(item){
        this.selected_user=item
        this.$bvModal.show('modal-1')	
      },
      hide(){
        this.$bvModal.hide('modal-1')	

      },
      newUser () {
        window.alert('Noop')
      },
      searchOnTable () {
        this.searched = searchByName(this.users, this.search)
      }
    },
    created () {
      this.searched = this.users
    }
  }
</script>

<style scoped>


</style>
