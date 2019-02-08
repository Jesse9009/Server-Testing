const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.post('/users', (req, res) => {
  const user = { id: '1', name: 'Jesse' };
  const insert = item => {
    localStorage.setItem('1', item);
  };

  insert(user).then(res.status(201).json(user));
});

module.exports = server;
