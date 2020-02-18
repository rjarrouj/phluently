<template>
    <div class="payments">
        <div class="row mt-3">
            <div class="col-md-12">
                <div class="card shadow">
                    <div class="card-body">
                        <h5>Payments</h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-3" v-if="getUserPayments.length < 1">
            <div class="col-md-12">
                <div class="card card-shadow">
                    <div class="card-body">
                        <p class="text-danger">No Payments Found</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-3" v-for="(payment, index) in getUserPayments" :key="index">
            <div class="col-md-12">
                <div class="card card-shadow">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-md-3">
                                <strong class="text-primary">Job Type </strong> <h6>{{fetchJobDetails(payment.job_id).type}}</h6>
                            </div>
                            <!-- <div class="col-md-3">
                                <strong class="text-primary">Job Category </strong> <h6>{{fetchJobDetails(payment.job_id)}}</h6>
                            </div> -->
                            <div class="col-md-3">
                                <strong class="text-primary">Amount </strong> <h6>${{payment.amount}}</h6>
                            </div>
                            <div class="col-md-3">
                                <strong class="text-primary">Status </strong> <h6><b-badge variant="warning">{{payment.status}}</b-badge></h6>
                            </div>
                            <!-- <div class="col-md-2" v-if="payment.status == 'pending'">
                                <button class="btn btn-primary">Pay Now</button>
                            </div> -->
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
        ...mapGetters(['fetchPayments', 'getUsers', 'fetchJobs']),
        getUserPayments() {
            let payments = [];
            const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
            if(loggedUser) {
                let user_id = loggedUser.id;
                this.fetchPayments.filter(pay => {
                    if(pay.interpreter_id == user_id) {
                        payments.push(pay);
                    }
                })
            }
            return payments;
        }
    },
    methods: {
        ...mapActions(['fetchAllPayments']),
        fetchJobDetails(jobId) {
            let job = this.fetchJobs.find(job => job.id == jobId)
            return job;
        }
    },
    created() {
        this.fetchAllPayments();
    }
}
</script>

<style scoped>

</style>