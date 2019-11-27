import Vue from 'vue'

const state = {
    unapproved_users: [],

};

const getters = {
    unapproved_users: (state) => {
        return state.unapproved_users
    }, 
};

const actions = {

fetchUnApprovedUsers({commit}) {
     firebase.database().ref('users').orderByChild('status').equalTo('pending').on('value', snapshot => {
            commit('setUnApprovedUsers', snapshot.val())
        }
    )
},
changeUserStatus({commit},payload){
    let id=payload.id
    delete payload.id

    firebase.database().ref('users').child(id).update(payload)
    .then(()=>{
        commit("setNotifications",{message:'User status updated successfully',type:'success'})
     })
    .catch(error=>{
        commit("setNotifications",{message:error.message,type:'error'})
    })
}

};
const mutations = {
    setUnApprovedUsers: (state, payload) => {
        let users_Array=[]
        for(let key in payload){
            payload[key].id=key
            users_Array.push(payload[key])
        }
        state.unapproved_users=users_Array
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
