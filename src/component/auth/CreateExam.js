
import React, { useState, } from 'react';
import{Link} from 'react-router-dom'





const CreateExam = () => {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [question, setQuestion] = useState('');
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');
    const [code, setCode]=useState('');
    const handleSubmit = () => {
           
            const newexam = {name, subject, description};
            console.log(newexam);
            fetch ("http://127.0.0.1:8000/api/dashboard/createExam",{
                headers:{"Content-Type":'application/json', "accept":'application/json',  Authorization: `Bearer ${localStorage.getItem('token')}`},
                method:'POST',
                body:JSON.stringify(newexam),
            }).then(response=>(
                response.json().then(resjson=>{setStatus(resjson); setCode(resjson.exam)}
                )
            )
        )
            
        }
    const handleQuestions = (e)=>{
       
        const qa = {question, answer1, answer2, answer3, answer4};
        fetch(`http://localhost:8000/api/dashboard/createqa/${code.code}`,{
            headers:{"Content-Type":'application/json', "accept":'application/json',  Authorization: `Bearer ${localStorage.getItem('token')}`},
                method:'POST',
                body:JSON.stringify(qa),
        });
        setQuestion("");
        setAnswer1("");
        setAnswer2("");
        setAnswer3("");
        setAnswer4("");

    }
        return (
          <>
            {status.success ===true?
            <>
                <div className="min-h-screen p-10 bg-white ">
                    
                    <div className="flex flex-col bg-blue-100 justify-between rounded-2xl p-4 md:p-16 h-full">
                        <span className=" text-blue-800 font-large text-xl py-5 px-10">{code.name}</span>
                        <p>Question</p>
                        <input className="h-5 p-6 border rounded-md" type="text" placeholder="Write your question here" required value={question}  onChange={(e)=>setQuestion(e.target.value)}/>
                        <input className="h-5 p-6 border rounded-md" type="text" placeholder="Answer option 1" required value={answer1}  onChange={(e)=>setAnswer1(e.target.value)}/>
                        <input className="h-5 p-6 border rounded-md" type="text" placeholder="Answer option 2" required value={answer2}  onChange={(e)=>setAnswer2(e.target.value)}/>
                        <input className="h-5 p-6 border rounded-md" type="text" placeholder="Answer option 3" required value={answer3}  onChange={(e)=>setAnswer3(e.target.value)}/>
                        <input className="h-5 p-6 border rounded-md" type="text" placeholder="Answer option 4" required value={answer4}  onChange={(e)=>setAnswer4(e.target.value)}/>
                        <div className = "flex justify-end p-10">
                            <button className= "text-blue-900 hover:text-blue-600 font-medium text-lg px-4 py-1.5 items-end" onClick={()=> window.location.replace("/Dashboard")}>Cancel </button>
                            <button className= "block bg-blue-900 hover:bg-blue-600 shadow-lg text-white py-1.5 px-4 rounded-md " onClick={handleQuestions} >Submit </button>
                        </div>
               
                    </div>
                </div>
            </>  
            :
            <>
                <div className="min-h-screen p-10 bg-white ">
              
                    <div className="flex flex-col bg-blue-100 justify-between rounded-2xl p-4 md:p-16 h-full">
                        <span className=" text-blue-800 font-medium text-xl py-5 px-10">Create Quiz</span>
                        {status.message}
                        <input className="h-5 p-6 border rounded-md" type="text" placeholder="Quiz title" required value={name}  onChange={(e)=>setName(e.target.value)}/>
                        <input className="h-5 p-6 border rounded-md" type="text" placeholder="Subject" required value={subject}  onChange={(e)=>setSubject(e.target.value)}/>
                        <input className="h-5 p-6 border rounded-md" type="text" placeholder="Description" required value={description}  onChange={(e)=>setDescription(e.target.value)}/>
                        <div className = "flex justify-end p-10">
                            <button className= "text-blue-900 hover:text-blue-600 font-medium text-lg px-4 py-1.5 items-end"> <Link to="/dashboard">Cancel </Link></button>
                            <button className= "block bg-blue-900 hover:bg-blue-600 shadow-lg text-white py-1.5 px-4 rounded-md " onClick={handleSubmit}>Next </button>
                        </div>
                    </div>
         
                </div>
            </>
            }
          
              
           
       
        </>
       )
       
    
}



export default CreateExam
