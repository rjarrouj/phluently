import Vue from 'vue'

const state = {
    categories: [],
};

const getters = {
    categories: (state) => {
        return state.categories
    },
};

const actions = {
    fetchAllCategories({commit}) {
        firebase.database().ref('categories').on('value', snapshot => {
                commit('setAllCategories', snapshot.val())
            }
        )
    },
    updateCategories({commit},payload) {
        let id=payload.id
        delete payload.id
        console.log(payload)
        firebase.database().ref('categories').child(id).update(payload)
        .then(()=>{
            commit("setNotifications",{message:'Category updated successfully',type:'success'})
        })
        .catch(error=>{
            commit("setNotifications",{message:error.message,type:'error'})
        })
    }
};
const mutations = {
    setAllCategories: (state, payload) => {
        let users_Array=[]
        for(let key in payload) {
            payload[key].id=key
            users_Array.push(payload[key])
        }
        state.categories=users_Array
    }   
};

export default {
    state,
    getters,
    actions,
    mutations
}
