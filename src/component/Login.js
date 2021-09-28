
import React, { useState,  } from 'react'
import { Link,useHistory} from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';


const Login = () => {
    const clientId = "669346893039-mv5nspklglnpal0h50i63vu8a70og3k1.apps.googleusercontent.com";

    const [email, setEmail] = useState('');
    const [password,  setPassword] = useState('');
    const[printRes, resJson]= useState('');
    const history = useHistory();


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
                        if(resjson.success===true){
                            localStorage.setItem('token', resjson.token)
                            history.push({pathname:"/Dashboard",state:{token:resjson.token}})
                        }else{
                                console.log("unauthorized")
                        };
                        }
                    )
                )
            )
    }
    
    const onSuccess = (res) => {
        
        console.log('Login Success: currentUser:', res.profileObj);
        const fullname=res.profileObj.name;
        const email=res.profileObj.email;
        const user={fullname,email};
        console.log(user)
        alert(
          `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        );
       
        fetch('http://localhost:8000/api/login/googlecallback',
        {
        method:'post',
        headers:{'content-type':'application/json', 'accept':'application/json'},
        body:JSON.stringify(user)
        }
    ).then(response=>(
                response.json().then(resjson=>{resJson(resjson.message);
                    if(resjson.success===true){
                        window.location.replace( "/Dashboard");
                        localStorage.setItem('token', resjson.token)
                        localStorage.setItem('status', resjson.message)
                    }else{
                            console.log("unauthorized")
                    };
                    }
                )
            )
        )
      
      };

        return (
          <>


            <div className="flex bg-blue-200 justify-center w-screen h-screen text-gray-700">
                <div className="shadow-lg m-8 rounded-2xl bg-white p-4">

                    <div className="text-center">
                        <h1 className="text-xl text-blue-600 p-2">Logo here</h1>
                        <p className="text-2xl p-2">Welcome Back</p>
                        <GoogleLogin  clientId={clientId}  onSuccess={onSuccess} />
                      
                            <form onSubmit={handleLogin}>
                            <span className="block text-gray-400">
                                <svg className="inline w-10 mr-2" height="2" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#C4C4C4" strokeWidth="2" d="M0 1h90"/></svg>
                                  OR LOGIN WITH EMAIL
                                <svg className="inline w-10 ml-2"  height="2" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#C4C4C4" strokeWidth="2" d="M0 1h90"/></svg>
                            </span>


                            <div className="mt-5">
                                <p className="text-red-500">{printRes}</p>
                                <input className="box-border border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm p-2 my-2 w-80" type="email" placeholder="Email"  value={email} required onChange={(e)=>setEmail(e.target.value)}/><br></br>
                                <input className="box-border border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm p-2 my-2 w-80" type="password" placeholder="Password"  value={password} required onChange={(e)=>setPassword(e.target.value)} /><br></br>
                                <button className="transition duration-500 ease-in-out hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-100 rounded-sm bg-blue-500 text-white font-bold font-sans p-2 w-80 ">Sign In</button>
                            </div>
                            <div className="flex justify-between py-3 text-blue-500 text-xs w-80 m-auto">
                                <div className="inline"><span className="inline align-middle"><input type="checkbox" name="" id=""/></span> Keep me loggedin</div>
                                <div className="inline"><Link to="/Forgetpassword">FORGOT PASSWORD</Link></div>
                            </div>

                            <div className="inline-flex justify-between">
                                <span className="text-gray-700 text-xs">New to Exam Mate?</span>
                                <span className="text-xs text-blue-500"><Link to="/Register">&nbsp;Register now!</Link></span>
                            </div>

                        </form>
                    </div>

                </div>
            </div>


        </>
       )

}



export default Login
