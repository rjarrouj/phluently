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
                                            <input type="text" name="" placeholder="John" class="form-control" id="">
                                        </div>
                                        <div class="col-md-6 col-12">
                                            <label for="" class="text-primary">Last Name*</label>
                                            <input type="text" name="" placeholder="Doe" class="form-control" id="">
                                        </div>
                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-md-6 col-12">
                                            <label for="" class="text-primary">Email*</label>
                                            <input type="text" name="" placeholder="john@gmail.com" class="form-control" id="">
                                        </div>
                                        <div class="col-md-6 col-12">
                                            <label for="" class="text-primary">Phone*</label>
                                            <input type="number" min="0" name="" placeholder="+123456789" class="form-control" id="">
                                        </div>
                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-md-6 col-12">
                                            <label for="" class="text-primary">Languages*</label>
                                            <select name="" id="" class="form-control">
                                                <option value="">English</option>
                                                <option value="">Arabic</option>
                                                <option value="">Bengali</option>
                                                <option value="">Urdu</option>
                                            </select>
                                            
                                        </div>
                                        <div class="col-md-6 col-12">
                                            <label for="" class="text-primary">Location*</label>
                                            <select name="" id="" class="form-control">
                                                <option value="">New York</option>
                                                <option value="">Texas</option>
                                                <option value="">Washington</option>
                                                <option value="">Los Angeles</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <label for="" class="text-primary">Organization*</label>
                                            <input type="text" name="" placeholder="Organization" class="form-control" id="">
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <label for="" class="text-primary">Additional Information*</label>
                                            <textarea class="form-control" rows="1" placeholder="Write something about yourself"></textarea>
                                        </div>
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
                                            <input type="text" name="" placeholder="John" class="form-control" id="">
                                        </div>
                                        <div class="col-md-6 col-12">
                                            <label for="" class="text-primary">Last Name*</label>
                                            <input type="text" name="" placeholder="Doe" class="form-control" id="">
                                        </div>
                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-md-6 col-12">
                                            <label for="" class="text-primary">Email*</label>
                                            <input type="text" name="" placeholder="john@gmail.com" class="form-control" id="">
                                        </div>
                                        <div class="col-md-6 col-12">
                                            <label for="" class="text-primary">Phone*</label>
                                            <input type="number" min="0" name="" placeholder="+123456789" class="form-control" id="">
                                        </div>
                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-md-6 col-12">
                                            <label for="" class="text-primary">Languages*</label>
                                            <select name="" id="" class="form-control">
                                                <option value="">English</option>
                                                <option value="">Arabic</option>
                                                <option value="">Bengali</option>
                                                <option value="">Urdu</option>
                                            </select>
                                            
                                        </div>
                                        <div class="col-md-6 col-12">
                                            <label for="" class="text-primary">Location*</label>
                                            <select name="" id="" class="form-control">
                                                <option value="">New York</option>
                                                <option value="">Texas</option>
                                                <option value="">Washington</option>
                                                <option value="">Los Angeles</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <label for="" class="text-primary">Certifications*</label>
                                            <select name="" id="" class="form-control">
                                                <option value="">NBCMI</option>
                                                <option value="">CCHI</option>
                                                <option value="">CIP</option>
                                                <option value="">RID</option>
                                            </select>
                                            
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <label for="" class="text-primary">Experience*</label>
                                            <select name="" id="" class="form-control">
                                                <option value="">0 - 5 Years</option>
                                                <option value="">5 - 10 Years</option>
                                                <option value="">10 - 15 Years</option>
                                                <option value="">15+ Years</option>
                                            </select>
                                        </div>
                                        
                                        <div class="col-md-12 col-12 mt-3">
                                            <label for="" class="text-primary">Additional Information*</label>
                                            <textarea class="form-control" rows="2" placeholder="Write something about yourself (additional languages, certifications, etc.)"></textarea>
                                        </div>
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
export default {
    name: "Register",
    components: {
        Navbar,
        Footer
  },
  methods: {
      navigate(link) {
          this.$router.push('/'+link+'/dashboard')
      }
  }
}
</script>

<style scoped>
    .register {
        background: #fff;
        
    }
</style>