const knex = require('../models/connection');
const checkField = require('../utils/checkFields');

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

  async show(request, response) {
    const { cd_category } = request.params;

    const categoryVerification = await checkField('tb_category', 'cd_category', cd_category);

    if (categoryVerification === false) {
      return response.status(404).send({ success: 'Category not found' });
    }

    const category = await knex('tb_category')
      .where('cd_category', cd_category)
      .select('*')
      .first();

    return response.status(200).json(category);
  }

  async delete(request, response) {
    const { cd_category } = request.params;

    try {
      const categoryVerification = await checkField('tb_category', 'cd_category', cd_category);

      if (categoryVerification === false) {
        return response.status(404).send({ success: 'Category not found' });
      }

      await knex('tb_category').where('cd_category', cd_category).delete();

      return response.status(200).json({
        succes: `successfully deleting the category with id ${cd_category}`,
      });
    } catch (err) {
      console.log(err);
      response.status(400).send({
        error: 'Failed to delete',
        message: err.sqlMessage,
      });
    }
  }
}

module.exports = CategoryController;
