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
                    
                    <NewJobs />

                    
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
import { mapActions, mapGetters } from 'vuex';
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
    computed: {
        ...mapGetters(['fetchJobs']),
        fetchPendingJobs() {
            let pending = [];
            let certification = null;
            const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
            if(loggedUser) {
                certification = loggedUser.certifications;

                this.fetchJobs.filter(job => {
                    if(job.status == 'pending' && job.certification == certification) {
                        pending.push(job)
                    }
                })
            }
            return pending;
        }
    },
    data() {
        return {
            fetchedJobs: [],
            image: require('../../assets/profile.jpg'),
            mainProps: { blank: false, blankColor: '#777', width: 100, height: 100, class: 'my-3'},
            userImage: { blank: false, blankColor: '#777', width: 40, height: 40, class: ''}
        }
    },

    created() {
        const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
        
    },

    watch: {
        fetchJobs(val) {
            if(val.length > 0) {
                this.fetchedJobs = [];
                this.fetchedJobs = val;
            }
        },
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