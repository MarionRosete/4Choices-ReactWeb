import React from 'react'
import {  useHistory,Link} from 'react-router-dom'

function Exams(props) {
   
    const data =props.location.state.data
    const section =props.location.state.section
    const subject =props.location.state.subject
    const history = useHistory()

   
   



    return (
        <>
            {data.length===0?
        <>
            You have no Quiz yet
        </>
        :
        <>  <div className='flex justify-center items-center md:px-10'>
            <div className='bg-blue-100 rounded-2xl p-5 w-2/3'>
            <center>
                <p className='text-xl text-blue-800 font-bold'>{subject} {section}</p>
            <table className="text-center">
                <thead>
                <tr>
                    <th>Quiz Title</th>
                    <th className="w-1/2">Code</th>
                </tr>
                </thead>
                <tbody>
                    {data.map((item)=>
                <tr key={item.id}>    
                    <td><button className='text-lg text-blue-600 hover:text-blue-400' onClick={()=>{fetch(`http://localhost:8000/api/dashboard/myqa/${item.code}`,
                        {headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'accept':'application/json'}}
                        ).then(response =>response.json().then(resjson=>{
                                        history.push({pathname:"/QandA", state:{code:item.code,name:resjson.exam,data:resjson.qa,subject:subject} })
                                        }
                                        )
                                    )
                        }}>{item.name}</button></td>
                    <td className='text-sm'>{item.code}</td>
                    <td>
                        <button className= "block bg-red-900 hover:bg-red-600 shadow-md  text-white p-0.5 text-sm rounded-md" onClick={()=>{fetch(`http://localhost:8000/api/dashboard/delete/${item.code}`,
                        {headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'accept':'application/json'}}
                        ).then(response =>response.json().then(()=>{
                                        window.location.replace('/myclasses');
                                        }
                                        )
                                    )
                        }}>
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                             </svg>
                        </button>
                    </td>
                </tr>)}
                </tbody>                
            </table>
            </center>
            </div>
            </div>
        </>
        }
    </>
    )
}

export default Exams
