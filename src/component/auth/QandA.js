import React from 'react'

function QandA(props){
    console.log(props.location.state)

    const success = props.location.state.status
    const name = props.location.state.name
    const data =props.location.state.data
    
   console.log(data)
    return (
    <>
    
    {success === true?
        <>
         Exam Name: {name}
          
            {data.map((item)=><div key={item.id}> {item.id}. {item.question} 
            <br/>{item.answer1}<br/>{item.answer2}<br/>{item.answer3}<br/>{item.answer4}</div>)}

        </>
        :
        <>
            <h1>No Exam Created</h1>
        </>
    }
    </>
     
    )
}

export default QandA
