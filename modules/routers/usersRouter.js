const express = require('express');
const usersRouter = express.Router();
const Controllers = require('../controllers/all_controllers');

usersRouter.get('/cabinet', Controllers.users.cabinet);
usersRouter.get('/signout', Controllers.users.signout);
usersRouter.get('/signon', Controllers.users.signon);

module.exports = usersRouter;