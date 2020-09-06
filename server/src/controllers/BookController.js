const knex = require('../models/connection');
const checkField = require('../utils/checkFields');

class BookController {
  async create(request, response) {
    const {
      name,
      language,
      isbn,
      publishment,
      height,
      width,
      weight,
      pages,
      amount,
      value,
      id_publisher,
      id_writer
    } = request.body;

    const book = {
      name,
      language,
      isbn,
      publishment,
      height,
      width,
      weight,
      pages,
      amount,
      value,
      id_publisher,
      id_writer
    }

    const publisherVerification = await checkField(
      'tb_publisher',
      'cd_publisher',
      id_publisher
    );
    const writerVerification = await checkField(
      'tb_writer',
      'cd_writer',
      id_writer
    );

    if (publisherVerification === false || writerVerification === false) {
      return response.status(404).send({ success: 'Writer or publisher not found' });
    }

    const isbnVerification = await checkField(
      'tb_book',
      'isbn',
      isbn
    );

    if (isbnVerification === true) {
      return response.status(409).send({ success: 'IBSN duplicated' });
    }

    const trx = await knex.transaction();

    try {
      await knex('tb_book').insert(book);
      await trx.commit();

      return response.status(201).json({
        succes: 'Registered successfully',
        data: book,
      });
    } catch (err) {
      console.log(err);
      response.status(400).send({ error: 'Failed to register' });
    }
  }
  async show(request, response) {
    const { cd_book } = request.params;

    const bookVerification = await checkField('tb_book', 'cd_book', cd_book);

    if (bookVerification === false) {
      return response.status(404).send({ warning: 'book not found' });
    }

    const book = await knex('tb_book').where('cd_book', cd_book).first().select();

    return response.json({ book });
  }
  async delete(request, response) {
    const { cd_book } = request.params;

    try {
      const bookVerification = await checkField('tb_book', 'cd_book', cd_book);

      if (bookVerification === false) {
        return response.status(404).send({ warning: 'book not found' });
      }

      await knex('tb_book').where('cd_book', cd_book).delete();

      return response.sendStatus(200).send({
        success: `successfully deleting the book with id ${cd_book}`,
      });
    } catch (err) {
      console.log(err);
      return response.status(400).send({ error: 'error when deleting the record' });
    }
  }
  async index(request, response) {
    try {
      const books = await knex('tb_book').select('*');

      return response.status(200).json(books);
    } catch (err) {
      console.log(err);
      return response.status(400).send({ error: 'error when deleting the record' });
    }
  }
}

module.exports = BookController;
