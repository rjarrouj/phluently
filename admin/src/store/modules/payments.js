import Vue from 'vue'

const state = {
    payments: [],
};

const getters = {
    payments: (state) => {
        return state.payments
    },
    paid_payments: (state) => {
        return state.payments.filter(payment_item=>payment_item.status=='paid')
    },
    pending_payments: (state) => {
        return state.payments.filter(payment_item=>payment_item.status=='pending')
    }
};

const actions = {
fetchAllPayments({commit}) {
     firebase.database().ref('payments').on('value', snapshot => {
            commit('setAllpayments', snapshot.val())
        }
    )
}
};
const mutations = {
    setAllpayments: (state, payload) => {
        let payments_Array=[]
        for(let key in payload) {
            payload[key].id=key
            payments_Array.push(payload[key])
        }
        state.payments=payments_Array
    }   
};

export default {
    state,
    getters,
    actions,
    mutations
}
