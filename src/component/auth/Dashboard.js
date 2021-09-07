
import { withRouter,   } from 'react-router-dom'
import {  useEffect, useState } from 'react'

const Dashboard = () => {
        const urlUser = 'http://127.0.0.1:8000/api/dashboard/{}'
        const urlLogout = 'http://localhost:8000/api/dashboard/logout'
        const[user,setUser]=useState(null);
        const getUser=()=>{
           
            fetch(
                    urlUser,{
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}
                    }
                ).then(
                    response =>response.json().then(resjson=>{console.log(resjson.user); setUser(resjson.user)})
                )
        }

        useEffect(()=>{
         
          getUser()
            
        })
       

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
                                window.location.replace( "/Dashboard");
                             }else{
                                console.log("unauthencated")
                             }
                        }
                    )
                )
            
        }      
    return (
        <>
       
        <span className="font-semibold text-xl tracking-tight">Hello {user=== null?'fetching...':user.fullname}</span>
        <br></br>
        <button className="bg-blue-700 p-2 w-40 " onClick={handleLogout}>Logout</button>
        </>
    )
}

export default withRouter(Dashboard);


