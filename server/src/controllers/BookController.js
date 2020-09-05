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
}

module.exports = BookController;
