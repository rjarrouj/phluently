<template>
    <div class="forgot-password">
        <Navbar />
        <div class="container my-5">
            <div class="row mt-5">
                
                <div class="col-md-3">
                    
                </div>
                <div class="col-md-6 text-center">
                    <img src="../../public/logo.png" class="my-5" alt="" width="50%">
                    <div class="card">
                        <div class="card-body">
                            <i class="fas fa-lock fa-2x lock"></i>
                            <input type="email" name="" class="form-control mt-3" v-model="email" placeholder="Email">
                            <button type="submit" class="btn btn-primary btn-block mt-3" @click="submit">Reset Password</button>
                            <div class="row mt-3">
                                <div class="col-md-6 col-6">
                                    <p class="text-left">Already have an account? <span class="text-primary" @click="navigate('login')"> Login </span> </p>
                                </div>
                                <div class="col-md-6 col-6">
                                    <p class="text-right">Don't have an account? <span class="text-primary" @click="navigate('register')"> Register </span></p>
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
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import nativeToast from 'native-toast'
import { mapActions, mapGetters } from 'vuex';
export default {
    name: "ForgotPassword",
    components: {
        Footer,
        Navbar
    },
    data() {
        return {
            email: null
        }
    },

    computed: {
        ...mapGetters(['getReset', 'getUsers']),
    },

    methods: {
        ...mapActions(['passwordReset']),
        submit() {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if(this.email == null || !re.test(this.email)) {
                this.notification('warning', "Invalid Email!");
            }
            else {
                const user = this.getUsers.find(user => user.email == this.email)
                if(!user) {
                    this.notification('warning', "User not Found with Email");
                }
                else {
                    this.passwordReset(this.email);
                }
            }
        },

        navigate(link) {
            this.$router.push({path: link})
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

    created() {
        const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
        if(loggedUser) {
            const userType = loggedUser.type;
            if(userType.toLowerCase() == 'interpreter') {
                this.$router.push({path: '/interpreter/dashboard'})
            }
            if(userType.toLowerCase() == 'business') {
                this.$router.push({path: '/business/dashboard'})
            }
        }
    },

    watch: {
        getReset(val) {
            if(val && val == true) {
                this.notification('success', "Password Reset Email has been sent!");
            }
         }
    }
}
</script>

<style scoped>
.forgot-password {
        background: #f5f5f5;
        min-height: 100vh;
        overflow: hidden !important;
    }
    .lock {
        background: #0080FF !important;
        color: white;
        padding: 15px 20px;
        border-radius: 7px;
    }
    span {
        cursor: pointer;
    }
</style>