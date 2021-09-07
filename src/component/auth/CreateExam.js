
import React, { useState } from 'react';
import{Link} from 'react-router-dom'




const Register = () => {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
   
    const handleSubmit = (e) => {
            e.preventDefault();
            const newexam = {name, subject, description};
            console.log(newexam);
            fetch ("http://127.0.0.1:8000/api/dashboard/createExam",{
                headers:{"Content-Type":'application/json', "accept":'application/json'},
                method:'POST',
                body:JSON.stringify(newexam),
            }).then(response=>(response.json().then(promise=>console.log(promise.errors))))
            
        }
   
        return (
          <>
            <center >
                    <h1 className="text-blue-900 text-4x1 font-bold p-2">Create Exam</h1>
                 
                    <form onSubmit={handleSubmit}>
                
                    <input className="p-2 m-5" type="text" placeholder="Exam name" required value={name} onChange={(e)=>setName(e.target.value)}/><br></br>
                 
                    <input className="p-2 m-5" type="text" placeholder="Subject" required value={subject} onChange={(e)=>setSubject(e.target.value)} /><br></br>

                    <input className="p-2 m-5" type="text" placeholder="Description" required value={description} onChange={(e)=>setDescription(e.target.value)}/><br></br>
                    <button className="bg-blue-700 p-2 w-40 ">Next</button>
                    </form>
                    <button className="bg-blue-700 p-2 w-40 "><Link to="/Dashboard">Cancel</Link></button>
            </center>
        </>
       )
    
}



export default Register
