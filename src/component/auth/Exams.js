import React from 'react'
import {  useHistory} from 'react-router-dom'
import {  useEffect, useState,  } from 'react'

function Exams() {
    const [exam,setExam]=useState([]);
  
    const urlExam= 'http://127.0.0.1:8000/api/dashboard/exam'

 
    const history = useHistory()

    useEffect(()=>{
            
           
        const abortCtrl = new AbortController();
        
       
        fetch(
            urlExam,{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'accept':'application/json'},
       
            }
        ).then(
            response =>response.json().then(resjson=>{
                    setExam(resjson.exam);
                    console.log(resjson.exam)
            }
         )
        ) 
        return () => abortCtrl.abort();
    },[])
   



    return (
        <>
             {exam.length===0?
            <>
                <h1>No Exam Created</h1>
            </>
            :
            <> 
                <table className="table-fixed text-center">
                    <thead>
                    <tr>
                        <th className="w-1/4 ...">Subject</th>
                        <th className="w-1/4 ...">Name</th>
                        <th className="w-1/4 ...">Description</th>
                        <th className="w-1/4 ...">Code</th>
                        <th className="w-1/4 ...">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {exam.map((item)=>
                    <tr key={item.id}>    
                        <td>{item.subject}</td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.code}</td>
                        <td className="flex">
                            <button className= "block bg-blue-900 hover:bg-blue-600 shadow-md text-white p-0.5  rounded-md" onClick={()=>{fetch(`http://localhost:8000/api/dashboard/myqa/${item.code}`,
                                {headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'accept':'application/json'}}
                                ).then(response =>response.json().then(resjson=>{
                                                history.push({pathname:"/QandA", state:{code:item.code,name:resjson.exam,data:resjson.qa} })
                                                }
                                                )
                                            )
                                }}>
                                View
                                </button>
                                <button className= "block bg-red-900 hover:bg-red-600 shadow-md  text-white p-0.5  rounded-md" onClick={()=>{fetch(`http://localhost:8000/api/dashboard/delete/${item.code}`,
                                {headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'accept':'application/json'}}
                                ).then(response =>response.json().then(()=>{
                                              window.location.reload();
                                                }
                                                )
                                            )
                                }}>
                                Delete
                            </button>
                        </td>
                    </tr>)}
                    </tbody>                
                </table>
            </>
            }
        </>
    )
}

export default Exams
