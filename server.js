const express = require('express');

const businessRouter = require('./business/business-router');

const server = express();

server.use(express.json());
server.use('/api/business', businessRouter);

module.exports = server;