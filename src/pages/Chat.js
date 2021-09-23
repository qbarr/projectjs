import React from 'react'
import styled from '@emotion/styled'
import Footer from "../components/Footer"; 
import Header from '../components/Header';
import NameInput from '../components/NameInput';
import MessageInput from '../components/MessageInput';
import Messages from '../components/Messages';
import Users from '../components/Users';
import PlacerImages from '../components/PlacerImages.js'
const AppContainer = styled.div`
`
const AppInner = styled.div`

`


function Chat({socket,messages, users,usersColors}) {


    return (
        <AppContainer>
            <AppInner>
            {socket && (
            <>

                <PlacerImages/>
                <Header/>
                
                <Messages
                    socket={socket}
                    messages={messages}
                    users={users}
                    usersColors={usersColors}
                />
                
                {/* <Users 
                    socket={socket}
                    users={users}
                />
 */}
                <Footer 
                    socket={socket}
                />
                
            </>)}
            </AppInner>
      </AppContainer>
    )
}

export default Chat
