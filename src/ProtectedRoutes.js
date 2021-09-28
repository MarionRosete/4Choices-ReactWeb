import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {  useEffect, useState,  } from 'react'


function ProtectedRoutes({ component:Component, ...rest}) {
    const[auth,setAuth]=useState('');
    const urlUser = 'http://127.0.0.1:8000/api/dashboard/user'
    useEffect(()=>{
         
    
           
        const abortCtrl = new AbortController();
        
       
        fetch(
            urlUser,{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'accept':'application/json'},
       
            }
        ).then(
            response =>response.json().then(resjson=>{
                if(resjson.auth===true){
                    setAuth(true);
               
                }else{
                    localStorage.removeItem('token');
                    window.location.replace( "/");
                }
           
            }
         )
        ) 
        return () => abortCtrl.abort();
    },[])
 
    if (!auth) return null 
    return (
        <Route {...rest} 
            render={props =>(
                auth===true?
                <Component/>
          :
             <Redirect to={{pathname: '/', state:{from: props.location}}}/>
            
        )}/>
    )
}

export default ProtectedRoutes
