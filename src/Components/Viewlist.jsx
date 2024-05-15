import { useEffect, useState } from 'react';
import React from 'react'
import Button from 'react-bootstrap/Button';
import { getDetailsAPI,removeDetailsAPI } from '../Services/AllAPI';



function Viewlist() {

    const [empList,setEmpList] = useState([])
    const [empDelete,setEmpDelete] = useState([])
    console.log(empList);

    useEffect(() => {
      getAllEmpDetails();
  }, [empDelete]);
    
      const getAllEmpDetails = async ()=>{
        try{
          const result = await getDetailsAPI()
          console.log(result)
          if(result.status>=200 && result.status<300){
            setEmpList(result.data);
          }
        
        }catch(err){
          console.log(err);
        }
      }

      const handleRemoveDetails = async (details)=>{
        try{
          const result = await removeDetailsAPI(details)
          setEmpDelete(details)
        }catch(err){
          console.log(err);
        }
      }
  return (
    <>
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <h1>List of Employess</h1>
            
            <div className='w-75 p-5' style={{background:"grey", borderRadius:"5px"}}>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            empList.length>0?
                            empList?.map(details=>(
                                <tr key={details.id}>
                                    <td>{details.id}</td>
                                    <td>{details.username}</td>
                                    <td>{details.email}</td>
                                    <td>{details.empstatus}</td>
                                    <td><Button onClick={() => handleRemoveDetails(details.id)}  style={{borderRadius:'5px'}}>DELETE</Button></td>
                                    <td><Button style={{borderRadius:'5px'}}>UPDATE</Button></td>
                                </tr>
                            ))
                            :
                            <div className='fw-bolder text-danger'>Nothing to display</div>
                            }
                    </tbody>
                </table>
            </div>

        </div>
    </>
  )
}

export default Viewlist