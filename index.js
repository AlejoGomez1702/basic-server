const express = require('express');
const app = express();
app.use(require('body-parser').json());

// GET
app.get('/', ( req, res ) => {

    return res.json({
        message: 'Hola mundo'
    });
});

// POST
app.post('/', ( req, res ) =>{

    return res.json({
        ...req.body
    });
});

// PUT
app.put('/', ( req, res ) => {

    return res.json({
        ...req.body
    });
});

// DELETE
app.delete('/:id', ( req, res ) => {

    return res.json({
        ...req.params
    });
});

app.listen( 5000, () => {
    console.log("Ejecutandose en puerto 5000");
});