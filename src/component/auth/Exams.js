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
                {exam.map((item)=>
                    <div className="shadow-lg m-8 rounded-2xl bg-white p-4"  key={item.id}> 
                        Name:  {item.name}<br/> 
                        Subject:  {item.subject}<br/> 
                        Description:  {item.description} <br/> 
                        Code: {item.code} <br/>
                                <button className= "block bg-blue-900 hover:bg-blue-600 shadow-md text-white font-small py-1.5 px-4 rounded-md" onClick={()=>{fetch(`http://localhost:8000/api/dashboard/myqa/${item.code}`,
                                {headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'accept':'application/json'}}
                                ).then(response =>response.json().then(resjson=>{
                                                history.push({pathname:"/QandA", state:{status:resjson.success,name:resjson.exam,data:resjson.qa} })
                                                }
                                                )
                                            )
                                }}>
                                View Exam
                                </button>
                                <button className= "block bg-red-900 hover:bg-red-600 shadow-md text-white font-small py-1.5 px-4 rounded-md" onClick={()=>{fetch(`http://localhost:8000/api/dashboard/delete/${item.code}`,
                                {headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'accept':'application/json'}}
                                ).then(response =>response.json().then(resjson=>{
                                              window.location.reload();
                                                }
                                                )
                                            )
                                }}>
                                Delete Exam
                                </button>
                        <div className="block text-gray-400"/>
                    </div>
                  )
                }
            
        
            </>
            }
        </>
    )
}

export default Exams
