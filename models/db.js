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
        const res = await pool.query('Select * from recipes');
        return res.rows;    

    } catch (error) {
        console.log(error);
    }
}

module.exports = {getRecipe}
