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

      return response.status(201).json({
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
      console.log(err)

      return response.status(400).send({ error: 'error when deleting the record' })
    }
  }
  async update(request, response) {
    const { cd_user } = request.params

    const {
      name,
      email,
      password
    } = request.body

    try {
      const userVerification = await knex('tb_user')
        .where('cd_user', cd_user)
        .first()
        .select('cd_user')

      if (!userVerification) {
        return response.status(400).send({ success: 'User not found' })
      }

      await knex('tb_user').update({
        name,
        email,
        password
      }).where({ cd_user });

      return response.status(200).send({ ok: 'Updated successfully' })
    } catch (err) {
      console.log(err)
      response.status(400).send({ error: 'Failed to update' })
    }
  }
}

module.exports = UserController;
