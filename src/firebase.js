import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBJiJJPlq89KGIz8DMdNY0ACXXU7DSBNSE",
    authDomain: "nft-market-58d4b.firebaseapp.com",
    projectId: "nft-market-58d4b",
    storageBucket: "nft-market-58d4b.appspot.com",
    messagingSenderId: "156519691073",
    appId: "1:156519691073:web:4162ab4cc5765b56cc67c0",
    measurementId: "G-0P5KFV5FBT"
  };

  const app =firebase.initializeApp(firebaseConfig);
  export const db = app.firestore()
  export const auth = app.auth()
//   export const storage = app.storage()
  export  {firebase}


  