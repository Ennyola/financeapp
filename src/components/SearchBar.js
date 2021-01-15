import React from 'react'
import styled from "styled-components"
import { BsSearch } from "react-icons/bs";
const InputWrapper = styled.div`
    display: block;
    margin: 0 auto;
    position:relative;
    padding:40px;
    width:300px;
    input{
       width:250px;
       padding:10px 40px;
       border-radius:30px;
       outline:none;

    }
    .search-icon{
        position:absolute;
        right:24px;
        color: #000;
        font-weight:900;
        font-size:20px;
        top:53px;
    }

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
                <BsSearch className={"search-icon"}/>
        
            </InputWrapper>   
        </div>
    )
}
