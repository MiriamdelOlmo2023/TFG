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

// // Función para insertar un archivo en la base de datos
// async function insertarArchivo(nombre, tipo, rutaArchivo) {
//     try {
//         const imageData = fs.readFileSync(rutaArchivo);

//         const query = 'INSERT INTO media (nombre, tipo, archivo) VALUES ($1, $2, $3)';
//         const values = [nombre, tipo, imageData];

//         await pool.query(query, values);
//         console.log('Archivo insertado correctamente en la base de datos.');
//     } catch (error) {
//         console.error('Error al insertar archivo:', error);
//     }
// }

// // Ejemplo de cómo usar la función para insertar un archivo
// insertarArchivo('1', 'imagen', 'libro/1.png');

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

