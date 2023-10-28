
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBVILpywIBv1_-CrW7-XEvqx62mNBVCBsg",
  authDomain: "typing-speed-test-b60e0.firebaseapp.com",
  projectId: "typing-speed-test-b60e0",
  storageBucket: "typing-speed-test-b60e0.appspot.com",
  messagingSenderId: "106649979249",
  appId: "1:106649979249:web:9a15dd68df2325cbed8ed0",
  measurementId: "G-71R2CECC95"
};

const firebaseapp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const db = firebaseapp.firestore();

export { auth, db } 