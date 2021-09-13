
import React, { useState } from 'react';
import{Link} from 'react-router-dom'




const Register = () => {
    const [fullname, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordcon] = useState('');
    const [msg, msgSet] = useState('');
    const[code, setCode]=useState('');
    const[responsecode, setCoderesponse] = useState('');
    const handleSubmit = (e) => {
            e.preventDefault();
            const newuser = {fullname, email, password, password_confirmation};
            console.log(newuser);
            fetch ("http://localhost:8000/api/register",{
                headers:{"Content-Type":'application/json', "accept":'application/json'},
                method:'POST',
                body:JSON.stringify(newuser),
                }
            ).then(response=>(
                    response.json().then(resjson=>{msgSet(resjson);}
                    )
                  )
              )
        }
        const findCode=(event)=>{
            event.preventDefault();
         
            fetch(`http://localhost:8000/api/verifyemail/${code}`,{
                method:'get',
                headers:{'content-type':'application/json', 'accept':'application/json'},
                
            }).then(response=>(
                response.json().then(resjson=>{setCoderesponse(resjson);
                    if(resjson.success===true){
                        console.log("successful");window.location.replace( "/Dashboard");
                        localStorage.setItem('token', resjson.token)
                       
                    }
                }
                )
              )
          )
        }

        return (
          
            <center > 
                {msg.success===true?
                    
                    <>
                    <p>{msg.message}</p>
                    <p>{responsecode.success ===false? "Account Activiated":"Invalid Code"}</p>
                    <form onSubmit={findCode}>
                    <input className="box-border border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm p-2 my-2 w-80" type="text" placeholder="Code"  value={code} onChange={(e)=>setCode(e.target.value)}/>
                     <button className="transition duration-500 ease-in-out hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-100 rounded-sm bg-blue-500 text-white font-bold font-sans p-2 w-80 ">Activate Account</button>
                     </form>
                     </>
                :
                     <>
                    <h1 className="text-blue-900 text-4x1 font-bold p-2">Register</h1>
                    <p  className="text-lg text-blue-900 p-3">Welcome to Exam Mate</p>
                    <p className="text-lg text-blue-900 p-3">Create Account</p>
                    <button onClick={() => window.open( "http://localhost:8000/api/login/google-redirect")}>Sign in with google</button>
                    <form onSubmit={handleSubmit}>
                    <p>{msg.message}</p>
                    <input className="p-2 m-5" type="text" placeholder="Fullname" required value={fullname} onChange={(e)=>setName(e.target.value)}/><br></br>
                    
                    <input className="p-2 m-5" type="email" placeholder="Email" required value={email} onChange={(e)=>setEmail(e.target.value)} /><br></br>
               
                    <input className="p-2 m-5" type="password" placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)}/><br></br>
                
                    <input className="p-2 m-5" type="password" placeholder="Confirm Password" required value={password_confirmation} onChange={(e)=>setPasswordcon(e.target.value)}/><br></br>
                    <button className="transition duration-500 ease-in-out hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-100 bg-blue-700 p-2 w-40 ">Sign Up!</button>
                
                    <p className="text-gray-400">Have an Account?</p>
                    <p className="text-lg text-blue-900 p-3"><Link to="/"> Sign In!</Link></p>

                    </form>
                    </>
                }
            </center>
       
       )

}



export default Register
