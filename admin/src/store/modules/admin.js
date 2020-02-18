import Vue from 'vue'

const state = {
    authedUser:null,
    privacyStatus: null,
    termsStatus: null,
    terms: null,
    privacy: null
};

const getters = {
    authedUser: (state) => {
        return state.authedUser
    },

    getTermsStatus: state => state.termsStatus,

    getPrivacyStatus: state => state.privacyStatus,

    getTerms: state => state.terms,

    getPrivacy: state => state.privacy
};

const actions = {
    signoutrequests(context) {
        firebase.auth().signOut()
            .then(() => {
                console.log("yes needed that")
                context.commit('logOutUser')
            })
    },
    // JSON.stringify(payload)
    authenticatelogin(context, user_payload) {
        // 
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log("auth state changed")
                firebase.database().ref('users').child(user.uid)
                    .once('value', snapshot => {
                        if (snapshot.val()) {

                        context.commit('setauthedUser', {
                                ...snapshot.val(),
                                id: snapshot.key})
                        }
                    })
                }
        })
        firebase.auth().signInWithEmailAndPassword(user_payload.email, user_payload.password)
            .then(() => {
                console.log("auth completed")
            })
            .catch(error => {
                context.commit("setNotifications",{message:error.message,type:'error'})
            });
    },

    getTermsOfUse({commit}) {
        commit('setTerms', null);
        firebase.database().ref('terms').on('value', snapshot => {
            console.log(snapshot.val())
            commit('setTerms', snapshot.val());
        })
    },

    getPrivacyPolicy({commit}) {
        commit('setPrivacy', null);
        firebase.database().ref('privacy').on('value', snapshot => {
            console.log(snapshot.val())
            commit('setPrivacy', snapshot.val());
        })
    },

    updateTerms({commit}, payload) {
        commit('termsUpdated', null);
        firebase.database().ref('terms').update(payload).then(() => {
            commit('termsUpdated', 'success');
            commit("setNotifications",{message:"Terms of Use Updated",type:'success'})
        }).catch(err => {
            commit('termsUpdated', 'failed');
            commit("setNotifications",{message:"Terms Update Failed",type:'error'})
        })
    },

    updatePrivacy({commit}, payload) {
        
        commit('privacyUpdated', null);
        firebase.database().ref('privacy').update(payload).then(() => {
            commit('privacyUpdated', 'success');
            commit("setNotifications",{message:"Privacy Policy Updated",type:'success'})
        }).catch(err => {
            commit('privacyUpdated', 'failed');
            commit("setNotifications",{message:"Privacy Update Failed",type:'error'})
        })
    }
};
const mutations = {
    setauthedUser: (state, payload) => {
        if(localStorage.getItem("authedUser")==null) {
            console.log("came boi")
        localStorage.setItem("authedUser", JSON.stringify(payload));
        }
        console.log("auth user set")
        state.authedUser=payload
    }, 
    logOutUser(state,payload){
        state.authedUser=null
        localStorage.removeItem("authedUser");
    },

    setTerms: (state, payload) => state.terms = payload,

    setPrivacy: (state, payload) => state.privacy = payload,

    privacyUpdated: (state, payload) => state.privacyStatus = payload,

    termsUpdated: (state, payload) => state.termsStatus = payload
};

export default {
    state,
    getters,
    actions,
    mutations
}
