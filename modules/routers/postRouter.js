const express = require('express');
const Controllers = require('../controllers/all_controllers');
const jsonParser = express.json();
const postRouter = express.Router();

postRouter.post('/auth', jsonParser, Controllers.users.auth);
postRouter.post('/register', jsonParser, Controllers.users.register);
postRouter.post('/addtheme', jsonParser, Controllers.themes.addTheme);
postRouter.post('/addmessege', jsonParser, Controllers.messenges.addMessege);
postRouter.post('/putuser', jsonParser, Controllers.users.putUsers);
postRouter.post('/delmsg', jsonParser, Controllers.messenges.delMesseges);
postRouter.post('/delthm', jsonParser, Controllers.themes.delThemes);


module.exports = postRouter;