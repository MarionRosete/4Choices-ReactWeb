
import {  withRouter, Link  } from 'react-router-dom'
import {  useEffect, useState,  } from 'react'





const Dashboard = () => {
    
        const urlLogout = 'http://localhost:8000/api/dashboard/logout'
        const urlUser = 'http://127.0.0.1:8000/api/dashboard/user'
        const[user,setUser]=useState('');
        useEffect(()=>{
            const code=Date.now().toString(36); 
    console.log(code)
    const tosend = [code];
    console.log(tosend);
           
            const abortCtrl = new AbortController();
            
           
            fetch(
                urlUser,{
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'accept':'application/json'},
           
                }
            ).then(
                response =>response.json().then(resjson=>{
                    if(resjson.auth===true){
                        setUser(resjson);
                        console.log(resjson)
                    }else{
                        localStorage.removeItem('token');
                        window.location.replace( "/");
                    }
               
                }
             )
            ) 
            return () => abortCtrl.abort();
        },[])
       
       
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
       
        <div className ="grid grid-flow-col min-h-screen bg-white">
            <div className ="min-h-screen bg-white"> 
                <div className=" bg-blue-200 h-screen w-64">
                    <div className = "flex flex-col justify-center gap-y-6 px-8 ">
                        <span className=" text-blue-800 font-medium py-10 px-6">{user.user}</span>
                    
                        <button className= "block bg-blue-900 hover:bg-blue-600 shadow-lg text-white py-1.5 px-4 rounded-md "><Link to="/CreateExam">Create Quiz</Link></button>
                        <div className =" flex flex-col place-items-start gap-y-1">
                            <button className= "text-blue-900 hover:text-blue-600 font-medium "><Link to ="/MyExam">My Exams </Link></button>
                            <button className= "text-blue-900 hover:text-blue-600 font-medium "><Link to ="/"> Dashboard </Link></button>
                            <button className= "text-blue-900 hover:text-blue-600 font-medium " onClick={handleLogout}> Logout </button>
                        </div>
                        
                    </div>
                </div>
            </div>
              
        </div>
     
        
       </>
            
   )
}

export default withRouter(Dashboard);


