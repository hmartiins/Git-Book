const knex = require('../models/connection');

class AddressController {
  async create(request, response) {
    const {
      cep,
      address,
      comp_address,
      id_user
    } = request.body;

    const userAddress = {
      cep,
      address,
      comp_address,
      id_user
    }

    const trx = await knex.transaction();

    try {
      await trx('tb_address').insert(userAddress);
      await trx.commit();

      return response.status(201).json({
        succes: 'Address registered successfully',
        data: userAddress,
      });
    } catch (err) {
      console.log(err);
      response.status(400).send({ error: 'Failed to register' })
    }
  }
}

module.exports = AddressController;
