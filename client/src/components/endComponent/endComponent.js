import React from "react";
import './endComponent.css';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

export const EndComponent = ({username, setUsername, score, setScore}) =>{

    const navigate = useNavigate();
    const saveScore = ()=>{
        Axios.post("http://localhost:3001/createHighscore", {
            username: username,
            score: score
        }).then(resp=> {
            alert("saved succeesfuly!");
            navigate("/highscores")
        })
    }

    
        const handleUsername = (e)=>{
            setUsername(e.target.value)
            if(username || username !== ""){
                document.getElementById('save-btn').style.display= "block";
            }else{
                document.getElementById('save-btn').style.display= "none";
            }
        }

        const playAgain = ()=>{
            setScore(0);
            navigate('/play')
        }

    return (
        <div className='end-container'>
            <div className="end-info">
                <p>You finished the quiz. </p>
                <p id="end-score">Score: </p>
                <p id="end-value">{score} </p>
                <p>Congratulations!</p>
            </div>
            <div className="end-btns">
                <p id="end-text">Write your name or username and save your score</p>
                <input id="end-username" className="end-input" type="text" placeholder='name' onChange={(e)=>handleUsername(e)}></input>
                <p className="end-input" id="save-btn" onClick={saveScore} disabled>Save</p>
                <p className="end-input" onClick={playAgain}>Play again</p> 
                <p className="end-input" onClick={()=>navigate("/highscores")}>Highscores</p> 
                <p className="end-input" onClick={()=>navigate("/*")}>Home</p>
            </div>
            
        </div>
    )
}