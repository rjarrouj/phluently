<template>
    <div class="completed-jobs">
        <div class="row mt-3" v-if="completedJobs.length < 1">
            <div class="col-md-12 text my-3"></div>
            <strong class="text-danger ml-5"> No Completed Job Found</strong>
        </div>
        <div class="row mt-3" v-for="(job, index) in completedJobs" :key="index">
            <div class="col-md-12 col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-md-4 col-12">
                                <b-img v-if="userInfo(job.created_by).profile_image" v-bind="mainProps" rounded="circle" :src="userInfo(job.created_by).profile_image ? userInfo(job.created_by).profile_image : demoImage" alt="Circle image"></b-img> <span class="ml-2"><b>{{userInfo(job.created_by).first_name + " " + userInfo(job.created_by).last_name}}</b></span>
                            </div>
                            <div class="col-md-2 col-3 pt-2">
                                <strong>Price</strong><h6><i class="fas fa-dollar-sign"></i> {{calculatePrice(job.price)}}</h6>
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
    computed: {
        ...mapGetters(['fetchJobs', 'getUsers']),
        completedJobs() {
            let completed = [];
            let finished = [];
            let certification = null;
            const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
            if(loggedUser) {
                const user = this.getUsers.find(user => user.id == loggedUser.id);
                if(user) {
                    for(var key in user.completed_jobs){
                        completed.push(user.completed_jobs[key])
                    }
                    completed.map(completedJob => {
                        this.fetchJobs.filter(job => {
                            if(job.status == 'completed' && job.id == completedJob) {
                                finished.push(job)
                            }
                        })
                    })
                }
            }

            return finished;
        },
    },
    data() {
        return {
            demoImage: 'https://ptetutorials.com/images/user-profile.png',
            image: require('../../assets/profile.jpg'),
            mainProps: { blank: false, blankColor: '#777', width: 40, height: 40, class: ''},
        }
    },
    methods: {
        calculatePrice(price) {
            return (price / 100) * 80;
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