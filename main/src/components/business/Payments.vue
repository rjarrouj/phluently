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
                            <div class="col-md-2">
                                <strong class="text-primary">Job Type </strong> <h6>{{fetchJobDetails(payment.job_id).type}}</h6>
                            </div>
                            <!-- <div class="col-md-2">
                                <strong class="text-primary">Job Type </strong> <h6>{{fetchJobDetails(payment.job_id).certification}}</h6>
                            </div> -->
                            <div class="col-md-2">
                                <strong class="text-primary">Amount </strong> <h6>${{payment.amount}}</h6>
                            </div>
                            <div class="col-md-2">
                                <strong class="text-primary">Status </strong> <h6><b-badge :variant="payment.status == 'pending' ? 'warning' : 'success'">{{payment.status}}</b-badge></h6>
                            </div>
                            <div class="col-md-2" v-if="payment.status == 'pending'">
                                <button class="btn btn-sm btn-primary" @click="payNow(payment)"><i class="fa fa-credit-card" aria-hidden="true"></i> Pay Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <b-modal v-model="payModal" title="Submit Payment" :hideFooter="true">
            <h4 class="text-info text-center">Pay ${{amount}} via Credit Card</h4>
            <div ref="card" class="border-color"></div>
            <button class="btn btn-primary btn-block mt-3" :disabled="disablePay" @click="submitPayment">Pay Now</button>
       </b-modal>
    </div>
</template>

<script>
let stripe = Stripe(`pk_live_TKHBsoZN8lCilcpqwgy0HW2400916CYmD9`),
    elements = stripe.elements(),
    card = undefined;
import { mapActions, mapGetters } from 'vuex';
import nativeToast from 'native-toast';
export default {
    name: "Payments",
    bodyClass: 'profile-page',
    // destroyed() {
    //     card.destroy(this.$refs.card)
    // },
    
    data(){
        return {
            disablePay: false,
            payModal: false,
            amount: null,
            paymentId: null,
        }
    },
    computed: {
        ...mapGetters(['fetchPayments', 'getUsers', 'fetchJobs', 'getPaymentStatus']),
        getUserPayments() {
            let payments = [];
            const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
            if(loggedUser) {
                let user_id = loggedUser.id;
                this.fetchPayments.filter(pay => {
                    if(pay.business_id == user_id) {
                        payments.push(pay);
                    }
                })
            }
            return payments;
        }
    },
    methods: {
        ...mapActions(['fetchAllPayments', 'makePayment']),
        fetchJobDetails(jobId) {
            let job = this.fetchJobs.find(job => job.id == jobId)
            return job;
        },

        payNow(payment) {
            this.payModal = true;
            this.amount = payment.amount;
            this.paymentId = payment.id
            this.$nextTick(function () {
                this.createCardElement()
            })
        },

        createCardElement() {
            if(card != undefined) {
                card.destroy(this.$refs.card)
            }
            let style = {
            base: {
                color: '#32325d',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                color: '#aab7c4'
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }

            };
            card = elements.create('card', {style: style});
            card.mount(this.$refs.card);
        },

        submitPayment() {
            this.disablePay = true;
            var self = this;
            stripe.createToken(card).then(function(result) {
                if (result.error) {
                    self.hasCardErrors = true;
                    self.disablePay = false;
                    self.$forceUpdate(); // Forcing the DOM to update so the Stripe Element can update.
                    return;
                }
                console.log(result)
                const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
                if(loggedUser) {
                    const userEmail = loggedUser.email;
                    const paymentPayload = {
                        amount: self.amount*100,
                        email: userEmail,
                        stripeToken: result.token,
                        payId: self.paymentId
                    }
                    self.makePayment(paymentPayload);
                }
            })
        },

        notification(msg, type) {
            nativeToast({
                message: msg,
                position: 'north-east',
                // Self destroy in 5 seconds
                timeout: 5000,
                type: type
            })
        },
    },
    created() {
        this.fetchAllPayments();
    },

    watch: {
        getPaymentStatus(val) {
            if(val && val == 'success') {
                this.disablePay = false;
                this.payModal = false;
                this.notification('Payment has been Submitted', 'success');
            }
            if(val && val == 'error') {
                this.notification('error', 'Something Went Wrong');
            }
        }
    }
}
</script>

<style scoped>

</style>