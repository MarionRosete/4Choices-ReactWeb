
import { withRouter } from 'react-router-dom'
import React, { useState,  } from 'react'
const Dashboard = () => {
    const [user, setUser]=useState('')
        fetch(
            'http://127.0.0.1:8000/api/dashboard/{}',{headers:{
                'accept':'application/json','content-type':'application/json',
                 'authorization':'Bearer Token: '+localStorage.getItem('token')
             },method:"GET"}).then(
                response =>{console.log(response.json().then(promise=>setUser(promise.fullname))) }
            )
        
    
    return (
        <>
        <p>Hello Teacher</p>
        <p>{user}</p>
        </>
    )
}

export default withRouter(Dashboard);


