<template>
    <div class="login">
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
                            <input type="email" name="" class="form-control mt-3" v-model="user.email" placeholder="Email">
                            <input type="password" name="" class="form-control mt-3" v-model="user.password" placeholder="Password">
                            <button type="submit" class="btn btn-primary btn-block mt-3" @click="login">Login</button>
                            <div class="row mt-3">
                                <div class="col-md-6 col-6">
                                    <p class="text-left">Forgot Password? <span class="text-primary" @click="navigate('forgot-password')"> Reset </span> </p>
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
    name: "Login",
    components: {
        Footer,
        Navbar
    },
    computed: {
        ...mapGetters(['loggedUser', 'error'])
    },
    data() {
      return {
          current: null,
          user: {
              email: null,
              password: null
          }
      }
    },
    methods: {
        ...mapActions(['loginUser', 'logoutUser']),
        login() {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if(this.user.email == null || this.user.password == null) {
                this.notification('warning', "Email and Password Required!");
            }
            else if(!re.test(this.user.email)) {
                this.notification('warning', "Invalid Email!");
            }
            else {
                // var next = new Date();
                // console.log(this.current + " " + next)
                // var diff = Math.abs(this.current.getTime() - next.getTime()) / 3600000;
                // console.log(diff);
                this.loginUser(this.user);
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
            if(userType.toLowerCase() == 'interpreter' && loggedUser.status == 'active') {
                this.$router.push({path: '/interpreter/dashboard'})
            }
            if(userType.toLowerCase() == 'business' && loggedUser.status == 'active') {
                this.$router.push({path: '/business/dashboard'})
            }
        }
    },

    watch: {
        error(val) {
            if(val) {
                this.notification("error", val);
            }
        },
        loggedUser(val) {
            if(val) {
                const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
                if(loggedUser.status == 'active') {
                    this.notification("success", "Login Successful!");
                    const userType = loggedUser.type;
                    if(userType.toLowerCase() == 'interpreter') {
                        this.$router.push({path: '/interpreter/dashboard'})
                    }
                    if(userType.toLowerCase() == 'business') {
                        this.$router.push({path: '/business/dashboard'})
                    }
                }
                if(loggedUser.status == 'pending') {
                    this.notification("warning", "Your account is under review!");
                    this.logoutUser();
                }
                if(loggedUser.status == 'blocked') {
                    this.notification("error", "Your account has been blocked!");
                    this.logoutUser();
                }
                if(loggedUser.status == 'rejected') {
                    this.notification("error", "Your account has been rejected!");
                    this.logoutUser();
                }
            }
        }
    }
}
</script>

<style scoped>
    .login {
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