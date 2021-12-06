import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyApvblQlAPV2Qep2HUROV31f8tGogk36UI",
    authDomain: "tinder-clone-43319.firebaseapp.com",
    projectId: "tinder-clone-43319",
    storageBucket: "tinder-clone-43319.appspot.com",
    messagingSenderId: "341422160971",
    appId: "1:341422160971:web:11af5d8163a9338cc821ce"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;