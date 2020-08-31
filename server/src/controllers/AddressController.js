const knex = require('../models/connection');
const checkField = require('../utils/checkFields');

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

    const userVerification = await checkField('tb_user', 'cd_user', cd_user);

    if (userVerification === false) {
      return response.status(404).send({ success: 'User not found' })
    }

    try {
      await trx('tb_address').insert(userAddress);
      await trx.commit();

      return response.status(201).json({
        succes: 'Address registered successfully',
        data: userAddress,
      });
    } catch (err) {
      console.log(err);
      response.status(400).send({ error: 'Failed to register' });
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
  async update(request, response) {
    const { id_user } = request.params;

    const {
      cep,
      street,
      house_number,
      district,
      comp_address,
    } = request.body;

    try {
      await knex('tb_address').update({
        cep,
        street,
        house_number,
        district,
        comp_address,
      }).where({ id_user });

      return response.status(200).send({ success: 'Updated successfully' });
    } catch (err) {
      console.log(err);
      response.status(400).send({ error: 'Failed to register' })
    };
  }
  async delete(request, response) {
    const { id_user } = request.params;

    try {
      await knex('tb_address')
        .where('id_user', id_user)
        .delete()

      return response.sendStatus(200).send({
        success: `successfully deleting the user with id ${id_user}`
      });
    } catch (err) {
      console.log(err);

      return response.status(400).send({ error: 'Error when deleting the record' });
    }
  }
}

module.exports = AddressController;
