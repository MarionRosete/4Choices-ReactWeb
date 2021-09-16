
import { Link, withRouter    } from 'react-router-dom'
import {  useEffect, useState } from 'react'



const Dashboard = () => {
        
        const urlLogout = 'http://localhost:8000/api/dashboard/logout'
        const urlExam = 'http://127.0.0.1:8000/api/dashboard/exam'
        
        
        
        const[user,setUser]=useState('');
        useEffect(()=>{
            
           
            const abortCtrl = new AbortController();
            
           
            fetch(
                urlExam,{
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'accept':'application/json'},
           
                }
            ).then(
                response =>response.json().then(resjson=>{
                    if(resjson.auth===true){
                        setUser(resjson);
                        console.log(resjson)
                    }else{
                        localStorage.removeItem('token');
                        window.location.reload();
                    }
               
                }
             )
            ) 
            return () => abortCtrl.abort();
        },[])
       
        const handleActivate=()=>{

        }
        const handleLogout=()=>{
              fetch(
                urlLogout,{
                 method:'POST',
                 headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'accept':'application/json'}
                }).then(
                    response=>response.json().then(
                        resjson=>{console.log(resjson.token);
                             if(resjson.message==="Logged out"){
                                localStorage.removeItem('token');
                                window.location.replace( "/");
                             }else{
                                console.log("unauthencated")
                             }
                        }
                    )
                )
            
        }
      
     
           
    return (
        <>
        <div class ="min-h-screen bg-white"> 
  <div class ="flex flex-col bg-blue-900 h-3 p-8">
  </div>
    <div class=" bg-blue-200 h-screen w-64">
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
</div>
        </>
    )
}

export default withRouter(Dashboard);


