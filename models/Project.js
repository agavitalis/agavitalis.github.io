var mongoose = require('mongoose')
const Schema = mongoose.Schema;

const projectSchema = new Schema({

    title: String,
    discription: {
        type: String,
    },
    picture: {
        type: String,
    },
    category:{
        type: String
    }
  
}, { timestamps: true })

module.exports = mongoose.model("projects", projectSchema)
