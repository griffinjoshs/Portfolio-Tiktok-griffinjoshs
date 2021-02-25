const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000;

app.use(cors());

var corsOptions = {
    origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

app.listen(port, () => console.log(`http://localhost:${PORT}`))
