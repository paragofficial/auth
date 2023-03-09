import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
// import firebase from 'firebase/app'
// import 'firebase/auth'


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// const firebaseApp = initializeApp(firebaseConfig);
// const auth = getAuth();



const firebaseConfig = {

    apiKey: "AIzaSyDDygrNDF6EJGHQs3WksiuJ7kWi397KKMY",

    authDomain: "otpappdemo-9b1f0.firebaseapp.com",

    projectId: "otpappdemo-9b1f0",

    storageBucket: "otpappdemo-9b1f0.appspot.com",

    messagingSenderId: "83657722134",

    appId: "1:83657722134:web:99454d53cbee4043782837"

  };


  // Initialize Firebase

  const app = initializeApp(firebaseConfig);
  console.log(app)

  export default firebase
