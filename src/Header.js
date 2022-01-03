import React from 'react'
import styled from 'styled-components'
import {auth,signOut} from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { LoginOutlined } from '@ant-design/icons';

function Header() {

    const [user]  = useAuthState(auth)

    return (
        <Container>
            <h1>⚛️🔥💬</h1>
            {user? <SignOutButton onClick={signOut}><LoginOutlined />SIGN OUT</SignOutButton>:<div />}
        </Container>
    )
}

export default Header

const Container = styled.div`
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 80px;
    top: 0;
    background-color: rgba(0,0,0,1);
    z-index: 1;
`

const SignOutButton = styled.button`
    justify-content: space-around;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    min-height: 40px;
    border-radius: 4px;
    background-color: rgba(0,0,0,0.8);
    cursor: pointer;
    color: white;
    letter-spacing: 2px;
`