<template>
    <div id="dashboard">
        <BusinessNavbar />
        <div class="container">
            <div class="row mt-2 mb-5">
                <div class="col-md-3">
                    <Profile />
                </div>
                <div class="col-md-9 col-12 mb-3">
                    <div class="row">
                        <div class="col-md-12 text-right mt-3">
                            <button class="btn btn-primary" v-b-modal.job-modal><i class="fas fa-briefcase"></i> Request Job</button>
                        </div>
                    </div>
                    <Stats />

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

        <b-modal id="job-modal" centered title="Request Job" :hideFooter="true">
            <div class="row">
                <div class="col-md-6 col-12 mt-3">
                    <label for="" class="text-primary">Job Type*</label>
                    <select name="" id="" class="form-control">
                        <option value="">Legal</option>
                        <option value="">Medical</option>
                        <option value="">Business</option>
                        <option value="">Educational</option>
                    </select>
                </div>
                <div class="col-md-6 col-12 mt-3">
                    <label for="" class="text-primary">Certification*</label>
                    <select name="" id="" class="form-control">
                        <option value="">NBCMI</option>
                        <option value="">CCHI</option>
                        <option value="">CIP</option>
                        <option value="">RID</option>
                    </select>
                </div>
                
            </div>
            <div class="row">
                <div class="col-md-6 col-12 mt-3">
                    <label for="" class="text-primary">Location*</label>
                    <select name="" id="" class="form-control">
                        <option value="">New York</option>
                        <option value="">Texas</option>
                        <option value="">Washington</option>
                        <option value="">Los Angeles</option>
                    </select>
                </div>
                <div class="col-md-6 col-12 mt-3">
                    <label for="" class="text-primary">Job Date*</label>
                    <input type="date" name="" placeholder="Date" class="form-control" id="">
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-12 mt-3">
                    <label for="" class="text-primary">Start Time*</label>
                    <input type="time" name="" placeholder="Time" class="form-control" id="">
                </div>
                <div class="col-md-6 col-12 mt-3">
                    <label for="" class="text-primary">End Time*</label>
                    <input type="time" name="" placeholder="Time" class="form-control" id="">
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-12">
                    <h5 class="mt-3">LEP</h5>
                </div>
                <div class="col-md-6 col-12">
                    <label for="" class="text-primary">First Name*</label>
                    <input type="text" name="" placeholder="First Name" class="form-control" id="">
                </div>
                <div class="col-md-6 col-12">
                    <label for="" class="text-primary">Last Name*</label>
                    <input type="text" name="" placeholder="Last Name" class="form-control" id="">
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-12 mt-3">
                    <label for="" class="text-primary">Job Notes*</label>
                    <textarea class="form-control" rows="2" placeholder="Notes"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-12 my-3">
                    <button class="btn btn-primary btn-block">Submit Request</button>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
import BusinessNavbar from '@/components/business/BusinessNavbar.vue'
import Profile from '@/components/business/Profile.vue'
import Stats from '@/components/business/Stats.vue'
import ActiveJobs from '@/components/business/ActiveJobs.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: "Dashboard",
    components: {
        BusinessNavbar,
        Profile,
        Stats,
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