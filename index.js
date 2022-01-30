const express = require('express');
const app = express();
const mongoose = require('mongoose');
const HighscoresModel = require('./modules/highscores');
const cors= require('cors');
const path = require("path");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
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

const PORT = process.env.PORT || 3001;


app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(PORT, ()=>{
    console.log("Server is running in port 3001 successfuly!")
})