import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './homeComponent.css';
import highscoresImage from '../../media/images/highscores.png'

export const Home = ({setScore})=>{
    const navigate=useNavigate()
    const playAgain = ()=>{
        setScore(0);
        navigate('/play')
    }

    return(
        <div className="home-container">
            <div className="home-title">
                <h2 id="the-quiz">The Quiz</h2>
                <p id="title-description">Challenge your Knowledge</p>
            </div>
            <h4 id="are-you-ready">Are you ready?</h4>
            <div className="home-buttons">
                <Link to="/play"><p className="home-btn" onClick={playAgain}>Play</p></Link>
                <div className="highscores home-btn">
                    <Link to="/highscores"><p>Highscores</p></Link>
                    <img alt="crown" src={highscoresImage} ></img>
                </div>
                
            </div>
            
        </div>
    )
}