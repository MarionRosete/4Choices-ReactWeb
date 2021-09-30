import {useState} from 'react'
import { useHistory } from 'react-router';

function Attendees() {
    const history = useHistory();
    const[code, setCode]=useState('');
    const findEmail=()=>{
        fetch(`http://localhost:8000/api/dashboard/attendeesExam/${code}`,
                                {headers: {  'accept':'application/json'}}
                                ).then(response =>response.json().then(resjson=>{
                                                history.push({pathname:"/AttendeesExam", state:{status:resjson.success,name:resjson.exam,data:resjson.qa} })
                                                }
                                                )
                                            )
    }
    return (
        <div className="flex bg-blue-200 justify-center w-screen h-screen text-gray-700">
        <div className="shadow-lg m-8 rounded-2xl bg-white p-4">

                     <p className="text-2xl p-2">Exam now</p>
                     <input className="box-border border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm p-2 my-2 w-80" type="text" placeholder="Enter Code" value={code} onChange={(e) => setCode(e.target.value)} /><br/>
                     <button className="transition duration-500 ease-in-out hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-100 rounded-sm bg-blue-500 text-white font-bold font-sans p-2 w-80 "onClick={findEmail}>Sign In</button>
               
        </div>
        </div>
    )
}

export default Attendees
