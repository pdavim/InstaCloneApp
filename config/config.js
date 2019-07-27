import firebase from 'firebase'


//API details
const firebaseConfig = {
    apiKey: "AIzaSyCM8s8LG1maY7lZC8sDPft5n7gOaTpd5P8",
    authDomain: "productionapp-96303.firebaseapp.com",
    databaseURL: "https://productionapp-96303.firebaseio.com",
    projectId: "productionapp-96303",
    storageBucket: "productionapp-96303.appspot.com",
    messagingSenderId: "488585576112",
    appId: "1:488585576112:web:2e689a640054138e"
  };

firebase.initializeApp(firebaseConfig)

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();