const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.json());

const post = require('./controllers/post.js');

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

//main route with a simple h1 inside as a response
app.get('/', (req,res) =>{
    res.send('<h1>Benvenuto nel mio blog!</h1>');
})

//posts GET route with index as a controller from the posts controller
app.get('/posts', post.index);

//posts POST route to write inside the posts.json file (only accepts a proper object inside the request body)
app.post('/posts', post.create);
app.listen(port, host, () => {
    console.log(`http://${host}:${port}`);
})