const knex = require('../models/connection');

class CategoryController {
  async create(request, response) {
    const { category, category_description } = request.body;

    const categoryObj = {
      category,
      category_description,
    };

    const trx = await knex.transaction();

    try {
      await trx('tb_category').insert(categoryObj);
      await trx.commit();

      return response.status(201).json({
        succes: 'Registered successfully',
        data: categoryObj,
      });
    } catch (err) {
      console.log(err);
      response.status(400).send({
        error: 'Failed to register',
        message: err.sqlMessage,
      });
    }
  }

  async index(request, response) {
    try {
      const categories = await knex('tb_category').select('*');
      return response.status(200).json(categories);
    } catch (err) {}
  }
}

module.exports = CategoryController;
