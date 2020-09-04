const { Router } = require('express');

const routes = Router();

const auth = require('./services/authServices');

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
routes.get('/address/:id_user', addressController.show);
routes.delete('/address/:id_user', addressController.delete);
routes.put('/address/:id_user', addressController.update);

routes.post('/publisher', publisherController.create);
routes.get('/publisher/:cd_publisher', publisherController.show);
routes.delete('/publisher/:cd_publisher', publisherController.delete);
routes.put('/publisher/:cd_publisher', publisherController.update);

module.exports = routes;
