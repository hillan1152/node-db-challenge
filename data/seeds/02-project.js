
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        { name: "Create Table", resource_id: 1, completed: 0 },
        { name: "Create Table", resource_id: 2, completed: 0 },
        { name: "Create Table", resource_id: 3, completed: 0 },
      ]);
    });
};