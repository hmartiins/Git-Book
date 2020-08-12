const { request, response } = require('express');
const knex = require('../models/connection');

class UserController {
  async create(request, response) {
    const {
      name,
      email,
      password,
      birth,
      telephone,
      cpf,
      rg
    } = request.body;

    const user = {
      name,
      email,
      password,
      birth,
      telephone,
      cpf,
      rg
    }

    const trx = await knex.transaction();

    try {
      await trx('tb_user').insert(user);
      await trx.commit();

      return response.status(200).json({
        succes: 'Registered successfully',
        data: user,
      })
    } catch (err) {
      console.log(err);
      response.status(400).send({ error: 'Failed to register' })
    }
  }

}

module.exports = UserController;
