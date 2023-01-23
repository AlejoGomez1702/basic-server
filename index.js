const express = require('express');
const app = express();

// GET
app.get('/', ( req, res ) => {
    return res.json({
        message: 'Hola mundo'
    });
});

app.listen( 5000, () => {
    console.log("Ejecutandose en puerto 5000");
});