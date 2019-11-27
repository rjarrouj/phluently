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
                            <input type="email" name="" class="form-control mt-3" placeholder="Email" id="">
                            <input type="password" name="" class="form-control mt-3" placeholder="Password" id="">
                            <button type="submit" class="btn btn-primary btn-block mt-3">Login</button>
                            <div class="row mt-3">
                                <div class="col-md-6 col-6">
                                    <p class="text-left">Forgot Password? <span class="text-primary"> Reset </span> </p>
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
export default {
    name: "Login",
    components: {
    Footer,
    Navbar
  },
  methods: {
        navigate(link) {
            this.$router.push({path: link})
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
    span{
        cursor: pointer;
    }
</style>