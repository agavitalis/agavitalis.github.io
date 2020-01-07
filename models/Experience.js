const mongoose = require('mongoose')

const experienceSchema = new mongoose.Schema({

    title: String,
    start_date: {
        type: String,
    },
    stop_date: {
        type: String,
    },
    roles: {
        title: String,
        responsibilities:String
    },
   
})

module.exports = mongoose.model("experience", experienceSchema)
