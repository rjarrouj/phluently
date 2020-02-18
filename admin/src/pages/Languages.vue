<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Manage Languages <span style="cursor:pointer;font-size:15px;" v-b-modal.new-language class="fa fa-plus pull-right">Add Languages</span></h4>
            <p class="category">View System Languages</p>
          </md-card-header>
          <md-card-content>
             <md-table v-model="searched" md-card md-fixed-header>
                <md-table-toolbar>
                    <div class="md-toolbar-section-start">
                    <h1 class="md-title">Languages</h1>
                    </div>
                    <md-field md-clearable class="md-toolbar-section-end">
                    <md-input placeholder="Search by languages..." v-model="search" @input="searchOnTable" />
                    </md-field>
                </md-table-toolbar>


                <md-table-row slot="md-table-row" slot-scope="{ item }">
                    <!-- <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell> -->
                    <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
                    <md-table-cell md-label="Action" md-sort-by="action">  
                        <md-button class="md-dense md-raised md-primary btn-sm"  @click="setUser(item)">View</md-button>
                    </md-table-cell>
                </md-table-row>
                </md-table>
                 <b-modal id="modal-1"  hide-footer>
                   <template v-slot:modal-header>
                      <h5 class="ml-auto mr-auto"> <b>Languages </b></h5>
                    </template>
                   <b-container fluid >
                     <div class="row">
                       <div class="col-md-12 ">
                          <b-input type="text" v-model="selected_language.name" placeholder="Type here..">
                          </b-input>
                       </div>
                     </div> 
                   </b-container>
                   <b-container fluid class="mt-4">
                      <md-button class="ml-2 md-dense md-raised md-primary pull-right" @click="lc_updateLanguage">Update</md-button>
                      <md-button class="md-dense md-raised md-primary pull-right" @click="hide('modal-1')">Cancel</md-button>


                   </b-container>
                </b-modal>
                <b-modal id="new-language"  hide-footer>
                   <template v-slot:modal-header>
                      <h5 class="ml-auto mr-auto"> <b>New  Language </b></h5>
                    </template>
                   <b-container fluid >
                     <div class="row">
                       <div class="col-md-12 ">
                          <b-input type="text" v-model="new_language" placeholder="Type here..">
                          </b-input>
                       </div>
                     </div> 
                   </b-container>
                   <b-container fluid class="mt-4">
                      <md-button class="ml-2 md-dense md-raised md-primary pull-right" @click="lc_createLanguage">Create</md-button>
                      <md-button class="md-dense md-raised md-primary pull-right" @click="hide('new-language')">Cancel</md-button>


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
      return items.filter(item => toLower(item.name).includes(toLower(term)))
    }

    return items
  }

// import { SimpleTable, OrderedTable } from "@/components";
import {mapGetters} from 'vuex'
export default {
    data: () => ({
      new_language:'',
      search: null,
      selected_language:'',
      searched: [],
      showDialog: false,
     }),
    computed:{
      ...mapGetters(['languages'])
    },
    watch:{
      languages(){
              this.searched = this.languages

      }
    },
    methods: {
      lc_updateLanguage() {
        if(this.selected_language.name!=''){
          this.$store.dispatch("updateLanguages",this.selected_language)
          this.hide('modal-1')
        }
        else {
            this.$store.commit("setNotifications",{message:'Invalid Input! Try again',type:'error'})
        }
      },
      setUser(item){
        this.selected_language=item
        this.$bvModal.show('modal-1')	
      },
      lc_createLanguage(){
        if(this.new_language!=''){
          this.$store.dispatch("createLanguages",{name:this.new_language})
          this.hide('new-language')
        }
        else  {
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
        this.searched = searchByName(this.languages, this.search)
      }
    },
    created () {
      this.searched = this.languages
    }
  }
</script>

<style scoped>


</style>
