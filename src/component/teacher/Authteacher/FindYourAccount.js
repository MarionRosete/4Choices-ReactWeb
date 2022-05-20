

import React, { useState,  } from 'react'
import { Link} from 'react-router-dom'
const  FindYourAccount =() =>{
    const[email, setEmail]=useState('');
    const[emailres, setEmailres]=useState('');
    const[code, setCode]=useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordcon] = useState('');
    const [changepasswordres, setChangepassres]=useState('');
    const findEmail=(event)=>{
        event.preventDefault();
        const user={email};
        const url = 'http://localhost:8000/api/forgotpassword'
        fetch(url,{
            method:'post',
            headers:
            {
                'content-type':'application/json', 
                'accept':'application/json'
            },
            body:JSON.stringify(user)
        }).then(response=>(
            response.json()
                .then(resjson=>{
                    setEmailres(resjson);
              
                }
            )
        )
    )
    }
    const findCode=(event)=>{
        event.preventDefault();
        const user={password,password_confirmation};
        const url = `http://localhost:8000/api/updatepassword/${code}`
        fetch(url,{
            method:'post',
            headers:
            {
                'content-type':'application/json',
                 'accept':'application/json'
            },
            body:JSON.stringify(user)
        }).then(response=>(
            response.json()
                .then(resjson=>{setChangepassres(resjson.message);
                    if(resjson.status===true){
                    window.location.replace( "/");
                    };
                }
            )
        )
    )
    }
    return (
        <center>
          
                {emailres.message}
                {emailres.success===true?
                    <>
                    <form onSubmit={findCode}>
                        <p>{changepasswordres}</p>
                    <input className="box-border border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm p-2 my-2 w-80" 
                        type="text" 
                        placeholder="Code"  
                        value={code} 
                        onChange={(e)=>setCode(e.target.value)}
                    />
                    <input className="box-border border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm p-2 my-2 w-80"
                        type="password" 
                        placeholder="New password" 
                        value={password} 
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <input className="box-border border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm p-2 my-2 w-80"
                        type="password"
                        placeholder="Confirm new password"
                        value={password_confirmation} 
                        onChange={(e)=>setPasswordcon(e.target.value)}
                    />
                     <button className="transition duration-500 ease-in-out hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-100 rounded-sm bg-blue-500 text-white font-bold font-sans p-2 w-80 ">
                         Change Password
                     </button>
                     </form>
                    </>
                  
                :    
                
                     <>
                     <form onSubmit={findEmail}>
                     <p className="text-2xl p-2">Please Enter your account email address to reset password</p>
                     <input className="box-border border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm p-2 my-2 w-80" 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                     />
                     <button className="transition duration-500 ease-in-out hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-100 rounded-sm bg-blue-500 text-white font-bold font-sans p-2 w-80 ">
                         Submit Email
                    </button>
                     </form>
                     </>
                }
               
            
             <span className="text-xs text-blue-500">
                <Link to="/">
                     &nbsp;Remember your Account?
                </Link>
            </span>
           
            
        </center>
    )
}

export default FindYourAccount
