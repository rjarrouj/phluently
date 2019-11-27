import Vue from 'vue'

const state = {
    jobs: [],
};

const getters = {
    jobs: (state) => {
        return state.jobs
    },
    active_jobs(state){
       return state.jobs.filter(job_item=>job_item.status=='active')
    },
    pending_jobs(state){
       return state.jobs.filter(job_item=>job_item.status=='pending')
    }
};

const actions = {
fetchAllJobs({commit}) {
     firebase.database().ref('jobs').on('value', snapshot => {
            commit('setAllJobs', snapshot.val())
        }
    )
}
};
const mutations = {
    setAllJobs: (state, payload) => {
        let users_Array=[]
        for(let key in payload) {
            payload[key].id=key
            users_Array.push(payload[key])
        }
        state.jobs=users_Array
    }   
};

export default {
    state,
    getters,
    actions,
    mutations
}
