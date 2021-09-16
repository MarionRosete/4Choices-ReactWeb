
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
        
                <span className="font-semibold text-xl tracking-tight"> {user=== null? "fetching..." :"Hello "+user.user}</span>
                <button className="bg-blue-700 p-2 w-40 " ><Link to='/CreateExam'>Create Exam</Link></button>
                <button className="float-right bg-blue-700 p-2 w-40" onClick={handleLogout}>Logout</button>
                
        <div className="shadow-lg m-8 rounded-2xl g-gray-500 p-4">
        <div className="text-center">
       {user.success===false?"No Created at the moment":"Exam Exist"}
       <button className="float-right bg-blue-700  w-20" onClick={handleActivate}>Activate</button>
        </div>
        </div>
        </>
    )
}

export default withRouter(Dashboard);


