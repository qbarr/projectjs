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

    return (
        <PageContainer>
            <Fleche src={arrow} alt=""/>
        </PageContainer>
    )
}

export default ChoosePage
