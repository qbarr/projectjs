import styled from '@emotion/styled'
import React from 'react'
import arrow from "../assets/chat/arrow.svg"
function ChoosePage() {

    const PageContainer = styled.div`
        margin:auto;
        max-width:1000px;
        width:calc(100% - 120px);
    `
    const Fleche = styled.img`
        width:26px;
        margin-left:20px;
        top:50%;
        margin-top:100%;
    `   

    const ListContainer = styled.div`

    `


    return (
        <PageContainer>
            <Fleche src={arrow} alt=""/>
            <ListContainer>
                {/* <NameContainer>
                    
                </NameContainer> */}
            </ListContainer>
        </PageContainer>
    )
}

export default ChoosePage
