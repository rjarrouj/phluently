const state = {
    jobs: [],
    types: [],
    languages: [],
    jobError: null,
    jobPosted: null,
    accpetedJob: null,
    completed: false,
    cancelled: false,
    cancelWithPay: false
};

const getters = {
    fetchJobs: state => state.jobs,
    jobTypes: state => state.types,
    getLanguages: state => state.languages,
    jobPosted: state => state.jobPosted,
    jobError: state => state.jobError,
    checkAccepted: state => state.accpetedJob,
    getCompleted: state => state.completed,
    getCancelled: state => state.cancelled,
    getCancelledWithPay: state => state.cancelWithPay
};

const actions = {
    fetchAllJobs({commit}) {
        firebase.database().ref('jobs').on('value', snapshot => {
            commit('setJobs', snapshot.val());
        })
    },

    fetchJobTypes({commit}) {
        firebase.database().ref('categories').on('value', snapshot => {
            commit('setJobTypes', snapshot.val());
        })
    },

    fetchLanguages({commit}) {
        firebase.database().ref('languages').on('value', snapshot => {
            commit('setLanguages', snapshot.val());
        })
    },

    sendRequest({commit}, payload) {
        firebase.database().ref('jobs').push(payload).then(request => {
            const key = request.key;
            //firebase.auth().onAuthStateChanged(user => {
                //if(user) {
                    firebase.database().ref('users').child(payload.created_by).child('jobs_posted').push(key)
                    .then(() => {
                        commit('jobPosted', 'success');
                    }).catch(err => {
                        commit('jobError', err.message);
                    })
                //}
            //})
        }).catch(err => {
            commit('jobError', err.message);
        })
    },

    acceptJob({commit}, payload) {
        var dateTime = new Date();
        const job = {
            status: 'active',
            accepted_by: payload.user,
            accepted_at: dateTime
        }
        commit('unsetAccpetedJob');
        firebase.database().ref('jobs').child(payload.jobId).update(job).then(() => {
            firebase.database().ref('users').child(payload.user).child('accepted_jobs').push(payload.jobId).then(() => {
                commit('setAccpetedJob', 'success');
            })
        })
    },

    completeJob({commit}, payload) {
        commit('setCompleted', false);
        const job = {
            status: 'completed'
        }
        const payment = {
            job_id: payload.job_id,
            business_id: payload.business_id,
            interpreter_id: payload.interpreter_id,
            status: payload.status,
            amount: payload.amount
        }
        firebase.database().ref('jobs').child(payload.jobId).update(job).then(() => {
            firebase.database().ref('users').child(payload.user).child('completed_jobs').push(payload.jobId).then(() => {
                firebase.database().ref('payments').push(payment).then(request => {
                    commit('setCompleted', true);
                })
            })
        }).catch(err => {
            commit('setCompleted', false);
        })
    },

    cancelJob({commit}, payload) {
        commit('setCancelled', false);
        commit('setCancelledWithPay', false);
        const job = {
            status: 'cancelled',
            cancelled_by: payload.user
        }
        if(payload.late) {
            const payment = {
                job_id: payload.job_id,
                business_id: payload.business_id,
                interpreter_id: payload.interpreter_id,
                status: payload.status,
                amount: payload.amount
            }

            firebase.database().ref('jobs').child(payload.jobId).update(job).then(() => {
                firebase.database().ref('users').child(payload.user).child('cancelled_jobs').push(payload.jobId).then(() => {
                    firebase.database().ref('payments').push(payment).then(request => {
                        commit('setCancelledWithPay', true);
                    }).catch(err => {
                        commit('setCancelledWithPay', false);
                    })
                })
            }).catch(err => {
                commit('setCancelledWithPay', false);
            })
        }

        else {
            firebase.database().ref('jobs').child(payload.jobId).update(job).then(() => {
                firebase.database().ref('users').child(payload.user).child('cancelled_jobs').push(payload.jobId).then(() => {
                    commit('setCancelled', true);
                })
            }).catch(err => {
                commit('setCancelled', false);
            })
        }
    }
};

const mutations = {
    setJobs: (state, payload) => {
        let jobsArray = [];
        for(var job in payload) {
            payload[job].id = job
            jobsArray.push(payload[job])
        }

        state.jobs = jobsArray
    },

    setJobTypes: (state, payload) => {
        let typesArray = [];
        for(var type in payload) {
            payload[type].id = type
            typesArray.push(payload[type])
        }

        state.types = typesArray
    },

    setLanguages: (state, payload) => {
        let langArray = [];
        for(var lang in payload) {
            payload[lang].id = lang
            langArray.push(payload[lang])
        }

        state.languages = langArray
    },

    jobPosted: (state, payload) => state.jobPosted = payload,

    jobError: (state, payload) => state.jobError = payload,

    setAccpetedJob: (state, payload) => state.accpetedJob = payload,

    unsetAccpetedJob: (state) => state.accpetedJob = null,

    setCompleted: (state, payload) => state.completed = payload,

    setCancelled: (state, payload) => state.cancelled = payload,

    setCancelledWithPay: (state, payload) => state.cancelWithPay = payload
};

export default {
    state,
    getters,
    actions,
    mutations
}