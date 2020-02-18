<template>
    <div>
        <b-navbar toggleable="lg" type="light" variant="default" id="navbar">
            <b-navbar-brand>
                <router-link to="/business/dashboard">
                    <img src="../../../public/logo.png" width="25%" alt="">
                </router-link>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse" class="ml-auto toggler"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
        
            <b-navbar-nav class="ml-auto">
                <b-nav-item class="item" @click="navigate('dashboard')"> <i class="fa fa-tachometer"></i> Dashboard</b-nav-item>
                <b-nav-item class="item" @click="navigate('jobs')"> <i class="fas fa-briefcase"></i> My Jobs</b-nav-item>
                <b-nav-item class="item" @click="navigate('schedule')"> <i class="fas fa-calendar-alt"></i> My Schedule</b-nav-item>
                <b-nav-item class="item" @click="navigate('chats')"> <i class="fas fa-envelope"></i> Messages</b-nav-item>
                <b-nav-item class="item" @click="navigate('profile')"><i class="fas fa-user"></i> Profile</b-nav-item>
                <b-nav-item class="item" @click.prevent="navigate('logout')"><i class="fas fa-power-off"></i> Logout</b-nav-item>
                <!-- <b-nav-item-dropdown text="Account" right>
                    <b-dropdown-item href="#">interpreter</b-dropdown-item>
                    <b-dropdown-item href="#">Interpreter</b-dropdown-item>
                </b-nav-item-dropdown> -->
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import nativeToast from 'native-toast'
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'BusinessNavbar',
    computed: {
        ...mapGetters(['loggedUser', 'error'])
    },
    methods: {
        ...mapActions(['logoutUser']),
        navigate(link) {
            if(link == 'logout') {
                this.logoutUser();
            }
            else {
                this.$router.push({path: '/business/'+link})
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
        loggedUser(val) {
            if(val == null) {
                console.log("Logout k")
                this.notification("success", "Logged Out!")
                this.$router.push({path: '/login'})
            }
        },
        error(val) {
            if(val) {
                this.notification("error", val)
            }
        }
    }
}
</script>

<style scoped>
    #navbar {
        padding: 10px 50px !important;
        background: #fff;
    }
    .item, .navbar-light .navbar-nav .nav-link, .dropdown {
    
        font-size: 14px !important;
        color: #000 !important;
        margin-right: 10px;
        font-weight: bold;
    }
    
    .toggler {
        margin-top: -40px !important;
    }
    
</style>