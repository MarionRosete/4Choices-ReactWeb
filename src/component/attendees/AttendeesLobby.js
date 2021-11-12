import { useState } from "react";


function AttendeesLobby(props) {
    const [student, setStudent]=useState('');
    return (
        <div className="bg-blue-900 min-h-screen md:px-20 md:py-10 p-5">
            <div className="flex justify-between">
                <div>
                   <p className="ml-2 text-white text-3xl font-bold">{props.location.state.subject}</p>
                    <p className="mt-3 bg-blue-200 rounded-2xl px-1 text-xl px-4 text-blue-900">{props.location.state.code}</p>
                </div>
                <div className='p-3'>
                    <button className='transition duration-200 ease-in-out hover:bg-white transform text-blue-900 hover:scale-500 text-4xl bg-blue-200 bg-green-200 focus:bg-green-300 rounded-md w-auto p-4 px-16'>Ready</button>
                </div>
            </div>
            <div className='pt-5 space-y-10'>
                <div className='flex justify-center'>
                    <input className='rounded-md text-center md:w-1/3 py-2' placeholder='Enter your name' value={student} onChange={(e)=>setStudent(e.target.value)}/>
                </div>

                <div className='grid md:grid-cols-2 md:grid-rows-5 gap-y-1 md:px-64 justify-items-center '>
                    <input className='rounded-md text-center md:w-72 py-2' placeholder=''/>
                    <input className='rounded-md text-center md:w-72 py-2' placeholder=''/>
                    <input className='rounded-md text-center md:w-72 py-2' placeholder=''/>
                    <input className='rounded-md text-center md:w-72 py-2' placeholder=''/>
                    <input className='rounded-md text-center md:w-72 py-2' placeholder=''/>
                    <input className='rounded-md text-center md:w-72 py-2' placeholder=''/>
                    <input className='rounded-md text-center md:w-72 py-2' placeholder=''/>
                    <input className='rounded-md text-center md:w-72 py-2' placeholder=''/>
                    <input className='rounded-md text-center md:w-72 py-2' placeholder=''/>
                    <input className='rounded-md text-center md:w-72 py-2' placeholder=''/>
                    <input className='rounded-md text-center md:w-72 py-2' placeholder=''/>
                    <input className='rounded-md text-center md:w-72 py-2' placeholder=''/>
                </div>
            </div>
        </div>
    )
}

export default AttendeesLobby
