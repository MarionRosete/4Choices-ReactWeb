
import React, { useState,  } from 'react'
import { Link} from 'react-router-dom'



const Login = () => {
    
    
    const [email, setEmail] = useState('');
    const [password,  setPassword] = useState('');
    const[printRes, resJson]= useState('');
    
    const urlcallbackGoogle='http://localhost:8000/api/login/google-callback'

    const handleLogin=(event)=>{
        event.preventDefault()
        const user={email, password}
        console.log(user)
        fetch('http://localhost:8000/api/login',
            {
            method:'post',
            headers:{'content-type':'application/json', 'accept':'application/json'},
            body:JSON.stringify(user)
            }
        ).then(response=>(
                    response.json().then(resjson=>{resJson(resjson.message);
                        if(resjson.message==="successful"){
                            console.log("successful");window.location.replace( "/Dashboard");
                            localStorage.setItem('token', resjson.token)
                            localStorage.setItem('status', resjson.message)
                        }else{   
                                console.log("unauthorized")   
                        };
                        }
                    )
                )
            )
    }
    const authGoogle=()=>{
        window.location.replace('http://localhost:8000/api/login/google-redirect')
        fetch(urlcallbackGoogle,{headers:{'content-type':'application/json', 'accept':'application/json'}}
        ).then(response=>(
            response.json().then(resjson=>{resJson(resjson.message);
                if(resjson.message==="successful"){
                    console.log("successful");window.location.replace( "/Dashboard");
                    localStorage.setItem('token', resjson.token)
                    localStorage.setItem('status', resjson.message)
                }else{   
                        console.log("unauthorized")   
                };
                }
            )
        )
    )

        
    }
        return (
          <>
         
         
            <center >
                
                    <h1 className="text-blue-900 text-4x1 font-bold p-2">Login Here</h1>
                    <p  className="text-lg text-blue-900 p-3">Welcome Back</p>
                    <button className="bg-blue-700 p-2 w-40 "onClick={authGoogle}>Sign-in with Google</button>
                    <p className="text-gray-300">or login with email</p>
                   <p className="text-red-700">{printRes}</p>
                   <form onSubmit={handleLogin}>
                    <input className="p-2 m-5" type="email" placeholder="Email"  value={email} onChange={(e)=>setEmail(e.target.value)}/><br></br>
                    <input className="p-2 m-5" type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)} /><br></br>
                    <button className="bg-blue-700 p-2 w-40 ">Sign In</button> 
                    </form>     
                    <p className="text-gray-400" >New to Exam Mate?  </p>
                    <p className="text-lg text-blue-900 p-3"><Link to="/Register">Register now!</Link></p>
                
            </center>
  
          
        </>
       )
    
}



export default Login
