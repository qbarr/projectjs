import cube from "../assets/chat/cube.svg"
import etoile from "../assets/chat/etoile.svg"
import guillemetBleu from "../assets/chat/guillemet-bleu.svg"
import guillemetNoir from "../assets/chat/guillemet-noir.svg"
import styled from "@emotion/styled";
const ContainerImages = styled.div`
    position:fixed;
    width:100vw;
    height:calc(100% - 200px);
    margin-top:50vh;
    transform: translateY(-50%);
`
const ImageCube = styled.img`
    position:absolute;
    width:170px;
    right:0;
    top:0;
    z-index:-1;
`

const Etoile = styled.img`
    position:absolute;
    bottom:-2%;
    left:20%;
    z-index:-1;
`

const GuillemetNoir = styled.img`
    position:absolute;
    bottom:30%;
    right:10%;
    z-index:-1;
`

const GuillemetBleu = styled.img`
    position:absolute;
    top:40%;
    translateY(-50%);
    left:10%;
    z-index:-1;
`
function PlacerImages() {
    return(
        <ContainerImages>
            <ImageCube alt="" src={cube} />
            <Etoile src={etoile}/>
            <GuillemetBleu src={guillemetBleu}/>
            <GuillemetNoir src={guillemetNoir}/>
        </ContainerImages>
        );
}

export default PlacerImages