
exports.up = function(knex) {
  return knex.schema
    .createTable('project', tbl => {
        tbl.increments();

        tbl.string('name', 255)
            .notNullable();

        tbl.string('description', 255);
        
        tbl.boolean('completed')
})
    .createTable('resource', tbl => {
        tbl.increments();

        tbl.string('name', 255)
            .notNullable();

        tbl.string('description', 255);
})
    .createTable('task', tbl => {
        tbl.increments();

        tbl.string('description', 255)
            .notNullable();

        tbl.string('notes', 255);
        
        tbl.boolean('completed')

// MAKE SURE TO CHANGE THIS!!!
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('project')
            .onUpdate('RESTRICT')
            .onDelete('CASCADE');
    })
    .createTable('full_project', tbl => {
        tbl.increments();
        
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('project')
        .onUpdate('RESTRICT')
        .onDelete('CASCADE');

        tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resource')
        .onUpdate('RESTRICT')
        .onDelete('CASCADE');
    })

};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('full_project')
        .dropTableIfExists('task')
        .dropTableIfExists('resource')
        .dropTableIfExists('project');
};
