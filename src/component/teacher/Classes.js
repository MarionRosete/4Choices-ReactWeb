import React from 'react'
import {  useEffect, useState,  } from 'react'
import {  Link,useHistory  } from 'react-router-dom'
function Classes() {
    const [classes, setClass] = useState('');
    console.log(classes.length)
    const history = useHistory();
    useEffect(()=>{
        const url ='http://localhost:8000/api/dashboard/myClass'
        fetch(
            url,{
                headers: 
                    { 
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                        'accept':'application/json'
                    },
            })
            .then(response =>response.json()
                .then(resjson=>{
                setClass(resjson.exam);
                })
            ) 
    },[])
    return (
        <>
        {classes.length===0?
        <>
            <p className="font-bold font-sans">
                No Classes yet
                </p>
                <Link to='/CreateClass'>
                    <button className="transition duration-500 ease-in-out hover:bg-blue-400 md:transform hover:-translate-y-1 hover:scale-100 rounded-md bg-blue-900 text-white font-bold font-sans p-2">
                        Create Class
                    </button>
                </Link>
        </>
        
        :
        <>
            <div className='md:px-20'>
            <div className='bg-blue-100 rounded-2xl p-5'>
                <p className='text-xl text-blue-800 font-bold'>
                    My Classes 
                </p>
            <center>
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
                    <td className="flex space-x-1 justify-center">
                        
                        <button className= "block bg-blue-900 hover:bg-blue-600 shadow-md  text-white p-0.5 text-sm rounded-md"
                            onClick={()=>{
                                const url =`http://localhost:8000/api/dashboard/exam/${item.id}`
                                fetch(
                                    url,
                                    {
                                        headers: 
                                        { 
                                            Authorization: `Bearer ${localStorage.getItem('token')}`,
                                            'accept':'application/json'
                                        }
                                    }
                                )
                                .then(response =>response.json()
                                    .then(resjson=>{
                                            history.push({
                                                pathname:"/myExam", 
                                                state:{
                                                    data:resjson.exam, 
                                                    section:item.section, 
                                                    subject:item.subject
                                                } 
                                            })
                                    })
                                )
                                }}>
                           View
                                
                        </button>
                        <button className= "block bg-red-900 hover:bg-red-600 shadow-md  text-white p-0.5 text-sm rounded-md" 
                            onClick={()=>{
                                const url = `http://localhost:8000/api/dashboard/deleteclass/${item.id}`
                                fetch(
                                    url,
                                    {
                                        headers: 
                                        { 
                                            Authorization: `Bearer ${localStorage.getItem('token')}`, 
                                            'accept':'application/json'
                                        }
                                    }
                                ).then(response =>response.json()
                                    .then(()=>
                                        {
                                            window.location.reload();
                                    })
                                )
                            }}>
                           Delete
                        </button>
                    </td>
                </tr>
                )}
                <tr>
                    <td/>
                    <td/>
                    <td/>
                    <td className='flex justify-center pl-10 '>
                                
                    <button className="block bg-green-900 hover:bg-green-600 shadow-md  text-white p-0.5 text-sm rounded-md">
                    <Link to='/CreateClass'> 
                           Create
                    </Link>     
                    </button>
                    </td>
                </tr>
                </tbody>
            </table>
            </center>
            </div>
            </div>
        </>
        }
        </>
    )
}

export default Classes
