const md5 = require('md5');

const knex = require('../models/connection');
const config = require('../config/config');
const emailService = require('../services/emailServices');

async function checkField(colum, field) {
  const fieldVerification = await knex('tb_user')
    .where(colum, field)
    .first()
    .select(colum)

  if (!fieldVerification) {
    return false;
  };

  return true;
};

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

    const encryptedPassword = md5(password + config.md5HashKey);

    const user = {
      name,
      email,
      password: encryptedPassword,
      birth,
      telephone,
      cpf,
      rg
    }

    const trx = await knex.transaction();

    const userEmailExisting = await checkField('email', email);

    if (userEmailExisting === true) {
      return response.status(409).send({ error: 'E-mail already registered !' })
    }

    try {
      await trx('tb_user').insert(user);
      await trx.commit();

      emailService.sendEmail(
        email,
        'gitsbooks@gmail.com',
        'Bem vindo ao git-book',
        `Olá ${name}, bem vindo ao Git-Book`,
        `Olá <strong>${name}</strong>, bem vindo ao Git-Book`,
      );

      return response.status(201).json({
        succes: 'Registered successfully',
        data: user,
      });
    } catch (err) {
      console.log(err);
      response.status(400).send({ error: 'Failed to register' });
    };
  };
  async show(request, response) {
    const { cd_user } = request.params;

    let userVerification = await checkField('cd_user', cd_user);

    if (userVerification === false) {
      return response.status(404).send({ success: 'User not found' })
    }

    const user = await knex('tb_user')
      .where('cd_user', cd_user)
      .first()
      .select('name', 'email');

    return response.json({ user });
  }
  async delete(request, response) {
    const { cd_user } = request.params;
    let userVerification;

    try {
      userVerification = await checkField('cd_user', cd_user);

      if (userVerification === false) {
        return response.status(404).send({ success: 'User not found' })
      }

      await knex('tb_user')
        .where('cd_user', cd_user)
        .delete()

      return response.sendStatus(200).send({
        success: `successfully deleting the user with id ${cd_user}`
      });
    } catch (err) {
      console.log(err);

      return response.status(400).send({ error: 'error when deleting the record' });
    }
  }
  async update(request, response) {
    const { cd_user } = request.params
    let userVerification;

    const {
      name,
      email,
      password
    } = request.body;

    try {
      userVerification = await checkField('cd_user', cd_user);

      if (userVerification === false) {
        return response.status(404).send({ success: 'User not found' });
      }

      await knex('tb_user').update({
        name,
        email,
        password
      }).where({ cd_user });

      return response.status(200).send({ success: 'Updated successfully' });
    } catch (err) {
      console.log(err);
      response.status(400).send({ error: 'Failed to update' });
    }
  }
}

module.exports = UserController;
