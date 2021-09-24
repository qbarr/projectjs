import React, { useState } from 'react'
import styled from '@emotion/styled'
import firstPageBackground from '../assets/firstPage/firstPage.png'
import { Link } from 'react-router-dom'
function FirstPage() {
    const [background,setBackground] = useState(firstPageBackground);
    const FirstPage = styled.div`
        background:url(${background}) no-repeat ;
        background-size:cover;
        width:100vw;
        height:100vh;
        position:relative;
      
    `

    const Button2 = styled.button`
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        width: 15%;
        height: 5%;
        border-radius: 15px;
        background-color: #EB66A6;
        border: none;
        
        font-family:Georgia;
        font-weight:bold;
        font-size:1.563rem;
        color:white;
        cursor:pointer;
    `

    return (
        <FirstPage >
            <Link to="/qrcodePage">
                <Button2>
                    Learn
                </Button2>
            </Link>
        </FirstPage>
    )
}

export default FirstPage
