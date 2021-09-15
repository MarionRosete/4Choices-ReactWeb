
import { Link, withRouter    } from 'react-router-dom'
import {  useEffect, useState } from 'react'

const Dashboard = () => {
        
        const urlLogout = 'http://localhost:8000/api/dashboard/logout'
        
        const[user,setUser]=useState(null);
      

        useEffect(()=>{
            
            const urlUser = 'http://127.0.0.1:8000/api/dashboard/user'
            const abortCtrl = new AbortController();
            
            fetch(
                urlUser,{
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'accept':'application/json'},
           
                }
            ).then(
                response =>response.json().then(resjson=>{console.log(resjson); console.log(resjson)
                                if(resjson.success===true){
                                    setUser(resjson.user);
                    
                                }else{
                                    localStorage.removeItem('token');
                                    window.location.reload();
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
       
        <span className="font-semibold text-xl tracking-tight"> {user=== null? "fetching" :"Hello "+user.fullname}</span>
        <br></br>
        <button className="bg-blue-700 p-2 w-40 " onClick={handleLogout}>Logout</button>
        <br></br>
        <button className="bg-blue-700 p-2 w-40 " ><Link to='/CreateExam'>Create Exam</Link></button>
        </>
    )
}

export default withRouter(Dashboard);


