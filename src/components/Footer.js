import styled from '@emotion/styled'
import arrowSend from '../assets/chat/arrow-send.svg'
import etoile from "../assets/chat/etoile.svg"
import MessageInput from './MessageInput'
import React, { useState, useEffect, useRef } from "react";

function Footer({socket}) {


    const [message,setMessage] = useState([]);

    const FooterContainer = styled.div`
        height:84px;
        width:100%;
        position:fixed;
        bottom:0;    
        
        background-color:white;

    `

    const SubContainer = styled.div`
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);    
        width:80%; 
        height:55%;
        display:flex;
        justify-content:space-between;
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

    const Line = styled.div`
        height:1px;
        background-color:black;
        width:100%;
    `

    const Etoile = styled.img`
        position:absolute;
        top:-70%;
        left:20%;
        z-index:-1;
    `

    const submitForm = (e)=> {
        e.preventDefault();
        socket.emit("message", message);
        setMessage("");
    }

    return (
        <FooterContainer>
            <Etoile src={etoile}/>
            <Line/>
            <SubContainer>
             
                <MessageInput
                    submitForm={submitForm}
                    message={message}
                    setMessage={setMessage}
                />
                <ButtonSendContainer onClick={submitForm}>
                    <img alt="" src={arrowSend}/>
                    
                </ButtonSendContainer>
            </SubContainer>
        </FooterContainer>
    )
}

export default Footer
