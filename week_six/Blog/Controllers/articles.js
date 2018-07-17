const express = require('express');
const router = express.Router();

const Article = require('../models/articles')
const Author = require('../models/authors')

//show all authors created in author index
//=======================================================
router.get('/', (req, res) => {
  Article.find({}, (err, foundArticles) => {


    res.render('articles/index.ejs', {
      articles: foundArticles
    })
  })

})



router.get('/new', (req, res)=>{
    Author.find({}, (err, allAuthors)=>{
        res.render('articles/new.ejs', {
            authors: allAuthors
        });
    });
});




router.get('/:id', (req, res)=>{
    Article.findById(req.params.id, (err, foundArticle)=>{
        Author.findOne({'articles._id':req.params.id}, (err, foundAuthor)=>{
            res.render('articles/show.ejs', {
                author:foundAuthor,
                article: foundArticle
            });
        })
    });
});


router.get('/:id/edit', (req, res) => {
  Article.findById(req.params.id, (err, foundArticle) => {
    res.render('articles/edit.ejs', {
      article: foundArtcile
    })
  })
})


//=========================================
router.put('/:id', (req, res) => {
  console.log(' am I hitting the put route') //
  // If it is hitting the route, I want to see
  console.log(req.body)


  Article.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedArticle) => {
    if(err){
      res.send(err);
    } else {
        // Check to see if it is updating correctly
        console.log(updatedArticle)
        res.redirect('/articles');
    }
  })

});





router.post('/', (req, res)=>{
    Author.findById(req.body.authorId, (err, foundAuthor)=>{
        Article.create(req.body, (err, createdArticle)=>{ 
            foundAuthor.articles.push(createdArticle);
            foundAuthor.save((err, data)=>{
                res.redirect('/articles');
            });
        });
    });
});



router.delete('/:id', (req, res) => {

  console.log(req.params.id, ' this is params in delete')
  Article.findByIdAndRemove(req.params.id, (err, deletedArticle) => {
    if(err){
      console.log(err, ' this is error in delete')
      res.send(err);
    } else {
      console.log(deletedArticle, ' this is deletedarticle');
      res.redirect('/articles');
    }
  });
})

module.exports = router;