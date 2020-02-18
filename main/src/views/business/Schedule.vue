<template>
    <div class="schedule">
        <BusinessNavbar />
        <div class="container">
            <div class="row my-3">

                <full-calendar :config="config" :events="user_events" @event-selected="eventClick" @day-click="handleDateClick"></full-calendar>

            </div>
            <div class="row mt-3">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <h5>Active Jobs - {{this.selected_date!=''? jobs_by_date.length:filtered_jobs.length}}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="selected_date==''">
                <div class="row" v-for="(job, index) in filtered_jobs" :key="index">
                    <div class="col-md-12 mt-3 text-center" v-if="DateChecker(job.date)">
                        <h5> <i>{{job.date}} </i></h5>
                    </div>
                    <div class="col-md-12 mt-2">
                        <div class="card">
                            <div class="card-body">

                                <div class="row align-items-center">
                                    <div class="col-md-4 col-12">
                                        <b-img v-if="userInfo(job.created_by).profile_image" v-bind="mainProps" rounded="circle" :src="userInfo(job.created_by).profile_image" alt="Circle image"></b-img> <span class="ml-2"><b>{{userInfo(job.created_by).first_name + " " + userInfo(job.created_by).last_name}}</b></span>
                                        <b-img v-if="!userInfo(job.created_by).profile_image" v-bind="mainProps" rounded="circle" :src="image" alt="Circle image"></b-img> <span v-if="!userInfo(job.created_by).profile_image" class="ml-2"><b>{{userInfo(job.created_by).first_name + " " + userInfo(job.created_by).last_name}}</b></span>
                                    </div>
                                    <div class="col-md-2 col-3 pt-2">
                                        <strong>Price</strong>
                                        <h6><i class="fas fa-dollar-sign"></i> {{job.price}}</h6>
                                    </div>
                                    <div class="col-md-2 col-3 pt-2">
                                        <strong>Category</strong>
                                        <h6><b-badge variant="info">{{job.type}}</b-badge></h6>
                                    </div>
                                    <div class="col-md-2 col-3 pt-2">
                                        <strong>Status</strong>
                                        <h6><b-badge variant="dark">{{job.status}}</b-badge></h6>
                                    </div>
                                    <div class="col-md-1 col-2 pt-2 text-right">
                                        <h6 class="text-primary"><a href="" @click.prevent="jobDetails(job.id)">View</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <h3>{{job.price}}</h3> -->
                    </div>
                </div>
            </div>
            <div v-else-if="jobs_by_date.length>0">
                <div class="row" v-for="(job, index) in jobs_by_date" :key="index">
                    <div class="col-md-12 mt-3 text-center" v-if="DateChecker(job.date)">
                        <h5> <i>{{job.date}} </i></h5>
                    </div>
                    <div class="col-md-12 mt-2">
                        <div class="card">
                            <div class="card-body">

                                <div class="row align-items-center">
                                    <div class="col-md-4 col-12">
                                        <b-img v-if="userInfo(job.created_by).profile_image" v-bind="mainProps" rounded="circle" :src="userInfo(job.created_by).profile_image" alt="Circle image"></b-img> <span class="ml-2"><b>{{userInfo(job.created_by).first_name + " " + userInfo(job.created_by).last_name}}</b></span>
                                        <b-img v-if="!userInfo(job.created_by).profile_image" v-bind="mainProps" rounded="circle" :src="image" alt="Circle image"></b-img> <span v-if="!userInfo(job.created_by).profile_image" class="ml-2"><b>{{userInfo(job.created_by).first_name + " " + userInfo(job.created_by).last_name}}</b></span>
                                    </div>
                                    <div class="col-md-2 col-3 pt-2">
                                        <strong>Price</strong>
                                        <h6><i class="fas fa-dollar-sign"></i> {{job.price}}</h6>
                                    </div>
                                    <div class="col-md-2 col-3 pt-2">
                                        <strong>Category</strong>
                                        <h6><b-badge variant="info">{{job.type}}</b-badge></h6>
                                    </div>
                                    <div class="col-md-2 col-3 pt-2">
                                        <strong>Status</strong>
                                        <h6><b-badge variant="dark">{{job.status}}</b-badge></h6>
                                    </div>
                                    <div class="col-md-1 col-2 pt-2 text-right">
                                        <h6 class="text-primary"><a href="" @click.prevent="jobDetails(job.id)">View</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <h3>{{job.price}}</h3> -->
                    </div>
                </div>

            </div>
            <div v-else>
                <h6 class="text-danger">No Jobs for selected Date</h6>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script>
import BusinessNavbar from '@/components/business/BusinessNavbar.vue'
import Footer from '@/components/Footer.vue'
import { mapGetters } from 'vuex'
import moment from 'moment'
var prev_date=''
export default {
    name: "Schedule",
    components: {
        BusinessNavbar,
        Footer
    },
    computed:{
        ...mapGetters(['fetchJobs', 'getUsers','loggedUser']),
        user_events(){
            // let user_events=this.fetchJobs.filter(job_item=>job_item.accepted_by==this.loggedUser.id && job_item.status=='active')
            return this.filtered_jobs.map(job_item=>{
                     return{
                         title:job_item.location,
                         start:job_item.date
                     }
            })
        },
        filtered_jobs() {
            console.log(loggedUser)
            const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
            if(loggedUser) {
                return this.fetchJobs.filter(job_item=>job_item.created_by==loggedUser.id && job_item.status=='active')
            }
            else {
                return
            }
            
        },
        jobs_by_date(){
            
            return this.filtered_jobs.filter(job_item=>job_item.date==this.selected_date)
        }
    },
    methods:{
        DateChecker(date){
            if(prev_date!=date){
                prev_date=date
                return true
            }
            else{
                prev_date=date
                return false
            }
        },
        userInfo(id) {
            const user = this.getUsers.find(user => user.id == id)
            return user;
        },
        handleDateClick(date, jsEvent, view){
            this.selected_date=moment(date).format("YYYY-MM-DD")
        },
        eventClick(asd){
            console.log("dsa")
        },
        jobDetails(id) {
            this.$router.push({path: '/interpreter/jobs/'+id})
        }
    },

     mounted(){
        prev_date=''

    },
    created(){
        prev_date=''
    },
    data(){
        return{
            image: 'https://ptetutorials.com/images/user-profile.png',
            mainProps: { blank: false, blankColor: '#777', width: 40, height: 40, class: ''},
            selected_date:'',
           
            config: {
                defaultView: "month",
            },
            events: [
                {
                    title  : 'Demo Jobs 1',
                    start  : '2019-11-01',
                },
                {
                    title  : 'Demo Jobs 2',
                    start  : '2019-11-05',
                    end    : '2019-11-05',
                },
                {
                    title  : 'Demo Job 3',
                    start  : '2019-11-09T12:30:00',
                    allDay : false,
                },
            ]
        }
    }
}
</script>

<style scoped>
.schedule {
    background: #f7f7f7;
    min-height: 100vh;
}
.container {
    max-width: 1400px;
}
</style>
<style >
.fc-content{
    color:white !important
}
</style>