
import React, { useState } from 'react'
import { Link} from 'react-router-dom'



const Login = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
        return (
          <>
         
         
            <center >
                <form action='api/login'>
                    <h1 className="text-blue-900 text-4x1 font-bold p-2">Login Here</h1>
                    <p  className="text-lg text-blue-900 p-3">Welcome Back</p>
                          <p><Link to="/google">Sign in with google</Link></p>
                    <p className="text-gray-300">or login with email</p>
                    <input className="p-2 m-5" type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br></br>
                    <input className="p-2 m-5" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} /><br></br>
                    <button className="bg-blue-700 p-2 w-40  ">Sign In</button>      
                    <p className="text-gray-400" >New to Exam Mate?  </p>
                    <p className="text-lg text-blue-900 p-3"><Link to="/Register">Register now!</Link></p>
                    <p>{email}</p>
                    <p>{password}</p>
                    
                </form>
             
            </center>
  
          
        </>
       )
    
}



export default Login
