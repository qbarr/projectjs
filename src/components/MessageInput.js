import styled from "@emotion/styled";
import React, { useState, useEffect, useRef } from "react";

function MessageInput({submitForm,message,setMessage}) {

    
    const InputSendMessage = styled.textarea` 
        width:100%;
        height:100%;

        border: 1px solid black;
        border-radius:10px;

        font-family:Georgia;
        font-weight:bold;
        font-size:1.1rem;
        resize:none;
        overflow:hidden;

       
    `

    const FormSendMessage = styled.form` 
        width:70%;
    `
    
    
    return(
        <FormSendMessage onSubmit={submitForm}>
            <InputSendMessage
                autoFocus
                required
                value={message}
                name="messagearea"
                placeholder="send a message..."
                maxlength="150"
                onChange={(e) => {
                    if(e.currentTarget.value>10) return
                 setMessage(e.currentTarget.value);
                }}
            />
        </FormSendMessage>
    );
}

export default MessageInput;