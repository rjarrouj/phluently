import Vuex from 'vuex';
import Vue from 'vue';
import serviceproviders from './modules/serviceproviders';
import clients from './modules/clients';
import jobs from './modules/jobs';
import payments from './modules/payments';
import unapproved_users from './modules/unapproved_users';
import categories from './modules/categories';
import admin from './modules/admin';
import profile_changes from './modules/profile_changes';

// Load Vuex
Vue.use(Vuex);
// Create store
export default new Vuex.Store({
    modules: {
        serviceproviders,
        clients,
        jobs,
        payments,
        unapproved_users,
        categories,
        profile_changes,
        admin
    }
});