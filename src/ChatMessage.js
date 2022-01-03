import React from 'react'
import {auth} from './firebase'
import styled from 'styled-components';

function ChatMessage(props) {
    const {text, uid, photoURL} = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
        <Container className={`message ${messageClass}`}>
            <UserIcon src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'}></UserIcon>
            <p>{text}</p>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
`

const UserIcon = styled.img`
    cursor: pointer;
`
