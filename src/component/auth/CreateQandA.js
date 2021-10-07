import {useState} from 'react'

function CreateQandA(props) {
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
    return (
      <>
        <div class="min-h-screen p-20 bg-white">
            <div class="flex flex-col justify-center bg-blue-100 rounded-2xl p-4 md:p-16 h-full">
              <span class=" text-blue-900 font-medium text-xl py-5 px-10">Earth Science</span>
              <span class=" text-blue-900 font-medium text-sm px-10 py-4">Question 1</span>
              <input class="h-5 p-6 border rounded-md" type="text" placeholder="Write Question here" />

                      <div className="flex grid grid-cols-2  place-items-center gap-y-3 gap-x-3 p-4">
                            <input type="checkbox" class="w-8 h-5 checked:bg-white checked:border "/>
                            <input className="bg-blue-900 text-white h-5 p-6 border rounded-lg" type="text" placeholder="Write Answer" />
                            <input type="checkbox" class="w-8 h-5 checked:bg-white checked:border "/>
                            <input className="bg-blue-900 text-white h-5 p-6 border rounded-lg" type="text" placeholder="Write Answer" />
                            <input type="checkbox" class="w-8 h-5 checked:bg-white checked:border "/>
                            <input className="bg-blue-900 text-white h-5 p-6 border rounded-lg" type="text" placeholder="Write Answer" />
                            <input type="checkbox" class="w-8 h-5 checked:bg-white checked:border "/>
                            <input className="bg-blue-900 text-white h-5 p-6 border rounded-lg" type="text" placeholder="Write Answer" />
                      </div>

                      <div class="px-10 py-4">
                            <button class="block bg-blue-900 text-white hover:text-blue-500 font-small text-sm px-4 py-1.5 items-end rounded-md px-12">Add question </button>
                      </div>

                      <div class = "flex justify-end p-10">
                          <button class= "text-blue-900 hover:text-blue-600 font-medium text-lg px-4 py-1.5 items-end"> Cancel </button>
                          <button class= "block bg-blue-900 hover:bg-blue-600 shadow-lg text-white py-1.5 px-4 rounded-md ">Next </button>
                      </div>

            </div>
          </div>
          </>
    )
}

export default CreateQandA
