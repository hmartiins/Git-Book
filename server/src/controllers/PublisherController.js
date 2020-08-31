const knex = require('../models/connection');
const config = require('../config/config');
const azure = require('azure-storage');
const crypto = require('crypto');

class PublisherController {
  async create(request, response) {
    const {
      publisher
    } = request.body;

    const trx = await knex.transaction();

    try {
      const blobService = azure.createBlobService(config.containerConnectionString);

      let fileName = crypto.randomBytes(20).toString('hex') + '.png';
      const rawDataImage = request.body.image;
      const matches = rawDataImage.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      const type = matches[1];
      const buffer = new Buffer.from(matches[2], 'base64');
      let publisher_logo = 'https://gitbook.blob.core.windows.net/publisher-logo/' + fileName;

      blobService.createBlockBlobFromText('publisher-logo', fileName, buffer, {
        contentType: type
      }, (err, result, response) => {
        if (err) {
          fileName = 'default-publisher.png'
        }
      });

      await trx('tb_publisher').insert({ publisher, publisher_logo });
      await trx.commit();

      return response.status(201).json({
        succes: 'Registered successfully',
        data: publisher, publisher_logo,
      });
    } catch (err) {
      console.log(err);
      response.status(400).send({ error: 'Failed to register' });
    }

  }
  async show(request, response) {
    const { cd_publisher } = request.params;

    const publisher = await knex('tb_publisher')
      .where('cd_publisher', cd_publisher)
      .first()
      .select();

    return response.json({ publisher });
  }

  async update(request, response) {
    const { cd_publisher } = request.params;

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
}

module.exports = PublisherController;
