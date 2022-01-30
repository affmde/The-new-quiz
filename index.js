const express = require('express');
const app = express();
const mongoose = require('mongoose');
const HighscoresModel = require('./modules/highscores');
const cors= require('cors');

mongoose.connect("mongodb+srv://affmde:Andremiranda1@affm.795qg.mongodb.net/myquizz?retryWrites=true&w=majority")
app.use(express.json());
app.use(cors());

app.get("/getHighscores", (req, res)=>{
    HighscoresModel.find({}, (err, result)=>{
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
})

app.get("/getTop5Highscores", async (req, res)=>{
    let result =null;
    await HighscoresModel.find()
    .sort({score: -1})
    .limit(5)
    .then(scores => {
      result=scores
    })
    res.json(result)
})



app.post("/createHighscore", async (req, res)=>{
    const highscore= req.body;
    const newHighscore = new HighscoresModel(highscore);
    await newHighscore.save();
    res.json(highscore)
})

app.listen(3001, ()=>{
    console.log("Server is running in port 3001 successfuly!")
})