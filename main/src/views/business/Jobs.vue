<template>
    <div id="jobs">
        <BusinessNavbar />
        <div class="container">
            <div class="row mb-5 mt-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <h3>My Jobs</h3>
                            <div class="my-4">
                                <b-tabs content-class="mt-3" :justified="true" class="jobs">
                                    <b-tab title="Pending Jobs">
                                        <PendingJobs :title="false" />
                                    </b-tab>
                                    <b-tab title="Active Jobs">
                                        <ActiveJobs :title="false"/>
                                    </b-tab>
                                    <b-tab title="Completed Jobs">
                                        <CompletedJobs :title="false"/>
                                    </b-tab>
                                </b-tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer id="footer" />
    </div>
</template>

<script>
import BusinessNavbar from '@/components/business/BusinessNavbar.vue'
import ActiveJobs from '@/components/business/ActiveJobs.vue'
import CompletedJobs from '@/components/business/CompletedJobs.vue'
import PendingJobs from '@/components/business/PendingJobs.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: "Jobs",
    components: {
        BusinessNavbar,
        ActiveJobs,
        CompletedJobs,
        PendingJobs,
        Footer
    }
}
</script>

<style scoped>
#jobs {
    background: #F7F7F7;
    min-height: 100vh;
}
.container {
    max-width: 1400px;
}
</style>