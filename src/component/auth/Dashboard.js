
import { withRouter,   } from 'react-router-dom'
import {  useEffect } from 'react'

const Dashboard = () => {
     

        useEffect(()=>
            {
            if(localStorage.getItem('token')!=null){
                fetch(
                    'http://127.0.0.1:8000/api/dashboard/{}',{
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}
                    }
                    ).then(
                        response =>response.json().then(resjson=>{console.log(resjson.user)})
                    )
            }else{
                console.log("please login")   
            }
            }
        )
        const handleLogout=(event)=>{
            event.preventDefault();
              fetch(
                'http://localhost:8000/api/dashboard/logout',{
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
       
        <span className="font-semibold text-xl tracking-tight">Hello</span>
        <br></br>
        <button className="bg-blue-700 p-2 w-40 " onClick={handleLogout}>Logout</button>
        </>
    )
}

export default withRouter(Dashboard);


