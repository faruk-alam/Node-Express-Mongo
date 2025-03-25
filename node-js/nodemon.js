// to install nodemon globally :
// npm install -g nodemon

// to install nodemon locally(lodash - 3rd party packages) :
// npm install lodash
const http = require('http');
const fs = require('fs');
const _ = require('lodash');


const server = http.createServer((req, res) => {
   // console.log(req);
   // console.log(req.url, req.method)
   // set header content type

    // lodash
    const num = _.random(0, 20);
    console.log(num);

    const check = _.once(() => {
        console.log('hello');
    })
    check();
    res.setHeader('Content-Type', 'text/html');
    let path = './viewpage/';
    switch (req.url) {
        case '/':
            path += 'index.html';  
            res.statusCode = 200;        
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
    
        case '/blog':
            path += 'blog.html';
            res.statusCode = 200;
            break;
    
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
        }else{
            // res.write(data);
            res.end(data);
        }
})
})
server.listen(3000, 'localhost', () => {
    console.log('Server is listening on port 3000');
})
