exports.up = (knex) =>
	knex.schema.createTable('tb_coupon', (table) => {

		table.increments('cd_coupon');

		table.string('coupon', 60).notNullable();
		table.date('coupon_expiration').notNullable();
		table.date('coupon_creation').notNullable();
		table.decimal('coupon_value').notNullable();
	});

exports.down = (knex) => knex.schema.dropTable('tb_coupon');