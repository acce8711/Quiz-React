import QuizQuestion from "./QuizQuestion.jsx"
import {useState, useEffect} from "react"
import { nanoid } from 'nanoid'

export default function Quiz()
{
    const [showAnswer, setShowAnswer] = useState(false);
    const [playAgain, setPlayAgain] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [formData, setFormData] = useState(resetSelected)

    const [quizData, setQuizData] = useState([]);


    function resetSelected()
    {
        return ({
            "0": "",
            "1": "",
            "2": "",
            "3": "",
            "4": "",
        }
        )
    }
    
    useEffect(() => {
        async function getQuizQuestions() {
            const res = await fetch("https://opentdb.com/api.php?amount=5&category=18&type=multiple")
            const data = await res.json()
            const newData = data.results.map(item => {
                const quizArr = [...item.incorrect_answers];
                const randNum = Math.floor(Math.random()*3);
                quizArr.splice(randNum, 0, item.correct_answer)
                return({...item, options: [...quizArr]})
            })
            setQuizData(newData)

        }
        getQuizQuestions()
    }, [playAgain])

    function updateForm(event)
    {
        const {value, name} = event.target;
        setFormData(prevValue => ({
            ...prevValue, [name.toString()] : value
        }))
        
    }


    const quizQuestions = quizData.map((item, index) => {
        return(<QuizQuestion
             name={index} 
             question={item.question}
             options={item.options}
             correct_option={item.correct_answer}
             key = {nanoid()}
             selected = {formData[index.toString()]}
             handleChange = {updateForm}
             showAnswer = {showAnswer}/>)
             
    })

    function handleSubmit(event)
    {
        event.preventDefault()
        setShowAnswer(true);
        let correct = 0;
        for(let i=0; i<quizData.length; i++)
        {
            if(quizData[i].correct_answer.localeCompare(formData[i.toString()]) == 0)
            {
                correct = correct+1;
            }
        }
        setCorrectAnswers(correct);    
        //setFormData(resetSelected);
    }

    function handleClick()
    {
        setShowAnswer(false)
        setPlayAgain(prevValue => !prevValue);
    }


    return(
        <div className="container">
        <form onSubmit={handleSubmit} className="quiz-container">
            {quizQuestions}
            {!showAnswer && 
            <button className="quiz-btn form-btn">Check answers</button>
            }
        </form>
            { showAnswer &&

            <div className="flex items-center gap-7">
                <p className="text-xl">You scored {correctAnswers}/5 correct answers</p>
                <button onClick={handleClick} className="quiz-btn">Play again</button>
            </div>
            }
        </div>
    )
}