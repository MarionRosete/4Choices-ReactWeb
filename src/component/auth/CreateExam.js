
import React, { useState, useEffect} from 'react';
import{Link, useHistory} from 'react-router-dom'





const CreateExam = () => {
    const [name, setName] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();
    const[classes, setClasses]=useState([]);
    const[id, setID]=useState('');
    console.log(id)
    useEffect(()=>{
         
    
           
        const abortCtrl = new AbortController();
        
       
        fetch(
            'http://localhost:8000/api/dashboard/myClass',{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'accept':'application/json'},
       
            }
        ).then(
            response =>response.json().then(resjson=> setClasses(resjson.exam)
         )
        ) 
        return () => abortCtrl.abort();
    },[])

    const handleSubmit = () => {
           
            const newexam = {name};
            console.log(newexam);
            fetch (`http://127.0.0.1:8000/api/dashboard/createExam/${id}`,{
                headers:{"Content-Type":'application/json', "accept":'application/json',  Authorization: `Bearer ${localStorage.getItem('token')}`},
                method:'POST',
                body:JSON.stringify(newexam),
            }).then(response=>(
                response.json().then(resjson=>{setMsg(resjson); 
                    if(resjson.success===true){
                        history.push({pathname:"/CreateQandA",state:resjson.exam})
                    }
                }
                )
            )
        )
            
        }
  
        return (
       
            <>
            
                <div className="md:px-40">
                    <div className=" bg-blue-100 rounded-2xl p-8">
                    <div className="flex items-center text-blue-800 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                    </svg>
                       Create Quiz
                    </div>
                        <div className=" md:p-16 h-full gap-y-6 flex flex-col">
                            {msg.message}
                            <input className="h-5 p-6 border rounded-md" type="text" placeholder="Quiz title" required value={name}  onChange={(e)=>setName(e.target.value)}/>
                            <p className='text-blue-900 font-bold font-sans'>Classes:</p>
                            {classes.length===0?
                                <>
                                <button className="transition duration-500 ease-in-out hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-100 rounded-md bg-blue-900 text-white font-bold font-sans p-2 w-32"><Link to='/CreateClass'>make class</Link></button>
                                </>
                                :
                                <>
                                <div className="flex space-x-2.5">
                                {classes.map((item)=>
                                <div key={item.id}>
                                
                                    <button className="focus:outline-none focus:ring-2 focus:bg-gray-500 rounded-md bg-gray-400 text-blue-900 text-sm font-bold font-sans" value={item.id} onClick={(e)=>setID(e.target.value)}>{item.subject}<br/>{item.section}</button>
                                   
                                </div>)}
                                </div>
                                </>
                            }
                                <div className = "flex justify-end ">
                                    <button className= "text-blue-900 hover:text-blue-600 font-medium text-lg px-4 py-1.5 items-end"> <Link to="/dashboard">Cancel </Link></button>
                                    <button className= "block bg-blue-900 hover:bg-blue-600 shadow-lg text-white py-1.5 px-4 rounded-md " onClick={handleSubmit}>Next </button>
                                </div>
                        </div>
                    </div>
                </div>
            
            </>
            
          
              
           
       
      
       )
       
    
}



export default CreateExam
