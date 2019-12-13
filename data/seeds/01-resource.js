
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        { name: "Hammer", project_id: 1 },
        { name: "Nails", project_id: 1  },
        { name: "Polish", project_id: 1  }
      ]);
    });
};
