import Knex from 'knex';

//faz a alteração
export async function up(knex: Knex) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable(); //0 - domingo
        table.integer('from').notNullable(); //horário início
        table.integer('to').notNullable(); //horário fim
        
        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

//desfaz a alteração
export async function down(knex: Knex) {
    return knex.schema.dropTable('class_schedule');
}