const express = require('express');
const { Pool } = require('pg');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// Ruta para servir archivos estáticos (HTML, CSS, JS, imágenes, etc.)
app.use(express.static('public'));

// Configuración de la conexión a la base de datos
const pool = new Pool({
    connectionString: 'postgres://yqahmjns:4-aEBCaFbQXkuMVPg9r5Cad6Q-CnqSSK@flora.db.elephantsql.com/yqahmjns',
    ssl: {
        rejectUnauthorized: false
    }
});



// Endpoint de ejemplo para obtener datos de la base de datos
app.get('/data', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM POKEMON');
        const results = { 'results': (result) ? result.rows : null };
        res.json(results);
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

