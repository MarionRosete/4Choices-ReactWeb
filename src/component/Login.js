
import React, { useState,  } from 'react'
import { Link} from 'react-router-dom'
import App from '../App'

const Login = () => {


    const [email, setEmail] = useState('');
    const [password,  setPassword] = useState('');
    const[printRes, resJson]= useState('');



    const handleLogin=(event)=>{
        event.preventDefault()
        const user={email, password}
        console.log(user)
        fetch('http://localhost:8000/api/login',{
            method:'post',
            headers:{'content-type':'application/json', 'accept':'application/json'},
            body:JSON.stringify(user)
            }
        ).then(response=>(response.json().then(promise=>{resJson(promise.message);
             if(promise.message==="successful"){
                    console.log("successful");window.location.replace( "/Dashboard");
                    localStorage.setItem('token', promise.token)
            }else{
                    console.log("unauthorized")
            };
            }))
            )
    }
        return (
          <>


            <div className="flex bg-blue-200 justify-center w-screen h-screen">
                <div className="flex-1 m-8 rounded-2xl bg-white justify-center p-4">
                    <form onSubmit={handleLogin}>
                        <div className="text-center">
                            <h1 className="text-xl text-blue-800 p-2">Logo here</h1>
                            <p className="text-2xl text-blue-800 font-bold p-2">Welcome Back</p>

                            <button className="rounded border-2 px-4 py-1 mb-2 w-auto">
                                <svg viewBox="0 0 30 30" class="inline mr-1 w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M5.266 9.765A7.077 7.077 0 0112 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115z" fill="#EA4335"/><path d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 01-6.723-4.823l-4.04 3.067A11.965 11.965 0 0012 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987z" fill="#34A853"/><path d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21z" fill="#4A90E2"/><path d="M5.277 14.268A7.12 7.12 0 014.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 000 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067z" fill="#FBBC05"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>
                                Sign in with Google
                            </button>

                            <p className="text-gray-300 text-green-300">or login with email</p>
                            <p className="text-red-700">{printRes}</p>

                            <input className="box-border rounded p-2 my-2 w-full" type="email" placeholder="Email"  value={email} onChange={(e)=>setEmail(e.target.value)}/><br></br>
                            <input className="box-border rounded p-2 my-2 w-full" type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)} /><br></br>
                            <button className="bg-blue-700 p-2 w-40 ">Sign In</button>
                        </div>
                    </form>

                    <p className="text-gray-400" >New to Exam Mate?  </p>
                    <p className="text-lg text-blue-900 p-3"><Link to="/Register">Register now!</Link></p>
                    <p>{email}</p>
                    <p>{password}</p>
                </div>
            </div>


        </>
       )

}



export default Login
