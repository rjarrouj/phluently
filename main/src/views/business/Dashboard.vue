<template>
    <div id="dashboard">
        <BusinessNavbar />
        <div class="container">
            <div class="row mt-2 mb-5">
                <div class="col-md-3">
                    <Profile />
                </div>
                <div class="col-md-9 col-12 mb-3">
                    <div class="row">
                        <div class="col-md-12 text-right mt-3">
                            <button class="btn btn-primary" v-b-modal.job-modal><i class="fas fa-briefcase"></i> Request Job</button>
                        </div>
                    </div>
                    <Stats />

                    <PendingJobs />
                    <ActiveJobs />
                    
                </div>
            </div>
        </div>
        <Footer id="footer" />

        <b-modal id="job-modal" v-model="jobRequestModal" centered title="Request Job" :hideFooter="true">
            <div class="row">
                <div class="col-md-6 col-12 mt-3">
                    <label for="" class="text-primary">Job Type*</label>
                    <select v-model="requestJob.type" class="form-control">
                        <option v-for="(job, index) in jobTypes" :key="index" :value="job.name">{{job.name}}</option>
                    </select>
                </div>
                <div class="col-md-6 col-12 mt-3">
                    <label for="" class="text-primary">Language*</label>
                    <select v-model="requestJob.language" class="form-control">
                        <option v-for="(lang, index) in fetchedLanguages" :key="index" :value="lang.name">{{lang.name}}</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-12 mt-3">
                    <label for="" class="text-primary">Postal Code*</label>
                    <input type="number" v-model="requestJob.post_code" min="1" placeholder="Enter Postal Code" class="form-control">
                    <!-- <label for="" class="text-primary">Location*</label>
                    <select v-model="requestJob.location" class="form-control">
                        <option v-for="(location, index) in locations" :key="index" :value="location">{{location}}</option>
                    </select> -->
                    <!-- <input type="text" ref="autocomplete"
                            @click="startInput()" 
                                placeholder="Enter Place Name" 
                                class="form-control"
                                id="locationField"
                                onfocus="value = ''"
                                v-model="requestJob.location"
                                required 
                                /> -->
                </div>
                <div class="col-md-6 col-12 mt-3">
                    <label for="" class="text-primary">Job Date*</label>
                    <input type="date" v-model="requestJob.date" :min="todayDate" placeholder="Date" class="form-control" id="">
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-12 mt-3">
                    <label for="" class="text-primary">Start Time*</label>
                    <input type="time" v-model="requestJob.start_time" name="" placeholder="Time" class="form-control" id="">
                </div>
                <div class="col-md-6 col-12 mt-3">
                    <label for="" class="text-primary">End Time*</label>
                    <input type="time" v-model="requestJob.end_time" placeholder="Time" class="form-control" id="">
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-12 mt-3">
                    <label for="" class="text-primary">Job Address*</label>
                    <input type="text" v-model="requestJob.address" min="1" placeholder="Enter Address" class="form-control">
                </div>
            </div>
            <!-- <div class="row">
                <div class="col-md-12 col-12 mt-3">
                    <label for="" class="text-primary">Job Price*</label>
                    <input type="number" v-model="requestJob.price" min="1" placeholder="Job Price" class="form-control" id="">
                </div>
            </div> -->
            <div class="row">
                <div class="col-md-12 col-12">
                    <h5 class="mt-3">LEP</h5>
                </div>
                <div class="col-md-6 col-12">
                    <label for="" class="text-primary">First Name*</label>
                    <input type="text" v-model="requestJob.lep_first_name" placeholder="First Name" class="form-control" id="">
                </div>
                <div class="col-md-6 col-12">
                    <label for="" class="text-primary">Last Name*</label>
                    <input type="text" v-model="requestJob.lep_last_name" placeholder="Last Name" class="form-control" id="">
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-12 mt-3">
                    <label for="" class="text-primary">Job Notes*</label>
                    <textarea class="form-control" v-model="requestJob.description" rows="2" placeholder="Notes"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-12 my-3">
                    <button class="btn btn-primary btn-block" @click.prevent="submitJobRequest">Submit Request</button>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
