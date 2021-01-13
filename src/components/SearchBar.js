import React, {useState} from 'react'
import styled from "styled-components"

const Form = styled.form`
    display:flex;
    justify-content:center;
    padding:40px;

`

export const SearchBar = ({onSearchSubmit}) => {
    const [term, setTerm] = useState("")
    return (
        <div>
            <Form onSubmit={e=>{
                e.preventDefault()
                onSearchSubmit(term)
            }}>
                <input 
                type="text"
                value={term}
                onChange={e=> setTerm(e.target.value)}
                />
                <button className="btn btn-primary">Search</button>

            </Form>
            
        </div>
    )
}
