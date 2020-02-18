const state = {
    fireVapidkey:'BC405fjuKa-r9JOJUbPmHTCL_Og4_BhdDBPFySt09ddpbQODl5_iSGFeauqW2Uy7_MSMcMzNoPMwclWiGJ-7XkA',
    fireDevTokens:[],
    fireServerkey:'AAAAzYmlcj0:APA91bE-c7Ezg5c1vAgehOJTEe7P2l24ka4B98jqwCOi9vty4LawRJb5mWtWZMcSXrCwl08V2xyQDM-KM8Mdo1-JJClZd_MslMXGY7eG1HKtQT8UThR0hl5aA4NxVjsoKj7VxgC3bplS',
};

const getters = {
    fireVapidkey: state => state.fireVapidkey,
    fireServerkey: state => state.fireServerkey,
    fireDevTokens: state => state.fireDevTokens,
    InterfireDevTokens: state => state.fireDevTokens.filter(tok=>tok.categories!=null)

};

const actions = {
    pushDeviceTokens({commit,state},payload) {
        //lets get token and if and then use current available tokens to check if the prev token is = to current token 
        //and if it does then do nothing if it doesnt update it 
        
        let obj=state.fireDevTokens.find(token_item=>token_item.user_id==payload.user_id)
        if(obj==null) {
            firebase.database().ref('tokens').push(payload)
            .then((ok)=>{
                console.log("done")
            })
            .catch(error=>console.log(error.message))
        }
        else {
            obj.token=payload.token
            let id=obj.id
            delete obj.id 
            console.log(obj)
            firebase.database().ref('tokens').child(id).update(obj)
        }
    },
    fetchDevTokens({commit}) {
        firebase.database().ref('tokens').on('value', snapshot => {
            commit('setTokens', snapshot.val());
        })
    },

    // fetchJobTypes({commit}) {
    //     firebase.database().ref('categories').on('value', snapshot => {
    //         commit('setJobTypes', snapshot.val());
    //     })
    // },

    // sendRequest({commit}, payload) {
    //     firebase.database().ref('jobs').push(payload).then(request => {
    //         const key = request.key;
    //         firebase.auth().onAuthStateChanged(user => {
    //             if(user) {
    //                 firebase.database().ref('users').child(user.uid).child('jobs_posted').push(key)
    //                 .then(() => {
    //                     commit('jobPosted', 'success');
    //                 }).catch(err => {
    //                     commit('jobError', err.message);
    //                 })
    //             }
    //         })
    //     }).catch(err => {
    //         commit('jobError', err.message);
    //     })
    // },

    // acceptJob({commit}, payload) {
    //     var dateTime = new Date();
    //     const job = {
    //         status: 'active',
    //         accepted_by: payload.user,
    //         accepted_at: dateTime
    //     }
    //     commit('unsetAccpetedJob');
    //     firebase.database().ref('jobs').child(payload.jobId).update(job).then(() => {
    //         firebase.database().ref('users').child(payload.user).child('accepted_jobs').push(payload.jobId).then(() => {
    //             commit('setAccpetedJob', 'success');
    //         })
    //     })
    // },

    // completeJob({commit}, payload) {
    //     commit('setCompleted', false);
    //     const job = {
    //         status: 'completed'
    //     }
    //     firebase.database().ref('jobs').child(payload.jobId).update(job).then(() => {
    //         firebase.database().ref('users').child(payload.user).child('completed_jobs').push(payload.jobId).then(() => {
    //             commit('setCompleted', true);
    //         })
    //     }).catch(err => {
    //         commit('setCompleted', false);
    //     })
    // }
};

const mutations = {
    setTokens: (state, payload) => {
        let tokenArray = [];
        for(var job in payload) {
            payload[job].id = job
            tokenArray.push(payload[job])
        }

        state.fireDevTokens = tokenArray
    },

    // setJobTypes: (state, payload) => {
    //     let typesArray = [];
    //     for(var type in payload) {
    //         payload[type].id = type
    //         typesArray.push(payload[type])
    //     }

    //     state.types = typesArray
    // },

    // jobPosted: (state, payload) => state.jobPosted = payload,

    // jobError: (state, payload) => state.jobError = payload,

    // setAccpetedJob: (state, payload) => state.accpetedJob = payload,

    // unsetAccpetedJob: (state) => state.accpetedJob = null,

    // setCompleted: (state, payload) => state.completed = payload,
};

export default {
    state,
    getters,
    actions,
    mutations
}