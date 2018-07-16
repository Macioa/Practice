const port = 3000;

const express = require('express');
const app = express();

const methodoverride = require('method-override');
const bodyparser = require('body-parser');

require('./db/db');

app.use(methodoverride('_method'));
app.use(bodyparser.urlencoded({encoded: false}));

//app.use(bodyparcer);


const authorsController = require('./Controllers/authors');
app.use('/authors', authorsController);

const articlesController = require('./Controllers/articles');
app.use('/articles', articlesController);

app.get('/', (req, res) =>{
    res.render('index.ejs');
});

app.listen(port, ()=>{
    console.log(`server listening on ${port}`);
});