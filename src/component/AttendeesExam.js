import React from 'react'

function QandA(props){
    console.log(props.location.state)

    const success = props.location.state.status
    const name = props.location.state.name
    const data =props.location.state.data
    //Random Exam
      for(let i=data.length-1;i>0;i--){
            const j = Math.floor(Math.random()*(i+1));
            const temp = data[i];
            data[i]=data[j];
            data[j]=temp; 
        }
    
        
     
    
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
