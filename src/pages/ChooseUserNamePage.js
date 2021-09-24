import React, { useState } from 'react'
import styled from '@emotion/styled'
import arrowSend from '../assets/chat/arrow-send.svg'
import { Link } from 'react-router-dom'

const GlobalContainer = styled.div`
width:calc(100% - 140px);
max-width:1000px;
margin:auto;

`

const Text = styled.div`
font-family:Georgia;
font-weight:bold;
font-size:36px;
margin-top:30px;
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

        padding: 10px 20px 10px 20px;
        border-radius: 10px;  
        background-color:#FBDE48;      
    }
    `

const InputSendMessage = styled.textarea` 
    width:100%;
    height:100%;

    border-radius:20px;

    font-family:Georgia;
    font-weight:bold;
    font-size:1.1rem;
    resize:none;
    background:#4277DE;
    padding-top:2px;
    padding-left:5px;
    color:white;
    &:focus {
    outline:none;
    }
`

const FormSendMessage = styled.form` 
    width:70%;
`

const ContainerSend = styled.div`
    display:flex;
    margin-top:60px;
    align-items:center;
    height:30px;
    justify-content: space-between;
`



function ChooseUserNamePage({socket,users}) {
    const user = users.filter(usr => usr.id===socket.id)[0]
    const [name,setName] = useState("");

    const submitForm = (e)=> {
        e.preventDefault();
        if(name && name.length<10 &&name.length>0) {
            user.name=name;
            socket.emit("updateUsername", user)
        };
        setName("");
        
    }

    const handleChange = (e) => {
        setName(e.currentTarget.value);
    }
    return (
        <GlobalContainer>
            <Text>
                Please enter a username for yourself
            </Text>
            <ContainerSend>
                <FormSendMessage onSubmit={submitForm}>
                    <InputSendMessage              
                        required
                        value={name}
                        name="messagearea"
                        maxlength="150"
                        onChange={handleChange}
                    />

                </FormSendMessage>
                    <ButtonSendContainer onClick={submitForm}>
                        <Link to="/">
                            <img alt="" src={arrowSend}/>
                        </Link>

                    </ButtonSendContainer>                


            </ContainerSend>
        </GlobalContainer>
    );
}

export default ChooseUserNamePage
