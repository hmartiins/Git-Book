exports.up = (knex) =>
	knex.schema.createTable('tb_book_category', (table) => {

		table.integer('id_book').unsigned();
		table.foreign('id_book').references('cd_book').inTable('tb_book');
		table.integer('id_category').unsigned();
		table.foreign('id_category').references('cd_category').inTable('tb_category');
	});

exports.down = (knex) => knex.schema.dropTable('tb_book_category');