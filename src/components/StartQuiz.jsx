import { useEffect, useState } from "react"

export default function StartQuiz(props)
{
    
    
    return(
        <div className="container">
            <h1>QuizIT</h1>
            <p>Some description if needed</p>
            <button onClick={props.startQuiz} className="btn btn-outline">Start quiz</button>
        </div>
    )
}