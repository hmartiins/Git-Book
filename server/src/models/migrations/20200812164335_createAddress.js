exports.up = (knex) =>
	knex.schema.createTable('tb_address', (table) => {

		table.increments('cd_address');

		table.string('cep', 20).notNullable();
		table.string('address', 100).notNullable();
		table.string('comp_address', 10).notNullable();
		table.integer('id_user').unsigned();
		table.foreign('id_user').references('cd_user').inTable('tb_user');
	});

exports.down = (knex) => knex.schema.dropTable('tb_address');