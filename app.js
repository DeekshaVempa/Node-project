const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

//express app

const app = express();

//connection to db

const dbURI = 'mongodb+srv://Deevempati:Vastflute299.@node1.bki1ggc.mongodb.net/node-project?retryWrites=true&w=majority&appName=Node1';
mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)=> app.listen(3000)) 
    .catch((err)=> console.log(err));

// Middleware to serve static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use( morgan('dev'));



//register vire engine to live watch
//view is default for ejs
app.set('view engine','ejs');
//if not named vies use app.set('views','foldername');

//listen for requests
//default local hoost

//next is used to move to the next function in middleware app.use((req,res,next)=>{
    //console.log('in the next middleware');
    
    //next();
   // });

//mongoose and mongo sandbox routes

/*app.get('/add-blog',(req,res)=>{
    const blog = new Blog({
        title: 'new blog',
        snippet: 'about new',
        body: 'new blog is here'
    });

    blog.save()
        .then((result)=>{
            res.send(result)
        })
        .catch((err) =>{
            console.log(err);
        });
});

app.get('/all-blogs',(req,res)=>{
    Blog.find()
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            console.log(err);
        }); 
});
app.get('/single-blogs',(req,res)=>{
    Blog.findById('66b0e85500cfd47e7ab37940')
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            console.log(err);
        }); 
});*/

//blog routes
app.use('/blogs',blogRoutes);


app.get('/',(req,res)=>{
    //it automatically set the header for content type and status code
    // root is the root which is node-project
    //res.send('<p> HOME PAGE</p>');
    //res.sendFile('./views/index.html',{ root: __dirname });
    //rendering views
    /*const blogs =[
        {title:'Health is wealth', snippet:'hey how are you health is important for us'},
        {title:'Health', snippet:'hey how are you health is important for us'},
        {title:'wealth', snippet:'hey how are you health is important for us'},
    ];
    res.render('index',{ title: 'Home', blogs});*/
    res.redirect('/blogs')

});

app.get('/about',(req,res)=>{
    //it automatically set the header for content type and status code

    //res.send('<p> ABOUT PAGE</p>');
    //res.sendFile('./views/about.html',{ root: __dirname });
    res.render('about',{ title: 'About'})  
});

//app.get('/about-me',(req,res)=>{
 //   res.redirect('/about');
//});
//blogroutes
  