import Vue from 'vue'

const state = {
    profile_changes: [],

};

const getters = {
    profile_changes: (state) => {
        return state.profile_changes
    }, 
};

const actions = {

fetchProfileChanges({commit}) {
     firebase.database().ref('profile_changed').on('value', snapshot => {
            commit('setProfileChanges', snapshot.val())
        }
    )
},
changeUserProfile({commit},payload){
    let id=payload.id
    let user_id=payload.user_id
    let status=payload.status
    delete payload.id
    delete payload.status
    delete payload.user_id

    if(status=='approved'){
        firebase.database().ref('users').child(user_id).update(payload)
        .then(()=>{
            commit("setNotifications",{message:'User changes applied successfully',type:'success'})
         })
        .catch(error=>{
            commit("setNotifications",{message:error.message,type:'error'})
        })
        firebase.database().ref('profile_changed').child(id).remove()
    
    }
    else{
        firebase.database().ref('profile_changed').child(id).remove()
        .then(()=>{
            commit("setNotifications",{message:' Changes rejected successfully',type:'success'})
         })
        .catch(error=>{
            commit("setNotifications",{message:error.message,type:'error'})
        })
    }
    

}

};
const mutations = {
    setProfileChanges: (state, payload) => {
        let users_Array=[]
        for(let key in payload){
            payload[key].id=key
            users_Array.push(payload[key])
        }
        state.profile_changes=users_Array
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
