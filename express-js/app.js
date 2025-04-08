const express = require('express');
// express app
const app = express();
//listen for request
app.listen(3000);

// app.get('/', (req, res) => {
//     // res.send('<h1>Home Page</h1>');
//     res.sendFile('./demopage/index.html', {root: __dirname});
// });
app.get('/about', (req, res) => {
    // res.send('<h1>Home Page</h1>');
    res.sendFile('./demopage/about.html', {root: __dirname});
 });
// app.get('/blog', (req, res) => {
//     // res.send('<h1>Home Page</h1>');
//     res.sendFile('./demopage/blog.html', {root: __dirname});
// });

//redirects

app.get('/about-us', (req, res) => {
    res.redirect('/about');
});


// 404 page

app.use((req, res) => {
    res.sendFile('./demopage/404.html', {root: __dirname});
})
