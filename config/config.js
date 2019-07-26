import firebase from 'firebase'


//API details
const firebaseConfig = {
   
  };

firebase.initializeApp(firebaseConfig)

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();