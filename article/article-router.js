const Article = require('./article-model.js');

const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.status(200).json(await Article.getAll());
  }
  catch ({ message, stack, code }) {
    res.status(500).json({ message, stack, code });
  }
})

router.post('/', async (req, res) => {
  try {
    res.status(201).json(await Article.add(req.body));
  }
  catch ({ message, stack, code }) {
    res.status(500).json({ message, stack, code });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    res.status(200).json(await Article.remove(id));
  }
  catch ({ message, stack, code}) {
    res.status(500).json({ message, stack, code });
  }
});

module.exports = router;