import {gmapApi} from 'vue2-google-maps'
import BusinessNavbar from '@/components/business/BusinessNavbar.vue'
import Profile from '@/components/business/Profile.vue'
import Stats from '@/components/business/Stats.vue'
import ActiveJobs from '@/components/business/ActiveJobs.vue'
import PendingJobs from '@/components/business/PendingJobs.vue'
import Footer from '@/components/Footer.vue'
import nativeToast from 'native-toast'
import { mapActions, mapGetters } from 'vuex';
import moment from 'moment'
import axios from 'axios'
export default {
    name: "Dashboard",
    components: {
        BusinessNavbar,
        Profile,
        Stats,
        ActiveJobs,
        PendingJobs,
        Footer
    },
    computed: {
        google: gmapApi,
        ...mapGetters(['InterfireDevTokens','fetchJobs', 'jobTypes', 'jobPosted', 'jobError','fireServerkey','fireDevTokens', 'getLanguages']),
        getJobTypes() {
            return this.jobTypes;
        },
        getSelectedToks(){
            return  this.InterfireDevTokens.filter(tok_item=>tok_item.categories.find(category=>category==this.requestJob.type))
        },
        fetchedLanguages() {
            return this.getLanguages
        }

    },
    data() {
        return {
            image: require('../../assets/profile.jpg'),
            mainProps: { blank: false, blankColor: '#777', width: 100, height: 100, class: 'my-3'},
            userImage: { blank: false, blankColor: '#777', width: 40, height: 40, class: ''},

            jobRequestModal: false,
            
            fetchedJobs: [],
            jobTypesList: [],

            todayDate: null,

            requestJob: {
                type: null,
                location: null,
                address: null,
                language: null,
                post_code: null,
                date: null,
                start_time: null,
                end_time: null,
                lep_first_name: null,
                lep_last_name: null,
                description: null,
                status: "pending",
                created_by: null,
                lat: null,
                lon: null,
                price: null,
            },
        }
    },

    methods: {
        ...mapActions(['sendRequest']),

        startInput() {
            var options = {
          types: ['(regions)'],
          componentRestrictions: {
            country: "us"
          }
        }
        this.autocomplete = new google.maps.places.Autocomplete(
        (this.$refs.autocomplete),
        options
        );        
        this.autocomplete.addListener('place_changed', () => {
          let place = this.autocomplete.getPlace();
          let ac = place.address_components;
          let lat = place.geometry.location.lat();
          let lon = place.geometry.location.lng();
          let city = ac[0]["short_name"];

            this.requestJob.lat = lat;
            this.requestJob.lon = lon;

          this.requestJob.location = document.getElementById('locationField').value;
          
        });  
      },

    submitJobRequest() {
        let request = this.requestJob;

        var now = moment(request.start_time,"H:mm");
        var prev = moment(request.end_time, "H:mm");

        var duration = moment.duration(prev.diff(now));

        // duration in hours
        var hours = parseInt(duration.asHours())
        if(request.type == null || request.language == null || request.location == null || request.address == null || request.post_code == null || request.date == null || request.start_time == null || request.end_time == null || request.lep_first_name == null || request.lep_last_name == null || request.description == null) {
            this.notification("error", "All Fields Required!");
        }
        else if(hours == 0) {
            this.notification("error", "End Time is same as Start Time!");
        }
        else if(hours < 0) {
            this.notification("error", "Job Time shouldn't exceed to 10 hours!");
        }
        else if(hours == 1) {
            this.notification("error", "Minimum Job Time should be 2 hours!");
        }
        else if(hours > 10) {
            this.notification("error", "Job Time shouldn't exceed to 10 hours!");
        }
        else {
            request.price = 60*hours;
            console.log(this.getSelectedToks)
            //send axios posts requests to all the tokens with certification equal to that of job 
            this.getSelectedToks.forEach(item=>{
                axios({
                method: 'post', //you can set what request you want to be
                url: 'https://fcm.googleapis.com/fcm/send',
                data: {to: item.token,data:{     title : "New Job",
                body : request.description}},
                headers: {
                    Authorization: 'Bearer ' + this.fireServerkey
                }
                })
            })

            this.sendRequest(request);
            // var geocoder = new google.maps.Geocoder();
            // var address = request.location;
            // let self = this;
            // geocoder.geocode( { 'address': address}, function(results, status) {

            //     if (status == google.maps.GeocoderStatus.OK) {
            //         var latitude = results[0].geometry.location.lat();
            //         var longitude = results[0].geometry.location.lng();
                        
            //         request.lat = latitude;
            //         request.lon = longitude;
                    
            //         self.sendRequest(request);
            //     }
            //     else {
            //         self.notification('error', 'Location coordinates not found');
            //     }
            // });
        }
    },

    notification(type, msg) {
            nativeToast({
                message: msg,
                position: 'north-east',
                // Self destroy in 5 seconds
                timeout: 5000,
                type: type
            })
        }

    },

    created() {
        this.todayDate = new Date().toISOString().slice(0,10);
        const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
        if(loggedUser) {
            this.requestJob.created_by = loggedUser.id;
            this.requestJob.location = loggedUser.location;
        }
    },

    watch: {
        fetchJobs(val) {
            if(val.length > 0) {
                this.fetchedJobs = [];
                this.fetchedJobs = val;
            }
        },
        jobTypes(val) {
            if(val.length > 0) {
                this.jobTypesList = [];
                this.jobTypesList = val;
            }
        },
        jobPosted(val) {
            if(val == 'success') {
                this.notification('success', "Job has been Posted");
                this.jobRequestModal = false;
            }
        },
        jobError(val) {
            if(val) {
                this.notification('error', val);
            }
        }
    }
}
</script>

<style scoped>
#dashboard {
    background: #F7F7F7;
    min-height: 100vh;
}

.container {
    max-width: 1400px;
}
.text-bold {
    font-weight: bold;
}

.pac-container .pac-logo {
    z-index: 1100 !important;
  }

  #job-modal___BV_modal_outer_ {
      z-index: 1000 !important;
  }


</style>