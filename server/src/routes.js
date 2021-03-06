const { Router } = require('express');

const routes = Router();

const auth = require('./services/authServices');

const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const PublisherController = require('./controllers/PublisherController');
const WriterController = require('./controllers/WriterController');
const BookController = require('./controllers/BookController');
const CategoryController = require('./controllers/CategoryController');

const userController = new UserController();
const addressController = new AddressController();
const publisherController = new PublisherController();
const writerController = new WriterController();
const bookController = new BookController();
const categoryController = new CategoryController();

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

routes.post('/writer', writerController.create);
routes.get('/writer/:cd_writer', writerController.show);
routes.delete('/writer/:cd_writer', writerController.delete);
routes.put('/writer/:cd_writer', writerController.update);

routes.post('/book', bookController.create);
routes.get('/book/:cd_book', bookController.show);
routes.delete('/book/:cd_book', bookController.delete);
routes.get('/book', bookController.index);
routes.put('/book/:cd_book', bookController.update);
routes.get('/book/showByPages/:pages', bookController.showBookByPages);

routes.post('/category', categoryController.create);
routes.get('/category/:cd_category', categoryController.show);
routes.get('/category', categoryController.index);
routes.delete('/category/:cd_category', categoryController.delete);

module.exports = routes;
