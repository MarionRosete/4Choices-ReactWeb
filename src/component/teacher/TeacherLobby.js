import React from 'react';

function TeacherLobby(props) {
    return (
        <div className="rounded-lg bg-blue-900 h-full md:p-10">
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
                <div className='grid md:grid-cols-2 md:grid-rows-5 gap-y-1 md:px-32 justify-items-center '>
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

export default TeacherLobby
