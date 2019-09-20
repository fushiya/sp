const express = require('express');
const session = require('express-session');
var cookieParser = require('cookie-parser');
const mongodb = require('mongodb');
var mongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const multer = require('multer');
const pug = require('pug');
const app = express();
var port = process.env.PORT || 3000;
const Routers = require('./modules/routers/all_routers');

app.set('views engine', 'pug');

app.use(express.static(__dirname + "/public"));

mongoose.connect("mongodb://localhost:27017/forum", { useNewUrlParser: true }, function(err){
    if(err) return console.log(err);
    app.listen(port, function(){
        console.log("OK...");
    });
});

app.use(cookieParser());
app.use(session({
    secret: 'summer_practic_job',
    resave: false,
    saveUninitialized: false,
    store: new mongoStore({ 
      url: 'mongodb://localhost:27017/forum',
    })
}));

app.use(multer({dest:"/public/img/avatars"}).single("filedata"));
app.use('/users', Routers.users);
app.use('/post', Routers.post);
app.use('/forum', Routers.forum);
app.use('/', Routers.index);