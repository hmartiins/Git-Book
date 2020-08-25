exports.up = (knex) =>
	knex.schema.createTable('tb_address', (table) => {

		table.increments('cd_address');

		table.string('cep', 8).notNullable();
		table.string('street').notNullable();
		table.string('house_number', 5).notNullable();
		table.string('district', 50).notNullable();
		table.string('comp_address', 5).notNullable();

		table.integer('id_user').unsigned();
		table.foreign('id_user').references('cd_user').inTable('tb_user');
	});

exports.down = (knex) => knex.schema.dropTable('tb_address');