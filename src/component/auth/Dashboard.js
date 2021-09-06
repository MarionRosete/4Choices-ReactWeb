
import { withRouter,   } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Dashboard = (props) => {
     const [user, setUser]= useState('')

        useEffect(()=>
            {
            if(localStorage.getItem('token')!=null){
                fetch(
                    'http://127.0.0.1:8000/api/dashboard/{}',{
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}
                    }
                    ).then(
                        response =>response.json().then(resjson=>{console.log(setUser(resjson.user))})
                    )
            }else{
                console.log("please login")
                
            }
          
            }
        )      
    return (
        <>
        <h1>Hello Teacher { user.fullname }</h1>
        </>
    )
}

export default withRouter(Dashboard);


