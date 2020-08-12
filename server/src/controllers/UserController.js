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
  async show(request, response) {
    const { cd_user } = request.params;

    const user = await knex('tb_user')
      .where('cd_user', cd_user)
      .first()
      .select('name', 'email');

    if (!user) {
      return response.status(400).send({ error: 'User not found' });
    }

    return response.json({ user });
  }
  async delete(request, response) {
    const { cd_user } = request.params;

    try {
      const userVerification = await knex('tb_user')
        .where('cd_user', cd_user)
        .first()
        .select('cd_user');

      if (!userVerification) {
        return response.status(400).send({ error: 'User not found' });
      }

      await knex('tb_user')
        .where('cd_user', cd_user)
        .delete()

      return response.sendStatus(200).send({
        success: `successfully deleting the user with id ${cd_user}`
      });
    } catch (err) {

    }
  }
}

module.exports = UserController;
