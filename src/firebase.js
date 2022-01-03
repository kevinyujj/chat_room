import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBThars7LPiqgx3aIHQJFwfcbcCtjiYIMc",
    authDomain: "online-chat-b8d6f.firebaseapp.com",
    projectId: "online-chat-b8d6f",
    storageBucket: "online-chat-b8d6f.appspot.com",
    messagingSenderId: "583568302368",
    appId: "1:583568302368:web:38c8f59c56a003268b3745",
    measurementId: "G-8J9BQ2F2MG"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const user = auth.currentUser;
export const db = getFirestore(app)

export const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
};

export const signOut = () =>{
    auth.signOut()
}