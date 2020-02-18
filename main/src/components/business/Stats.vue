<template>
    <div class="stats">
        <div class="row">
            <div class="col-md-4 col-12 mt-3">
                <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-md-8 col-8">
                                <h5 class="item"> <i class="fas fa-clock"></i> Pending Jobs</h5>
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
                                <h5 class="item"><i class="fas fa-business-time"></i> Active Jobs</h5>
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
    
    computed: {
        ...mapGetters(['fetchJobs']),
        pendingJobs() {
            let active = [];
            let created_by = null;
            const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
            if(loggedUser) {
                created_by = loggedUser.id;
            }
            this.fetchJobs.filter(job => {
                if(job.status == 'pending' && job.created_by == created_by) {
                    active.push(job)
                }
            })

            return active.length;
        },

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

            return completed.length;
        },

        activeJobs() {
            let rejected = [];
            let created_by = null;
            const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
            if(loggedUser) {
                created_by = loggedUser.id;
            }
            this.fetchJobs.filter(job => {
                if(job.status == 'active' && job.created_by == created_by) {
                    rejected.push(job)
                }
            })

            return rejected.length;
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