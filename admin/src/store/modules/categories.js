import Vue from 'vue'

const state = {
    categories: [],
    certifications:[],
    languages:[]
};

const getters = {
    categories: (state) => {
        return state.categories
    },
    certifications: (state) => {
        return state.certifications
    },
    languages: (state) => {
        return state.languages
    },
};

const actions = {
    fetchAllCertifications({commit}) {
        firebase.database().ref('certifications').on('value', snapshot => {
                commit('setAllCertifications', snapshot.val())
            }
        )
    },
    fetchAllCategories({commit}) {
        firebase.database().ref('categories').on('value', snapshot => {
                commit('setAllCategories', snapshot.val())
            }
        )
    },
    fetchAllLanguages({commit}) {
        firebase.database().ref('languages').on('value', snapshot => {
                commit('setAllLanguages', snapshot.val())
            }
        )
    },
    createCategories({commit},payload){
        firebase.database().ref('categories').push(payload)
        .then(()=>{
            commit("setNotifications",{message:'Category created successfully',type:'success'})
        })
        .catch(error=>{
            commit("setNotifications",{message:error.message,type:'error'})
        })

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
    },
    //Cert
    createCertifications({commit},payload){
        firebase.database().ref('certifications').push(payload)
        .then(()=>{
            commit("setNotifications",{message:'Certification created successfully',type:'success'})
        })
        .catch(error=>{
            commit("setNotifications",{message:error.message,type:'error'})
        })

    },
    updateCertifications({commit},payload) {
        let id=payload.id
        delete payload.id
        firebase.database().ref('certifications').child(id).update(payload)
        .then(()=>{
            commit("setNotifications",{message:'Certifications updated successfully',type:'success'})
        })
        .catch(error=>{
            commit("setNotifications",{message:error.message,type:'error'})
        })
    },
    //Languages
    createLanguages({commit},payload){
        firebase.database().ref('languages').push(payload)
        .then(()=>{
            commit("setNotifications",{message:'Language created successfully',type:'success'})
        })
        .catch(error=>{
            commit("setNotifications",{message:error.message,type:'error'})
        })

    },
    updateLanguages({commit},payload) {
        let id=payload.id
        delete payload.id
        firebase.database().ref('languages').child(id).update(payload)
        .then(()=>{
            commit("setNotifications",{message:'Language updated successfully',type:'success'})
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
    },
    setAllCertifications : (state, payload) => {
        let users_Array=[]
        for(let key in payload) {
            payload[key].id=key
            users_Array.push(payload[key])
        }
        state.certifications=users_Array
    },
    setAllLanguages: (state, payload) => {
        let users_Array=[]
        for(let key in payload) {
            payload[key].id=key
            users_Array.push(payload[key])
        }
        state.languages=users_Array
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
