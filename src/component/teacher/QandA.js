
import {useState} from 'react'
import {useHistory, Link} from 'react-router-dom'
function QandA(props){
    const history = useHistory();
    const code = props.location.state.code
    const name = props.location.state.name
    const subject = props.location.state.subject
    const data = props.location.state.data
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showBoard, setShowBoard] = useState(false);
   
	const handleAnswerOptionClick=()=>{
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < data.length) {
			setCurrentQuestion(nextQuestion);
            
		} else {
			setShowBoard(true);
      
		}
	};
  
    return (
    <>
    
    {data.length === 0?
        <>
              <h1 className="font-bold text-2xl">Exam is Empty</h1>
              <button className="block bg-blue-900 hover:bg-blue-600 shadow-md text-white font-small py-1.5 px-4 rounded-md"onClick={()=>history.push({pathname:"/CreateQandA", state:{name:name, code:code, subject:subject}})}>Update</button>
              
        </>
        :
        <>

          {showBoard ? (
              <>
				<div className='text-blue-900  bg-blue-200 justify-center items-center lg:p-24 p-5 space-y-4'>
                    <div className='flex justify-center items-center gap-x-2'>
                        <p className='md:text-2xl'>You have reach the end of exam</p>
                        <button className='text-sm underline' value={0} onClick={(e)=>{setCurrentQuestion(parseInt(e.target.value)); setShowBoard(false)}}>
                            View Again
                        </button> 
                    </div>
                    <div className='flex justify-center text-blue-900 text-xl font-bold'>
                    {subject} {name}
                    </div>
                    <div className='flex justify-center space-x-3'>
                        <button className='bg-blue-900 rounded-md px-1 text-white hover:bg-blue-600'><Link to={{pathname:"/TeacherLobby", state:{subject:subject, code:code}}}>Start exam</Link></button>
                        <button className='bg-red-900 rounded-md px-1 text-white hover:bg-red-600' onClick={()=>{fetch(`http://localhost:8000/api/dashboard/delete/${code}`,
                        {headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 'accept':'application/json'}}
                        ).then(response =>response.json().then(()=>{
                                        window.location.replace('/myclasses');
                                        }
                                        )
                                    )
                        }}>Delete exam</button>
                    </div>
				</div>
            </>  
			) : (<>
            <div className='flex justify-center text-blue-900 text-xl font-bold '>
                {subject} {name}
            </div>
            <div className="lg:px-40 py-5">
                <div className="text-blue-900  bg-blue-200 ">
                    <p className='text-lg font-bold space-y-x'>
                        Items: 
                    <select name="items" id="items" value={currentQuestion} onChange={(e)=>{setCurrentQuestion(parseInt(e.target.value))}}>
                        {data.map((value, index)=>
                        <option key={index} value={index} >{index+1}</option>
                        )
                        }
                    </select>
                    /{data.length}
                    </p>
                    <div className=" flex justify-center items-center lg:p-24">  {data[currentQuestion].question}</div> 
                    <div className="text-blue-900  bg-blue-200 "><p className='text-lg font-bold space-y-x'>Correct answer:{data[currentQuestion].answer}</p></div>
                </div>
                <br/>
                <div className="flex justify-between items-center md:space-x-32">
                    <button className="mr-2 transition duration-500 ease-in-out hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-100 rounded-md bg-blue-900 hover:bg-blue-500  border rounded-md p-2 my-2 w-1/2 text-white font-bold font-sans"  onClick={() => handleAnswerOptionClick()} >1.{data[currentQuestion].answer1}</button><br/>
                    <button className="mr-2 transition duration-500 ease-in-out hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-100 rounded-md bg-blue-900 hover:bg-blue-500  border rounded-md p-2 my-2 w-1/2 text-white font-bold font-sans"  onClick={() => handleAnswerOptionClick()} >2.{data[currentQuestion].answer2}</button>
                </div>
                <div className="flex justify-between items-center md:space-x-32">
                    <button className="mr-2 transition duration-500 ease-in-out hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-100 rounded-md bg-blue-900 hover:bg-blue-500  border rounded-md p-2 my-2 w-1/2 text-white font-bold font-sans"  onClick={() => handleAnswerOptionClick()} >3.{data[currentQuestion].answer3}</button><br/>
                    <button className="mr-2 transition duration-500 ease-in-out hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-100 rounded-md bg-blue-900 hover:bg-blue-500  border rounded-md p-2 my-2 w-1/2 text-white font-bold font-sans"  onClick={() => handleAnswerOptionClick()} >4.{data[currentQuestion].answer4}</button>
                </div>
                </div>
        </>)}
        </>
    }
    </>
     
    )
}

export default QandA
