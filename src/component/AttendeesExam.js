import {useState} from 'react'

function AttendeesExam(props){
   

    const success = props.location.state.status
    const name = props.location.state.name
    const instructor = props.location.state.instructor
    const data =props.location.state.data
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
   
	function handleAnswerOptionClick(answer,value){
		if (value===answer) {
			setScore(score + 1);
            console.log("Correct!")
		}
       
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
 

    {success === true?
        <>
        {showScore ? (
				<div className='score-section'>
					You scored {score} out of {data.length}
				</div>
			) : (<>
         Exam Name: {name}<br/>
         Instructor: {instructor} <br/> 
          <span>Question:{currentQuestion + 1}</span><br/>
          {data[currentQuestion].question} <br/> 
            <button value={1} onClick={(e) => handleAnswerOptionClick(data[currentQuestion].answer.toString(), e.target.value)} >{data[currentQuestion].answer1}</button><br/>
            <button value={2} onClick={(e) => handleAnswerOptionClick(data[currentQuestion].answer.toString(), e.target.value)} >{data[currentQuestion].answer2}</button><br/>
            <button value={3} onClick={(e) => handleAnswerOptionClick(data[currentQuestion].answer.toString(), e.target.value)} >{data[currentQuestion].answer3}</button><br/>
            <button value={4} onClick={(e) => handleAnswerOptionClick(data[currentQuestion].answer.toString(), e.target.value)} >{data[currentQuestion].answer4}</button>
           </> )}
        </>
        :
        <>
            <h1>No Exam Created</h1>
        </>
    }
    </>
     
    )
}

export default AttendeesExam
