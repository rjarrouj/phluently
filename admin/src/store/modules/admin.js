import Vue from 'vue'

const state = {
    loggedUser:null
};

const getters = {
    loggedUser: (state) => {
        return state.loggedUser
    }
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

                        context.commit('setLoggedUser', {
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
    }
};
const mutations = {
    setLoggedUser: (state, payload) => {
        if(localStorage.getItem("loggedUser")==null) {
            console.log("came boi")
        localStorage.setItem("loggedUser", JSON.stringify(payload));
        }
        console.log("auth user set")
        state.loggedUser=payload
    }, 
    logOutUser(state,payload){
        state.loggedUser=null
        localStorage.removeItem("loggedUser");


    } 
};

export default {
    state,
    getters,
    actions,
    mutations
}
