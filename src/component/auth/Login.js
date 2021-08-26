
import React, { useState } from 'react'
import { Link} from 'react-router-dom'



const Login = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
        return (
          <>
         
         
            <center class>
                <form action='api/login'>
                    <h1 class="text-blue-900 text-4x1 font-bold p-2">Login Here</h1>
                    <p  class="text-lg text-blue-900 p-3">Welcome Back</p>
                          <p><Link to="/google">Sign in with google</Link></p>
                    <p class="text-gray-300">or login with email</p>
                    <input class="p-2 m-5" type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br></br>
                    <input class="p-2 m-5" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} /><br></br>
                    <button class="bg-blue-700 p-2 w-40  ">Sign In</button>      
                    <p class="text-gray-400" >New to Exam Mate?  </p>
                    <p class="text-lg text-blue-900 p-3"><Link to="/Register">Register now!</Link></p>
                    <p>{email}</p>
                    <p>{password}</p>
                    
                </form>
             
            </center>
  
          
        </>
       )
    
}



export default Login
