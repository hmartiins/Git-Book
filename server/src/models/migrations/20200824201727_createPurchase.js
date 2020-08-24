exports.up = (knex) =>
	knex.schema.createTable('tb_purchase', (table) => {

		table.increments('cd_purchase');

		table.date('date').notNullable();
		table.decimal('total_value').notNullable();

		table.integer('id_user').unsigned();
		table.foreign('id_user').references('cd_user').inTable('tb_user');
	});

exports.down = (knex) => knex.schema.dropTable('tb_purchase');