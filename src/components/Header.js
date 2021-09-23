
import arrow from "../assets/chat/arrow.svg"
import share from "../assets/chat/share.svg"
import virgil from "../assets/chat/names/virgil.svg"
import cube from "../assets/chat/cube.svg"
import styled from '@emotion/styled'
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
    height:100px;
    display:flex;
    justify-content:space-between;
    position:fixed;
    width:100%;
    background-color:white;
`
const Fleche = styled.img`
    width:26px;
    margin-left:20px;
    top:50%;
    margin-top:100%;
`

const Croix = styled.img`
    width:65px;
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
const ImageCube = styled.img`
    position:absolute;
    width:170px;
    right:0;
    bottom:-120px;
    z-index:-1;
`

function Header(){
    return (
        <HeaderContainer>
            <Link to="/choosePage">
                <Fleche src={arrow} alt=""/>
            </Link>
            <NameContainer>
                <img alt="" src={virgil}/>
            </NameContainer>
            <Croix src={share} alt=""/>
            <ImageCube alt="" src={cube} />
        </HeaderContainer>
    );
}

export default Header;