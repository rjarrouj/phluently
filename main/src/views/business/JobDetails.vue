<template>
    <div id="job-details">
        <BusinessNavbar />
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
                           
                            <!-- <div id="map-area">
                                <gmap-map id="map" :zoom="10" :center="{lat:jobDetails.lat, lng:jobDetails.lon}" style=" height: 300px">
                                    <gmap-marker ref="mapRef"
                                        :position="google && new google.maps.LatLng(jobDetails.lat, jobDetails.lon)"
                                        :clickable="true"
                                    /> 
                                </gmap-map>
                                <div style="width: 100%" v-if="jobAddress">{{jobAddress}}<iframe width="100%" height="600" :src="map" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><br />
                                
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
                                    <!-- <p><strong class="text-primary py-1">Certified:</strong> </p> -->
                                    <p><strong class="text-primary py-1">Job Date:</strong></p>
                                    <p><strong class="text-primary py-1">Job Time:</strong></p>
                                    <p><strong class="text-primary py-1">Location:</strong></p>
                                    <p><strong class="text-primary py-1">Address:</strong></p>
                                    <p><strong class="text-primary py-1">Price:</strong></p>
                                    <p><strong class="text-primary py-1">Job Status:</strong></p>
                                </div>
                                <div class="col-md-8 col-8 text-right">
                                    <p><strong class="py-1">{{jobDetails.type}}</strong></p>
                                    <!-- <p><strong class="py-1">{{jobDetails.certification}}</strong></p> -->
                                    <p><strong class="py-1">{{formatDate(jobDetails)}}</strong></p>
                                    <p><strong class="py-1">{{jobDetails.start_time}} - {{jobDetails.end_time}}</strong></p>
                                    <p><strong class="py-1">{{jobDetails.location}}</strong></p>
                                    <p><strong class="py-1">{{jobDetails.address}}</strong></p>
                                    <p><strong class="py-1 text-danger">${{jobDetails.price}}</strong></p>
                                    <p><strong class="py-1 text-capitalize">{{jobDetails.status}}</strong></p>
                                </div>
            
                                <div class="col-md-12 col-12" v-if="jobDetails.status == 'active'">
                                    <!-- <button class="btn btn-primary btn-block" @click="accepted"> <i class="fas fa-check"></i> Complete Job</button> -->
                                    <button class="btn btn-danger btn-block" @click="cancelled(jobDetails)"><i class="fas fa-times-circle"></i> Cancel Job</button>
                                    <p v-if="late" class="text-danger cancel"><strong>Note:</strong> If you cancel job now you still have to pay for this job.</p>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
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

                    <div class="card mt-3" v-if="jobDetails.accepted_by">
                        <div class="card-body">
                            <h4>Interpreter Info</h4>
                            <hr>
                            <div class="row">
                                <div class="col-4 col-md-4">
                                    <b-img v-bind="userImage" rounded="circle" :src="image" alt="User image"></b-img>
                                </div>
                                <div class="col-8 col-md-8 mt-3 text-right">
                                    <h6 class="text-info">{{interpreterInfo(jobDetails.accepted_by)}}</h6>
                                </div>
                                 <div class="col-md-12 mt-2">
                                    <button class="btn btn-primary btn-block" @click="fillContactDetails(jobDetails)"> <i class="far fa-envelope"></i> Contact {{interpreterInfo(jobDetails.accepted_by)}}</button>
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
import BusinessNavbar from '@/components/business/BusinessNavbar.vue'
import Footer from '@/components/Footer.vue'
import nativeToast from 'native-toast'
import { mapActions, mapGetters } from 'vuex';
import moment from 'moment'
import axios from 'axios'

export default {
    name: "JobDetails",
    components: {
        BusinessNavbar,
        Footer
    },
    computed: {
        google: gmapApi,
        ...mapGetters(['fetchJobs', 'getUsers', 'getCancelled', 'getCancelledWithPay','fireDevTokens','fireServerkey']),
        jobDetails() {
            let active = [];
            let created_by = null;
            const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
            if(loggedUser) {
                created_by = loggedUser.id;
            }
            let job = this.fetchJobs.find(job => job.id == this.jobId)
            this.jobAddress = job.location
            return job;
        }
    },
    data() {
        return {
            jobAddress: null,
            map: "https://www.google.com/maps/embed/v1/MODE?key=AIzaSyBpWWXUMAMXVAsJl0KG6eylEnwTYZw07aY?&amp;height=600&amp;hl=en&amp;q="+this.jobAddress+"&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed",
            mapSrc: "https://maps.google.com/maps?width=100%&height=600&hl=en&q="+this.jobAddress+"&ie=UTF8&t=&z=14&iwloc=B&output=embed",
            mapCenterLocation: null,
            late: null,
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
        }, 1000)
    },

    methods: {
        ...mapActions(['cancelJob']),
        formatDate(jobDetails) {
            let date = moment(jobDetails.date).format('MM/DD/YYYY');
            return date
        },
        redirectToMap(job) {
            let address = job.address;
            window.open("http://maps.google.com/?q="+address, "_blank")
        },
        verifyDateTime() {
            let job = this.fetchJobs.find(job => job.id == this.jobId)
            let jobDate = job.date + ' ' + job.end_time;
            let date = moment(jobDate);
            let date2 = new Date();
            var year = date2.getFullYear();
            var month = date2.getMonth()+1; 
            var day = date2.getDate();
            var hour = date2.getHours();
            var minute = date2.getMinutes();

            var check = year+' '+month+' '+day+' '+hour+':'+minute; 
            var currentDate = moment(check);

            var duration = moment.duration(date.diff(currentDate));
            var hours = duration.asHours().toFixed(2);
            
            if(hours < 24.00) {
                this.late = true;
            }
            else {
                this.late = false;
            }
        },
        fillContactDetails(job){
            this.$bvModal.show('modal-1')	
            this.selected_user=this.getUsers.find(user_item=>user_item.id==job.accepted_by)
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
        
        cancelled(job) {
            let obj=this.fireDevTokens.find(token_item=>token_item.user_id==this.jobDetails.accepted_by)
            if(obj!=null){
                axios({
                method: 'post', 
                url: 'https://fcm.googleapis.com/fcm/send',
                data: {to: obj.token,data:{     title : "Job Cancelled",
                body : this.jobDetails.location}},
                headers: {
                    Authorization: 'Bearer ' + this.fireServerkey
                }
                })
                }
                else{
                    console.log("nulls")
                }
            const payload = {
                jobId: job.id,
                user: job.created_by
            }
            if(this.late) {
                payload.job_id = job.id
                payload.late = true
                payload.amount = job.price
                payload.interpreter_id = job.accepted_by
                payload.business_id = job.created_by
                payload.status = 'pending'
                this.cancelJob(payload);
            }
            else {
                this.cancelJob(payload);
            }
        },

        interpreterInfo(id) {
            let interpreter = this.getUsers.find(user => user.id == id)
            return interpreter.first_name + " " + interpreter.last_name;
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
        getCancelled(val) {
            if(val && val == true) {
                this.notification("Job has been Cancelled", "success")
            }
        },

        getCancelledWithPay(val) {
            if(val && val == true) {
                this.notification("Job has been Cancelled. You have to pay for this job", "success")
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
.cancel {
    font-size: 14px;
    font-style: italic;
}
</style>