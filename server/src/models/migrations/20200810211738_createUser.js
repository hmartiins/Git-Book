exports.up = (knex) =>
  knex.schema.createTable('tb_user', (table) => {
    table.increments('cd_user');

    table.string('name', 45).notNullable();
    table.string('email', 100).notNullable().unique();
    table.string('password').notNullable();

    table.date('birth');
    table.string('telephone', 25).notNullable();
    table.string('cpf', 45).notNullable().unique();
    table.string('rg', 45).notNullable().unique();
  });


exports.down = (knex) => knex.schema.dropTable('tb_user');
