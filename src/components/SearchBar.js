import React, {useState} from 'react'
import styled from "styled-components"
import { BsSearch } from "react-icons/bs";
const InputWrapper = styled.div`
    display: block;
    margin: 0 auto;
    position:relative;
    padding:40px;
    width:300px;
    input{
       width:200px;
       padding:0.3rem;
       border-radius:30px;

    }
    /* .search-icon{
        position:absolute;
        background-color:grey;
        
        right:40px;
        bottom:45px;
        height:40px; 
    } */

`

export const SearchBar = ({onInputChange}) => {
    return (
        <div>
            <InputWrapper>
                <input 
                type="text"
                onChange={e=>onInputChange(e)}
                placeholder={"Search By FirstName"}
                className=" search-input"
                />
        
            </InputWrapper>   
        </div>
    )
}
