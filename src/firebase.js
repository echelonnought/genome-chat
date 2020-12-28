import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB3ZfOU7UZCy3DWwo3pOcv_m0rc3zzWMZ0",
    authDomain: "genome-chat.firebaseapp.com",
    projectId: "genome-chat",
    storageBucket: "genome-chat.appspot.com",
    messagingSenderId: "67340469545",
    appId: "1:67340469545:web:a5bcb6002529df1ff7a338",
    measurementId: "G-PD113LPPHF"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;
