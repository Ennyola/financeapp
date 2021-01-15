import React,{useEffect,useState} from "react"
import styled from  "styled-components"
import ReactPaginate from 'react-paginate';
import RingLoader from "react-spinners/RingLoader"

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
        border: 1px solid  #fff;
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

    .next-link,.previous-link{
        color:white;
        text-decoration:none;
    }
       
    .active {
      background-color: #fff;
      color: black ;
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
            padding:6px;
        }
        }
        
    }
`
const Loading = styled.div`
    display:grid;
    place-items:center;
    margin-top:200px;

`
const Logo = styled.a`
    display: block;
    text-decoration:none;
    cursor:pointer;
    font-weight:bold;
    font-size:37px;
    color:white;
    text-align:center;
    margin:30px 0px;
    margin-left:20px;
    :hover{
        color:white;
    }
`

const Error = styled.div`
    color:red;
    text-align:center;
    margin-top:200px;
    font-size:25px;

`


const Profiles = ()=>{
    const [records, setRecords] = useState([]) 
    const [profiles, setProfiles]  = useState([])
    const [error,setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [postsPerPage] = useState(20)
    const [showReactPagination, setShowReactPagination] = useState(true)
    const [filterButtonClicked, setFilterButtonClicked] = useState(false)
    useEffect(()=>{
        const fetchProfiles = async()=>{
            setLoading(true)
            try{
                const data = await (await fetch("http://api.enye.tech/v1/challenge/records")).json()
                setRecords(data)
                setProfiles(data?.records?.profiles?.slice(0,postsPerPage))
            }
            catch(e){
                setError("An Error Occured. Please reload")
            }
            setLoading(false)
            
        }
        fetchProfiles()
    },[])

    const getSearchedterm = (e)=>{
        if(e.target.value.length === 0){
            setShowReactPagination(true)
        } 
        else{
            const record = profiles?.filter(item=> item.FirstName.toLowerCase().includes(e.target.value.toLowerCase()))
            setProfiles(record)
            setShowReactPagination(false)
        }
        
        
    }
    const scrollToTop=()=>{
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        setFilterButtonClicked(false)
      }

    const filterByTerm = (name,term)=>{
        // if(term === "Gender"){
        //     const filteredArray = records?.records?.profiles?.filter((item)=> item[`${term}`].toLowerCase() === `${name.toLowerCase()}` )
        //     setProfiles(filteredArray)
        // }
        // if(term === "PaymentMethod"){
        //     const filteredArray = records?.records?.profiles?.filter((item)=> item[`${term}`].toLowerCase() === `${name.toLowerCase()}` )
        //     setProfiles(filteredArray)
        // }
        const filteredArray = records?.records?.profiles?.filter((item)=> item[`${term}`].toLowerCase() === `${name.toLowerCase()}` )
        setProfiles(filteredArray)
        
    }

    const handlePageClick = (data) => {
        const indexOfLastPost = (data.selected+1) * postsPerPage
        const indexOfFirstPost = indexOfLastPost - postsPerPage
        setProfiles(records?.records?.profiles?.slice(indexOfFirstPost,indexOfLastPost))
        scrollToTop()
    };



    const displayRespectiveData = ()=>{
        if(loading){

            return (
                
            <Loading>
                <RingLoader
                    color={"#2f47bd"}
                />
                Loading...
            </Loading>
            )
        }
        else if(error){
            return <Error>{error}</Error>
        }
        else{
            return(
                <>
                <Logo onClick={()=>window.location.reload()}>Users Profile</Logo>
                    <SearchBar onInputChange ={getSearchedterm}/>
                    <Filter filterByTerm={filterByTerm}
                        filterButtonClicked = {filterButtonClicked}
                        setFilterButtonClicked = {setFilterButtonClicked}
                    />
                    <GetProfiles profiles = {profiles}/>     
                    {
                        showReactPagination &&
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
                    }
                </>

            )
        }
    }


    return( 
        <Wrapper className ="container">
            {displayRespectiveData()}
            
        </Wrapper>
    )
}

export default Profiles