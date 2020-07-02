var mongoose = require('mongoose')

//lets conneect to our mongodb database for local
mongoose.connect('mongodb://localhost:27017/portfolio',{useUnifiedTopology: true,useNewUrlParser: true});

//before going live, uncomment this connection
//mongoose.connect('mongodb://portfolio:Chidiebere94@ds131784.mlab.com:31784/portfolio', {useUnifiedTopology: true,useNewUrlParser: true});

//lets check if the connection was not successful
mongoose.connection.on('error', console.error.bind(console, 'connection error'))

//if the connection was successful
mongoose.connection.once('open', function () {
    console.log('Database connection was successful')
})
