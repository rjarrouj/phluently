<template>
    <div id="job-details">
        <InterpreterNavbar />
        <div class="container">
            <div class="row my-3">
                <div class="col-md-9 col-12 mt-3 mb-5">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-9 col-9">
                                    <h4>Job Details</h4>
                                </div>
                                <div class="col-md-3 col-3 text-right">
                                    <button class="btn btn-primary" @click="redirectToMap(jobDetails)">View Location on Map</button>
                                </div>
                            </div>
                            <hr>
                            <h5 class="text-primary">{{jobDetails.type}} Job</h5>
                            <p><strong class="text-primary">Notes:</strong> {{jobDetails.description}}</p>
                            <p><strong class="text-primary">Location: </strong>{{jobDetails.location}}</p>
                            <!-- <quill v-model="content" :config="config"></quill> -->
                            <vue-editor v-model="content"></vue-editor>
                            <p>{{content}}</p>
                            <div v-html="content"></div>
                            <!-- <div id="map-area">
                                <gmap-map id="map" :zoom="10" :center="{lat: jobDetails.lat, lng: jobDetails.lon}" style=" height: 300px">
                                    <gmap-marker ref="mapRef"
                                        :position="google && new google.maps.LatLng(jobDetails.lat, jobDetails.lon)"
                                    /> 
                                </gmap-map>
                            </div> -->
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-12 mt-3">
                    <div class="card">
                        <div class="card-body">
                            <h4>Job Information</h4>
                            <hr>
                            <div class="row">
                                <div class="col-md-4 col-4">
                                    <p><strong class="text-primary py-1">Job Type:</strong> </p>
                                    <p><strong class="text-primary py-1">Job Date:</strong></p>
                                    <p><strong class="text-primary py-1">Job Time:</strong></p>
                                    <p><strong class="text-primary py-1">Location:</strong></p>
                                    <p v-if="jobDetails.status != 'pending'"><strong class="text-primary py-1">Address:</strong></p>
                                    <p><strong class="text-primary py-1">Post Code:</strong></p>
                                    <p><strong class="text-primary py-1">Price:</strong></p>
                                    <p><strong class="text-primary py-1">Job Status:</strong></p>
                                </div>
                                <div class="col-md-8 col-8 text-right">
                                    <p><strong class="py-1">{{jobDetails.type}}</strong></p>
                                    <p><strong class="py-1">{{formatDate(jobDetails)}}</strong></p>
                                    <p><strong class="py-1">{{jobDetails.start_time}} - {{jobDetails.end_time}}</strong></p>
                                    <p><strong class="py-1">{{jobDetails.location}}</strong></p>
                                    <p v-if="jobDetails.status != 'pending'"><strong class="py-1">{{jobDetails.address}}</strong></p>
                                    <p><strong class="py-1">{{jobDetails.post_code}}</strong></p>
                                    <p><strong class="py-1 text-danger">${{calculatePrice(jobDetails.price)}}</strong></p>
                                    <p><strong class="py-1 text-capitalize">{{jobDetails.status}}</strong></p>
                                </div>
                                <div class="col-md-12 col-12" v-if="jobDetails.status == 'pending'">
                                    <button class="btn btn-primary btn-block" @click="accepted(jobDetails)"> <i class="fas fa-business-time"></i> Accept Job</button>
                                </div>
                                <div class="col-md-12 col-12" v-if="jobDetails.status == 'active'">
                                    <button class="btn btn-primary btn-block" @click="completed(jobDetails)"> <i class="fas fa-check"></i> Complete Job</button>
                                    <button v-if="dateTime" class="btn btn-danger btn-block" @click="cancelled(jobDetails)"><i class="fas fa-times-circle"></i> Cancel Job</button>
                                </div>
                            </div>
                            <hr>
                            <div class="row" v-if="jobDetails.status != 'pending'">
                                <div class="col-md-12">
                                    <h4>LEP</h4>
                                </div>
                                <div class="col-md-5 col-5">
                                    <p><strong class="text-primary py-1">First Name:</strong></p>
                                    <p><strong class="text-primary py-1">Last Name:</strong></p>
                                </div>
                                <div class="col-md-7 col-7 text-right">
                                    <p><strong class="py-1">{{jobDetails.lep_first_name}}</strong></p>
                                    <p><strong class="py-1">{{jobDetails.lep_last_name}}</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mt-3">
                        <div class="card-body">
                            <h4>Job Offered By</h4>
                            <hr>
                            <div class="row">
                                <div class="col-4 col-md-4">
                                    <b-img v-if="hostInfo(jobDetails.created_by).profile_image" v-bind="userImage" rounded="circle" :src="hostInfo(jobDetails.created_by).profile_image" alt="Circle image"></b-img>
                                <b-img v-if="!hostInfo(jobDetails.created_by).profile_image" v-bind="userImage" rounded="circle" :src="image" alt="Circle image"></b-img>
                                </div>
                                <div class="col-8 col-md-8 mt-3 text-right">
                                    <h6 class="text-info">{{hostInfo(jobDetails.created_by).first_name + " " + hostInfo(jobDetails.created_by).last_name}}</h6>
                                </div>
                                <div class="col-md-12 mt-2">
                                    <button class="btn btn-primary btn-block" @click="fillContactDetails(jobDetails)"> <i class="far fa-envelope"></i> Contact {{hostInfo(jobDetails.created_by).first_name + " " + hostInfo(jobDetails.created_by).last_name}}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
         <b-modal id="modal-1" @ok="sendMessage" ok-title="Send" title="Contact">
            <div>
                <b-form-textarea
                id="textarea"
                placeholder="Write something..."
                rows="3"
                v-model="message"
                max-rows="6"
                ></b-form-textarea>

            </div>
        </b-modal>
    </div>
