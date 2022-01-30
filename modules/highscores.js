const mongoose = require('mongoose');

const highscoresSchema = new mongoose.Schema({
    username:{
        type: String
    },
    score:{
        type: Number
    }
})

const HighscoresModel = mongoose.model("highscores", highscoresSchema)
module.exports = HighscoresModel