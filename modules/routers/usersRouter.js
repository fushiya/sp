const express = require('express');
const usersRouter = express.Router();
const Controllers = require('../controllers/all_controllers');

usersRouter.get('/getuser', Controllers.users.getUsers);

module.exports = usersRouter;