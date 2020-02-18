import axios from 'axios';
const state = {
    payments: [],
    paymentStatus: null,
};

const getters = {
    fetchPayments: state => state.payments,
    getPaymentStatus: state => state.paymentStatus
}

const actions = {
    makePayment({commit}, payload) {
        commit('setPaymentStatus', null);
        const paymentId = payload.payId;
        delete payload.payId;
        axios.post('https://us-central1-phluently-768ac.cloudfunctions.net/CheckoutSession', payload)
        .then(result => {
            if(result.data.status == 'succeeded'){
                const update = {
                    status: 'paid'
                }
                firebase.database().ref('payments').child(paymentId).update(update).then(res => {
                    commit('setPaymentStatus', 'success');
                })
            }
            else {
                commit('setPaymentStatus', 'error');
            }
          }).catch(err => {
            commit('setPaymentStatus', 'error');
            console.log(err)
          })
    },
    fetchAllPayments({commit}) {
        firebase.database().ref('payments').on('value', snapshot => {
            commit('setPayments', snapshot.val());
        })
    }
}

const mutations = {
    setPayments: (state, payload) => {
        let paymentsArray = [];
        for(var payment in payload) {
            payload[payment].id = payment
            paymentsArray.push(payload[payment])
        }

        state.payments = paymentsArray
    },

    setPaymentStatus: (state, payload) => state.paymentStatus = payload
}

export default {
    state,
    getters,
    actions,
    mutations
}