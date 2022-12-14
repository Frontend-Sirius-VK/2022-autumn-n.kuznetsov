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
    try {
        res.sendFile(path.join(__dirname, '.', 'index.html'));
    } catch (error){
        res.status(500).end();
    }
});


app.listen(port, function() {
    console.log(`Server listening port ${port}`);
});

app.get('/getRecipe', async (req, res) => {
    try {
        const result = await db.getRecipe();
        if (!result){
            res.status(500).end();
        }
        res.json(result);
    } catch (error){
        res.status(500).end();
    }
});

app.get('/getRecipeById/:id', async (req,res) => {
    const id = req.params.id;
    const result = await db.getRecipeById(id);
    res.json(result);
});

app.post('/create/recipe', async (req, res) => {
    const { url_image, name_recipe, category_recipe, time, description_recipe, author } = req.body;
    const id = await db.createRecipe(url_image, name_recipe, category_recipe, time, description_recipe, author);
    res.json({id})
})

app.put('/update/recipe/:id', async (req, res) => {
    const { id, url_image, name_recipe, category_recipe, time, description_recipe, author } = req.body;
    const result = await db.updateRecipe(id, url_image, name_recipe, category_recipe, time, description_recipe, author);
    res.json({result});
})

app.delete('/delete/recipe/:id', async (req, res) => {
    const { id } = req.body;
    const result = await db.deleteRecipe(id);
    res.json({result});
})