<template>
    <div id="job-details">
        <BusinessNavbar />
        <div class="container">
            <div class="row my-3">
                <div class="col-md-9 col-12 mt-3 mb-5">
                    <div class="card">
                        <div class="card-body">
                            <h4>Job Details</h4>
                            <hr>
                            <h5 class="text-primary">Legal Job</h5>
                            <p><strong class="text-primary">Notes:</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p class="text-primary"><strong>Location</strong></p>
                            <div id="map-area">
                                <gmap-map id="map" :center="{lat:1.38, lng:103.8}" :zoom="7" style=" height: 300px">
                                    <gmap-marker ref="mapRef"
                                        :position="google && new google.maps.LatLng(1.38, 103.8)"
                                        
                                        /> 
                                </gmap-map>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-12 mt-3">
                    <div class="card">
                        <div class="card-body">
                            <h4>Job Information</h4>
                            <hr>
                            <div class="row">
                                <div class="col-md-4 col-4">
                                    <p><strong class="text-primary py-1">Job Type:</strong></p>
                                    <p><strong class="text-primary py-1">Job Date:</strong></p>
                                    <p><strong class="text-primary py-1">Job Time:</strong></p>
                                    <p><strong class="text-primary py-1">Location:</strong></p>
                                </div>
                                <div class="col-md-8 col-8 text-right">
                                    <p><strong class="py-1">Legal</strong></p>
                                    <p><strong class="py-1">30/11/2018</strong></p>
                                    <p><strong class="py-1">9:00 AM - 12:00 PM</strong></p>
                                    <p><strong class="py-1">Los Angeles, US</strong></p>
                                </div>
                                <div class="col-md-12 col-12">
                                    <button class="btn btn-primary btn-block" @click="accepted"> <i class="fas fa-check"></i> Accept Job</button>
                                    <button class="btn btn-danger btn-block" @click="rejected"><i class="fas fa-times-circle"></i> Reject Job</button>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-md-12">
                                    <h4>LEP</h4>
                                </div>
                                <div class="col-md-5 col-5">
                                    <p><strong class="text-primary py-1">First Name:</strong></p>
                                    <p><strong class="text-primary py-1">Last Name:</strong></p>
                                </div>
                                <div class="col-md-7 col-7 text-right">
                                    <p><strong class="py-1">Arslan</strong></p>
                                    <p><strong class="py-1">Ahmed</strong></p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import {gmapApi} from 'vue2-google-maps'
import BusinessNavbar from '@/components/business/BusinessNavbar.vue'
import Footer from '@/components/Footer.vue'
import nativeToast from 'native-toast'
export default {
    name: "JobDetails",
    components: {
        BusinessNavbar,
        Footer
    },
    computed: {
        google: gmapApi,
    },

    mounted() {
        this.$refs.mapRef.$mapPromise.then((map) => {
            map.panTo({lat: 1.38, lng: 103.80})
        })
    },

    methods: {
        accepted() {
            this.notification("Job has been Started", "success")
        },
        rejected() {
            this.notification("Job has been Rejected", "error")
        },

        notification(msg, type) {
            nativeToast({
                message: msg,
                position: 'north-east',
                // Self destroy in 5 seconds
                timeout: 5000,
                type: type
            })
        }
    }
}
</script>

<style scoped>
#job-details {
    background: #F7F7F7;
    min-height: 100vh;
}
.container {
    max-width: 1400px;
}
</style>