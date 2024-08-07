const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
//blogroutes
router.get('/',(req,res)=>{
    Blog.find().sort({creayedAt: -1})
        .then((result)=>{
            res.render('index', { title: 'All Blogs', blogs: result })
        })
        .catch((err)=>{
            console.log(err);
        })
});
//rout parameters
router.post('/',(req,res)=>{
     const blog = new Blog(req.body);

     blog.save()
        .then((result)=>{
            res.redirect('/blogs')
        })
        .catch((err)=>{
            console.log(err)
        })
});
router.get('/create',(req,res)=>{
    res.render('create',{ title: 'Create new blog'});
});

router.get('/:id',(req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
    .then((result)=>{
        res.render('details', { blog: result, title:'Blog Details ' })
    })
    .catch((err)=>{
        console.log(err)
    });

})
router.delete ('/:id',(req,res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.json({redirect: '/blogs '})
    })
    .catch((err)=>{
        console.log(err)
    });

})


//404 page middlewear
//use is going to be runned at last express run code from top to bottom
//here if not matched to what we give it gives of use runs
router.use((req,res)=>{
    res.status(404).render('404',{ title: '404'});
}); 

module.exports = router;