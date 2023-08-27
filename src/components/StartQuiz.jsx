import { useEffect, useState } from "react"

export default function StartQuiz(props)
{
    
    
    return(
        <div className="container">
            <h1>QuizIT</h1>
            <p>Test Your IT Knowledge</p>
            <button onClick={props.startQuiz} className="btn btn-outline">Start quiz</button>
        </div>
    )
}