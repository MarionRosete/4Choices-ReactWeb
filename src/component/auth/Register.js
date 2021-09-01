
import React, { useState } from 'react';
import{Link} from 'react-router-dom'




const Register = () => {
    const [fullname, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordcon] = useState('');
    const [printRes, resJson] = useState('');
    const handleSubmit = (e) => {
            e.preventDefault();
            const newuser = {fullname, email, password, password_confirmation};
            console.log(newuser);
            fetch ("http://localhost:8000/api/register",{
                headers:{"Content-Type":'application/json', "accept":'application/json'},
                method:'POST',
                body:JSON.stringify(newuser),
            }).then(response=>(response.json().then(promise=>resJson(promise.errors))))
            
        }
   
        return (
          <>
            <center >
                    <h1 className="text-blue-900 text-4x1 font-bold p-2">Register</h1>
                    <p  className="text-lg text-blue-900 p-3">Welcome to Exam Mate</p>
                    <p className="text-lg text-blue-900 p-3">Create Account</p>
                    <button onClick={() => window.open( "http://localhost:8000/api/login/google-redirect")}>Sign in with google</button>
                    <form onSubmit={handleSubmit}>
                    <p>{printRes.fullname}</p>
                    <input className="p-2 m-5" type="text" placeholder="Fullname" required value={fullname} onChange={(e)=>setName(e.target.value)}/><br></br>
                    <p>{printRes.email}</p>
                    <input className="p-2 m-5" type="email" placeholder="Email" required value={email} onChange={(e)=>setEmail(e.target.value)} /><br></br>
                    <p>{printRes.password}</p>
                    <input className="p-2 m-5" type="password" placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)}/><br></br>
                    <p>{printRes.password_confirmation}</p>
                    <input className="p-2 m-5" type="password" placeholder="Confirm Password" required value={password_confirmation} onChange={(e)=>setPasswordcon(e.target.value)}/><br></br>
                    <button className="bg-blue-700 p-2 w-40 ">Sign Up!</button>
                    <p className="text-gray-400">Have an Account?</p>
                    <p className="text-lg text-blue-900 p-3"><Link to="/"> Sign In!</Link></p>
                    <p>{fullname}</p>
                    <p>{email}</p>
                    <p>{password}</p>
                    <p>{password_confirmation}</p>
                </form>
            </center>
        </>
       )
    
}



export default Register
