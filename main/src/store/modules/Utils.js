const state = {
    terms: null,
    privacy: null,
}

const getters = {
    getTerms: state => state.terms,

    getPrivacy: state => state.privacy
}

const actions = {
    getTermsOfUse({commit}) {
        commit('setTerms', null);
        firebase.database().ref('terms').on('value', snapshot => {
            commit('setTerms', snapshot.val());
        })
    },

    getPrivacyPolicy({commit}) {
        commit('setPrivacy', null);
        firebase.database().ref('privacy').on('value', snapshot => {
            commit('setPrivacy', snapshot.val());
        })
    },
}

const mutations = {
    setTerms: (state, payload) => state.terms = payload,

    setPrivacy: (state, payload) => state.privacy = payload,
}

export default {
    state,
    getters,
    actions,
    mutations
}