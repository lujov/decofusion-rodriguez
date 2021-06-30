import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCX2jDUEfHL_D56uePMBxcqABmFqalX2K4",
    authDomain: "decofusion-14918.firebaseapp.com",
    projectId: "decofusion-14918",
    storageBucket: "decofusion-14918.appspot.com",
    messagingSenderId: "685665915830",
    appId: "1:685665915830:web:db6c800c625582c97ba717",
    measurementId: "G-FNC37GXKLE"
};

const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore();