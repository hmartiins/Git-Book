exports.up = (knex) =>
	knex.schema.createTable('tb_adress', (table) => {

		table.increments('cd_adress');

		table.string('cep', 20).notNullable();
		table.string('adress', 100).notNullable().unique();
		table.string('comp_adress', 10).notNullable();
		table.integer('id_user').unsigned();
		table.foreign('id_user').references('cd_user').inTable('tb_user');
	});

exports.down = (knex) => knex.schema.dropTable('tb_adress');