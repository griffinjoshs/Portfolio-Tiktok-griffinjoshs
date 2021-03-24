const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 8000;
const mongoose = require('mongoose')
require("dotenv").config({path: './config.env'})


var corsOptions = {
    origin: 'http://localhost:3000',
};

// require('./server/config/mongoose.config')

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  }

require('./server/routes/subscriber.routes')(app)
require('./server/routes/nodeMailerRoutes')(app)

const connectionString = process.env.DB_CONNECTION.replace('<password>', process.env.DB_PASSWORD).replace('<dbname>', process.env.DB_NAME)
mongoose
// .connect('mongodb://localhost/grifftokdb'
.connect(connectionString || 'mongodb://localhost/grifftokdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,    
})
.then(() => console.log('Connected To Database!!'))
.catch(err => console.log('error:' + err))

app.listen(PORT, () => console.log(`http://localhost:${PORT}/api`))
