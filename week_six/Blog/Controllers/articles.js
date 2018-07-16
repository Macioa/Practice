const express = require('express');
const router = express.Router();

const Article = require('../Models/articles');
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
    res.render('articles/new.ejs');
});

router.get('/:id', (req, res) =>{
    Article.findById(req.params.id, (err, article)=>{
        if (article){
            res.render('articles/show.ejs', {
                article: article
            })
        } else
        console.error(chalk.red('Could not find article with id ')+chalk.grey(`${req.params.id}`));
    })
})

router.post('/', (req, res) =>{
    console.log(req.body);
    Article.create(req.body, (err, createdArticle) =>{
        if (err){
            console.error(err)
        }
        else {
            console.log(createdArticle);
            res.redirect('/');
        }
    });
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