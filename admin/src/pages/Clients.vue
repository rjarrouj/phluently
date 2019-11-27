<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Manage Clients</h4>
            <p class="category">View Clients registered to your applications</p>
          </md-card-header>
          <md-card-content>
             <md-table v-model="searched" md-card md-fixed-header>
                <md-table-toolbar>
                    <div class="md-toolbar-section-start">
                    <h1 class="md-title">Clients</h1>
                    </div>

                    <md-field md-clearable class="md-toolbar-section-end">
                    <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
                    </md-field>
                </md-table-toolbar>


                <md-table-row slot="md-table-row" slot-scope="{ item }">
                    <md-table-cell md-label="Name" md-sort-by="first_name">{{ item.first_name}} {{  item.last_name}}</md-table-cell>
                    <md-table-cell md-label="Organization" md-sort-by="prganization">{{ item.organization }}</md-table-cell>
                    <md-table-cell md-label="Action" md-sort-by="action">  
                        <md-button class="md-dense md-raised md-primary btn-sm"  @click="setUser(item)">View</md-button>
                    </md-table-cell>
                </md-table-row>
                </md-table>
                 <b-modal id="modal-1"  hide-footer>
                   <template v-slot:modal-header>
                      <h5 class="ml-auto mr-auto"> <b>{{selected_user.first_name}} </b></h5>
                    </template>
                   <b-container >
                     <div class="row">
                       <div class="col-md-6">
                        <h6> <b>Email</b>  </h6>
                       </div>
                       <div class="col-md-6">
                        <p v-if="edit==false">{{selected_user.email}}</p> 
                        <b-input v-else type="email" v-model="selected_user.email"></b-input>
                       </div>
                       <div class="col-md-6 mt-2">
                        <h6> <b>Languages</b>  </h6>
                       </div>
                       <div class="col-md-6 mt-2">
                       <p v-if="edit==false">{{selected_user.languages}}</p> 
                          <select v-else style="border:1px solid #ced4da"  class="form-control" name="select-yui_3_17_2_1_1567996608600_18564-field">
                            <option value="Acholi">Acholi</option>
                          
                            <option value="Afrikaans">Afrikaans</option>
                          
                            <option value="Albanian">Albanian</option>
                          
                            <option value="Amharic">Amharic</option>
                          
                            <option value="Arabic">Arabic</option>
                          
                            <option value="Ashante">Ashante</option>
                          
                            <option value="ASL">ASL</option>
                          
                            <option value="Assyrian">Assyrian</option>
                          
                            <option value="Azerbaijani">Azerbaijani</option>
                          
                            <option value="Azeri">Azeri</option>
                          
                            <option value="Bajuni">Bajuni</option>
                          
                            <option value="Basque">Basque</option>
                          
                            <option value="Behdini">Behdini</option>
                          
                            <option value="Belorussian">Belorussian</option>
                          
                            <option value="Bengali">Bengali</option>
                          
                            <option value="Berber">Berber</option>
                          
                            <option value="Bosnian">Bosnian</option>
                          
                            <option value="Bravanese">Bravanese</option>
                          
                            <option value="Bulgarian">Bulgarian</option>
                          
                            <option value="Burmese">Burmese</option>
                          
                            <option value="Cakchiquel">Cakchiquel</option>
                          
                            <option value="Cambodian">Cambodian</option>
                          
                            <option value="Cantonese">Cantonese</option>
                          
                            <option value="Catalan">Catalan</option>
                          
                            <option value="Chaldean">Chaldean</option>
                          
                            <option value="Chamorro">Chamorro</option>
                          
                            <option value="Chao-chow">Chao-chow</option>
                          
                            <option value="Chavacano">Chavacano</option>
                          
                            <option value="Chuukese">Chuukese</option>
                          
                            <option value="Croatian">Croatian</option>
                          
                            <option value="Czech">Czech</option>
                          
                            <option value="Danish">Danish</option>
                          
                            <option value="Dari">Dari</option>
                          
                            <option value="Dinka">Dinka</option>
                          
                            <option value="Diula">Diula</option>
                          
                            <option value="Dutch">Dutch</option>
                          
                            <option value="English">English</option>
                          
                            <option value="Estonian">Estonian</option>
                          
                            <option value="Fante">Fante</option>
                          
                            <option value="Farsi">Farsi</option>
                          
                            <option value="Finnish">Finnish</option>
                          
                            <option value="Flemish">Flemish</option>
                          
                            <option value="French">French</option>
                          
                            <option value="Fukienese">Fukienese</option>
                          
                            <option value="Fula">Fula</option>
                          
                            <option value="Fulani">Fulani</option>
                          
                            <option value="Fuzhou">Fuzhou</option>
                          
                            <option value="Gaddang">Gaddang</option>
                          
                            <option value="Gaelic">Gaelic</option>
                          
                            <option value="Gaelic-irish">Gaelic-irish</option>
                          
                            <option value="Gaelic-scottish">Gaelic-scottish</option>
                          
                            <option value="Georgian">Georgian</option>
                          
                            <option value="German">German</option>
                          
                            <option value="Gorani">Gorani</option>
                          
                            <option value="Greek">Greek</option>
                          
                            <option value="Gujarati">Gujarati</option>
                          
                            <option value="Haitian Creole">Haitian Creole</option>
                          
                            <option value="Hakka">Hakka</option>
                          
                            <option value="Hakka-chinese">Hakka-chinese</option>
                          
                            <option value="Hausa">Hausa</option>
                          
                            <option value="Hebrew">Hebrew</option>
                          
                            <option value="Hindi">Hindi</option>
                          
                            <option value="Hmong">Hmong</option>
                          
                            <option value="Hungarian">Hungarian</option>
                          
                            <option value="Ibanag">Ibanag</option>
                          
                            <option value="Icelandic">Icelandic</option>
                          
                            <option value="Igbo">Igbo</option>
                          
                            <option value="Ilocano">Ilocano</option>
                          
                            <option value="Indonesian">Indonesian</option>
                          
                            <option value="Inuktitut">Inuktitut</option>
                          
                            <option value="Italian">Italian</option>
                          
                            <option value="Jakartanese">Jakartanese</option>
                          
                            <option value="Japanese">Japanese</option>
                          
                            <option value="Javanese">Javanese</option>
                          
                            <option value="Kanjobal">Kanjobal</option>
                          
                            <option value="Karen">Karen</option>
                          
                            <option value="Karenni">Karenni</option>
                          
                            <option value="Kashmiri">Kashmiri</option>
                          
                            <option value="Kazakh">Kazakh</option>
                          
                            <option value="Kikuyu">Kikuyu</option>
                          
                            <option value="Kinyarwanda">Kinyarwanda</option>
                          
                            <option value="Kirundi">Kirundi</option>
                          
                            <option value="Korean">Korean</option>
                          
                            <option value="Kosovan">Kosovan</option>
                          
                            <option value="Kotokoli">Kotokoli</option>
                          
                            <option value="Krio">Krio</option>
                          
                            <option value="Kurdish">Kurdish</option>
                          
                            <option value="Kurmanji">Kurmanji</option>
                          
                            <option value="Kyrgyz">Kyrgyz</option>
                          
                            <option value="Lakota">Lakota</option>
                          
                            <option value="Laotian">Laotian</option>
                          
                            <option value="Latvian">Latvian</option>
                          
                            <option value="Lingala">Lingala</option>
                          
                            <option value="Lithuanian">Lithuanian</option>
                          
                            <option value="Luganda">Luganda</option>
                          
                            <option value="Maay">Maay</option>
                          
                            <option value="Macedonian">Macedonian</option>
                          
                            <option value="Malay">Malay</option>
                          
                            <option value="Malayalam">Malayalam</option>
                          
                            <option value="Maltese">Maltese</option>
                          
                            <option value="Mandarin">Mandarin</option>
                          
                            <option value="Mandingo">Mandingo</option>
                          
                            <option value="Mandinka">Mandinka</option>
                          
                            <option value="Marathi">Marathi</option>
                          
                            <option value="Marshallese">Marshallese</option>
                          
                            <option value="Mirpuri">Mirpuri</option>
                          
                            <option value="Mixteco">Mixteco</option>
                          
                            <option value="Moldavan">Moldavan</option>
                          
                            <option value="Mongolian">Mongolian</option>
                          
                            <option value="Montenegrin">Montenegrin</option>
                          
                            <option value="Navajo">Navajo</option>
                          
                            <option value="Neapolitan">Neapolitan</option>
                          
                            <option value="Nepali">Nepali</option>
                          
                            <option value="Nigerian Pidgin">Nigerian Pidgin</option>
                          
                            <option value="Norwegian">Norwegian</option>
                          
                            <option value="Oromo">Oromo</option>
                          
                            <option value="Pahari">Pahari</option>
                          
                            <option value="Papago">Papago</option>
                          
                            <option value="Papiamento">Papiamento</option>
                          
                            <option value="Pashto">Pashto</option>
                          
                            <option value="Patois">Patois</option>
                          
                            <option value="Pidgin English">Pidgin English</option>
                          
                            <option value="Polish">Polish</option>
                          
                            <option value="Portuguese Creole">Portuguese Creole</option>
                          
                            <option value="Portuguese">Portuguese</option>
                          
                            <option value="Pothwari">Pothwari</option>
                          
                            <option value="Pulaar">Pulaar</option>
                          
                            <option value="Punjabi">Punjabi</option>
                          
                            <option value="Putian">Putian</option>
                          
                            <option value="Quichua">Quichua</option>
                          
                            <option value="Romanian">Romanian</option>
                          
                            <option value="Russian">Russian</option>
                          
                            <option value="Samoan">Samoan</option>
                          
                            <option value="Serbian">Serbian</option>
                          
                            <option value="Shanghainese">Shanghainese</option>
                          
                            <option value="Shona">Shona</option>
                          
                            <option value="Sichuan">Sichuan</option>
                          
                            <option value="Sicilian">Sicilian</option>
                          
                            <option value="Sinhalese">Sinhalese</option>
                          
                            <option value="Slovak">Slovak</option>
                          
                            <option value="Somali">Somali</option>
                          
                            <option value="Sorani">Sorani</option>
                          
                            <option value="Spanish">Spanish</option>
                          
                            <option value="Sudanese Arabic">Sudanese Arabic</option>
                          
                            <option value="Sundanese">Sundanese</option>
                          
                            <option value="Susu">Susu</option>
                          
                            <option value="Swahili">Swahili</option>
                          
                            <option value="Swedish">Swedish</option>
                          
                            <option value="Sylhetti">Sylhetti</option>
                          
                            <option value="Tagalog">Tagalog</option>
                          
                            <option value="Taiwanese">Taiwanese</option>
                          
                            <option value="Tajik">Tajik</option>
                          
                            <option value="Tamil">Tamil</option>
                          
                            <option value="Telugu">Telugu</option>
                          
                            <option value="Thai">Thai</option>
                          
                            <option value="Tibetan">Tibetan</option>
                          
                            <option value="Tigre">Tigre</option>
                          
                            <option value="Tigrinya">Tigrinya</option>
                          
                            <option value="Toishanese">Toishanese</option>
                          
                            <option value="Tongan">Tongan</option>
                          
                            <option value="Toucouleur">Toucouleur</option>
                          
                            <option value="Trique">Trique</option>
                          
                            <option value="Tshiluba">Tshiluba</option>
                          
                            <option value="Turkish">Turkish</option>
                          
                            <option value="Ukrainian">Ukrainian</option>
                          
                            <option value="Urdu">Urdu</option>
                          
                            <option value="Uyghur">Uyghur</option>
                          
                            <option value="Uzbek">Uzbek</option>
                          
                            <option value="Vietnamese">Vietnamese</option>
                          
                            <option value="Visayan">Visayan</option>
                          
                            <option value="Welsh">Welsh</option>
                          
                            <option value="Wolof">Wolof</option>
                          
                            <option value="Yiddish">Yiddish</option>
                          
                            <option value="Yoruba">Yoruba</option>
                          
                            <option value="Yupik">Yupik</option>
                  
                         </select>
                       </div>
                       <div class="col-md-6 mt-2">
                        <h6><b>Location </b> </h6> 
                       </div>
                       <div class="col-md-6 mt-2">
                        <p v-if="edit==false">{{selected_user.location}}</p> 
                        <select  style="border:1px solid #ced4da" v-else class="form-control" name="select-yui_3_17_2_1_1568180032362_44107-field"> 
                              
                                <option value="Albuquerque">Albuquerque</option>
                              
                                <option value="Atlanta">Atlanta</option>
                              
                                <option value="Austin">Austin</option>
                              
                                <option value="Baltimore">Baltimore</option>
                              
                                <option value="Boston">Boston</option>
                              
                                <option value="Charlotte">Charlotte</option>
                              
                                <option value="Chicago">Chicago</option>
                              
                                <option value="Cincinnati">Cincinnati</option>
                              
                                <option value="Cleveland">Cleveland</option>
                              
                                <option value="Colorado Springs">Colorado Springs</option>
                              
                                <option value="Columbus">Columbus</option>
                              
                                <option value="Dallas">Dallas</option>
                              
                                <option value="Denver">Denver</option>
                              
                                <option value="Detroit">Detroit</option>
                              
                                <option value="El Paso">El Paso</option>
                              
                                <option value="Fresno">Fresno</option>
                              
                                <option value="Fort Worth">Fort Worth</option>
                              
                                <option value="Houston">Houston</option>
                              
                                <option value="Indianapolis">Indianapolis</option>
                              
                                <option value="Jacksonville">Jacksonville</option>
                              
                                <option value="Kansas City">Kansas City</option>
                              
                                <option value="Las Vegas">Las Vegas</option>
                              
                                <option value="Long Beach">Long Beach</option>
                              
                                <option value="Los Angeles">Los Angeles</option>
                              
                                <option value="Louisville">Louisville</option>
                              
                                <option value="Memphis">Memphis</option>
                              
                                <option value="Mesa">Mesa</option>
                              
                                <option value="Miami">Miami</option>
                              
                                <option value="Milwaukee">Milwaukee</option>
                              
                                <option value="Minneapolis">Minneapolis</option>
                              
                                <option value="Nashville">Nashville</option>
                              
                                <option value="New Orleans">New Orleans</option>
                              
                                <option value="New York">New York</option>
                              
                                <option value="Oakland">Oakland</option>
                              
                                <option value="Oklahoma City">Oklahoma City</option>
                              
                                <option value="Omaha">Omaha</option>
                              
                                <option value="Philadelphia">Philadelphia</option>
                              
                                <option value="Phoenix">Phoenix</option>
                              
                                <option value="Portland">Portland</option>
                              
                                <option value="Raleigh">Raleigh</option>
                              
                                <option value="Sacramento">Sacramento</option>
                              
                                <option value="San Antonio">San Antonio</option>
                              
                                <option value="San Diego">San Diego</option>
                              
                                <option value="San Francisco">San Francisco</option>
                              
                                <option value="San Jose">San Jose</option>
                              
                                <option value="Seattle">Seattle</option>
                              
                                <option value="Tampa">Tampa</option>
                              
                                <option value="Tucson">Tucson</option>
                              
                                <option value="Tulsa">Tulsa</option>
                              
                                <option value="Virginia Beach">Virginia Beach</option>
                              
                                <option value="Washington, DC">Washington, DC</option>
                              
                        </select>
                       </div>
                       <div class="col-md-6 mt-2">
                        <h6> <b>Contact</b>  </h6> 
                       </div>
                       <div class="col-md-6 mt-2">
                        <p v-if="edit==false">{{selected_user.contact}}</p> 
                        <b-input v-else type="number" v-model="selected_user.contact"></b-input>

                       </div>
                       <div class="col-md-6 mt-2">
                        <h6> <b>Organization </b>  </h6> 
                       </div>
                       <div class="col-md-6 mt-2">
                        <p v-if="edit==false">{{selected_user.organization}}</p> 
                        <b-input v-else type="text" v-model="selected_user.organization"></b-input>

                       </div>
                     </div> 
                   </b-container>
                   <b-container fluid class="mt-4">
                      <md-button v-if="edit==true" class="ml-2 md-dense md-raised md-primary pull-right" @click="lc_updateServiceProvider();edit=false">Update</md-button>
                      <md-button v-else class="ml-2 md-dense md-raised md-primary pull-right" @click="edit=true">Edit</md-button>
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

