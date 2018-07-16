const port = 3000;

const express = require('express');
const app = express();

require('./db/db');


app.get('/', (req, res) =>{
    res.render('index.ejs');
})

app.listen(port, ()=>{
    console.log(`server listening on ${port}`);
})