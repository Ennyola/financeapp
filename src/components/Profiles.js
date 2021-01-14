import React,{useEffect,useState} from "react"
import styled from  "styled-components"
import ReactPaginate from 'react-paginate';


import GetProfiles from "./GetProfiles"
import {SearchBar} from "./SearchBar"
import {Filter} from "./Filter"

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


const Profiles = ()=>{
    const [records, setRecords] = useState([]) 
    const [profiles, setProfiles]  = useState([])
    const [setError] = useState("")
    const [postsPerPage] = useState(20)
    const [isSearched, setIsSearched] = useState(false)

    useEffect(()=>{
        const fetchProfiles = async()=>{
            try{
                const data = await (await fetch("http://api.enye.tech/v1/challenge/records")).json()
                setRecords(data)
                setProfiles(data?.records?.profiles?.slice(0,postsPerPage))
            }
            catch(e){
                setError("An Error Occured. Please reload")
            }
            
        }
        fetchProfiles()
    },[])

    const getSearchedterm = (term)=>{
       const record = records?.records?.profiles?.filter(item=> item.FirstName.toLowerCase() ===term.toLowerCase())
       setProfiles(record)
       setIsSearched(true)
    }
    const scrollToTop=()=>{
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

    const handlePageClick = (data) => {
        const indexOfLastPost = (data.selected+1) * postsPerPage
        const indexOfFirstPost = indexOfLastPost - postsPerPage
        setProfiles(records?.records?.profiles?.slice(indexOfFirstPost,indexOfLastPost))
        scrollToTop()
    };

    const filterByTerm = (name,term)=>{
        if(term === "Gender"){
            const filteredArray = records?.records?.profiles?.filter((item)=> item[`${term}`].toLowerCase() === `${name.toLowerCase()}` )
            setProfiles(filteredArray)
        }
        if(term === "PaymentMethod"){
            const filteredArray = records?.records?.profiles?.filter((item)=> item[`${term}`].toLowerCase() === `${name.toLowerCase()}` )
            setProfiles(filteredArray)
        }
        
    }
    return( 
        <Wrapper className ="container">
            <SearchBar onSearchSubmit ={getSearchedterm}/>
            <Filter filterByTerm={filterByTerm}/>
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
            pageCount={Math.ceil(records.size/postsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={'pagination'} 
            /> 
            
        </Wrapper>
    )
}

export default Profiles