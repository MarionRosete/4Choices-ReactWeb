import React from 'react'
import {  useEffect, useState,  } from 'react'
import {  Link,useHistory  } from 'react-router-dom'
function Classes() {
    const [classes, setClass] = useState('');
    console.log(classes.length)
    const history = useHistory();
    useEffect(()=>{
                       
        const abortCtrl = new AbortController();

        fetch(
            'http://localhost:8000/api/dashboard/myClass',{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'accept':'application/json'},
       
            }
        ).then(
            response =>response.json().then(resjson=>{
                    setClass(resjson.exam);
                    console.log(resjson.exam)
            }
         )
        ) 
        return () => abortCtrl.abort();
    },[])
    return (
        <>
        {classes.length===0?
        <>
            <p className="font-bold font-sans">No Classes yet</p>
            <button className="transition duration-500 ease-in-out hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-100 rounded-md bg-blue-900 text-white font-bold font-sans p-2"><Link to='/CreateClass'>Create Class</Link></button>
        </>
        
        :
        <>
             
            <table className="text-center">
                <thead>
                <tr>
                    <th className="w-1/4">Section</th>
                    <th className="w-1/4">Subject</th>
                    <th className="w-1/4">Schedule</th>
                    <th className="w-1/4">Action</th>
                </tr>
                </thead>
                <tbody>
                {classes.map((item)=>
                <tr className="space-x-1" key={item.id}>
                    <td>{item.section}</td>
                    <td>{item.subject}</td>
                    <td>{item.schedule}</td>
                    <td className="flex space-x-1">
                        <button className="block bg-green-900 hover:bg-green-600 shadow-md  text-white p-0.5  rounded-md">
                           <Link to='/CreateClass'> 
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                                </svg>
                           </Link>     
                        </button>
                        <button className= "block bg-blue-900 hover:bg-blue-600 shadow-md  text-white p-0.5  rounded-md"onClick={()=>{fetch(`http://localhost:8000/api/dashboard/exam/${item.id}`,
                                {headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'accept':'application/json'}}
                                ).then(response =>response.json().then(resjson=>{
                                            history.push({pathname:"/myExam", state:{data:resjson.exam} })
                                                }
                                                )
                                            )
                                }}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                                
                        </button>
                        <button className= "block bg-red-900 hover:bg-red-600 shadow-md  text-white p-0.5  rounded-md" onClick={()=>{fetch(`http://localhost:8000/api/dashboard/delete/${item.id}`,
                                {headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'accept':'application/json'}}
                                ).then(response =>response.json().then(()=>{
                                              window.location.reload();
                                                }
                                                )
                                            )
                                }}>
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                             </svg>
                        </button>
                     
                    </td>
                </tr>
                )}
                </tbody>
            </table>
        </>
        }
        </>
    )
}

export default Classes
