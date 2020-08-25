exports.up = (knex) =>
	knex.schema.createTable('tb_user', (table) => {

		table.increments('cd_user');

		table.string('name', 60).notNullable();
		table.string('email').notNullable().unique();
		table.text('password').notNullable();
		table.date('birth').notNullable();
		table.string('telephone', 15).notNullable();
		table.string('cpf', 12).unique();
		table.string('rg', 12).unique();
	});

exports.down = (knex) => knex.schema.dropTable('tb_user');