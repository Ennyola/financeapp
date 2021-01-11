import React,{useEffect,useState} from "react";
import styled from "styled-components"
import ReactPaginate from 'react-paginate';


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
            props?.records?.records?.profiles?.map((record)=>{
                return(
                    <div key = {record.userName}>
                        <span>
                            {record.FirstName}
                        </span>
                        
                    </div>
                )
            })
            }
        </RecordsWrapper>
    )
}

const GetProfiles = ()=>{
    const [records, setRecords] = useState([]) 
    const [error, setError] = useState("")

    const fetchProfiles = async()=>{
        try{
            const data = await (await fetch("http://api.enye.tech/v1/challenge/records")).json()
            setRecords(data)
        }
        catch(e){
            setError("An Error Occured. Please reload")
        }
        
    }

    useEffect(()=>{
        fetchProfiles()
    },[])

    const handlePageClick = (data) => {
        console.log(data.selected)
    };

    return(
        <Wrapper>
            <DisplayRecords records = {records}/>
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

export default GetProfiles