const express = require('express');
const router = express.Router();

const Author = require('../Models/authors');
const chalk = require('chalk');

router.get('/', (req, res) =>{
    Author.find({}, (err, authors) =>{
        if (err)
            console.error(err);
        res.render('authors/index.ejs', {
            authors: authors
        });
    });
});

router.get('/new', (req, res) =>{
    res.render('authors/new.ejs');
});

router.get('/:id', (req, res) =>{
    Author.findById(req.params.id, (err, author)=>{
        if (author){
            res.render('authors/show.ejs', {
                author: author
            })
        } else
        console.error(chalk.red('Could not find author with id ')+chalk.grey(`${req.params.id}`));
    })
})

router.post('/', (req, res) =>{
    console.log(req.body);
    Author.create(req.body, (err, createdAuthor) =>{
        if (err){
            console.error(err)
        }
        else {
            console.log(createdAuthor);
            res.redirect('/');
        }
    });
    //res.send('server received request');
    res.redirect('/');
    res.send('received request');
});

router.delete('/:id', (req, res) =>{
    Author.findByIdAndDelete(req.params.id, req.body, {new:true}, (err, updatedAuthor) =>{
		if(err) {
            console.error(chalk.red(err));
            console.error(chalk.red('Could not delete author id ')+chalk.grey(''));
		} else {
			console.log(chalk.green('Deleted author id ')+chalk.grey(req.params.id));
			res.redirect('/');
        }
    })
});


router.get('/:id/edit', (req,res)=>{
    Author.findById(req.params.id, (err, author)=>{
        res.render('authors/edit.ejs', {
            author: author
        })
    })
})

router.put('/:id', (req, res) =>{
    Author.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedAuthor) => {
		if(err) {
            console.error(chalk.red(err));
            console.error(chalk.red('Could not update author id ')+chalk.grey(req.params.id));
		} else {
			console.log(chalk.green('Updated author id ')+chalk.grey(req.params.id));
			res.redirect('/');
        }
    });
});

module.exports = router;