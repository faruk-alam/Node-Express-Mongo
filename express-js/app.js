const express = require('express');
const app = express();
const morgan = require('morgan');

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})
//register view engine

// middileware
// app.use((req,res,next) =>{
//     console.log('Request has made :')
//     console.log('host :', req.hostname);
//     console.log('path :', req.path);
//     console.log('method :', req.method);
//     next();
// });

// thirt party middleware
// app.use(morgan('tiny'));
// middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));
app.set('view engine', 'ejs'); 

// app.set('views', path.join(__dirname, 'views','index.ejs'));

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},

      ];
    res.render('index',{title: 'home',blogs});
});

app.get('/about', (req, res) => {
    res.render('about',{title: 'about'})
});
app.get('/blogs/create', (req, res) => {
    res.render('create',{title: 'create blog'})
});


app.use((req, res) => {
    res.status(404).render('404',{title: '404'})
});
