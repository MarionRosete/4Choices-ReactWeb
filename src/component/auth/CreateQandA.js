import {useState} from 'react'

function CreateQandA(props) {
    console.log(props.location.state);
    const exam = props.location.state
    const [question, setQuestion] = useState([]);
    const [answer1, setAnswer1] = useState([]);
    const [answer2, setAnswer2] = useState([]);
    const [answer3, setAnswer3] = useState([]);
    const [answer4, setAnswer4] = useState([]);
    const [answer, setAnswer] = useState([]);
    const [msg, setMsg] = useState([]);
    const handleQuestions = (e)=>{
       
        const qa = {question, answer1, answer2, answer3, answer4,answer};
        console.log(qa);
        fetch(`http://localhost:8000/api/dashboard/createqa/${exam.code}`,{
            headers:{"Content-Type":'application/json', "accept":'application/json',  Authorization: `Bearer ${localStorage.getItem('token')}`},
                method:'POST',
                body:JSON.stringify(qa),
        }).then(response=>response.json()).then(data=>setMsg(data.message));
        setQuestion("");
        setAnswer1("");
        setAnswer2("");
        setAnswer3("");
        setAnswer4("");
        setAnswer("")

    }
    return (
        <div>
                <div className="bg-blue-100 rounded-2xl p-8">
                    
                    <div className="flex flex-col bg-blue-100 justify-between rounded-2xl p-4 md:p-16 h-full">
                        <span className=" text-blue-800 font-large text-xl py-5 px-10">{exam.name}</span>
                        <p>Question</p>
                        {msg}
                        <textarea className="resize-none border rounded-md" rows="4" cols="50" type="text" required value={question} placeholder="Write your question here" onChange={(e)=>setQuestion(e.target.value)}/>
                        Choices
                        <div className="md:p-16 h-full gap-y-6 flex flex-col">
                        <span><input type="checkbox" value={1} onChange={(e)=>setAnswer(e.target.checked)}/><input className="h-5 p-6 border rounded-md" type="text" placeholder="Answer option 1" required value={answer1}  onChange={(e)=>setAnswer1(e.target.value)}/></span>
                        <span><input type="checkbox" value={2} onChange={(e)=>setAnswer(e.target.value)}/><input className="h-5 p-6 border rounded-md" type="text" placeholder="Answer option 2" required value={answer2}  onChange={(e)=>setAnswer2(e.target.value)}/></span>
                        <span><input type="checkbox" value={3} onChange={(e)=>setAnswer(e.target.value)}/><input className="h-5 p-6 border rounded-md" type="text" placeholder="Answer option 3" required value={answer3}  onChange={(e)=>setAnswer3(e.target.value)}/></span>
                        <span><input type="checkbox" value={4} onChange={(e)=>setAnswer(e.target.value)}/><input className="h-5 p-6 border rounded-md" type="text" placeholder="Answer option 4" required value={answer4}  onChange={(e)=>setAnswer4(e.target.value)}/></span>
                        <div className = "flex justify-end p-10">
                            <button className= "text-blue-900 hover:text-blue-600 font-medium text-lg px-4 py-1.5 items-end" onClick={()=> window.location.replace("/Dashboard")}>Cancel </button>
                            <button className= "block bg-blue-900 hover:bg-blue-600 shadow-lg text-white py-1.5 px-4 rounded-md " onClick={handleQuestions} >Submit </button>
                        </div>
                        </div>
               
                    </div>
                </div>
        </div>
    )
}

export default CreateQandA
