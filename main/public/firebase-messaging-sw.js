// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
// importScripts('/__/firebase/init.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
'messagingSenderId': '59377314407'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.


// actions: [{action: "http://localhost:8081", title: "Check Now"}],
const messaging=firebase.messaging();
messaging.setBackgroundMessageHandler((payload)=>{  
    const title=payload.data.title
    const options={
        body:payload.data.body,
        icon: 'https://static1.squarespace.com/static/5d6190829ac79e0001ec3ff3/t/5d75443aa4dec76cc226fbeb/1569815993747/?format=1500w'
    }
    return self.registration.showNotification(title,options);   

})

self.addEventListener('notificationclick', function(event) {
    clients.openWindow(event.action)
    
  }
  , false);