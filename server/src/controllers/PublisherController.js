const knex = require('../models/connection');
const azureCreate = require('../services/azureBlobServiceCreate');

class PublisherController {
  async create(request, response) {
    const {
      publisher,
      image
    } = request.body;

    const trx = await knex.transaction();

    try {
      const publisherLogo = azureCreate('publisher-logo', image);

      await trx('tb_publisher').insert({ publisher, publisher_logo: publisherLogo });
      await trx.commit();

      return response.status(201).json({
        succes: 'Registered successfully',
        data: publisher, publisherLogo,
      });
    } catch (err) {
      console.log(err);
      response.status(400).send({ error: 'Failed to register' });
    }

  }
  async show(request, response) {
    const { cd_publisher } = request.params;

    const publisherVerification = await checkField(
      'tb_publisher',
      'cd_publisher',
      cd_publisher
    );

    if (publisherVerification === false) {
      return response.status(404).send({ success: 'Publisher not found' })
    }

    const publisher = await knex('tb_publisher')
      .where('cd_publisher', cd_publisher)
      .first()
      .select();

    return response.json({ publisher });
  }

  async update(request, response) {
    const { cd_publisher } = request.params;

    const publisherVerification = await checkField(
      'tb_publisher',
      'cd_publisher',
      cd_publisher
    );

    if (publisherVerification === false) {
      return response.status(404).send({ success: 'Publisher not found' })
    }

    const {
      publisher,
      publisher_logo
    } = request.body;

    try {
      await knex('tb_publisher').update({
        publisher,
        publisher_logo // needs to check how to update in azure
      }).where({ cd_publisher });

      return response.status(200).send({ success: 'Updated successfully' });
    } catch (err) {
      console.log(err);
      response.status(400).send({ error: 'Failed to register' })
    };
  }
  async delete(request, response) {
    const { cd_publisher } = request.params;

    const publisherVerification = await checkField(
      'tb_publisher',
      'cd_publisher',
      cd_publisher
    );

    if (publisherVerification === false) {
      return response.status(404).send({ success: 'Publisher not found' })
    }

    try {
      await knex('tb_publisher')
        .where('cd_publisher', cd_publisher)
        .delete()

      return response.sendStatus(200).send({
        success: `successfully deleting the publisher address with id ${cd_publisher}`
      });
    } catch (err) {
      console.log(err);

      return response.status(400).send({ error: 'Error when deleting the record' });
    }
  }
}

module.exports = PublisherController;
