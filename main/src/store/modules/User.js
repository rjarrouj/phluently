const state = {
    error: null,
    resetPassword: false,
    loggedUser: null,
    users: [],
    updateRequestSent: null,
    imageUpload: null,
};

const getters = {
    error: state => state.error,
    getUsers: state => state.users,
    loggedUser: state => state.loggedUser,
    updateStatus: state => state.updateRequestSent,
    getImage: state => state.imageUpload,
    getReset: state => state.resetPassword
};

const actions = {

    // REGISTER NEW USER

    createUser({commit}, user) {
        const { password, ...exclude } = user;
        const payload  = Object.assign({}, {...exclude});
        
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(result => {
            firebase.database().ref('users').child(result.user.uid).set(payload).then(save => {
                commit('setError', "no")
            }).catch(err => {
                commit('setError', err.message)
            })
        }).catch(err => {
            commit('setError', err.message)
        })
    },

    // LOGIN REGISTERED USER

    loginUser({commit}, payload) {
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(() => {
            firebase.auth().onAuthStateChanged(user => {
                if(user) {
                    firebase.database().ref('users').child(user.uid).once('value', snapshot => {
                        if(snapshot.val()) {
                            commit('setLoggedUser', {
                                ...snapshot.val(),
                                id: snapshot.key
                            })
                        }
                        else {
                            commit('setError', 'User Not Found')
                        }
                    }).catch(err => {
                        commit('setError', err.message);
                    })
                }
                else {
                    commit('setError', 'User Not Found')
                }
            })
        }).catch(err => {
            commit('setError', err.message);
        })
    },

    passwordReset({commit}, email){
        commit('resetPassword', false)
        firebase.auth().sendPasswordResetEmail(email).then(() => {
            commit('resetPassword', true)
        }).catch(err => {
            commit('resetPassword', false)
        })
    },

    // LOGOUT USER
    logoutUser({commit}) {
        firebase.auth().signOut()
            .then(() => {
                commit("setLoggedUser", null)
            }).catch(err => {
                commit('setError', err.message);
            })
    },

    // Fetch All Registered Users
    fetchRegisteredUsers({commit}) {
        firebase.database().ref('users').on('child_changed', snapshot => {
            console.log("yehh")
            let loggeduser=JSON.parse(localStorage.getItem("loggedUser"))
            if(snapshot.key==loggeduser.id) {
               localStorage.setItem('loggedUser',JSON.stringify({...snapshot.val(),id:snapshot.key}))
               commit('setLoggedUser', {
                ...snapshot.val(),
                id: snapshot.key})
            }
        })
        firebase.database().ref('users').on('value', snapshot => {
            commit('setUsers', snapshot.val());
        })
    },

    // Update Profile Request
    updateProfile({commit}, payload) {
        commit('unsetUpdateRequest');
        firebase.database().ref('profile_changed').orderByChild('user_id').equalTo(payload.user_id).once('value', snapshot => {
            if(snapshot.val()) {
                firebase.database().ref('profile_changed').child(payload.user_id).remove().then(() => {
                    firebase.database().ref('profile_changed').child(payload.user_id).set(payload).then(() => {
                        commit('setUpdateRequest', 'success');
                    })
                })
            }
            else {
                firebase.database().ref('profile_changed').child(payload.user_id).set(payload).then(() => {
                    commit('setUpdateRequest', 'success');
                })
            }
        })
    },

    updateProfileImage({commit}, payload) {
        commit('unsetImage')
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                if(payload.profile_image != null) {
                    var storageRef = firebase.storage().ref('profile_images/'+payload.profile_image.name);
                    let uploadTask = storageRef.put(payload.profile_image);

                    uploadTask.on('state_changed', () => {
        
                    }, function(err){
                        //console.log(err.message);
                    }, function() {
                        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                            payload.profile_image = downloadURL;
                           
                        }).then(() => {
                            const setImage = {
                                profile_image: payload.profile_image
                            }
                            firebase.database().ref('users').child(user.uid).update(setImage).then(() => {
                                firebase.database().ref('users').child(user.uid)
                                            .once('value', snapshot => {
                                                
                                                if (snapshot.val()) {
                                                   // console.log('Profile Updated ');
                                                    commit('setLoggedUser', null)
                                                    commit('setLoggedUser', {
                                                            ...snapshot.val(),
                                                            id: snapshot.key})
                                                    commit('imageUploaded', 'yes')
                                                }
                                                else {

                                                    //console.log('Nothing')
                                                }
                                            })
                            }).catch(err => {
                               // console.log(err.message)
                            })
                        }).catch(err => {
                            //console.log(err)
                        })
                    })
                }
            }
        })
    }
};

const mutations = {
    setError: (state, payload) => {
        state.error = null,
        state.error = payload
    },

    setLoggedUser: (state, payload) => {
        if(payload == null) {
            state.loggedUser = null;
            localStorage.removeItem("loggedUser");
        }
        else {
            state.loggedUser = null;
            state.loggedUser = payload;
            localStorage.setItem("loggedUser", JSON.stringify(payload));
        } 
    },

    resetPassword: (state, payload) => state.resetPassword = payload,

    setUsers: (state, payload) => {
        let usersArray = [];
        for(var user in payload) {
            payload[user].id = user
            usersArray.push(payload[user])
        }

        state.users = usersArray
    },

    setUpdateRequest: (state, payload) => state.updateRequestSent = payload,

    unsetUpdateRequest: state => state.updateRequestSent = null,

    imageUploaded: (state, payload) => state.imageUpload = payload,

    unsetImage(state) {
        state.imageUpload = null
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}