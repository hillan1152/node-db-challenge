
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('full_project')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('full_project').insert([
        { project_id: 1, resource_id: 1 },

      ]);
    });
};

