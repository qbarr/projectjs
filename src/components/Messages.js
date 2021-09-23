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
    height: ${props => props.nbChar < 5 ? '38px' : props.nbChar < 8 ? '84px' : props.nbChar < 12 ? '155px' : '121px'}; 
    width: ${props => props.nbChar < 5 ? '116px' : props.nbChar < 8 ? '206px' : props.nbChar < 12 ? '253px' : '323px'}; 
`

const Input = styled.span`
    margin-right:20px;
`

const NameMessageContainer = styled.div`
    
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