import React, { useEffect, useState } from "react";
import styled from '@emotion/styled'

function Messages({ socket,users,usersColors }) {
    const [messages, setMessages] = useState([]);
    
    const MessageList = styled.div`
        margin:auto;
        max-width:1000px;
        width:calc(100% - 91px);
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
        padding: 19px 23px 2px 7px;
        font-family:Georgia;
        font-weight:bold;
        font-size:0.875rem;
        background-color:blue;
        text-align:center;
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


    

    useEffect(()=>{
            const messageListener = (message) => {
                setMessages((prevMessages) =>{
                    return [...prevMessages,typeof message.value === "string" && message]
                })
            } 
            console.log('salut',socket);
            const messagesListener = (listMessages) => {
                console.log('prevMESSAGES',listMessages);
                const cleanMessages = listMessages.filter((msg)=>{
                    return typeof msg.value === "string";
                })
                setMessages(cleanMessages);
            } 
            socket.on("messages",messagesListener);
            socket.on("message",messageListener);
            socket.emit("getMessages");

            return () => {
                socket.off("messages", messagesListener);
                socket.off("message", messageListener);
            };
      
    },[socket]);
    
    return(
        <MessageList>
            {messages
                .sort((a, b) => b.time - a.time)
                .map((message) => { return (
                <LineContainer 
                    isMine={socket.id===message.user.id}
                >

              
                    <NameMessageContainer>
                        {socket.id!==message.user.id && <h2>{message.user.name}</h2>}
                        <MessageContainer
                            key={message.id}
                            title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
                            nbChar={message.value.length}
                            
                                
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