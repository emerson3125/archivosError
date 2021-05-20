require('./connection');
const express = require('express');
const app = express();

//server entiende json
app.use(express.json())

//configuraciones
app.set('PORT', 3000);

//importar rutas
const routes = require('./routes/user');

//cargar rutas

app.use(routes)

app.get('/hola', (req, res) => {
    console.log('hola');
    res.send('hola')
})

app.listen(app.get('PORT'), _ =>{
    console.log('server on port', app.get('PORT'))
});