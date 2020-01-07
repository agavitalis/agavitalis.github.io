var mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({

    title: String,
    discription: {
        type: String,
    },

})

module.exports = mongoose.model("categories", categorySchema)
