//import required models
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Developer = require('./api/models/models');
const routes = require('./api/routes/routes');

const app = express();
const port= process.env.PORT  || 3000;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/DevelopersDB',{useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());
routes(app);
//target the home route to avoid 404
app.get('/',(req,res)=>{res.send('Welcome to the home route')});
//handling some http error that may occur
app.use((req,res)=>{
    res.status(404).send({url: req.originalUrl + 'Not found'});
    res.status(400).send({url: req.originalUrl + 'Bad Request'});
    res.status(403).send({url: req.originalUrl + 'Forbidden'});
    res.status(401).send({url: req.originalUrl + 'Unauthorized'});

})

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});