const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('hola');
});


//escuchar al puerto
app.listen(port, () => {
    console.log(`servidor andando en http://localhost:${PORT}`);
});