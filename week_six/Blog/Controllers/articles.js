const express = require('express');
const router = express.Router();

const Article = require('../Models/articles');
const Authors = require('../models/authors')

const chalk = require('chalk');

router.get('/', (req, res) =>{
    Article.find({}, (err, articles) =>{
        if (err)
            console.error(err);
        res.render('articles/index.ejs', {
            articles: articles
        });
    });
});

router.get('/new', (req, res) =>{
    Authors.find({}, (err, allAuthors)=>{
        res.render('articles/new.ejs',{
            authors: allAuthors
        });
    });
});

// display the authoer with a link on the article 

router.get('/:id', (req, res) =>{
    Article.findById(req.params.id, (err, foundArticle)=>{
        Author.findOne({'articles._id':req.params.id}, (err, foundAuthor)=>{
            res.render('articles/show.ejs',{
                article: foundArticle,
                author: foundAuthor
            });
        });
    });
});

//create a new article and push a copy into the author's article array
router.post('/', (req, res) =>{
    Authors.findById(req.body.authorId, (err, foundAuthor)=>{
        Article.create(req.body, (err, createdArticle) =>{
            if (err){
                console.error(err)
            }
            else {
                foundAuthor.articles.push(createdArticle);
                foundAuthor.save((err,data)=>{
                    res.redirect('/articles');
                })
                console.log(createdArticle);
                res.redirect('/');
            }
        });
    })

    console.log(req.body);

    //res.send('server received request');
    //res.redirect('/');
   // res.send('received request');
});

router.delete('/:id', (req, res) =>{
    Article.findByIdAndDelete(req.params.id, (err, updatedArticle) =>{
		if(err) {
            console.error(chalk.red(err));
            console.error(chalk.red('Could not delete article id ')+chalk.grey(''));
		} else {
			console.log(chalk.green('Deleted article id ')+chalk.grey(req.params.id));
			res.redirect('/');
        }
    })
});


router.get('/:id/edit', (req,res)=>{
    Article.findById(req.params.id, (err, article)=>{
        res.render('articles/edit.ejs', {
            article: article
        })
    })
})

router.put('/:id', (req, res) =>{
    Article.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedArticle) => {
		if(err) {
            console.error(chalk.red(err));
            console.error(chalk.red('Could not update article id ')+chalk.grey(req.params.id));
		} else {
			console.log(chalk.green('Updated article id ')+chalk.grey(req.params.id));
			res.redirect('/');
        }
    });
});

module.exports = router;