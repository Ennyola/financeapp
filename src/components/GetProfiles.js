import React from "react";
import styled from "styled-components"

import femaleImage from "../photos/426-4264903_user-avatar-png-picture-avatar-profile-dummy-transparent.png"
import maleImage from "../photos/head-659652_960_720.png"

const Wrapper = styled.div`
    

`

const RecordsWrapper = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));
    grid-gap:60px;
    justify-items:center;
    padding:20px;


`
const Card = styled.div`
    background-color:#2C3246;
    width:260px;
    height:350px;
    border-radius:10px;
    padding:30px;
    position:relative;
    .image-wrapper{
        top:-40px;
        left:30%;
        position:absolute;
        display:block;
        border:3px solid;
        width:130px;
        border-radius:50%;
        background-color: #fff;
    }  
    img{
        border-radius:50%;
        object-fit:cover;
        height:100%;
        width:100%;
    }
    h5{
        text-align:center;
        font-weight:normal;
        margin-top:100px;
    }
    .profiles-name{
        color:#fff
    }
`

const DisplayRecords = (props)=>{
    return(
        <RecordsWrapper>
            {
            props?.profiles?.map((profile)=>{
                return(
                    <Card key = {profile?.UserName}>
                        <span className ="image-wrapper">
                            <img src={profile?.Gender === "Male" ? maleImage: femaleImage } alt="j"/>
                        </span>
                        
                        <h5>{profile?.FirstName} {profile?.LastName}</h5>
                        <span>
                           <div> <span className="profiles-name">Username</span>:{profile?.UserName} </div> 
                           <div> Gender: {profile?.Gender} </div> 
                           <div> Payment Method: {profile?.PaymentMethod}  </div>
                           <div>Card Type: {profile?.CreditCardType}</div> 
                        </span>
                        
                    </Card>
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