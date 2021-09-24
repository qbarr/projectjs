import React,{useState} from 'react'
import styled from '@emotion/styled';
import qrCodePage from '../assets/qrcodePage/qrcodepage1.png'
import QRCode from 'qrcode.react';
export default function QrcodePage() {

    const [background,setBackground] = useState(qrCodePage);
    const QrCodePage = styled.div`
        background:url(${background}) no-repeat ;
        background-size:cover;
        width:100vw;
        height:100vh;
        position:relative;
      
    `

    const WrapperQrCode = styled.div`
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
       
        
        font-family:Georgia;
        font-weight:bold;
        font-size:1.563rem;
        color:white;
        cursor:pointer;
    `

    return (
        <QrCodePage>
            <WrapperQrCode>
                <QRCode size="170" value="https://qrco.de/bcPuGr"/>
            </WrapperQrCode>
        </QrCodePage>
    )
}
