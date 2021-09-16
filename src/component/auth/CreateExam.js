
import React, { useState } from 'react';
import{Link} from 'react-router-dom'




const Register = () => {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('')
    const handleSubmit = (e) => {
            e.preventDefault();
            const newexam = {name, subject, description};
            console.log(newexam);
            fetch ("http://127.0.0.1:8000/api/dashboard/createExam",{
                headers:{"Content-Type":'application/json', "accept":'application/json',  Authorization: `Bearer ${localStorage.getItem('token')}`},
                method:'POST',
                body:JSON.stringify(newexam),
            }).then(response=>(
                response.json().then(resjson=>{setStatus(resjson.message);
                    if(resjson.success===true){
                        console.log("Created exam");window.location.replace( "/Dashboard");
                    }else{   
                           console.log("create exam failed")
                    };
                    }
                )
            )
        )
            
        }
   
        return (
          <>
            <center >
                    <h1 className="text-blue-900 text-4x1 font-bold p-2">Create Exam</h1>
                 
                    <form onSubmit={handleSubmit}>
                    <p>{status}</p>
                    <input className="p-2 m-5" type="text" placeholder="Exam name"  value={name} onChange={(e)=>setName(e.target.value)}/><br></br>
                 
                    <input className="p-2 m-5" type="text" placeholder="Subject"  value={subject} onChange={(e)=>setSubject(e.target.value)} /><br></br>

                    <input className="p-2 m-5" type="text" placeholder="Description"  value={description} onChange={(e)=>setDescription(e.target.value)}/><br></br>
                    <button className="bg-blue-700 p-2 w-40 ">Next</button>
                    </form>
                    <button className="bg-blue-700 p-2 w-40 "><Link to="/Dashboard">Cancel</Link></button>
            </center>
        </>
       )
    
}



export default Register
