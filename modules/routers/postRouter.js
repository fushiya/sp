const express = require('express');
const Controllers = require('../controllers/all_controllers');
const jsonParser = express.json();
const postRouter = express.Router();

postRouter.post('/auth', jsonParser, Controllers.users.auth);

module.exports = postRouter;