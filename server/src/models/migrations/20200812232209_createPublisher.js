exports.up = (knex) =>
	knex.schema.createTable('tb_publisher', (table) => {

		table.increments('cd_publisher');

		table.string('publisher', 40).notNullable();
		table.string('publisher_logo', 50).notNullable();
	});

exports.down = (knex) => knex.schema.dropTable('tb_publisher');