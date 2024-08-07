const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req,res)=>{
    //lodash

    const num = _.random(0, 20);
    console.log(num);


    const greet = _.once(() =>{
        console.log('hello');
    });
  
    greet();
    greet();
    //set header content type

    res.setHeader('Content-Type','text/html');

    //send an html file directly

    let path = './views'
    switch(req.url) {
        case '/':
            path = path+'/index.html';
            //status coes 200:ok 300:redirecting 400:error 500:server
            res.statusCode = 200;
            break;
        case '/about':
            path = path+'/about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
                
            res.statusCode = 301;
            res.setHeader('Location','/about')
            res.end();
            break;
        default:
            path = path+'/404error.html';
            res.statusCode = 400;
            break;
    }

    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.write(data);
            //if its only one thing we can directly send it to end method
            res.end();
        }
    })
    

});


server.listen(3000, 'localhost',() =>{
    console.log('we are listening the requests on port 3000');
});

