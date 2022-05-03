// Usando objeto express
const express = require('express')

// App de Express
const app = express()

// Puerto en que vamos a ver nuestra app: localhost: 3000
const port = 3000

// path inicial, responderá a la url localhost:3000
app.get('/', (req, res) =>{
    res.send('Hello World')
})

// Agregando una nueva ruta localhost:300/launchx
app.get('/lauchx', (req, res) =>{
    res.send('Bienvenidos a LaunchX')
})


// Con esto inicializamos esta app
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
})