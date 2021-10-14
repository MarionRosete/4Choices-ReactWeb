import {useState} from 'react'
import {useHistory} from 'react-router-dom'
function QandA(props){
    const history = useHistory();
    console.log(props.location.state)

    const code = props.location.state.code
    const name = props.location.state.name
    const data = props.location.state.data
    
        
    console.log(data)
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);

	const handleAnswerOptionClick=()=>{
	
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < data.length) {
			setCurrentQuestion(nextQuestion);
            
		} else {
			setShowScore(true);
      
		}
	};
    return (
    <>
    
    {data.length === 0?
        <>
              <h1 className="font-bold text-2xl">Exam is Empty</h1>
              <button className="block bg-blue-900 hover:bg-blue-600 shadow-md text-white font-small py-1.5 px-4 rounded-md"onClick={()=>history.push({pathname:"/CreateQandA", state:{name:name, code:code}})}>Update</button>
              
        </>
        :
        <>

          {showScore ? (
				<div className='text-blue-900 flex bg-blue-200 justify-center items-center p-24'>
				 End of Exam
                    
				</div>
			) : (<>
          <div className="md:px-40 p-8">
            <div className="text-blue-900  bg-blue-200 "><p className='text-lg font-bold space-y-x'>Items:{currentQuestion+1}/{data.length}</p>
            <div className="justify-center items-center md:p-24">  {data[currentQuestion].question}</div> 
            <div className="text-blue-900  bg-blue-200 "><p className='text-lg font-bold space-y-x'>Correct answer:{data[currentQuestion].answer}</p></div>
            </div>
            <br/>
            <div className="flex justify-between items-center md:space-x-32">
                <button className="mr-2 transition duration-500 ease-in-out hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-100 rounded-md bg-blue-900 hover:bg-blue-500  border rounded-md p-2 my-2 w-1/2 text-white font-bold font-sans" value={1} onClick={() => handleAnswerOptionClick(data[currentQuestion])} >1.{data[currentQuestion].answer1}</button><br/>
                <button className="mr-2 transition duration-500 ease-in-out hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-100 rounded-md bg-blue-900 hover:bg-blue-500  border rounded-md p-2 my-2 w-1/2 text-white font-bold font-sans" value={2} onClick={() => handleAnswerOptionClick(data[currentQuestion])} >2.{data[currentQuestion].answer2}</button>
            </div>
            <div className="flex justify-between items-center md:space-x-32">
                <button className="mr-2 transition duration-500 ease-in-out hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-100 rounded-md bg-blue-900 hover:bg-blue-500  border rounded-md p-2 my-2 w-1/2 text-white font-bold font-sans" value={3} onClick={() => handleAnswerOptionClick(data[currentQuestion])} >3.{data[currentQuestion].answer3}</button><br/>
                <button className="mr-2 transition duration-500 ease-in-out hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-100 rounded-md bg-blue-900 hover:bg-blue-500  border rounded-md p-2 my-2 w-1/2 text-white font-bold font-sans" value={4} onClick={() => handleAnswerOptionClick(data[currentQuestion])} >4.{data[currentQuestion].answer4}</button>
            </div>
            </div>
        </>)}
        </>
    }
    </>
     
    )
}

export default QandA
