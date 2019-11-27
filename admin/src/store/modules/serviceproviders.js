import Vue from 'vue'

const state = {
    service_providers: [],
    notifications:null

};

const getters = {
    service_providers: (state) => {
        return state.service_providers
    },
    notifications: state => state.notifications

 
};

const actions = {

fetchAllServiceProviders({commit}) {
     firebase.database().ref('users').orderByChild('type').equalTo('Interpreter').on('value', snapshot => {
            commit('setAllServiceProviders', snapshot.val())
        }
    )
},
updateUsers({commit},payload){
    let id=payload.id
    delete payload.id

    firebase.database().ref('users').child(id).update(payload)
    .then(()=>{
        commit("setNotifications",{message:'User updated successfully',type:'success'})
     })
    .catch(error=>{
        commit("setNotifications",{message:error.message,type:'error'})
    })
}

};
const mutations = {
    setAllServiceProviders: (state, payload) => {
        let users_Array=[]
        for(let key in payload){
            payload[key].id=key
            users_Array.push(payload[key])
        }
        state.service_providers=users_Array
    },
    setNotifications:(state,payload)=>{
        state.notifications=payload
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
