const express = require('express');
const usersRouter = express.Router();
const Controllers = require('../controllers/all_controllers');

usersRouter.get('/getuser', Controllers.users.getUsers);
usersRouter.get('/cabinet', Controllers.users.cabinet);
usersRouter.get('/signout', Controllers.users.signout);

module.exports = usersRouter;