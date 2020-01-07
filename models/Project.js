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
    category:{type: Schema.Types.ObjectId, ref: 'Category'}
  
})

module.exports = mongoose.model("projects", projectSchema)
