const express = require('express');

const db = require('./data/dbConfig');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/users', async (req, res) => {
  const response = await db('users');
  res.status(200).json(response);
});

server.post('/users', async (req, res) => {
  const user = req.body;
  if (user.name) {
    const response = await db('users').insert(user);
    res.status(201).json(response);
  } else {
    res.status(400).json({ error: 'Please enter user data' });
  }
});

module.exports = server;
