
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        { name: "Create Table", completed: 0, resource_id: 1 }
      ]);
    });
};