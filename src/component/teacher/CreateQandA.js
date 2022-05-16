import { useState} from 'react';

function CreateQandA(props) {
    const exam = props.location.state
    const [question, setQuestion] = useState('');
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');
    const [answer, setAnswer] = useState('');
    const [msg, setMsg] = useState([]);
    const handleQuestions = (e)=>{

        const qa = {question, answer1, answer2, answer3, answer4,answer};
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
        for (const checkbox of document.querySelectorAll('.myCheckBox')) {

            checkbox.checked = true
            checkbox.checked = false
            }
    }
    const choices = ()=> {
        let content = [];
        for(let i = 0; i < 4; i++){
            content.push( 
                <div key={i} className="flex justify-center items-center space-x-3">
                    <input  
                        type="checkbox" 
                        value={i+1} 
                        onChange={(e)=>setAnswer(e.target.value)}
                        checked={answer==i+1?true:false}
                    />
                    <input className="bg-blue-900 border rounded-md p-2 my-2 w-3/5" 
                        type="text" 
                        placeholder={`Answer option ${i+1} `}
                        required 
                        value={i+1==1?answer1:
                               i+1==2?answer2:
                               i+1==3?answer3:
                               i+1==4?answer4:null
                            }  
                        onChange={(e)=>
                            i+1==1?setAnswer1(e.target.value):
                            i+1==2?setAnswer2(e.target.value):
                            i+1==3?setAnswer3(e.target.value):
                            i+1==4?setAnswer4(e.target.value):
                            null
                        }
                    />
                </div>
            )
        }
        return content
    }
   
    
    return (
        <div className="md:px-40">
                <div className="bg-blue-100 rounded-2xl p-5 md:py-3 md:px-8">
                    
                    <div className="flex flex-col bg-blue-100 rounded-2xl space-y-8">
                        <div className="flex items-center text-blue-800 font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                            </svg>
                            <div className='p-3 space-x-10'> 
                                {exam.subject}, {exam.name}
                            </div>
                        </div>
                        {msg}
                    
                        <textarea className="resize-none border rounded-md" rows="4"  type="text" required value={question} placeholder="Write your question here" onChange={(e)=>setQuestion(e.target.value)}/>
                        <div>
                            {
                              choices()  
                            }
                        </div>
                        <div className = "flex justify-end p-3">
                            <button className= "text-blue-900 hover:text-blue-600 font-medium text-lg px-4 py-1.5 items-end" onClick={()=> window.location.replace("/Dashboard")}>Cancel </button>
                            <button className= "block bg-blue-900 hover:bg-blue-600 shadow-lg text-white py-1.5 px-4 rounded-md " onClick={handleQuestions} >Submit </button>
                        </div>
                      
               
                    </div>
                </div>
        </div>
    )
}

export default CreateQandA
