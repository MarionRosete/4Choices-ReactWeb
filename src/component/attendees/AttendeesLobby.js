import { useState } from "react";


function AttendeesLobby(props) {
    const [student, setStudent]=useState('');
    return (
        <div className="bg-blue-900 min-h-screen md:px-20 md:py-10 p-5">
            <div className="flex justify-between">
                <div>
                   <p className="text-white text-xl font-bold">{props.location.state.subject}</p>
                    <p className="bg-blue-200 rounded-2xl px-1 text-sm text-blue-900">{props.location.state.code}</p>
                </div>
                <div className='p-5'>
                    <button className='bg-blue-300 rounded-md w-auto p-1'>Start Quiz</button>
                </div>
            </div>
            <div className='space-y-10'>
                <div className='flex justify-center'>
                    <input className='rounded-md text-center md:w-1/3 py-1' placeholder='Enter your name' value={student} onChange={(e)=>setStudent(e.target.value)}/>
                </div>
           
                <div className='grid md:grid-cols-2 md:grid-rows-5 gap-y-1 md:px-64 justify-items-center '>
                    <input className='rounded-md text-center md:w-72 py-1' placeholder=''/>
                    <input className='rounded-md text-center md:w-72 py-1' placeholder=''/>
                    <input className='rounded-md text-center md:w-72 py-1' placeholder=''/>
                    <input className='rounded-md text-center md:w-72 py-1' placeholder=''/>
                    <input className='rounded-md text-center md:w-72 py-1' placeholder=''/>
                    <input className='rounded-md text-center md:w-72 py-1' placeholder=''/>
                    <input className='rounded-md text-center md:w-72 py-1' placeholder=''/>
                    <input className='rounded-md text-center md:w-72 py-1' placeholder=''/>
                    <input className='rounded-md text-center md:w-72 py-1' placeholder=''/>
                    <input className='rounded-md text-center md:w-72 py-1' placeholder=''/>
                </div>
            </div>
        </div>
    )
}

export default AttendeesLobby
