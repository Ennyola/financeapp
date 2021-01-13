import React,{useEffect,useState} from "react"
import styled from  "styled-components"
import ReactPaginate from 'react-paginate';


import GetProfiles from "./GetProfiles"
import {SearchBar} from "./SearchBar"

const Wrapper = styled.div`
    
`


const Profiles = ()=>{
    const [records, setRecords] = useState([]) 
    const [profiles, setProfiles]  = useState([])
    const [ setError] = useState("")
    

    
    useEffect(()=>{
        const fetchProfiles = async()=>{
            try{
                const data = await (await fetch("http://api.enye.tech/v1/challenge/records")).json()
                setRecords(data)
                setProfiles(data?.records?.profiles)
            }
            catch(e){
                setError("An Error Occured. Please reload")
            }
            
        }
        fetchProfiles()
    },[])
    const getSearchedterm = (term)=>{
       const record = records?.records?.profiles?.find(item=> item.FirstName ===term)
       console.log(record)
       setProfiles([record])
    
    }
    const handlePageClick = (data) => {
        console.log(data.selected)
    };


    return( 
        <Wrapper className ="container">
            Records
            <SearchBar onSearchSubmit ={getSearchedterm}/>
            <GetProfiles profiles = {profiles}/>
            <ReactPaginate
            key ={2}
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageClassName={"current-page"}
            activeClassName={"active"}
            previousClassName={"previous-page"}
            nextLinkClassName={"next-link"}
            breakLinkClassName={"break-link"}
            previousLinkClassName={"previous-link"}
            pageCount={records.size}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            />
        </Wrapper>
    )
}

export default Profiles