import React from "react";
import styled from "styled-components"



const Wrapper = styled.div`

.pagination {
    display: flex;
    justify-content: flex-end;
    position:relative;
    right:30px;

    li {
        border: 1px solid  #A1168A;
        border-radius: 5px;
        margin-left: 20px;
        cursor: pointer;
        text-align: center;
        outline:none;
        list-style-type:none;
    
        }
        li a{
            display:block;
            width:100%;
            padding:10px;
        }
    .active {
      background-color: #A1168A;
      color: #fff;
    }

    }
    @media (max-width:950px){
        padding-left: 0px;
        padding-right:10px;
    }
    @media (max-width:479px){
        .pagination {
        justify-content:center;
        right:0px;
        li{
            margin-left: 15px;
        }
        li a{
            display:block;
            width:100%;
            padding:5px;
        }
        }
        
    }

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