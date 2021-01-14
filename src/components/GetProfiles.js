import React from "react";
import styled from "styled-components"



const Wrapper = styled.div`


`

const RecordsWrapper = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));
    grid-gap:60px;
    justify-items:center;
    padding:20px;
    div{
        height:250px;
        width:300px;
        border:1px solid green;
        
    }

`

const DisplayRecords = (props)=>{
    return(
        <RecordsWrapper>
            {
            props?.profiles?.map((profile)=>{
                return(
                    <div key = {profile?.UserName}>
                        <span>
                            {profile?.FirstName} <br/>
                            {profile?.LastName} <br/>
                            {profile?.UserName}
                        </span>
                        
                    </div>
                )
            })
            }
        </RecordsWrapper>
    )
}

const GetProfiles = ({profiles})=>{
    return(
        <Wrapper>
            <DisplayRecords profiles = {profiles}/>
            
        </Wrapper>
    )
}

export default GetProfiles