// import { SimpleTable, OrderedTable } from "@/components";
import {mapGetters} from 'vuex'
export default {
    data: () => ({
      search: null,
      edit:false,
      selected_user:'',
      searched: [],
      showDialog: false,
      users: [
        {
          id: 1,
          first_name: "Shawna Dubbin",
          action: "Assistant Media Planner",
          email:'dac@gmail.com',
          location:'Albaquerque',
          contact:'03058564747',
          languages:'English (US)',
          organization:'Crew Tours'
        },
        {
          id: 2,
          first_name: "Odette Demageard",
          action: "Account Coordinator",
          email:'dac@gmail.com',
          location:'Albaquerque',
          contact:'03058564747',
          languages:'English (US)',
          organization:'Crew Tours'
        },
        {
          id: 3,
          first_name: "Vera Taleworth",
          action: "Community Outreach Specialist",
          email:'dac@gmail.com',
          location:'Albaquerque',
          contact:'03058564747',
          languages:'English (US)',
          organization:'Crew Tours'
        },
        {
          id: 4,
          first_name: "Lonnie Izkovitz",
          action: "Operator",
          email:'dac@gmail.com',
          location:'Albaquerque',
          contact:'03058564747',
          languages:'English (US)',
          organization:'Crew Tours'
        },
        {
          id: 5,
          first_name: "Thatcher Stave",
          action: "Software Test Engineer III",
          email:'dac@gmail.com',
          location:'Albaquerque',
          contact:'03058564747',
          languages:'English (US)',
          organization:'Crew Tours'
        },
        {
          id: 6,
          first_name: "Karim Chipping",
          action: "Safety Technician II",
          email:'dac@gmail.com',
          location:'Albaquerque',
          contact:'03058564747',
          languages:'English (US)',
          organization:'Crew Tours'
        }
      ]
    }),
    watch:{
      clients(){
        if(this.clients.length>0){
        this.searched = this.clients

        }
      }

    },
    methods: {
      lc_updateServiceProvider () { 
        this.hide()
        this.$store.dispatch("updateUsers",this.selected_user)
      },
      setUser(item){
        this.selected_user=item
        this.$bvModal.show('modal-1')	
      },
      hide(){
        this.$bvModal.hide('modal-1')	
        this.edit=false;

      },
      newUser () {
        window.alert('Noop')
      },
      searchOnTable () {
        this.searched = searchByName(this.clients, this.search)
      }
    },
    computed:{
      ...mapGetters(['clients'])
    },
    created () {
      console.log(this.clients)
      this.searched = this.clients
    }
  }
</script>

<style scoped>


</style>
