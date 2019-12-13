
exports.up = function(knex) {
  return knex.schema
    .createTable('task', tbl => {
        tbl.increments();

        tbl.string('description', 255)
            .notNullable();

        tbl.string('notes', 255);
        
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(0);
// MAKE SURE TO CHANGE THIS!!!
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('project')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
    .createTable('resource', tbl => {
        tbl.increments();

        tbl.string('name', 255)
            .notNullable();

        tbl.string('description', 255);
        
// MAKE SURE TO CHANGE THIS!!!
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('project')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
    .createTable('project', tbl => {
        tbl.increments();

        tbl.string('name', 255)
            .notNullable();

        tbl.string('description', 255);
        
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(0);
// MAKE SURE TO CHANGE THIS!!!
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resource')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project')
        .dropTableIfExists('resource')
        .dropTableIfExists('task');
};
