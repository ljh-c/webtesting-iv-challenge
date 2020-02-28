const db = require('../database/db-config.js');

function getAll() {
  return db('article');
}

function getBy(filter) {
  return db('article')
    .where(filter);
}

async function add(user) {
  const [id] = await db('article')
    .insert(user)
    .returning('id');

  return getBy({ id }).first();
}

async function remove(id) {
  await db('article').where({ id }).del();
  
  return getAll();
}

module.exports = {
  getAll,
  getBy,
  add,
  remove
};