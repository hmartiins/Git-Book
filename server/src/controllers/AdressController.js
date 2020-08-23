const knex = require('../models/connection');
const config = require('../config/config');

class AdressController {
  async create(request, response) {
    const {
      cep,
      adress,
      comp_adress,
      id_user
    } = request.body;

    const userAdress = {
      cep,
      adress,
      comp_adress,
      id_user
    }

    const trx = await knex.transaction();

    try {
      await trx('tb_adress').insert(userAdress);
      await trx.commit();

      return response.status(201).json({
        succes: 'Adress registered successfully',
        data: userAdress,
      });
    } catch (err) {
      console.log(err);
      response.status(400).send({ error: 'Failed to register' })
    }
  }
}

module.exports = AdressController;
