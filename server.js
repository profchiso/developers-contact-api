//import required models
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Developer = require('./api/models/models');
const routes = require('./api/routes/routes');

const app = express(); //creating instance of express
const port= process.env.PORT  || 3000; // defining the port for the server to run on

mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);

mongoose.connect('mongodb://localhost:27017/DevelopersDB',{useNewUrlParser: true}); //connecting to local mongodb server
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());
routes(app);
//target the home route to avoid 404
app.get('/',(req,res)=>{res.send('Welcome to the home route')});
//handling some http error that may occur
app.use((req,res)=>{
    res.status(404).send({url: req.originalUrl + ' 404 Not found'});
    res.status(400).send({url: req.originalUrl + ' 400 Bad Request'});
    res.status(403).send({url: req.originalUrl + ' 403 Forbidden'});
    res.status(401).send({url: req.originalUrl + ' 401 Unauthorized'});

})

//make the app to listen and watch on the difined port
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});