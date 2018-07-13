const mongoose = require('mongoose');
const db = mongoose.connection;
const Article = require('./model/article');


//https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
//add mongo install directory to system environment variables
//check database directory exists
//admin cmd
//"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="c:\data\db"
//[initandlisten] waiting for connections on port 27017



//mongoose.connection
mongoose.connect('mongodb://localhost:27017/article');

db.on('error', (err) =>{
    //error message of a failed connection
    console.log(err, 'this is the error message');
})

db.on('connection', () =>{
    console.log('mongoose is connected to mongodb');
})

//
Article.create(
    {
    title: 'Python',
    author: 'Shazad'
    },
    (err, article) => {
        if (err){ console.log(err) } 
        else { console.log(article) } //returns an article
    }
);

Article.find(
    {
        author: 'Shazad'
    },
    (err, articles)=>{
        console.log(articles);// returns an array of articles
    }
)

Article.update(
    {        author: 'Shahzad'    },
    {        $set: { author: 'Shahzad Kahn'}    },
    { multi : true },// options object is always last
    (err, updateArticle) => {
        if (err) { console.log(err) }
        else { console.log(updateArticle) }
    }
)

Article.remove(
    {title: 'Python'},
    (err, response) =>{
        console.log(response); //tells you if it was successful
    }
)

const array = [1,2,3]
array.push(1);