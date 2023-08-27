import {useState, useEffect} from "react"

export default function QuizQuestion(props)
{
    var txt = document.createElement("textarea");
    function decode(toDecode)
    {
        txt.innerHTML = toDecode;
        return txt.value;
    }

    const styles = {
        color: props.showAnswer? "green":"black"
    }

    const options = [];
    for(let i=0; i<props.options.length; i++)
    {
        let answerColourFeedback = "label"
        if(props.showAnswer)
        {
            answerColourFeedback = "neutral"
            if (props.options[i] === props.correct_option)
                answerColourFeedback = "correct"
            if ((props.selected === props.options[i]) && (props.selected != props.correct_option))
                answerColourFeedback = "incorrect" 
        }
        

        options.push(
        <input
        required
        type="radio"
        id={`${props.name}-${i}`}
        name={props.name}
        value={props.options[i]}
        onChange={props.handleChange}
        checked={!props.showAnswer && props.selected === props.options[i]}
        disabled={props.showAnswer? true : false}
        className="quiz-input"
        
        />)

        let selectedClass = "";
        if(props.showAnswer)
        {
            selectedClass = "";
        }
        else{
            selectedClass = "";
        }

        options.push(
            <label 
            htmlFor={`${props.name}-${i}`}
            className={`${answerColourFeedback}`}
            ><span 
            className="option-text">
                {decode(props.options[i])}</span></label>
        )
    }

    return(
        <div className="quiz-question">
            <h2>{decode(props.question)}</h2>
            <div className="options">
                {options}
            </div>
            <hr/>
        </div>
        )
}

/*<input
             required
             type="radio" 
             id={`${props.name}-0`}
             name={props.name}
             value = {props.options[0]}
             onChange={props.handleChange}
             checked={props.selected === props.options[0]}/>
            <label htmlFor={`${props.name}-0`}>{decode(props.options[0])}</label>

            <input 
            required
            type="radio" 
            id={`${props.name}-1`} 
            name={props.name}
            value = {props.options[1]}
            onChange={props.handleChange}
            checked={props.selected === props.options[1]}/>
            <label htmlFor={`${props.name}-1`}>{props.options[1]}</label>

            <input 
            required
            type="radio" 
            id={`${props.name}-2`} 
            name={props.name}
            value = {props.options[2]}
            onChange={props.handleChange}
            checked={props.selected === props.options[2]}/>
            <label htmlFor={`${props.name}-2`}>{props.options[2]}</label>

            <input 
            required
            type="radio" 
            id={`${props.name}-3`} 
            name={props.name}
            value = {props.options[3]}
            onChange={props.handleChange}
            checked={props.selected === props.options[3]}/>
            <label htmlFor={`${props.name}-3`}>{props.options[3]}</label>*/