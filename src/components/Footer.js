import styled from '@emotion/styled'
import etoile from "../assets/chat/etoile.svg"
import MessageInput from './MessageInput'

const FooterContainer = styled.div`
height:84px;
width:100%;
position:fixed;
bottom:0;    
z-index:2;
background-color:white;

`

const SubContainer = styled.div`
position:absolute;
left:50%;
top:50%;
transform:translate(-50%,-50%);    
width:80%; 
display:flex;
justify-content:space-between;
`



const Line = styled.div`
height:1px;
background-color:black;
width:100%;
`

function Footer({socket}) {
console.log("render footer")
    

    return (
        <FooterContainer>
            <Line/>
            <SubContainer
            >
             
              <MessageInput
                socket={socket}
                />  
                
            </SubContainer>
        </FooterContainer>
    )
}

export default Footer
