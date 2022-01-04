import React, { useState, useEffect, useRef } from 'react'
import {db,auth} from './firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { collection, query, orderBy, limit, doc, getDocs, onSnapshot, addDoc } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import ChatMessage from './ChatMessage';
function Chatroom() {

    const dummy = useRef();

    const[messages,setMessages] = useState([])
    const [formValue, setFormValue] = useState('');

    const messageRef = collection(db,'messages');
    const q = query (messageRef, orderBy('createdAt'),  limit(25));
    // const [messages] = useCollectionData(q, {idField: 'id'});

    useEffect(()=>{
        onSnapshot(q,(snapshot)=>{
            setMessages(snapshot.docs.map(doc => 
                ({...doc.data(),id:doc.id})
            ))
        })
    },[])



    const sendMessage = async (e) =>{
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        const payload = {
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        }
        await addDoc(messageRef,payload)
        setFormValue('')

        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }


    return (
        <>
            <main>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
                <div ref={dummy}></div>
            </main>
            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Say something nice..." />
                <button type="submit" disabled={!formValue}>🕊️</button>
            </form> 
        </>
    )
}

export default Chatroom
