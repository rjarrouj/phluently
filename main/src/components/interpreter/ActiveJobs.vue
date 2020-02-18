<template>
    <div class="active-jobs">
        <div class="row" v-if="!title && activeJobs.length < 1">
            <div class="col-md-12 text my-3"></div>
            <strong class="text-danger ml-5"> No Active Job Found</strong>
        </div>
        <div class="row my-3" v-if="activeJobs.length > 0">
            <div class="col-md-12" v-if="title">
                <div class="card shadow">
                    <div class="card-body">
                        <h5>Active Jobs - {{activeJobs.length}}</h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-for="(job, index) in activeJobs" :key="index">
            <div class="col-md-12 col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-md-4 col-12">
                                <b-img v-bind="mainProps" rounded="circle" :src="userInfo(job.created_by).profile_image ? userInfo(job.created_by).profile_image : demoImage" alt="Circle image"></b-img> <span class="ml-2"><b>{{userInfo(job.created_by).first_name + " " + userInfo(job.created_by).last_name}}</b></span>
                            </div>
                            <div class="col-md-2 col-3 pt-2">
                                <strong>Price</strong><h6><i class="fas fa-dollar-sign"></i> {{calculatePrice(job.price)}}</h6>
                            </div>
                            <div class="col-md-2 col-3 pt-2">
                                <strong>Category</strong><h6><b-badge variant="info">{{job.type}}</b-badge></h6>
                            </div>
                            <div class="col-md-2 col-3 pt-2">

                                <strong>Status</strong><h6><b-badge variant="dark">{{job.status}}</b-badge></h6>
                            </div>
                            <div class="col-md-2 col-2 pt-2">
                                <h6 class="text-primary"><a href="" @click.prevent="jobDetails(job.id)">View</a></h6>
                            </div>
                             <!-- <div class="col-md-1 pl-0 pr-0 col-2 pt-2 text-right">
                                <h6 class="text-primary" style="cursor:pointer;"  @click="fillContactDetails(job)">Contact</h6>    
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
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
import { mapActions, mapGetters } from 'vuex';
import moment from 'moment'
import nativeToast from 'native-toast'

export default {
    props: {
        title: {
            default: true,
            type: Boolean
        }
    },
    created(){
        this.lc_loggeduser=JSON.parse(localStorage.getItem('loggedUser'));


    },
    mounted(){
        this.lc_loggeduser=JSON.parse(localStorage.getItem('loggedUser'));

    },
    computed: {
        ...mapGetters(['fetchJobs', 'getUsers']),
       activeJobs() {
            let active = [];
            let accepted = [];
            let certification = null;
            const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
            if(loggedUser) {
                const user = this.getUsers.find(user => user.id == loggedUser.id);
                if(user) {
                    for(var key in user.accepted_jobs){
                        accepted.push(user.accepted_jobs[key])
                    }

                    accepted.map(acceptJob => {
                        this.fetchJobs.filter(job => {
                            if(job.status == 'active' && job.id == acceptJob) {
                                active.push(job)
                            }
                        })
                    })
                }
            }

            return active;
        }
    },
     data() {
        return {
            demoImage: 'https://ptetutorials.com/images/user-profile.png',
            selected_user:'',
            lc_loggeduser:'',
            new_msg_connection:false,
            message:'',
            image: require('../../assets/profile.jpg'),
            mainProps: { blank: false, blankColor: '#777', width: 40, height: 40, class: ''},
        }
    },
    methods: {
        calculatePrice(price) {
            return (price / 100) * 80;
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
        jobDetails(id) {
            this.$router.push({path: '/interpreter/jobs/'+id})	
        },
        userInfo(id) {
            const user = this.getUsers.find(user => user.id == id)
            return user;
        }
    }
}
</script>