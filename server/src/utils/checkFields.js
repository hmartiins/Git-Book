const knex = require('../models/connection');

async function checkField(tb_name, column, field) {
  const fieldVerification = await knex(tb_name)
    .where(column, field)
    .first()
    .select(column)

  return !fieldVerification ? false : true;
};

module.exports = checkField;
