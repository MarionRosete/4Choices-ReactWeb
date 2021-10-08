import React from 'react'
import {  useHistory} from 'react-router-dom'

function Exams(props) {
   
    const data =props.location.state.data

    console.log(data)
    const history = useHistory()

   
   



    return (
        <>
             {data.length===0?
            <>
                You have no Quiz yet
            </>
            :
            <> 
                <table className="md:text-center">
                    <thead>
                    <tr>
                        <th className="w-1/4 ">Quiz Title</th>
                        <th className="w-1/4 ">Code</th>
                        <th className="w-1/4 ">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {data.map((item)=>
                    <tr key={item.id}>    
                        <td>{item.name}</td>
                        <td>{item.code}</td>
                        <td className="flex">
                            <button className= "block bg-blue-900 hover:bg-blue-600 shadow-md text-white p-0.5  rounded-md" onClick={()=>{fetch(`http://localhost:8000/api/dashboard/myqa/${item.code}`,
                                {headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'accept':'application/json'}}
                                ).then(response =>response.json().then(resjson=>{
                                                history.push({pathname:"/QandA", state:{code:item.code,name:resjson.exam,data:resjson.qa} })
                                                }
                                                )
                                            )
                                }}>
                                View
                                </button>
                                <button className= "block bg-red-900 hover:bg-red-600 shadow-md  text-white p-0.5  rounded-md" onClick={()=>{fetch(`http://localhost:8000/api/dashboard/delete/${item.code}`,
                                {headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'accept':'application/json'}}
                                ).then(response =>response.json().then(()=>{
                                              window.location.replace('/myclasses');
                                                }
                                                )
                                            )
                                }}>
                                Delete
                            </button>
                        </td>
                    </tr>)}
                    </tbody>                
                </table>
            </>
            }
        </>
    )
}

export default Exams
