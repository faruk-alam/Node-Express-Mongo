const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
   // console.log(req);
   // console.log(req.url, req.method)
   // set header content type
    // res.setHeader('Content-Type', 'text/plain');
    // res.write('Hello, node.js!');
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./viewpage/index.html', (err, data) => {
        if(err) {
            console.log(err);
        }else{
            // res.write(data);
            res.end(data);
        }
    // res.write('<head><link rel="stylesheet" href="#"></link></head>');
    // res.write('<h1>Hello, node.js!</h1>');
    // res.write('<p>This is a paragraph</p>');
    // res.end();

})
})
server.listen(3000, 'localhost', () => {
    console.log('Server is listening on port 3000');
})
