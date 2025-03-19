const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
   // console.log(req);
   // console.log(req.url, req.method)
   // set header content type
    res.setHeader('Content-Type', 'text/html');
    let path = './viewpage/';
    switch (req.url) {
        case '/':
            path += 'index.html';          
            break;
        case '/about':
            path += 'about.html';
            break;
        case '/blog':
            path += 'blog.html';
            break;
    
        default:
            path += '404.html';
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
