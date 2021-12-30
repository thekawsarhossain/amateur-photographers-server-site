const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

// port here 
const port = process.env.PORT || 5000;

// using middlewere here 
app.use(express.json());
app.use(cors());

app.get('/home', (req, res) => {
    res.json('Hello World')
})

// listening port here 
app.listen(port, () => console.log(`listening port ${port}}`))