import React from 'react'
import {useHistory} from 'react-router-dom'
function QandA(props){
    const history = useHistory();
    console.log(props.location.state)

    const code = props.location.state.code
    const name = props.location.state.name
    const data =props.location.state.data
        
    console.log(data)
    return (
    <>
    
    {data.length === 0?
        <>
              <h1 className="font-bold text-2xl">Exam is Empty</h1>
              <button className="block bg-blue-900 hover:bg-blue-600 shadow-md text-white font-small py-1.5 px-4 rounded-md"onClick={()=>history.push({pathname:"/CreateQandA", state:{name:name, code:code}})}>Update</button>
              
        </>
        :
        <>
          
            Exam Name: {name}
          
          {data.map((item)=><div key={item.id}> {item.id}. {item.question}  <br/>
          {item.answer1}<br/>
          {item.answer2}<br/>
          {item.answer3}<br/>
          {item.answer4}<br/>
          Correct answer:{item.answer} </div>)}

        </>
    }
    </>
     
    )
}

export default QandA
