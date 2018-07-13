const mongoose = require('mongoose');
const schema = mongoose.Schema;


//mongoose schema types
const articleSchema = new schema({

    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    body: String,
    comments: [{body: String, commentDate: Date}],
    publishDate: {type: Date, default: Date.now},
    hidden: {
        votes: Number,
        favs: Number
    }
})


// Here mongoose injects your model into mongodb
// (collection, schema)
const Article = mongoose.model('Article', articleSchema);


module.exports = Article;