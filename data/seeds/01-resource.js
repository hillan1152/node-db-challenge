
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        { name: "Hammer", description: "large"},
        { name: "Nails", description: "The pointy kind" },
        { name: "Polish", description: "expensive kind" }
      ]);
    });
};
