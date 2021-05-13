// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA3dC8SYCwCWrIXwWLlFyJDd3bvHwXZ4fc",
    authDomain: "chatapp-3fc94.firebaseapp.com",
    databaseURL: "https://chatapp-3fc94-default-rtdb.firebaseio.com",
    projectId: "chatapp-3fc94",
    storageBucket: "chatapp-3fc94.appspot.com",
    messagingSenderId: "506075754677",
    appId: "1:506075754677:web:08103ae338686edb078efc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});



