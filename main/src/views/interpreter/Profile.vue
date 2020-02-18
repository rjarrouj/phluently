<template>
    <div class="profile">
        <InterpreterNavbar />
        <div class="container">
            <div class="row mt-3 mb-5">
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
                                    <p class=" text-bold text-primary">Experience:</p>
                                </div>
                                <div class="col-md-7 col-7">
                                    <p class="">{{user.experience}}</p>
                                </div>
                            </div>
                            <div class="row pt-2">
                                <div class="col-md-5 col-5">
                                    <p class=" text-bold text-primary">Languages:</p>
                                </div>
                                <div class="col-md-7 col-7">
                                    <b-badge class="mr-1" variant="dark" v-for="(lang, index) in user.languages" :key="index">{{ lang }} </b-badge>
                                </div>
                            </div>
                            <div class="row pt-2">
                                <div class="col-md-5 col-5">
                                    <p class=" text-bold text-primary">Categories:</p>
                                </div>
                                <div class="col-md-7 col-7">
                                    <b-badge class="mr-1" variant="warning" v-for="(category, index) in user.categories" :key="index">{{ category }} </b-badge>
                                    <!-- <p class="">{{user.certifications}}</p> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-9 col-12">
                    <div class="row my-3">
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
                    <input type="text" name="" placeholder="john@gmail.com" class="form-control" disabled v-model="updateUser.email">
                </div>
                <div class="col-md-6 col-12">
                    <label for="" class="text-primary">Phone*</label>
                    <input type="number" min="0" v-model="updateUser.contact" placeholder="+123456789" class="form-control">
                </div>
            </div>

            <div class="row mt-3">
                <div class="col-md-6 col-12">
                    <label for="" class="text-primary">Languages*</label>
                    <multiselect v-model="updateUser.languages" 
                        :options="fetchedLanguages" 
                        :multiple="true" 
                        :close-on-select="false" 
                        :clear-on-select="true" 
                        :preserve-search="true" 
                        placeholder="Pick Languages" 
                        label="name" 
                        track-by="name" 
                        :preselect-first="false">
                        <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="updateUser.languages.length &amp;&amp; !isOpen">{{ updateUser.languages.length }} languages selected</span></template>
                    </multiselect>
                    
                </div>
                <div class="col-md-6 col-12">
                    <label for="" class="text-primary">Categories*</label>
                    <multiselect v-model="updateUser.categories" 
                        :options="getJobTypes" 
                        :multiple="true" 
                        :close-on-select="false" 
                        :clear-on-select="true" 
                        :preserve-search="true" 
                        placeholder="Pick Categories" 
                        label="name" 
                        track-by="name" 
                        :preselect-first="false">
                        <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="updateUser.categories.length &amp;&amp; !isOpen">{{ updateUser.categories.length }} categories selected</span></template>
                    </multiselect>
                    
                </div>
                
                <div class="col-md-6 col-12 mt-3">
                    <label for="" class="text-primary">Location*</label>
                    <select v-model="updateUser.location" class="form-control">
                        <option v-for="(location, index) in locations" :key="index" :value="location">{{location}}</option>
                    </select>
                    
                </div>
                <div class="col-md-6 col-12 mt-3">
                    <label for="" class="text-primary">Experience*</label>
                    <select v-model="updateUser.experience" class="form-control">
                        <option value="0 - 5 Years">0 - 5 Years</option>
                        <option value="5 - 10 Years">5 - 10 Years</option>
                        <option value="10 - 15 Years">10 - 15 Years</option>
                        <option value="15+ Years">15+ Years</option>
                    </select>
                </div>
                <div class="col-md-12 col-12 mt-3">
                    <button type="button" class="btn btn-primary btn-block" @click.prevent="updateRequest"><i class="fas fa-pen"></i> Update Profile</button>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
