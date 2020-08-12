const { Router } = require('express');

const routes = Router();

const UserController = require('./controllers/UserController');

const userController = new UserController();

routes.post('/user', userController.create);

module.exports = routes;
