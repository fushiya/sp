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
const host = process.env.HOST || 'localhost';
const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroMongoose = require('admin-bro-mongoose');
const Controllers = require('./modules/controllers/all_controllers');
const Models = require('./modules/models/all_models');
AdminBro.registerAdapter(AdminBroMongoose);

app.set('views engine', 'pug');
app.use(express.static(__dirname + "/public"));

const db = [
    "mongodb://heroku_cxgbvbzp:jvdh5s76tninauh423kae60ku1@ds125525.mlab.com:25525/heroku_cxgbvbzp",
    "mongodb://localhost:27017/forum"
];

const adminBro = new AdminBro({
    databases: [],
    rootPath: '/admin',
    resources: [Models.users, Models.categories, Models.themes, Models.messenges],
});
const adminRouter = AdminBroExpress.buildRouter(adminBro);

mongoose.connect(db[1], { useNewUrlParser: true }, function(err){
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
      url: db[1],
    })
}));

app.use(adminBro.options.rootPath, Controllers.users.checkAdmin, adminRouter);
app.use('/users', Routers.users);
app.use('/post', Routers.post);
app.use('/forum', Routers.forum);
app.use('/', Routers.index);