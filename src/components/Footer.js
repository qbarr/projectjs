import React from 'react'
import styled from '@emotion/styled'
import arrowSend from '../assets/chat/arrow-send.svg'
import etoile from "../assets/chat/etoile.svg"
import MessageInput from './MessageInput'
function Footer({socket,usersColors}) {

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
    `

    return (
        <FooterContainer>
            <Etoile src={etoile}/>
            <Line/>
            <SubContainer>
             
                <MessageInput
                    socket={socket}
                />
                <ButtonSendContainer>
                    <img alt="" src={arrowSend}/>
                    
                </ButtonSendContainer>
            </SubContainer>
        </FooterContainer>
    )
}

export default Footer
