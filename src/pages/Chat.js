import React from 'react'
import styled from '@emotion/styled'
import Footer from "../components/Footer"; 
import Header from '../components/Header';
import NameInput from '../components/NameInput';
import MessageInput from '../components/MessageInput';
import Messages from '../components/Messages';
import Users from '../components/Users';

function Chat({socket,users,usersColors}) {

    const AppContainer = styled.div`

    `
    const AppInner = styled.div`
    `  

    return (
        <AppContainer>
            <AppInner>
            {socket && (
            <>
                <Header/>

                {/* <NameInput
                socket={socket}
                /> */}
                
                <Messages
                    socket={socket}
                    usersColors={usersColors}
                    users={users}
                />
                
                <Users 
                    socket={socket}
                    users={users}
                />

                <Footer 
                    socket={socket}
                    usersColors={usersColors}
                />
                
            </>)}
            </AppInner>
      </AppContainer>
    )
}

export default Chat
