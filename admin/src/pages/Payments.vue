<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">View Payments</h4>
            <p class="category">Payments processed for Jobs</p>
          </md-card-header>
          <md-card-content>
             <md-table v-model="searched" md-card md-fixed-header>
                <md-table-toolbar>
                    <div class="md-toolbar-section-start">
                    <h1 class="md-title">Payments</h1>
                    </div>

                    <md-field md-clearable class="md-toolbar-section-end">
                    <md-field>
                    <label for="movie">Filter</label>
                      <md-select @md-selected="selectFilter"  v-model="filter" name="movie" id="movie">
                        <md-option value="all">All</md-option>
                        <md-option value="pending">Pending</md-option>
                        <md-option value="godfather-ii">Completed</md-option>
                      </md-select>
                    </md-field>
                    <!-- <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" /> -->
                    </md-field>
                </md-table-toolbar>


                <md-table-row slot="md-table-row" slot-scope="{ item }">
                    <md-table-cell md-label="Paid To" md-sort-by="category_name">{{ getPaymentUsers(item.interpreter_id) }}</md-table-cell>
                    <md-table-cell md-label="Paid By" md-sort-by="category_name">{{ getPaymentUser(item.business_id) }}</md-table-cell>
                    <!-- <md-table-cell md-label="Paid To" md-sort-by="category_name">{{ getPaymentUser(item.interpreter_id) }}</md-table-cell> -->
                    <md-table-cell md-label="Amount" md-sort-by="category_name">{{ item.amount }}</md-table-cell>
                    <!-- <md-table-cell  md-label="Time" md-sort-by="time"> {{item.payment_time.split(' ')[0]}} </md-table-cell> -->
                    <md-table-cell  md-label="Status" md-sort-by="category_name"> <h5><b-badge :variant="item.status=='pending'? 'danger':'primary'">{{ item.status }}</b-badge></h5> </md-table-cell>
                   
                    <!-- <md-table-cell md-label="Action" md-sort-by="action">   -->
                        <!-- <md-button class="md-dense md-raised md-primary btn-sm"  @click="setUser(item)">View</md-button> -->
                    <!-- </md-table-cell> -->
                </md-table-row>
                </md-table>
                 <b-modal id="modal-1" title="Job Categories" hide-footer>
                   <b-container fluid >
                     <div class="row">
                       <div class="col-md-12 ">
                          <b-input type="text" v-model="selected_user.category_name" placeholder="Type here..">

                          </b-input>
                       </div>
                     </div> 
                   </b-container>
                   <b-container fluid class="mt-4">
                      <md-button class="ml-2 md-dense md-raised md-primary pull-right" >Update</md-button>
                      <md-button class="md-dense md-raised md-primary pull-right" @click="hide">Cancel</md-button>


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
import {mapGetters} from 'vuex'
export default {
    data: () => ({
      search: null,
      selected_user:'',
      filter:'all',
      searched: [],
      showDialog: false,
    }),
    watch:{
      
      payments(){
        if(this.payments.length>0){
        this.searched = this.payments

        }
      }

    },
    
    computed:{
      ...mapGetters({payments:'payments',users:'clients',service_providers:'service_providers',paid_payments:'paid_payments',pending_payments:'pending_payments'})
    },
    methods: {
      selectFilter(e){
        if(this.filter=='pending'){
          this.searched=this.pending_payments
        }
        else if(this.filter=='completed'){
          this.searched=this.paid_payments
        }
        else{
          this.searched=this.payments
        }

      },
      getPaymentUsers(id) {
        let temp_user=this.service_providers.find(user_item=>user_item.id==id)
        if(temp_user==null){
          return 'NA'
        }
        else{
        return temp_user.first_name + ' ' +temp_user.last_name
        }
        // return temp_user.first_name
      },
      getPaymentUser(id) {
        let temp_user=this.users.find(user_item=>user_item.id==id)
        if(temp_user==null){
          return 'NA'
        }
        else{
        return temp_user.first_name + ' ' +temp_user.last_name
        }
        // return temp_user.first_name
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
      this.searched = this.payments
    }
  }
</script>

<style scoped>


</style>
