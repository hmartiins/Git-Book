const { Router } = require('express');

const routes = Router();

const UserController = require('./controllers/UserController');

const userController = new UserController();

routes.post('/user', userController.create);
routes.get('/user/:cd_user', userController.show);
routes.delete('/user/:cd_user', userController.delete);
routes.put('/user/:cd_user', userController.update);

module.exports = routes;
