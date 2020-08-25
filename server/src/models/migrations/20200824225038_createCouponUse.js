exports.up = (knex) =>
    knex.schema.createTable('tb_coupon_use', (table) => {

        table.integer('id_coupon').unsigned();
        table.foreign('id_coupon').references('cd_coupon').inTable('tb_coupon');
        table.integer('id_purchase').unsigned();
        table.foreign('id_purchase').references('cd_purchase').inTable('tb_purchase');
    });

exports.down = (knex) => knex.schema.dropTable('tb_coupon_use');