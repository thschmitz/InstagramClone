import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyB0Oncc8UH6ARy2RoT4RcRLF2K5pbdufDI",
  
    authDomain: "instagram-clone-f0612.firebaseapp.com",
  
    projectId: "instagram-clone-f0612",
  
    storageBucket: "instagram-clone-f0612.appspot.com",
  
    messagingSenderId: "77251638408",
  
    appId: "1:77251638408:web:30456c5a5b290bd60e5b3d",
  
    measurementId: "G-LSR6P490BB"
  
  });

  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const functions = firebase.functions();

  export{db, auth, storage, functions};
  