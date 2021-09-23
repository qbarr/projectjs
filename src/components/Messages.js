import React, { useEffect, useState,useRef } from "react";
import styled from '@emotion/styled'

const MessageList = styled.div`
    margin:auto;
    max-width:1000px;
    width:calc(100% - 91px);
    margin-bottom:90px;
    
`

const LineContainer = styled.div`
    margin-bottom:10px;
    display:flex;
    justify-content:${props => props.isMine ? "flex-end" : "flex-start"};
    
`

const MessageContainer = styled.div`
    border-radius:17px;
    justify-content:space-between;
    margin-bottom:10px;
    padding: 19px 23px 3px 10px;
    font-family:Georgia;
    font-weight:bold;
    font-size:0.875rem;
    background-color:${props => props.color};
    text-align:left;
    overflow-wrap:break-word;
    z-index: 100;
    height: ${props => props.nbChar < 5 ? '26.6px' : props.nbChar < 8 ? '58.8px' : props.nbChar < 12 ? '108.5px' : '84.7px'}; 
    width: ${props => props.nbChar < 5 ? '81.2px' : props.nbChar < 8 ? '144.2px' : props.nbChar < 12 ? '177px' : '226px'}; 
`

const Input = styled.span`
    margin-right:20px;
`

const NameMessageContainer = styled.div`
    z-index:1;
    h2 {
        font-family:Impact;
        font-size:1rem;
        margin-bottom:10px;
        margin-left:-5px;
    }
`



function Messages({ socket, messages,users,usersColors}) {

    return(
        <MessageList>
            {messages
                .sort((a, b) => a.time - b.time)
                .map((message) => { 
                    const user = users.filter(user => user.id===message.user.id)[0];
                    if(user) {
                        message['color'] =user.color
                    } else {
                        message['color'] = usersColors[Math.floor(Math.random(5))];
                    }

                    return (
                <LineContainer 
                    isMine={socket.id===message.user.id}
                    key={message.id}
                >
              
                    <NameMessageContainer>
                        {socket.id!==message.user.id && <h2>{message.user.name}</h2>}
                        <MessageContainer
                            title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
                            nbChar={message.value.length}
                            color={message.color}                                
                        >
                        {message.value}
                        </MessageContainer>
                    </NameMessageContainer>

                    
                </LineContainer>

                

                )})}
        </MessageList>

    );
    
}

export default Messages;