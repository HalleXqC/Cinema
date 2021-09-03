import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBL3MwQDKQZloIl6PeZsfWZ7T6TNoPuMi0",
    authDomain: "cinema-project-4fe82.firebaseapp.com",
    projectId: "cinema-project-4fe82",
    storageBucket: "cinema-project-4fe82.appspot.com",
    messagingSenderId: "31496490989",
    appId: "1:31496490989:web:8b0cd865147d80f00d61e4"
}

export const fire = firebase;
// export const provider = new firebase.auth.GoogleAuthProvider();
firebase.initializeApp(firebaseConfig);