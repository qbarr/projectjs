
import arrow from "../assets/chat/arrow.svg"
import croixFermer from "../assets/chat/croix-fermer.svg"
import virgil from "../assets/chat/names/virgil.svg"
import styled from '@emotion/styled'

const HeaderContainer = styled.div`
    height:100px;
    display:flex;
    justify-content:space-between;
`
const Fleche = styled.img`
    width:26px;
    margin-left:20px;
`

const Croix = styled.img`
    width:13px;
    margin-right:20px;
`

const NameContainer = styled.div`
    border:1px solid black;
    border-radius:10px;
    width:45%;
    height:85%;
    position: relative;
    top:5%;
    
    img {
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
    }
`

function Header(){
    return (
        <HeaderContainer>
            <Fleche src={arrow} alt=""/>
            <NameContainer>
                <img alt="" src={virgil}/>
            </NameContainer>
            <Croix src={croixFermer} alt=""/>
        </HeaderContainer>
    );
}

export default Header;