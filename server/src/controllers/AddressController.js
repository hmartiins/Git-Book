const knex = require('../models/connection');

class AddressController {
  async create(request, response) {
    const {
      cep,
      street,
      house_number,
      district,
      comp_address,
      id_user
    } = request.body;

    const userAddress = {
      cep,
      street,
      house_number,
      district,
      comp_address,
      id_user
    };

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
  async show(request, response) {
    const { cd_user } = request.params;

    const userAdress = await knex('tb_address')
      .where('id_user', cd_user)
      .first()
      .select();

    return response.json({ userAdress });
  }
}

module.exports = AddressController;