</template>

<script>
import {gmapApi} from 'vue2-google-maps'
import InterpreterNavbar from '@/components/interpreter/InterpreterNavbar.vue'
import Footer from '@/components/Footer.vue'
import nativeToast from 'native-toast'
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios'
import moment from 'moment'
import { VueEditor } from "vue2-editor";
// var quill = new Quill('#editor', {
//     modules: {
//       toolbar: '#toolbar'
//     }
//   });

export default {
    name: "JobDetails",
    components: {
        InterpreterNavbar,
        Footer,
        VueEditor
    },
    created(){
        this.jobId = this.$route.params.id;
        setInterval(() => {
            this.verifyDateTime();
        }, 1000)
        this.lc_loggeduser=JSON.parse(localStorage.getItem('loggedUser'));
    },
    computed: {
        google: gmapApi,
        ...mapGetters(['fetchJobs', 'getUsers', 'checkAccepted', 'getCompleted','fireServerkey', 'getCancelled','fireDevTokens']),
        jobDetails() {
            let created_by = null;
            const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
            if(loggedUser) {
                created_by = loggedUser.id;
            }
            let job = this.fetchJobs.find(job => job.id == this.jobId)
            this.jobLocation = job.location;

            return job;
        },
    },

    data() {
        return {
            content: "<h1>Hello there</h1>",
            config: {
                placeholder: 'Compose an epic...',
                modules: {
                    toolbar: true,
                }
            },
            

            latitude: null,
            longitude: null,
            location: {
                latitude: 40.7127753,
                longitude: -74.0059728
            },
            dateTime: null,
            jobLocation: null,
            selected_user:'',
            lc_loggeduser:'',
            new_msg_connection:false,
            message:'',
            jobId: null,
            image: 'https://ptetutorials.com/images/user-profile.png',
            userImage: { blank: false, blankColor: '#777', width: 60, height: 60, class: ''}
        }
    },

    created() {
        this.jobId = this.$route.params.id;
        this.lc_loggeduser=JSON.parse(localStorage.getItem('loggedUser'));
        setInterval(() => {
            this.verifyDateTime();
        },1000);

    },

    methods: {
        ...mapActions(['acceptJob', 'completeJob', 'cancelJob']),
        calculatePrice(price) {
            return (price / 100) * 80;
        },
        formatDate(jobDetails) {
            let date = moment(jobDetails.date).format('MM/DD/YYYY');
            return date
        },
        redirectToMap(job) {
            let address = null;
            if(job.status == 'pending') {
                address = job.location;
            }
            else {
                address = job.address;
            }
            window.open("http://maps.google.com/?q="+address, "_blank")
        },
        verifyDateTime() {
            let job = this.fetchJobs.find(job => job.id == this.jobId)
            let jobDate = job.date + ' ' + job.end_time;
            let date = moment(jobDate);
            let date2 = new Date();
            var year    = date2.getFullYear();
            var month   = date2.getMonth()+1; 
            var day     = date2.getDate();
            var hour    = date2.getHours();
            var minute  = date2.getMinutes();

            var check = year+' '+month+' '+day+' '+hour+':'+minute; 
            var currentDate = moment(check);

            var duration = moment.duration(date.diff(currentDate));
            var hours = duration.asHours().toFixed(2);
            
            if(hours > 24.00) {
                this.dateTime = true;
            }
            else {
                this.dateTime = false;
            }
        },
        
        fillContactDetails(job){
            this.$bvModal.show('modal-1')	
            this.selected_user=this.getUsers.find(user_item=>user_item.id==job.created_by)            
        },
        sendMessage(){
            let new_messages=1;
            if(this.message!='') {
            var dates = new Date();  
            var hours = dates.getHours();
            var minutes = dates.getMinutes();
            var last_time = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + dates.getSeconds()).slice(-2);  
            var last_date =dates.getFullYear() +'-'+ ('0' + (dates.getMonth()+1)).slice(-2) + '-' + ('0' + dates.getDate()).slice(-2) ;

            let date=moment().format('LT')+" | "+moment().format('D MMM') ;
            if(this.lc_loggeduser.message_connections==null) {
                console.log("sending message to a new person")
                this.new_msg_connection=true
            }
            else{
                let exists=Object.keys(this.lc_loggeduser.message_connections).find(key=>this.lc_loggeduser.message_connections[key].id==this.selected_user.id)
                console.log("connections not empty but same connections appear")
                if(exists==null) {
                this.new_msg_connection=true
                }
            }
            //if selected user has message connections and you 
            // want to check how many new messages you have with 
            // this guy
            if(this.selected_user.message_connections!=null){
            let yourself=Object.keys(this.selected_user.message_connections).find(key=>this.selected_user.message_connections[key].id==this.lc_loggeduser.id)
            //how many msgs i hv with this guy 
            console.log(yourself)
            if(yourself!=null){
                if(this.selected_user.message_connections[yourself].new_messages!=null) {
                new_messages=this.selected_user.message_connections[yourself].new_messages+1
                this.selected_user.message_connections[yourself].new_messages=new_messages
                }
            }
                
            }
            else {
                console.log("this guy doesnt have any messages with anybody")
            }

            let msg_obj={
            date:date,
            message:this.message,
            last_date:last_date,
            last_time:last_time,
            receiver_id:this.selected_user.id,
            sender_id:this.lc_loggeduser.id,
            message_connection:this.new_msg_connection,
            new_messages:new_messages
            }
            console.log(msg_obj)
            this.$store.dispatch('sendMessages',msg_obj)
            this.$bvModal.hide('modal-1')	
            this.message=''
             nativeToast({
                message: 'Message Sent',
                position: 'north-east',
                timeout: 3000,
                type: 'success'
            })
            this.new_msg_connection=false

            }
            else {
                nativeToast({
                message: 'Please fill message field',
                position: 'north-east',
                timeout: 3000,
                type: 'error'
                })
            }
            
        },
        hostInfo(id) {
            let host = this.getUsers.find(user => user.id == id)
            return host;
        },
        accepted(job) {
                let obj=this.fireDevTokens.find(token_item=>token_item.user_id==this.jobDetails.created_by)
                axios({
                method: 'post', 
                url: 'https://fcm.googleapis.com/fcm/send',
                data: {to: obj.token,data:{     title : "Job Accepted",
                body : this.jobDetails.location}},
                headers: {
                    Authorization: 'Bearer ' + this.fireServerkey
                }
                })
            const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
            if(loggedUser) {
                const payload = {
                    jobId: job.id,
                    job_owner: job.created_by,
                    user: loggedUser.id,
                }
                
                this.acceptJob(payload);
            }
        },
        completed(job) {
             let obj=this.fireDevTokens.find(token_item=>token_item.user_id==this.jobDetails.created_by)
                axios({
                method: 'post', 
                url: 'https://fcm.googleapis.com/fcm/send',
                data: {to: obj.token,data:{     title : "Job Completed",
                body : this.jobDetails.location}},
                headers: {
                    Authorization: 'Bearer ' + this.fireServerkey
                }
                })
            const payload = {
                jobId: job.id,
                user: job.accepted_by
            }
            
            payload.job_id = job.id
            payload.amount = job.price
            payload.interpreter_id = job.accepted_by
            payload.business_id = job.created_by
            payload.status = 'pending'
            this.completeJob(payload);
        },
        cancelled(job) {
            let obj=this.fireDevTokens.find(token_item=>token_item.user_id==this.jobDetails.created_by)
                axios({
                method: 'post', 
                url: 'https://fcm.googleapis.com/fcm/send',
                data: {to: obj.token,data:{     title : "Job Cancelled",
                body : this.jobDetails.location}},
                headers: {
                    Authorization: 'Bearer ' + this.fireServerkey
                }
                })
            const payload = {
                jobId: job.id,
                user: job.accepted_by
            }
            this.cancelJob(payload);
        },

        notification(msg, type) {
            nativeToast({
                message: msg,
                position: 'north-east',
                // Self destroy in 5 seconds
                timeout: 5000,
                type: type
            })
        }
    },

    watch: {
        checkAccepted(val) {
            if(val == 'success') {
                this.notification("Job has been Started", "success");
            }
        },

        getCompleted(val) {
            if(val && val == true) {
                this.notification("Job has been Completed", "success")
            }
        },

        getCancelled(val) {
            if(val && val == true) {
                this.notification("Job has been Cancelled", "success")
            }
        }
    }
}
</script>

<style scoped>
#job-details {
    background: #F7F7F7;
    min-height: 100vh;
}
.container {
    max-width: 1400px;
}
</style>