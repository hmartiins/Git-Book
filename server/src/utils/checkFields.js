const knex = require('../models/connection');

async function checkField(column, field) {
  const fieldVerification = await knex('tb_user')
    .where(column, field)
    .first()
    .select(column)

  return !fieldVerification ? false : true;
};

module.exports = checkField;
