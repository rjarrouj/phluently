<template>
    <div class="completed-jobs">
        <div class="row" v-if="completedJobs.length < 1">
            <div class="col-md-12 text my-3"></div>
            <strong class="text-danger ml-5"> No Completed Job Found</strong>
        </div>
        <div class="row" v-for="(job, index) in completedJobs" :key="index">
            <div class="col-md-12 col-12 mt-3">
                <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-md-4 col-12">
                                <b-img v-bind="mainProps" rounded="circle" :src="userInfo(job.accepted_by).profile_image ? userInfo(job.created_by).profile_image : demoImage" alt="Circle image"></b-img> <span class="ml-2"><b>{{userInfo(job.accepted_by).first_name + " " + userInfo(job.accepted_by).last_name}}</b></span>
                            </div>
                            <div class="col-md-2 col-3 pt-2">
                                <strong>Price</strong><h6><i class="fas fa-dollar-sign"></i> {{job.price}}</h6>
                            </div>
                            <div class="col-md-2 col-3 pt-2">
                                <strong>Category</strong><h6><b-badge variant="info">{{job.type}}</b-badge></h6>
                            </div>
                            <div class="col-md-2 col-3 pt-2">

                                <strong>Status</strong><h6><b-badge variant="success">{{job.status}}</b-badge></h6>
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
    name: "CompletedJobs",
    props: {
        title: Boolean
    },
    computed: {
        ...mapGetters(['fetchJobs', 'getUsers']),
        completedJobs() {
            let completed = [];
            let created_by = null;
            const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
            if(loggedUser) {
                created_by = loggedUser.id;
            }
            this.fetchJobs.filter(job => {
                if(job.status == 'completed' && job.created_by == created_by) {
                    completed.push(job)
                }
            })

            return completed;
        }
    },
    data() {
        return {
            demoImage: 'https://ptetutorials.com/images/user-profile.png',
            image: require('../../assets/profile.jpg'),
            mainProps: { blank: false, blankColor: '#777', width: 40, height: 40, class: ''},
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