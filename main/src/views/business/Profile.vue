<template>
    <div class="profile">
        <BusinessNavbar />
        <div class="container">
            <div class="row mb-5">
                <div class="col-md-3 col-12">
                    <div class="card mt-3">
                        <div class="card-body">
                            <div class="text-center">
                                <b-img v-bind="mainProps" rounded="circle" @click="onPickFile()" class="image" :src="user.profile_image ? user.profile_image : demoImage" alt="Circle image"></b-img>
                                <input type="file" @change="onFilePicked" style="display:none;" ref="FileInput">
                            </div>
                            <div class="row pt-2">
                                <div class="col-md-5 col-5">
                                    <p class="text-bold text-primary">Name:</p>
                                </div>
                                <div class="col-md-7 col-7">
                                    <p class="">{{user.first_name + " " + user.last_name}}</p>
                                </div>
                            </div>
                            <div class="row pt-2">
                                <div class="col-md-5 col-7">
                                    <p class="text-bold text-primary">Email:</p>
                                </div>
                                <div class="col-md-7 col-7">
                                    <p class="">{{user.email}}</p>
                                </div>
                            </div>
                            <div class="row pt-2">
                                <div class="col-md-5 col-5">
                                    <p class=" text-bold text-primary">Phone:</p>
                                </div>
                                <div class="col-md-7 col-7">
                                    <p class="">{{user.contact}}</p>
                                </div>
                            </div>
                            <!-- <div class="row pt-2">
                                <div class="col-md-5 col-5">
                                    <p class=" text-bold text-primary">Language:</p>
                                </div>
                                <div class="col-md-7 col-7">
                                    <p class="">{{user.languages}}</p>
                                </div>
                            </div> -->
                            <div class="row pt-2">
                                <div class="col-md-5 col-5">
                                    <p class=" text-bold text-primary">Location:</p>
                                </div>
                                <div class="col-md-7 col-7">
                                    <p class="">{{user.location}}</p>
                                </div>
                            </div>
                            <div class="row pt-2">
                                <div class="col-md-5 col-5">
                                    <p class=" text-bold text-primary">Organization:</p>
                                </div>
                                <div class="col-md-7 col-7">
                                    <p class="">{{user.organization}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-9 col-12">
                    <div class="row mt-3">
                        <div class="col-md-12 col-12 text-right">
                            <button class="btn btn-primary mx-3" v-b-modal.modal-center><i class="fas fa-edit"></i> Edit Profile</button>
                        </div>
                        
                    </div>
                    <Stats />

                    <Payments />
                </div>
            </div>
        </div>
        <Footer />

        <b-modal id="modal-center" v-model="editModal" centered title="Edit Profile" :hideFooter="true">
            
            <div class="row">
                <div class="col-md-6 col-12">
                    <label for="" class="text-primary">First Name*</label>
                    <input type="text" name="" placeholder="John" class="form-control" v-model="updateUser.first_name">
                </div>
                <div class="col-md-6 col-12">
                    <label for="" class="text-primary">Last Name*</label>
                    <input type="text" name="" placeholder="Doe" class="form-control" v-model="updateUser.last_name">
                </div>
            </div>

            <div class="row mt-3">
                <div class="col-md-6 col-12">
                    <label for="" class="text-primary">Email*</label>
                    <input type="text" name="" placeholder="john@gmail.com" v-model="updateUser.email" class="form-control" disabled>
                </div>
                <div class="col-md-6 col-12">
                    <label for="" class="text-primary">Phone*</label>
                    <input type="number" min="0" name="" placeholder="+123456789" class="form-control" v-model="updateUser.contact">
                </div>
            </div>

            <div class="row mt-3">
                
                <div class="col-md-6 col-12">
                    <label for="" class="text-primary">Location*</label>
                    <select v-model="updateUser.location" class="form-control">
                        <option v-for="(location, index) in locations" :key="index" :value="location">{{location}}</option>
                    </select>
                </div>
                <div class="col-md-6 col-12">
                    <label for="" class="text-primary">Organization*</label>
                    <input type="text" placeholder="Organization" class="form-control" v-model="updateUser.organization">
                </div>
                <div class="col-md-12 col-12 mt-3">
                    <button type="button" class="btn btn-primary btn-block" @click.prevent="updateRequest"><i class="fas fa-pen"></i> Update Profile</button>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
import BusinessNavbar from '@/components/business/BusinessNavbar.vue'
import Stats from '@/components/business/Stats.vue'
import Payments from '@/components/business/Payments.vue'
import Footer from '@/components/Footer.vue'
import nativeToast from 'native-toast'
import { mapActions, mapGetters } from 'vuex';
export default {
    name: "Profile",
    components: {
        BusinessNavbar,
        Stats,
        Payments,
        Footer
    },
    data() {
        return {
            demoImage: 'https://ptetutorials.com/images/user-profile.png',
            editModal: false,
            user: null,
            updateUser: {
                first_name: null,
                last_name: null,
                email: null,
                contact: null,
                organization: null,
                location: null,
            },
            userImage: {
                profile_image: null
            },
            image: require('../../assets/profile.jpg'),
            mainProps: { blank: false, blankColor: '#777', width: 100, height: 100, class: 'my-3'},
            locations: ['Albuquerque','Atlanta','Austin','Baltimore','Boston','Charlotte','Chicago','Cincinnati','Cleveland','Colorado Springs','Columbus','Dallas','Denver','Detroit','El Paso','Fresno','Fort Worth','Houston','Indianapolis','Jacksonville','Kansas City','Las Vegas','Long Beach','Los Angeles','Louisville','Memphis','Mesa','Miami','Milwaukee','Minneapolis','Nashville','New Orleans','New York','Oakland','Oklahoma City','Omaha','Philadelphia','Phoenix','Portland','Raleigh','Sacramento','San Antonio','San Diego','San Francisco','San Jose','Seattle','Tampa','Tucson','Tulsa','Virginia Beach','Washington, DC']

        }
    },

    computed: {
        ...mapGetters(['updateStatus', 'getImage', 'getLanguages']),
        fetchedLanguages() {
            return this.getLanguages
        },
    },

    methods: {
        ...mapActions(['updateProfile', 'updateProfileImage']),
        notification(msg, type) {
            nativeToast({
                message: msg,
                position: 'north-east',
                // Self destroy in 5 seconds
                timeout: 5000,
                type: type
            })
        },
        updateRequest() {
            let business = this.updateUser;
            const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
            if(this.updateUser.first_name == null || this.updateUser.first_name == "") {
                this.updateUser.first_name = loggedUser.first_name
            }
            if(this.updateUser.last_name == null || this.updateUser.last_name == "") {
                this.updateUser.last_name = loggedUser.last_name
            }
            if(this.updateUser.contact == null || this.updateUser.contact == "") {
                this.updateUser.contact = loggedUser.contact
            }
            
            if(this.updateUser.location == null || this.updateUser.location == "") {
                this.updateUser.location = loggedUser.location
            }
            if(this.updateUser.organization == null || this.updateUser.organization == "") {
                this.updateUser.organization = loggedUser.organization
            }
            this.updateProfile(this.updateUser);
        },
        onPickFile() { 
            this.$refs.FileInput.click();
        },
        onFilePicked(event) { 
            this.userImage.profile_image = event.target.files[0]
            this.updateProfileImage(this.userImage);
        },

        setUserInfo() {
            const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
            if(loggedUser) {
                this.user = loggedUser;
                this.updateUser.email = loggedUser.email;
                this.updateUser.user_id = loggedUser.id;
                this.updateUser.first_name = loggedUser.first_name;
                this.updateUser.last_name = loggedUser.last_name;
                this.updateUser.contact = loggedUser.contact;
                this.updateUser.organization = loggedUser.organization;
                this.updateUser.location = loggedUser.location;
            }
        }
    },

    created() {
        this.setUserInfo();
    },

    watch: {
        updateStatus(val) {
            if(val == 'success') {
                this.notification('Profile Update Request Has Been Sent', 'success');
                this.editModal = false;
            }
        },

        getImage(val) {
            if(val) {
                if(val == 'yes') {
                    this.setUserInfo();
                }
            }
        },
    }
}
</script>

<style scoped>
.profile {
    background: #f7f7f7;
    min-height: 100vh;
}
.container {
    max-width: 1400px;
}
.image:hover {
    background: #000 !important;
    opacity: 0.5;
    cursor: pointer;
}
</style>