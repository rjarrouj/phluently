<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Profile Changes</h4>
            <p class="category">Accept/Reject changes made on user profiles</p>
          </md-card-header>
          <md-card-content>
             <md-table v-model="searched" md-card md-fixed-header>
                <md-table-toolbar>
                    <div class="md-toolbar-section-start">
                    <h1 class="md-title">Account Changes</h1>
                    </div>

                    <!-- <md-field md-clearable class="md-toolbar-section-end"> -->
                    <!-- <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" /> -->
                    <!-- </md-field> -->
                </md-table-toolbar>


                <md-table-row slot="md-table-row" slot-scope="{ item }">
                    <md-table-cell md-label="Name" md-sort-by="experience">{{ item.first_name }} {{item.last_name}}</md-table-cell>
                    <md-table-cell md-label="Location" md-sort-by="location">{{ item.location }}</md-table-cell>

                    <md-table-cell md-label="Action" md-sort-by="action">  
                        <md-button class="md-dense md-raised md-primary btn-sm"  @click="setUser(item)">View</md-button>
                    </md-table-cell>
                </md-table-row>
                </md-table>
                <b-modal id="modal-1"  hide-footer>
                   <template v-slot:modal-header>
                      <h5 class="ml-auto mr-auto"> <b>Job Categories </b></h5>
                    </template>
                   <b-container fluid >
                     <div class="row">
                       <!-- <div class="col-md-12 "> -->
                         <!-- <div class="col-md-6">
                          <h6> <b>Email</b>  </h6>
                        </div>
                        <div class="col-md-6">
                          <p>{{selected_user.email}}</p> 
                        </div> -->
                        <div class="col-md-6 mt-2">
                          <h6> <b>Languages</b>  </h6>
                        </div>
                        <div class="col-md-6 mt-2">
                         <p class="ml-1 badge badge-primary" v-for="(item,i) in selected_user.languages" :key="i">{{item}}</p> 
                        </div>
                       <div class="col-md-6 mt-2">
                        <h6><b>Location </b> </h6> 
                       </div>
                       <div class="col-md-6 mt-2">
                        <p>{{selected_user.location}}</p> 
                       </div>
                       <div class="col-md-6 mt-2">
                        <h6> <b>Contact</b>  </h6> 
                       </div>
                       <div class="col-md-6 mt-2">
                        <p>{{selected_user.contact}}</p> 
                       </div>
                       </div>
                     <!-- </div>  -->
                   </b-container>
                   <b-container fluid class="mt-4">
                      <md-button class="ml-2 md-dense md-raised md-primary pull-right" @click="lc_profileChange('approved');hide()">Approve</md-button>
                      <md-button class="md-dense md-raised md-primary pull-right" @click="lc_profileChange('reject');hide()">Reject</md-button>
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
      profile_changes(){
        this.searched=this.profile_changes
      }
    },
    computed:{
      ...mapGetters(['profile_changes'])
    },
    methods: {
      lc_profileChange(status){
        console.log({...this.selected_user,status:status})
        this.$store.dispatch("changeUserProfile",{...this.selected_user,status:status})

      },
      hide(){
        this.$bvModal.hide('modal-1')	
      },
      setUser(item){
        this.selected_user=item
        this.$bvModal.show('modal-1')	
      },
      newUser () {
        window.alert('Noop')
      },
      searchOnTable () {
        this.searched = searchByName(this.profile_changes, this.search)
      }
    },
    created () {
      this.searched = this.profile_changes
    }
  }
</script>

<style scoped>


</style>
