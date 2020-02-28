
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('article').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('article').insert([
        {id: 1, title: 'Did you see that?', content: 'An elephant is in the street.'},
        {id: 2, title: 'My landlord is mean', content: 'Anyone looking for a roommate?'},
        {id: 3, title: 'I went to the sauna today', content: 'It was nice.'}
      ]);
    });
};
