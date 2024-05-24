const express = require('express');
const app = express();
app.use(express.static('public'));

const post = require('./controllers/post.js');

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

//main route with a simple h1 inside as a response
app.get('/', (req,res) =>{
    res.send('<h1>Benvenuto nel mio blog!</h1>');
})

//posts route with index as a controller from the posts controller
app.get('/posts', post.index);

app.listen(port, host, () => {
    console.log(`http://${host}:${port}`);
})