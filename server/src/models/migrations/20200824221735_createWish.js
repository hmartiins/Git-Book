exports.up = (knex) =>
	knex.schema.createTable('tb_wish', (table) => {

		table.integer('id_book').unsigned();
		table.foreign('id_book').references('cd_book').inTable('tb_book');
		table.integer('id_user').unsigned();
		table.foreign('id_user').references('cd_user').inTable('tb_user');
	});

exports.down = (knex) => knex.schema.dropTable('tb_wish');