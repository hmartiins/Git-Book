exports.up = (knex) =>
	knex.schema.createTable('tb_book', (table) => {

		table.increments('cd_book');

		table.string('name', 120).notNullable();
		table.string('language', 30).notNullable();
		table.string('isbn', 13).notNullable();
		table.date('publishment').notNullable();
		table.decimal('height').notNullable();
		table.decimal('width').notNullable();
		table.decimal('weight').notNullable();
		table.integer('pages').notNullable();
		table.integer('amount').notNullable();
		table.decimal('value').notNullable();

		table.integer('id_publisher').unsigned();
		table.foreign('id_publisher').references('cd_publisher').inTable('tb_publisher');
		table.integer('id_writer').unsigned();
		table.foreign('id_writer').references('cd_writer').inTable('tb_writer');
	});

exports.down = (knex) => knex.schema.dropTable('tb_book');