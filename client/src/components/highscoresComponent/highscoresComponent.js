
import React, { useEffect, useState } from "react";
import './highscoresComponent.css';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";



export const Highscores = () =>{

    const [highscores, setHighScores] = useState([])
    const navigate= useNavigate()

    
    useEffect(()=>{
        let cancel=false
        Axios.get("http://localhost:3001/getTop5Highscores").then(resp=>{
            if(cancel)return;
            setHighScores(resp.data)
            console.log(resp.data)
        })
        return () => { 
            cancel = true;
          }
    },[])
    return(
        <div className="highscores-container">
            <h3>Highscores</h3>
            <div className="show-highscores">
                {highscores.map(player=>
                <><div className="playerName">
                    <p id="highscore-position">{highscores.indexOf(player)+1} </p>
                    <p key={player._id} id="highscore-name">{player.username} </p>
                    <p id="highscore-score">{player.score}</p>
                </div>
                </>)}
            </div>
            <div>
                <p id="highscore-home"onClick={()=>navigate("/home")}>Home</p>
            </div>
        </div>
    )
}