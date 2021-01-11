import React from "react"
import styled from  "styled-components"


import GetProfiles from "./GetProfiles"

const Wrapper = styled.div`
    padding:10px 40px;
`
const Profiles = ()=>{
    return( 
        <Wrapper>
            Records
            <GetProfiles/>
        </Wrapper>
    )
}

export default Profiles