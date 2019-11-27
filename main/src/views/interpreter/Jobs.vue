<template>
    <div id="jobs">
        <InterpreterNavbar />
        <div class="container">
            <div class="row mb-5 mt-3">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <h3>My Jobs</h3>
                            <div class="my-4">
                                <b-tabs content-class="mt-3" :justified="true" class="jobs">
                                    <b-tab title="Open Jobs">
                                        <NewJobs />
                                    </b-tab>
                                    <b-tab title="Active Jobs">
                                        <ActiveJobs />
                                    </b-tab>
                                    <b-tab title="Completed Jobs">
                                        <CompletedJobs />
                                    </b-tab>
                                    <!-- <b-tab title="Rejected Jobs">
                                        <RejectedJobs />
                                    </b-tab> -->
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
import InterpreterNavbar from '@/components/interpreter/InterpreterNavbar.vue'
import NewJobs from '@/components/interpreter/NewJobs.vue'
import ActiveJobs from '@/components/interpreter/ActiveJobs.vue'
import CompletedJobs from '@/components/interpreter/CompletedJobs.vue'
import RejectedJobs from '@/components/interpreter/RejectedJobs.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: "Jobs",
    components: {
        InterpreterNavbar,
        NewJobs,
        ActiveJobs,
        CompletedJobs,
        RejectedJobs,
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