
exports.up = function(knex, Promise) {
    // LOGIC TO DEFINE OUR ACTIONS TABLE
    return knex.schema.createTable("actions", table => {
        table.increments('id')
        table.string('todo_description', 128)
            .notNullable()
        table.text('notes')
            .notNullable()
        table.boolean('completed')
            .defaultTo(false)
        table.integer("project_id")
            .unsigned()
            .references("id")
            .inTable("projects")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("actions")
};
