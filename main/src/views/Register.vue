<template>
    <div class="register">
        <Navbar />
        <div class="container">
            <div class="row pb-5 ">
                <div class="col-12">
                    <!-- <div class="text-center">
                        <img src="../../public/logo.png" class="my-3" alt="" width="25%">
                    </div> -->
                    
                    <!-- <div class="card mt-3">
                        <div class="card-body"> -->
                            <!-- <h4 class="text-center py-3">Register Yourself</h4> -->
                            <b-tabs :justified="true" class="register-tabs">
                                <b-tab no-body title="Business Sign Up">
                                    <h5 class="text-center my-3">Tired of dealing with agencies? Say hello to the future of interpreter booking!</h5>
                                    <h5 class="text-center text-primary my-4 text-capitalize">Why you should switch</h5>
                                    <div class="row mb-5">
                                        <div class="col-md-4 col-12 text-center">
                                            <img src="../../assets/booking.png" class="mb-3" width="25%" alt="">
                                            <h5>Fast and efficient booking</h5>
                                            <p>The automated technology sends out job notifications as soon as they are submitted, and interpreters can accept them with the click of a button.</p>
                                        </div>
                                        <div class="col-md-4 col-12 text-center">
                                            <img src="../../assets/security.png" class="mb-3" width="25%" alt="">
                                            <h5>Information security</h5>
                                            <p>Personal details are maintained under stringent security measures, and are only accessible once the interpreter is at the designated location.</p>
                                        </div>
                                        <div class="col-md-4 col-12 text-center">
                                            <img src="../../assets/process.png" class="mb-3" width="25%" alt="">
                                            <h5>Thorough vetting process</h5>
                                            <p>Interpreters on the platform undergo a rigorous evaluation process, are highly experienced, and possess all applicable certifications.</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 col-12">
                                            <label for="" class="text-primary">First Name*</label>
                                            <input type="text" name="" placeholder="John" v-model="businessUser.first_name" class="form-control" id="">
                                        </div>
                                        <div class="col-md-6 col-12">
                                            <label for="" class="text-primary">Last Name*</label>
                                            <input type="text" name="" placeholder="Doe" v-model="businessUser.last_name" class="form-control" id="">
                                        </div>
                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-md-6 col-12">
                                            <label for="" class="text-primary">Email*</label>
                                            <input type="text" name="" placeholder="john@gmail.com" v-model="businessUser.email" class="form-control" id="">
                                        </div>
                                        <div class="col-md-6 col-12">
                                            <label for="" class="text-primary">Phone*</label>
                                            <input type="number" min="0" name="" placeholder="+123456789" v-model="businessUser.contact" class="form-control" id="">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 col-12 mt-3">
                                            <label for="" class="text-primary">Password*</label>
                                            <input type="password"  placeholder="Your Password" v-model="businessPassword" class="form-control" id="">
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <label for="" class="text-primary">Confirm Password*</label>
                                            <input type="password" name="" placeholder="Confirm Password" v-model="businessConfirm" class="form-control" id="">
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <!-- <div class="col-md-6 col-12">
                                            <label for="" class="text-primary">Languages*</label>
                                            <select name="" id="" class="form-control" v-model="businessUser.languages">
                                                <option v-for="(lang, index) in fetchedLanguages" :key="index" :value="lang.name">{{lang.name}}</option>
                                            </select>
                                            
                                        </div> -->
                                        <div class="col-md-6 col-12">
                                            <label for="" class="text-primary">Location*</label>
                                            <select class="form-control" v-model="businessUser.location">
                                                <option v-for="(location, index) in locations" :key="index" :value="location">{{location}}</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12">
                                            <label for="" class="text-primary">Organization*</label>
                                            <input type="text" name="" placeholder="Organization" v-model="businessUser.organization" class="form-control" id="">
                                        </div>
                                        <!-- <div class="col-md-12 col-12 mt-3">
                                            <label for="" class="text-primary">Additional Information*</label>
                                            <textarea class="form-control" rows="2" placeholder="Write something about yourself" v-model="businessUser.about"></textarea>
                                        </div> -->
                                        <div class="col-md-12 col-12 mt-3">
                                            <button type="submit" class="btn btn-primary btn-block" @click="navigate('business')">Sign Up</button>
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab no-body title="Interpreter Sign Up">
                                    <h5 class="text-center mt-3">Are you an experienced certified interpreter? Sign up now and see the difference!</h5>
                                    <h5 class="text-center text-primary my-4 text-capitalize">What you get</h5>
                                    <div class="row mb-5">
                                        <div class="col-md-4 col-12 text-center">
                                            <img src="../../assets/tech.png" class="mb-3" width="25%" alt="">
                                            <h5>Smart technology that works for you</h5>
                                            <p>Book and close jobs with the click of a button, and view job details and earnings. And since it is based in the cloud, there is nothing to download or update.</p>
                                        </div>
                                        <div class="col-md-4 col-12 text-center">
                                            <img src="../../assets/schedule.png" class="mb-3" width="25%" alt="">
                                            <h5>The ultimate scheduling flexibility</h5>
                                            <p>Book jobs when you want, where you want. Set search filters that work for you. You can even swap jobs with other interpreters.</p>
                                        </div>
                                        <div class="col-md-4 col-12 text-center">
                                            <img src="../../assets/rates.png" class="mb-3" width="25%" alt="">
                                            <h5>Premium rates and convenient payment</h5>
                                            <p>We believe the best talent deserves the best pay. Our rates are highly competitive, and payments are made fast via direct deposit.</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 col-12">
                                            <label for="" class="text-primary">First Name*</label>
                                            <input type="text" name="" v-model="interpreterUser.first_name" placeholder="John" class="form-control" id="">
                                        </div>
                                        <div class="col-md-6 col-12">
                                            <label for="" class="text-primary">Last Name*</label>
                                            <input type="text" name="" v-model="interpreterUser.last_name" placeholder="Doe" class="form-control" id="">
                                        </div>
                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-md-6 col-12">
                                            <label for="" class="text-primary">Email*</label>
                                            <input type="text" name="" placeholder="john@gmail.com" v-model="interpreterUser.email" class="form-control" id="">
                                        </div>
                                        <div class="col-md-6 col-12">
                                            <label for="" class="text-primary">Phone*</label>
                                            <input type="number" min="0" name="" placeholder="+123456789" v-model="interpreterUser.contact" class="form-control" id="">
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6 col-12 mt-3">
                                            <label for="" class="text-primary">Password*</label>
                                            <input type="password"  placeholder="Your Password" v-model="interpreterPassword" class="form-control" id="">
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <label for="" class="text-primary">Confirm Password*</label>
                                            <input type="password" name="" placeholder="Confirm Password" v-model="interpreterConfirm" class="form-control" id="">
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6 col-12 mt-3">
                                            <label for="" class="text-primary">Location*</label>
                                            <select name="" id="" class="form-control" v-model="interpreterUser.location">
                                                <option v-for="(location, index) in locations" :key="index" :value="location">{{location}}</option>
                                            </select>
                                            
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <label for="" class="text-primary">Experience*</label>
                                            <select name="" id="" class="form-control" v-model="interpreterUser.experience">
                                                <option value="0 - 5 Years">0 - 5 Years</option>
                                                <option value="5 - 10 Years">5 - 10 Years</option>
                                                <option value="10 - 15 Years">10 - 15 Years</option>
                                                <option value="15+ Years">15+ Years</option>
                                            </select>
                                        </div>

                                        <div class="col-md-6 col-12 mt-3">
                                            <label for="" class="text-primary">Languages*</label>
                                            <multiselect v-model="interpreterUser.languages" 
                                                :options="fetchedLanguages" 
                                                :multiple="true" 
                                                :close-on-select="false" 
                                                :clear-on-select="false" 
                                                :preserve-search="true" 
                                                placeholder="Pick Languages" 
                                                label="name" 
                                                track-by="name" 
                                                :preselect-first="false">
                                                <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="interpreterUser.languages.length &amp;&amp; !isOpen">{{ interpreterUser.languages.length }} languages selected</span></template>
                                            </multiselect>
                                            
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <label for="" class="text-primary">Categories*</label>
                                            <multiselect v-model="interpreterUser.categories" 
                                                :options="getJobTypes" 
                                                :multiple="true" 
                                                :close-on-select="false" 
                                                :clear-on-select="false" 
                                                :preserve-search="true" 
                                                placeholder="Pick Categories" 
                                                label="name" 
                                                track-by="name" 
                                                :preselect-first="false">
                                                <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="interpreterUser.categories.length &amp;&amp; !isOpen">{{ interpreterUser.categories.length }} categories selected</span></template>
                                            </multiselect>
                                            
                                        </div>
                                        
                                        <!-- <div class="col-md-12 col-12 mt-3">
                                            <label for="" class="text-primary">Additional Information*</label>
                                            <textarea class="form-control" rows="2" v-model="interpreterUser.about" placeholder="Write something about yourself (additional languages, certifications, etc.)"></textarea>
                                        </div> -->
                                        <div class="col-md-12 col-12 mt-3">
                                            <button type="submit" class="btn btn-primary btn-block" @click="navigate('interpreter')">Sign Up</button>
                                        </div>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </div>
                    </div>
                <!-- </div>
            </div> -->
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import nativeToast from 'native-toast'
import { mapActions, mapGetters } from 'vuex';
import { lang } from 'moment';
export default {
    name: "Register",
    components: {
        Navbar,
        Footer
    },
    computed: {
        ...mapGetters(['error', 'getLanguages', 'jobTypes']),
        fetchedLanguages() {
            return this.getLanguages
        },
        getJobTypes() {
            return this.jobTypes;
        },
    },
    data() {
        return {
            businessUser: {
                first_name: null,
                last_name: null,
                email: null,
                contact: null,
                languages: null,
                location: null,
                organization: null,
                about: null,
                type: "business",
                status: "pending"
            },

            interpreterUser: {
                first_name: null,
                last_name: null,
                email: null,
                contact: null,
                languages: [],
                location: null,
                categories: [],
                experience: null,
                about: null,
                type: "interpreter",
                status: "pending"
            },

            businessPassword: null,
            businessConfirm: null,

            interpreterPassword: null,
            interpreterConfirm: null,

            locations: ['Albuquerque','Atlanta','Austin','Baltimore','Boston','Charlotte','Chicago','Cincinnati','Cleveland','Colorado Springs','Columbus','Dallas','Denver','Detroit','El Paso','Fresno','Fort Worth','Houston','Indianapolis','Jacksonville','Kansas City','Las Vegas','Long Beach','Los Angeles','Louisville','Memphis','Mesa','Miami','Milwaukee','Minneapolis','Nashville','New Orleans','New York','Oakland','Oklahoma City','Omaha','Philadelphia','Phoenix','Portland','Raleigh','Sacramento','San Antonio','San Diego','San Francisco','San Jose','Seattle','Tampa','Tucson','Tulsa','Virginia Beach','Washington, DC']

        }
        
    },
    methods: {
        ...mapActions(['createUser']),
        navigate(type) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(type == 'business') {
                let business = this.businessUser;
                if(business.first_name == null || business.last_name == null || business.email == null || business.contact == null || business.location == null || business.organization == null) {
                    
                    this.notification("error", "All Fields Required!");
                }
                else if(!re.test(business.email.toLowerCase())) {
                    this.notification("error", "Invalid Email!");
                }
                else if(this.businessPassword == null){
                    this.notification("error", "Please Enter Password!");
                }
                else if(this.businessConfirm == null) {
                    this.notification("error", "Please Confirm Your Password!");
                }
                else if(this.businessPassword != this.businessConfirm) {
                    this.notification("error", "Password Mismatch!");
                }
                else {
                    business.password = this.businessPassword;
                    this.createUser(business);
                }
            }
            if(type == 'interpreter') {
                let interpreter = this.interpreterUser;
                
                if(interpreter.first_name == null || interpreter.last_name == null || interpreter.email == null || interpreter.contact == null || interpreter.languages == null || interpreter.location == null || interpreter.categories == null || interpreter.experience == null) {
                    this.notification("error", "All Fields Required!");
                    //console.log(interpreter);
                }
                else if(!re.test(interpreter.email.toLowerCase())) {
                    this.notification("error", "Invalid Email!");
                }
                else if(this.interpreterPassword == null){
                    this.notification("error", "Please Enter Password!");
                }
                else if(this.interpreterConfirm == null) {
                    this.notification("error", "Please Confirm Your Password!");
                }
                else if(this.interpreterPassword != this.interpreterConfirm) {
                    this.notification("error", "Password Mismatch!");
                }
                else {
                    interpreter.password = this.interpreterPassword;
                    let categories = [];
                    let languages = [];
                    if(interpreter.categories != null) {
                        interpreter.categories.forEach(item => {
                        categories.push(item.name)
                    })

                    interpreter.categories = categories;

                    if(interpreter.languages != null) {
                        interpreter.languages.forEach(item => {
                        languages.push(item.name)
                    })

                    interpreter.languages = languages;
                    
                    this.createUser(interpreter);
                    
                }
            }
            //this.$router.push('/'+link+'/dashboard')
        }
    }
        },

        notification(type, msg) {
            nativeToast({
                message: msg,
                position: 'north-east',
                // Self destroy in 5 seconds
                timeout: 5000,
                type: type
            })
        }
    },

    watch: {
        error(val) {
            if(val == "no") {
                this.notification('success', "Registration Successful!")
                this.$router.push({path: '/login'});
            }
            else {
                this.notification('error', val)
            }
        }
    }
}
</script>

<style scoped>
    .register {
        background: #fff;
        
    }
</style>    