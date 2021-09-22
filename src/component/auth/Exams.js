import React from 'react'
import {  Link } from 'react-router-dom'
import {  useEffect, useState,  } from 'react'
function Exams() {
    const [exam,setExam]=useState([]);
    const urlExam= 'http://127.0.0.1:8000/api/dashboard/exam'
  
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
        <div>
             {exam.length===0?
            <>
                <h1>No Exam Created</h1>
            </>
            :
            <>
                <div className="min-h-screen p-10 bg-white ">
                
                <div className="flex flex-col bg-blue-100 justify-between rounded-2xl p-4 md:p-8 ">
                    <ul>
                        {exam.map((item)=><li className=" text-blue-800 font-medium text-xl py-5 px-10" key={item.id}> Name:  {item.name}<br/> Subject:  {item.subject}<br/> Description:  {item.description} <br/> Code: 
                            <button onClick={(e)=>{e.preventDefault();fetch(`http://localhost:8000/api/dashboard/myqa/${item.code}`,
                                {headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'accept':'application/json'}}
                                    ).then(response =>response.json().then(resjson=>{console.log(resjson.qa); 
                                              
                                                   
                                                }
                                            )
                                        )
                            }}> 
                              <Link to="/QandA">{item.code}</Link>  </button><br/>
                            </li>)
                        }
                    </ul>
                </div>
            
                </div> 
            </>
            }
        </div>
    )
}

export default Exams
