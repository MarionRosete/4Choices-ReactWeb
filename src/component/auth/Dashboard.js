
import {  withRouter, Link  } from 'react-router-dom'
import {  useEffect, useState,  } from 'react'
import QandA from './QandA'




const Dashboard = () => {
        
        const urlLogout = 'http://localhost:8000/api/dashboard/logout'
        const urlExam = 'http://127.0.0.1:8000/api/dashboard/exam'
        
        
        
        const[user,setUser]=useState('');
        
        const [exam,setExam]=useState([]);
     
       
 
        useEffect(()=>{
            
           
            const abortCtrl = new AbortController();
            
           
            fetch(
                urlExam,{
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'accept':'application/json'},
           
                }
            ).then(
                response =>response.json().then(resjson=>{  console.log(resjson.exam)
                    if(resjson.auth===true){
                        setUser(resjson);
                        setExam(resjson.exam);
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
       
        <div className ="grid grid-flow-col min-h-screen bg-white">
            <div className ="min-h-screen bg-white"> 
                <div className=" bg-blue-200 h-screen w-64">
                    <div className = "flex flex-col justify-center gap-y-6 px-8 ">
                        <span className=" text-blue-800 font-medium py-10 px-6">{user.user}</span>
                    
                        <button className= "block bg-blue-900 hover:bg-blue-600 shadow-lg text-white py-1.5 px-4 rounded-md "><Link to="/CreateExam">Create Quiz</Link></button>
                        <div className =" flex flex-col place-items-start gap-y-1">
                            
                            <button className= "text-blue-900 hover:text-blue-600 font-medium "><Link to ="/"> Dashboard </Link></button>
                            <button className= "text-blue-900 hover:text-blue-600 font-medium "> Calendar </button>
                            <button className= "text-blue-900 hover:text-blue-600 font-medium "> Library </button>
                            <button className= "text-blue-900 hover:text-blue-600 font-medium "> Classes </button>
                            <button className= "text-blue-900 hover:text-blue-600 font-medium "> Settings </button>
                            <button className= "text-blue-900 hover:text-blue-600 font-medium "> Profile </button>
                            <button className= "text-blue-900 hover:text-blue-600 font-medium " onClick={handleLogout}> Logout </button>
                        </div>
                        
                    </div>
                </div>
            </div>
            {exam.length===0?
            <>
                <h1>No Exam Created</h1>
            </>
            :
            <>
                <div className="min-h-screen p-10 bg-white ">
                
                <div className="flex flex-col bg-blue-100 justify-between rounded-2xl p-4 md:p-8 ">
                    <ul>
                        {exam.map((item)=><li className=" text-blue-800 font-medium text-xl py-5 px-10" key={item.id}> Name:  {item.name}<br/> Subject:  {item.subject}<br/> Description:  {item.description} <br/> Code: 
                            <button onClick={(e)=>{e.preventDefault();fetch(`http://localhost:8000/api/dashboard/myqa/${item.code}`,
                                {headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'accept':'application/json'}}
                                    ).then(response =>response.json().then(resjson=>{console.log(resjson); 
                                                    if(resjson.success===true){
                                                        console.log(resjson.qa);
                                                        <QandA qa="{resjson.qa}"/>
                                                     
                                                    }else{   
                                                        
                                                    }
                                                }
                                            )
                                        )
                            }}> 
                              <Link to="/QandA">{item.code}</Link>  </button><br/>
                            </li>)
                        }
                    </ul>
                
                    <div className = "flex justify-end p-2">
                        
                    
                    
                    </div>
                </div>
            
                </div> 
            </>
            }   
        </div>
     
        
       </>
            
   )
}

export default withRouter(Dashboard);


