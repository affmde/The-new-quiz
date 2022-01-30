import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { useState } from "react";
import { EndComponent } from "./components/endComponent/endComponent";
import {GameComponent} from './components/gameComponent/gameComponent'
import { Highscores } from "./components/highscoresComponent/highscoresComponent";
import {Home} from './components/homeComponent/homeComponent';


function App() {

  const [score, setScore]= useState(0);
  const [username, setUsername]= useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home setScore={setScore}/>} ></Route>
          <Route path="/play" element={<GameComponent username={username} setUsername={setUsername} score={score} setScore={setScore} />} ></Route>
          <Route path="/highscores" element={<Highscores />}></Route>
          <Route path="/end" element={<EndComponent username={username} score={score} setUsername={setUsername} setScore={setScore} />}></Route>
          <Route path="/highscores" element={<Highscores />}></Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
