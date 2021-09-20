
import React, { useState } from 'react';
import{Link} from 'react-router-dom'





const CreateExam = () => {
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

          
              
            <div className="min-h-screen p-10 bg-white ">
              
                <div className="flex flex-col bg-blue-100 justify-between rounded-2xl p-4 md:p-16 h-full">
                  <span className=" text-blue-800 font-medium text-xl py-5 px-10">Create Quiz</span>
                  {status}
                  <input className="h-5 p-6 border rounded-md" type="text" placeholder="Quiz title" required value={name}  onChange={(e)=>setName(e.target.value)}/>
                  <input className="h-5 p-6 border rounded-md" type="text" placeholder="Subject" required value={subject}  onChange={(e)=>setSubject(e.target.value)}/>
                  <input className="h-5 p-6 border rounded-md" type="text" placeholder="Description" required value={description}  onChange={(e)=>setDescription(e.target.value)}/>
                  <div className = "flex justify-end p-10">
                      <button className= "block bg-blue-900 hover:bg-blue-600 shadow-lg text-white py-1.5 px-4 rounded-md " onClick={handleSubmit}>Next </button>
                     
                      <button className= "text-blue-900 hover:text-blue-600 font-medium text-lg px-4 py-1.5 items-end"> <Link to="/dashboard">Cancel </Link></button>
                  </div>
                </div>
           
            </div>
       
        </>
       )
       
    
}



export default CreateExam
