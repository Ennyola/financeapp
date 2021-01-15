import React, {useState} from 'react'
import styled from "styled-components"
import { BsFilterLeft } from "react-icons/bs";

const FilterButton = styled.div`
    display:flex;
    width:80px;
    cursor:pointer;
    h6{
        margin-left:7px;
    }

`

const FilterSections = styled.div`
    display:flex;
   
    .gender-filter,.payment-method-filter{
        margin-top:30px;
        margin-left:130px;
        h6{
            padding-bottom:20px;
            border-bottom: 1px solid grey;
        }
        
    }

    @media (max-width:575px){
        justify-content:space-around;
        .gender-filter,.payment-method-filter{
            margin-left:0px;
        }    
        
    }
    

`
const FilterList= styled.div`
    margin-top:30px;
    font-weight:300;
    
    p{
        cursor:pointer;
        :hover{
            color: grey;
        }
    }

`

export const Filter = ({filterByTerm,filterButtonClicked,setFilterButtonClicked}) => {
    const [genderFilter] = useState([
        {   
            id:1,
            name:"Male",
            term: "Gender",

        },
        {   
            id:2,
            name:"Female",
            term: "Gender",

        },
        {
            id:3,
            name:"Prefer To Skip",
            term:"Gender"

        }
    ],
    )
    const [paymentMethod] = useState([
        {   
            id:1,
            name:"CC",
            term: "PaymentMethod",

        },
        {
            id:2,
            name:"Check",
            term:"PaymentMethod"

        },
        {
            id:3,
            name:"Money Order",
            term:"PaymentMethod"

        },
        {   
            id:4,
            name:"Paypal",
            term: "PaymentMethod",

        },
        
        
    ])

    return (
        <div>
            <FilterButton>
                <BsFilterLeft/> <h6 onClick= {()=>setFilterButtonClicked(!filterButtonClicked)}> Filter </h6>
            </FilterButton>

            { filterButtonClicked &&
                <FilterSections>
                    <div className = "gender-filter">
                        <h6>Gender</h6>
                        {genderFilter.map(({id,name,term})=>{
                            return(
                                <FilterList key={id}>
                                    <p  onClick={()=>filterByTerm(name,term)}>{name}</p>
                                </FilterList>
                             )
                        })
                        }
                    </div>
                    <div className = "payment-method-filter">
                        <h6>Payment Method</h6>
                        {paymentMethod.map(({id,name,term})=>{
                            return(
                                <FilterList key={id}>
                                    <p onClick={()=>filterByTerm(name,term)}>{name}</p>
                                </FilterList>
                            )
                        })
                        }
                    </div>
                </FilterSections>
            }
            
        </div>
            
            
    )
}
