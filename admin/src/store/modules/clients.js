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
}
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
