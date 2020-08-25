exports.up = (knex) =>
	knex.schema.createTable('tb_publisher', (table) => {

		table.increments('cd_publisher');

		table.string('publisher', 30).notNullable();
		table.text('publisher_logo').notNullable();
	});

exports.down = (knex) => knex.schema.dropTable('tb_publisher');