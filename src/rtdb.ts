import firebase from "firebase";

const app = firebase.initializeApp({
    apiKey: 'em7EXLr1tZGVTkTWOHMGXkIA26uyxM7LVhD5bAI2',
    authDomain: 'apx-dwf-m6-de209.firebaseapp.com',
    databaseURL: 'https://apx-dwf-m6-de209-default-rtdb.firebaseio.com',
    //project: 'apx-dwf-m6-de209',
});

const rtdb = firebase.database();

export { rtdb };