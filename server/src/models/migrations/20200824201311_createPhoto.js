exports.up = (knex) =>
	knex.schema.createTable('tb_photo', (table) => {

		table.increments('cd_photo');

		table.text('name').notNullable();

		table.integer('id_book').unsigned();
		table.foreign('id_book').references('cd_book').inTable('tb_book');
	});

exports.down = (knex) => knex.schema.dropTable('tb_photo');