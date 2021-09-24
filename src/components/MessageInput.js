import styled from "@emotion/styled";
import React, { useState, useEffect, useRef } from "react";
import {animateScroll as scroll } from 'react-scroll'
import arrowSend from '../assets/chat/arrow-send.svg'

function MessageInput({socket}) {

    const [message,setMessage] = useState("");

    const InputSendMessage = styled.textarea` 
        width:100%;
        height:100%;

        border: 1px solid black;
        border-radius:10px;

        font-family:Georgia;
        font-weight:bold;
        font-size:1.1rem;
        resize:none;

       &:focus {
           outline:none;
       }
    `

    const FormSendMessage = styled.form` 
        width:70%;

    
    `

    const ButtonSendContainer = styled.div`
        width:20%; 
        background-color:#FBDE48; 
        border-radius:10px;     
        position:relative;

        img {
            position:absolute;
            left:50%;
            top:50%;
            transform:translate(-50%,-50%);    
        }
    `
    const submitForm = (e)=> {
        e.preventDefault();
        if(message && message.length<150 && message.length>0) {socket.emit("message", message)};
        setMessage("");
    }
    const handleChange = (e) => {
        setMessage(e.currentTarget.value);
    }
    return(
        
        <>
            <FormSendMessage onSubmit={submitForm}>
                <InputSendMessage              
                    required
                    autofocus
                    value={message}
                    name="messagearea"
                    placeholder="send a message..."
                    maxlength="150"
                    onChange={handleChange}
                />

                
            </FormSendMessage>

            <ButtonSendContainer onClick={submitForm}>
            <img alt="" src={arrowSend}/>

            </ButtonSendContainer>
        </>
    );
}

export default MessageInput;