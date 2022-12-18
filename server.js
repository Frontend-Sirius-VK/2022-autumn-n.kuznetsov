const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();
const app = express();

app.use(morgan('dev'));
app.use(express.static('.'));
app.use(express.json());

const port = process.env.PORT || 3000;

const db = require('./models/db.js')


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '.', 'index.html'));
})

app.listen(port, function() {
    console.log(`Server listening port ${port}`);
})

app.get('/getRecipe', async (req, res) => {
    const result = await db.getRecipe();
    console.log(result);
    res.json(result);
});