import InterpreterNavbar from '@/components/interpreter/InterpreterNavbar.vue'
import Stats from '@/components/interpreter/Stats.vue'
import Payments from '@/components/interpreter/Payments.vue'
import nativeToast from 'native-toast'
import Footer from '@/components/Footer.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "Profile",
    components: {
        InterpreterNavbar,
        Stats,
        Payments,
        Footer
    },
    created() {
        const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
        if(loggedUser) {
            this.setUserInfo();
        }
    },
    data() {
        return {
            demoImage: 'https://ptetutorials.com/images/user-profile.png',
            user: null,
            editModal: false,
            userLangs: [],
            userCats: [],
            updateUser: {
                first_name: null,
                last_name: null,
                email: null,
                contact: null,
                categories: [],
                languages: [],
                location: null,
                experience: null,
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
        ...mapGetters(['updateStatus', 'getImage', 'jobTypes', 'getLanguages']),
        fetchedLanguages() {
            return this.getLanguages
        },
        getJobTypes() {
            return this.jobTypes;
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
        onPickFile() { 
            this.$refs.FileInput.click();
        },
        onFilePicked(event) { 
            this.userImage.profile_image = event.target.files[0]
            this.updateProfileImage(this.userImage);
        },
        updateRequest() {
            let interpreter = this.updateUser;
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
            if(this.updateUser.experience == null || this.updateUser.experience == "") {
                this.updateUser.experience = loggedUser.experience
            }
            
            if(this.updateUser.location == null || this.updateUser.location == "") {
                this.updateUser.location = loggedUser.location
            }
            // if(this.updateUser.languages == null || this.updateUser.languages == undefined || this.updateUser.languages == "") {
            //     //this.updateUser.languages = loggedUser.languages
            //     loggedUser.languages.forEach(element => {
            //         const obj = {
            //             name: element
            //         }
            //         this.updateUser.languages.push(obj);
            //     });
            // }
            // if(this.updateUser.categories == null || this.updateUser.categories == "" || this.updateUser.categories == undefined) {
            //     //this.updateUser.categories = loggedUser.categories;
            //     loggedUser.categories.forEach(element => {
            //         const obj = {
            //             name: element
            //         }
            //         this.updateUser.categories.push(obj);
            //     });
            // }
            // if(interpreter.first_name == null || interpreter.last_name == null || interpreter.contact == null || interpreter.languages == null || interpreter.location == null || interpreter.experience == null || interpreter.categories == null) {
            //     this.notification('All Fields Required', 'error');
            //     return
            // }

            let categories = [];
            let languages = [];

            if(this.updateUser.categories != null) {
                    this.updateUser.categories.forEach(item => {
                    categories.push(item.name)
                })

                this.updateUser.categories = categories;
            }
            
            if(this.updateUser.languages != null) {
                this.updateUser.languages.forEach(item => {
                languages.push(item.name)
            })

                this.updateUser.languages = languages;
            }
            console.log("Update Run")
            console.log(this.updateUser);

            this.updateProfile(this.updateUser);
            

            // console.log("After Update Run")
            // console.log(this.updateUser);
        },
        setUserInfo() {
            const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
            if(loggedUser) {
                this.user = loggedUser;
                this.updateUser.user_id = loggedUser.id;
                this.updateUser.email = loggedUser.email;
                this.updateUser.first_name = loggedUser.first_name;
                this.updateUser.last_name = loggedUser.last_name;
                this.updateUser.contact = loggedUser.contact;
                this.updateUser.experience = loggedUser.experience;
                this.updateUser.location = loggedUser.location;

                loggedUser.languages.forEach(element => {
                    const obj = {
                        name: element
                    }
                    this.updateUser.languages.push(obj);
                    this.userLangs.push(obj);
                });

                loggedUser.categories.forEach(element => {
                    const obj = {
                        name: element
                    }
                    this.updateUser.categories.push(obj);
                    this.userCats.push(obj);
                });
            }
        }
    },

    watch: {
        updateStatus(val) {
            if(val == 'success') {
                this.notification('Profile Update Request Has Been Sent', 'success');
                this.updateUser.languages = this.userLangs;
                this.updateUser.categories = this.userCats;
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