import {useState} from 'react'

function AttendeesExam(props){

    const data =props.location.state.data
    
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const handleAnswerOptionClick=(answer,value)=>{
		if (value===answer) {
			setScore(score + 1);
            console.log("Correct!")
		}
        console.log(currentQuestion)
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < data.length) {
			setCurrentQuestion(nextQuestion);
            
		} else {
			setShowScore(true);
      
		}
	};
   
    //Random Exam

      for(let i=data.length-1;i>0;i--){
            const j = Math.floor(Math.random()*(i+1));
            const temp = data[i];
            data[i]=data[j];
            data[j]=temp; 
        }

        
      
    return (
    <>
 

    {data.length === 0?
        <>
       <h1>No Question And Answers Exists</h1>
        </>
        :
        <>
            
            {showScore ? (
				<div className='text-blue-900 flex bg-blue-200 justify-center items-center p-24'>
					You scored {score} out of {data.length}
                    
				</div>
			) : (<>
            <div className="md:px-40 md:p-20 p-8">
                <div className="text-blue-900 flex bg-blue-200 justify-center items-center p-24"> {data[currentQuestion].question} </div><br/>
            <div className="flex justify-between items-center md:space-x-32">
                <button className="mr-2 transition duration-500 ease-in-out hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-100 rounded-md bg-blue-900 hover:bg-blue-500  border rounded-md p-2 my-2 w-1/2 text-white font-bold font-sans" value={1} onClick={(e) => handleAnswerOptionClick(data[currentQuestion].answer.toString(), e.target.value)} >{data[currentQuestion].answer1}</button><br/>
                <button className="mr-2 transition duration-500 ease-in-out hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-100 rounded-md bg-blue-900 hover:bg-blue-500  border rounded-md p-2 my-2 w-1/2 text-white font-bold font-sans" value={2} onClick={(e) => handleAnswerOptionClick(data[currentQuestion].answer.toString(), e.target.value)} >{data[currentQuestion].answer2}</button>
            </div>
            <div className="flex justify-between items-center md:space-x-32">
                <button className="mr-2 transition duration-500 ease-in-out hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-100 rounded-md bg-blue-900 hover:bg-blue-500  border rounded-md p-2 my-2 w-1/2 text-white font-bold font-sans" value={3} onClick={(e) => handleAnswerOptionClick(data[currentQuestion].answer.toString(), e.target.value)} >{data[currentQuestion].answer3}</button><br/>
                <button className="mr-2 transition duration-500 ease-in-out hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-100 rounded-md bg-blue-900 hover:bg-blue-500  border rounded-md p-2 my-2 w-1/2 text-white font-bold font-sans" value={4} onClick={(e) => handleAnswerOptionClick(data[currentQuestion].answer.toString(), e.target.value)} >{data[currentQuestion].answer4}</button>
            </div>
            </div>
           </> )}
        </>
    }
    </>
     
    )
}

export default AttendeesExam
