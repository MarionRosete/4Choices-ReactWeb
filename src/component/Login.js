
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


            <div className="flex bg-blue-200 justify-center w-screen h-screen text-gray-700">
                <div className="flex-1 shadow-lg m-8 rounded-2xl bg-white justify-center p-4">
                    <form onSubmit={handleLogin}>
                        <div className="text-center">
                            <h1 className="text-xl text-blue-600 p-2">Logo here</h1>
                            <p className="text-2xl p-2">Welcome Back</p>

                            <button className="mt-2 mb-3 rounded border-2 px-4 py-1 mb-2 w-80" onClick={authGoogle}>
                                <svg viewBox="0 0 30 30" class="inline mr-1 w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M5.266 9.765A7.077 7.077 0 0112 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115z" fill="#EA4335"/><path d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 01-6.723-4.823l-4.04 3.067A11.965 11.965 0 0012 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987z" fill="#34A853"/><path d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21z" fill="#4A90E2"/><path d="M5.277 14.268A7.12 7.12 0 014.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 000 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067z" fill="#FBBC05"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>
                                Sign in with Google
                            </button>
                            <span className="block text-gray-400">
                                <svg class="inline w-10 mr-2" height="2" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#C4C4C4" stroke-width="2" d="M0 1h90"/></svg>
                                  OR LOGIN WITH EMAIL
                                <svg class="inline w-10 ml-2"  height="2" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#C4C4C4" stroke-width="2" d="M0 1h90"/></svg>
                            </span>


                            <div className="mt-5">
                                <p className="text-red-500">{printRes}</p>
                                <input className="box-border border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm p-2 my-2 w-80" type="email" placeholder="Email"  value={email} onChange={(e)=>setEmail(e.target.value)}/><br></br>
                                <input className="box-border border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm p-2 my-2 w-80" type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)} /><br></br>
                                <button className="rounded-sm bg-blue-500 text-white font-bold font-sans p-2 w-80 ">Sign In</button>
                            </div>
                            <div className="flex justify-between py-3 text-blue-500 text-xs w-80 m-auto">
                                <div className="inline"><span className="inline align-middle"><input type="checkbox" name="" id=""/></span> Keep me loggedin</div>
                                <div className="inline">FORGOT PASSWORD</div>
                            </div>

                            <div className="inline-flex justify-between">
                                <span className="text-gray-700 text-xs">New to Exam Mate?</span>
                                <span className="text-xs text-blue-500"><Link to="/Register">&nbsp;Register now!</Link></span>
                            </div>
                        </div>
                    </form>


                </div>
            </div>


        </>
       )

}



export default Login
