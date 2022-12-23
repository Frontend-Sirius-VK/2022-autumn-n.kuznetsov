const Pool = require('pg').Pool
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
})



async function getRecipe() {
    try {
        const res = await pool.query('SELECT * FROM recipes');
        return res.rows;    
    } catch (error) {
        console.log(error);
    }
}

async function getRecipeById(id) {
    try {
        const result = await pool.query('SELECT * FROM recipes WHERE id = $1', [id]);
        return result.rows;
    } catch (error) {
        console.log(error);
    }
}
async function createRecipe(url_image, name_recipe, category_recipe, time, description_recipe, author) {
    try {
        const result = await pool.query(
            'INSERT INTO recipes (url_image, name_recipe, category_recipe, time, description_recipe, author) \ ' +
            'VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
            [url_image, name_recipe, category_recipe, time, description_recipe, author]
        )
        return result.rows[0].id
    } catch (error) {
        console.log(error)
    }
}

async function updateRecipe(url_image, name_recipe, category_recipe, time, description_recipe, author, id) {
    try {
        await pool.query(
            'UPDATE recipes SET url_image = $1, name_recipe = $2, category_recipe = $3, \
            time = $4, description_recipe = $5, author = $6 WHERE id = $7',
            [url_image, name_recipe, category_recipe, time, description_recipe, author, id]
        )
    } catch (error) {
        console.log(error)
    }
}

async function deleteRecipe(id) {
    try {
        await pool.query('DELETE FROM recipes WHERE id = $1', [id])
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getRecipe,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
}
