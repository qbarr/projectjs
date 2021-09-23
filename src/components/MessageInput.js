import styled from "@emotion/styled";
import React, { useState, useEffect, useRef } from "react";

function MessageInput({socket}) {

    const [message,setMessage] = useState([]);
    
    const InputSendMessage = styled.input` 
        width:100%;
        height:100%;

        border: 1px solid black;
        text-align:center;
        border-radius:10px;

        font-family:Georgia;
        font-weight:bold;
        font-size:1.1rem;
    `

    const FormSendMessage = styled.form` 
        width:70%;
    `
    
    const submitForm = (e)=> {
        e.preventDefault();
        socket.emit("message", message);
        setMessage("");
    }
    return(
        <FormSendMessage onSubmit={submitForm}>
            <InputSendMessage
                autoFocus
                value={message}
                placeholder="send a message..."
                onChange={(e) => {
                setMessage(e.currentTarget.value);
                }}
            />
        </FormSendMessage>
    );
}

export default MessageInput;