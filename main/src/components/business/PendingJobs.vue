<template>
    <div class="pending-jobs">
        <div class="row" v-if="pendingJobs.length < 1 && !title">
            <div class="col-md-12 text my-3"></div>
            <strong class="text-danger ml-5"> No Pending Job Found</strong>
        </div>
        <div class="row mt-3" v-if="pendingJobs.length > 0">
            <div class="col-md-12" v-if="title">
                <div class="card shadow">
                    <div class="card-body">
                        <h5>Pending Jobs - {{pendingJobs.length}}</h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-for="(job, index) in pendingJobs" :key="index">
            <div class="col-md-12 col-12 mt-3">
                <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-md-4 col-12">
                                <b-img v-bind="mainProps" rounded="circle" :src="userInfo(job.created_by).profile_image ? userInfo(job.created_by).profile_image : demoImage" alt="Circle image"></b-img> <span class="ml-2"><b>{{userInfo(job.created_by).first_name + " " + userInfo(job.created_by).last_name}}</b></span>
                            </div>
                            <div class="col-md-2 col-3 pt-2">
                                <strong>Price</strong><h6><i class="fas fa-dollar-sign"></i> {{job.price}}</h6>
                            </div>
                            <div class="col-md-2 col-3 pt-2">
                                <strong>Category</strong><h6><b-badge variant="info">{{job.type}}</b-badge></h6>
                            </div>
                            <div class="col-md-2 col-3 pt-2">

                                <strong>Status</strong><h6><b-badge variant="dark">{{job.status}}</b-badge></h6>
                            </div>
                            <div class="col-md-1 col-2 pt-2 text-right">
                                <h6 class="text-primary"><a href="" @click.prevent="jobDetails(job.id)">View</a></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    props: {
        title: {
            default: true,
            type: Boolean
        }
    },
    computed: {
        ...mapGetters(['fetchJobs', 'getUsers']),
        pendingJobs() {
            let pending = [];
            let created_by = null;
            const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
            if(loggedUser) {
                created_by = loggedUser.id;

                this.fetchJobs.filter(job => {
                    if(job.status == 'pending' && job.created_by == created_by) {
                        pending.push(job)
                    }
                })
            }
            
            return pending;
        }
    },
     data() {
        return {
            demoImage: 'https://ptetutorials.com/images/user-profile.png',
            image: require('../../assets/profile.jpg'),
            mainProps: { blank: false, blankColor: '#777', width: 40, height: 40, class: ''},
            userImage: { blank: false, blankColor: '#777', width: 40, height: 40, class: ''}
        }
    },
    methods: {
        jobDetails(id) {
            this.$router.push({path: '/business/jobs/'+id})
        },
        userInfo(id) {
            const user = this.getUsers.find(user => user.id == id)
            return user;
        }
    }
}
</script>