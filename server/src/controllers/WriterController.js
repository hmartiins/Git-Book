const knex = require('../models/connection');
const azureCreate = require('../services/azureBlobServiceCreate');
const checkField = require('../utils/checkFields');

class WriterController {
  async create(request, response) {
    const { writer, writer_photo } = request.body;

    const trx = await knex.transaction();

    try {
      const writerPhoto = azureCreate('writer-photo', writer_photo);

      await trx('tb_writer').insert({ writer, writer_photo: writerPhoto });
      await trx.commit();

      return response.status(201).json({
        succes: 'Registered successfully',
        data: writer_photo, writerPhoto,
      });
    } catch (err) {
      console.log(err);
      response.status(400).send({ error: 'Failed to register' });
    }
  }
  async show(request, response) {
    const { cd_writer } = request.parms;

    const writerVerification = await checkField('tb_writer', 'cd_writer', cd_writer);

    if (writerVerification === false) {
      return response.status(404).send({ success: 'Writer not found' });
    }

    const writer = await knex('tb_writer')
      .where('cd_writer', cd_writer)
      .first()
      .select('writer', 'writer_photo');

    return response.json({ writer });
  };

module.exports = WriterController;



