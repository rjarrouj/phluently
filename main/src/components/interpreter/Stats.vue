<template>
    <div class="stats">
        <div class="row">
            <div class="col-md-4 col-12 mt-3">
                <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-md-8 col-8">
                                <h5 class="item"><i class="fas fa-clock"></i> New Jobs</h5>
                            </div>
                            <div class="col-md-4 col-4">
                                <span class="ml-3 count">{{pendingJobs}}</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-12 mt-3">
                <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-md-8 col-8">
                                <h5 class="item"> <i class="fas fa-business-time"></i> Active Jobs</h5>
                            </div>
                            <div class="col-md-4 col-4">
                                <span class="ml-3 count">{{activeJobs}}</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-12 mt-3">
                <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-md-8 col-8">
                                <h5 class="item"> <i class="fas fa-check-circle"></i> Completed Jobs</h5>
                            </div>
                            <div class="col-md-4 col-4">
                                <span class="ml-3 count">{{completedJobs}}</span>
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
    name: 'Stats',
    computed: {
        ...mapGetters(['fetchJobs', 'getUsers']),
        pendingJobs() {
            let pending = [];
            let categories = [];
            let language = [];
            let location = null;
            const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
            if(loggedUser) {
                language = loggedUser.languages;
                categories = loggedUser.categories;
                location = loggedUser.location;
                this.fetchJobs.filter(job => {

                    let isLanguage = language.includes(job.language);
                    let isCategory = categories.includes(job.type);
                    
                    if(isLanguage && isCategory && job.status == 'pending' && location == job.location) {
                        pending.push(job)
                    }
                })
            }
            return pending.length;
        },

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

            return finished.length;
        },

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

            return active.length;
        }
    }
}
</script>

<style scoped>
.count {
    vertical-align: center;
    font-size: 40px;
    color: #0080FF;
}
</style>