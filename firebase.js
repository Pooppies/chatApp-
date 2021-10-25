import firebase from 'firebase';


const firebaseApp = firebase.initializeApp[{
    apiKey: "AIzaSyBICSlIXgPLoO6jYhEUNVsnnKa0YbyWVTA",
    authDomain: "firechat-5ae49.firebaseapp.com",
    projectId: "firechat-5ae49",
    storageBucket: "firechat-5ae49.appspot.com",
    messagingSenderId: "385742981061",
    appId: "1:385742981061:web:7bbb5a3dc46cafc9bbedac",
    measurementId: "G-7LBNX4GXVJ"
}];


const db = firebaseApp.firestore();
const auth = firebase.auth();


export {
    auth,
    db
};