import React from 'react'

function QandA(props){
    console.log(props.location.state)
    const data =props.location.state
    
   
    return (
     <>
           <ul className=" text-blue-800 font-medium text-xl py-5 px-10">
            Question:
            {data.map((item)=><li key={item.id}> {item.question}</li>)}
            Choices:
            {data.map((item)=><li key={item.id}> {item.answer1}<br/>{item.answer2}<br/>{item.answer3}<br/>{item.answer4}</li>)}
           </ul>
     
       </>
     
    )
}

export default QandA
