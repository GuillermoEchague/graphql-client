import * as firebase from "firebase";

// firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBEmB2JWMdSGNzPEPcW9BFEAgHlH0wMfM8",
    authDomain: "gqlreactnode-168db.firebaseapp.com",
    projectId: "gqlreactnode-168db",
    storageBucket: "gqlreactnode-168db.appspot.com",
    //messagingSenderId: "458757114448",
    appId: "1:458757114448:web:9e146ebd5a7cca18989f55"

  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();  
  