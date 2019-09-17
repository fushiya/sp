const express = require('express');
const indexRouter = express.Router();
const Controllers = require('../controllers/all_controllers');

indexRouter.get('/home', Controllers.index.home);
indexRouter.use('/', Controllers.index.index);

module.exports = indexRouter;