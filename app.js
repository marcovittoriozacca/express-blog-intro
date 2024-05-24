const express = require('express');

const app = express();

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

app.get('/', (req,res) =>{
    res.send('<h1>Benvenuto nel mio blog!</h1>');
})

app.get('/posts');

app.listen(port, host, () => {
    console.log(`http://${host}:${port}`);
})