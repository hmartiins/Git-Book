exports.up = (knex) =>
	knex.schema.createTable('tb_category', (table) => {

		table.increments('cd_category');

		table.string('category', 30).notNullable();
		table.text('category_description').notNullable();
	});

exports.down = (knex) => knex.schema.dropTable('cd_category');