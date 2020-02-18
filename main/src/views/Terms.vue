<template>
    <div class="terms">
        <Navbar v-if="!userLogged && userType == null" />
        <BusinessNavbar v-if="userLogged && userType == 'business' " />
        <InterpreterNavbar v-if="userLogged && userType == 'interpreter'" />

        <div class="row top">
            <div class="col-md-12 my-5 terms-area">
                <h3 class="text-primary">Phluently Terms of Use</h3>
                <p><i> Last Modified: {{terms.last_modified}}</i></p>
                <p><i>Effective Date: {{terms.effective_date}}</i></p>

                <div v-html="terms.content"></div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import BusinessNavbar from '@/components/business/BusinessNavbar.vue'
import InterpreterNavbar from '@/components/interpreter/InterpreterNavbar.vue'
import Footer from '@/components/Footer.vue'
import nativeToast from 'native-toast'
import { mapActions, mapGetters } from 'vuex';
export default {
    name: "Terms",
    components: {
        Navbar,
        BusinessNavbar,
        InterpreterNavbar,
        Footer
    },
    data() {
        return {
            userLogged: false,
            userType: null,
            terms: {
                last_modified: null,
                effective_date: null,
                content: null
            }
        }
    },

    computed: {
        ...mapGetters(['getTerms'])
    },

    methods: {
        ...mapActions(['getTermsOfUse']),
    },

    created() {
        const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
        if(loggedUser) {
            this.userLogged = true;
            if(loggedUser.type) {
                this.userType = loggedUser.type.toLowerCase();
            }
        }
        else {
            this.userLogged = false;
        }

        this.getTermsOfUse();
    },

    watch: {
        getTerms(val) {
            if(val) {
                this.terms.last_modified = val.last_modified;
                this.terms.effective_date = val.effective_date;
                this.terms.content = val.content;
            }
        }
    }
}
</script>

<style scoped>
.top {
    border-top: 1px solid #0080FF !important;
}
.terms-area {
    padding-left: 70px;
    padding-right: 70px;
    text-align: justify;
}
</style>