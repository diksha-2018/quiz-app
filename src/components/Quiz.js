import React,{useState,useContext} from 'react';
import {Questions} from "../helpers/QuestionBank";
import { QuizContext } from '../helpers/Contexts';


const Quiz = () => {
  const {score,setScore,setGameState}=useContext(QuizContext);
  const [currQuestion,setCurrentQuestion]=useState(0);
  const [optionChosen,setOptionChosen]=useState("");
  const nextQuestion=()=>{
    if(Questions[currQuestion].answer==optionChosen)
    {
      setScore(score+1);
    }
    setCurrentQuestion(currQuestion+1);
  }

  const finishQuiz=()=>{
    if(Questions[currQuestion].answer==optionChosen)
    {
      setScore(score+1);
    }
    setGameState("endScreen")
  }
  return (
    <div className="Quiz">
       <h3>{Questions[currQuestion].prompt}</h3>
       <div className="Options">
       <button onClick={()=>setOptionChosen("A")}>{Questions[currQuestion].optionA}</button>
       <button onClick={()=>setOptionChosen("B")}>{Questions[currQuestion].optionB}</button>
       <button onClick={()=>setOptionChosen("C")}>{Questions[currQuestion].optionC}</button>
       <button onClick={()=>setOptionChosen("D")}>{Questions[currQuestion].optionD}</button>
       </div>
       {currQuestion==Questions.length-1 ?(<button onClick={finishQuiz}>Finish Quiz</button>):(<button onClick={nextQuestion}>Next Question</button>)}
    </div>
  )
}

export default Quiz;