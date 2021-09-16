
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
          <div class ="flex flex-col justify-evenly bg-blue-900 md:w-screen h-3 p-8"></div>
            <div class ="grid grid-flow-col min-h-screen bg-white"> 
              <div class=" bg-blue-200 md:h-screen w-64">
                <div class = "flex flex-col justify-center gap-y-6 px-16 ">
                  <span class=" text-blue-800 font-medium py-10 px-6">Iris Suaner</span>
                  <button class= "block bg-blue-900 hover:bg-blue-600 shadow-lg text-white py-1.5 px-4 rounded-md "> Create Quiz </button>
                <div class =" flex flex-col place-items-start gap-y-1">
                  <button class= "text-blue-900 hover:text-blue-600 font-medium "> Dashboard </button>
                  <button class= "text-blue-900 hover:text-blue-600 font-medium "> Calendar </button>
                  <button class= "text-blue-900 hover:text-blue-600 font-medium "> Library </button>
                  <button class= "text-blue-900 hover:text-blue-600 font-medium "> Classes </button>
                  <button class= "text-blue-900 hover:text-blue-600 font-medium "> Settings </button>
                  <button class= "text-blue-900 hover:text-blue-600 font-medium "> Profile </button>
                  <button class= "text-blue-900 hover:text-blue-600 font-medium "> Logout </button>
                </div>
              </div>
            </div>
            <div class="min-h-screen p-10 bg-white">
              <div class="min-h-screen p-10 bg-white">
                <div class="flex flex-col bg-blue-100 justify-between rounded-2xl p-4 md:p-16 h-full">
                  <span class=" text-blue-800 font-medium text-xl py-5 px-10">Create Quiz</span>
                  <input class="h-5 p-6 border rounded-md" type="text" placeholder type="text" placeholder="Quiz title" />
                  <span class=" text-blue-800 font-medium py-5 p5">Category: </span>
                <div class ="place-items-start gap-y-1 gap-x-2">
                  <button class= "bg-white rounded-2xl px-1 text-blue-900 hover:text-blue-600 font-medium text-sm"> Programming </button>
                  <button class= "bg-white rounded-2xl px-1 text-blue-900 hover:text-blue-600 font-medium text-sm"> Science </button>
                  <button class= "bg-white rounded-2xl px-1 text-blue-900 hover:text-blue-600 font-medium text-sm"> Politics </button>
                  <button class= "bg-white rounded-2xl px-1 text-blue-900 hover:text-blue-600 font-medium text-sm"> Social </button>
                  <button class= "bg-white rounded-2xl px-1 text-blue-900 hover:text-blue-600 font-medium text-sm"> General</button>
                  <button class= "bg-white rounded-2xl px-1 text-blue-900 hover:text-blue-600 font-medium text-sm"> Object Oriented </button>
                  <button class= "bg-white rounded-2xl px-1 text-blue-900 hover:text-blue-600 font-medium text-sm"> Database </button>
                </div>
                <div class = "flex justify-end p-10">
                    <button class= "text-blue-900 hover:text-blue-600 font-medium text-lg px-4 py-1.5 items-end"> Cancel </button>
                    <button class= "block bg-blue-900 hover:bg-blue-600 shadow-lg text-white py-1.5 px-4 rounded-md ">Next </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
       )
    
}



export default Register
