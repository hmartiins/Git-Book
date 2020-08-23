const { Router } = require('express');

const routes = Router();

const UserController = require('./controllers/UserController');
const AdressController = require('./controllers/AdressController');

const userController = new UserController();
const adressController = new AdressController();

routes.post('/user', userController.create);
routes.get('/user/:cd_user', userController.show);
routes.delete('/user/:cd_user', userController.delete);
routes.put('/user/:cd_user', userController.update);

routes.post('/adress', adressController.create);

module.exports = routes;
