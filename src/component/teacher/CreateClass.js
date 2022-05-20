
import React, { useState, } from 'react';
import{Link, } from 'react-router-dom'





const CreateClass = () => {
    const [section, setSection] = useState('');
    const [subject, setSubject] = useState('');
    const [schedule, setSchedule] = useState('');
    const [msg, setMsg] = useState('');
  

    const handleSubmit = () => {
           
            const data = {section, subject, schedule};
            const url = "http://localhost:8000/api/dashboard/createClass"
            fetch (url,
                {
                headers:{ 
                    "Content-Type":'application/json', 
                    "accept":'application/json',  
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                method:'POST',
                body:JSON.stringify(data),
                }
            ).then(response=>(
                response.json().then(resjson=>{
                    setMsg(resjson); 
                    window.location.replace('/myclasses')
                }
                )
            )
        )
            
    }
  
    return (
        <>
            <div className="md:px-40">
                <div className=" bg-blue-100 rounded-2xl p-8">
                <div className="flex items-center text-blue-800 font-medium font-bold text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                </svg>
                    Create Class
                </div>
                    <div className=" md:p-16 h-full gap-y-6 flex flex-col">
                        {msg.message}
                        <input className="h-5 p-6 border rounded-md" 
                            type="text" 
                            placeholder="Subject" 
                            required 
                            value={subject}  
                            onChange={(e)=>setSubject(e.target.value)}
                        />
                        <input className="h-5 p-6 border rounded-md" 
                            type="text" 
                            placeholder="Section" 
                            required value={section}  
                            onChange={(e)=>setSection(e.target.value)}
                        />
                        <input className="h-5 p-6 border rounded-md" 
                            type="text" 
                            placeholder="Schedule" 
                            required 
                            value={schedule}  
                            onChange={(e)=>setSchedule(e.target.value)}
                        />
                            <div className = "flex justify-end ">
                            <Link to="/myclasses">
                                    <button className= "text-blue-900 hover:text-blue-600 font-medium text-lg px-4 py-1.5 items-end"> 
                                    Cancel 
                                    </button>
                            </Link>
                                <button className= "block bg-blue-900 hover:bg-blue-600 shadow-lg text-white py-1.5 px-4 rounded-md " 
                                    onClick={handleSubmit}>
                                        Create 
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )   
}



export default CreateClass
