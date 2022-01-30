import React, {useState, useEffect } from 'react';
import './gameComponent.css';
import {questionary} from '../../questions/questions';
import { useNavigate } from 'react-router-dom';


export const GameComponent = ({username, setUsername, score, setScore})=>{

    
    
    const [totalQuestions, setTotalQuestions] = useState(1);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState(0);
    const [answeredQuestions, setAnsweredQuestions]= useState([])
    const [questionIndex, setQuestionIndex] = useState(Math.floor(Math.random()*questionary.length));
    const [consecutiveCorret, setConsecutiveCorret] = useState(0);
    

    const navigate = useNavigate();
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
      
      let randomQuestions = questionary;


      useEffect(()=>{
        shuffleArray(randomQuestions);
        console.log(randomQuestions)
        setQuestionIndex(0);
    },[])
      
    const nextQuestion = (questionID, questionAnswer)=>{
        if(totalQuestions===15){
            navigate("/end")
        }
        setAnsweredQuestions([...answeredQuestions, randomQuestions[questionIndex].id])
        console.log(randomQuestions)
        setTotalQuestions(totalQuestions+1);

        //control the score
        if(questionID === questionAnswer){
            setConsecutiveCorret(consecutiveCorret+1)
            if(consecutiveCorret >=10){
                setScore(score +300)
            }else if(consecutiveCorret >=6){
                setScore(score +150)
            }else if(consecutiveCorret >=4){
                setScore(score + 70)
            }else if(consecutiveCorret >= 2){
                setScore(score+35)
            }else{
                setScore(score+20)
            }
            setCorrectAnswers(correctAnswers + 1);
        }else{
            setWrongAnswers(wrongAnswers +1);
            setConsecutiveCorret(0)
        }
        
        setQuestionIndex(questionIndex+1)
        console.log(questionIndex)
        
    }


    

    return(
        <div className='game-container'>
            <div className='header'>
                <h2 id="game-quiz">The Quiz</h2>
                <div className='game-stats'>
                    <div className='left'>
                        <h5 id="your-score">Your score:</h5>
                        <p id="score-value">{score}</p>
                    </div>
                    <div className='right'>
                        <p><strong>Question number:</strong>   {totalQuestions}</p>
                        <p><strong>Right questions:</strong>   {correctAnswers}</p>
                        <p><strong>Wrong answers:</strong>   {wrongAnswers} </p>
                    </div>
                </div>
                
            </div>
            <div className='game-part'>
                <div className='question'>
                    <h4>{randomQuestions[questionIndex].question}</h4>
                </div>
                <div className='answers'>
                    {randomQuestions[questionIndex].choices.map(choice => <p className='options' key={choice.id} onClick={()=>nextQuestion(choice.id, randomQuestions[questionIndex].answer)}>{choice.option}</p>)}
                </div>
            </div>
        </div>
    )
}