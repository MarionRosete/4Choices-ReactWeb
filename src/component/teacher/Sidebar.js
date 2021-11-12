
import {  Link  } from 'react-router-dom'
import {  useEffect, useState,  } from 'react'
import pic from '../../img/log.jpg'




const Dashboard = (props) => {

        const urlLogout = 'http://localhost:8000/api/dashboard/logout'
        const urlUser = 'http://127.0.0.1:8000/api/dashboard/user'
        const[user,setUser]=useState('');
        const sidebar = document.querySelector(".sidebar");





        useEffect(()=>{



            const abortCtrl = new AbortController();


            fetch(
                urlUser,{
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'accept':'application/json'},

                }
            ).then(
                response =>response.json().then(resjson=>{
                    if(resjson.auth===true){
                        setUser(resjson);
                        console.log(resjson)
                    }else{
                        localStorage.removeItem('token');
                        window.location.replace( "/");
                    }

                }
             )
            )
            return () => abortCtrl.abort();
        },[])


        const handleLogout=()=>{
              fetch(
                urlLogout,{
                 method:'POST',
                 headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'accept':'application/json'}
                }).then(
                    response=>response.json().then(
                        resjson=>{console.log(resjson.token);
                             if(resjson.message==="Logged out"){
                                localStorage.removeItem('token');
                                window.location.replace( "/");
                             }else{
                                console.log("unauthencated")
                             }
                        }
                    )
                )

        }



    return (
    <>
    <div className ="flex flex-col bg-blue-900 h-3 p-8">
    <div className="bg-blue-200 text-gray-100 flex justify-between md:hidden ">

        <div className=" text-blue-800 font-bold py-10 px-6">{user.user}</div>


        <button className="mobile-menu-button p-4 focus:outline-none focus:bg-blue-900" onClick={()=>{ sidebar.classList.toggle("-translate-x-full")}}>
        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        </button>
    </div>
        <div className="sidebar fixed... bg-blue-200 text-blue-900 w-64  absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
            <div className = "flex flex-col justify-center gap-y-6 px-8 ">

                <div className="flex text-blue-800 py-10 items-center gap-x-2"><img className='w-14 h-14 rounded-full' src={pic} alt=""/><div><p className='font-bold'>{user.user}</p><p className='text-sm'> teacher</p></div></div>

                <button className= "block bg-blue-900 hover:bg-blue-600 shadow-lg text-white py-1.5 px-4 rounded-md "><Link to="/CreateExam">Create Quiz</Link></button>
                <ul className =" flex flex-col place-items-start gap-y-1">




                    <li className= "hover:text-blue-600 font-medium ">
                        <Link to ="/Dashboard">
                        <div className="flex justify-between">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                            </svg>
                            Dashboard
                        </div>
                        </Link>
                    </li>

                    <li className= "hover:text-blue-600 font-medium ">
                        <div className="flex justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Calendar
                        </div>
                    </li>

                    <li className= "hover:text-blue-600 font-medium ">
                        <div className="flex justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Library
                        </div>
                    </li>

                    <li className= "hover:text-blue-600 font-medium ">
                        <Link to ="/MyClasses">
                        <div className="flex justify-between">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                            </svg>
                            Classes
                        </div>
                        </Link>
                    </li>

                    <li className= "hover:text-blue-600 font-medium ">
                        <div className="flex justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Settings
                        </div>
                    </li>

                    <div className="flex justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    <button className= "hover:text-blue-600 font-medium " onClick={handleLogout}> Logout </button>
                    </div>
                </ul>



            </div>
        </div>
        </div>
    </>

   )
}

export default Dashboard;
