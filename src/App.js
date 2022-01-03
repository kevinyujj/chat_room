import React from 'react'
import './App.css';
import { auth, db, signInWithGoogle } from './firebase'
import Login from './Login';
import Chatroom from './Chatroom';
import Header from './Header';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

function App() {

  const [user]  = useAuthState(auth)

  return (
    <div className="App">
      <Header />
      <section>
        { user ? <Chatroom /> : <Login />}
      </section>
    </div>
  );
}

export default App;
