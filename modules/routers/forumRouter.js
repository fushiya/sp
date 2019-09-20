const express = require('express');
const forumRouter = express.Router();
const Controllers = require('../controllers/all_controllers');

forumRouter.get('/gettheme', Controllers.themes.setTheme);
forumRouter.get('/c/:category/create', Controllers.themes.create);
forumRouter.get('/c/:category/t/:theme', Controllers.messenges.getMessege);
forumRouter.get('/c/:category', Controllers.themes.getTheme);
forumRouter.get('/', Controllers.categories.category);

module.exports = forumRouter;