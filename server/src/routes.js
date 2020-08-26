const { Router } = require('express');

const routes = Router();

const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const PublisherController = require('./controllers/PublisherController');

const userController = new UserController();
const addressController = new AddressController();
const publisherController = new PublisherController();

routes.post('/user', userController.create);
routes.get('/user/:cd_user', userController.show);
routes.delete('/user/:cd_user', userController.delete);
routes.put('/user/:cd_user', userController.update);

routes.post('/address', addressController.create);

routes.post('/publisher', publisherController.create);

module.exports = routes;
