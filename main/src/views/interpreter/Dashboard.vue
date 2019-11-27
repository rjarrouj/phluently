<template>
    <div id="dashboard">
        <InterpreterNavbar />
        <div class="container">
            <div class="row mb-5">
                <div class="col-md-3">
                    <Profile />
                </div>
                <div class="col-md-9 col-12 mb-3">
                    <Stats />
                    <div class="row mt-5">
                        <div class="col-md-12">
                            <div class="card shadow">
                                <div class="card-body">
                                    <h5>New Job Requests - 3</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <NewJobs />

                    <div class="row mt-5">
                        <div class="col-md-12">
                            <div class="card shadow">
                                <div class="card-body">
                                    <h5>Active Jobs - 3</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ActiveJobs />
                </div>
            </div>
        </div>
        <Footer id="footer" />
    </div>
</template>

<script>
import InterpreterNavbar from '@/components/interpreter/InterpreterNavbar.vue'
import Profile from '@/components/interpreter/Profile.vue'
import Stats from '@/components/interpreter/Stats.vue'
import NewJobs from '@/components/interpreter/NewJobs.vue'
import ActiveJobs from '@/components/interpreter/ActiveJobs.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: "Dashboard",
    components: {
        InterpreterNavbar,
        Profile,
        Stats,
        NewJobs,
        ActiveJobs,
        Footer
    },
    data() {
        return {
            image: require('../../assets/profile.jpg'),
            mainProps: { blank: false, blankColor: '#777', width: 100, height: 100, class: 'my-3'},
            userImage: { blank: false, blankColor: '#777', width: 40, height: 40, class: ''}
        }
    }
}
</script>

<style scoped>
#dashboard {
    background: #F7F7F7;
    min-height: 100vh;
}

.container {
    max-width: 1400px;
}
.text-bold {
    font-weight: bold;
}


</style>