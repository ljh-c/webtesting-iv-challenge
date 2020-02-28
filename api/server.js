require('dotenv').config();

const express = require('express');

const articleRouter = require('../article/article-router.js');

const server = express();

server.use(express.json());

server.use('/api/articles', articleRouter);

server.get('/', (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;