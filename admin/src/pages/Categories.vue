<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Manage Categories</h4>
            <p class="category">View Job type categories</p>
          </md-card-header>
          <md-card-content>
             <md-table v-model="searched" md-card md-fixed-header>
                <md-table-toolbar>
                    <div class="md-toolbar-section-start">
                    <h1 class="md-title">Categories</h1>
                    </div>

                    <md-field md-clearable class="md-toolbar-section-end">
                    <md-input placeholder="Search by categories..." v-model="search" @input="searchOnTable" />
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
                      <h5 class="ml-auto mr-auto"> <b>Job Categories </b></h5>
                    </template>
                   <b-container fluid >
                     <div class="row">
                       <div class="col-md-12 ">
                         <!-- <b-form-group
                            id="fieldset-1"
                            label="Category"
                            label-for="input-1"
                          >
                            <b-form-input type="text" id="input-1" v-model="selected_category.name"  trim></b-form-input>
                          <b-input type="text" v-model="selected_category.name" placeholder="Type here..">
                            </b-input>
                          </b-form-group> -->
                          <b-input type="text" v-model="selected_category.name" placeholder="Type here..">

                          </b-input>
                       </div>
                     </div> 
                   </b-container>
                   <b-container fluid class="mt-4">
                      <md-button class="ml-2 md-dense md-raised md-primary pull-right" @click="lc_updateCategory">Update</md-button>
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
      return items.filter(item => toLower(item.name).includes(toLower(term)))
    }

    return items
  }

// import { SimpleTable, OrderedTable } from "@/components";
import {mapGetters} from 'vuex'
export default {
    data: () => ({
      search: null,
      selected_category:'',
      searched: [],
      showDialog: false,
     }),
    computed:{
      ...mapGetters(['categories'])
    },
    watch:{
      categories(){
              this.searched = this.categories

      }
    },
    methods: {
      lc_updateCategory() {
        this.$store.dispatch("updateCategories",this.selected_category)
        this.hide()
      },
      setUser(item){
        this.selected_category=item
        this.$bvModal.show('modal-1')	
      },
      hide(){
        this.$bvModal.hide('modal-1')	
      },
      newUser () {
        window.alert('Noop')
      },
      searchOnTable () {
        this.searched = searchByName(this.categories, this.search)
      }
    },
    created () {
      this.searched = this.categories
    }
  }
</script>

<style scoped>


</style>
