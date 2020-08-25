exports.up = (knex) =>
	knex.schema.createTable('tb_writer', (table) => {

		table.increments('cd_writer');

		table.string('writer', 60).notNullable();
		table.text('writer_photo').notNullable();
	});

exports.down = (knex) => knex.schema.dropTable('tb_writer');