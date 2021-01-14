import React, {useState} from 'react'

export const Filter = ({filterByTerm}) => {
    const [filterButtonClicked, setFilterButtonClicked] = useState(false)
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
    ])
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
            <h6 onClick= {()=>setFilterButtonClicked(!filterButtonClicked)}> Filter </h6>
            { filterButtonClicked &&

                <div className="d-flex justify-content-evenly">
                <div className = "gender-filter">
                    <h6>Gender</h6>
                    {genderFilter.map(({id,name,term})=>{
                        return(
                            <p key={id} onClick={()=>filterByTerm(name,term)}>{name}</p>
                        )
                    })
                    }
                </div>
                <div className = "payment-method-filter">
                    <h6>Payment Method</h6>
                    {paymentMethod.map(({id,name,term})=>{
                        return(
                            <p key={id} onClick={()=>filterByTerm(name,term)}>{name}</p>
                        )
                    })
                    }
                </div>
                </div>
            }
            
        </div>
            
            
    )
}
