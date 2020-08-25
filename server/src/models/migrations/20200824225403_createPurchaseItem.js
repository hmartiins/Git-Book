exports.up = (knex) =>
	knex.schema.createTable('tb_purchase_item', (table) => {

		table.integer('quantity').notNullable();
		table.decimal('value').notNullable();

		table.integer('id_book').unsigned();
		table.foreign('id_book').references('cd_book').inTable('tb_book');
		table.integer('id_purchase').unsigned();
		table.foreign('id_purchase').references('cd_purchase').inTable('tb_purchase');
	});

exports.down = (knex) => knex.schema.dropTable('tb_purchase_item');