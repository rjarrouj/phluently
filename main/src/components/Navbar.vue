<template>
    <div>
        <b-navbar toggleable="lg" type="light" variant="default" id="navbar">
            <b-navbar-brand>
                <router-link to="/">
                    <img src="../../public/logo.png" width="25%" alt="">
                </router-link>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse" class="ml-auto toggler"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
        
            <b-navbar-nav class="ml-auto">
                <b-nav-item class="item login" @click="navigate('login')">Login</b-nav-item>
                <b-nav-item class="item signup" @click="navigate('register')">Sign Up</b-nav-item>
                <!-- <b-nav-item-dropdown text="Signup" class="item signup" right no-caret>
                    <b-dropdown-item href="#">Business</b-dropdown-item>
                    <b-dropdown-item href="#">Interpreter</b-dropdown-item>
                </b-nav-item-dropdown> -->
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'Navbar',

    methods: {
        navigate(link) {
            this.$router.push({path: link})
        }
    }
}
</script>

<style scoped>
    #navbar {
        padding: 10px 50px !important;
        background: #fff;
    }
    .item {
        font-size: 20px !important;
        font-weight: bold;
        color: black;
        margin-right: 10px;
    }
    .toggler {
        margin-top: -40px !important;
    }
    
</style>