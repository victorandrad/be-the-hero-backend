const express = require('express');

const routes = require('./routes');
const server = express();
const cors = require('cors');
const {errors} = require('celebrate');

server.use(cors());
server.use(express.json());
server.use(routes);
server.use(errors());

server.listen(3333);