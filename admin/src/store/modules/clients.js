import Vue from 'vue'

const state = {
    clients: [],
};

const getters = {
    clients: (state) => {
        return state.clients
    },
};

const actions = {
    fetchAllClients({commit}) {
        firebase.database().ref('users').orderByChild('type').equalTo('business').on('value', snapshot => {
                commit('setAllBusinesses', snapshot.val())
            }
        )
    },
    createUser({commit}, user) {
        const { password, ...exclude } = user;
        const payload  = Object.assign({}, {...exclude});
        
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(result => {
            firebase.database().ref('users').child(result.user.uid).set(payload).then(save => {
                // commit('setError', "no")
                commit("setNotifications",{message:'New user created successfully',type:'success'})

            }).catch(err => {
                commit("setNotifications",{message:err.message,type:'error'})
            })
        }).catch(err => {
            commit("setNotifications",{message:err.message,type:'error'})
        })
    },
};
const mutations = {
    setAllBusinesses: (state, payload) => {
        let users_Array=[]
        for(let key in payload) {
            payload[key].id=key
            users_Array.push(payload[key])
        }
        state.clients=users_Array
    }   
};

export default {
    state,
    getters,
    actions,
    mutations
}
