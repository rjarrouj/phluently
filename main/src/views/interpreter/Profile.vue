<template>
    <div class="profile">
        <InterpreterNavbar />
        <div class="container">
            <div class="row mt-3 mb-5">
                <div class="col-md-3 col-12">
                    <div class="card mt-3">
                        <div class="card-body">
                            <div class="text-center">
                                <b-img v-bind="mainProps" rounded="circle" :src="image" alt="Circle image"></b-img>
                            </div>
                            <div class="row pt-2">
                                <div class="col-md-5 col-5">
                                    <p class="text-bold text-primary">Name:</p>
                                </div>
                                <div class="col-md-7 col-7">
                                    <p class="">Arslan Ahmed</p>
                                </div>
                            </div>
                            <div class="row pt-2">
                                <div class="col-md-5 col-7">
                                    <p class="text-bold text-primary">Email:</p>
                                </div>
                                <div class="col-md-7 col-7">
                                    <p class="">arslanahmed983@gmail.com</p>
                                </div>
                            </div>
                            <div class="row pt-2">
                                <div class="col-md-5 col-5">
                                    <p class=" text-bold text-primary">Phone:</p>
                                </div>
                                <div class="col-md-7 col-7">
                                    <p class="">0343 5394466</p>
                                </div>
                            </div>
                            <div class="row pt-2">
                                <div class="col-md-5 col-5">
                                    <p class=" text-bold text-primary">Language:</p>
                                </div>
                                <div class="col-md-7 col-7">
                                    <p class="">English</p>
                                </div>
                            </div>
                            <div class="row pt-2">
                                <div class="col-md-5 col-5">
                                    <p class=" text-bold text-primary">Location:</p>
                                </div>
                                <div class="col-md-7 col-7">
                                    <p class="">New York</p>
                                </div>
                            </div>
                            <div class="row pt-2">
                                <div class="col-md-5 col-5">
                                    <p class=" text-bold text-primary">Certification:</p>
                                </div>
                                <div class="col-md-7 col-7">
                                    <p class="">NBCMI</p>
                                </div>
                            </div>
                            <div class="row pt-2">
                                <div class="col-md-5 col-5">
                                    <p class=" text-bold text-primary">Experience:</p>
                                </div>
                                <div class="col-md-7 col-7">
                                    <p class="">0 -5 Years</p>
                                </div>
                            </div>
                            <hr>
                            <div class="row pt-2">
                                <div class="col-md-12 col-12">
                                    <p class="text-primary"><strong>About:</strong></p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
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
                    <div class="row mt-3">
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
        <Footer />

        <b-modal id="modal-center" centered title="Edit Profile" :hideFooter="true">
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
                    <button type="submit" class="btn btn-primary btn-block"><i class="fas fa-pen"></i> Update Profile</button>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
import InterpreterNavbar from '@/components/interpreter/InterpreterNavbar.vue'
import Stats from '@/components/interpreter/Stats.vue'
import ActiveJobs from '@/components/interpreter/ActiveJobs.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: "Profile",
    components: {
        InterpreterNavbar,
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
    },
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
</style>