exports.up = (knex) =>
	knex.schema.createTable('tb_writer', (table) => {

		table.increments('cd_writer');

		table.string('writer', 60).notNullable();
		table.string('writer_photo', 45).notNullable();
	});

exports.down = (knex) => knex.schema.dropTable('tb_writer');