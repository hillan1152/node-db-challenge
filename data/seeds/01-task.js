
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        { description: "Create four legs", completed: 1, project_id: 1 },
        { description: "Hammer on flat top", completed: 1, project_id: 1 },
        { description: "Polish off top", completed: 0, project_id: 1 }
      ]);
    });
};
