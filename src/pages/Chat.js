import React,{useEffect,useState} from 'react'
import styled from '@emotion/styled'
import Footer from "../components/Footer"; 
import Header from '../components/Header';
import Messages from '../components/Messages';
import PlacerImages from '../components/PlacerImages.js'
const AppContainer = styled.div`
`
const AppInner = styled.div`

`


function Chat({socket,users,messages,usersColors}) {
    

      console.log('render chat');

    return (
        <AppContainer>
            <AppInner>
                <PlacerImages/>
                <Header/>
                
                <Messages
                    socket={socket}
                    usersColors={usersColors}
                    users={users}
                    messages={messages}
                />
                
                {/* <Users 
                    socket={socket}
                    users={users}
                />
 */}
                <Footer 
                     socket={socket}
                 />
                
            </AppInner>
      </AppContainer>
    )
}

export default Chat
